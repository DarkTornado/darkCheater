//Dark Cheater
//Made by Dark Tornado
//version 0.1.0
/*
© 2015 Dark Tornado, All rights reserved.
리뷰는 허용하나, 무단공유, 무단수정, 제작자속이기 등을 할 시에는 싸대기 때리러 감.
*/

Block.defineBlock(178, "Light Stone", [["end_stone",0]], 0, false, 0);
Block.setLightLevel(178, 15);
Block.setShape(178, 0, 0, 0, 0, 0, 0);

Player.addItemCreativeInv(246, 1, 0);

const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const version = "0.1.0";

var btn = null;
var btnE = null;
var menu = null;
var menuI = null;
var menuW = null;
var menuP = null;
var menuB = null;
var menuE = null;
var menuWE = null;
var menuEL = null;
var multi = false;
var locate = 0;
var side = 0;
var adding = 0;
var add = {i : 0, c : 0, d : 0};
var ad = null;
var dt = 0;
var hide = false;
var playerTarget = null;
var banList = new Array();
var entityTarget = 0;
var xyzTarget = 0;
var we = {x : new Array(2), y : new Array(2), z : new Array(2)};
var p = {p : null, t : null};
var run = false;
var rt = 0;
var rx, ry;
var btnSS = null;
var btnR = null;
var btnF = null;
var xRay = false;
var xrays = new Array(7);
var l = {x : null, y : null, z : null, b : new Array(2)};
var lx ,ly, lz;
var pass = false;
var light = false;
var noPvp = false;
var noEnt = false;
var move = 0;
var moving = false;
var tx, ty, tz;
var atp = 0;


var Dark = {
toast : function(msg){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
var toast = android.widget.Toast.makeText(ctx, "<Dark> "+msg, android.widget.Toast.LENGTH_LONG);
toast.show();
}
}));
},
makeButton : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
locate = ModPE.readData("locate");
btn = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("Dark");
button.setTextSize(10);
button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
if(Entity.getAll().length==0){
Dark.selectMode();
}
else{
if(multi==false){
darkCheater();
}
else if(multi==true){
semiDarkCheater();
}
}
}}));
button.setBackgroundColor(android.graphics.Color.argb(70, 0, 0, 0));
layout.addView(button);
btn.setContentView(layout);
btn.setWidth(dip2px(ctx, 35));
btn.setHeight(dip2px(ctx, 23));
btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
if(locate==0){
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
}
else if(locate==2){
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
}
else if(locate==3){
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 90);
}
else if(locate==4){
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.CENTER, 0, 0);
}
else if(locate==5){
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
}
else if(locate==6){
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER, 0, 0);
}
else if(locate==7){
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 0, 0);
}
else if(locate==8){
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 0);
}
else if(locate==9){
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
}
else if(locate==10){
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 2, 2);
}
}
catch(e){
Dark.toast("이 디바이스에서는 Dark Cheater를 사용할 수 없습니다.");
}
}
}));
},
selectMode : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var nn = 0;
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var radios = new android.widget.RadioGroup(ctx);
var radio1 = new android.widget.RadioButton(ctx);
radio1.setText("서버장 모드");
radio1.setId(1);
var radio2 = new android.widget.RadioButton(ctx);
radio2.setText("서버원 모드");
radio2.setId(2);
radios.addView(radio1);
radios.addView(radio2);
layout.addView(radios);
radios.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
nn = checkedId;
}
}));
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("모드 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(nn==1){
multi = false;
Dark.toast("서버장 모드로 설정되었습니다.");
}
else if(nn==2){
multi = true;
Dark.toast("서버원 모드로 설정되었습니다.");
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
},
close : function(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
if(tf){
if(menu!=null){
menu.dismiss();
menu = null;
}
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
if(menuB!=null){
menuB.dismiss();
menuB = null;
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
}
}));
},
makeEntityBtn : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
btnE = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("스폰 모드 끝내기");
button.setTextSize(12);
button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
if(btn!=null)
btnE.dismiss();
btnE = null;
entityTarget = 0;
}
}));
button.setBackgroundColor(android.graphics.Color.argb(70, 0, 0, 0));
layout.addView(button);
btnE.setContentView(layout);
btnE.setWidth(dip2px(ctx, 100));
btnE.setHeight(dip2px(ctx, 35));
btnE.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btnE.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 10, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}



}


var Ban = {
removeGonePlayerData : function(){
for(var n in banList){
if(Player.isPlayer(banList[n])==false)
banList.splice(n, 1);
}
},
isBanned : function(p){
for(var n in banList){
if(p==banList[n]){
return true;
}
}
return false;
},
removeData : function(p){
for(var n in banList){
if(p==banList[n]){
banList.splice(n, 1);
}
}
}


}



Dark.makeButton();

function dip2px(ctx, dips){
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}


function nightCheck(){
var nc1, nc2, nc3;
nc1 = Level.getTime();
nc2 = nc1/19200;
nc3 = nc2-Math.floor(nc2);
if(nc3<0.5){
return false;
}
else if(nc3>=0.5){
return true;
}

}


function teleport(e, x, y, z){
var ttt = Level.spawnMob(x, y, z, 81);
Entity.rideAnimal(e, ttt);
Entity.remove(ttt);
ModPE.showTipMessage("");
preventDefault();
}


function newLevel(){
side = ModPE.readData("side");
dt = 76;
}

