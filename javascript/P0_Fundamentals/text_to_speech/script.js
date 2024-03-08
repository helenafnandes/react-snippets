const btnPlay = document.querySelector(".btn-play");
const btnPause = document.querySelector(".btn-pause");
const btnStop = document.querySelector(".btn-stop");
const inputText = document.querySelector("#text");
const inputSpeed = document.querySelector("#input-speed");

btnPlay.addEventListener('click', () => {
    playText(inputText.value);
})

function playText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = inputSpeed.value || 1;
    speechSynthesis.speak(utterance);
}