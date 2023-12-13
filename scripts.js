const socket = io();

socket.on('chat message', (msg) => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.innerHTML += `<p>${msg}</p>`;
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    socket.emit('chat message', message);
    messageInput.value = '';
}
