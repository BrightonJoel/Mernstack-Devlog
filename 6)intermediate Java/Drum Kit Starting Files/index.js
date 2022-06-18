for (var i = 0; i < 7; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    //alert("Jesus Rocks!!")
    var buttonPressed = this.innerHTML;
    makeSound(buttonPressed)
    buttonAnimation(buttonPressed)
  });
}

document.addEventListener('keydown',function (event){
  makeSound(event.key)
  buttonAnimation(event.key)
})



function buttonAnimation(currentKey){
  var activebutton = document.querySelector("."+currentKey);
  activebutton.classList.add("pressed")
  setTimeout(function(){
    activebutton.classList.remove("pressed")
  },100)
}
