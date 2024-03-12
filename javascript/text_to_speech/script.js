const btnPlay = document.querySelector(".btn-play");
//const btnPause = document.querySelector(".btn-pause");
const btnStop = document.querySelector(".btn-stop");
const inputText = document.querySelector("#text");
const inputSpeed = document.querySelector("#input-speed");
const inputLanguage = document.querySelector("#input-language");

speechSynthesis.cancel();

btnPlay.addEventListener('click', () => {
    playText(inputText.value);
});

// btnPause.addEventListener('click', () => {
//     if (speechSynthesis.speaking) {
//         speechSynthesis.pause();
//         console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
//     }
// });


btnStop.addEventListener('click', () => {
    inputText.disabled = false;
    speechSynthesis.resume();
    speechSynthesis.cancel();
})

function playText(text) {


    // create new instance
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.rate = inputSpeed.value || 1;
    utterance.lang = inputLanguage.value;

    // prevent user from editing the text in the text area while the audio is being played
    preventTextChange(utterance);
    console.log("hgfgf")

    speechSynthesis.speak(utterance);
    if(speechSynthesis.speaking){
        console.log("ythgdfghijkgf")
    }
}

function preventTextChange(utterance) {
    inputText.disabled = true;
    utterance.addEventListener('end', () => {
        inputText.disabled = false;
    });
}