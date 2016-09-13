/*
DarkFloatingWindow Library
© 2016 Dark Tornado, All rights reserved.
This ModPE is part of Dark Cheaeter.
*/

function DarkFloatingWindow(){
this.window = new android.widget.PopupWindow(ctx);
this.title = "";
this.layout = new android.widget.LinearLayout(ctx);
}

DarkFloatingWindow.prototype = {
setTitle: function(text){
this.title = text;
},
addText: function(text, func){
var txt = new android.widget.TextView(ctx);
txt.setText(text);
txt.setTextColor(white);
txt.setTextSize(16);
txt.setGravity(android.view.Gravity.CENTER);
if(func!=null) txt.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v){
try{
if(typeof func=="function") func();
else eval(func+"");
}
catch(e){
Dark.showError(e);
}
}
}));
this.layout.addView(txt);
},
addToggleText: function(text, func1, func2, tf){
var txt = new android.widget.TextView(ctx);
txt.setText(text);
if(tf) txt.setTextColor(android.graphics.Color.YELLOW);
else txt.setTextColor(white);
txt.setTextSize(16);
txt.setGravity(android.view.Gravity.CENTER);
txt.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v){
try{
switch(txt.getTextColors().getDefaultColor()){
case white:
if(typeof func1=="function") func1();
else eval(func1+"");
txt.setTextColor(android.graphics.Color.YELLOW);
break;
case android.graphics.Color.YELLOW:
if(typeof func2=="function") func2();
else eval(func2+"");
txt.setTextColor(white);
break;
}
}
catch(e){
Dark.showError(e);
}
}
}));
this.layout.addView(txt);
},
show: function(){
var cache = this;
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
cache.layout.setOrientation(1);
cache.layout.setGravity(android.view.Gravity.CENTER);
var title = new android.widget.TextView(ctx);
title.setText(cache.title);
title.setTextColor(android.graphics.Color.CYAN);
title.setTextSize(17);
title.setGravity(android.view.Gravity.CENTER);
var pad = dip2px(ctx, 1);
title.setPadding(pad, pad, pad, pad);
pad = dip2px(ctx, 2);
cache.layout.setPadding(pad, pad, pad, pad);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(cache.layout);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(title);
layout.addView(scroll);
title.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v){
try{
if(layout.getChildCount()==1){
layout.addView(scroll);
cache.window.update(dip2px(ctx, 100), dip2px(ctx, 130));
}
else{
layout.removeView(scroll);
cache.window.update(dip2px(ctx, 100), dip2px(ctx, 30));
}
}
catch(e){
Dark.showError(e);
}
}
}));
setDragListener(cache.window, title, 0);
cache.window.setContentView(layout);
cache.window.setWidth(dip2px(ctx, 100));
cache.window.setHeight(dip2px(ctx, 130));
cache.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(110, 95, 90, 100)));
cache.window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 90), dip2px(ctx, 90));
}
catch(e){
Dark.showError(e);
}
}
}));
},
close: function(){
var cache = this;
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
if(cache.window!=null) cache.window.dismiss();
}
catch(e){
Dark.showError(e);
}
}
}));
}

};

