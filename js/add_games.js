function  create_li(href, inner){
	let games = document.getElementById("c_games");
	let li = document.createElement("li");
	let a = document.createElement("a");
	a.href = href;
	a.innerHTML = inner;
	li.appendChild(a);
	games.appendChild(li);
}

create_li("./html/notepad.html", "NotePad");