const receiverName = document.querySelector("#receiver");
const senderName = document.querySelector("#sender");
receiverName.innerText = new URLSearchParams(location.search).get("receiver");
senderName.innerText = new URLSearchParams(location.search).get("sender") || 'RiTiK';