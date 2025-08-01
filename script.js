const navItems = document.querySelectorAll('.items');

navItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.textContent = '🌟 ' + item.textContent;
    });

    item.addEventListener('mouseout', () => {
        item.textContent = item.textContent.replace('🌟 ', '');
    });

    item.addEventListener('click', () => {
        alert(`You clicked on ${item.textContent}`);
    });
});


const bgColorPicker = document.getElementById('bgColorPicker');
const fontColorPicker = document.getElementById('fontColorPicker');
const applyButton = document.getElementById('applyColors');

applyButton.addEventListener('click', () => {
    const bgColor = bgColorPicker.value;
    const fontColor = fontColorPicker.value;

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
});


const greeting = document.createElement('h2');
greeting.textContent = "👋 Welcome to Gautham's Website!";
greeting.style.textAlign = 'center';
greeting.style.marginTop = '20px';
document.body.appendChild(greeting);