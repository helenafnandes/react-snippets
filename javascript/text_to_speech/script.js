const btnPlay = document.querySelector(".btn-play");
const btnPause = document.querySelector(".btn-pause");
const btnStop = document.querySelector(".btn-stop");
const inputText = document.querySelector("#text");
const inputSpeed = document.querySelector("#input-speed");
const inputLanguage = document.querySelector("#input-language");


btnPlay.addEventListener('click', () => {
    playText(inputText.value, inputLanguage.value);
});

function playText(text, language) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.rate = inputSpeed.value || 1;
    utterance.lang = inputLanguage.value;

    speechSynthesis.speak(utterance);
}
