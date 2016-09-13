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

