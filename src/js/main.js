window.onload = function () {
	var gorillaz2D = document.getElementById('gorillaz-2d');

	window.addEventListener('mousemove',function(e){
		var pageX = e.clientX,
				pageY = e.clientY;
		gorillaz2D.style.webkitTransform = 'translateX(' + pageX/150 + '%) translateY(' + pageY/150 + '%)';
  	gorillaz2D.style.transform = 'translateX(' + pageX/150 + '%) translateY(' + pageY/150 + '%)';
	})
}