

const colorInput = document.querySelector('#color-input');

const numInput = document.querySelector('#num-input');

const formatColor = document.querySelector('#color-format');

const genrateBtn = document.querySelector('#genrate');

const restBtn = document.querySelector('#reset');

const genrateDiv = document.querySelector('#div');

const themeToggleBtn = document.getElementById('theme-toggle');

const htmlElement = document.getElementById('main-html');
// new div k liye ek element bna rahy hain jo k loop k ander chly ga

let num = 5;
//hexa ko genrate kerny k liye
const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


restBtn.addEventListener('click',() => {
    genrateDiv.innerHTML = ""
})


genrateBtn.addEventListener('click', () => {
    let num = numInput.value;



    for (let i = 0; i < num; i++) {
        let newDiv = document.createElement('div');
        newDiv.id = "jkhkj"


        let color = randomHex();
        let rgbColor = hexToRgb(color);
        let hslColor = hexToHsl(color);
        const a = `
                <div class="group bg-white p-3 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300">
                    <div class="w-full h-64 rounded-xl mb-4" style="background-color: ${color};"></div>
                     <div class="px-2 pb-2">
                     <span class="font-mono font-bold text-slate-800 cursor-pointer" 
                     onclick="copyText('${color}',this)">${color}</span>
                     </div>
                    <div class="px-2 pb-2">
                         <span class="font-mono font-bold text-slate-800 cursor-pointer"
                          onclick="copyText('${rgbColor}',this)">${rgbColor}</span>
                    </div>
                    <div class="px-2 pb-2" >
                         <span class="font-mono font-bold text-slate-800 cursor-pointer"
                          onclick="copyText('${hslColor}',this)">${hslColor}</span>
                    </div>
                </div>
            `;

        newDiv.innerHTML = a;
        genrateDiv.appendChild(newDiv);

    }
})
// hexa ko genrate kerny k liye fuctikon use kery gy 

function randomHex() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexa[Math.floor(Math.random() * hexa.length)]
    }
    return color;
}



// hexa say rba k liye function bnye gy

function hexToRgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

// rgb to hsl function

function hexToHsl(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    r = r / 255;
    g = g / 255;
    b = b / 255;
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let l = (max + min) / 2;
    let s = max === min ? 0 : (max - min) / (1 - Math.abs(2 * l - 1));
    let h = 0;
    if (max !== min) {
        if (max === r) h = ((g - b) / (max - min)) % 6;
        else if (max === g) h = (b - r) / (max - min) + 2;
        else h = (r - g) / (max - min) + 4;
        h = Math.round(h * 60);
        if (h < 0) h += 360;
    }
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    return `hsl(${h}, ${s}%, ${l}%)`;
}


function copyText(text , element) {
    navigator.clipboard.writeText(text);
     element.innerText = '✅ Copied!';
     setTimeout(() => {
       element.innerText = text 
     }, 2000);
     
}

 







// function hexToRgba(hex) {
//     let r = parseInt(hex.slice(1, 3), 16);
//     let g = parseInt(hex.slice(3, 5), 16);
//     let b = parseInt(hex.slice(5, 7), 16);
//     return `rgba(${r}, ${g}, ${b}, 1)`;
// }

// let selectedColor;

// if (formatColor.value === 'hex') {
//     selectedColor = color;
// } else if (formatColor.value === 'rgb') {
//     selectedColor = hexToRgb(color);
// } else if (formatColor.value === 'rgba') {
//     selectedColor = hexToRgba(color);
// } else if (formatColor.value === 'hsl') {
//     selectedColor = hexToHsl(color);
// }