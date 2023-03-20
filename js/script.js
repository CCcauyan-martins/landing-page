let toggleButton = document.getElementById("toggle-button");
let bars = document.getElementById("bars-mark");
let x = document.getElementById("x-mark");
let nav = document.getElementById("nav");
let menuMobile = document.getElementById("menu-mobile")

toggleButton.addEventListener('click', () => {

        if(bars.classList.contains("open")) {
           
            bars.classList.remove("open");
            bars.classList.add("close")
            
            x.classList.remove("close")
            x.classList.add("open");

            nav.classList.remove("nav-bar");
            nav.classList.add("nav-bar-2");

            menuMobile.classList.remove("close");
            menuMobile.classList.add("open");


        } else {
            bars.classList.remove("close");
            bars.classList.add("open")
            
            x.classList.remove("open")
            x.classList.add("close");

            menuMobile.classList.remove("open");
            menuMobile.classList.add("close");

        }

})