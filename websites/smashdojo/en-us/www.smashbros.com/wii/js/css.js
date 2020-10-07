<!--
mac = (navigator.appVersion.indexOf('Mac') != -1) ? true:false;
ie = (navigator.appName.charAt(0) == "M") ? true:false;

mac = (navigator.appVersion.indexOf('Mac') != -1) ? true:false;
ie = (navigator.appName.charAt(0) == "M") ? true:false;

var mykaisou = "";

for(i=0; i<kaisouNum; i++){
	mykaisou += "https://www.smashbros.com/wii/";
}

if(mac){
	if(ie){
	//for Mac IE
		document.write('<LINK rel="stylesheet" type="text/css" href="' + mykaisou + 'css/for_macie.css">');
	}
	//for Mac NN
	else{
		document.write('<LINK rel="stylesheet" type="text/css" href="' + mykaisou + 'css/for_macnn.css">');
	}
}

else{
	if(ie){
	//for Win IE
		document.write('<LINK rel="stylesheet" type="text/css" href="' + mykaisou + 'css/for_winie.css">');
	}
	//for Win NN
	else{
		document.write('<LINK rel="stylesheet" type="text/css" href="' + mykaisou + 'css/for_winnn.css">');
	}
}
document.write('<LINK REL="stylesheet" HREF="' + mykaisou + 'css/thickbox.css" TYPE="text/css">');

//preload images
var menu01 = mykaisou + "images/cat_menu/cat_menu_01on.gif";
var menu02 = mykaisou + "images/cat_menu/cat_menu_02on.gif";
var menu03 = mykaisou + "images/cat_menu/cat_menu_03on.gif";
var menu04 = mykaisou + "images/cat_menu/cat_menu_04on.gif";
var menu05 = mykaisou + "images/cat_menu/cat_menu_05on.gif";
var menu06 = mykaisou + "images/cat_menu/cat_menu_06on.gif";
var gotop = mykaisou + "images/top/gotop01off.gif";
var policy = mykaisou + "images/top/policy_off.gif";
var slang = mykaisou + "images/top/select_lang_ov.gif";
MM_preloadImages(menu01,menu02,menu03,menu04,menu05,menu06,gotop,policy);
if(kaisouNum == 0){
	MM_preloadImages(slang);
}

//-->
