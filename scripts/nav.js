const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const li = document.querySelectorAll(".nav li");

function clearNav(){
	menu.className = "menu-toggle";
    nav.classList.remove("responsive");
}
function toggle() {
    if (!(menu.className === "menu-toggle active" && nav.className.match("responsive"))) {
        menu.className = "menu-toggle active";
        nav.classList.add("responsive");
        
    } else {
        menu.className = "menu-toggle";
        nav.classList.remove("responsive");
    }
    li.forEach(e=>{
        e.onclick=function () {
			clearNav();
		}
    });
    
    
}
