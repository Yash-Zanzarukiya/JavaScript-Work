const result = document.querySelector('#result')
const form = document.querySelector('form')
console.log(form);
console.log(result);

form.addEventListener('submit', function (eventObj) {
    eventObj.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value)
    const hight = parseInt(document.querySelector('#hight').value)

    if (hight === '' || weight === '' || isNaN(hight) || isNaN(weight) || hight <= 0 || weight <= 0)
        result.innerHTML = "Please Give Valid Input"
    else {
        const bmi = (weight / ((hight ** 2) / 10000)).toFixed(2)
        if (bmi < 18.5) {
            result.innerHTML = `Your BMI : ${bmi} \n You are UnderWeight`
        }
        if (bmi >= 18.5 && bmi <= 25) {
            result.innerHTML = `Your BMI : ${bmi} \n You are HealthyWeight`
        }
        if (bmi <= 30 && bmi > 25) {
            result.innerHTML = `Your BMI : ${bmi} \n You are OverWeight`
        }
        if (bmi > 30) {
            result.innerHTML = `Your BMI : ${bmi} \n You have obesity Weight`
        }
    }
})