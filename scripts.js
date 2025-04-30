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

