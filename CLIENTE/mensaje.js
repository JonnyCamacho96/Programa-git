document.addEventListener("DOMContentLoaded", () => {
  const contacts = document.querySelectorAll(".contact");
  const contactList = document.getElementById("contactList");
  const chatWindow = document.getElementById("chatWindow");
  const chatMessages = document.getElementById("chatMessages");
  const chatTitle = document.getElementById("chatTitle");
  const chatImage = document.getElementById("chatImage");
  const backBtn = document.getElementById("backBtn");
  const input = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendButton");

  // Simulación de mensajes por contacto
  const chatData = {
    "Zoila NH": [
      { type: "received", text: "¡Hola! ¿Cómo estás?" },
      { type: "sent", text: "¡Hola! Muy bien, ¿y tú?" },
    ],
    "Mari Cruz NH": [
      { type: "received", text: "¿Ya almorzaste?" },
      { type: "sent", text: "Sí, hace rato 😋" },
    ],
  };

  // Imagen por contacto
  const contactImages = {
    "Zoila NH": "https://i.pravatar.cc/40?img=1",
    "Mari Cruz NH": "https://i.pravatar.cc/40?img=2",
  };

  let currentChat = null;

  contacts.forEach((contact) => {
    contact.addEventListener("click", () => {
      const name = contact.dataset.name;
      currentChat = name;

      // Mostrar título e imagen
      chatTitle.innerText = `Chat con ${name}`;
      chatImage.src = contactImages[name];

      // Mostrar mensajes
      chatMessages.innerHTML = "";
      chatData[name].forEach((msg) => {
        const div = document.createElement("div");
        div.className = `message ${msg.type}`;
        div.textContent = msg.text;
        chatMessages.appendChild(div);
      });

      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Mostrar chat y ocultar lista solo en pantallas pequeñas
      if (window.innerWidth < 768) {
        contactList.classList.add("d-none");
      }
      chatWindow.classList.remove("d-none");
    });
  });

  backBtn.addEventListener("click", () => {
    chatWindow.classList.add("d-none");
    contactList.classList.remove("d-none");
  });

  function sendMessage() {
    const message = input.value.trim();
    if (message !== "" && currentChat) {
      const div = document.createElement("div");
      div.classList.add("message", "sent");
      div.textContent = message;
      chatMessages.appendChild(div);

      // Guardar en el historial de chatData
      if (!chatData[currentChat]) {
        chatData[currentChat] = [];
      }
      chatData[currentChat].push({ type: "sent", text: message });

      input.value = "";
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  sendBtn.addEventListener("click", sendMessage);

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });
});
