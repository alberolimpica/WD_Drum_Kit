var drumButtons = document.querySelectorAll(".drum");
for(var i= 0; i<drumButtons.length; i++){
    console.log(i);

    drumButtons[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", function(event){
    buttonLeterSound(event.key)
});

function handleClick(){
    var buttonLetter = this.innerHTML;
    animation(buttonLetter);
    buttonLeterSound(buttonLetter)
}

function buttonLeterSound(letter){

    animation(letter);
    switch(letter){
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            break;
    }

}

function animation(classLetter){

    var activeButton = document.querySelector("."+classLetter);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);
}

