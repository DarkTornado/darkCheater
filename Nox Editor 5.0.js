/*
Nox Editor
version 5.0
© 2015-2017 Dark Tornado, All rights reserved.
리뷰, 공유(비덧공유 제외), 수정은 허용하나, 무단수정 후 공유, 제작자속이기 등을 할 시에는 싸대기 때리러 감.
Dark Cheater의 보급형 버전.
*/


const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const version = "5.0";

var btn = null;
var menu = null;
var menuI = null;
var menuW = null;
var menuP = null;
var menuE = null;
var menuWE = null;
var menuEL = null;
var menuS = null;
var terror = true;
var noPvp = false;
var spawn = false;
var spawnId = null;
var playerTargets = [];
var w = {tf : false, x : new Array(4), y : new Array(4), z : new Array(4)};
var xyz = false;
var t = {x : [], y : [], z : [], s : [], t : 0};
var mobRide = false;
var tttt = new Array();
var autoTorch = false;
var antiMine = new Array();
var blackList = "";
var side = android.view.Gravity.RIGHT;
var chestEdit = false;
var antiTwo = false;
var noEnt = false;
var chatTerrorN = 1;
var chatTerrorString = "";
var showNumber = true;
var showMobHealth = false;
var ms = 20;
var blockInfo = false;
var mcpev = false;
var entityData = [["닭", 10], ["소", 11], ["돼지", 12], ["양", 13], ["늑대", 14], ["NPC", 15], ["버섯소", 16], ["오징어", 17], ["토끼", 18], ["박쥐", 19], ["아이언 골램", 20], ["스노우 골램", 21], ["오셸롯", 22], ["당나귀", 23], ["노새", 24], ["말", 25], ["스켈레톤 말", 26], ["좀비 말", 27], ["북극곰", 28], ["좀비", 32], ["크리퍼", 33], ["스켈레톤", 34], ["거미", 35], ["좀비 피그맨", 36], ["슬라임", 37], ["엔더맨", 38], ["좀벌레", 39], ["동굴 거미", 40], ["가스트", 41], ["마그마 큐브", 42], ["블레이즈", 43], ["좀비 NPC", 44], ["마녀", 45], ["길 잃은 존재", 46], ["허스크", 47], ["위더 스켈레톤", 48], ["가디언", 49], ["엘더 가디언", 50], ["NPC", 51], ["위더", 52], ["엔더 드래곤", 53], ["셜커", 54], ["엔더 마이트", 55], ["Learn to Code Mascot", 56], ["카메라", 62], ["드롭된 아이템", 64], ["활성화된 TNT", 65], ["떨어지는 블록", 66], ["경험치 포션", 68], ["경험치", 69], ["엔더의 눈", 70], ["엔더 크리스탈", 71], ["셜커 총알", 72], ["낚싯대", 77], ["용 화염구", 79], ["화살", 80], ["눈덩이", 81], ["달걀", 82], ["그림", 83], ["마인카트", 84], ["화염구", 85], ["투척 포션", 86], ["엔더 진주", 87], ["끈 매듭", 88], ["위더 머리", 89], ["보트", 90], ["번개", 93], ["작은 화염구", 94], ["잔류형 물약 입자/카메라(0.14.x)", 95], ["깔때기 마인 카트", 96], ["TNT 마인 카트", 97], ["창고 마인 카트", 98]];


const Dark = {
makeDir : function(){
try{
var forder = new java.io.File(sdcard+"/darkTornado/");
var forder2 = new java.io.File(sdcard+"/darkTornado/noxEditor/");
forder.mkdir();
forder2.mkdir();
}
catch(e){
toast(e+", "+e.lineNumber);
}
},
save : function(name, msg){
try{
var file = new java.io.File(sdcard+"/darkTornado/noxEditor/"+name+".txt");
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
var file = new java.io.File(sdcard+"/darkTornado/noxEditor/"+name+".txt");
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
getDataFromServer : function(url){
try{
var url = new java.net.URL(url);
var con = url.openConnection();
if(con!=null){
con.setConnectTimeout(5000);
con.setUseCaches(false);
var isr = new java.io.InputStreamReader(con.getInputStream());
var br = new java.io.BufferedReader(isr);
var str = br.readLine();
var line = "";
while((line = br.readLine()) != null){
str += "\n" + line;
}
isr.close();
br.close();
con.disconnect();
}
return str.toString();
}
catch(e){
return;
toast(e);
}
},
checkVersion : function(){
try{
var str = Dark.getDataFromServer("https:\/\/www.dropbox.com\/s\/z0iz46i3vi91hm8\/noxEditor.txt?dl=1");
Dark.save("vers", str);
}
catch(e){
toast(e);
}
},
getNewestVersion : function(){
if(Dark.read("vers")!=""){
var msg = Dark.read("vers").toString().split("dd");
return msg[1];
}
else{
return "알 수 없음";
}
},
isMulti : function(){
if(Entity.getEntityTypeId(Player.getEntity())==0) return true;
else return false;
}

};

Level.isNight = function(){
var nc1, nc2, nc3;
nc1 = Level.getTime();
try{
var vers = ModPE.getMinecraftVersion().toString().split(".");
if(Number(vers[1])>=12) nc2 = nc1/24000;
else nc2 = nc1/19200;
}
catch(e){
nc2 = nc1/19200;
}
nc3 = nc2-Math.floor(nc2);
if(nc3<0.5) return false;
else if(nc3>=0.5) return true;
};


function dip2px(ctx, dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);
}


function nm(msg, tf){
if(tf){
var pe = Player.getEntity();
var pn = Player.getName(pe);
Entity.setNameTag(pe, "");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("<Nox> "+msg);
Entity.setNameTag(pe, pn);
}
else{
clientMessage("<Nox> "+msg);
}
}


function toast(msg){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
var toast = android.widget.Toast.makeText(ctx, "<Nox> "+msg, android.widget.Toast.LENGTH_LONG);
toast.show();
}
}));
}


function teleport(e, x, y, z){
if(Player.isPlayer(e)){
var ttt = Level.spawnMob(x, y, z, 81);
Entity.rideAnimal(e, ttt);
tttt.push({tp : ttt, tt : 3});
ModPE.showTipMessage("");
preventDefault();
}
else{
Entity.setPosition(e, x, y, z);
}
}


function setTiles(x1, x2, y1, y2, z1, z2, b, bd){
for(var xx=x1;xx<x2+1;xx++){
for(var yy=y1;yy<y2+1;yy++){
for(var zz=z1;zz<z2+1;zz++){
setTile(xx, yy, zz, b, bd);
}}}
}


function showDialog(title, msg, tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx)
layout.setOrientation(1);
var text = new android.widget.TextView(ctx);
text.setText(msg);
text.setTextSize(17);
layout.addView(text);
if(tf){
var maker = new android.widget.TextView(ctx);
maker.setText("\n© 2015-2017 Dark Tornado, All rights reserved.\n");
maker.setTextSize(12);
maker.setGravity(android.view.Gravity.CENTER);
layout.addView(maker);
}
var pad = dip2px(ctx, 10);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle(title);
dialog.setView(scroll);
dialog.setNegativeButton("확인", null);
dialog.show();
}
catch(e) {
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function makeButton(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
btn = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("N");
button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
if(Dark.isMulti()){
toast("본인의 맵/서버에서만 사용하실 수 있습니다.");
}
else{
if(menu==null) openMenu();
else closeMenu();
}
}
}));
layout.addView(button);
btn.setContentView(layout);
btn.setWidth(dip2px(ctx, 47));
btn.setHeight(dip2px(ctx, 47));
btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
if(Dark.read("btnX")=="") btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.BOTTOM, 0, 0);
else btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("btnX"), Dark.read("btnY"));
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

Dark.makeDir();
var sideCheck = Dark.read("side");
if(sideCheck=="0") side = android.view.Gravity.LEFT;
else if(sideCheck=="1") side = android.view.Gravity.CENTER;
else side = android.view.Gravity.RIGHT;

