/*
DCMS Compiler
version 1.0
© 2016 Dark Tornado, All rights reserved.
*/

const DCMS = {
compile : function(){
new java.lang.Thread({
run : function(){
try{
var eval2 = eval;
var libList = new java.io.File(sdcard+"/Android/data/com.darktornado.darkcheater/dcms/library/").list().sort();
for(var n=0;n<libList.length;n++){
var cache = DCMS.loadLibrary(libList[n].substring(0, libList[n].lastIndexOf("."))).split("\n--------------------\n");
clientMessage(cache[0]);
eval2(cache[1]+"");
}
var arr1 = DCMS.getDcmsList();
var arr2 = [];
for(var n0=0;n0<arr1.length;n0++){ arr2.push(arr1[n0].substring(0, arr1[n0].lastIndexOf(".")));
var value = String(DCMS.read(arr2[n0]).toString()).split("function ");
for(var n=0;n<value.length;n++){
value[n] = value[n].replace(/\} \(/g, "){").replace(/\}\n\(/g, "){");
if(value[n].search("defineConst")!=-1) dcmsData.consts += "try{\nconst dcms_"+arr2[n0]+"C = {"+value[n].substring(value[n].indexOf("){")+2, value[n].lastIndexOf(";")).toString().replace(/;/g, ", ").replace(/=/g, ":")+"};\n}catch(e){}\n";
if(value[n].search("defineVar")!=-1) dcmsData.vars += "var dcms_"+arr2[n0]+"V = {"+String(value[n].substring(value[n].indexOf("){")+2, value[n].lastIndexOf(";"))).replace(/;/g, ", ").replace(/=/g, ":")+"};\n";
if(value[n].search("blockTouch")!=-1) dcmsData.useItem += String(value[n].substring(value[n].indexOf("){")+2, value[n].lastIndexOf("}"))+"\n").replace(/@/g, "dcms_"+arr2[n0]+"V.").replace(/#/g, "dcms_"+arr2[n0]+"C.");
if(value[n].search("entityHit")!=-1) dcmsData.attackHook += value[n].substring(value[n].indexOf("){")+2, value[n].lastIndexOf("}"))+"\n";
if(value[n].search("entityDie")!=-1) dcmsData.deathHook += value[n].substring(value[n].indexOf("){")+2, value[n].lastIndexOf("}"))+"\n";
if(value[n].search("modSecond")!=-1) dcmsData.modSecond += value[n].substring(value[n].indexOf("){")+2, value[n].lastIndexOf("}"))+"\n";
if(value[n].search("chatSend")!=-1) dcmsData.chatHook += value[n].substring(value[n].indexOf("){")+2, value[n].lastIndexOf("}"))+"\n";
}
}
eval2(dcmsData.consts+dcmsData.vars+"");
compileFinish = true;
Dark.toast("DCMS Compile Finish.");
}
catch(e){
Dark.showDialog("Error from DCMS Compiler", e+"\nLine : "+e.lineNumber);
}
}
}).start();
},
read : function(name){
try{
var file = new java.io.File(sdcard+"/Android/data/com.darktornado.darkcheater/dcms/files/"+name+".dcms");
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
clientMessage(e+", "+e.lineNumber);
}
},
save : function(name, value){
try{
var file = new java.io.File(sdcard+"/Android/data/com.darktornado.darkcheater/dcms/files/"+name+".dcms");
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String(value);
fos.write(str.getBytes());
fos.close();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
},
getDcmsList : function(){
try{
var folder = new java.io.File(sdcard+"/Android/data/com.darktornado.darkcheater/dcms/files/");
return folder.list().sort();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
},
loadLibrary : function(libName){
try{
var file = new java.io.File(sdcard+"/Android/data/com.darktornado.darkcheater/dcms/library/"+libName+".dclib");
if(!file.exists()) return "";
var fis = new java.io.FileInputStream(file);
var isr = new java.io.InputStreamReader(fis);
var br = new java.io.BufferedReader(isr);
var str = br.readLine();
var line = "";
while((line = br.readLine()) != null){
str += "\n"+line;
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
getLibraryData : function(libName){
try{
var data = DCMS.loadLibrary(libName).toString().split("\n");
var data2 = data[1].split(" : ");
var data3 = data[2].split(" : ");
return {name : data[0], version : data2[1], maker : data3[1]};
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
},
loadDcms : function(file, dcmsName){
try{
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
var file2 = new java.io.File(sdcard+"/Android/data/com.darktornado.darkcheater/dcms/files/"+dcmsName+".dcms");
var fos = new java.io.FileOutputStream(file2);
var str = new java.lang.String(str);
fos.write(str.getBytes());
fos.close();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
},
removeDcms : function(fileName){
var file = new java.io.File(sdcard+"/Android/data/com.darktornado.darkcheater/dcms/files/"+fileName+".dcms");
if(file.exists()) file.delete();
},
selectDcms : function(path){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var dir = new java.io.File(path).list().sort();
var dir2 = [];
var dir3 = [];
for each(var f in dir){
if(f.substring(0, 1)!="."){
var ff = new java.io.File(path+"/"+f);
var fff = f.split("\\.");
if(ff.isDirectory()) dir2.push(f);
else if(fff[fff.length-1]=="dcms") dir3.push(f);
}
}
dir2.sort();
dir3.sort();
for each(var f in dir3) dir2.push(f);
dialog.setItems(dir2, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
var file = new java.io.File(path+"/"+dir2[w]);
if(file.isDirectory()) DCMS.selectDcms(path+"/"+dir2[w]);
else DCMS.loadDcms(file, dir2[w].substring(0, dir2[w].lastIndexOf(".")));
}
}));
dialog.setTitle("DCMS 불러오기");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
},
openManager : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var use = new android.widget.Switch(ctx);
use.setText("Dark Cheater Modify Script 사용");
use.setTextColor(white);
use.setChecked(compileFinish);
use.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(swit, onoff){
Dark.save("useDcms", onoff);
if(onoff){
dcmsData = {consts : "", vars : "", useItem : "", attackHook : "", deathHook : "", modSecond : "", chatHook : ""};
DCMS.compile();
}
else{
compileFinish = false;
}
}
}));
layout.addView(use);
var btns = new Array();
var menus = ["적용한 DCMS 목록", "DCMS 불러오기", "라이브러리 목록", "라이브러리 다운", "도움말"];
for(var n in menus){
btns[n] = new android.widget.Button(ctx);
btns[n].setText(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
try{
switch(v.getId()){
case 0 : 
DCMS.dcmsList();
break;
case 1 : 
DCMS.selectDcms(sdcard);
break;
case 2 : 
DCMS.libraryList();
break;
case 3 : 
new java.lang.Thread({
run : function(){
var data = Dark.getDataFromServer("https://raw.githubusercontent.com/DarkTornado/darkCheater/master/dcmsLibInfo.txt").toString().split("\n");
DCMS.selectLibrary(data);
}
}).start();
break;
case 4 : 
Dark.showDialog("냥파스-!", "니파-☆");
break;
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
layout.addView(btns[n]);
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("DCMS 관리");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
},
dcmsList : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setItems(DCMS.getDcmsList(), new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
var cache = DCMS.getDcmsList()[w];
DCMS.selectAct(cache.substring(0, cache.lastIndexOf(".")));
}
}));
dialog.setTitle("DCMS 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
},
selectAct : function(fileName){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setItems(["소스 수정", "적용 해제"], new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(w==0){
DCMS.openSource(fileName);
}
else if(w==1){
DCMS.removeDcms(fileName);
Dark.toast(fileName+"의 적용을 해제합니다.");
}
}
}));
dialog.setTitle("작업 선택 - "+fileName);
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
},
openSource : function(dcmsName){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("Dark Cheater Modify Script...");
loc2.setText(DCMS.read(dcmsName));
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("DCMS - "+dcmsName);
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("저장", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
DCMS.save(dcmsName, loc2.getText().toString());
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
makeDirectory : function(){
var fol1 = new java.io.File(sdcard+"/Android/data/com.darktornado.darkcheater/dcms/");
fol1.mkdir();
var fol2 = new java.io.File(sdcard+"/Android/data/com.darktornado.darkcheater/dcms/library/");
fol2.mkdir();
var fol3 = new java.io.File(sdcard+"/Android/data/com.darktornado.darkcheater/dcms/files/");
fol3.mkdir();
},
libraryList : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var libs = new java.io.File(sdcard+"/Android/data/com.darktornado.darkcheater/dcms/library/").list().sort();
dialog.setItems(libs, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
var cache = libs[w];
DCMS.selectActLib(cache.substring(0, cache.lastIndexOf(".")));
}
}));
dialog.setTitle("라이브러리 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
},
selectActLib : function(libName){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setItems(["라이브러리 정보", "라이브러리 삭제"], new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(w==0){
var data = DCMS.getLibraryData(libName);
Dark.showDialog("라이브러리 정보", "이름 : "+data.name+ "\n버전 : "+data.version+ "\n제작자 : "+data.maker);
}
else if(w==1){
var file = new java.io.File(sdcard+"/Android/data/com.darktornado.darkcheater/dcms/library/"+libName+".dclib");
if(file.exists()) file.delete();
Dark.toast(libName+"(이)가 삭제되었습니다.");
}
}
}));
dialog.setTitle("작업 선택 - "+libName);
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
},
selectLibrary : function(libData){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var names = [], files = [];
for(var n=0;n<libData.length;n++){
var data = libData[n].split("::");
names.push(data[1]+" (v. "+data[2]+")");
files.push(data[1]);
}
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setItems(names, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
download("Android/data/com.darktornado.darkcheater/dcms/library", files[w]+".dclib", "DCMS 라이브러리 다운로드 ("+files[w]+")", "https://raw.githubusercontent.com/DarkTornado/darkCheater/master/"+String(files[w]).replace(/ /g, "%20")+".js", 1);
}
}));
dialog.setTitle("라이브러리 다운로드");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


};

