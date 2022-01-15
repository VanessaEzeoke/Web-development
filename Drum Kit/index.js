
for (var i=0; i<document.querySelectorAll(".drum").length; i++)
  {
  document.querySelectorAll(".drum")[i].addEventListener("click",
    function (){
    makeSound(this.innerHTML);
    buttonAnime(this.innerHTML);
    }

  )
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnime(event.key);
})

//keydown and keypress both work in the above


function makeSound(key){
  switch (key) {
    case "w":
        new Audio("sounds/crash.mp3").play()
    break;
    case "a":
        new Audio("sounds/tom-1.mp3").play()
    break;
    case "s":
        new Audio("sounds/tom-2.mp3").play()
    break;
    case "d":
        new Audio("sounds/tom-3.mp3").play()
    break;
    case "j":
        new Audio("sounds/tom-4.mp3").play()
    break;
    case "k":
        new Audio("sounds/kick-bass.mp3").play()
    break;
    case "l":
        new Audio("sounds/snare.mp3").play()
    break;

    default: console.log(key)
}
}

function buttonAnime(currentKey){
  var activeKey= document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");

  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100);


}