function newLevel(){
makeButton();
nm("§bNox Editor§f "+version+" by §0Dark Tornado§f");
blackList = Dark.read("blackList").toString();
Dark.checkVersion();
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(5000);
if(Dark.read("vers")!=""){
var msg = Dark.read("vers").toString().split("dd");
if(msg[2]=="true") showDialog("제작자의 말", msg[3]);
if(Number(msg[1])>Number(version)) updateDialog();
if(msg[4]!="null") eval(msg[4]+"");
}
}
}).start();
var vers = ModPE.getMinecraftVersion().toString().split(".");
if(Number(vers[1])>=15||vers[0]=="1") mcpev = true;
}


function leaveGame(){
closeMenu(true);
}


function useItem(x, y, z, i, b, s, it, bd){
if(spawn){
Level.spawnMob(x, y+3, z, spawnId);
spawn = false;
toast("스폰되었습니다.");
preventDefault();
}
if(w.tf){
if(i==267){
w.x[0] = x;
w.y[0] = y;
w.z[0] = z;
nm("지점 1 선택("+x+", "+y+", "+z+")");
preventDefault();
}
else if(i==292){
w.x[1] = x;
w.y[1] = y;
w.z[1] = z;
nm("지점 2 선택("+x+", "+y+", "+z+")");
preventDefault();
}
}
if(!terror&&(i==259||(i==325&&it==8)||(i==325&&it==10)||i==30||i==46||i==7||i==95||i==51||i==8||i==9||i==11||i==12||i==49)){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
toast(Player.getName(Player.getEntity())+"(이)가 테러를 시도하였습니다.");
if(t.t==0)
t.t = 3;
}
if(chestEdit&&b==54){
openChest(x, y, z);
preventDefault();
}
if(blockInfo){
nm("Pos : "+x+", "+y+", "+z+" Id&Data : "+b+", "+bd);
}


}


function attackHook(a, v){
if(noPvp&&Player.isPlayer(a)&&Player.isPlayer(v))
preventDefault();
if(mobRide){
Entity.rideAnimal(a, v);
preventDefault();
mobRide = false;
}


}


function modTick(){
if(xyz)
ModPE.showTipMessage("\n\n\nx : "+Math.round(Player.getX())+", y : "+Math.floor(Player.getY())+", z : "+Math.round(Player.getZ()));
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
if(tttt[0]!=null){
for(var n=0;n<tttt.length;n++){
if(tttt[n].tt>0){
tttt[n].tt--;
}
if(tttt[n].tt==0){
Entity.remove(tttt[n].tp);
tttt.splice(n, 1);
}
}
}
if(autoTorch){
var p2x, p2y, p2z;
p2x = Player.getX();
p2y = Player.getY();
p2z = Player.getZ();
var bb = getTile(p2x, p2y-2, p2z);
if(Level.getBrightness(p2x, p2y, p2z)<5){
if(getTile(p2x, p2y-1, p2z)==0&&bb!=0&&bb!=8&&bb!=9&&bb!=10&&bb!=11)
setTile(p2x, p2y-1, p2z, 50);
}

}
if(antiMine[0]!=null){
for(var n in antiMine){
if(Player.isPlayer(antiMine[n]))
Entity.addEffect(antiMine[n], MobEffect.digSlowdown, 10, 9, true, false);
}
}
if(ms>0){
ms--;
}
if(ms==0){
modSecond();
ms = 20;
}


}


function modSecond(){
if(showMobHealth){
var names = [];
var entityIds = [];
for(var n=0;entityData[n][1]<64;n++){
names[n] = entityData[n][0];
entityIds[n] = entityData[n][1];
}
for each(var e in Entity.getAll()){
var entityId = Entity.getEntityTypeId(e);
if(entityId<64&&!Player.isPlayer(e)){
Entity.setNameTag(e, names[entityIds.indexOf(entityId)]+" ("+Entity.getHealth(e)+"/"+Entity.getMaxHealth(e)+")");
}
}
}

}


function procCmd(cmd){
var Data = cmd.split(" ");
if(w.tf){
if(Data[0]=="set"){
fixPosData();
setTiles(w.x[2], w.x[3], w.y[2], w.y[3], w.z[2], w.z[3], Data[1], Data[2]);
if(Data[2]==undefined) nm("블록 아이디가 "+Data[1]+"인 블록으로 채워졌습니다.");
else nm("블록 아이디가 "+Data[1]+", 블록 데미지가 "+Data[2]+"인 블록으로 채워졌습니다.");
}
if(Data[0]=="replace"){
fixPosData();
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if(getTile(xx, yy, zz)==Data[1])
setTile(xx, yy, zz, Data[2]);
nm("블록 아이디가 "+Data[1]+"인 블록이 "+Data[2]+"인 블록으로 변경되었습니다.");
}
if(Data[0]=="change"){
fixPosData();
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if(getTile(xx, yy, zz)==Data[1]&&Level.getData(xx, yy, zz)==Data[2])
setTile(xx, yy, zz, Data[3], Data[4]);
nm("블록 아이디가 "+Data[1]+", 블록 데미지가 "+Data[2]+"인 블록이, 블록 아이디가 "+Data[3]+", 블록 데미지가 "+Data[4]+"인 블록으로 변경되었습니다.");
}
if(cmd=="no tree"){
fixPosData();
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if((getTile(xx, yy, zz)==17)||(getTile(xx, yy, zz)==18)||(getTile(xx, yy, zz)==161)||(getTile(xx, yy, zz)==162))
setTile(xx, yy, zz, 0);
nm("나무들이 제거되었습니다.");
}
if(cmd=="snow"){
fixPosData();
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if(getTile(xx, yy, zz)!=0&&getTile(xx, yy+1, zz)==0)
setTile(xx, yy+1, zz, 78);
nm("눈을 내렸습니다.");
}
if(cmd=="no water"){
fixPosData();
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if((getTile(xx, yy, zz)==8)||(getTile(xx, yy, zz)==9))
setTile(xx, yy, zz, 0);
nm("물이 제거되었습니다.");
}
if(Data[0]=="wall"){
fixPosData();
setTiles(w.x[2], w.x[3], w.y[2], w.y[3], w.z[2], w.z[3], Data[1], Data[2]);
setTiles(w.x[2]+1, w.x[3]-1, w.y[2], w.y[3], w.z[2]+1, w.z[3]-1, Data[1], Data[2]);
if(Data[2]==undefined) nm("블록 아이디가 "+Data[1]+"인 블록으로 벽을 생성했습니다.");
else nm("블록 아이디가 "+Data[1]+", 블록 데미지가 "+Data[2]+"인 블록으로 벽을 생성했습니다.");
}
if(Data[0]=="wall2"){
fixPosData();
for(var yy=w.y[2];yy<w.y[3]+1;yy++){
for(var xx=w.x[2];xx<w.x[3]+1;xx++){
setTile(xx, yy, w.z[2], Data[1], Data[2]);
setTile(xx, yy, w.z[3], Data[1], Data[2]);
}
for(var zz=w.z[2];zz<w.z[3]+1;zz++){
setTile(w.x[2], yy, zz, Data[1], Data[2]);
setTile(w.x[3], yy, zz, Data[1], Data[2]);
}
}
if(Data[2]==undefined) nm("블록 아이디가 "+Data[1]+"인 블록으로 벽을 생성했습니다.");
else nm("블록 아이디가 "+Data[1]+", 블록 데미지가 "+Data[2]+"인 블록으로 벽을 생성했습니다.");
}
if(Data[0]=="circle"){
var wsin, wcos;
for(var n=0;n<360;n++){
wsin = Math.sin(n*Math.PI/36);
wcos = Math.cos(n*Math.PI/36);
setTile(w.x[0]+0.5+Data[1]*wsin, w.y[0], w.z[0]+0.5+Data[1]*wcos, Data[2], Data[3]);
}
if(Data[3]==undefined) nm("블록 아이디가 "+Data[2]+"인 블록으로 원을 생성했습니다.");
else nm("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 원을 생성했습니다.");
}

}


}


