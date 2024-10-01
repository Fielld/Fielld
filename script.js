document.addEventListener('DOMContentLoaded', function() {
    const sound = new Audio('start-sound.mp3');

    document.querySelectorAll('.light-up').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                this.style.backgroundColor = this.getAttribute('data-color');
            } else {
                this.style.backgroundColor = '#21221F';
            }

            sound.currentTime = 0;
            sound.play();
        });
    });
});

