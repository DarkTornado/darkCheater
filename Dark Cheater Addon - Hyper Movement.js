/*
Dark Cheater Addon - Hyper Movement
© 2014-2017 Dark Tornado All rights reserved.
version 1.0
Hyper Movement 0.5.0에 대응됨.
HM - Hyper Movement on(Hyper Movement 활성화 버튼)
SJ - Super Jump(슈퍼점프)
F - Flying(바라보는 방향으로 비행)
S - Staying(공중체류)
F/B - Front/Back(비행방향 변경(앞/뒤))
C - Climing. Double touch is Hyper Movement off(벽타기, 더블터치시 Hyper Movement 비활성화)
P - Passing Block(블록 통과)
tp - Teleporting(바라보는 곳으로 tp)
mc - Magic Carpet on/off(매직카펫 활성화/비활성화)
Move/T.P./W.W./F.J - Teleport/Wind Walk/Flash Jump
run/walk(Toggle Button) - Run/Walk(달리기/걷기)
*/

const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var btn = null;
var menu = null;
var btnR = null;
var btnM = null;
var cross = null;

var fly = 0;
var run = false;
var rt = 0;
var rx, ry;
var px, py, pz;
var fb = false;
var ft = 0;
var mc = false
var mx, my, mz;
var tp = false
var loc = 0;
var pass = false;
var move = 0;

const HM = {
getPos : function(){
var px, py, pz, yaw, sin, cos, tan, pcos;
px = Player.getX();
py = Player.getY();
pz = Player.getZ();
yaw = Math.floor(getYaw());
pitch = Math.floor(getPitch());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
tan = -Math.sin(pitch/180*Math.PI);
pcos = Math.cos(pitch/180*Math.PI);
for(var gun=0;gun<150;gun++){
if([0, 8, 9, 101, 102, 106, 51, 18, 11].indexOf(getTile(px+gun*sin*pcos, py+gun*tan, pz+gun*cos*pcos))==-1)
return [px+gun*sin*pcos, py+gun*tan, pz+gun*cos*pcos];
}
return [px+150*sin*pcos, py+150*tan, pz+150*cos*pcos];
}

};

function dip2px(ctx, dips){
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function toast(msg){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
var toast = android.widget.Toast.makeText(ctx, "<H.M.> "+msg, android.widget.Toast.LENGTH_LONG);
toast.show();
}
}));
}

function makeHMButton(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
btn = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("HM");
button.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v){
if(v.getText()=="HM"){
hyperMovement(v);
v.setText("SJ");
toast("Hyper Movement on");
}
else{
if(run) Entity.setVelY(Player.getEntity(), 1);
else Entity.setVelY(Player.getEntity(), 0.7);
}
}
}));
button.setBackgroundColor(android.graphics.Color.argb(100, 150, 150, 150));
layout.addView(button);
btn.setContentView(layout);
btn.setWidth(dip2px(ctx, 50));
btn.setHeight(dip2px(ctx, 35));
btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

function hyperMovement(btn){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menu = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btns = [];
var txts = ["F", "S", "f/b", "C", "P", "tp", "mc"];
for(var n in txts){
btns[n] = new android.widget.Button(ctx);
btns[n].setText(txts[n]);
btns[n].setTextColor(android.graphics.Color.WHITE);
btns[n].setBackgroundColor(android.graphics.Color.argb(100, 150, 150, 150));
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v){
switch(v.getId()){
case 0 : 
if(fly!=2){
fly = 2;
toast("Flying Mode");
}
else if(fly==2){
fly = 0;
toast("Flying Mode off");
}
break;
case 1 : 
if(fly==1){
fly = 0;
toast("Staying Mode off");
}
else{
fly = 1;
toast("Staying Mode");
}
break;
case 2 : 
if(fb){
fb = false;
toast("Front Mode");
}
else{
fb = true;
toast("Back Mode");
}
break;
case 3 : 
climbing(btn);
break;
case 4 : 
if(pass){
Entity.setCollisionSize(Player.getEntity(), 0.7, 1.8);
toast("Passing Mode off");
pass = false;
}
else{
Entity.setCollisionSize(Player.getEntity(), -1, -1);
toast("Passing Mode on");
pass = true;
}
break;
case 5 : 
if(!tp){
makeCross(true);
tp = true;
}
else{
makeCross(false);
var cache = HM.getPos();
Entity.setPosition(Player.getEntity(), cache[0], cache[1]+3, cache[2]);
tp = false;
}
break;
case 6 : 
magicCarpet();
break;
}
}
}));
layout.addView(btns[n]);
}
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
menu.setContentView(scroll);
menu.setWidth(dip2px(ctx, 50));
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight()*2/3);
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.CENTER, 0, 0);
makeRWButton();
makeMoveButton();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

function hyperMovementOff(btn0){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
if(btn0!=null){
btn0.setText("HM");
}
else{
if(btn!=null){
btn.dismiss();
btn = null;
}
}
if(btnR!=null){
btnR.dismiss();
btnR = null;
}
if(btnM!=null){
btnM.dismiss();
btnM = null;
}
if(menu!=null){
menu.dismiss();
menu = null;
}
if(cross!=null){
cross.dismiss();
cross = null;
}
}
}));
tp = false;
mc = false;
pass = false;
move = 0;
}

