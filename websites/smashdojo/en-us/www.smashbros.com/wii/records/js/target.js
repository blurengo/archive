
$(document).ready(function(){
	$("DIV.rankingMenuHidden").removeClass("rankingMenuHidden");
	$("DIV.menu01").addClass("menuOn");
	$("DIV.menu_b01").addClass("menu_bOn");
	$("DIV.ranking").addClass("rankingHidden");
	$("DIV#ranking01").removeClass("rankingHidden");
});


function changeList(number){
	$("DIV.menu").removeClass("menuOn");
	$("DIV.menu_b").removeClass("menu_bOn");
	$("DIV.menu"+number).addClass("menuOn");
	$("DIV.menu_b"+number).addClass("menu_bOn");
	$("DIV.ranking").addClass("rankingHidden");
	$("DIV#ranking"+number).removeClass("rankingHidden");
}
