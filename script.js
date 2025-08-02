// Βρίσκουμε το κουμπί και το μενού
const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('main-menu');

// Όταν κάνεις click, εναλλάσσει την κλάση "active"
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
