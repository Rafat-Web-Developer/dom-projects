function generateRGBCode() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function generateHaxCode() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

document.getElementById('generateBtn').addEventListener('click', function(){
    const main = document.getElementById('main');
    const showRGB = document.getElementById('showRGB');
    const showHaxCode = document.getElementById('showHaxCode');
    const alert = document.getElementById('alert');
    alert.style.display = 'none';
    const rgbColorCode = generateRGBCode();
    const haxColorCode = generateHaxCode();
    main.style.backgroundColor = rgbColorCode;
    showRGB.value = rgbColorCode;
    showHaxCode.value = haxColorCode
});

function copyRGBColorCode() {
    const showRGB = document.getElementById('showRGB');
    const alert = document.getElementById('alert');
    alert.style.display = 'block';
    const getCode = showRGB.value;
    alert.innerHTML = `<p>RGB Code : ${getCode} is copied</p>`;
    navigator.clipboard.writeText(getCode);
}

function copyHaxColorCode() {
    const showHaxCode = document.getElementById('showHaxCode');
    const alert = document.getElementById('alert');
    alert.style.display = 'block';
    const getCode = showHaxCode.value;
    navigator.clipboard.writeText(getCode);
    alert.innerHTML = `<p>Hax Code : ${getCode} is copied</p>`;
}