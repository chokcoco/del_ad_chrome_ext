//注入页面的脚本文件
;$(function(){
	console.log('Clear Start');

	//此处添加广告框id名
	var ad_id_name = [
		"cproIframe2001holder",
		"cproIframe2002holder",
		"cproIframe2003holder",
		"cproIframe2004holder",
		"cproIframe2005holder",
		"cproIframe2006holder",
		"cproIframe2007holder",
		"cproIframe2008holder",
		"id_300x250_banner_top",
		"ads",
		"google_image_div",
		"mx_cs_71603_1261456",
		"AC_TR86_71603"
	];

	//此处添加广告框类名
	var ad_css_name = [
		"cproIframe_u410704_3",
		"img_ad"
	];

	for(var i = 0;i<ad_id_name.length;i++){
		$('#'+ad_id_name[i]).hide();
	}

	for(var i = 0;i<ad_css_name.length;i++){
		$('#'+ad_css_name[i]).hide();
	}
})