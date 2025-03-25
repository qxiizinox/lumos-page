function checkSpell() {
    let input = document.getElementById("spell-input").value.trim();
    let chatBox = document.getElementById("chat-container");

    if (input === "LumosNox") {
        if (chatBox.style.display === "none" || chatBox.style.display === "") {
            chatBox.style.display = "block";
            chatBox.style.animation = "fadeIn 0.5s ease-in-out";
        } else {
            chatBox.style.animation = "fadeOut 0.5s ease-in-out";
            setTimeout(() => chatBox.style.display = "none", 500);
        }
    }
}
