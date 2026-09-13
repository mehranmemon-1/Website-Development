/* Hamburger menu */
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

/* Zoom feature */
let fontSize = 100;
function zoomIn() {
    fontSize += 10;
    document.body.style.fontSize = fontSize + "%";
}
function zoomOut() {
    fontSize -= 10;
    document.body.style.fontSize = fontSize + "%";
}

/* High contrast */
function highContrast() {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
}


/* Modal image */
function openModal(src) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalImg").src = src;
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* Search */
function searchPage(inputId, contentId) {
    let input = document.getElementById(inputId).value.toLowerCase();
    let content = document.getElementById(contentId);
    content.style.display =
        content.innerText.toLowerCase().includes(input) ? "block" : "none";
}
