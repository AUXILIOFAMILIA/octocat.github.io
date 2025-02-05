const messages = [
    "🤔 Ei, já imaginou transformar seu roteador Wi-Fi em uma máquina de fazer dinheiro? Parece loucura, mas é totalmente possível!",
    "💡 Deixe-me te revelar um segredo que poucas pessoas conhecem. Existe um método revolucionário que transforma seu roteador Wi-Fi em uma fonte de renda. Você basicamente ganha dinheiro enquanto as pessoas usam a sua internet. Incrível, não é?",
    "📶 É mais simples do que parece! Com a tecnologia de 'Hotspot Wi-Fi', você cria um ponto de acesso na sua casa, e as pessoas que quiserem usar sua internet pagam uma pequena taxa. Existem plataformas especializadas que fazem toda a gestão para você, como a XYZ Hotspot.",
    "🔒 Absolutamente seguro! Essas plataformas são equipadas com medidas de segurança robustas que protegem sua rede. Você mantém controle total sobre quem pode acessar e por quanto tempo. E o melhor de tudo: recebe relatórios detalhados do uso da sua rede.",
    "💰 Depende de quantas pessoas usam sua rede e dos planos de pagamento que você definir. Mas muitas pessoas estão conseguindo uma renda extra significativa. Imagine acordar e saber que sua internet está trabalhando para você mesmo enquanto descansa!",
    "🛡️ Nós acreditamos na eficácia do nosso guia! Ao seguir o passo a passo, você poderá começar a ganhar com seu roteador ainda hoje. Estamos aqui para te apoiar na sua nova jornada!",
    "📘 Eu tenho o guia perfeito que vai te passar o passo a passo para você configurar seu roteador e começar a gerar renda ainda hoje. É uma oportunidade única e está tudo bem detalhado. Não perca tempo!"
];

const finalMessage = "🎉 PARABÉNS POR SUA INICIATIVA, COMECE AGORA SUA JORNADA RUMO À INDEPENDÊNCIA FINANCEIRA";
const linkMessage = '🔗 Clique <a href="https://pay.kiwify.com.br/Xf88c7v" target="_blank">aqui</a> para acessar o guia';

const options = [
    "🤨 O quê? Como assim?",
    "😮 Sério? Nunca ouvi falar disso. Como funciona?",
    "🤔 Isso soa interessante. Mas é realmente seguro?",
    "💸 Parece ótimo. Quanto dinheiro eu poderia ganhar com isso?",
    "😱 Uau, estou muito curioso. E se eu não conseguir ganhar dinheiro ainda hoje?",
    "🎊 Isso é incrível! Como posso começar?",
    "💪 EU QUERO FAZER UMA RENDA EXTRA AINDA HOJE! 🎉"
];

let currentMessageIndex = 0;
let currentOptionIndex = 0;

function showTypingIndicator() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `
        <div class="message typing-indicator">
            <div></div>
            <div></div>
            <div></div>
        </div>`;
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll para baixo
}

function hideTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function sendBotMessage(message) {
    const chatBox = document.getElementById('chat-box');
    hideTypingIndicator();
    chatBox.innerHTML += `
        <div class="message bot-message">
            <span>${message}</span>
        </div>
    `;
}

function handleFinalOption() {
    sendBotMessage(finalMessage);
    sendBotMessage(linkMessage);
}

function sendNextMessage() {
    if (currentMessageIndex < messages.length) {
        sendBotMessage(messages[currentMessageIndex]);
        currentMessageIndex++;

        // Se a última mensagem foi enviada, mostrar a opção final
        if (currentMessageIndex === messages.length) {
            showFinalOption();
        } else {
            showOptions();
        }
    }
}

function showFinalOption() {
    const optionsElement = document.getElementById('options');
    optionsElement.innerHTML = '';

    const button = document.createElement('button');
    button.className = 'button';
    button.innerText = options[options.length - 1]; // "EU QUERO FAZER UMA RENDA EXTRA AINDA HOJE"
    button.onclick = function() {
        const chatBox = document.getElementById('chat-box');
        chatBox.innerHTML += `<div class="message user-message"><span>${options[options.length - 1]}</span></div>`;
        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            handleFinalOption();
        }, 5000); // Tempo de espera de 5 segundos para simular a digitação do robô
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll para baixo
    };
    optionsElement.appendChild(button);
}

function showOptions() {
    const optionsElement = document.getElementById('options');
    optionsElement.innerHTML = '';

    if (currentOptionIndex < options.length - 1) { // Não incluir a última opção
        const button = document.createElement('button');
        button.className = 'button';
        button.innerText = options[currentOptionIndex];
        button.onclick = function() {
            const chatBox = document.getElementById('chat-box');
            chatBox.innerHTML += `<div class="message user-message"><span>${options[currentOptionIndex]}</span></div>`;
            currentOptionIndex++;
            showTypingIndicator();
            setTimeout(() => {
                hideTypingIndicator();
                sendNextMessage();
            }, 5000); // Tempo de espera de 5 segundos para simular a digitação do robô
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll para baixo
        };
        optionsElement.appendChild(button);
    }
}

function startChat() {
    showTypingIndicator();
    setTimeout(() => {
        hideTypingIndicator();
        sendNextMessage();
    }, 5000); // Tempo inicial para simular a primeira mensagem
}

// Iniciar o chat
startChat();
