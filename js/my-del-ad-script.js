//注入页面的脚本文件
;
$(function() {
	console.log('Clear Start');

	var clearAd = {
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
				"cproIframe2009holder",
				"id_300x250_banner_top",
				"ads",
				"google_image_div",
				"mx_cs_71603_1261456",
				"AC_TR86_71603",
				"cproIframe_u2060917_1",
				"content_right",
				"left-promotion",
				"top_ads"
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
		},
		//简单的智能算法
		findSomeAdPossible: function() {
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
		},
		init: function() {
			this.clear();
			this.findSomeAdPossible();
		}
	}

	$(document).ready(function() {
		clearAd.init();

		//为防止ajax异步延时加载的广告隔4s再清除一次
		setTimeout(function() {
			clearAd.init();
		}, 4000)
	});
})