function useItem(x, y, z, i, b){
if((ad==Player.getEntity()&&multi==false)||multi==true){
if(adding!=0){
if(adding==1){
addItemInventory(add.i, add.c, add.d);
}
else if(adding==2){
addItemInventory(306, 1, 0);
addItemInventory(307, 1, 0);
addItemInventory(308, 1, 0);
addItemInventory(309, 1, 0);
}
else if(adding==3){
addItemInventory(310, 1, 0);
addItemInventory(311, 1, 0);
addItemInventory(312, 1, 0);
addItemInventory(313, 1, 0);
}
else if(adding==4){
addItemInventory(383, add.c, add.d);
}
Dark.toast("아이템이 지급되었습니다.");
adding = 0;
}

}

if(ad==Player.getEntity()){
if(entityTarget!=0){
Level.spawnMob(x, y+3, z, entityTarget);
}
if(xyzTarget!=0){
we.x[xyzTarget-1] = x;
we.y[xyzTarget-1] = y;
we.z[xyzTarget-1] = z;
Dark.toast("("+x+", "+y+", "+z+")로 설정되었습니다.");
xyzTarget = 0;
}

}

if(multi)
ad = Player.getEntity();
if(i==347){
if(move==1){
Entity.setPosition(Player.getEntity(), x, y+3, z);
}
else if(move==2){
pe = Player.getEntity();
Entity.setVelX(pe, x-Player.getX());
Entity.setVelY(pe, y-Player.getY());
Entity.setVelZ(pe, z-Player.getZ());
}
else if(move==3){
pe = Player.getEntity();
Entity.setVelX(pe, x-Player.getX());
Entity.setVelY(pe, 0.7);
Entity.setVelZ(pe, z-Player.getZ());
}
}
if(moving){
Entity.setPosition(Player.getEntity(), Entity.getX(playerTarget), Entity.getY(playerTarget)+1, Entity.getZ(playerTarget));
moving = false;
}
if(multi||ad==Player.getEntity()){
if(atp==1){
tx = x;
ty = y;
tz = z;
Dark.toast("저장되었습니다.");
atp = 2;
}
else if(atp==3){
Entity.setPosition(Player.getEntity(), tx, ty+3, tz);
atp = 0;
}

}




}


function attackHook(a, v){
if(noPvp&&Player.isPlayer(a)&&Player.isPlayer(v))
preventDefault();

}


function modTick(){
if(dt>0){
dt--;
}
if(dt==1){
ad = Player.getEntity();
}
for(var n in banList){
teleport(banList[n], Entity.getX(ad), -5, Entity.getZ(ad));
}
if(p.p!=null){
var s, c;
s = Math.abs(Math.sin(Math.floor(Entity.getYaw(ad))/180*Math.PI));
c = Math.abs(Math.cos(Math.floor(Entity.getYaw(ad))/180*Math.PI));
ctx.runOnUiThread(new java.lang.Runnable({
run:function(){
if(s>c){
p.t.setText(" X : "+Math.round(Entity.getX(ad)-0.5)+", Y : "+Math.floor(Entity.getY(ad))+"\n Z : "+Math.round(Entity.getZ(ad)-0.5)+", S : X");
}
else if(s<c){
p.t.setText(" X : "+Math.round(Entity.getX(ad)-0.5)+", Y : "+Math.floor(Entity.getY(ad))+"\n Z : "+Math.round(Entity.getZ(ad)-0.5)+", S : Z");
}
}
}));
}
if(rt>0){
rt--;
}
if(run==true){
if(rt==2){
rx = Player.getX();
rz = Player.getZ();
}
else if(rt==1){
var pe = Player.getEntity();
Entity.setVelX(pe, Player.getX()-rx);
Entity.setVelZ(pe, Player.getZ()-rz);
rt = 3;
}
}
if(light){
lx = l.x;
ly = l.y;
lz = l.z;
l.x = Math.round(Entity.getX(ad)-0.5);
l.y = Math.floor(Entity.getY(ad));
l.z = Math.round(Entity.getZ(ad)-0.5);
if(l.x!=lx||l.y!=ly||l.z!=lz){
setTile(lx, ly, lz, l.b[0], l.b[1]);
l.b = [getTile(l.x, l.y, l.z), Level.getData(l.x, l.y, l.z)];
setTile(l.x, l.y, l.z, 178);
}
}


}


function entityAddedHook(e){
if(noEnt&&Player.isPlayer(e)==false&&Entity.getEntityTypeId(e)!=83)
Entity.remove(e);

}


function leaveGame(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
Dark.close(true);
if(btnE!=null){
btnE.dismiss();
btnE = null;
}
if(btnSS!=null){
btnSS.dismiss();
btnSS = null;
}
if(p.p!=null){
p.p.dismiss();
p.p = null;
}
if(btnR!=null){
btnR.dismiss();
btnR = null;
}
if(btnF!=null){
btnF.dismiss();
btnF = null;
}
}
}));
banList = new Array();
ModPE.resetFov();
run = false;

}


function darkCheater(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
if(menu==null){
try{
menu = new android.widget.PopupWindow();
var title = new android.widget.TextView(ctx);
title.setText("Dark\nCheater\n");
title.setTextSize(23);
title.setGravity(android.view.Gravity.CENTER);
title.setTextColor(android.graphics.Color.CYAN);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(title);
var button = new Array();
var menus = ["인벤토리 수정", "월드 정보 수정", "플레이어 관리", "벤 목록", "엔티티 관리", "지형 수정", "기타 기능"];
for(var n in menus){
button[n] = new android.widget.Button(ctx);
button[n].setText(menus[n]);
button[n].setBackgroundColor(setBtnColor());
}
button[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
inventorySet();
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
worldSet();
}
});
button[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
playerSet();
}
});
button[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
openBanList();
}
});
button[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
entitySet(true);
}
});
button[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
worldEdit();
}
});
button[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
elseSet(true);
}
});
for(var n in menus)
layout.addView(button[n]);
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setBackgroundColor(setBtnColor());
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(true);
}
});
layout.addView(exit);
var text = new android.widget.TextView(ctx);
text.setText("\n© 2015 Dark Tornado\n");
text.setTextSize(11);
text.setGravity(android.view.Gravity.CENTER);
layout.addView(text);
var scroll = makeScroll(layout, menu);
menu.setContentView(scroll);
if(side==0) menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP, 0, 0);
if(side==1) menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
else if(menu!=null){
Dark.close(true);
}
}
}));
}


