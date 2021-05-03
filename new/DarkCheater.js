/*
Dark Cheater
version 1.0
© 2021 Dark Tornado, All rights reserved.
리뷰는 허용하나, 판매, 무단공유, 무단수정, 제작자속이기 등을 할 시에는 싸대기 때리러 감.
*/

ModPE.langEdit("menu.copyright", "©Mojang AB §0Dark Cheater by Dark Tornado");

const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const version = "1.0";
const ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager;
const Utils = net.zhuoweizhang.mcpelauncher.Utils;

const Dark = {};
const Ui = {};
const FileUtils = {};
const WorldEdit = {};
const LangList = {};
const Settings = {
timeLock : false,
timeLockData : 0
};
var Lang = {};

const dark = {
ui: {}
};
dark.ui.Button = function(ctx) {
var btn = new android.widget.Button(ctx);
btn.setBackgroundColor(android.graphics.Color.argb(70, 0, 0, 0));
btn.setTextColor(android.graphics.Color.WHITE);
btn.setPadding(0, 0, 0, 0);
btn.setTransformationMethod(null);
return btn;
};
dark.ui.Window = function(ctx) {
var menu = new android.widget.PopupWindow(ctx);
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth() / 3);
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menu.setAnimationStyle(android.R.style.Animation_Translucent);
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(70, 0, 0, 0)));
return menu;
};
dark.ui.LinearLayout = function(ctx) {
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var pad = dip2px(16);
layout.setPadding(pad, pad, pad, pad);
return layout;
};

const EntityTypeIds = [
["닭", 10],
["소", 11],
["돼지", 12],
["양", 13],
["늑대", 14],
["주민 (구버전)", 15],
["버섯소", 16],
["오징어", 17],
["토끼", 18],
["박쥐", 19],
["아이언 골램", 20],
["스노우 골램", 21],
["오셸롯", 22],
["말", 23],
["당나귀", 24],
["노새", 25],
["스켈레톤 말", 26],
["좀비 말", 27],
["북극곰", 28],
["라마", 29],
["앵무새", 30],
["돌고래", 31],
["좀비", 32],
["크리퍼", 33],
["스켈레톤", 34],
["거미", 35],
["좀비 피그맨", 36],
["슬라임", 37],
["엔더맨", 38],
["좀벌레", 39],
["동굴 거미", 40],
["가스트", 41],
["마그마 큐브", 42],
["블레이즈", 43],
["좀비 주민 (구버전)", 44],
["마녀", 45],
["스트레이", 46],
["허스크", 47],
["위더 스켈레톤", 48],
["가디언", 49],
["엘더 가디언", 50],
["NPC", 51],
["위더", 52],
["엔더 드래곤", 53],
["셜커", 54],
["엔더 마이트", 55],
["에이전트/Learn to Code Mascot(1.0.0.X)", 56],
["우민 번명자", 57],
["팬텀", 58],
["파괴수", 59],
["갑옷 거치대", 61],
["카메라", 62],
["드롭된 아이템", 64],
["활성화된 TNT", 65],
["떨어지는 블록", 66],
["경험치 포션", 68],
["경험치", 69],
["엔더의 눈", 70],
["엔더 크리스탈", 71],
["폭죽", 72],
["삼지창", 73],
["바다거북", 74],
["고양이", 75],
["셜커 총알", 76],
["낚싯대", 77],
["용 화염구", 79],
["화살", 80],
["눈덩이", 81],
["달걀", 82],
["그림", 83],
["마인카트", 84],
["화염구", 85],
["투척 포션", 86],
["엔더 진주", 87],
["끈 매듭", 88],
["위더 머리", 89],
["보트", 90],
["번개", 93],
["작은 화염구", 94],
["잔류형 물약 입자/카메라(0.14.x)", 95],
["깔때기 마인 카트", 96],
["TNT 마인 카트", 97],
["창고 마인 카트", 98],
["커맨드 블록", 100],
["라마의 침", 102],
["소환사 덫", 103],
["우민 소환사", 104],
["벡스", 105],
["복어", 108],
["연어", 109],
["드라운드", 110],
["열대어", 111],
["대구", 112],
["판다", 113],
["약탈자", 114],
["주민", 115],
["좀비  주민", 116],
["떠돌이 상인", 118]
];

