// Gerar QR Code
document.addEventListener('DOMContentLoaded', function() {
    const qr = qrcode(0, 'L');
    qr.addData('https://wa.me/5511966007636');
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createImgTag(4);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//* Script para funcionalidade de compra *//

  // Garante que o código execute após o carregamento do DOM
  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de compra
    const botoesCompra = document.querySelectorAll('.comprar-btn');
    
    // Adiciona evento de clique a cada botão
    botoesCompra.forEach(botao => {
      botao.addEventListener('click', function() {
        // Encontra o container do produto pai
        const produto = this.closest('article');
        
        // Extrai informações do produto
        const nomeProduto = produto.querySelector('h3').textContent;
        const precoProduto = produto.querySelector('.neon-blue').textContent;
        
        // Cria a mensagem pré-formatada
        const mensagem = `Olá gostaria de comprar o modelo ${nomeProduto} com o valor de ${precoProduto}.`;
        
        // Gera o link do WhatsApp com a mensagem codificada
        const whatsappURL = `https://wa.me/5511966007636?text=${encodeURIComponent(mensagem)}`;
        
        // Abre o WhatsApp em uma nova aba
        window.open(whatsappURL, '_blank');
      });
    });
  });

  

