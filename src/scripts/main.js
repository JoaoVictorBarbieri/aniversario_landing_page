const dataDoAniversario = new Date("Jan 20, 2025 00:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    
    const distanciaAteoAniversario = timeStampDoAniversario - timeStampAtual;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;

    const diasAteoAniversario = Math.floor(distanciaAteoAniversario / diasEmMS);
    const horasAteoAniversario = Math.floor((distanciaAteoAniversario % diasEmMS) / horasEmMS);
    const minutosAteoAniversario = Math.floor((distanciaAteoAniversario % horasEmMS) / minutosEmMS);
    const segundosAteoAniversario = Math.floor((distanciaAteoAniversario % minutosEmMS) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteoAniversario}d ${horasAteoAniversario}h ${minutosAteoAniversario}min ${segundosAteoAniversario}s`;

    if (distanciaAteoAniversario < 0) {
        clearInterval (contaAsHoras);
        document.getElementById('contador').innerHTML = 'O Aniversário já aconteceu'
    }
}, 1000);