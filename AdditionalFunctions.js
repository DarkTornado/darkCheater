/*
This ModPE is part of Dark Cheaeter.
© 2016 Dark Tornado, All rights reserved.
*/

var isCallbackAdded;

function pillarDialog(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
loc1.setText("높이 : ");
loc1.setTextSize(18);
loc1.setTextColor(white);
loc2.setHint("높이를 입력하세요...");
loc2.setTextColor(white);
loc2.setInputType(number);
layout.addView(loc1);
layout.addView(loc2);
var pad = dip2px(ctx, 5);
layout.setPadding(pad, pad, pad, pad);
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("기둥 설정");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(loc2.getText().toString()=="") procCmd("pillar off");
else procCmd("pillar "+loc2.getText());
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

function unreplaceDialog(){
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
var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("빼고 바꾸기");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
if(loc4.getText()==""){
procCmd("unreplace "+loc2.getText()+" "+loc7.getText());
}
else{
procCmd("unchange "+loc2.getText()+" "+loc4.getText()+" "+loc7.getText()+" "+loc9.getText());
}
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

