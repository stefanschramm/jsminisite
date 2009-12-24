var pages;
var pageCurrent;

function init() {
	pages = document.getElementById('content').getElementsByTagName('div');
	var menu = document.getElementById('menu');
	var href = document.location.href.split('#');
	pageCurrent = href[1] ? document.getElementById(href[1]) : pages[0];
	for (var i = 0; i < pages.length; i++) {
		if (pages[i] != pageCurrent) {
			pages[i].className = "page-hidden";
		}
		var menuLink = document.createElement('a');
		menuLink.setAttribute('href', '#' + pages[i].id);
		menuLink.appendChild(document.createTextNode(pages[i].id));
		menuLink.onclick = function() {
			pageCurrent.className = "page-hidden";
			pageCurrent = document.getElementById(this.childNodes[0].textContent);
			pageCurrent.className = "page";
		};
		menu.appendChild(menuLink);
	}
}

