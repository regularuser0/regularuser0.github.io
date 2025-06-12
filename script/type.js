document.addEventListener("DOMContentLoaded", function () {

    let lines = document.getElementsByClassName("line");

    for (let i = 0; i < lines.length; i++) {
	lines[i].style.display = "none";
    }
    
    const cooldown = 300;

    function type(id,command,line,lines) {
	lines[line-1].style.display = "flex";
	for (let i = 0; i < command.length+1; i++) {
	    setTimeout(function() {
		document.getElementById(id).innerText = command.substring(0, i);
	    }, i * cooldown);
	}	
    }


    setTimeout(function() {
	type("ls","ls",1,lines)
	
	setTimeout(function() {
	    type("","",2,lines)
	    type("feh","./showoff",3,lines)
	}, cooldown*4);
    }, 400);


});
