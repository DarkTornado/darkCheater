/*
Dark Cheater Addon - The Seed
© 2016 Dark Tornado, All rights reserved.
Dark Cheater의 애드온(?)입니다.
카디널의 하향버전입니다.
이건 2차 공유를 허용합니다.
다크 치터 1.7.3 이상의 버전과 연동 가능.
*/


const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();


var btn = null;
var menu = null;
var linkOn = false;
var holoDark = android.app.AlertDialog.THEME_HOLO_DARK;
var white = android.graphics.Color.WHITE;
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var maxEnt = 0;
var kickNames = [];
var kickArray = [];
var fixSendChat = false;
var anti = [false, false, false, false, false, false, false, false, false, false, false];
var t = {t : 0, x : [], y : [], z : [], s : []};
var antiChatData = [];
var kickLog = "";


var Dark = {
toast : function(msg){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
var toast = android.widget.Toast.makeText(ctx, "<Dark> "+msg, android.widget.Toast.LENGTH_LONG);
toast.show();
}
}));
},
save : function(name, msg){
try{
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/"+name+".txt");
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String(msg);
fos.write(str.getBytes());
fos.close();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
},
read : function(name){
try{
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/"+name+".txt");
if(!(file.exists())) return "";
var fis = new java.io.FileInputStream(file);
var isr = new java.io.InputStreamReader(fis);
var br = new java.io.BufferedReader(isr);
var str = br.readLine();
var line = "";
while((line = br.readLine()) != null){
str += "\n" + line;
}
fis.close();
isr.close();
br.close();
return str;
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
},
getTime : function(n){
var day = new Date();
return day.getHours()+"시 "+day.getMinutes()+"분 "+day.getSeconds()+"초";
}


};


function dip2px(ctx, dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);
}


function darkMessage(msg, tf){
if(tf){
var pe = Player.getEntity();
var pn = Player.getName(pe);
Entity.setNameTag(pe, "");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("<Dark> "+msg);
if(fixSendChat) clientMessage("<Dark> "+msg);
Entity.setNameTag(pe, pn);
}
else{
clientMessage("<Dark> "+msg);
}

}


function procCmd(cmd){
if(cmd=="link off"&&linkOn){
linkOn = false;
Dark.toast("연동이 풀렸습니다.");
Dark.save("seedLink", false);
makeButton(true);
}

}


function leaveGame(){
worldEditMenu(false);
}


