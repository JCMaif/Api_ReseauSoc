window.addEventListener('DOMContentLoaded', () => {
    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('user ', user);
    })
})