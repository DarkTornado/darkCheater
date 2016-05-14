DCMS Basic Library
version : 1.0
Maker : Dark Tornado
© 2016 Dark Tornado, All rights reserved.
--------------------
/*
function sendMessage(msg);
function teleport(e, x, y, z);
function checkInternet();
function nightCheck();
*/


function toast(msg){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
var toast = android.widget.Toast.makeText(ctx, msg, android.widget.Toast.LENGTH_LONG);
toast.show();
}
}));
}


function openUrl(url){
try{
var uri = new android.net.Uri.parse(url);
var link = new android.content.Intent(android.content.Intent.ACTION_VIEW, uri);
ctx.startActivity(link);
}
catch(e){
Dark.showDialog("Error from DCMS Library", e);
}
}


function showDialog(title, msg){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setTitle(title);
dialog.setView(msg);
dialog.setNegativeButton("닫기",null);
dialog.show();
}
catch(e){
Dark.showDialog("Error from DCMS Library", e);
}
}
}));
}


function getRealTime(tf){
try{
var day = new Date();
if(tf) return day.getFullYear()+"년 "+(day.getMonth()+1)+"월 "+day.getDate()+"일 "+day.getHours()+"시 "+day.getMinutes()+"분 "+day.getSeconds()+"초";
else return day.getHours()+"시 "+day.getMinutes()+"분 "+day.getSeconds()+"초";
}
catch(e){
Dark.showDialog("Error from DCMS Library", e);
}
}


function getBatteryLevel(){
try{
var ifilter = new android.content.IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
var batteryStatus = ctx.registerReceiver(null, ifilter);
var level = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
var scale = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
return Math.round(level/scale*100);
}
catch(e){
Dark.showDialog("Error from DCMS Library", e);
}
}