Dark.createItemList = (target) => {
Ui.toast(Lang.item_list_loading);
new java.lang.Thread({
run : function(){
try{
var items = [];
var codes = [0, 9, 11, 64, 95, 97, 140, 144, 246, 248, 249, 255, 373, 383, 439];
var names = ["공기", "멈춘 물", "멈춘 용암", "문(블록)", "보이지 않는 베드락", "몬스터 스폰알(?)", "화분", "머리", "빛나는 옵시디언", "업데이트 블록 1", "업데이트 블록 2", "오류 돌", "물병(포션)", "스폰알", "카메라"];
var codes2 = [1, 5, 6, 17, 18, 24, 35, 38, 43, 44, 79, 97, 98, 155, 159, 161, 162, 171, 175, 333, 349, 350, 351, 373, 438, 262];
var lengths = [7, 6, 6, 4, 4, 3, 16, 9, 8, 8, 2, 6, 3, 3, 16, 2, 2, 16, 6, 6, 4, 4, 16, 36, 36, 37];
for(var n=0;n<4096;n++){
if(Item.isValidItem(n)){
if(codes.indexOf(n)==-1){
items.push("[ "+n+" : 0 ] "+Item.getName(n, 0));
if(n==325){
items.push("[ "+n+" : 8 ] "+Item.getName(n, 8));
items.push("[ "+n+" : 10 ] "+Item.getName(n, 10));
}
}
else if(n==383){
var entityIds = [];
for(var m=0;m<EntityTypeIds.length;m++){
if(EntityTypeIds[m][1]<64||EntityTypeIds[m][1]>100) entityIds.push(EntityTypeIds[m][1]);
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
Ui.itemList(items, target);
}
catch(e){
Ui.printError(e);
}
}
}).start();
};
Dark.getTime = (n) => {
var day = new Date();
if(n==1) return day.getFullYear()+"."+(day.getMonth()+1)+"."+day.getDate();
else if(n==2) return day.getHours()+"'"+day.getMinutes()+"'"+day.getSeconds();
else return day.getFullYear()+"."+(day.getMonth()+1)+"."+day.getDate()+" "+day.getHours()+"'"+day.getMinutes()+"'"+day.getSeconds();
};

FileUtils.copy = function(path1, path2){
try{
var file1 = new java.io.File(path1);
var file2 = new java.io.File(path2);
var fis = new java.io.FileInputStream(file1).getChannel();
var fos = new java.io.FileOutputStream(file2).getChannel();
fis.transferTo(0, fis.size(), fos);
fis.close();
fos.close();
}
catch(e){
Ui.printError(e);
}
};
FileUtils.copyFolder = function(path1, path2){
try{
var file1 = new java.io.File(path1);
var file2 = new java.io.File(path2);
if(file1.isDirectory()){
var file3 = new java.io.File(path2, file1.getName());
file3.mkdirs();
var child = file1.list();
for(var n=0;n<child.length;n++){
var file4 = new java.io.File(file1, child[n]);
if(file4.isDirectory()) FileUtils.copyFolder(file4, file3);
else FileUtils.copy(file4, new java.io.File(file3, child[n]));
}
}
else{
FileUtils.copy(path1, path2);
}
}
catch(e){
Ui.printError(e);
}
};
FileUtils.save = function(path, value){
try{
var file = new java.io.File(path);
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String(value);
fos.write(str.getBytes());
fos.close();
}
catch(e){
Ui.printError(e);
}
};
FileUtils.read = function(path){
try{
var file = new java.io.File(path);
if(!file.exists()) return "";
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
Ui.printError(e);
}
};
FileUtils.remove = function(path){
try{
var file = new java.io.File(path);
if(file.exists()) file.delete();
}
catch(e){
Ui.printError(e);
}
};

Ui.TextFlag = {
ITEM_NAME_CHANGE: 0,
WORLD_TIME_SET : 1
};
Ui.toast = (msg) => {
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var toast = new android.widget.Toast.makeText(ctx, "<Dark> "+msg, android.widget.Toast.LENGTH_LONG);
var layout = toast.getView();
layout.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 30, 30, 30)));
layout.getChildAt(0).setTextColor(android.graphics.Color.WHITE);
var pad = dip2px(9);
layout.setPadding(pad, pad, pad, pad);
toast.show();
}
catch(e){
print(e);
}
}
}));
};
Ui.showDialog = (title, msg) => {
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setTitle(title);
dialog.setMessage(msg);
dialog.setNegativeButton(Lang.close, null);
dialog.show();
}
catch(e){
print(e);
}
}
}));
};
Ui.applyDragListener = (window, view) => {
try{
var longTouchCheck = false;
view.setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick: function(v){
longTouchCheck = true;
return true;
}
}));
view.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function(v, ev){
if(longTouchCheck){
switch(ev.action){
case android.view.MotionEvent.ACTION_MOVE : 
var sX = ctx.getWindowManager().getDefaultDisplay().getWidth();
var sY = ctx.getWindowManager().getDefaultDisplay().getHeight();
window.update(ev.getRawX(), ev.getRawY(), window.getWidth(), window.getHeight());
break;
case android.view.MotionEvent.ACTION_UP : 
longTouchCheck = false;
break;
}
}
return false;
}
}));
}
catch(err){
Ui.printError(err);
}
};
Ui.printError = (e) => {
Ui.showDialog("Error in Dark Cheater", e+"\nAt: "+e.lineNumber);
};
Ui.inputText = (flag, onlyNumber, params) => {
try {
var titles = [Lang.item_change_name, Lang.time_set];
var hints = [Lang.change_item_name_hint, Lang.time_hint];
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setTitle(titles[flag]);
var layout = new dark.ui.LinearLayout(ctx);
var txt = new android.widget.EditText(ctx);
txt.setHint(hints[flag]);
if(onlyNumber) {
txt.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
}
layout.addView(txt);
dialog.setView(layout);
dialog.setNegativeButton(Lang.close, null);
dialog.setPositiveButton(Lang.apply, new android.content.DialogInterface.OnClickListener({
onClick: function(v){
try{
var input = txt.getText().toString();
switch (flag){
case Ui.TextFlag.ITEM_NAME_CHANGE:
Player.setItemCustomName(Player.getSelectedSlotId(), input);
break;
case Ui.TextFlag.WORLD_TIME_SET :
Level.setTime(input);
Level.executeCommand("/time set "+input, true);
break;
}
}
catch (e){
Ui.printError(e);
}
}
}));
dialog.show();
}
catch (e){
Ui.printError(e);
}
};

