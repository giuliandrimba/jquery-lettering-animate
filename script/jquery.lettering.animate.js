(function($)
{
	/*
	 * Author: Giulian Drimba
	 * This plugin is used in conjunction with the lettering plugin to animate the individual letters
	 * 
	*/
	
	$.fn.animateLetters = function(inAnimProperties,outAnimProperties, animConfig, completeCallback)
	{
		var scope = this;
		var letters = new Array();
		var numLettersAnimated = 0;
		var animConfig = animConfig;
		var introAnimProperties = inAnimProperties;
		var outroAnimProperties = outAnimProperties;
		var time = 1000;
		var randomOrder = false;
		var reset = false;
		var delay = 0;
		var onCompleteCallback = completeCallback;
		
		letters = $(this).find("span");
				
		if(animConfig && animConfig.time != undefined)
		{
			time = animConfig.time;
		}
		
		if(animConfig && animConfig.randomOrder)
		{
			randomOrder = animConfig.randomOrder;
		}

		if(animConfig && animConfig.reset)
		{
			reset = animConfig.reset;
		}
		
		if(introAnimProperties === undefined || introAnimProperties === null)
		{
			introAnimProperties = getDefaultProperties(outroAnimProperties);
		}
		
		if(outroAnimProperties === undefined || outroAnimProperties === null)
		{
			outroAnimProperties = getDefaultProperties(introAnimProperties);
		}
					
		letters.each(function()
		{			
			$(this).css("position","relative");		
			$(this).css(introAnimProperties);		
			$(this).delay(delay).animate(outroAnimProperties,{complete:checkIfCompleted});
						
			if(randomOrder === true)
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
				if(time > 10)
				{
					delay += time/10;	
				}
			}
		});
		
		function checkIfCompleted()
		{
			numLettersAnimated++;
			
			if(numLettersAnimated == letters.length)
			{
				if(reset)
				{
					resetLettering();
				}

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

		function resetLettering()
		{
			var text = "";
		
			var letters = $(scope).find("span");
			
			for(var i = 0; i < letters.length; i++)
			{
				text += $(letters[i]).text();
			}
			
			$(scope).empty();
			$(scope).text(text);
		}
	}

})(jQuery)
