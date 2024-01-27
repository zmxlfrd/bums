function askForValentine() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    if (name !== '') {
        const response = confirm(`Hi ${name}! Will you be my Valentine?`);

        if (response) {
            // Do something special when she presses "Yes"
            alert('Yay! You said yes! 💖 Now do the things!!!');

            // You can redirect to another page or perform additional actions here
            // Example: window.location.href = 'https://example.com/special-valentine-page';
        } else {
            alert('Oh no! 😢 Maybe next time.');
        }
    } else {
        alert('Please enter your name before proceeding.');
    }
}

function runAway() {
    const button = document.querySelector('button');
    const randomX = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));

    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
