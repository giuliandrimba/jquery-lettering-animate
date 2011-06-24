(function($)
{
	/*
	 * Author: Giulian Drimba
	 * This plugin is used in conjunction with the lettering plugin to animate the individual letters
	 * 
	*/
	
	$.fn.animateLetters = function(animConfig, animProperties,completeCallback)
	{
		var letters = new Array();
		var numLettersAnimated = 0;
		var animConfig = animConfig;
		var animProperties = animProperties;
		var time = 1000;
		var randomOrder = false;
		var delay = 0;
		var onCompleteCallback = completeCallback;
		
		letters = $(this).find("span[class*='char']");
		
		if(animConfig && animConfig.time)
		{
			time = animConfig.time;
		}
		
		if(animConfig && animConfig.randomOrder)
		{
			randomOrder = animConfig.randomOrder;
		}
					
		letters.each(function()
		{			
			$(this).css("position","relative");		
			$(this).css(animProperties);		
			$(this).delay(delay).animate(getDefaultProperties(animProperties),{complete:checkIfCompleted});
			
			if(randomOrder == true)
			{
				delay = Math.random() * time;
				delay -= time/letters.length;
				
				if(delay < 0)
				{
					delay = 0;
				}
			}
			else
			{
				delay += time/10;
			}
		});
		
		function checkIfCompleted()
		{
			numLettersAnimated++;
			
			if(numLettersAnimated == letters.length)
			{
				if(onCompleteCallback)
				{
					onCompleteCallback();	
				}
			}
		}
		
		function getDefaultProperties(effectProperties)
		{
			var properties = {};
			
			for(propertyName in effectProperties)
			{
				var animProperty = propertyName.toString();
				
				properties[animProperty] = 0;
				
				if(propertyName === "opacity")
				{
					properties[animProperty] = 1;
				}
				
			}
			
			return properties;
		}
	}

})(jQuery)

