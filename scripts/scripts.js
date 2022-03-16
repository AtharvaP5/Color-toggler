const button = document.getElementById('color-changer')
const rgbValueHolder = document.getElementById('value-holder');
const rgbMinValue = -255;
const rgbMaxValue = 255;

const colorChangeHandler = () => {
  const random = [];
  for (i = 0; i <= 2; i++){
    const number = Math.floor(Math.random() * (rgbMaxValue - rgbMinValue + 1) + rgbMinValue);  //Generates random value between 0 to 255
    random.push(number);
  }
  document.body.style.background = `rgb(${random[0]},${random[1]},${random[2]})`;
  rgbValueHolder.textContent = `RBG Value : ${random[0]} , ${random[1]} , ${random[2]}`;
}
button.addEventListener('click', colorChangeHandler);