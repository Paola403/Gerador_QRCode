let linkGerado = '';

function gerarQRCode() {
  const numero = document.getElementById('numero').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!numero) {
    document.getElementById('numero').focus();
    return;
  }

  // ativa loading
  document.getElementById('spinner').style.display = 'block';
  document.getElementById('btn-text').textContent = 'Gerando...';

  fetch(`http://localhost:8080/qrcode?numero=${encodeURIComponent(numero)}&mensagem=${encodeURIComponent(mensagem)}`)
    .then(res => res.text())
    .then(link => {
      linkGerado = link;

      const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(link)}`;
      const img = document.getElementById('qr');

      img.onload = () => {
        document.getElementById('result').classList.add('visible');
        document.getElementById('spinner').style.display = 'none';
        document.getElementById('btn-text').textContent = 'Gerar QRCode';
      };

      img.src = qrURL;
    })
    .catch(() => {
      document.getElementById('spinner').style.display = 'none';
      document.getElementById('btn-text').textContent = 'Gerar QRCode';
      alert('Erro ao conectar com o servidor. Verifique se o backend está rodando.');
    });
}

function baixarQRCode() {
  const img = document.getElementById('qr');
  if (!img.src) return;

  // baixa direto sem abrir nova aba
  fetch(img.src)
    .then(res => res.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'qrcode_whatsapp.png';
      a.click();
      URL.revokeObjectURL(url);
    });
}