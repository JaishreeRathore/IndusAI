
let currentAudio = null;

document.addEventListener('keydown', function(event) {
    handleKey(event.key);
});

document.querySelectorAll('.key').forEach(keyElement => {
    keyElement.addEventListener('click', function() {
        handleKey(this.id.replace('key-', ''));
    });
});

function handleKey(key) {
    let audio;
    let keyElement;

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    switch(key) {
        case 'a':
            audio = new Audio('sound/dizi-flute-02-72563.mp3');
            keyElement = document.getElementById('key-a');
            break;
        case 'b':
            audio = new Audio('sound/acoustic-guitar-riff-225893.mp3');
            keyElement = document.getElementById('key-b');
            break;
        case 'c':
            audio = new Audio('sound/dubstep-drums-103828.mp3');
            keyElement = document.getElementById('key-c');
            break;
        case 'd':
            audio = new Audio('sound/typewriter-drums-100-bpm-60536.mp3');
            keyElement = document.getElementById('key-d');
             break;
             case 'e':
                audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3');
                keyElement = document.getElementById('key-e');
                break;
            case 'f':
                audio = new Audio('sound/kurze-melodie-mit-einer-gitarre-eingespielt-9183.mp3');
                keyElement = document.getElementById('key-f');
                break;
            case 'g':
                audio = new Audio('sound/pianos-by-jtwayne-7-174717.mp3');
                keyElement = document.getElementById('key-g');
                break;
            case 'h':
                audio = new Audio('sound/intermissiontoon-25636.mp3');
                keyElement = document.getElementById('key-h');
                 break;     
                 case 'i':
                    audio = new Audio('sound/kick.mp3');
                    keyElement = document.getElementById('key-i');
                     break;             
        
        
    }

    if (audio && keyElement) {
        currentAudio = audio;
        audio.play().catch(function(error) {
            console.error('Error playing sound:', error);
        });

        keyElement.classList.add('active');
        setTimeout(function() {
            keyElement.classList.remove('active');
        }, 100);
    }
}