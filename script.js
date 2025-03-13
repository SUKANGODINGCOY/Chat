const socket = io();

function sendMessage() {
    let username = document.getElementById("username").value.trim();
    let message = document.getElementById("message").value.trim();
    
    if (username === "" || message === "") return;

    socket.emit("chatMessage", { username, message });
    document.getElementById("message").value = "";
}

socket.on("chatMessage", (data) => {
    let chatBox = document.getElementById("chat-box");
    let messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.innerText = `${data.username}: ${data.message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
});