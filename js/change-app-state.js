var blueBg = '#C3E1F6';
var greyBg = '#cfcfcf';
var brownGround = '#51362A';
var redGround = '#DE1F26';
var dollarTree = 'images/dollar-tree.png';
var tree = 'images/tree.png';
var starTree = 'images/star-tree.png';
var mountains = 'images/mountains.png';
var cave = 'images/cave.png';
var stars = 'images/stars.png';

// Change background color and show/hide images based on application state/dontation amount
function changeAppState(appState)
{
	if(appState == 1)
	{
		$('body').css('background', blueBg);		
		$('#fire-wrapper').show();
		$('#tree').attr("src", dollarTree);
		$('footer').css('background-color', brownGround);
		$('footer').removeClass('cave').addClass('mountains');
	}
	if(appState == 5)
	{
		$('body').css('background', blueBg);		
		$('#fire-wrapper').hide();
		$('#tree').attr("src", tree);
		$('footer').removeClass('mountains').addClass('cave');
	}
	if(appState == 10)
	{
		$('body').css('background', blueBg);	
		$('#fire-wrapper').hide();
		$('#tree').attr("src", starTree);
		$('footer').removeClass('mountains').addClass('cave');
	}
	if(appState == 20)
	{
		$('body').css('background', 'url("images/stars.png") no-repeat 44% 24% #C3E1F6'); 	
		$('#fire-wrapper').hide();
		$('#tree').attr("src", starTree);
		$('footer').removeClass('mountains').addClass('cave');
	}
}