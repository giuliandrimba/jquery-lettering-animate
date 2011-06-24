"jQuery Lettering Animate" is an extension of the "lettering plugin", it iterates through each letter separated by the lettering and animates it.
====================
		
Here is the sintax to use it:
			
```
$("#element").lettering().animateLetters({randomOrder:true,time:1000},{left:200,opacity:0},onCompleteHandler);
```
			
First you apply the lettering effect to the dom element, then, you animate the letters passing as parameters the plugin options "randomOrder" and "time", the animation properties properties of each letter, and the "onComplete" callback.
		
Requirements:
---------------------

1. [jQuery Library]
2. [Lettering Plugin]
3. [Lettering Animate Plugin]
		
[jQuery Library]: http://docs.jquery.com/Downloading_jQuery "jQuery Library"
[Lettering Plugin]: http://daverupert.com/2010/09/lettering-js/ "Lettering Plugin"
[Lettering Animate Plugin]: https://github.com/giuliandrimba/jquery-lettering-animate "Lettering Animate Plugin"


[See the Examples]
---------------------

[See the Examples]: http://www.giuliandrimba.com/labs/lettering-animate/ "See the examples"