function inventorySet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuI = new android.widget.PopupWindow();
var title = new android.widget.TextView(ctx);
title.setText("인벤토리 수정\n");
title.setTextSize(20);
title.setGravity(android.view.Gravity.CENTER);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(title);
var inv = new android.widget.Button(ctx);
var reset = new android.widget.Button(ctx);
var metal = new android.widget.Button(ctx);
var dia = new android.widget.Button(ctx);
inv.setText("아이템 추가");
reset.setText("인벤토리 리셋");
metal.setText("철갑옷 세트");
dia.setText("다이아몬드 갑옷 세트");
inv.setBackgroundColor(setBtnColor());
reset.setBackgroundColor(setBtnColor());
metal.setBackgroundColor(setBtnColor());
dia.setBackgroundColor(setBtnColor());
inv.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
addItem(false);
}
});
reset.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for(var n=0;n<36;n++)
Player.clearInventorySlot(n);
Dark.toast("인벤토리가 리셋되었습니다.");
}
});
metal.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
adding = 2;
Dark.toast("터치하시면 지급됩니다.");
}
});
dia.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
adding = 3;
Dark.toast("터치하시면 지급됩니다.");
}
});
layout.addView(inv);
layout.addView(reset);
layout.addView(metal);
layout.addView(dia);
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setBackgroundColor(setBtnColor());
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(menuI!=null){
menuI.dismiss();
menuI = null;
}
}
});
layout.addView(exit);
var scroll = makeScroll(layout, menuI);
menuI.setContentView(scroll);
menuI.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.TOP, 0, 0);
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
var title = new android.widget.TextView(ctx);
title.setText("월드 정보 수정\n");
title.setTextSize(20);
title.setGravity(android.view.Gravity.CENTER);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(title);
var text = new android.widget.TextView(ctx);
text.setText("  월드 이름 : "+Level.getWorldName()+"\n  폴더 이름 : "+Level.getWorldDir());
text.setTextSize(14);
layout.addView(text);
var time = new android.widget.Button(ctx);
var gm = new android.widget.Button(ctx);
var heal = new android.widget.Button(ctx);
var tp = new android.widget.Button(ctx);
time.setText("시간 설정");
gm.setText("게임모드 변경");
heal.setText("체력 설정");
tp.setText("플레이어 이동");
time.setBackgroundColor(setBtnColor());
gm.setBackgroundColor(setBtnColor());
heal.setBackgroundColor(setBtnColor());
tp.setBackgroundColor(setBtnColor());
time.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
timeDialog();
}
});
gm.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(Level.getGameMode()==0){
Level.setGameMode(1);
Dark.toast("크리에이티브로 변경되었습니다.");
}
else if(Level.getGameMode()==1){
Level.setGameMode(0);
Dark.toast("서바이벌로 변경되었습니다.");
}
}
});
heal.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerTarget = ad;
playerHealth();
}
});
tp.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerTp();
}
});
layout.addView(time);
layout.addView(gm);
layout.addView(heal);
layout.addView(tp);
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setBackgroundColor(setBtnColor());
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(menuW!=null){
menuW.dismiss();
menuW = null;
}
}
});
layout.addView(exit);
var scroll = makeScroll(layout, menuW);
menuW.setContentView(scroll);
menuW.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.TOP, 0, 0);
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
var title = new android.widget.TextView(ctx);
title.setText("플레이어 관리\n");
title.setTextSize(20);
title.setGravity(android.view.Gravity.CENTER);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(title);
var players = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
var radios = new android.widget.RadioGroup(ctx);
radios.setOrientation(1);
var radio = new Array();
for(var n=0;n<players.length;n++){
radio[n] = new android.widget.RadioButton(ctx);
radio[n].setText(Player.getName(players[n]));
radio[n].setId(n);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
playerTarget = players[checkedId];
}
}));
layout.addView(radios);
var button = new Array();
var menus = ["체력설정", "소환", "전송", "이동", "추방", "아이템 지급", "전원 사살" , "전원 소환"];
for(var n in menus){
button[n] = new android.widget.Button(ctx);
button[n].setText(menus[n]);
button[n].setBackgroundColor(setBtnColor());
}
button[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerHealth();
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
teleport(playerTarget, Entity.getX(ad), Entity.getY(ad)+1, Entity.getZ(ad));
}
});
button[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerTp();
}
});
button[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Entity.setPosition(ad, Entity.getX(playerTarget), Entity.getY(playerTarget), Entity.getZ(playerTarget));
}
});
button[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.toast(Player.getName(playerTarget)+"(이)가 추방되었습니다.");
Entity.remove(playerTarget);
}
});
button[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
addItem(true);
}
});
button[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for(var n in players)
Entity.setHealth(players[n], 0);
}
});
button[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for(var n in players)
teleport(players[n], Entity.getX(ad), Entity.getY(ad)+1, Entity.getZ(ad));
}
});
for(var n in menus)
layout.addView(button[n]);
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setBackgroundColor(setBtnColor());
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(menuP!=null){
menuP.dismiss();
menuP = null;
}
}
});
layout.addView(exit);
var scroll = makeScroll(layout, menuP);
menuP.setContentView(scroll);
menuP.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function openBanList(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
menuB = new android.widget.PopupWindow();
var title = new android.widget.TextView(ctx);
title.setText("밴 목록\n");
title.setTextSize(20);
title.setGravity(android.view.Gravity.CENTER);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(title);
Ban.removeGonePlayerData();
var players = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e)){
players.push(e);
}
}
var checkBox = new Array();
for(var n in players){
checkBox[n] = new android.widget.CheckBox(ctx);
checkBox[n].setText(Player.getName(players[n]));
checkBox[n].setId(n);
checkBox[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff==true){
banList.push(players[check.getId()]);
}
else if(onoff==false){
Ban.removeData(players[check.getId()]);
}
}}));
if(Ban.isBanned(players[n])){
checkBox[n].setChecked(true);
banList.splice(n, 1);
}
else{
checkBox[n].setChecked(false);
}
layout.addView(checkBox[n]);
}
var reset = android.widget.Button(ctx);
reset.setText("밴 목록 초기화");
reset.setBackgroundColor(setBtnColor());
reset.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
banList = new Array();
Dark.toast("밴 목록이 초기화되었습니다.");
}
});
layout.addView(reset);
var exit = android.widget.Button(ctx);
exit.setText("나가기");
exit.setBackgroundColor(setBtnColor());
exit.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
if(menuB!=null){
menuB.dismiss();
menuB = null;
}
}
});
layout.addView(exit);
var scroll = makeScroll(layout, menuB);
menuB.setContentView(scroll);
menuB.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage("error "+e+", "+e.lineNumber);
}
} }));

}


