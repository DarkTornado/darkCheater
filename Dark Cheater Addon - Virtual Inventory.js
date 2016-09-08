/*
Dark Cheater Addon - Virtual Inventory
© 2016 Dark Tornado, All rights reserved.
Dark Cheater의 애드온(?)입니다.
다크 치터 2.4.0 이상의 버전과 자동 연동.
*/

const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const sdcard = new android.os.Environment.getExternalStorageDirectory().getAbsolutePath();

const ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager;

var vi = {
i : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
c : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
it : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

function dip2px(ctx, dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);
}

const Dark = {
toast : function(msg){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
var toast = android.widget.Toast.makeText(ctx, "<Dark> "+msg, android.widget.Toast.LENGTH_LONG);
toast.getView().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(140, 30, 30, 30)));
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
checkLink : function(){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/viLink.txt");
new java.lang.Thread({
run : function(){
for(;;){
java.lang.Thread.sleep(100);
if(file.exists()){
if(VIWindow.window==null){
VIWindow.openWindow();
Dark.toast("가상 인벤토리 활성화");
}
else{
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
if(VIWindow.window!=null){
VIWindow.window.dismiss();
VIWindow.window = null;
}
}
}));
Dark.save("viData", vi.i+":"+vi.c+":"+vi.it);
Dark.toast("가상 인벤토리 비활성화");
}
file.delete();
}
}
}
}).start();
}

};

