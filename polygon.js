function getRandomScoreMessage() {
    let score = Math.floor(Math.random() * 101);
    return `Вы набрали ${score} очков`;
}


window.onload = function() {
    let sendButton = document.getElementById('send-button');
    sendButton.addEventListener('click', sendMessage);

    function prepareBotAnswer() {
        let botResponseDiv = document.createElement('div');
        botResponseDiv.classList.add('bot-msg');
        return botResponseDiv
    }

    function sendMessage() {
        let messageInput = document.getElementById('message-input');
        let audioInput = document.getElementById('audio-input');

        let message = messageInput.value.trim();
        let audioFile = audioInput.files[0];

        if (message === '' && !audioFile) {
            return;
        }

        let chatMessages = document.getElementById('chat-messages');

        if (message !== '') {
            let messageDiv = document.createElement('div');
            messageDiv.classList.add('user-msg');
            messageDiv.textContent = 'Вы: ' + message;
            chatMessages.appendChild(messageDiv);
            messageInput.value = '';

            if (message.toLowerCase().includes('привет')) {
                let botResponseDiv = prepareBotAnswer()
                botResponseDiv.textContent = 'Бот Антон: Привет! Как я могу вам помочь?';
                chatMessages.appendChild(botResponseDiv);
            }

            if (message.toLowerCase().includes('пока')) {
                let botResponseDiv = prepareBotAnswer()
                botResponseDiv.textContent = Math.floor(Math.random() * 10) % 2 === 0 ?  'Бот Антон: Останься.'  : 'Бот Антон: Уходи.';
                chatMessages.appendChild(botResponseDiv);
            }

            if (message.toLowerCase().includes('силомер')) {
                let botResponseDiv = prepareBotAnswer()
                botResponseDiv.textContent = 'Бот Антон: ' + getRandomScoreMessage();
                chatMessages.appendChild(botResponseDiv);
            }
        }

        if (audioFile) {
            let audioURL = URL.createObjectURL(audioFile);
            let audioDiv = document.createElement('div');
            let audioElement = document.createElement('audio');
            audioElement.controls = true;
            audioElement.src = audioURL;
            audioDiv.appendChild(audioElement);
            chatMessages.appendChild(audioDiv);
            audioInput.value = '';
        }

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    generateMap(58, 60)
};

function generateMap(x, y) {
    let map = L.map('map').setView([x, y], 12);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(map);
    let divsToRemove = document.querySelectorAll('.leaflet-control-attribution');
    divsToRemove.forEach(function(div) {
    div.parentNode.removeChild(div);
});
}




