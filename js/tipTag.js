// JavaScript Document

;(function($){
	
	$.fn.tipTag = function(options){
	
		var defaults = {
			width : 200,
			height: 'auto',
			bgColor : '#555',
			textColor:'#fff',
			content : '相关内容相关内容相相关内容相关内容相相关内容相关内容相相关内容相关内容相相关内容相关内容相相关内容相关内容相相关内容相关内容相相关内容相关内容相'
		}
		
		var settings = $.extend(defaults,options);
		
		return this.each(function(){
			
			$obj = $(this);
			
			$obj.mouseover(function(e){
				
				creatTip(settings.content);
					
				var L  = 0;
				var T = 0
				
				// 20 代表 padding 
				if( e.pageX > $(document).width()/2 ){
					L = (e.pageX + settings.width > $(document).width() ?  $(document).width() - settings.width - 20 : e.pageX - settings.width/2)
				}else{
					L =  (e.pageX - settings.width/2 < 0 ? 0 : e.pageX - settings.width/2);
				}
				
				if( e.pageY +  $(this).height() > $(document).height() ){
					T =  e.pageY - $('.tipTag').height() - $(this).height() - 18;  // 18 为微调值
					$('.tipTag').find('i').removeClass('arrowUp').addClass('arrowDown');
					
				}else{
					T = e.pageY +  $(this).height();
				}
				
				
				$('.tipTag').css({
					width: settings.width,
					height:settings.height,
					left : L,
					top : T
				}).find('i').css({
					left : e.pageX - L
				})
					
			})
			
			$obj.mouseout(function(){
				$('.tipTag').remove();
			})
			
			
			
			
		})
		
	}
	
	function creatTip(txt){
		var strHtml = '<i class="arrowUp"></i><p>'+txt+'</p>'
		var $tip = $('<div class="tipTag"></div>').html(strHtml);
		$('body').append($tip);
	}
	
})(jQuery)