function entitySet(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuE = new android.widget.PopupWindow();
var title = new android.widget.TextView(ctx);
title.setText("엔티티 관리\n");
title.setTextSize(20);
title.setGravity(android.view.Gravity.CENTER);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(title);
var entityId = null;
var names = ["닭", "소", "돼지", "양", "늑대", "NPC", "버섯소", "오징어", "박쥐", "좀비", "크리퍼", "스켈레톤", "거미", "좀비 피그맨", "슬라임", "엔더맨", "좀벌레", "동굴 거미", "가스트", "마그마 큐브", "드롭된 아이템", "활성화된 TNT", "떨어지는 블록", "화살", "눈덩이", "달걀", "그림", "마인카트"];
var animals = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
for each(var e in Entity.getAll()){
if(Entity.getEntityTypeId(e)==10) animals[0].push(e);
if(Entity.getEntityTypeId(e)==11) animals[1].push(e);
if(Entity.getEntityTypeId(e)==12) animals[2].push(e);
if(Entity.getEntityTypeId(e)==13) animals[3].push(e);
if(Entity.getEntityTypeId(e)==14) animals[4].push(e);
if(Entity.getEntityTypeId(e)==15) animals[5].push(e);
if(Entity.getEntityTypeId(e)==16) animals[6].push(e);
if(Entity.getEntityTypeId(e)==17) animals[7].push(e);
if(Entity.getEntityTypeId(e)==19) animals[8].push(e);
if(Entity.getEntityTypeId(e)==32) animals[9].push(e);
if(Entity.getEntityTypeId(e)==33) animals[10].push(e);
if(Entity.getEntityTypeId(e)==34) animals[11].push(e);
if(Entity.getEntityTypeId(e)==35) animals[12].push(e);
if(Entity.getEntityTypeId(e)==36) animals[13].push(e);
if(Entity.getEntityTypeId(e)==37) animals[14].push(e);
if(Entity.getEntityTypeId(e)==38) animals[15].push(e);
if(Entity.getEntityTypeId(e)==39) animals[16].push(e);
if(Entity.getEntityTypeId(e)==40) animals[17].push(e);
if(Entity.getEntityTypeId(e)==41) animals[18].push(e);
if(Entity.getEntityTypeId(e)==42) animals[19].push(e);
if(Entity.getEntityTypeId(e)==64) animals[20].push(e);
if(Entity.getEntityTypeId(e)==65) animals[21].push(e);
if(Entity.getEntityTypeId(e)==66) animals[22].push(e);
if(Entity.getEntityTypeId(e)==80) animals[23].push(e);
if(Entity.getEntityTypeId(e)==81) animals[24].push(e);
if(Entity.getEntityTypeId(e)==82) animals[25].push(e);
if(Entity.getEntityTypeId(e)==83) animals[26].push(e);
if(Entity.getEntityTypeId(e)==84) animals[27].push(e);
}
var radios = new android.widget.RadioGroup(ctx);
radios.setOrientation(1);
var radio = new Array();
for(var n in names){
radio[n] = new android.widget.RadioButton(ctx);
radio[n].setText(names[n]+"("+animals[n].length+")");
radio[n].setId(n);
if(tf==true)
radios.addView(radio[n]);
}
if(tf==false){
for(var n=0;n<20;n++)
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
if(checkedId==0) entityId = 10;
if(checkedId==1) entityId = 11;
if(checkedId==2) entityId = 12;
if(checkedId==3) entityId = 13;
if(checkedId==4) entityId = 14;
if(checkedId==5) entityId = 15;
if(checkedId==6) entityId = 16;
if(checkedId==7) entityId = 17;
if(checkedId==8) entityId = 19;
if(checkedId==9) entityId = 32;
if(checkedId==10) entityId = 33;
if(checkedId==11) entityId = 34;
if(checkedId==12) entityId = 35;
if(checkedId==13) entityId = 36;
if(checkedId==14) entityId = 37;
if(checkedId==15) entityId = 38;
if(checkedId==16) entityId = 39;
if(checkedId==17) entityId = 40;
if(checkedId==18) entityId = 41;
if(checkedId==19) entityId = 42;
if(checkedId==20) entityId = 64;
if(checkedId==21) entityId = 65;
if(checkedId==22) entityId = 66;
if(checkedId==23) entityId = 80;
if(checkedId==24) entityId = 81;
if(checkedId==25) entityId = 82;
if(checkedId==26) entityId = 83;
if(checkedId==27) entityId = 84;
}
}));
layout.addView(radios);

