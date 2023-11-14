function createQRCode() {
  let qrcodeContainer = document.getElementById('qrcode');
  let size = Math.min(window.innerWidth, 300);

  new QRCode(qrcodeContainer, {
    text: window.location.href,
    width: size,
    height: size
  });
}
