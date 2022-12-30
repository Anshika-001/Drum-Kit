var numberOfDrumbuttons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML= this.innerHTML;
        switch(buttonInnerHTML){
            case "w":
        var audio1= new Audio("sounds/Rafael_Archangel_-_07_-_Machine_-_174bpm.mp3");
        audio1.play();
        break;
        case "a":
            var audio2= new Audio("sounds/Komiku_-_01_-_Intro.mp3");
            audio2.play();
            break;
        case "s":
            var audio3= new Audio("sounds/epic_battle_music_1-6275.mp3");
            audio3.play();
            break;
        case "d":
            var audio4= new Audio("sounds/Rafael_Archangel_-_08_-_Two_Heads_-_174bpm.mp3");
            audio4.play();
            break;
        case "j":
            var audio5= new Audio("sounds/timpani-roll-kevinsticks-6453.mp3");
            audio5.play();
            break;
        case "k":
            var audio6= new Audio("sounds/typical-trap-loop-140bpm-129880.mp3");
            audio6.play();
            break;
        case "l":
            var audio7= new Audio("sounds/Rafael_Archangel_-_07_-_Machine_-_174bpm.mp3");
            audio7.play();
            break;
        default: console.log(buttonInnerHtml);
        }

    });
}