Ui.creaeteButton = () => {
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(btn!=null) btn.dismiss();
btn = new android.widget.PopupWindow(ctx);
var button = new dark.ui.Button(ctx);
button.setText("Dark");
button.setTextSize(10);
button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
if(menu==null){
Ui.openMenu();
}
else{
menu.dismiss();
menu = null;
Ui.closeAll();
}
}
}));
Ui.applyDragListener(btn, button);
btn.setContentView(button);
btn.setWidth(dip2px(35));
btn.setHeight(dip2px(23));
btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, 0, 0);
}
catch(e){
Ui.toast(Lang.invalid_msg);
}
}
}));
};
Ui.openMenu = () => {
try{
menu = new dark.ui.Window(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var title = new android.widget.TextView(ctx);
title.setText("Dark\nCheater");
title.setTextSize(23);
title.setTextColor(android.graphics.Color.CYAN);
title.setGravity(android.view.Gravity.CENTER);
var pad = dip2px(5);
title.setPadding(pad, pad, pad, dip2px(15));
layout.addView(title);
var margin = new android.widget.LinearLayout.LayoutParams(-1, -2);
var mar = dip2px(1);
margin.setMargins(mar, mar, mar, mar);
var btns = [];
var menus = [Lang.inven_menu, Lang.world_menu, Lang.player_menu, Lang.entity_menu, Lang.terrain_menu, Lang.misc_menu, Lang.close];
for(var n=0;n<menus.length;n++){
btns[n] = new dark.ui.Button(ctx);
btns[n].setText(menus[n]);
btns[n].setId(n);
btns[n].setLayoutParams(margin);
btns[n].setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
Ui.closeAll();
switch(v.getId()){
case 0:
Ui.inventoryMenu();
break;
case 1:
Ui.worldMenu();
break;
case 2:
Ui.playerMenu();
break;
case 3:
Ui.entityMenu();
break;
case 4:
Ui.terrainMenu();
break;
case 5:
Ui.miscMenu();
break;
case 6:
menu.dismiss();
menu = null;
break;
}
}
}));
layout.addView(btns[n]);
}
var maker = new android.widget.TextView(ctx);
maker.setText("\n© 2021 Dark Tornado\n");
maker.setTextSize(12);
maker.setTextColor(android.graphics.Color.WHITE);
maker.setGravity(android.view.Gravity.CENTER);
layout.addView(maker);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
menu.setContentView(scroll);
menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT, 0, 0);
}
catch(e){
Ui.printError(e);
}
};
Ui.inventoryMenu = () => {
try{
menuI = new dark.ui.Window(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var title = new android.widget.TextView(ctx);
title.setText(Lang.inven_menu);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
var pad = dip2px(5);
title.setPadding(pad, pad, pad, dip2px(15));
layout.addView(title);
var margin = new android.widget.LinearLayout.LayoutParams(-1, -2);
var mar = dip2px(1);
margin.setMargins(mar, mar, mar, mar);
var btns = [];
var menus = [Lang.item_list, Lang.item_remove, Lang.item_remove_all, Lang.item_enchant, Lang.item_change_name, Lang.close];
for(var n=0;n<menus.length;n++){
btns[n] = new dark.ui.Button(ctx);
btns[n].setText(menus[n]);
btns[n].setId(n);
btns[n].setLayoutParams(margin);
btns[n].setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
switch(v.getId()){
case 0:
Dark.createItemList(null);
break;
case 1:
Player.clearInventorySlot(Player.getSelectedSlotId());
break;
case 2:
for(var n=0;n<55;n++)
Player.clearInventorySlot(n);
break;
case 3:
Ui.enchantDialog();
break;
case 4:
Ui.inputText(Ui.TextFlag.ITEM_NAME_CHANGE);
break;
case 5:
menuI.dismiss();
menuI = null;
break;
}
}
}));
btns[n].setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick : function(v){
switch(v.getId()){
case 3:
var slotId = Player.getSelectedSlotId();
var itemName = Player.getItemCustomName(slotId);
Player.setInventorySlot(slotId, getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData());
if(itemName!=null) Player.setItemCustomName(slotId, itemName);
break;
case 4:
var slotId = Player.getSelectedSlotId();
var enc = Player.getEnchantments(slotId);
Player.setInventorySlot(slotId, getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData());
for(var n=0;n<enc.length;n++){
Player.enchant(slotId, enc[n].type, enc[n].level);
}
break;
}
return true;
}
}));
layout.addView(btns[n]);
}
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
menuI.setContentView(scroll);
menuI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
}
catch(e){
Ui.printError(e);
}
};
Ui.worldMenu = () => {
try{
menuW = new dark.ui.Window(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var title = new android.widget.TextView(ctx);
title.setText(Lang.inven_menu);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
var pad = dip2px(5);
title.setPadding(pad, pad, pad, dip2px(15));
layout.addView(title);
var margin = new android.widget.LinearLayout.LayoutParams(-1, -2);
var mar = dip2px(1);
margin.setMargins(mar, mar, mar, mar);
var tl = new android.widget.Switch(ctx);
tl.setText(Lang.time_lock);
tl.setChecked(Settings.timeLock);
tl.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
Settings.timeLock = onoff;
Settings.timeLockData = Level.getTime();
}
}));
layout.addView(tl);
var btns = [];
var menus = [Lang.time_set, Lang.gm, Lang.default_gm, Lang.health_hunger, Lang.back_up, Lang.close];
for(var n=0;n<menus.length;n++){
btns[n] = new dark.ui.Button(ctx);
btns[n].setText(menus[n]);
btns[n].setId(n);
btns[n].setLayoutParams(margin);
btns[n].setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
switch(v.getId()){
case 0:
Ui.inputText(Ui.TextFlag.WORLD_TIME_SET, true);
break;
case 1:
Ui.gamemodeList(false, [Player.getEntity()]);
break;
case 2:
Ui.gamemodeList(true);
break;
case 3:
Ui.healthDialog();
break;
case 4:
Ui.toast(Lang.back_up_start);
new java.lang.Thread({
run : function(){
var folder = new java.io.File(sdcard+"/DarkCheaterMapBackUp/");
folder.mkdirs();
FileUtils.copyFolder(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/", folder);
var file1 = new java.io.File(sdcard+"/DarkCheaterMapBackUp/"+Level.getWorldDir()+"/");
var file2 = new java.io.File(sdcard+"/DarkCheaterMapBackUp/"+Level.getWorldDir()+" ("+Level.getWorldName()+", "+Dark.getTime()+"/");
file1.renameTo(file2);
Ui.toast(Lang.back_up_end);
}
}).start();
break;
case 5:
menuW.dismiss();
menuW = null;
break;
}
}
}));
layout.addView(btns[n]);
}
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
menuW.setContentView(scroll);
menuW.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
}
catch(e){
Ui.printError(e);
}
};
Ui.playerMenu = () => {
try{
menuP = new dark.ui.Window(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var title = new android.widget.TextView(ctx);
title.setText(Lang.player_menu);
title.setTextSize(20);
title.setTextColor(android.graphics.Color.WHITE);
title.setGravity(android.view.Gravity.CENTER);
var pad = dip2px(5);
title.setPadding(pad, pad, pad, dip2px(15));
layout.addView(title);

var pls = [], ents = Entity.getAll();
for(var n=0;n<ents.length;n++){
if(!Player.isPlayer(ents[n])) continue;
if(pls.indexOf(ents[n])!=-1) continue;
pls.push(ents[n]);
}

var chs = [], targets = [];
for(var n=0;n<pls.length;n++){
chs[n] = new android.widget.CheckBox(ctx);
chs[n].setText(Player.getName(pls[n]));
chs[n].setId(n);
chs[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff) targets.push(pls[check.getId()]);
else targets.splice(targets.indexOf(pls[check.getId()]), 1);
}
}));
layout.addView(chs[n]);
}

