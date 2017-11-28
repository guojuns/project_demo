new Swiper('.swiper-container',{
	direction:'vertical',
	loop:true
})
~function(){
	var desW=640,
	winW=document.documentElement.clientWidth,
	ratio=winW/desW,
	oMain=document.querySelector('.main');
	if(winW>desW){
		oMain.style.margin='0 auto';
		oMain.style.width=desW+'px';
		return;
	}
	document.documentElement.style.fontSize=ratio*100+'px';
}();