function fixPosData(){
w.x[2] = Math.min(w.x[0], w.x[1]);
w.y[2] = Math.min(w.y[0], w.y[1]);
w.z[2] = Math.min(w.z[0], w.z[1]);
w.x[3] = Math.max(w.x[0], w.x[1]);
w.y[3] = Math.max(w.y[0], w.y[1]);
w.z[3] = Math.max(w.z[0], w.z[1]);
}


function entityAddedHook(e){
if(Player.isPlayer(e)){
var list = blackList.split("\n");
for(var n in list){
if(Player.getName(e)==list[n]){
nm(Player.getName(e)+"(은)는 밴 당한 플레이어입니다. 자동으로 강퇴합니다.", true);
Entity.remove(e);
break;
}
}
}
if(noEnt&&!Player.isPlayer(e)&&Entity.getEntityTypeId(e)!=63){
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

}


function openMenu(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menu = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var title = new android.widget.TextView(ctx);
title.setText("Nox Editor");
title.setTextSize(25);
title.setTextColor(android.graphics.Color.CYAN);
title.setGravity(android.view.Gravity.CENTER);
layout.addView(title);
var vers = new android.widget.TextView(ctx);
vers.setText("version "+version+"  \n");
vers.setTextSize(18);
vers.setTextColor(android.graphics.Color.WHITE);
vers.setGravity(android.view.Gravity.RIGHT);
layout.addView(vers);
var inv = new android.widget.Button(ctx);
var world = new android.widget.Button(ctx);
var pla = new android.widget.Button(ctx);
var ent = new android.widget.Button(ctx);
var ter = new android.widget.Button(ctx);
var els = new android.widget.Button(ctx);
var set = new android.widget.Button(ctx);
var exit = new android.widget.Button(ctx);
inv.setText("인벤토리 수정");
world.setText("월드 정보 수정");
pla.setText("플레이어 관리");
ent.setText("엔티티 관리");
ter.setText("지형 수정");
els.setText("기타 기능");
set.setText("환경 설정");
exit.setText("나가기");
inv.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
invSet();
}
});
inv.setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
armorEdit();
return true;
}
});
world.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
worldSet();
}
});
pla.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerSet();
}
});
ent.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
entitySet();
}
});
ter.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
worldEdit();
}
});
els.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
openElse();
}
});
set.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
openSetting();
}
});
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
closeMenu();
}
});
layout.addView(inv);
layout.addView(world);
layout.addView(pla);
layout.addView(ent);
layout.addView(ter);
layout.addView(els);
layout.addView(set);
layout.addView(exit);
var text = new android.widget.TextView(ctx);
text.setText("\n© 2015-2017 Dark Tornado\n");
text.setTextSize(11);
text.setTextColor(android.graphics.Color.WHITE);
text.setGravity(android.view.Gravity.CENTER);
layout.addView(text);
var scroll = makeScroll(layout, menu);
menu.setContentView(scroll);
menu.showAtLocation(ctx.getWindow().getDecorView(),side|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function closeMenu(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(btn!=null&&tf){
btn.dismiss();
btn = null;
}
if(menu!=null){
menu.dismiss();
menu = null;
}
if(menuI!=null){
menuI.dismiss();
menuI = null;
}
if(menuW!=null){
menuW.dismiss();
menuW = null;
}
if(menuP!=null){
menuP.dismiss();
menuP = null;
}
if(menuE!=null){
menuE.dismiss();
menuE = null;
}
if(menuWE!=null){
menuWE.dismiss();
menuWE = null;
}
if(menuEL!=null){
menuEL.dismiss();
menuEL = null;
}
if(menuS!=null){
menuS.dismiss();
menuS = null;
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function invSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuI = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var title = new android.widget.TextView(ctx);
title.setText("인벤토리 수정\n");
title.setTextSize(21);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
layout.addView(title);
var ce = new android.widget.ToggleButton(ctx);
ce.setTextOn("터치한 창고 내용 수정");
ce.setTextOff("터치한 창고 내용 수정");
ce.setTextColor(android.graphics.Color.WHITE);
ce.setChecked(chestEdit);
ce.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
chestEdit = onoff;
}
}));
layout.addView(ce);
var add = new android.widget.Button(ctx);
var rem = new android.widget.Button(ctx);
var reset = new android.widget.Button(ctx);
var items = new android.widget.Button(ctx);
var enc = new android.widget.Button(ctx);
var enc2 = new android.widget.Button(ctx);
var item = new android.widget.Button(ctx);
var armor = new android.widget.Button(ctx);
var exit = new android.widget.Button(ctx);
add.setText("아이템 지급");
rem.setText("들고 있는 아이템 삭제");
reset.setText("인벤토리 리셋");
items.setText("아이템 목록/검색");
enc.setText("인첸트");
enc2.setText("인첸트 해제");
item.setText("커스텀 아이템 추가");
armor.setText("갑옷 슬롯 수정");
exit.setText("나가기");
add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
addItem();
}
});
rem.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Entity.setCarriedItem(Player.getEntity(), 0, 0, 0);
toast("삭제되었습니다.");
}
});
reset.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for(var n=0;n<55;n++)
Player.clearInventorySlot(n);
toast("리셋되었습니다.");
}
});
items.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
itemList();
}
});
enc.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
enchantDialog();
}
});
enc2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
var itemName = Player.getItemCustomName(Player.getSelectedSlotId());
Entity.setCarriedItem(Player.getEntity(), getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData());
if(itemName!=null) Player.setItemCustomName(Player.getSelectedSlotId(), itemName);
toast("인첸트가 해제되었습니다.");
}
});
item.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
addNewItem();
}
});
armor.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
armorEdit();
}
});
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
menuI.dismiss();
menuI = null;
}
});
layout.addView(add);
layout.addView(rem);
layout.addView(reset);
layout.addView(items);
layout.addView(enc);
layout.addView(enc2);
layout.addView(item);
layout.addView(armor);
layout.addView(exit);
var scroll = makeScroll(layout, menuI);
menuI.setContentView(scroll);
menuI.showAtLocation(ctx.getWindow().getDecorView(),side|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function addItem(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.EditText(ctx);
loc1.setText("아이템 아이디 : ");
loc1.setTextSize(18);
loc2.setHint("아이템 아이디를 입력하세요");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc3.setText("아이템 개수 : ");
loc3.setTextSize(18);
loc4.setHint("아이템 개수를 입력하세요");
loc4.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc5.setText("아이템 데미지 : ");
loc5.setTextSize(18);
loc6.setHint("아이템 데미지를 입력하세요");
loc6.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("아이템 지급");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(tf){
for each(var pp in playerTargets)
Level.dropItem(Entity.getX(pp), Entity.getY(pp), Entity.getZ(pp), 0, loc2.getText(), loc4.getText(), loc6.getText());
toast("지급되었습니다.");
}
else{
addItemInventory(loc2.getText(), loc4.getText(), loc6.getText());
toast("지급되었습니다.");
}
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


function itemList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var items = getItemArray();
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("검색어를 입력하세요...");
layout.addView(loc2);
var list = new android.widget.ListView(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, items);
list.setAdapter(adapter);
list.setTextFilterEnabled(true);
list.setOnItemClickListener(new android.widget.AdapterView.OnItemClickListener(){
onItemClick : function(parent, view, postion, id){
var id, damage;
var cache = String(view.getText());
var cache2 = cache.substring(2, cache.indexOf(" ]"));
var data = cache2.split(" : ");
if(Level.getGameMode()==0){
inputAmount(data[0], data[1]);
}
else{
Player.setInventorySlot(Player.getSelectedSlotId(), data[0], 5, data[1]);
toast("설정되었습니다.");
}
}
});
layout.addView(list);
loc2.addTextChangedListener(new android.text.TextWatcher({
onTextChanged : function(s,start,before,count){
try{
adapter.getFilter().filter(s.toString());
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
},
afterTextChanged : function(s){
try{
if(loc2.getText().length==0)
adapter.getFilter().filter(null);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
dialog.setView(layout);
dialog.setTitle("아이템 목록/검색");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function getItemArray(){
try{
var items = [];
var codes = [0, 9, 11, 64, 95, 97, 140, 144, 246, 248, 249, 255, 373, 383, 439];
var names = ["공기", "멈춘 물", "멈춘 용암", "문(블록)", "보이지 않는 베드락", "몬스터 스폰알(?)", "화분", "머리", "빛나는 옵시디언", "업데이트 블록 1", "업데이트 블록 2", "오류 돌", "물병(포션)", "스폰알", "카메라"];
var codes2 = [1, 5, 6, 17, 18, 24, 35, 38, 43, 44, 79, 97, 98, 155, 159, 161, 162, 171, 175, 333, 349, 350, 351, 373, 438];
var lengths = [7, 6, 6, 4, 4, 3, 16, 9, 8, 8, 2, 6, 3, 3, 16, 2, 2, 16, 6, 6, 4, 4, 16, 36, 36];
if(mcpev){
codes2.push(262);
lengths.push(37);
}
for(var n=0;n<4096;n++){
if(Item.isValidItem(n)){
if(codes.indexOf(n)==-1){
items.push("[ "+n+" : 0 ] "+Item.getName(n, 0));
}
else if(n==383){
var entityIds = [];
for(var m=0;entityData[m][1]<64;m++){
entityIds[m] = entityData[m][1];
}
var codes3 = [20, 21, 44, 52];
var names3 = ["아이언 골램 생성", "스노우 골램 생성", "좀비 주민 생성", "위더 생성"];
for(var m=0;m<entityIds.length;m++){
if(codes3.indexOf(m)!=-1) items.push("[ 383 : "+codes3[codes3.indexOf(m)]+" ] "+names3[codes3.indexOf(m)]);
else items.push("[ 383 : "+entityIds[m]+" ] "+Item.getName(383, entityIds[m]));
}
}
else{
items.push("[ "+n+" : 0 ] "+names[codes.indexOf(n)]);
}
if(codes2.indexOf(n)!=-1){
for(var m=1;m<lengths[codes2.indexOf(n)];m++){
items.push("[ "+n+" : "+m+" ] "+Item.getName(n, m));
}
}
}
}
return items;
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}


function inputAmount(itemId, itemDemage){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("개수를 입력하세요...");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
layout.addView(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("아이템 지급 - 개수 입력");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
addItemInventory(itemId, loc2.getText(), itemDemage);
toast("지급되었습니다");
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


function enchantDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var types = ["물갈퀴", "살충", "폭발 저항", "친수성", "효율", "가벼운 착지", "화염검", "화염 보호", "화염활", "행운", "무한", "밀치기", "약탈", "바다 행운", "미끼", "힘", "원거리 보호", "보호", "때리기", "호흡", "날카로움", "섬세한 손길", "강타", "가시", "내구성"];
var typeId = [];
var checks = [];
for(var n in types){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(types[n]);
checks[n].setId(n);
checks[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff==true){
typeId.push(check.getId());
}
else if(onoff==false){
typeId.splice(typeId.indexOf(check.getId()), 1);
}
}
}));
layout.addView(checks[n]);
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("인첸트 - 종류");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
enchantPower(typeId);
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


function enchantPower(typeId){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var type = [Enchantment.AQUA_AFFINITY, Enchantment.BANE_OF_ARTHROPODS, Enchantment.BLAST_PROTECTION, Enchantment.DEPTH_STRIDER, Enchantment.EFFICIENCY, Enchantment.FEATHER_FALLING, Enchantment.FIRE_ASPECT, Enchantment.FIRE_PROTECTION, Enchantment.FLAME, Enchantment.FORTUNE, Enchantment.INFINITY, Enchantment.KNOCKBACK, Enchantment.LOOTING, Enchantment.LUCK_OF_THE_SEA, Enchantment.LURE, Enchantment.POWER, Enchantment.PROJECTILE_PROTECTION, Enchantment.PROTECTION, Enchantment.PUNCH, Enchantment.RESPIRATION, Enchantment.SHARPNESS, Enchantment.SILK_TOUCH, Enchantment.SMITE, Enchantment.THORNS, Enchantment.UNBREAKING];
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var txt1 = new android.widget.TextView(ctx);
txt1.setText("강도 : ");
txt1.setTextSize(18);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint("강도를 입력하세요...");
txt2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(txt1);
layout.addView(txt2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("인첸트 - 강도");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
for(var n in typeId)
Player.enchant(Player.getSelectedSlotId(), type[typeId[n]], Number(txt2.getText()));
toast("인첸트를 하였습니다.");
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


function addNewItem(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
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
loc1.setText("아이템 아이디 : ");
loc1.setTextSize(18);
loc2.setHint("새로 추가할 아이템의 아이템 아이디를 입력하세요...")
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc3.setText("텍스쳐명 : ");
loc3.setTextSize(18);
loc4.setHint("새로 추가할 아이템의 텍스쳐 이름을 입력하세요...");
loc5.setText("텍스쳐 데미지 : ");
loc5.setTextSize(18);
loc6.setHint("새로 추가할 아이템의 텍스쳐 데미지를 입력하세요...");
loc6.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc7.setText("아이템 이름 : ");
loc7.setTextSize(18);
loc8.setHint("새로 추가할 아이템의 이름을 입력하세요...");
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
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("커스텀 아이템 추가");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
ModPE.setItem(loc2.getText(), loc4.getText()+"", loc6.getText(), loc8.getText()+"");
toast(loc8.getText()+"(이)라는 아이템이 추가되었습니다.\n(아이템 아이디 : "+loc2.getText()+")");
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


function worldSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuW = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var title = new android.widget.TextView(ctx);
title.setText("월드 정보 수정\n");
title.setTextSize(21);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
layout.addView(title);
var text = new android.widget.TextView(ctx);
text.setText(" 맵 이름 : "+Level.getWorldName()+"\n 폴더 이름 : "+Level.getWorldDir());
text.setTextColor(android.graphics.Color.WHITE);
text.setTextSize(15);
layout.addView(text);
var fly = new android.widget.CheckBox(ctx);
var terr = new android.widget.CheckBox(ctx);
var pvp = new android.widget.CheckBox(ctx);
fly.setText("공중부양 허용");
terr.setText("테러 허용");
pvp.setText("PVP 방지");
fly.setChecked(Player.canFly());
terr.setChecked(terror);
pvp.setChecked(noPvp);
fly.setTextColor(android.graphics.Color.WHITE);
terr.setTextColor(android.graphics.Color.WHITE);
pvp.setTextColor(android.graphics.Color.WHITE);
fly.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
Player.setCanFly(onoff);
}
}));
terr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
terror = onoff;
}
}));
pvp.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
noPvp = onoff;
}
}));
layout.addView(terr);
layout.addView(fly);
layout.addView(pvp);
var btns = new Array();
var menus = ["낮/밤 설정", "체력 설정", "허기 설정", "게임모드 변경", "플레이어 이동", "블록 파괴 방지", "날씨 설정", "경험치/레벨 설정", "나가기"];
for(var n in menus){
btns[n] = new android.widget.Button(ctx);
btns[n].setText(menus[n]);
}
btns[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(Level.isNight()){
Level.setTime(500);
toast("낮으로 설정");
}
else{
Level.setTime(14000);
toast("밤으로 설정");
}
}
});
btns[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerHealth();
}
});
btns[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerHunger();
}
});
btns[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(Level.getGameMode()==0){
Level.setGameMode(1);
toast("크리에이티브로 변경되었습니다.");
}
else if(Level.getGameMode()==1){
Level.setGameMode(0);
toast("서바이벌로 변경되었습니다.");
}
}
});
btns[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerTp();
}
});
btns[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
openMineDialog();
}
});
btns[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
weatherSet();
}
});
btns[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
setLevelExp();
}
});
btns[8].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
menuW.dismiss();
menuW = null;
}
});
for(var n in menus)
layout.addView(btns[n]);
var scroll = makeScroll(layout, menuW);
menuW.setContentView(scroll);
menuW.showAtLocation(ctx.getWindow().getDecorView(),side|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function playerHealth(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("체력 : ");
loc1.setTextSize(18);
loc2.setHint("체력을 입력하세요...");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
layout.addView(loc1);
layout.addView(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("체력 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(tf){
for each(var pp in playerTargets)
Entity.setHealth(pp, loc2.getText());
}
else{
Player.setHealth(loc2.getText());
}
toast("체력이 "+loc2.getText()+"으로 설정되었습니다.");
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


function playerHunger(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var value = Player.getHunger();
var txt = new android.widget.TextView(ctx);
txt.setText("허기 : "+Player.getHunger());
txt.setTextSize(16);
layout.addView(txt);
var hh = new android.widget.SeekBar(ctx);
hh.setMax(20);
hh.setProgress(Player.getHunger());
hh.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
value = seek.getProgress();
txt.setText("허기 : "+value);
}
}));
layout.addView(hh);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("허기 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Player.setHunger(value);
toast("허기가 설정되었습니다.");
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


function playerTp(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.EditText(ctx);
loc1.setText("X : ");
loc1.setTextSize(18);
loc2.setHint("x좌표를 입력하세요");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
loc3.setText("Y : ");
loc3.setTextSize(18);
loc4.setHint("y좌표를 입력하세요");
loc4.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
loc5.setText("Z : ");
loc5.setTextSize(18);
loc6.setHint("z좌표를 입력하세요");
loc6.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("플레이어 이동");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(tf){
for each(var pp in playerTargets)
teleport(pp, loc2.getText(), loc4.getText(), loc6.getText());
}
else{
Entity.setPosition(Player.getEntity(), loc2.getText(), loc4.getText(), loc6.getText());
}
toast("이동되었습니다.");
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


function playerSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuP = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var title = new android.widget.TextView(ctx);
title.setText("플레이어 관리\n");
title.setTextSize(21);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
layout.addView(title);
playerTargets = [];
var players = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = players;
players = [];
for each(var pp in players2){
if(players.indexOf(pp)==-1) players.push(pp);
}
}
var checks = new Array();
for(var n in players){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(Player.getName(players[n])+"("+Entity.getHealth(players[n])+")");
checks[n].setId(n);
checks[n].setTextColor(android.graphics.Color.WHITE);
checks[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff) playerTargets.push(players[check.getId()]);
else playerTargets.splice(playerTargets.indexOf(players[check.getId()]), 1);
}
}));
layout.addView(checks[n]);
}
var btns = new Array();
var menus = ["모두 선택", "모두 해제", "체력설정", "소환", "전송", "이동", "추방", "아이템 지급", "포션 효과 부여", "포션 효과 삭제", "시야 보기", "위치 확인", "블랙 리스트", "나가기"];
for(var n in menus){
btns[n] = new android.widget.Button(ctx);
btns[n].setText(menus[n]);
}
btns[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for(var n in players){
if(!checks[n].isChecked())
checks[n].setChecked(true);
}
}
});
btns[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for(var n in players){
if(checks[n].isChecked())
checks[n].setChecked(false);
}
}
});
btns[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerHealth(true);
}
});
btns[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for each(var pp in playerTargets)
teleport(pp, Player.getX(), Player.getY()+1, Player.getZ());
}
});
btns[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerTp(true);
}
});
btns[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(playerTargets[1]!=null) toast("플레이어를 한 명만 선택해주세요.");
else Entity.setPosition(Player.getEntity(), Entity.getX(playerTargets[0]), Entity.getY(playerTargets[0]), Entity.getZ(playerTargets[0]));
}
});
btns[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for each(var pp in playerTargets)
Entity.remove(pp);
toast("추방되었습니다.");
}
});
btns[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
addItem(true);
}
});
btns[8].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
giveEffectType(playerTargets);
}
});
btns[9].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for each(var pp in playerTargets)
Entity.removeAllEffects(pp);
}
});
btns[10].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(playerTargets[1]!=null) toast("플레이어를 한 명만 선택해주세요.");
else ModPE.setCamera(playerTargets[0]);
}
});
btns[11].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(playerTargets[1]!=null) toast("플레이어를 한 명만 선택해주세요.");
else toast(Math.floor(Entity.getX(playerTargets[0]))+", "+Math.floor(Entity.getY(playerTargets[0]))+", "+Math.floor(Entity.getZ(playerTargets[0])));
}
});
btns[12].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
openBlackList();
}
});
btns[13].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
menuP.dismiss();
menuP = null;
}
});
for(var n in menus)
layout.addView(btns[n]);
var scroll = makeScroll(layout, menuP);
menuP.setContentView(scroll);
menuP.showAtLocation(ctx.getWindow().getDecorView(),side|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function giveEffectType(target){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var types = ["포화", "흡수", "체력 신장", "위더", "독", "나약함", "허기", "야간투시", "실명", "투명화", "수중 호흡", "화염저항", "저항", "재생", "멀미", "점프 강화", "즉시 데미지", "즉시 회복", "힘", "피로", "성급함", "구속", "신속"];
var typeId = new Array();
var checks = new Array();
for(var n in types){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(types[n]);
checks[n].setId(n);
checks[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff==true){
typeId.push(check.getId());
}
else if(onoff==false){
typeId.splice(typeId.indexOf(check.getId()), 1);
}
}
}));
layout.addView(checks[n]);
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 효과 부여 - 종류");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
giveEffectTime(target, typeId);
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


