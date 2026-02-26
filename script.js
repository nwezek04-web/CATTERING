const navMenu = document.getElementById("navLinks");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");

function openMenu() {
  navMenu.style.display = "inline-block";   
  openIcon.style.display = "none"; 
  closeIcon.style.display = "inline-block";
  openIcon.style.float = "right";
  navMenu.style.float = "right";
  navMenu.style.position = "fixed";
  navMenu.style.left = "0px";
  navMenu.style.marginTop = "42px";
  
}

function closeMenu() {
  navMenu.style.display = "none";   
  openIcon.style.display = "block"; 
  closeIcon.style.display = "none"; 
 
 
}