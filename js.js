let btn1 = document.getElementById("mybutton1");
let btn2 = document.getElementById("mybutton2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "rgba(92,145,229)";
let rgb2 =  "rgb(152,63,198)";


const hexValue = () => {
    let hexNumber = "0123456789abcdef";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color = color + hexNumber[Math.floor(Math.random() * 16)];
    }

    return color;
};


const handButton1 = () => {
    rgb1 = hexValue();
    console.log(rgb1)
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right ${rgb1}, ${rgb2})`;

};

const handButton2 = () => {
    rgb2 = hexValue();
    console.log(rgb2)
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb2}, ${rgb1})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right ${rgb2}, ${rgb1})`;
};


btn1.addEventListener("click", handButton1);
btn2.addEventListener("click", handButton2);

copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
})