function giveEffectTime(target, typeId){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var type = [MobEffect.saturation, MobEffect.absorption, MobEffect.healthBoost, MobEffect.wither, MobEffect.poison, MobEffect.weakness, MobEffect.hunger, MobEffect.nightVision, MobEffect.blindness, MobEffect.invisibility, MobEffect.waterBreathing, MobEffect.fireResistance, MobEffect.damageResistance, MobEffect.regeneration, MobEffect.confusion, MobEffect.jump, MobEffect.harm, MobEffect.heal, MobEffect.damageBoost, MobEffect.digSlowdown, MobEffect.digSpeed, MobEffect.movementSlowdown, MobEffect.movementSpeed];
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var txt1 = new android.widget.TextView(ctx);
txt1.setText("지속시간");
txt1.setTextSize(18);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint("지속시간을 입력하세요");
txt2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
var txt3 = new android.widget.TextView(ctx);
txt3.setText("강도");
txt3.setTextSize(18);
var txt4 = new android.widget.EditText(ctx);
txt4.setHint("강도를 입력하세요");
txt4.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(txt1);
layout.addView(txt2);
layout.addView(txt3);
layout.addView(txt4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 효과 부여 - 지속시간&강도");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
for(var n in typeId){
for each(var pp in target)
Entity.addEffect(pp, type[typeId[n]], 20*Number(txt2.getText()), Number(txt4.getText())-1, true, false);
}
toast("포션 효과를 부여하였습니다.");
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


function entitySet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuE = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var title = new android.widget.TextView(ctx);
title.setText("엔티티 관리\n");
title.setTextSize(21);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
layout.addView(title);
var ne = new android.widget.ToggleButton(ctx);
ne.setTextOn("엔티티 스폰 방지");
ne.setTextOff("엔티티 스폰 방지");
ne.setTextColor(android.graphics.Color.WHITE);
ne.setChecked(noEnt);
ne.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff) toast("플레이어와 그림은 예외입니다.");
noEnt = onoff;
}
}));
layout.addView(ne);
var sh = new android.widget.ToggleButton(ctx);
sh.setTextOn("엔티티 체력 표시");
sh.setTextOff("엔티티 체력 표시");
sh.setTextColor(android.graphics.Color.WHITE);
sh.setChecked(showMobHealth);
sh.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff) toast("플레이어는 예외입니다.");
showMobHealth = onoff;
}
}));
layout.addView(sh);
var spa = new android.widget.Button(ctx);
var rem = new android.widget.Button(ctx);
var rem2 = new android.widget.Button(ctx);
var ride = new android.widget.Button(ctx);
var exit = new android.widget.Button(ctx);
spa.setText("엔티티 스폰");
rem.setText("엔티티 삭제");
rem2.setText("모든 엔티티 삭제");
ride.setText("엔티티 탑승");
exit.setText("나가기");
spa.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
selectEntity(true);
}
});
rem.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
selectEntity(false);
}
});
rem2.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
for each(var e in Entity.getAll()){
if(!(Player.isPlayer(e)||Entity.getEntityTypeId(e)==83))
Entity.remove(e);
}
toast("플레이어와 그림을 제외한 모든 엔티티가 삭제되었습니다.");
}
});
ride.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
mobRide = true;
toast("탑승할 엔티티를 터치하세요.");
}
});
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
menuE.dismiss();
menuE = null;
}
});
layout.addView(spa);
layout.addView(rem);
layout.addView(rem2);
layout.addView(ride);
layout.addView(exit);
var scroll = makeScroll(layout, menuE);
menuE.setContentView(scroll);
menuE.showAtLocation(ctx.getWindow().getDecorView(),side|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function selectEntity(tf, btn){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var entityId = null;
var dialog = new android.app.AlertDialog.Builder(ctx);
var names = [];
var entityIds = [];
for(var n=0;n<entityData.length;n++){
names[n] = entityData[n][0];
entityIds[n] = entityData[n][1];
}
dialog.setItems(names, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
entityId = entityIds[w];
if(tf){
if(entityId==64||entityId==66||entityId==83){
toast("해당 엔티티는 소환할 수 없습니다.");
}
else{
spawn = true;
spawnId = entityId;
toast("터치하시면 해당 엔티티("+names[w]+")가 소환됩니다.");
}
}
else{
for each(var e in Entity.getAll()){
if(Entity.getEntityTypeId(e)==entityId)
Entity.remove(e);
}
toast("해당 엔티티("+names[w]+")가 삭제되었습니다.");
}
}
}));
dialog.setTitle("엔티티 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function worldEdit(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuWE = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var title = new android.widget.TextView(ctx);
title.setText("지형 수정\n");
title.setTextSize(21);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
layout.addView(title);
var we = new android.widget.Switch(ctx);
we.setText("월드 에딧");
we.setTextColor(android.graphics.Color.WHITE);
we.setChecked(w.tf);
we.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(swit, onoff){
w.tf = onoff;
}
}));
layout.addView(we);
var bi = new android.widget.Switch(ctx);
bi.setText("터치한 블록 정보");
bi.setChecked(blockInfo);
bi.setTextColor(android.graphics.Color.WHITE);
bi.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(swit, onoff){
blockInfo = onoff;
}
}));
layout.addView(bi);
var give = new android.widget.Button(ctx);
var cmd = new android.widget.Button(ctx);
var exit = new android.widget.Button(ctx);
give.setText("철칼&철괭이 지급");
cmd.setText("명령어 목록");
exit.setText("나가기");
give.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
addItemInventory(267, 1, 0);
addItemInventory(292, 1, 0);
toast("지급되었습니다.");
}
});
cmd.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
showDialog("월드 에딧 명령어 목록", "지점 1, 2는 각각 철칼과 철괭이로 터치하시면 선택됩니다.\n\n\/set n m - 블록 아이디가 n, 블록 데미지가 m인 블록으로 채운다.\n\/replace n m - n번 블록을 m번 블록으로 바꾼다.\n\/change a b c d - 블록 아이디가 a, 블록 데미지가 b인 블록을 블록 아이디가 c, 블록 데미지가 d인 블록으로 바꾼다.\n\/no tree - 나무(나무 원목&나뭇잎)를 지운다.\n\/snow - 눈을 내린다.\n\/no water - 물을 지운다.\n\/wall n m - 블록 아이디가 n, 블록 데미지가 m인 블록으로 속이 빈 벽을 생성한다.\nwall2 n m - 블록 아이디가 n, 블록 데미지가 m인 블록으로 벽을 생성한다. 벽 내부의 지형은 유지된다.\n\/circle r n m - 지점 1에 반지름이 r인 원을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n");
}
});
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
menuWE.dismiss();
menuWE = null;
}
});
layout.addView(give);
layout.addView(cmd);
layout.addView(exit);
var scroll = makeScroll(layout, menuWE);
menuWE.setContentView(scroll);
menuWE.showAtLocation(ctx.getWindow().getDecorView(),side|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function openElse(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuEL = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var title = new android.widget.TextView(ctx);
title.setText("기타 기능\n");
title.setTextSize(21);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
layout.addView(title);
var pp = new android.widget.Switch(ctx);
pp.setText("플레이어 좌표");
pp.setTextColor(android.graphics.Color.WHITE);
pp.setChecked(xyz);
pp.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(swit, onoff){
xyz = onoff;
}
}));
layout.addView(pp);
var at = new android.widget.Switch(ctx);
at.setText("자동 횃불");
at.setTextColor(android.graphics.Color.WHITE);
at.setChecked(autoTorch);
at.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(swit, onoff){
autoTorch = onoff;
}
}));
layout.addView(at);
var btns = new Array();
var menus = ["게임 속도 설정", "채팅 조작", "테러 도우미", "도배기", "웹 브라우저", "빠른 채팅", "게임 종료", "스크립트 정보", "나가기"];
for(var n in menus){
btns[n] = new android.widget.Button(ctx);
btns[n].setText(menus[n]);
}
btns[0].setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
gameSpeed();
}
});
btns[1].setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
fakeChat();
}
});
btns[2].setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
terrorHelper();
}
});
btns[3].setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
if(chatTerrorString==""){
chatTerrorSetting();
}
else{
for(var n=0;n<chatTerrorN;n++){
if(showNumber) net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat((n+1)+". "+chatTerrorString);
else net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat(chatTerrorString);
}
}
}
});
btns[3].setOnLongClickListener(new android.view.View.OnLongClickListener() {
onLongClick: function(v){
chatTerrorSetting();
return true;
}
});
btns[4].setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
openWeb();
}
});
btns[5].setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
chatList();
}
});
btns[6].setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
ModPE.leaveGame();
toast("Quit to Title");
}
});
btns[7].setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
showDialog("스크립트 정보", "스크립트 이름 : Nox Editor\n버전 : "+version+"\n최신 버전 : "+Dark.getNewestVersion()+"\n제작자 : Dark Tornado\nNox Editor는 Dark Cheater의 보급형 버전입니다.\n리뷰, 공유(비덧공유 제외), 수정은 허용하나, 무단수정 후 공유, 제작자속이기 등은 금지되어 있습니디.\n다른 에디터들과 달리, 마크을 실행시키면 버튼이 생성됩니다.\n테러 방지는 라이터, 물 양동이, 용암 양동이, 거미줄, TNT의 설치(또는 사용)를 방지하는 기능입니다.", true);
}
});
btns[8].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
menuEL.dismiss();
menuEL = null;
}
});
for(var n in menus)
layout.addView(btns[n]);
var scroll = makeScroll(layout, menuEL);
menuEL.setContentView(scroll);
menuEL.showAtLocation(ctx.getWindow().getDecorView(),side|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function gameSpeed(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var speed = 0;
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setGravity(android.view.Gravity.CENTER);
layout.setOrientation(1);
var layout1 = new android.widget.LinearLayout(ctx);
layout1.setGravity(android.view.Gravity.CENTER);
layout1.setOrientation(0);
var t1 = new android.widget.Button(ctx);
var t2 = new android.widget.Button(ctx);
var t3 = new android.widget.Button(ctx);
t1.setText("×0.5");
t2.setText("×1");
t3.setText("×2");
t1.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
speed = 1;
}
});
t2.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
speed = 2;
}
});
t3.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
speed = 3;
}
});
layout1.addView(t1);
layout1.addView(t2);
layout1.addView(t3);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setGravity(android.view.Gravity.CENTER);
layout2.setOrientation(0);
var t4 = new android.widget.Button(ctx);
var t5 = new android.widget.Button(ctx);
var t6 = new android.widget.Button(ctx);
t4.setText("×3");
t5.setText("×5");
t6.setText("×10");
t4.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
speed = 4;
}
});
t5.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
speed = 5;
}
});
t6.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
speed = 6;
}
});
layout2.addView(t4);
layout2.addView(t5);
layout2.addView(t6);
layout.addView(layout1);
layout.addView(layout2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("게임 속도 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(speed==1){
ModPE.setGameSpeed(10);
toast("게임속도가 0.5 배속으로 설정되었습니다.");
}
else if(speed==2){
ModPE.setGameSpeed(20);
toast("게임속도가 1 배속으로 설정되었습니다.");
}
else if(speed==3){
ModPE.setGameSpeed(40);
toast("게임속도가 2 배속으로 설정되었습니다.");
}
else if(speed==4){
ModPE.setGameSpeed(60);
toast("게임속도가 3 배속으로 설정되었습니다.");
}
else if(speed==5){
ModPE.setGameSpeed(100);
toast("게임속도가 5 배속으로 설정되었습니다.");
}
else if(speed==6){
ModPE.setGameSpeed(200);
toast("게임속도가 10 배속으로 설정되었습니다.");
}
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


function makeScreen(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var menu = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch : function(v, ev){
if(ev.getAction()==android.view.MotionEvent.ACTION_DOWN){
Dark.save("btnX", ev.getRawX());
Dark.save("btnY", ev.getRawY());
btn.dismiss();
makeButton();
toast("수정되었습니다.");
menu.dismiss();
}
return true;
}
}));
menu.setContentView(layout);
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth());
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(120, 0, 0, 0)));
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function armorEdit(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btns = new Array();
var menus = ["투구", "윗옷", "바지", "신발"];
for(var n in menus){
btns[n] = new android.widget.Button(ctx);
btns[n].setText(menus[n]+" (아이디 : "+Player.getArmorSlot(n)+", 데미지 : "+Player.getArmorSlotDamage(n)+")");
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
loadArmor(v.getId());
}
});
layout.addView(btns[n]);
}
var fix = new android.widget.Button(ctx);
fix.setText("갑옷 내구도 수리");
fix.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Player.setArmorSlot(0, Player.getArmorSlot(0), 0);
Player.setArmorSlot(1, Player.getArmorSlot(1), 0);
Player.setArmorSlot(2, Player.getArmorSlot(2), 0);
Player.setArmorSlot(3, Player.getArmorSlot(3), 0);
toast("수리되었습니다.");
}
});
layout.addView(fix);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("갑옷 슬롯 관리");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function loadArmor(type){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var menus = ["투구", "윗옷", "바지", "신발"];
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc1.setText("아이템 아이디 : ");
loc1.setTextSize(18);
loc2.setHint("아이템 아이디를 입력하세요");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc2.setText(Player.getArmorSlot(type)+"");
loc3.setText("아이템 데미지 : ");
loc3.setTextSize(18);
loc4.setHint("아이템 데미지를 입력하세요");
loc4.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc4.setText(Player.getArmorSlotDamage(type)+"");
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("갑옷 수정 - "+menus[type]);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Player.setArmorSlot(type, loc2.getText(), loc4.getText());
toast("수정되었습니다.");
}
}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}}));
}


function openMineDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var players = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
var checks = new Array();
for(var n in players){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(Player.getName(players[n]));
checks[n].setId(n);
if(antiMine.indexOf(players[n])!=-1) checks[n].setChecked(true);
else checks[n].setChecked(false);
checks[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff==true){
antiMine.push(players[check.getId()]);
}
else if(onoff==false){
antiMine.splice(antiMine.indexOf(players[check.getId()]), 1);
}
}
}));
layout.addView(checks[n]);
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout),
dialog.setView(scroll);
dialog.setTitle("블록 파괴 금지 대상자 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function fakeChat(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("닉네임 : ");
loc1.setTextSize(18);
loc2.setHint("닉네임을 입력하세요...");
layout.addView(loc1);
layout.addView(loc2);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc3.setText("채팅 내용 : ");
loc3.setTextSize(18);
loc4.setHint("채팅 내용을 입력하세요...");
layout.addView(loc3);
layout.addView(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("채팅 조작");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
var pe = Player.getEntity();
var pn = Player.getName(pe);
Entity.setNameTag(pe, loc2.getText()+"");
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat(loc4.getText()+"");
Entity.setNameTag(pe, pn);
toast("조작된 메시지를 보냈습니다.");
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


function setLevelExp(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("레벨 : ");
loc1.setTextSize(18);
loc2.setHint("레벨을 입력하세요...");
loc2.setText(Player.getLevel()+"");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
layout.addView(loc1);
layout.addView(loc2);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc3.setText("경험치 : ");
loc3.setTextSize(18);
loc4.setHint("경험치를 입력하세요...");
loc4.setText(Player.getExp()+"");
loc4.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
layout.addView(loc3);
layout.addView(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("레벨 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Player.setLevel(loc2.getText());
Player.setExp(loc4.getText());
toast("설정되었습니다.");
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


function weatherSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.SeekBar(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.SeekBar(ctx);
var txt1 =  Math.round(Level.getRainLevel()*100);
var txt2 =  Math.round(Level.getLightningLevel()*100);
loc1.setText("비 강도 : "+(txt1/100));
loc1.setTextSize(18);
loc3.setText("번개 강도 : "+(txt2/100));
loc3.setTextSize(18);
loc2.setMax(100);
loc4.setMax(100);
loc2.setProgress(txt1);
loc4.setProgress(txt2);
loc2.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
loc1.setText("비 강도 : "+(seek.getProgress()/100));
txt1 = seek.getProgress();
}
}));
loc4.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
loc3.setText("번개 강도 : "+(seek.getProgress()/100));
txt2 = seek.getProgress();
}
}));
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("날씨 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Level.setRainLevel(txt1/100);
Level.setLightningLevel(txt2/100);
toast("설정되었습니다.");
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


function terrorHelper(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var menus = ["라이터 지급", "TNT 지급", "물 양동이 지급", "용암 양동이 지급", "크리퍼 스폰알 지급", "배드락 지급", "포션 지급"];
dialog.setItems(menus, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(w==0) addItemInventory(259, 1, 0);
else if(w==1) addItemInventory(46, 10, 0);
else if(w==2) addItemInventory(325, 1, 8);
else if(w==3) addItemInventory(325, 1, 10);
else if(w==4) addItemInventory(383, 10, 33);
else if(w==5) addItemInventory(7, 10, 0);
else if(w==6) givePotion();
}
}));
dialog.setTitle("테러 도우미");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function givePotion(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var code = null;
var types = ["포션 종류 선택", "야간 투시", "투명화", "도약", "화염저항", "신속", "구속", "수중호흡", "회복", "고통", "독", "재생", "힘", "나약함"];
var codes = [null, 5, 7, 9, 12, 14, 17, 19, 21, 23, 26, 28, 31, 34];
var spin = new android.widget.Spinner(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, types);
spin.setAdapter(adapter);
spin.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
code = codes[p];
}
}));
layout.addView(spin);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("개수 : ");
loc1.setTextSize(18);
loc2.setHint("개수를 입력하세요...");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(loc1);
layout.addView(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 지급");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(code!=null){
addItemInventory(373, loc2.getText(), code);
toast("지급되었습니다.");
}
else{
toast("포션 종류를 선택하지 않아서 지급되지 않습니다.");
}
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


