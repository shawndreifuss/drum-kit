
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)
    return; //stop function from running 
    audio.currentTime=0;  //rewind to start
    audio.play();
    key.classList.add('playing');

};
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;//skip it if its not a transform
 this.classList.remove('playing')
}
window.addEventListener('keydown', playSound);

   