var margin = new android.widget.LinearLayout.LayoutParams(-1, -2);
var mar = dip2px(1);
margin.setMargins(mar, mar, mar, mar);
var btns = [];
var menus = [Lang.health_set, Lang.move, Lang.kick, Lang.item_give, Lang.item_remove_all, Lang.gm, Lang.potion_effect, Lang.close];
for(var n=0;n<menus.length;n++){
btns[n] = new dark.ui.Button(ctx);
btns[n].setText(menus[n]);
btns[n].setId(n);
btns[n].setLayoutParams(margin);
btns[n].setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
switch(v.getId()){
case 0:
Ui.healthDialog(targets);
break;
case 1:

break;
case 2:

break;
case 3:

break;
case 4:

break;
case 5:

break;
case 6:

break;
case 7:
menuP.dismiss();
menuP = null;
break;
}
}
}));
layout.addView(btns[n]);
}
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
menuP.setContentView(scroll);
menuP.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
}
catch(e){
Ui.printError(e);
}
};
Ui.closeAll = () => {
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
if(menuT!=null){
menuT.dismiss();
menuT = null;
}
if(menuM!=null){
menuM.dismiss();
menuM = null;
}
};

Ui.itemList = (items, target) => {
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setTitle(Lang.item_list);
var layout = new dark.ui.LinearLayout(ctx);
var txt = new android.widget.EditText(ctx);
txt.setHint(Lang.item_list_search);
layout.addView(txt);
var list = new android.widget.ListView(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, items);
list.setAdapter(adapter);
list.setTextFilterEnabled(true);
list.setFastScrollEnabled(true);
list.setOnItemClickListener(new android.widget.AdapterView.OnItemClickListener(){
onItemClick : function(parent, view, postion, id){
var cache = String(view.getText());
var cache2 = cache.substring(2, cache.indexOf(" ]"));
var data = cache2.split(" : ");
Ui.giveItem(target, data[0], data[1]);
}
});
layout.addView(list);
txt.addTextChangedListener(new android.text.TextWatcher({
onTextChanged : function(s,start,before,count){
try{
adapter.getFilter().filter(s.toString());
}
catch(e){
Ui.printError(e);
}
},
afterTextChanged : function(s){
try{
if(txt.getText().length==0)
adapter.getFilter().filter(null);
}
catch(e){
Ui.printError(e);
}
}
}));
dialog.setView(layout);
dialog.setNegativeButton(Lang.cancel, null);
dialog.setPositiveButton(Lang.item_input, new android.content.DialogInterface.OnClickListener({
onClick : function(v){
Ui.giveItem(target, "", "");
}
}));
dialog.show();
}
catch(e){
Ui.printError(e);
}
}
}));
};
Ui.giveItem = (target, itemId, itemDamage) => {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setTitle(Lang.item_give);
var layout = new dark.ui.LinearLayout(ctx);
layout.setOrientation(1);

var txt1 = new android.widget.TextView(ctx);
txt1.setText(Lang.item_id);
txt1.setTextSize(18);
layout.addView(txt1);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint(Lang.item_id+" "+Lang.hint_input);
txt2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(txt2);
var txt3 = new android.widget.TextView(ctx);
txt3.setText("\n"+Lang.count);
txt3.setTextSize(18);
layout.addView(txt3);
var txt4 = new android.widget.EditText(ctx);
txt4.setHint(Lang.count+" "+Lang.hint_input);
txt4.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
layout.addView(txt4);
var txt5 = new android.widget.TextView(ctx);
txt5.setText("\n"+Lang.item_data);
txt5.setTextSize(18);
layout.addView(txt5);
var txt6 = new android.widget.EditText(ctx);
txt6.setHint(Lang.item_data+" "+Lang.hint_input);
txt6.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(txt6);

txt2.setText(itemId);
txt6.setText(itemDamage);

var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton(Lang.cancel, null);
dialog.setPositiveButton(Lang.apply, new android.content.DialogInterface.OnClickListener({
onClick : function(v){
var itemId = txt2.getText();
var count = txt4.getText();
var itemDamage = txt6.getText();
if(target==null){
Player.addItemInventory(itemId, count, itemDamage);
}
else{
for(var n=0;n<target.length;n++){
Level.dropItem(Entity.getX(target[n]), Entity.getY(target[n]), Entity.getZ(target[n]), 0, itemId, count, itemDamage);
}
}
Ui.toast(Lang.item_given);
}
}));
dialog.show();
}
catch(e){
Ui.printError(e);
}
};
Ui.enchantDialog = () => {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setTitle(Lang.item_enchant);
var layout = new dark.ui.LinearLayout(ctx);
layout.setOrientation(1);
var txt1 = new android.widget.TextView(ctx);
txt1.setText(Lang.enchant_level);
txt1.setTextSize(18);
layout.addView(txt1);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint(Lang.enchant_level_hint);
txt2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(txt2);
var types = [Enchantment.AQUA_AFFINITY, Enchantment.BANE_OF_ARTHROPODS, Enchantment.BLAST_PROTECTION, Enchantment.DEPTH_STRIDER, Enchantment.EFFICIENCY, Enchantment.FEATHER_FALLING, Enchantment.FIRE_ASPECT, Enchantment.FIRE_PROTECTION, Enchantment.FLAME, Enchantment.FORTUNE, Enchantment.INFINITY, Enchantment.KNOCKBACK, Enchantment.LOOTING, Enchantment.LUCK_OF_THE_SEA, Enchantment.LURE, Enchantment.POWER, Enchantment.PROJECTILE_PROTECTION, Enchantment.PROTECTION, Enchantment.PUNCH, Enchantment.RESPIRATION, Enchantment.SHARPNESS, Enchantment.SILK_TOUCH, Enchantment.SMITE, Enchantment.THORNS, Enchantment.UNBREAKING];
var typeId = [];
var chs = [];
for(var n=0;n<types.length;n++){
chs[n] = new android.widget.CheckBox(ctx);
chs[n].setText(Lang.enchant_list[n]);
chs[n].setId(n);
chs[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff) typeId.push(check.getId());
else typeId.splice(typeId.indexOf(check.getId()), 1);
}
}));
layout.addView(chs[n]);
}
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton(Lang.cancel, null);
dialog.setPositiveButton(Lang.apply, new android.content.DialogInterface.OnClickListener({
onClick : function(v){
for(var n=0;n<typeId.length;n++){
ScriptManager.nativePlayerEnchant(Player.getSelectedSlotId(), types[typeId[n]], Number(txt2.getText()));
}
Ui.toast(Lang.enchant_msg);
}
}));
dialog.show();
}
catch(e){
Ui.printError(e);
}
};

