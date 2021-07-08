function  create_li(href, inner){
	let games = document.getElementById("c_games");
	let li = document.createElement("li");
	let a = document.createElement("a");
	var path = window.location.pathname;
	var page = path.split("/").pop();
	if(!page.localeCompare("index.html") ||!path.localeCompare("/website/")){
		href = "./html/" + href;
	}
	a.href = href;
	a.innerHTML = inner;
	li.appendChild(a);
	games.appendChild(li);
}

create_li("notepad.html", "NotePad");
create_li("notepad.html", "Test");