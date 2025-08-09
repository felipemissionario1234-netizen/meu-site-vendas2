// Script para lidar com as ações de compra e WhatsApp

// Substitua pelos seus links reais antes de subir para produção
const checkoutURL = "https://www.seu-checkout.com/link-exemplo";
const whatsappNumber = "5591999999999"; // inclua DDI e DDD

document.addEventListener('DOMContentLoaded', () => {
  const comprarBtn = document.getElementById('comprar');
  const zapBtn = document.getElementById('zap');
  if (comprarBtn) {
    comprarBtn.addEventListener('click', () => {
      window.open(checkoutURL, '_blank');
    });
  }
  if (zapBtn) {
    zapBtn.addEventListener('click', () => {
      const msg = encodeURIComponent('Olá, tenho interesse no produto!');
      window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
    });
  }
});