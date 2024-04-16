let slideshow = document.querySelector('.videos');
let forward = document.querySelector('#next');
let back = document.querySelector('#prev');
let first = document.querySelector('.current');
let end = document.querySelector('#last');

forward.addEventListener("click",function(){
    let active = document.querySelector('.current');
    let sib1 = document.querySelector('.left');
    let sib2 = document.querySelector('.right');
    let sibling = active.nextElementSibling;

    active.classList.remove("current");
    sib1.classList.remove("left");
    sib2.classList.remove("right");
    if (sibling == null){
        first.classList.add("current");
        last.classList.add("left");
        first.nextElementSibling.classList.add("right");
    }
    else{
        let next_sib = sibling.nextElementSibling;
        sibling.classList.add("current");
        active.classList.add("left");
        if (next_sib == null){
            first.classList.add("right");
        }
        else{
            next_sib.classList.add("right");
        }
    }
    console.log(sibling);
})

back.addEventListener("click", function(){
    let active = document.querySelector('.current');
    let sib1 = document.querySelector('.left');
    let sib2 = document.querySelector('.right');
    let previous = active.previousElementSibling;

    active.classList.remove("current");
    sib1.classList.remove("left");
    sib2.classList.remove("right");
    if (previous == null){
        end.classList.add("current");
        first.classList.add("right");
        end.previousElementSibling.classList.add("left");
    }
    else{
        let next_prev = previous.previousElementSibling;
        previous.classList.add("current");
        active.classList.add("right");
        if (next_prev == null){
            end.classList.add("left");
        }
        else{
            next_prev.classList.add("left");
        }
    }
    
})