File IO Library
version : 1.0
Maker : Dark Tornado
© 2016 Dark Tornado, All rights reserved.
--------------------


const File = {
makeFolder : function(path){
try{
var folder = new java.io.File(path);
folder.mkdir();
}
catch(e){
Dark.showDialog("Error from DCMS Library", e);
}
},
create : function(path){
try{
var file = new java.io.File(path);
file.createNewFile();
}
catch(e){
Dark.showDialog("Error from DCMS Library", e);
}
},
write : function(name, value){
try{
var file = new java.io.File(path);
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String(value);
fos.write(str.getBytes());
fos.close();
}
catch(e){
Dark.showDialog("Error from DCMS Library", e)
}
},
read : function(path){
try{
var file = new java.io.File(path);
if(!file.exists()) return "";
var fis = new java.io.FileInputStream(file);
var isr = new java.io.InputStreamReader(fis);
var br = new java.io.BufferedReader(isr);
var str = br.readLine();
var line = "";
while((line=br.readLine())!=null){
str += "\n"+line;
}
fis.close();
isr.close();
br.close();
return str;
}
catch(e){
Dark.showDialog("Error from DCMS Library", e)
}
},
remove : function(path){
try{
var file = new java.io.File(path);
if(file.exists()) file.delete();
}
catch(e){
Dark.showDialog("Error from DCMS Library", e)
}
},
move : function(path1, path2){
try{
var file1 = new java.io.File(path1);
var file2 = new java.io.File(path2);
file1.renameTo(file2);
}
catch(e){
Dark.showDialog("Error from DCMS Library", e);
}
},
getList : function(path){
try{
var file = new java.io.File(path);
var dir = file.list().sort();
var dir2 = [], dir3 = [];
for(var n=0;n<dir.length;n++){
var ff = new java.io.File(path+"/"+dir[n]);
if(ff.isDirectory()) dir2.push(dir[n]);
else dir3.push(dir[n]);
}
for(var n=0;n<dir3.length;n++)
dir2.push(dir3[n]);
return dir2;
}
catch(e){
Dark.showDialog("Error from DCMS Library", e);
}
},
removeFolder : function(path){
try{
var folder = new java.io.File(path);
net.zhuoweizhang.mcpelauncher.Utils.clearDirectory(folder);
folder.delete();
}
catch(e){
Dark.showDialog("Error from DCMS Library", e);
}
},
unZip : function(path1, path2, tf){
try{
if(tf){
var folder = new java.io.File(path);
folder.mkdir();
var pp = path2.toString().split("/");
path2 = path2+pp[pp.length-1].substring(0, lastIndexOf(".");
}
var fis = new java.io.FileInputStream(path1);
var zis = new java.util.zip.ZipInputStream(fis);
var entry;
while((entry = zis.getNextEntry())!=null){
var fos = new java.io.FileOutputStream(path2+"/"+entry.getName());
var buf = new java.nio.ByteBuffer.allocate(1024).array();
var len;
while((len = zis.read(buf))>0){
fos.write(buf, 0, len);
}
zis.closeEntry();
fos.close();
}
zis.close();
}
catch(e){
Dark.showDialog("Error from DCMS Library", e);
}
},
download : function(path, file, url){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var uri = new android.net.Uri.parse(url);
var dm = new android.app.DownloadManager.Request(uri);
dm.setTitle("파일 다운로드");
dm.setDescription("파일 다운로드 중...");
dm.setDestinationInExternalPublicDir(path, file);
dm.setNotificationVisibility(1);
ctx.getSystemService(android.content.Context.DOWNLOAD_SERVICE).enqueue(dm);
}
catch(e){
Dark.showDialog("Error from DCMS Library", e);
}
}
}));
}


};

