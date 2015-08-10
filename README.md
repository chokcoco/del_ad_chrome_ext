# 广告清除插件
A chrome extension for removing ads on the web page.

一款简易的chrome插件，可清除页面中的广告

通过在匹配的页面注入js脚本文件，通过找到页面中的广告框然后将其隐藏（通过JQ hide()方法）达到清除广告的效果。

通过寻找页面中广告的特性，通过算法可以得到广告框的外层id或者类名。
简单的算法如下：
```Javascript
findSomeAdPossible: function() {
	//找到可能的广告wrapper
	var sap = $('div iframe');
	
	for (var i = 0; i < sap.length; i++) {
		var self = sap.eq(i);
		//一般广告特性，宽度小于350 或者高度小于150，算法简单，所以可能“误杀”良民，但是经过测试匹配率很高
		if (self.width() <= 350 || self.height() <= 150 ) {
			self.hide();
		}
	}
}
```

另外设置了一个id数组和class数组用于存放那些没有特性的广告框容器名，缺点是需要手动收集
```Javascript
clear: function() {
	//此处可手动添加广告框id名，去除顽疾ad必备
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
		"AC_TR86_71603",
		"cproIframe_u2060917_1",
		"google_image_div",
		"content_right"
	];

	//此处添加广告框类名
	var ad_css_name = [
		"cproIframe_u410704_3",
		"img_ad",
		"hover_btn"
	];

	for (var i = 0; i < ad_id_name.length; i++) {
		$('#' + ad_id_name[i]).hide();
	}

	for (var i = 0; i < ad_css_name.length; i++) {
		$('.' + ad_css_name[i]).hide();
	}
}
```