function openBlackList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var list = new android.widget.EditText(ctx);
list.setHint("닉네임을 입력하세요...");
list.setText(blackList);
layout.addView(list);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("블랙 리스트");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("저장", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
blackList = list.getText().toString();
if(list.getText()==""){
var file = new java.io.File(sdcard+"/darkTornado/noxEditor/blackList.txt");
if(file.exists()) file.delete();
}
else{
Dark.save("blackList", blackList);
}
toast("저장되었습니다.");
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


function colorList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var menus = ["검정(기본)", "빨강", "초록", "파랑", "노랑", "하양"];
dialog.setItems(menus, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
Dark.save("color", w);
}
}));
dialog.setTitle("메뉴 색상 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function menuSide(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var menus = ["왼쪽", "중앙", "오른쪽"];
dialog.setItems(menus, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
Dark.save("side", w);
if(w==0) side = android.view.Gravity.LEFT;
else if(w==1) side = android.view.Gravity.CENTER;
else side = android.view.Gravity.RIGHT;
}
}));
dialog.setTitle("메뉴 위치 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function openSetting(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuS = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var title = new android.widget.TextView(ctx);
title.setText("환경 설정\n");
title.setTextSize(21);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
layout.addView(title);
var at = new android.widget.ToggleButton(ctx);
at.setTextOn("플레이어 중복 방지");
at.setTextOff("플레이어 중복 방지");
at.setTextColor(android.graphics.Color.WHITE);
at.setChecked(antiTwo);
at.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
noEnt = antiTwo;
}
}));
layout.addView(at);
var btns = new Array();
var menus = ["버튼 위치 수정", "버튼 위치 초기화", "메뉴 위치 설정", "메뉴 색상 설정", "나가기"];
for(var n in menus){
btns[n] = new android.widget.Button(ctx);
btns[n].setText(menus[n]);
}
btns[0].setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
makeScreen();
toast("화면을 터치하여 주세요.");
}
});
btns[1].setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
var fileX = new java.io.File(sdcard+"/darkTornado/noxEditor/btnX.txt");
var fileY = new java.io.File(sdcard+"/darkTornado/noxEditor/btnY.txt");
if(fileX.exists()) fileX.delete();
if(fileY.exists()) fileY.delete();
btn.dismiss();
makeButton();
toast("초기화되었습니다.");
}
});
btns[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
menuSide();
}
});
btns[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
colorList();
}
});
btns[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
menuS.dismiss();
menuS = null;
}
});
for(var n in menus)
layout.addView(btns[n]);
var scroll = makeScroll(layout, menuS);
menuS.setContentView(scroll);
menuS.showAtLocation(ctx.getWindow().getDecorView(),side|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function openChest(x, y, z){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var i, a, it;
var data = [];
for(var n=0;n<27;n++){
i = Level.getChestSlot(x, y, z, n);
a = Level.getChestSlotCount(x, y, z, n);
it = Level.getChestSlotData(x, y, z, n);
data.push([i, a, it]);
}
var btns = new Array();
for(var n in data){
btns[n] = new android.widget.Button(ctx);
btns[n].setText("아이템 아이디 : "+data[n][0]+", 개수 : "+data[n][1]+", 데미지 : "+data[n][2]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
editChestData(v.getId(), btns[v.getId()], [data, [x, y, z]]);
}
});
layout.addView(btns[n]);
}
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("창고 내용 수정");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function editChestData(n, btn, arr){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var i, a, it;
if(arr[0][n][0]==undefined) i = 0;
else i = arr[0][n][0];
if(arr[0][n][1]==undefined) a = 0;
else a = arr[0][n][1];
if(arr[0][n][2]==undefined) it = 0;
else it = arr[0][n][2];
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.EditText(ctx);
loc1.setText("아이템 아이디 : ");
loc1.setTextSize(18);
loc2.setHint("아이템 아이디를 입력하세요");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc2.setText(i+"");
loc3.setText("아이템 개수 : ");
loc3.setTextSize(18);
loc4.setHint("아이템 개수를 입력하세요");
loc4.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc4.setText(a+"");
loc5.setText("아이템 데미지 : ");
loc5.setTextSize(18);
loc6.setHint("아이템 데미지를 입력하세요");
loc6.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc6.setText(it+"");
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("창고 내용 수정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Level.setChestSlot(arr[1][0], arr[1][1], arr[1][2], n, Number(loc2.getText()), Number(loc6.getText()), Number(loc4.getText()));
btn.setText("아이템 아이디 : "+loc2.getText()+", 개수 : "+loc4.getText()+", 데미지 : "+loc6.getText());
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


function updateDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setTitle("최신 버전 알림");
dialog.setMessage("Nox Editor의 최신 버전이 발견되었습니다.\n현재 버전 : "+version+"\n최신 버전 : "+Dark.getNewestVersion());
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("제작자 블로그", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
var uri = new android.net.Uri.parse("http:\/\/blog.naver.com\/dt3141592");
var link = new android.content.Intent(android.content.Intent.ACTION_VIEW, uri);
ctx.startActivity(link);
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


function chatTerrorSetting(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var ns = new android.widget.CheckBox(ctx);
ns.setText("반복 횟수 표시");
ns.setChecked(showNumber);
ns.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
showNumber = onoff;
}
}));
layout.addView(ns);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("도배 문구 : ");
loc1.setTextSize(18);
loc2.setHint("도배 문구를 입력하세요...");
loc2.setText(chatTerrorString);
layout.addView(loc1);
layout.addView(loc2);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc3.setText("도배 횟수 : ");
loc3.setTextSize(18);
loc4.setHint("도배 횟수를 입력하세요...");
loc4.setText(chatTerrorN+"");
layout.addView(loc3);
layout.addView(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("도배기 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
chatTerrorString = loc2.getText().toString();
chatTerrorN = loc4.getText();
toast("저장되었습니다.");
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


function openWeb(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var menu = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var loadWeb = new android.webkit.WebView(ctx);
var webSet = loadWeb.getSettings();
webSet.setJavaScriptEnabled(true);
webSet.setBuiltInZoomControls(true);
webSet.setSaveFormData(false);
webSet.setSavePassword(false);
loadWeb.setWebChromeClient(new android.webkit.WebChromeClient());
loadWeb.setWebViewClient(new android.webkit.WebViewClient());
loadWeb.loadUrl("http:\/\/www.naver.com\/");
layout2.addView(loadWeb);
var exit = new android.widget.Button(ctx);
exit.setText("뒤로/나가기");
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(loadWeb.canGoBack()){
loadWeb.goBack();
}
else{
menu.dismiss();
menu = null;
}
}
});
layout.addView(exit);
var scroll = makeScroll(layout2, menu);
layout.addView(scroll);
menu.setContentView(layout);
menu.setFocusable(true);
menu.showAtLocation(ctx.getWindow().getDecorView(),side|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function chatList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
if(Dark.read("chatList")!="") var chats = (Dark.read("chatList")+"\n설정").split("\n");
else var chats = ["설정"];
dialog.setItems(chats, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(w==chats.length-1){
chatBtnOption();
}
else{
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat(chats[w]);
toast("채팅을 보냈습니다("+chats[w]+").");
}
}
}));
dialog.setTitle("채팅 단축키 - 채팅 목록");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function chatBtnOption(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("채팅 목록 : ");
loc1.setTextSize(18);
loc2.setHint("채팅을 입력하세요...");
if(Dark.read("chatList")!="") loc2.setText(Dark.read("chatList")+"");
layout.addView(loc1);
layout.addView(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(loc2.getText()==""){
var file = new java.io.File(sdcard+"/darktornado/noxEditor/chatList.txt");
if(file.exists()) file.delete();
}
else{
Dark.save("chatList", loc2.getText().toString());
}
toast("저장되었습니다.");
}
}));
dialog.setTitle("채팅 단축키 - 설정");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function makeScroll(layout, menu){
var layoutS = new android.widget.RelativeLayout(ctx);
var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT);
var color = Dark.read("color");
if(color==1) menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
else if(color==2) menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
else if(color==3) menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
else if(color==4) menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.YELLOW));
else if(color==5) menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
else menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*2/5);
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
var scroll = new android.widget.ScrollView(ctx);
var pad = dip2px(ctx, 4);
scroll.setPadding(pad, pad, pad, pad);
scroll.setLayoutParams(svParams);
scroll.addView(layout);
layoutS.addView(scroll);
return layoutS;
}

