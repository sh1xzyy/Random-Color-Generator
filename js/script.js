const colorBox = document.getElementById('color-box');
const colorText = document.getElementById('color-text');

document.getElementById('generate-btn').addEventListener('click', () => {
    const userPreferences = document.querySelector('input[name="color-format"]:checked');

    if (userPreferences) {
        switch(userPreferences.value){
            case 'hex':
                getRandomHexColor();
                break;
            case 'rgb':
                getRandomRgbColor();
                break;
            case 'rgba':
                getRandomRgbaColor();
                break;
        }
    }
});

function getRandomHexColor(){
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    colorBox.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
}

function getRandomRgbColor(){
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    colorBox.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
}

function getRandomRgbaColor(){
    const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random().toFixed(2)})`;
    colorBox.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
}
