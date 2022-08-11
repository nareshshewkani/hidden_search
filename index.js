document.querySelector("button").addEventListener("click",toggleShow);
let search_bar = document.querySelector(".search-bar");
function toggleShow(){
   search_bar.classList.toggle("active");
   search_bar.focus();
}