Ui.gamemodeList = (isDefault, target) => {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setTitle(isDefault?Lang.default_gm:Lang.gm);
dialog.setItems(Lang.gms, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
if(isDefault){
Level.setGameMode(w);
Ui.toast(Lang.gms[w]+Lang.gm_changed);
}
else{
new java.lang.Thread({
run : function(){
for(var n=0;n<target.length;n++){
var pn = Player.getName(target[n]);
Level.executeCommand("/gamemode "+w+" "+pn, true);
}
Ui.toast(Lang.gms[w]+Lang.gm_changed);
}
}).start();
}
}
}));
dialog.setNegativeButton(Lang.cancel, null);
dialog.show();
}
catch(e){
Ui.printError(e);
}
};
Ui.healthDialog = (target) => {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setTitle(Lang.health_hunger);
var layout = new dark.ui.LinearLayout(ctx);
layout.setOrientation(1);

var txt1 = new android.widget.TextView(ctx);
txt1.setText(Lang.health+" : ");
txt1.setTextSize(18);
layout.addView(txt1);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint(Lang.health+" "+Lang.hint_input);
txt2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(txt2);
var txt3 = new android.widget.TextView(ctx);
txt3.setText("\n"+Lang.max_health+" : ");
txt3.setTextSize(18);
layout.addView(txt3);
var txt4 = new android.widget.EditText(ctx);
txt4.setHint(Lang.max_health+" "+Lang.hint_input);
txt4.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(txt4);
if(target==null){
var txt5 = new android.widget.TextView(ctx);
txt5.setText("\n"+Lang.hunger+" : ");
txt5.setTextSize(18);
layout.addView(txt5);
var txt6 = new android.widget.EditText(ctx);
txt6.setHint(Lang.hunger+" "+Lang.hint_input);
txt6.setInputType(android.text.InputType.TYPE_CLASS_NUMBER|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(txt6);
txt2.setText(Entity.getHealth(Player.getEntity())+"");
txt4.setText(Entity.getMaxHealth(Player.getEntity())+"");
txt6.setText(Player.getHunger()+"");
}

var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton(Lang.cancel, null);
dialog.setPositiveButton(Lang.apply, new android.content.DialogInterface.OnClickListener({
onClick : function(v){
var health = txt2.getText();
var maxHealth = txt4.getText();
if(target==null){
var hunger = txt6.getText();
Player.setHealth(health);
Entity.setMaxHealth(Player.getEntity(), maxHealth);
Player.setHunger(hunger);
Ui.toast(Lang.health_hunger_msg);
}
else{
for(var n=0;n<target.length;n++){
Entity.setHealth(target[n], health);
Entity.setMaxHealth(target[n], maxHealth);
}
Ui.toast(Lang.health_msg);
}
}
}));
dialog.show();
}
catch(e){
Ui.printError(e);
}
};

