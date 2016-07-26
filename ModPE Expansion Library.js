ModPE Expansion Library
version : 1.1
Maker : Dark Tornado
© 2016 Dark Tornado, All rights reserved.
--------------------
/*
Entity.linkWithParticle(e1, e2);
ModPE.getBlocklauncherVersion = function(tf);
ModPE.getMyIp = function();
ModPE.getUserName = function();
*/


Level.spawnSpiderJoky = function(x, y, z){
var a = Level.spawnMob(x, y, z, 35);
var b = Level.spawnMob(x, y, z, 34);
Entity.rideAnimal(b, a);
};


Level.spawnChickenJoky = function(x, y, z){
var a = Level.spawnMob(x, y, z, 10);
var b = Level.spawnMob(x, y, z, 32);
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeZombieSetBaby(b, true);
Entity.rideAnimal(b, a);
};


Level.isNight = function(){
return nightCheck();
};


Player.getHealth = function(){
return Entity.getHealth(Player.getEntity());
};


Player.removeEnchant = function(){
var itemName = Player.getItemCustomName(Player.getSelectedSlotId());
Entity.setCarriedItem(Player.getEntity(), getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData());
if(itemName!=null) Player.setItemCustomName(Player.getSelectedSlotId(), itemName);
};


Entity.getNearEntities = function(s, r, tf){
var px, py, pz;
var ents = [];
for each(var e in Entity.getAll()){
px = Math.abs(Entity.getX(s)-Entity.getX(e));
py = Math.abs(Entity.getY(s)-Entity.getY(e));
pz = Math.abs(Entity.getZ(s)-Entity.getZ(e));
if(px<=r&&py<=r&&pz<=r&&z!=e&&(tf||Entity.getEntityTypeId(e)<64)){
ents.push(e);
}
}
return ents;
};


Entity.removeNameTag = function(e){
Entity.setNameTag(e, "");
};


Entity.makeBaby = function(e, tf){
if([32, 36].indexOf(Entity.getEntityTypeId(e))!=-1) net.zhuoweizhang.mcpelauncher.ScriptManager.nativeZombieSetBaby(e, tf);
else Dark.showDialog("Error from DCMS Library", "Use can use \"Entity.makeBaby(Long entity, Boolean setBaby);\" only Zombies and Zombie Pigs.");
};


Item.getAllItemIds = function(tf){
var items = [];
if(tf){
for(var n=0;n<4096;n++){
if(Item.isValidItem(n)) items.push(n);
}
}
else{
for(var n=256;n<4096;n++){
if(Item.isValidItem(n)) items.push(n);
}
}
return items;
};


Entity.startBattle = function(e1, e2){
Entity.setTarget(e1, e2);
Entity.setTarget(e2, e1);
};


Entity.removeEntities = function(typeId){
for(var e in Entity.getAll()){
if(Entity.getEntityTypeId(e)==typeId) Entity.remove(e);
}
};


ModPE.checkBlocklauncherIsPro = function(){
return net.zhuoweizhang.mcpelauncher.Utils.isPro();
};


ModPE.setWindow10Ui = function(tf){
net.zhuoweizhang.mcpelauncher.ScriptManager.nativeModPESetDesktopGui(tf);
};


Server.kickAllPlayers = function(){
for(var e in Entity.getAll()){
if(Player.isPlayer(e)) Entity.remove(e);
}
};


Server.getPlayerByName = function(name){
for(var e in Entity.getAll()){
if(Player.getName(e)==name) return e;
}
};




