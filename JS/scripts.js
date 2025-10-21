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