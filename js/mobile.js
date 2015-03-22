var p = document.getElementsByTagName('p');
for(var i = 0; i < p.length; i++)
{
	p.onclick = function() {
	 // Trigger the `hover` event on the paragraph
		p.onhover.call(p);
	};
    console.log("Yey\n");
}