function checkLink(){
if(linkOn){
new java.lang.Thread({
run : function(){
try{
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/theSeed.txt");
if(file.exists()){
if(Dark.read("theSeed")=="true"&&btn==null) makeButton(true);
else if(Dark.read("theSeed")=="false"&btn!=null) 
makeButton(false);
file.delete();
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
java.lang.Thread.sleep(100);
checkLink();
}
}).start();
}
}


function makeButton(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(tf){
btn = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("Seed");
button.setTextSize(15);
button.setBackgroundColor(android.graphics.Color.argb(70, 0, 0, 0));
button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
if(menu==null) openSeed(true);
else openSeed(false);
}
}));
var longTouchCheck = false;
button.setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick: function(v){
longTouchCheck = true;
return true;
}
}));
button.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function(v, ev) {
try{
if(longTouchCheck){
switch(ev.action){
case android.view.MotionEvent.ACTION_MOVE : 
btn.update(ev.getRawX(), ev.getRawY(), btn.getWidth(), btn.getHeight());
break;
case android.view.MotionEvent.ACTION_UP : 
longTouchCheck = false;
break;
}
}
return false;
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
layout.addView(button);
btn.setContentView(layout);
btn.setWidth(dip2px(ctx, 45));
btn.setHeight(dip2px(ctx, 27));
btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, dip2px(ctx, 150), dip2px(ctx, 70));
}
else{
if(btn!=null){
btn.dismiss();
btn = null;
}
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


if(Dark.read("seedLink")=="true"){
linkOn = true;
checkLink();
}


function newLevel(){
if(Dark.read("seedLink")!="true"){
makeButton(true);
}

}


function leaveGame(){
if(Dark.read("seedLink")!="true"){
makeButton(false);
}
openSeed(false);

}


function openSeed(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(tf){
menu = new android.widget.PopupWindow();
var title = new android.widget.TextView(ctx);
title.setText("The Seed\n");
title.setTextSize(20);
title.setTextColor(white);
title.setGravity(android.view.Gravity.CENTER);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var link = new android.widget.ToggleButton(ctx);
link.setTextOn("Dark Cheater와 연동");
link.setTextOff("Dark Cheater와 연동");
link.setTextColor(white);
if(Dark.read("seedLink")=="true") link.setChecked(true);
else link.setChecked(false);
link.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
linkOn = onoff;
if(onoff){
checkLink();
Dark.save("seedLinkAlert", true);
makeButton(false);
}
else{
Dark.toast("연동이 풀렸습니다.");
if(btn==null) makeButton(true);
}
Dark.save("seedLink", onoff);
}
}));
layout.addView(link);
var nsc = new android.widget.ToggleButton(ctx);
nsc.setTextOn("네이티브 센드챗 부활");
nsc.setTextOff("네이티브 센드챗 부활");
nsc.setTextColor(white);
nsc.setChecked(fixSendChat);
nsc.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
fixSendChat = onoff;
}
}));
layout.addView(nsc);
var btns = new Array();
var menus = ["최대 엔티티 수 제한", "자동 킥 설정", "자동 킥 해제", "자동 킥 기록", "도움말", "나가기"];
for(var n in menus){
btns[n] = new android.widget.Button(ctx);
btns[n].setText(menus[n]);
btns[n].setBackgroundColor(setBtnColor());
btns[n].setTextColor(white);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
switch(v.getId()){
case 0 : 
inputMaxEntity();
Dark.toast("0은 무제한 입니다.");
break;
case 1 : 
antiDialog();
break;
case 2 : 
kickDialog();
Dark.toast("플레이어를 선택하시면 자동 강퇴가 해제됩니다.");
break;
case 3 : 
showDialog();
break;
case 4 : 
helpDialog();
break;
case 5 : 
menu.dismiss();
menu = null;
break;
}
}
});
layout.addView(btns[n]);
}
var scroll = new android.widget.ScrollView(ctx);
var pad = dip2px(ctx, 3);
scroll.setPadding(pad, pad, pad, pad);
scroll.addView(layout);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menu.setContentView(layout2);
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(70, 0, 0, 0)));
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/3);
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP, 0, 0);
}
else{
if(menu!=null){
menu.dismiss();
menu = null;
}
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function inputMaxEntity(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc2 = new android.widget.EditText(ctx);
loc2.setText(maxEnt+"")
loc2.setHint("최대 엔티티 수를 입력하세요...");
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("최대 엔티티 수 입력");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
maxEnt = Number(loc2.getText());
}
}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function antiDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var types = ["라이터 사용", "물 양동이 사용", "용암 양동이 사용", "베드락 설치", "투명 베드락 설치", "거미줄 설치", "불 설치", "물 설치", "용암 설치", "TNT 설치", "채팅창 도배"];
var checks = new Array();
for(var n in types){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(types[n]);
checks[n].setId(n);
checks[n].setTextColor(white);
checks[n].setChecked(anti[n]);
checks[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
anti[check.getId()] = onoff;
}
}));
layout.addView(checks[n]);
}
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout),
dialog.setView(scroll);
dialog.setTitle("자동 추방 대상 행위 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function kickDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setItems(kickNames, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
Dark.toast("자동강퇴가 해제되었습니다. ("+kickNames[w]+")");
kickNames.splice(w, 1);
kickArray.splice(w, 1);
}
}));
dialog.setTitle("자동 강퇴 대상자 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function showDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("자동 강퇴 기록");
dialog.setMessage(kickLog);
dialog.setNegativeButton("닫기",null);
dialog.show();
}
catch(e) {
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function helpDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var text = new android.widget.TextView(ctx);
text.setText("이 스크립트는 자동 서버 관리 스크립트인 카디널의 하향버전입니다. Dark Cheater 1.7.3 이상과 연동이 가능하며, 명령어 \"/link off\"로도 연동을 해제할 수 있습니다.\n최대 엔티티 수 제한과 테러범 자동 추방/밴이 가능합니다.");
text.setTextColor(white);
text.setTextSize(17);
layout.addView(text);
var maker = new android.widget.TextView(ctx);
maker.setText("\n© 2016 Dark Tornado, All rights reserved.\n");
maker.setTextSize(11);
maker.setTextColor(white);
maker.setGravity(android.view.Gravity.CENTER);
layout.addView(maker);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
dialog.setTitle("도움말");
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("닫기",null);
dialog.show();
}
catch(e) {
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function useItem(x, y, z, i, b, s, it, bd){
var pe = Player.getEntity();
if(anti[0]&&i==259){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(t.t==0) t.t = 3;
kickLog += "["+Dark.getTime()+"] 닉네임 : "+Player.getName(pe)+", 사유 : 라이터 사용 시도\n";
darkMessage("테러로 인해 "+Player.getName(pe)+"의 접속을 블록런처 종료 시점까지 차단합니다.", true);
kickArray.push(pe);
kickNames.push(Player.getName(pe));
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1000);
Entity.remove(pe);
}
}).start();
}
if(anti[1]&&i==325&&it==9){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(t.t==0) t.t = 3;
kickLog += "["+Dark.getTime()+"] 닉네임 : "+Player.getName(pe)+", 사유 : 물 양동이 사용 시도\n";
darkMessage("테러로 인해 "+Player.getName(pe)+"의 접속을 블록런처 종료 시점까지 차단합니다.", true);
kickArray.push(pe);
kickNames.push(Player.getName(pe));
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1000);
Entity.remove(pe);
}
}).start();
}
if(anti[2]&&i==325&&it==11){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(t.t==0) t.t = 3;
kickLog += "["+Dark.getTime()+"] 닉네임 : "+Player.getName(pe)+", 사유 : 용암 양동이 사용 시도\n";
darkMessage("테러로 인해 "+Player.getName(pe)+"의 접속을 블록런처 종료 시점까지 차단합니다.", true);
kickArray.push(pe);
kickNames.push(Player.getName(pe));
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1000);
Entity.remove(pe);
}
}).start();
}
if(anti[3]&&i==7){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(t.t==0) t.t = 3;
kickLog += "["+Dark.getTime()+"] 닉네임 : "+Player.getName(pe)+", 사유 : 베드락 설치 시도\n";
darkMessage("테러로 인해 "+Player.getName(pe)+"의 접속을 블록런처 종료 시점까지 차단합니다.", true);
kickArray.push(pe);
kickNames.push(Player.getName(pe));
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1000);
Entity.remove(pe);
}
}).start();
}
if(anti[4]&&i==95){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(t.t==0) t.t = 3;
kickLog += "["+Dark.getTime()+"] 닉네임 : "+Player.getName(pe)+", 사유 : 투명 베드락 설치 시도\n";
darkMessage("테러로 인해 "+Player.getName(pe)+"의 접속을 블록런처 종료 시점까지 차단합니다.", true);
kickArray.push(pe);
kickNames.push(Player.getName(pe));
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1000);
Entity.remove(pe);
}
}).start();
}
if(anti[5]&&i==30){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(t.t==0) t.t = 3;
kickLog += "["+Dark.getTime()+"] 닉네임 : "+Player.getName(pe)+", 사유 : 거미줄 설치 시도\n";
darkMessage("테러로 인해 "+Player.getName(pe)+"의 접속을 블록런처 종료 시점까지 차단합니다.", true);
kickArray.push(pe);
kickNames.push(Player.getName(pe));
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1000);
Entity.remove(pe);
}
}).start();
}
if(anti[6]&&i==51){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(t.t==0) t.t = 3;
kickLog += "["+Dark.getTime()+"] 닉네임 : "+Player.getName(pe)+", 사유 : 불 설치 시도\n";
darkMessage("테러로 인해 "+Player.getName(pe)+"의 접속을 블록런처 종료 시점까지 차단합니다.", true);
kickArray.push(pe);
kickNames.push(Player.getName(pe));
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1000);
Entity.remove(pe);
}
}).start();
}
if(anti[7]&&(i==8||i==9)){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(t.t==0) t.t = 3;
kickLog += "["+Dark.getTime()+"] 닉네임 : "+Player.getName(pe)+", 사유 : 물 설치 시도\n";
darkMessage("테러로 인해 "+Player.getName(pe)+"의 접속을 블록런처 종료 시점까지 차단합니다.", true);
kickArray.push(pe);
kickNames.push(Player.getName(pe));
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1000);
Entity.remove(pe);
}
}).start();
}
if(anti[8]&&(i==10||i==11)){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(t.t==0) t.t = 3;
kickLog += "["+Dark.getTime()+"] 닉네임 : "+Player.getName(pe)+", 사유 : 용암 설치 시도\n";
darkMessage("테러로 인해 "+Player.getName(pe)+"의 접속을 블록런처 종료 시점까지 차단합니다.", true);
kickArray.push(pe);
kickNames.push(Player.getName(pe));
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1000);
Entity.remove(pe);
}
}).start();
}
if(anti[9]&&i==46){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(t.t==0) t.t = 3;
kickLog += "["+Dark.getTime()+"] 닉네임 : "+Player.getName(pe)+", 사유 : TNT 설치 시도\n";
darkMessage("테러로 인해 "+Player.getName(pe)+"의 접속을 블록런처 종료 시점까지 차단합니다.", true);
kickArray.push(pe);
kickNames.push(Player.getName(pe));
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1000);
Entity.remove(pe);
}
}).start();
}


}


