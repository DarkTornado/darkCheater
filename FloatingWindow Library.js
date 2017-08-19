/*
FloatingWindow Library for Dark Cheater
© 2016-2017 Dark Tornado, All rights reserved.
*/

function FloatingWindow(){
this.window = new android.widget.PopupWindow(ctx);
this.title = "";
this.titleColor = android.graphics.Color.CYAN;
this.color = android.graphics.Color.argb(120, 80, 80, 80);
this.drawable = null;
this.layout = new android.widget.LinearLayout(ctx);
}

FloatingWindow.prototype = {
setTitle: function(text){
this.title = text;
},
setTitleColor: function(color){
this.titleColor = color;
},
addText: function(text, func){
var txt = new android.widget.TextView(ctx);
txt.setText(text);
txt.setTextColor(android.graphics.Color.WHITE);
txt.setTextSize(15);
txt.setGravity(android.view.Gravity.CENTER);
if(func != null) txt.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v){
try{
if(typeof func == "function") func();
else eval(func+"");
}
catch(e){
print(e);
}
}
}));
this.layout.addView(txt);
},
addToggleText: function(text, func1, func2, tf){
var txt = new android.widget.TextView(ctx);
txt.setText(text);
if(tf) txt.setTextColor(android.graphics.Color.YELLOW);
else txt.setTextColor(android.graphics.Color.WHITE);
txt.setTextSize(15);
txt.setGravity(android.view.Gravity.CENTER);
txt.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(v){
try{
switch(txt.getTextColors().getDefaultColor()){
case android.graphics.Color.WHITE:
if(typeof func1 == "function") func1();
else eval(func1+"");
txt.setTextColor(android.graphics.Color.YELLOW);
break;
case android.graphics.Color.YELLOW:
if(typeof func2 == "function") func2();
else eval(func2+"");
txt.setTextColor(android.graphics.Color.WHITE);
break;
}
}
catch(e){
print(e);
}
}
}));
this.layout.addView(txt);
},
setColor: function(color){
this.color = color;
},
setDrawable: function(drawable){
this.drawable = drawable;
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
title.setTextColor(cache.titleColor);
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
if(layout.getChildCount() == 1){
layout.addView(scroll);
cache.window.update(dip2px(ctx, 100), dip2px(ctx, 130));
}
else{
layout.removeView(scroll);
cache.window.update(dip2px(ctx, 100), dip2px(ctx, 30));
}
}
catch(e){
print(e);
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
case android.view.MotionEvent.ACTION_MOVE:
cache.window.update(ev.getRawX(), ev.getRawY(), cache.window.getWidth(), cache.window.getHeight());
break;
case android.view.MotionEvent.ACTION_UP:
longTouchCheck = false;
break;
}
}
return false;
}
catch(e){
print(e);
}
}
}));
cache.window.setContentView(layout);
cache.window.setWidth(dip2px(ctx, 100));
cache.window.setHeight(dip2px(ctx, 130));
if(cache.drawable != null) cache.window.setBackgroundDrawable(cache.drawable);
else cache.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(cache.color));
cache.window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, dip2px(ctx, 90), dip2px(ctx, 90));
}
catch(e){
print(e);
}
}
}));
},
close: function(){
var window = this.window;
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
if(window != null) window.dismiss();
}
catch(e){
print(e);
}
}
}));
},
isForDarkCheater : function(){
return true;
}
};

