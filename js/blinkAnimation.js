const loadingMessage = document.querySelector("#loading-message");
setInterval(() => {
    loadingMessage.classList.toggle("blink");
}, 400)