# A chrome extension for removing ads on the web page.

一款简易的chrome拓展程序，可清除页面中的广告。

仓库里是整个插件包，下载安装chrome拓展可以直接使用，chrome插件安装及配置参考：
http://open.chrome.360.cn/extension_dev/getstarted.html

通过在匹配的页面注入js脚本文件，通过找到页面中的广告框然后将其隐藏（通过JQ hide()方法）达到清除广告的效果。

通过寻找页面中广告的特性，通过算法可以得到广告框的外层id或者类名。

简单的算法如下：
```Javascript
//简单的智能算法
findSomeAdPossible: function() {
	//找到可能的广告wrapper
	var sap = $('div iframe'),
	    ad_img = $('div script').parent().find('img,embed'),
	    float_img = $('div object').parent().find('img,embed');

	    this.arrayDel(sap,360,200);
	    this.arrayDel(ad_img,350,150);
	    this.arrayDel(float_img,350,150);
},
arrayDel : function(arr,conWidth,conHeight){
	var len = arr.length;

	for(var i = 0 ; i<len ; i++){
		var self = arr.eq(i);

		if(self.width() <= conWidth || self.height() <= conHeight) {
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

由于manifest文件匹配规则只有通配没有非功能，所以可在此方法可以设置不想删除广告的页面
```javascript
checkUrl: function() {
	var Checkflag = 0,
		url = window.location.href;

	//手动添加不需要清除广告的域
	var notDel = [
		"www.baidu.com",
		"taobao.com",
		"tmall.com",
		"jd.com"
	];

	//正则匹配
	for (var i = 0; i < notDel.length; i++) {
		var reg = new RegExp(notDel[i], "g");

		if (reg.test(url)) {
			console.log('This page does not clear ads.');
			break;
		} else {
			if (i == notDel.length - 1) {
				Checkflag = 1;
			}
		}
	}
	
	if (Checkflag == 1) {
		this.clear();
		this.findSomeAdPossible();
	}
}
```

如果安装了无法正常使用，需要进行如下配置，打开chrome浏览器，输入框输入
```
chrome://flags/#enable-npapi
```
然后，然后启用 NPAPI 、启用 实验性扩展程序 API

blog介绍地址：http://www.cnblogs.com/coco1s/p/4725477.html
