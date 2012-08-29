// Initialize global variables
var n,eh,em,es;

// Start the clock when the page is ready
window.addEventListener("load",function(){
	updateTime();
	console.log('onReady fired.');
},false);

function updateTime() {
	// Get Current Time
	var d = new Date(),
	    h = d.getHours(),
		m = d.getMinutes(),
		s = d.getSeconds();
	
	// Get clock hands
	eh = document.getElementsByClassName('hour');
	em = document.getElementsByClassName('minute');
	es = document.getElementsByClassName('second');
	
	// Update hand positions
	for(var i = 0; i < document.getElementsByClassName('clock').length; i++) {
		if(eh[i]) {
			try {eh[i].style.webkitTransform="rotate(" + Math.round(h/12*360) + "deg)"} catch(ex){}
			try {eh[i].style.mozTransform="rotate(" + Math.round(h/12*360) + "deg)"} catch(ex){}
			try {eh[i].style.transform="rotate(" + Math.round(h/12*360) + "deg)"} catch(ex){}
		}
		if(em[i]) {
			try {em[i].style.webkitTransform="rotate(" + Math.round(m/60*360) + "deg)"} catch(ex){}
			try {em[i].style.mozTransform="rotate(" + Math.round(m/60*360) + "deg)"} catch(ex){}
			try {em[i].style.transform="rotate(" + Math.round(m/60*360) + "deg)"} catch(ex){}
		}
		if(es[i]) {
			try {es[i].style.webkitTransform="rotate(" + Math.round(s/60*360) + "deg)"} catch(ex){}
			try {es[i].style.mozTransform="rotate(" + Math.round(s/60*360) + "deg)"} catch(ex){}
			try {es[i].style.transform="rotate(" + Math.round(s/60*360) + "deg)"} catch(ex){}
		}
	}
	
	// Queue next update
	window.setTimeout("updateTime()",1000);
}