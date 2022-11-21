const msg = new SpeechSynthesisUtterance();
//  utterance function going to contain information about how fast say it & what is the pitch & how fast they say it
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;