function climbing(btn){
if(ft==0){
if(fly!=3){
fly = 3;
toast("Climbing Mode on");
}
else if(fly==3){
fly = 0;
toast("Climbing Mode off");
}
ft = 7;
}
else if(ft>0){
toast("Hyper Movement off");
fly = 0;
run = false;
hyperMovementOff(btn);
}

}

function magicCarpet(){
if(mc){
mc = false;
toast("Magic Carpet off");
if(getTile(mx, my, mz)==20){
setTile(mx, my, mz, 0);
}
}
else{
mc = true;
toast("Magic Carpet on");
}

}

function modTick(){
var pe = Player.getEntity();
if(fly==1){
Entity.setVelY(pe, 0.00001);
}
if(fly==2){
yaw = Math.floor(getYaw());
pitch = Math.floor(getPitch());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
tan = -Math.sin(pitch/180*Math.PI);
pcos = Math.cos(pitch/180*Math.PI);
var speed = 1;
if(fb) speed *= -1;
if(run) speed *= 2;
Entity.setVelX(pe, speed*sin*pcos);
Entity.setVelY(pe, speed*tan);
Entity.setVelZ(pe, speed*cos*pcos);
}
if(fly==3){
px = Player.getX();
py = Player.getY()-0.5;
pz = Player.getZ();
for(var xx=px-1;xx<px+2;xx++)
for(var zz=pz-1;zz<pz+2;zz++)
if(getTile(xx, py, zz)!=0){
if(run) Entity.setVelY(pe, 0.2);
else Entity.setVelY(pe, 0.1);
}

}

if(rt>0){
rt--;
}
if(run){
if(fly==0){
if(rt==2){
rx = Player.getX();
rz = Player.getZ();
}
else if(rt==1){
Entity.setVelX(pe, 1.2*(Player.getX()-rx));
Entity.setVelZ(pe, 1.2*(Player.getZ()-rz));
rt = 3;
}
}
}

if(ft>0){
ft--;
}

if(mc){
mx = Math.round(Player.getX()-0.5);
if(getPitch()==90){
my = Player.getY()-3;
}
else{
my = Player.getY()-2;
}
mz = Math.round(Player.getZ()-0.5);
for(var xx=mx-1;xx<mx+2;xx++)
for(var yy=my-1;yy<my+2;yy++)
for(var zz=mz-1;zz<mz+2;zz++)
if(getTile(xx, yy, zz)==20){
setTile(xx, yy, zz, 0);
}
if(getTile(mx, my, mz)==0){
setTile(mx, my, mz, 20);
}
}


}

function useItem(x, y, z, i, b){
switch(move){
case 1 : 
Entity.setPosition(Player.getEntity(), x, y+3, z);
preventDefault();
break;
case 2 : 
var pe = Player.getEntity();
Entity.setVelX(pe, x-Player.getX());
Entity.setVelY(pe, y-Player.getY());
Entity.setVelZ(pe, z-Player.getZ());
preventDefault();
break;
case 3 : 
var pe = Player.getEntity();
Entity.setVelX(pe, x-Player.getX());
Entity.setVelY(pe, 0.7);
Entity.setVelZ(pe, z-Player.getZ());
preventDefault();
break;
}

}

function makeRWButton(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
btnR = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.ToggleButton(ctx);
button.setTextOn("Run");
button.setTextOff("Walk");
button.setChecked(run);
button.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
toast("Runnung Mode");
run = true;
rt = 4;
}
else if(onoff==false){
toast("Walking Mode");
run = false;
rt = 0;
}
}
}));
layout.addView(button);
btnR.setContentView(layout);
btnR.setWidth(dip2px(ctx, 60));
btnR.setHeight(dip2px(ctx, 40));
btnR.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btnR.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, dip2px(ctx, 10), dip2px(ctx, 70));
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

function makeMoveButton(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
btnM = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("Move");
button.setTextSize(12);
button.setTextColor(android.graphics.Color.WHITE);
button.setBackgroundColor(android.graphics.Color.argb(100, 150, 150, 150));
button.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v){
if(move==0){
toast("Teleport Mode");
move = 1;
v.setText("T.P.");
}
else if(move==1){
toast("Wind Walk Mode");
move = 2;
v.setText("W.W.");
}
else if(move==2){
toast("Flash Jump Mode");
move = 3;
v.setText("F.J.");
}
else if(move==3){
toast("Mode off");
move = 0;
v.setText("Move");
}
}
}));
layout.addView(button);
btnM.setContentView(layout);
btnM.setWidth(dip2px(ctx, 55));
btnM.setHeight(dip2px(ctx, 37));
btnM.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btnM.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.TOP, dip2px(ctx, 70), 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

function makeCross(tf){
ctx.runOnUiThread(new java.lang.Runnable({ run : function(){
if(tf){
try{
cross = new android.widget.PopupWindow();
var txt = new android.widget.TextView(ctx);
txt.setText("+");
txt.setTextColor(android.graphics.Color.WHITE);
txt.setGravity(android.view.Gravity.CENTER);
cross.setContentView(txt);
cross.setWidth(-2);
cross.setHeight(-2);
cross.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
cross.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
else{
if(cross!=null){
cross.dismiss();
cross = null;
}
}
}
}));
}

function leaveGame(){
hyperMovementOff();
}

function hyperMovementRequestHook(){
if(btn==null) makeHMButton();
else leaveGame();
}

function procCmd(cmd){
if(cmd=="hm on"&&btn==null){
makeHMButton();
}
else if(cmd=="hm off"){
leaveGame();
}
}