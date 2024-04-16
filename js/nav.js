let button = document.querySelector('#open');
let exit = document.querySelector('.close');
let side_nav = document.querySelector('#side-nav');

button.addEventListener("click", function(){
    side_nav.classList.remove("hide");
    console.log("Clicked");
    console.log(side_nav.classList);
});
exit.addEventListener("click", function(){
    side_nav.classList.add("hide");
});