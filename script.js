// Alternância de Tema com Sincronização de Texto
const themeBtn = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        themeText.textContent = "MODO_SISTEMA";
    } else {
        themeText.textContent = "MODO_COFFEE";
    }
});

// Validação do Formulário (Requisito UNINTER)
const form = document.getElementById('form-contato');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.textContent = "ESTABELECENDO CANAL...";
    
    // Simulação de processamento
    setTimeout(() => {
        form.reset();
        btn.textContent = "Enviar Transmissão";
        feedback.style.display = 'block';
        setTimeout(() => feedback.style.display = 'none', 5000);
    }, 1500);
});