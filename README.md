# 📱 WhatsApp QR Code Generator

Aplicação web que gera um **QR Code para iniciar uma conversa no WhatsApp com uma mensagem automática**.

O usuário digita um **número de telefone** e uma **mensagem**, e o sistema gera um **QR Code** que, ao ser escaneado, abre o WhatsApp com a conversa pronta.

Também é possível **baixar o QR Code gerado**.

---

## 🚀 Tecnologias utilizadas

**Backend**

* Java
* Spring Boot
* Maven

**Frontend**

* HTML
* CSS
* JavaScript

---

## 📂 Estrutura do projeto

```id="struct01"
Gerador_QRCode
│
├── backend
│   ├── src/main/java/com/qrcode
│   │   ├── QrcodeApplication.java
│   │   ├── controller/QrController.java
│   │   └── service/QrService.java
│   └── pom.xml
│
└── frontend
    ├── index.html
    ├── style.css
    └── script.js
```

---

## ▶️ Como rodar o projeto

### 1️⃣ Rodar o Backend (Spring Boot)

Abra o terminal dentro da pasta **backend**:

```id="run01"
cd Gerador_QRCode/backend
```

Execute o Spring Boot:

```id="run02"
mvn spring-boot:run
```

Se tudo estiver correto, o servidor iniciará em:

```id="run03"
http://localhost:8080
```

---

### 2️⃣ Abrir o Frontend

Vá até a pasta **frontend** e abra o arquivo:

```id="run04"
index.html
```

no navegador.

---

## ⚙️ Como funciona

1️⃣ O usuário digita:

* número de telefone
* mensagem

2️⃣ A aplicação gera um link do WhatsApp no formato:

```id="link01"
https://wa.me/NUMERO?text=MENSAGEM
```

3️⃣ Esse link é convertido em **QR Code**.

4️⃣ Ao escanear o QR Code, o WhatsApp abre com a conversa pronta.

---

## 📥 Download do QR Code

Depois de gerar o QR Code, basta clicar em **Baixar QRCode** para salvar a imagem no computador.

---

## 💡 Possíveis melhorias

* Personalizar cor do QR Code
* Escolher tamanho do QR Code
* Adicionar logo no QR
* Validação do número
* Melhorar o layout da interface

---

## 👩‍💻 Projeto para estudo

Projeto desenvolvido para praticar **Java, Spring Boot e integração com frontend**.

