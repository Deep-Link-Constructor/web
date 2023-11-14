function createQRCode() {
  let qrcodeContainer = document.getElementById('qrcode');
  new QRCode(qrcodeContainer, {
    text: window.location.href,
    width: window.innerWidth > 400 ? 400 : window.innerWidth,
    height: window.innerWidth > 400 ? 400 : window.innerWidth,
  });
}
