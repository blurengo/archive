function initialize(form){
	if(navigator.userAgent.indexOf("MSIE") != -1){
		if(form.flg.value == "true") {
			location.reload();
			}
	}
}

function checkFlag(form){
	form.flg.value = "true";
}