document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');
    const hiddenMessage = document.querySelector('.hidden-message');
    const container = document.querySelector('.container');
    let clickCount = 0;

    noBtn.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();
        
        const newX = Math.random() * (containerRect.width - btnRect.width);
        const newY = Math.random() * (containerRect.height - btnRect.height);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });

    yesBtn.addEventListener('click', () => {
        document.querySelector('.buttons').style.display = 'none';
        document.querySelector('.question').style.display = 'none';
        document.querySelector('.glowing-text').style.display = 'none';
        hiddenMessage.style.display = 'block';
    });

    noBtn.addEventListener('click', () => {
        clickCount++;
        yesBtn.style.transform = `scale(${1 + clickCount * 0.2})`;
        yesBtn.style.transition = 'transform 0.3s ease';
    });
});