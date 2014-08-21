// JavaScript Document

;$(function($){
	
	$.fn.tipTag = function(options){
	
		var defaults = {
			width : 200,
			height: 'auto',
			bgColor : '#555',
			textColor:'#fff',
			content : '相关内容',
			className : 'arrowUp'  // 箭头方向
		}
		
		var settings = $.extend(defaults,options);
		
		return this.each(function(){
			
			$obj = $(this);
			
			$obj.mouseover(function(e){
				
				creatTip(settings.className, settings.content);
				
				$('.tipTag').css({
					width: settings.width,
					height:settings.height,
					left : e.pageX-10,
					top : e.pageY+20
				})	
			})
			
			$obj.mouseout(function(){
				$('.tipTag').remove();
			})
			
			
			
			
		})
		
	}
	
	function creatTip(sClass,txt){
		var strHtml = '<i class="'+sClass+'"></i><p>'+txt+'</p>'
		var $tip = $('<div class="tipTag"></div>').html(strHtml);
		$('body').append($tip);
	}
	
})(jQuery)