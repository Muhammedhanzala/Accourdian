function toggleContent(cardNumber) {
    const card = document.querySelectorAll('.card')[cardNumber - 1];
    card.classList.toggle('open');
}
