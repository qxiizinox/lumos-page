// Socket.io 实时聊天部分
var socket = io();  // 创建与服务器的 WebSocket 连接

function sendMessage() {
    let msg = document.getElementById("message-input").value;
    socket.emit('chat message', msg);  // 向服务器发送消息
    document.getElementById("message-input").value = '';  // 清空输入框
}

socket.on('chat message', function(msg) {
    let chatBox = document.getElementById("chat-box");
    let newMessage = document.createElement("p");
    newMessage.textContent = msg;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;  // 滚动到底部
});

// 检查咒语是否输入正确
function checkSpell() {
    let input = document.getElementById("spell-input").value.trim();
    let chatBox = document.getElementById("chat-container");

    if (input === "LumosNox") {
        // 显示或隐藏聊天框
        if (chatBox.style.display === "none" || chatBox.style.display === "") {
            chatBox.style.display = "block";
        } else {
            chatBox.style.display = "none";
        }
    }
}

// 每日一句自动更新
function updateQuote() {
    const quotes = [
        "今天做的每一件事都值得骄傲！",
        "别让昨日的失败影响今天的努力。",
        "无论现在多么困难，未来一定会更加美好。",
        "最好的时光就是现在，别等明天！"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("daily-quote").textContent = `✨ 每日一句：${randomQuote} ✨`;
}

// 每天更新一次每日一句
setInterval(updateQuote, 86400000);  // 每隔24小时更新一次
updateQuote();  // 页面加载时就更新一次

// 黑猫动画 - 让猫猫更有趣
const cat = document.querySelector('.cat');
cat.addEventListener('mouseover', function() {
    cat.style.transform = "scale(1.2)";
    setTimeout(() => cat.style.transform = "scale(1)", 300);
});

// 鼠标移动时猫猫会跟随
document.addEventListener('mousemove', (event) => {
    cat.style.left = event.pageX - 50 + 'px';  // 控制猫猫位置
    cat.style.top = event.pageY - 50 + 'px';
});