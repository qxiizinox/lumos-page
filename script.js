function addMessage() {
    let message = document.getElementById("message").value;
    if (message.trim() === "") return;
    
    let messageDiv = document.createElement("div");
    messageDiv.textContent = "💌 " + message;
    document.getElementById("messages").appendChild(messageDiv);

    document.getElementById("message").value = "";
}