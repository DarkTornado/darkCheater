/*
Dark Cheater Addon - Client world Edut Plus
© 2015 Dark Tornado, All rights reserved.
Dark Cheater의 애드온(?)입니다.
"서버원용 월드에딧"을 버튼으로 사용할 수 있게 해주는 스크립트입니다.
이건 2차 공유를 허용합니다.
다크 치터 1.4.0 이상의 버전과 연동 가능.
*/


const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();


var btn = null;
var menu = null;
var linkOn = false;
var holoDark = android.app.AlertDialog.THEME_HOLO_DARK;
var white = android.graphics.Color.WHITE;
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var sendCmd = net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat;


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
}


};


function dip2px(ctx, dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);
}


function procCmd(cmd){
if(cmd=="link off"&&linkOn){
linkOn = false;
Dark.toast("연동이 풀렸습니다.");
Dark.save("cwepLink", false);
makeButton(true);
}

}


function leaveGame(){
worldEditMenu(false);
}


function checkLink(){
if(linkOn){
ctx.runOnUiThread(new java.lang.Runnable({
run : function() {
new android.os.Handler().postDelayed(new java.lang.Runnable({
run : function(){
try{
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/cwep.txt");
if(file.exists()){
if(Dark.read("cwep")=="true"&&btn==null) makeButton(true);
else if(Dark.read("cwep")=="false"&btn!=null) 
makeButton(false);
file.delete();
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
checkLink();
}
}), 100);
}
}));
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
button.setText("C.W.");
button.setTextSize(15);
button.setBackgroundColor(android.graphics.Color.argb(70, 0, 0, 0));
button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
if(menu==null) worldEditMenu(true);
else worldEditMenu(false);
}
}));
var longTouchCheck = false;
button.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick: function(v){
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
btn.setWidth(dip2px(ctx, 40));
btn.setHeight(dip2px(ctx, 27));
btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, dip2px(ctx, 200), dip2px(ctx, 100));
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


if(Dark.read("cwepLink")=="true"){
linkOn = true;
checkLink();
}
else{
makeButton(true);
}


function worldEditMenu(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(tf){
menu = new android.widget.PopupWindow();
var title = new android.widget.TextView(ctx);
title.setText("서버원용 월드에딧\n");
title.setTextSize(20);
title.setTextColor(white);
title.setGravity(android.view.Gravity.CENTER);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var link = new android.widget.ToggleButton(ctx);
link.setTextOn("Dark Cheater와 연동");
link.setTextOff("Dark Cheater와 연동");
link.setTextColor(white);
if(Dark.read("cwepLink")=="true") link.setChecked(true);
else link.setChecked(false);
link.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff){
linkOn = true;
checkLink();
Dark.save("cwepLinkAlert", true);
}
else{
makeButton(false);
linkOn = false;
Dark.toast("연동이 풀렸습니다.");
}
makeButton(!onoff);
Dark.save("cwepLink", onoff);
}
}));
layout.addView(link);
var btns = new Array();
var menus = ["철칼&철괭이 지급", "채우기", "바꾸기", "바꾸기\n(블록 데미지 포함)", "나무 삭제", "눈 내리기", "물 삭제", "원", "원기둥", "구", "직선", "도움말", "나가기"];
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
addItemInventory(267, 1, 0);
addItemInventory(292, 1, 0);
Dark.toast("지급되었습니다");
break;
case 1 : 
fillDialog(true);
break;
case 2 : 
fillDialog(false);
break;
case 3 : 
replaceDialog();
break;
case 4 : 
sendCmd(".no tree");
break;
case 5 : 
sendCmd(".snow");
break;
case 6 : 
sendCmd(".no water");
break;
case 7 : 
circleDialog(0);
break;
case 8 : 
cylinderDialog();
break;
case 9 : 
circleDialog(1);
break;
case 10 : 
circleDialog(2);
break;
case 11 : 
showDialog();
break;
case 12 : 
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


function fillDialog(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
if(tf) loc1.setText("블록 코드 : ");
else loc1.setText("바뀔 블록 코드 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("블록 코드를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
if(tf) loc3.setText("블록 데미지 : ");
else loc3.setText("바꿀 블록 코드 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
if(tf) loc4.setHint("블록 데미지를 입력하세요...");
else loc4.setHint("블록 코드를 입력하세요...");
loc4.setTextColor(white);
loc4.setInputType(number);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
if(tf) dialog.setTitle("채우기");
else dialog.setTitle("바꾸기");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
var bd = loc4.getText()+"";
if(bd=="") bd = 0;
if(tf) sendCmd(".set "+loc2.getText()+" "+bd);
else sendCmd(".replace "+loc2.getText()+" "+bd);
Dark.toast("실행되었습니다.");
}
}));
dialog.show();
}
catch(e){
clientMessaeg(e+", "+e.lineNumber);
}
}
}));
}


function replaceDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc0 = new android.widget.TextView(ctx);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.TextView(ctx);
var loc7 = new android.widget.EditText(ctx);
var loc8 = new android.widget.TextView(ctx);
var loc9 = new android.widget.EditText(ctx);
loc0.setText("이 블록(들)을");
loc0.setTextColor(white);
loc1.setText("블록 코드 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("블록 코드를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
loc3.setText("블록 데미지 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("블록 데미지를 입력하세요...");
loc4.setTextColor(white);
loc4.setInputType(number);
loc5.setText("\n이 블록(들)으로");
loc5.setTextColor(white);
loc6.setText("블록 코드 : ");
loc6.setTextSize(18);
loc6.setTextColor(white);
loc7.setHint("블록 코드를 입력하세요...");
loc7.setInputType(number);
loc7.setTextColor(white);
loc8.setText("블록 데미지 : ");
loc8.setTextSize(18);
loc8.setTextColor(white);
loc9.setHint("블록 데미지를 입력하세요...");
loc9.setTextColor(white);
loc9.setInputType(number);
layout.addView(loc0);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
layout.addView(loc7);
layout.addView(loc8);
layout.addView(loc9);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("바꾸기");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
var bd1 = loc4.getText()+"";
if(bd1=="") bd1 = 0;
var bd2 = loc9.getText()+"";
if(bd2=="") bd2 = 0;
sendCmd(".change "+loc2.getText()+" "+bd1+" "+loc7.getText()+" "+bd2);
Dark.toast("실행되었습니다.");
}
}));
dialog.show();
}
catch(e){
clientMessaeg(e+", "+e.lineNumber);
}
}
}));
}


function circleDialog(type){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.EditText(ctx);
loc1.setText("블록 코드 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("블록 코드를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
loc3.setText("블록 데미지 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("블록 데미지를 입력하세요...");
loc4.setTextColor(white);
loc4.setInputType(number);
loc5.setText("반지름 : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("반지름을 입력하세요...");
loc6.setInputType(number);
loc6.setTextColor(white);
if(type==2){
loc5.setText("길이 : ");
loc6.setHint("길이를 입력하세요...");
}
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
if(type==0) dialog.setTitle("원");
if(type==1) dialog.setTitle("구");
if(type==2) dialog.setTitle("직선");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
var bd = loc4.getText()+"";
if(bd=="") bd = 0;
if(type==0) sendCmd(".circle "+loc6.getText()+" "+loc2.getText()+" "+bd);
if(type==1) sendCmd(".sphere "+loc6.getText()+" "+loc2.getText()+" "+bd);
if(type==2) sendCmd(".line "+loc6.getText()+" "+loc2.getText()+" "+bd);
Dark.toast("실행되었습니다.");
}
}));
dialog.show();
}
catch(e){
clientMessaeg(e+", "+e.lineNumber);
}
}
}));
}


function cylinderDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.EditText(ctx);
var loc7 = new android.widget.TextView(ctx);
var loc8 = new android.widget.EditText(ctx);
loc1.setText("블록 코드 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("블록 코드를 입력하세요");
loc2.setTextColor(white);
loc2.setInputType(number);
loc3.setText("블록 데미지 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("블록 데미지를 입력하세요");
loc4.setTextColor(white);
loc4.setInputType(number);
loc5.setText("반지름 : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("반지름을 입력하세요...");
loc6.setInputType(number);
loc6.setTextColor(white);
loc7.setText("높이 : ");
loc7.setTextSize(18);
loc7.setTextColor(white);
loc8.setHint("높이를 입력하세요...");
loc8.setTextColor(white);
loc8.setInputType(number);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
layout.addView(loc7);
layout.addView(loc8);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("원기둥");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
var bd = loc2.getText()+"";
if(bd=="") bd = 0;
sendCmd(".cylin "+loc6.getText()+" "+loc8.getText()+" "+loc2.getText()+" "+bd);
Dark.toast("실행되었습니다.");
}
}));
dialog.show();
}
catch(e){
clientMessaeg(e+", "+e.lineNumber);
}
}
}));
}


function showDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var text = new android.widget.TextView(ctx);
text.setText("이 스크립트는 Dark Cheater의 \"서버원용 월드에딧\"을 GUI화 시킨 스크립트로서, 서버장의 다크 치터에서 서버원용 월드에딧의 사용자 목록에 자신이 포함되어야 이 스크립트가 작동합니다.\n다크 치터와 연동할 시, \"지형 수정\"의 \"서버원용 월드에딧 GUI\"에서 버튼을 on/off 하실 수 있습니다. 연동은 다크 치터 1.4.0 이상부터 가능하며, 본인의 맵에서만 연동을 on/off 하실 수 있으며, 명령어 \"/link off\"로도 연동을 끊을 수 있습니다.");
text.setTextColor(white);
text.setTextSize(17);
var layout = new android.widget.LinearLayout(ctx)
layout.setOrientation(1);
layout.addView(text);
var maker = new android.widget.TextView(ctx);
maker.setText("\n© 2015 Dark Tornado, All rights reserved.\n");
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


function setBtnColor(){
return android.graphics.Color.argb(80, 20, 20, 20);
}