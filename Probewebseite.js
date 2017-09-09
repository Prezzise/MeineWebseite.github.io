function Weiterlesen() {
	$('#Button1').hide();
	document.getElementById('Beschreibung').style.height = '880px';
}
function Erscheinen() {
	$('#JustDoIt').hide();
	$('#MakeYourDreams').hide();
	$('#JustDoIt').fadeIn(4000);
	$('#MakeYourDreams').fadeIn(4000);
	
}
$(document).ready(Erscheinen);
