document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // impede o envio padrão

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const numero = document.getElementById("numero").value.trim();

    // Número do WhatsApp para onde será enviado (coloque o seu número aqui)
    const numeroDestino = "5581933005665"; // Exemplo: 55 + DDD + número
    // Monta a mensagem
    const mensagem = `Olá! 😄\n\nNome: ${nome}\nE-mail: ${email}\nWhatsApp: ${numero}\n\nTenho interesse na consultoria gratuita!`;

    // Cria o link para o WhatsApp
    const link = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp em uma nova aba
    window.open(link, "_blank");
});

// ANIMAÇÕES GLOBAIS
// Coletando o observador da página
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('show')
        }
    })
})

// Selecionando os elementos com a classe ".hidden"
const elements = document.querySelectorAll('.hidden')

// Selecionando 1 arquivos por vez da classe ".hidden"
elements.forEach((element) => myObserver.observe(element))

// Selecionando os elementos com a classe ".hidden"
const elements2 = document.querySelectorAll('.hidden2')

// Selecionando 1 arquivos por vez da classe ".hidden"
elements2.forEach((element) => myObserver.observe(element))
