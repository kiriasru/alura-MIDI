function playSound(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrument = tecla.classList[1];

    const idAudio = `#sonido_${instrument}`;
    console.log(idAudio);

    tecla.onclick = function () {
        playSound(idAudio);
    };

    tecla.onkeydown = function (e) {
        console.log(e.code);
        if (e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('activa');
        } 
            tecla.classList.remove('activa');
    };
    
}


