const btn = document.getElementById("btn-convert")
let userInput = document.getElementById("input")
let sum1 = document.getElementById("sum1")
let sum2 = document.getElementById("sum2")
let sum3 = document.getElementById("sum3")



btn.addEventListener('click', function(){
    length(userInput.value)
    volume(userInput.value)
    mass(userInput.value)
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function length(input){
  sum1.textContent = `${input} meters = ${(input * 3.281).toFixed(3)} feet | ${input} feet = ${(input / 3.281).toFixed(3)} meters`
}

function volume(input){
  sum2.textContent = `${input} liters = ${(input * 0.264).toFixed(3)} gallons | ${input} gallons = ${(input / 0.264).toFixed(3)} liters`
}

function mass(input){
  sum3.textContent = `${input} kilograms = ${(input * 2.204 ).toFixed(3)} pounds | ${input} pounds = ${(input / 2.204 ).toFixed(3)} kilograms`
}