function modTick(){
if(t.t>0){
t.t--;
}
if(t.t==1){
for(var n in t.s){
if(t.s[n]==0) setTile(t.x[n], t.y[n]-1, t.z[n], 0);
if(t.s[n]==1) setTile(t.x[n], t.y[n]+1, t.z[n], 0);
if(t.s[n]==2) setTile(t.x[n], t.y[n], t.z[n]-1, 0);
if(t.s[n]==3) setTile(t.x[n], t.y[n], t.z[n]+1, 0);
if(t.s[n]==4) setTile(t.x[n]-1, t.y[n], t.z[n], 0);
if(t.s[n]==5) setTile(t.x[n]+1, t.y[n], t.z[n], 0);
}
t.x = [];
t.y = [];
t.z = [];
t.s = [];
}
if(t.x[0]!=undefined&&t.t==0){
t.t = 3;
}

}


function entityAddedHook(e){
if(!Player.isPlayer(e)&&Entity.getAll().length>maxEnt&&maxEnt!=0){
Entity.remove(e);
}
if(Entity.getEntityTypeId(e)==0){
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(150);
if(Player.isPlayer(e)) entityAddedHook(e);
}
}).start();
}
if(Player.isPlayer(e)){
for(var n in kickArray){
if(e==kickArray[n]){
darkMessage(Player.getName(e)+"(은)는 자동 강되 대상입니다. 자동으로 강퇴합니다.", true);
darkMessage("현재 닉네임 : "+Player.getName(e)+", 원래 닉네임 : "+kickNames[n], true);
Entity.remove(e);
}
}

} 


}


function chatReceiveHook(str, s){
if(anti[10]){
var pe = findHuman(s);
if(antiChatData.indexOf(s)!=-1){
kickLog += "["+Dark.getTime()+"] 닉네임 : "+Player.getName(pe)+", 사유 : 채팅창 도배\n";
darkMessage("테러로 인해 "+Player.getName(pe)+"의 접속을 블록런처 종료 시점까지 차단합니다.", true);
kickArray.push(pe);
kickNames.push(Player.getName(pe));
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1000);
Entity.remove(pe);
}
}).start();
}
else{
new java.lang.Thread({
run : function(){
antiChatData.push(s);
java.lang.Thread.sleep(1000);
antiChatData.splice(antiChatData.indexOf(s), 1);
}
}).start();
}
}

}



function findHuman(n){
for each(var e in Entity.getAll()){
if(Player.getName(e)==n) return e;
}
}


function setBtnColor(){
return android.graphics.Color.argb(80, 20, 20, 20);
}


