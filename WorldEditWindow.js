try{
wWin = new DarkFloatingWindow();
wWin.setTitle("월드 에딧");
wWin.addText("철칼&철괭이", function(){
addItemInventory(267, 1, 0);
addItemInventory(292, 1, 0);
Dark.toast("지급되었습니다.");
});
wWin.addToggleText("머리 블록", "w.h = true;", "w.h = false;", w.h);
wWin.addToggleText("발 블록", "w.f = true;", "w.f = false;", w.f);
wWin.addToggleText("블록 교체", "w.c = true;", "w.c = false;", w.c);
wWin.addToggleText("터치한 블록 정보", "blockInfo = true;", "blockInfo = false;", blockInfo);
wWin.addText("채우기", "inputBlockId(3);");
wWin.addText("바꾸기", "replaceDialog(true);");
wWin.addText("빼고 바꾸기", "unreplaceDialog();");
wWin.addText("복사", function(){
new java.lang.Thread({
run : function(){
procCmd("copy");
}
}).start();
});
wWin.addText("붙여넣기", function(){
new java.lang.Thread({
run : function(){
procCmd("paste");
}
}).start();
});
wWin.addText("붙여넣기 취소", function(){
if(w.back){
new java.lang.Thread({
run : function(){
procCmd("unpaste");
}
}).start();
}
else{
Dark.toast("백업된 지형이 없습니다.");
}
});
wWin.addText(" 원 ", "inputBlockId(13);");
wWin.addText("찬 원", "inputBlockId(14);");
wWin.addText("원기둥", "inputBlockId(15);");
wWin.addText(" 구 ", "inputBlockId(16);");
wWin.addText("반구", "inputBlockId(17);");
wWin.addText("찬 구", "inputBlockId(18);");
wWin.addText(" 벽 ", "inputBlockId(11);");
wWin.addText("벽(지형유지)", "inputBlockId(12);");
wWin.addText("직선", "inputBlockId(19);");
wWin.addText("직선(y포함)", "inputBlockId(20);");
wWin.addText("기둥 설정", "pillarDialog();");
wWin.addText("눈내리기", "procCmd('snow');");
wWin.addText("얼리기", "procCmd('freeze');");
wWin.addText("나무 삭제", "procCmd('no tree');");
wWin.addText("물 삭제", "procCmd('no water');");
wWin.show();
}
catch(e){
Dark.showError(e);
}