var spawn = new android.widget.Button(ctx);
var delete1 = new android.widget.Button(ctx);
var delete2 = new android.widget.Button(ctx);
spawn.setText("엔티티 스폰");
delete1.setText("엔티티 삭제");
delete2.setText("모든 엔티티 삭제");
spawn.setBackgroundColor(setBtnColor());
delete1.setBackgroundColor(setBtnColor());
delete2.setBackgroundColor(setBtnColor());
spawn.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
if(tf==true){
if(entityId==64||entityId==66||entityId==83)
Dark.toast("해당 엔티티는 소환할 수 없습니다.");
else{
entityTarget = entityId;
Dark.toast("해당 엔티티가 선택되었습니다.");
Dark.makeEntityBtn();
}
}
else if(tf==false){
giveSpawnEgg(entityId);
}
}
});
delete1.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
for each(var e in Entity.getAll()){
if(Entity.getEntityTypeId(e)==entityId)
Entity.remove(e);
}
Dark.toast("해당 엔티티가 삭제되었습니다.");
}
});
delete2.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
for each(var e in Entity.getAll()){
if(!(Player.isPlayer(e)||Entity.getEntityTypeId(e)==83)){
Entity.remove(e);
}
}
Dark.toast("플레이어와 그림을 제외한 모든 엔티티가 삭제되었습니다.");
}
});
layout.addView(spawn);
if(tf){
layout.addView(delete1);
layout.addView(delete2);
}
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setBackgroundColor(setBtnColor());
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(menuE!=null){
menuE.dismiss();
menuE = null;
}
}
});
layout.addView(exit);
var scroll = makeScroll(layout, menuE);
menuE.setContentView(scroll);
menuE.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function worldEdit(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
try{
menuWE = new android.widget.PopupWindow();
var title = new android.widget.TextView(ctx);
title.setText("지형 수정\n");
title.setTextSize(20);
title.setGravity(android.view.Gravity.CENTER);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(title);
var p1 = new android.widget.Button(ctx);
p1.setText("지점 1 입력");
p1.setBackgroundColor(setBtnColor());
p1.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
firstPoint();
}
});
var p2 = new android.widget.Button(ctx);
p2.setText("지점 2 입력");
p2.setBackgroundColor(setBtnColor());
p2.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
secondPoint();
}
});
var set = android.widget.Button(ctx);
var replace = android.widget.Button(ctx);
set.setText("블록 설정");
replace.setText("블록 변경");
set.setBackgroundColor(setBtnColor());
replace.setBackgroundColor(setBtnColor());
set.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
setDialog();
}
});
replace.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
replaceDialog();
}
});
layout.addView(p1);
layout.addView(p2);
layout.addView(set);
layout.addView(replace);
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setBackgroundColor(setBtnColor());
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(menuWE!=null){
menuWE.dismiss();
menuWE = null;
}
}
});
layout.addView(exit);
var scroll = makeScroll(layout, menuWE);
menuWE.setContentView(scroll);
menuWE.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function elseSet(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuEL = new android.widget.PopupWindow();
var title = new android.widget.TextView(ctx);
title.setText("기타 기능\n");
title.setTextSize(20);
title.setGravity(android.view.Gravity.CENTER);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(title);
var buttonT = new Array();
var menusT = ["스크린 샷 버튼", "플레이어 좌표", "PVP 방지", "공중부양", "X-Ray", "엔티티 생성 방지", "등블", "블록 통과", "R/W & Zoom"];
for(var n in menusT){
buttonT[n] = new android.widget.ToggleButton(ctx);
buttonT[n].setTextOn(menusT[n]);
buttonT[n].setTextOff(menusT[n]);
}
if(btnSS==null) buttonT[0].setChecked(false);
else if(btnSS!=null) buttonT[0].setChecked(true);
if(p.p==null) buttonT[1].setChecked(false);
else if(p.p!=null) buttonT[1].setChecked(true);
buttonT[2].setChecked(noPvp);
buttonT[3].setChecked(Player.canFly());
buttonT[4].setChecked(xRay);
buttonT[5].setChecked(noEnt);
buttonT[6].setChecked(light);
buttonT[7].setChecked(pass);
if(btnR==null) buttonT[8].setChecked(false);
else if(btnR!=null) buttonT[8].setChecked(true);
buttonT[0].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
makeScreenShotButton();
}
else if(onoff==false){
if(btnSS!=null){
btnSS.dismiss();
btnSS = null;
}
}
}
}));
buttonT[1].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
try{
p.p = new android.widget.PopupWindow();
p.t = new android.widget.TextView(ctx)
p.t.setText(" X : "+Math.round(Entity.getX(ad)-0.5)+", Y : "+Math.floor(Entity.getY(ad))+"\n Z : "+Math.round(Entity.getZ(ad)-0.5)+", S : X");
p.t.setTextSize(13);
p.p.setContentView(p.t);
p.p.setWidth(dip2px(ctx, 110));
p.p.setHeight(dip2px(ctx, 37));
p.p.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 80, 80, 80)));
p.p.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP, 80, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
else if(onoff==false){
if(p.p!=null){
p.p.dismiss();
p.p = null;
}
}
}
}));
buttonT[2].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
noPvp = true;
}
else if(onoff==false){
noPvp = false;
}
}
}));
buttonT[3].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
Player.setCanFly(true);
}
else if(onoff==false){
Player.setCanFly(false);
}
}
}));
buttonT[4].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
xRayOn(true);
}
else if(onoff==false){
xRayOn(false);
}
}
}));
buttonT[5].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
noEnt = true;
Dark.toast("플레이어와 그림은 예외입니다.");
}
else if(onoff==false){
noEnt = false;
}
}
}));
buttonT[6].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
light = true;
}
else if(onoff==false){
light = false;
setTile(lx, ly, lz, l.b[0], l.b[1]);
l.b = [getTile(l.x, l.y, l.z), Level.getData(l.x, l.y, l.z)];
}
}
}));
buttonT[7].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
Entity.setCollisionSize(Player.getEntity(), -1, -1);
pass = true;
}
else if(onoff==false){
Entity.setCollisionSize(Player.getEntity(), 1, 2);
pass = false;
}
}
}));
buttonT[8].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
makeTwoBtn();
}
else if(onoff==false){
if(btnR!=null){
btnR.dismiss();
btnR = null;
}
if(btnF!=null){
btnF.dismiss();
btnF = null;
}
ModPE.resetFov();
run = false;
}
}
}));
if(tf==true){
for(var n in menusT)
layout.addView(buttonT[n]);
}
else if(tf==false){
layout.addView(buttonT[0]);
layout.addView(buttonT[1]);
layout.addView(buttonT[3]);
layout.addView(buttonT[4]);
layout.addView(buttonT[6]);
layout.addView(buttonT[7]);
layout.addView(buttonT[8]);
}
var button = new Array();
var menus = ["이동 방식 선택", "좌표 기억/이동", "버튼 위치 수정", "메뉴 위치 수정", "도움말", "서버원 모드", "게임 종료"];
for(var n in menus){
button[n] = new android.widget.Button(ctx);
button[n].setText(menus[n]);
button[n].setBackgroundColor(setBtnColor());
}
button[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
clockMoving();
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(atp==0){
Dark.toast("도착 지점을 선택(터치)하세요.");
atp = 1;
}
else if(atp==2){
Dark.toast("터치하시면 이동됩니다.");
atp = 3;
}
}
});
button[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
buttonLocation();
}
});
button[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(side==0){
side = 1;
Dark.toast("왼쪽으로 설정되었습니다.");
}
else if(side==1){
side = 0;
Dark.toast("오른쪽으로 설정되었습니다.");
}
ModPE.saveData("side", side);
Dark.close(true);
}
});
button[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.showDialog("도움말", "스크립트 이름 : Dark Cheater\n버전 : "+version+"\n제작자 : Dark Tornado\n사용법은 버튼들만 보셔도 아실 것 같습니다...버튼을 누르시면 토스트 메시지로 안내사항(?) 같은 것이 뜹니다. 엔티티 스폰은 해당 엔티티를 선택하시고, 원하시는 곳을 터치하시면 스폰됩니다. 서버원 모드에서는 스폰알로 스폰합니다. 서버원 모드는 서버장 모드 중 서버원이 키고 들어가도 정상작동하는 기능들만 넣은겁니다.", true);
}
});
button[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(true);
Dark.toast("서버원 모드가 되었습니다.");
multi = true;
}
});
button[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
ModPE.leaveGame();
Dark.toast("Quit to Title");
}
});
if(tf==true){
for(var n in menus)
layout.addView(button[n]);
}
else if(tf==false){
button[7] = new android.widget.Button(ctx);
button[7].setText("서버장 모드");
button[7].setBackgroundColor(setBtnColor());
button[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(true);
Dark.toast("서버장 모드가 되었습니다.");
multi = false;
}
});
layout.addView(button[2]);
layout.addView(button[3]);
layout.addView(button[4]);
layout.addView(button[7]);
layout.addView(button[5]);
}
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setBackgroundColor(setBtnColor());
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(menuEL!=null){
menuEL.dismiss();
menuEL = null;
}
}
});
layout.addView(exit);
var scroll = makeScroll(layout, menuEL);
menuEL.setContentView(scroll);
menuEL.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}



