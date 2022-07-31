// Input fields
const pounds = document.getElementById('pounds'),
kilograms = document.getElementById('kilograms'),
grams = document.getElementById('grams'),
ounces = document.getElementById('ounces'),
form = document.querySelector('form');

form.addEventListener('input', convertWeight);

function convertWeight(e) {
    if (e.target.id === 'pounds') {
        let x = parseFloat(e.target.value);
        kilograms.value = (parseFloat(x/2.2046)).toFixed(2);
        grams.value = (parseFloat(x/0.0022046)).toFixed(2);
        ounces.value = (parseFloat(x*16)).toFixed(2);
    } else if (e.target.id === 'kilograms') {
        let x = parseFloat(e.target.value);
        pounds.value = (parseFloat(x*2.2046)).toFixed(2);
        grams.value = (parseFloat(x*1000)).toFixed(2);
        ounces.value = (parseFloat(x*35.274)).toFixed(2);
    } else if (e.target.id === 'grams') {
        let x = parseFloat(e.target.value);
        kilograms.value = (parseFloat(x/1000)).toFixed(2);
        pounds.value = (parseFloat(x*0.0022046)).toFixed(2);
        ounces.value = (parseFloat(x*0.035274)).toFixed(2);
    } else if (e.target.id === 'ounces') {
        let x = parseFloat(e.target.value);
        kilograms.value = (parseFloat(x/35.274)).toFixed(2);
        grams.value = (parseFloat(x/0.035274)).toFixed(2);
        pounds.value = (parseFloat(x*0.0625)).toFixed(2);
    }
}