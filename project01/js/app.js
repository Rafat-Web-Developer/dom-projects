function generateRGBCode() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

document.getElementById('generateBtn').addEventListener('click', function(){
    const main = document.getElementById('main');
    const showRGB = document.getElementById('showRGB');
    const alert = document.getElementById('alert');
    alert.style.display = 'none';
    const color = generateRGBCode();
    main.style.backgroundColor = color;
    showRGB.value = color;
});

function copyColorCode() {
    const showRGB = document.getElementById('showRGB');
    const alert = document.getElementById('alert');
    alert.style.display = 'block';
    const getCode = showRGB.value;
    console.log(getCode);
}