function addItem(tf){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);

var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.EditText(ctx);

loc1.setText("아이템코드 : ");
loc1.setTextSize(18);
loc2.setHint("아이템코드를 입력하세요");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc3.setText("아이템 개수 : ");
loc3.setTextSize(18);
loc4.setHint("아이템 개수를 입력하세요");
loc4.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
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

var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("아이템 지급");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(tf==false){
add.i = loc2.getText();
add.c = loc4.getText();
add.d = loc6.getText();
Dark.toast("터치하시면 지급됩니다.");
adding = 1;
}
else if(tf==true){
Level.dropItem(Entity.getX(playerTarget), Entity.getY(playerTarget), Entity.getZ(playerTarget), 0, loc2.getText(), loc4.getText(), loc6.getText());
Dark.toast("지급되었습니다.");
}
}
}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}}));
}


function timeDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("시간 : ");
loc1.setTextSize(18);
loc2.setHint("시간을 입력하세요");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
layout.addView(loc1);
layout.addView(loc2);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(0);
layout2.setGravity(android.view.Gravity.CENTER);
var button = new Array();
var menus = [" 일출 ", " 낮 ", " 일몰 ", " 밤 "];
for(var n in menus){
button[n] = new android.widget.Button(ctx);
button[n].setText(menus[n]);
}
button[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
loc2.setText("0");
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
loc2.setText("500");
}
});
button[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
loc2.setText("9600");
}
});
button[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
loc2.setText("14000");
}
});
for(var n in menus)
layout2.addView(button[n]);
layout.addView(layout2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("시간 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Level.setTime(loc2.getText());
Dark.toast("시간이 "+loc2.getText()+"으로 설정되었습니다.");
}
}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}}));

}


function playerHealth(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("체력 : ");
loc1.setTextSize(18);
loc2.setHint("체력을 입력하세요");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(loc1);
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("체력 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Entity.setHealth(playerTarget, loc2.getText());
Dark.toast("체력이 "+loc2.getText()+"으로 설정되었습니다.");
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


function playerTp(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
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
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("플레이어 이동");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(playerTarget==ad) Entity.setPosition(ad, loc2.getText(), loc4.getText(), loc6.getText());
else teleport(playerTarget, loc2.getText(), loc4.getText(), loc6.getText());
Dark.toast("이동되었습니다.");
}
}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}}));

}


function firstPoint(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var p1x = new android.widget.EditText(ctx);
var p1y = new android.widget.EditText(ctx);
var p1z = new android.widget.EditText(ctx);
p1x.setHint("x좌표");
p1y.setHint("y좌표");
p1z.setHint("z좌표");
p1x.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
p1y.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
p1z.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
var p1h = android.widget.Button(ctx);
p1h.setText("플레이어(머리)의 좌표로 설정");
p1h.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
p1x.setText(Math.floor(Entity.getX(ad))+"");
p1y.setText(Math.floor(Entity.getY(ad))+"");
p1z.setText(Math.floor(Entity.getZ(ad))+"");
}
});
var p1t = android.widget.Button(ctx);
p1t.setText("터치한 곳의 좌표로 설정");
p1t.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
xyzTarget = 1;
Dark.toast("취소 버튼을 누르시고, 지점 1이 될 곳을 터치하세요.");
dialog = null;
}
});
layout.addView(p1x);
layout.addView(p1y);
layout.addView(p1z);
layout.addView(p1h);
layout.addView(p1t);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("지점 1 선택");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
we.x[0] = p1x.getText();
we.y[0] = p1y.getText();
we.z[0] = p1z.getText();
Dark.toast("설정되었습니다.");
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


function secondPoint(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var p2x = new android.widget.EditText(ctx);
var p2y = new android.widget.EditText(ctx);
var p2z = new android.widget.EditText(ctx);
p2x.setHint("x좌표");
p2y.setHint("y좌표");
p2z.setHint("z좌표");
p2x.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
p2y.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
p2z.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
var p2h = android.widget.Button(ctx);
p2h.setText("플레이어(머리)의 좌표로 설정");
p2h.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
p2x.setText(Math.floor(Entity.getX(ad))+"");
p2y.setText(Math.floor(Entity.getY(ad))+"");
p2z.setText(Math.floor(Entity.getZ(ad))+"");
}
});
var p2t = android.widget.Button(ctx);
p2t.setText("터치한 곳의 좌표로 설정");
p2t.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
xyzTarget = 2;
Dark.toast("취소 버튼을 누르시고, 지점 2가 될 곳을 터치하세요.");
}
});
layout.addView(p2x);
layout.addView(p2y);
layout.addView(p2z);
layout.addView(p2h);
layout.addView(p2t);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("지점 2 선택");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
we.x[1] = p2x.getText();
we.y[1] = p2y.getText();
we.z[1] = p2z.getText();
Dark.toast("설정되었습니다.");
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


function setDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc1.setText("블록 코드 : ");
loc1.setTextSize(18);
loc2.setHint("블록 코드를 입력하세요");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc3.setText("블록 데미지 : ");
loc3.setTextSize(18);
loc4.setHint("블록 데미지를 입력하세요");
loc4.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("블록 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
var x1, x2, y1, y2, z1, z2;
x1 = Math.min(we.x[0], we.x[1]);
y1 = Math.min(we.y[0], we.y[1]);
z1 = Math.min(we.z[0], we.z[1]);
x2 = Math.max(we.x[0], we.x[1]);
y2 = Math.max(we.y[0], we.y[1]);
z2 = Math.max(we.z[0], we.z[1]);
for(var xx=x1;xx<x2+1;xx++)
for(var yy=y1;yy<y2+1;yy++)
for(var zz=z1;zz<z2+1;zz++)
setTile(xx, yy, zz, loc2.getText(), loc4.getText());
Dark.toast("설정되었습니다.");
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
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
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
loc1.setText("블록 코드 : ");
loc1.setTextSize(18);
loc2.setHint("블록 코드를 입력하세요");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc3.setText("블록 데미지 : ");
loc3.setTextSize(18);
loc4.setHint("블록 데미지를 입력하세요");
loc4.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc5.setText("\n이 블록(들)으로");
loc6.setText("블록 코드 : ");
loc6.setTextSize(18);
loc7.setHint("블록 코드를 입력하세요");
loc7.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc8.setText("블록 데미지 : ");
loc8.setTextSize(18);
loc9.setHint("블록 데미지를 입력하세요");
loc9.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);

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

var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("블록변경");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
var x1, x2, y1, y2, z1, z2;
x1 = Math.min(we.x[0], we.x[1]);
y1 = Math.min(we.y[0], we.y[1]);
z1 = Math.min(we.z[0], we.z[1]);
x2 = Math.max(we.x[0], we.x[1]);
y2 = Math.max(we.y[0], we.y[1]);
z2 = Math.max(we.z[0], we.z[1]);
for(var xx=x1;xx<x2+1;xx++)
for(var yy=y1;yy<y2+1;yy++)
for(var zz=z1;zz<z2+1;zz++)
if(getTile(xx, yy, zz)==loc2.getText()){
if(loc4.getText()==""){
setTile(xx, yy, zz, loc7.getText(), loc9.getText());
}
else{
if(Level.getData(xx, yy, zz)==loc4.getText()){
setTile(xx, yy, zz, loc7.getText(), loc9.getText());
}
}
}
Dark.toast("설정되었습니다.");
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


function makeScreenShotButton(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
btnSS = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("SS");
button.setBackgroundColor(setBtnColor());
button.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
ModPE.takeScreenshot("Dark_Capture");
Dark.toast("화면이 캡쳐되었습니다.");
}
}));
layout.addView(button);
btnSS.setContentView(layout);
btnSS.setWidth(dip2px(ctx, 50));
btnSS.setHeight(dip2px(ctx, 40));
btnSS.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(70, 0, 0, 0)));
btnSS.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 2, 180);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function xRayOn(tf){

if(tf==true){
xrays = [Entity.getX(ad), Entity.getY(ad), Entity.getZ(ad)];
xrays[3] = getTile(xrays[0], xrays[1], xrays[2]);
xrays[4] = Level.getData(xrays[0], xrays[1], xrays[2]);
xrays[5] = getTile(xrays[0], xrays[1]-1, xrays[2]);
xrays[6] = Level.getData(xrays[0], xrays[1]-1, xrays[2]);
setTile(xrays[0], xrays[1], xrays[2], 89);
setTile(xrays[0], xrays[1]-1, xrays[2], 89);
xRay = true;
}
else if(tf==false){
setTile(xrays[0], xrays[1], xrays[2], xrays[3], xrays[4]);
setTile(xrays[0], xrays[1]-1, xrays[2], xrays[5], xrays[6]);
xRay = false;
}

}


function makeTwoBtn(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
btnR = new android.widget.PopupWindow();
btnF = new android.widget.PopupWindow();
var layout1 = new android.widget.RelativeLayout(ctx);
var layout2 = new android.widget.RelativeLayout(ctx);
var rw = new android.widget.ToggleButton(ctx);
var zoom = new android.widget.ToggleButton(ctx);
rw.setTextOn("Run");
rw.setTextOff("Walk");
zoom.setTextOn("Zoom");
zoom.setTextOff("Zoom");
rw.setChecked(run);
zoom.setChecked(false);
rw.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
run = true;
rt = 4;
}
else if(onoff==false){
run = false;
rt = 0;
}
}
}));
zoom.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
ModPE.setFov(15);
}
else if(onoff==false){
ModPE.resetFov();
}
}
}));
layout1.addView(rw);
layout2.addView(zoom);
btnR.setContentView(layout1);
btnR.setWidth(dip2px(ctx, 70));
btnR.setHeight(dip2px(ctx, 40));
btnR.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btnR.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, -210, 0);
btnF.setContentView(layout2);
btnF.setWidth(dip2px(ctx, 70));
btnF.setHeight(dip2px(ctx, 40));
btnF.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btnF.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 210, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function clockMoving(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
var radios = new android.widget.RadioGroup(ctx);
radios.setOrientation(1);
var radio1 = new android.widget.RadioButton(ctx);
var radio2 = new android.widget.RadioButton(ctx);
var radio3 = new android.widget.RadioButton(ctx);
var radio4 = new android.widget.RadioButton(ctx);
radio1.setText("순간이동");
radio2.setText("순보");
radio3.setText("플래시 점프");
radio4.setText("비활성화");
radio1.setId(1);
radio2.setId(2);
radio3.setId(3);
radio4.setId(4);
radios.addView(radio1);
radios.addView(radio2);
radios.addView(radio3);
radios.addView(radio4);
radios.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
if(checkedId==1){
move = 1;
}
if(checkedId==2){
move = 2;
}
if(checkedId==3){
move = 3;
}
if(checkedId==4){
move = 0;
}
}
}));
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(radios);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("이동 방식 선택");
dialog.setView(scroll);
dialog.setNegativeButton("확인", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function buttonLocation(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);

var layout1 = new android.widget.LinearLayout(ctx);
layout1.setGravity(android.view.Gravity.CENTER);
layout1.setOrientation(0);
var loc1 = new android.widget.Button(ctx);
var loc2 = new android.widget.Button(ctx);
var loc3 = new android.widget.Button(ctx);
loc1.setText("↖");
loc2.setText("↑");
loc3.setText("↗");
loc1.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
locate = 0;
Dark.toast("수정되었습니다.");
}
});
loc2.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
locate = 2;
Dark.toast("수정되었습니다.");
}
});
loc3.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
locate = 3;
Dark.toast("수정되었습니다.");
}
});
layout1.addView(loc1);
layout1.addView(loc2);
layout1.addView(loc3);

