// JavaScript Document

;$(function($){
	
	$.fn.tipTag = function(options){
	
		var defaults = {
			width : 200,
			height: 'auto',
			bgColor : '#555',
			textColor:'#fff',
			content : '相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容相关内容',
			animate : 'slide',    //展开形式
			className : 'arrowUp'  // 箭头方向
		}
		
		var settings = $.extend(defaults,options);
		
		return this.each(function(){
			
			$obj = $(this);
			
			$obj.mouseover(function(e){
				
				creatTip(settings.className, settings.content);
					
				var L  = 0;
				var T = 0
				switch(settings.className){
					case 'arrowUp':
					
						// 20 : 是样式中的padding
						L = e.pageX + settings.width > $(window).width() ?  $(window).width() - settings.width -20 : e.pageX;
						
						
					 	T = e.pageY+20
						
						
						$('.tipTag').css({
							width: settings.width,
							height:settings.height,
							left : L,
							top : e.pageY+20
						})	
						break;
						
					case 'arrowDown':
						
						break;
				}
				
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