var btn = null;
var btnS = null;
var btnP = null;
var menu = null;
var menuI = null;
var menuW = null;
var menuP = null;
var menuE = null;
var menuT = null;
var menuM = null;

function dip2px(dips){
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

Ui.creaeteButton();

function modTick(){
if(Settings.timeLock){
Level.setTime(Settings.timeLockData);
}

}

LangList.kr = {
close: "닫기",
apply: "확인",
cancel: "취소",
hint_input: "입력...",
invalid_msg: "이 디바이스에서는 Dark Cheater를 사용할 수 없어요 :(",
sc_msg: "화면이 캡쳐되었어요.",
inven_menu: "인벤토리 수정",
world_menu: "월드 정보 수정",
player_menu: "플레이어 관리",
entity_menu: "엔티티 관리",
terrain_menu: "지형 수정",
misc_menu: "기타 기능",
item_list: "아이템 목록 / 검색",
item_give: "아이템 지급",
item_remove: "들고 있는 아이템 삭제",
item_remove_all: "인벤토리 초기화",
item_enchant: "인첸트 / 해제",
item_change_name: "아이템 이름 변경",
item_list_loading: "아이템 목록 생성중...",
item_list_search: "검색어를 입력하세요...",
item_input: "직접 입력",
item_id: "아이템 아이디",
item_data: "아이템 데미지",
item_given: "아이템이 지급되었어요.",
count: "개수",
change_item_name_hint: "아이템 이름 입력...",
enchant_list: ["물갈퀴", "살충", "폭발 저항", "친수성", "효율", "가벼운 착지", "화염검", "화염 보호", "화염활", "행운", "무한", "밀치기", "약탈", "바다 행운", "미끼", "힘", "원거리 보호", "보호", "때리기", "호흡", "날카로움", "섬세한 손길", "강타", "가시", "내구성"],
enchant_level: "강도 : ",
enchant_level_hint: "강도를 입력하세요...",
enchant_msg: "인챈트를 하였습니다.",
time_lock: "시간 고정",
time_set: "시간 설정",
time_hint: "시간 입력...",
gm: "게임모드 변경",
default_gm: "기본 게임모드 변경",
gms : ["서바이벌", "크리에이티브", "어드벤처"],
gm_changed : "(으)로 변경되었어요",
health_hunger: "체력 & 허기 설정",
health_hunger_hint: "체력 & 허기 설정",
health_hunger_msg: "체력 및 허기가 설정되었어요",
health_msg: "체력 및 최대 체력을 설정했어요",
back_up: "맵 백업",
back_up_start: "맵 백업을 시작합니다.",
back_up_end: "현재 들어가있는 맵을 백업하였어요.",
health: "체력",
max_health: "최대 체력",
health_set: "체력 설정",
hunger: "허기",
move: "이동",
kick: "추방",
kicked_msg: "명을 추방했어요",
potion_effect: "포션 효과 부여",
inven_cleared: "인벤토리를 초기화시켰어요",
tp_types: ["플레이어에게 이동", "입력한 좌표로 이동"],
select_player: "플레이어 선택",
player_moved: "플레이어(들)을 이동시켰어요"
};
Lang = LangList.kr;
