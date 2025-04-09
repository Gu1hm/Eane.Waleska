function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const message = document.querySelector('.message');

    // Adiciona a classe 'open' ao envelope
    envelope.classList.add('open');

    // Atraso para mostrar a mensagem depois de abrir o envelope
    setTimeout(() => {
        message.style.display = 'block';
    }, 1000); // Atraso de 1 segundo após o início da animação
}