const Data = {
read : function(name){
try{
var file = new java.io.File(sdcard+"/darkTornado/virtualInventory/"+name+".txt");
if(!file.exists()) return null;
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

const VirInv = {
isFull : function(i, it){
var count = 0;
for(var n=0;n<20;n++){
if(VirInv.isEmpty(n)) return false;
if(!(i==vi.i[n]&&it==vi.it[n])){
count++;
}
}
if(count==20) return true;
},
isEmpty : function(slotId){
if(vi.i[slotId]==null||vi.i[slotId]==undefined||vi.i[slotId]==0) return true;
else return false;
},
edit : function(count, type, slotId, txts){
switch(type){
case 0 : 
if(VirInv.isFull()){
Dark.toast("가상 인벤토리가 가득 찼습니다.");
}
else{
var cache = -1;
var isAdded = false;
var itemId = getCarriedItem();
var itemCount = Player.getCarriedItemCount();
var itemDamage = Player.getCarriedItemData();
if(count>itemCount) count = itemCount;
for(var n=0;n<20;n++){
if(vi.i[n]==itemId&&vi.it[n]==itemDamage){
vi.c[n] += count;
isAdded = true;
VIWindow.updateText(txts, n, vi.i[n], vi.c[n], vi.it[n]);
break;
}
if(VirInv.isEmpty(n)&&cache==-1) cache = n;
}
if(!isAdded){
vi.i[cache] = itemId;
vi.c[cache] = count;
vi.it[cache] = itemDamage;
VIWindow.updateText(txts, cache, vi.i[cache], vi.c[cache], vi.it[cache]);
}
addItemInventory(itemId, -count, itemDamage);
Dark.toast(count+"개의 아이템을 넣었습니다.");
}
break;
case 1 : 
if(vi.c[slotId]<count) count = vi.c[slotId];
addItemInventory(vi.i[slotId], count, vi.it[slotId]);
vi.c[slotId] -= count;
if(vi.c[slotId]<=0){
vi.i[slotId] = 0;
vi.c[slotId] = 0;
vi.it[slotId] = 0;
}
VIWindow.updateText(txts, slotId, vi.i[slotId], vi.c[slotId], vi.it[slotId]);
Dark.toast(count+"개의 아이템을 꺼냈습니다.");
break;
case 2 : 
if(vi.c[slotId]<count) count = vi.c[slotId];
vi.c[slotId] -= count;
VirInv.dropItem(count, vi.i[slotId], vi.it[slotId]);
if(vi.c[slotId]<=0){
vi.i[slotId] = 0;
vi.c[slotId] = 0;
vi.it[slotId] = 0;
}
VIWindow.updateText(txts, slotId, vi.i[slotId], vi.c[slotId], vi.it[slotId]);
Dark.toast(count+"개의 아이템을 버렸습니다.");
break;
case 3 : 
if(vi.c[slotId]<count) count = vi.c[slotId];
vi.c[slotId] -= count;
if(vi.c[slotId]<=0){
vi.i[slotId] = 0;
vi.c[slotId] = 0;
vi.it[slotId] = 0;
}
VIWindow.updateText(txts, slotId, vi.i[slotId], vi.c[slotId], vi.it[slotId]);
Dark.toast(count+"개의 아이템이 삭제되었습니다.");
break;
}
},
dropItem : function(count, itemId, itemDamage){
var px, py, pz, yaw, sin, cos;
px = Player.getX();
py = Player.getY()-0.7;
pz = Player.getZ();
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
Level.dropItem(px+3*sin, py, pz+3*cos, 0, itemId, count, itemDamage);
},
openSettings : function(txts){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
dialog.setTitle("가상 인벤토리 설정");
var menus = ["가상 인벤토리 초기화", "데이터 이동", "스크립트 정보"];
dialog.setItems(menus, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
switch(w){
case 0 : 
for(var n=0;n<20;n++){
txts[n].setText("비어 있음\n(0, 0, 0)");
vi.i[n] = 0;
vi.c[n] = 0;
vi.it[n] = 0;
}
Dark.toast("초기화되었습니다.");
break;
case 1 : 
VIWindow.moveData(txts);
break;
case 2 : 
showDialog();
break;
}
}
}));
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

};

const VIWindow = {
window : null,
openWindow : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
VIWindow.window = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var scroll = new android.widget.ScrollView(ctx);
var title = new android.widget.TextView(ctx);
title.setText("V. Inv.");
title.setTextSize(16);
title.setTextColor(android.graphics.Color.CYAN);
title.setGravity(android.view.Gravity.CENTER);
title.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
try{
if(layout2.getChildCount()==1){
layout2.addView(scroll);
VIWindow.window.update(dip2px(ctx, 100), dip2px(ctx, 160));
title.setText("V. Inv.");
}
else{
layout2.removeView(scroll);
VIWindow.window.update(dip2px(ctx, 51), dip2px(ctx, 31));
title.setText("V.I.");
}
}
catch(e){
Dark.toast(e);
}
}
}));
var longTouchCheck = false;
title.setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick: function(v){
longTouchCheck = true;
return true;
}
}));
title.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function(v, ev){
try{
if(longTouchCheck){
switch(ev.action){
case android.view.MotionEvent.ACTION_MOVE : 
VIWindow.window.update(ev.getRawX(), ev.getRawY(), VIWindow.window.getWidth(), VIWindow.window.getHeight());
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
var txts = [];
for(var n=0;n<20;n++){
txts[n] = new android.widget.TextView(ctx);
if(vi.c[n]==0) txts[n].setText("비어 있음\n(0, 0, 0)");
else if(Item.getName(vi.i[n], vi.it[n])==null) txts[n].setText(ScriptManager.nativeGetItemName(vi.i[n], vi.it[n], true)+"\n("+vi.i[n]+", "+vi.c[n]+", "+vi.it[n]+")");
else txts[n].setText(Item.getName(vi.i[n], vi.it[n])+"\n("+vi.i[n]+", "+vi.c[n]+", "+vi.it[n]+")");
txts[n].setTextSize(13);
txts[n].setTextColor(android.graphics.Color.WHITE);
txts[n].setId(n);
txts[n].setGravity(android.view.Gravity.CENTER);
txts[n].setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
VIWindow.editDialog([vi.i[v.getId()], vi.it[v.getId()]], v.getId(), txts);
}
}));
txts[n].setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick : function(v){
VirInv.openSettings(txts);
return true;
}
}));
layout.addView(txts[n]);
}
var pad = dip2px(ctx, 1);
title.setPadding(pad, pad, pad, pad);
pad = dip2px(ctx, 2);
layout.setPadding(pad, pad, pad, pad);
scroll.addView(layout);
layout2.addView(title);
layout2.addView(scroll);
VIWindow.window.setContentView(layout2);
VIWindow.window.setWidth(dip2px(ctx, 100));
VIWindow.window.setHeight(dip2px(ctx, 160));
VIWindow.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(120, 60, 60, 60)));
VIWindow.window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, dip2px(ctx, 70), dip2px(ctx, 70));
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
},
editDialog : function(itemData, slotId, txts){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
var cache = Item.getName(itemData[0], itemData[1]);
if(itemData[0]==0) dialog.setTitle("빈 가상 슬롯");
else if(cache==null) dialog.setTitle(ScriptManager.nativeGetItemName(itemData[0], itemData[1], true));
else dialog.setTitle(cache);
dialog.setItems(["넣기", "빼기", "버리기", "삭제"], new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
VIWindow.inputCount(w, slotId, txts);
}
}));
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
},
inputCount : function(type, slotId, txts){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var txt = new android.widget.EditText(ctx);
txt.setHint("수량을 입력하세요...");
txt.setTextColor(android.graphics.Color.WHITE);
txt.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
layout.addView(txt);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("수량 입력");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
VirInv.edit(Number(txt.getText()), type, slotId, txts);
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
updateText : function(txts, slotId, itemId, count, itemDamage){
try{
if(count==0) txts[slotId].setText("비어 있음\n(0, 0, 0)");
else if(Item.getName(vi.i[slotId], vi.it[slotId])==null) txts[slotId].setText(ScriptManager.nativeGetItemName(vi.i[slotId], vi.it[slotId], true)+"\n("+vi.i[slotId]+", "+vi.c[slotId]+", "+vi.it[slotId]+")");
else txts[slotId].setText(Item.getName(vi.i[slotId], vi.it[slotId])+"\n("+vi.i[slotId]+", "+vi.c[slotId]+", "+vi.it[slotId]+")");
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
},
moveData : function(txts){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
dialog.setTitle("데이터 이동");
dialog.setMessage("'가상 인벤토리'의 데이터를 'Dark Cheater Addon - Virtual Inventory'로 이동하시겠습니까?");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Dark.save("viData_backup", Dark.read("viData"));
Dark.save("viData", Data.read("invenData"));
var data = Dark.read("viData").split(":");
var itemId = data[0].split(",");
var count = data[1].split(",");
var itemDamage = data[2].split(",");
for(var n=0;n<20;n++){
vi.i[n] = Number(itemId[n]);
vi.c[n] = Number(count[n]);
vi.it[n] = Number(itemDamage[n]);
VIWindow.updateText(txts, n, vi.i[n], vi.c[n], vi.it[n]);
}
Dark.toast("데이터가 이동되었습니다.");
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

};

function newLevel(){
if(Dark.read("viData")!=""){
var data = Dark.read("viData").split(":");
var itemId = data[0].split(",");
var count = data[1].split(",");
var itemDamage = data[2].split(",");
for(var n=0;n<20;n++){
vi.i[n] = Number(itemId[n]);
vi.c[n] = Number(count[n]);
vi.it[n] = Number(itemDamage[n]);
}
}
}

function leaveGame(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
if(VIWindow.window!=null){
VIWindow.window.dismiss();
VIWindow.window = null;
}
}
}));
Dark.save("viData", vi.i+":"+vi.c+":"+vi.it);
}

function showDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, android.app.AlertDialog.THEME_HOLO_DARK);
dialog.setTitle("스크립트 정보");
dialog.setMessage("또다른 인벤토리를 하나 더 추가하는 것입니다. 총 20가지 종류의 아이템을 담을 수 있으며, 아마도 아이템은 총 2147483618개 까지 넣을 수 있을겁니다.\n리뷰나 2차 공유만 허용되어 있습니다.\n'가상 인벤토리 2.0'에 대응되며, '데이터 이동' 버튼을 통해 기존의 '가상 인벤토리 스크립트'의 데이터를 'Dark Cheater Addon - Virtual Inventory'로 복사할 수 있습니다.");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

Dark.checkLink();

