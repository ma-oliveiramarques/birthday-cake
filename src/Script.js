var flame = document.getElementById('flame');

flame.addEventListener('click', () => blow());

function blow() {
    flame.classList.remove('burn');
    flame.classList.add('puff');
    
    startConfetti();
}

const startConfetti = () => {
    setTimeout(function () {
      confetti.start()
    }, 1000);
};
