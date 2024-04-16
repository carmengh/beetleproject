let bug = document.querySelector('#hercules');
let p = document.querySelector('#hp');

bug.addEventListener("click", function(){
    console.log("image z: " + bug.style.zIndex);
    bug.style.zIndex = "10";
    hp.style.zIndex = "0";
    console.log("image z: "+ bug.style.zIndex);
    hp.style.width = "300px";
    bug.style.width = "400px";
    hp.style.right = "20px";
    bug.classList.remove("new");
    bug.classList.add("fix");
});
hp.addEventListener("click", function(){
    console.log("p z: "+ p.style.zIndex);
    hp.style.zIndex = "10";
    bug.style.zIndex = "0";
    console.log("p z: "+ hp.style.zIndex);
    hp.style.width = "400px";
    bug.style.width = "300px";
    hp.style.right = "150px";
    bug.classList.remove("fix");
    bug.classList.add("new");
});

let bug2 = document.querySelector('#bombardier');
let p2 = document.querySelector('#bp');

bug2.addEventListener("click", function(){
    bug2.style.zIndex = "10";
    p2.style.zIndex = "0";
    p2.style.width = "300px";
    bug2.style.width = "400px";
    p2.style.left = "20px";
    bug2.classList.remove("new");
    bug2.classList.add("fix");
    console.log(bug2.classList);
});
p2.addEventListener("click", function(){
    p2.style.zIndex = "10";
    bug2.style.zIndex = "0";
    p2.style.width = "400px";
    bug2.style.width = "300px";
    p2.style.left = "150px";
    bug2.classList.remove("fix");
    bug2.classList.add("new");
    console.log(bug2.classList);
});

let bug3 = document.querySelector('#stag');
let p3 = document.querySelector('#sp');

bug3.addEventListener("click", function(){
    bug3.style.zIndex = "10";
    p3.style.zIndex = "0";
    p3.style.width = "300px";
    bug3.style.width = "400px";
    p3.style.right = "20px";
    bug3.classList.remove("new");
    bug3.classList.add("fix");
});
p3.addEventListener("click", function(){
    p3.style.zIndex = "10";
    bug3.style.zIndex = "0";
    p3.style.width = "400px";
    bug3.style.width = "300px";
    p3.style.right = "150px";
    bug3.classList.remove("fix");
    bug3.classList.add("new");
});