var layout2 = new android.widget.LinearLayout(ctx);
layout2.setGravity(android.view.Gravity.CENTER);
layout2.setOrientation(0);
var loc4 = new android.widget.Button(ctx);
var loc5 = new android.widget.Button(ctx);
var loc6 = new android.widget.Button(ctx);
loc4.setText("←");
loc5.setText("○");
loc6.setText("→");
loc4.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
locate = 4;
Dark.toast("수정되었습니다.");
}
});
loc5.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
locate = 5;
Dark.toast("수정되었습니다.");
}
});
loc6.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
locate = 6;
Dark.toast("수정되었습니다.");
}
});
layout2.addView(loc4);
layout2.addView(loc5);
layout2.addView(loc6);

var layout3 = new android.widget.LinearLayout(ctx);
layout3.setGravity(android.view.Gravity.CENTER);
layout3.setOrientation(0);
var loc7 = new android.widget.Button(ctx);
var loc8 = new android.widget.Button(ctx);
var loc9 = new android.widget.Button(ctx);
loc7.setText("↙");
loc8.setText("↓ ");
loc9.setText("↘");
loc7.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
locate = 7;
Dark.toast("수정되었습니다.");
}
});
loc8.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
locate = 8;
Dark.toast("수정되었습니다.");
}
});
loc9.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
locate = 9;
Dark.toast("수정되었습니다.");
}
});
layout3.addView(loc7);
layout3.addView(loc8);
layout3.addView(loc9);

layout.addView(layout1);
layout.addView(layout2);
layout.addView(layout3);

dialog.setTitle("버튼 위치 수정");
dialog.setView(layout);
dialog.setNegativeButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
ModPE.saveData("locate", locate);
if(btn!=null){
btn.dismiss();
btn = null;
}
Dark.makeButton();
}
}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}}));
}



function semiDarkCheater(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
if(menu==null){
try{
menu = new android.widget.PopupWindow();
var title = new android.widget.TextView(ctx);
title.setText("Dark\nCheater\n");
title.setTextSize(23);
title.setGravity(android.view.Gravity.CENTER);
title.setTextColor(android.graphics.Color.CYAN);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(title);
var button = new Array();
var menus = ["인벤토리 수정", "플레이어 이동", "이동 방식 설정", "좌표 기억/이동", "엔티티 스폰", "플레이어에게 이동", "기타 기능"];
for(var n in menus){
button[n] = new android.widget.Button(ctx);
button[n].setText(menus[n]);
button[n].setBackgroundColor(setBtnColor());
}
button[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
inventorySet();
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
playerTarget = ad;
playerTp();
}
});
button[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
clockMoving();
}
});
button[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
if(atp==0){
Dark.toast("도착 지점을 선택(터치)하세요.");
atp = 1;
}
else if(atp==2){
Dark.toast("터치하시면 이동됩니다.");
atp = 3;
}
}
});
button[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
entitySet(false);
}
});
button[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
goToPlayer();
}
});
button[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
elseSet(false);
}
});
for(var n in menus)
layout.addView(button[n]);
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setBackgroundColor(setBtnColor());
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(true);
}
});
layout.addView(exit);
var text = new android.widget.TextView(ctx);
text.setText("\n© 2015 Dark Tornado\n");
text.setTextSize(11);
text.setGravity(android.view.Gravity.CENTER);
layout.addView(text);
var scroll = makeScroll(layout, menu);
menu.setContentView(scroll);
if(side==0) menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP, 0, 0);
if(side==1) menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
else if(menu!=null){
Dark.close(true);
}
}
}));
}


function goToPlayer(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
Dark.toast("플레이어를 선택하세요");
var player = null;
var players = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e)){
players.push(e);
}
}
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
var radios = new android.widget.RadioGroup(ctx);
radios.setOrientation(1);
var radio = new Array();
for(var n in players){
radio[n] = new android.widget.RadioButton(ctx);
radio[n].setText(Player.getName(players[n]));
radio[n].setId(n);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
player = players[checkedId];
Dark.toast("위치 : "+Math.round(Entity.getX(player)-0.5)+", "+Math.floor(Entity.getY(player))+", "+Math.round(Entity.getZ(player)-0.5));
}
}));
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(radios);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("플레이어에게 이동");
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
playerTarget = player;
moving = true;
Dark.toast("터치하시면 이동됩니다");
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


function giveSpawnEgg(n){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("개수 : ");
loc1.setTextSize(18);
loc2.setHint("개수를 입력하세요");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(loc1);
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("개수 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
add.c = loc2.getText();
add.d = n;
Dark.toast("터치하시면 지급됩니다.");
adding = 4;
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



function setBtnColor(){
return android.graphics.Color.argb(80, 20, 20, 20);
}


function makeScroll(layout, menu){
var layoutS = new android.widget.RelativeLayout(ctx);
var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT);
var scroll = new android.widget.ScrollView(ctx);
var pad = dip2px(ctx,3);
scroll.setPadding(pad, pad, pad, pad);
scroll.setLayoutParams(svParams);
scroll.addView(layout);
layoutS.addView(scroll);
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(70, 0, 0, 0)));
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*1/3);
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
return layoutS;
}


