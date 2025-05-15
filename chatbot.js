function toggleChatbot() {
  const window = document.getElementById("chatbotWindow");
  window.style.display = window.style.display === "flex" ? "none" : "flex";
}

function handleInput(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("userInput");
    const chatlog = document.getElementById("chatlog");

    const userMessage = input.value.trim();
    if (!userMessage) return;

    chatlog.innerHTML += `<div class="user-msg">${userMessage}</div>`;
    input.value = "";
    let botResponse = "I'm not sure how to respond.";
    if (userMessage.toLowerCase().includes("donate")) {
      botResponse = "You can visit our Donate page to contribute!";
    } else if (userMessage.toLowerCase().includes("notes")) {
      botResponse = "Check the Notes section for student notes.";
    } else if (userMessage.toLowerCase().includes("login")) {
      botResponse = "Click the Login button at the top right!";
    } else if (userMessage.toLowerCase().includes("pet")) {
        botResponse = "You can visit our Pet Found/Lost page ! ";
    }else if (userMessage.toLowerCase().includes("hey hello")) {
        botResponse = "Hey, hello! WELCOME, what are you looking for? ";
    }
    else if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
      botResponse = "Hey there! I'm the C & C Bot. How can I help?";
    }

    chatlog.innerHTML += `<div class="bot-msg">${botResponse}</div>`;
    chatlog.scrollTop = chatlog.scrollHeight;
  }
}
