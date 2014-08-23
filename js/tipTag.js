// JavaScript Document

;(function($){
	
	$.fn.tipTag = function(options){
	
		var defaults = {
			width : 200,
			height: 'auto',
			bgColor : '#555',
			textColor:'#fff',
			padding: 20,  //设置内容部分的填充值
			content : '相关内容相关内容相',
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
					
						if( e.pageX > $(document).width()/2 ){
							L = (e.pageX + settings.width > $(document).width() ?  $(document).width() - settings.width - settings.padding : e.pageX - settings.width/2)
						}else{
							L =  (e.pageX - settings.width/2 < 0 ? 0 : e.pageX - settings.width/2);
						}
						
					 	T = e.pageY +  $(this).height() > $(document).height() ?  e.pageY - $('.tipTag').height() - $(this).height() : e.pageY +  $(this).height()
						
						
						$('.tipTag').css({
							width: settings.width,
							height:settings.height,
							left : L,
							top : T
						}).find('i').css({
							left : e.pageX - L
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