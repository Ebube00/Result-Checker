let inputEN = document.getElementById('inputEN')
let inputCN = document.getElementById('inputCN')
let inputC = document.getElementById('inputC')
let inputEL = document.getElementById('inputEL')
let inputM = document.getElementById('inputM')
let inputCE = document.getElementById('inputCE')
let subject = document.getElementById('subject')
let inputS1 = document.getElementById('inputS1')
let subject1 = document.getElementById('subject1')
let inputS2 = document.getElementById('inputS2')
let subject2 = document.getElementById('subject2')
let inputS3 = document.getElementById('inputS3')
let subject3 = document.getElementById('subject3')
let inputS4 = document.getElementById('inputS4')
let subject4 = document.getElementById('subject4')
let inputS5 = document.getElementById('inputS5')
let subject5 = document.getElementById('subject5')
let inputS6 = document.getElementById('inputS6')
let inputEN1 = document.getElementById('inputEN1')
let inputCN1 = document.getElementById('inputCN1')
let inputC1 = document.getElementById('inputC1')
let inputEL1 = document.getElementById('inputEL1')
let inputM1 = document.getElementById('inputM1')
let inputCE1 = document.getElementById('inputCE1')
let sb1 = document.getElementById('sb1')
let inputR1 = document.getElementById('inputR1')
let sb2 = document.getElementById('sb2')
let inputR2 = document.getElementById('inputR2')
let sb3 = document.getElementById('sb3')
let inputR3 = document.getElementById('inputR3')
let sb4 = document.getElementById('sb4')
let inputR4 = document.getElementById('inputR4')
let sb5 = document.getElementById('sb5')
let inputR5 = document.getElementById('inputR5')
let sb6 = document.getElementById('sb6')
let inputR6 = document.getElementById('inputR6')
let btn = document.getElementById('btn')
let div5 = document.getElementById('div5')
let result = document.getElementById('div4')
let divv1 = document.getElementById('divv1')
let divOne = document.getElementById('divOne')
let divTwo = document.getElementById('divTwo')

btn.addEventListener('click', (e) =>{
    e.preventDefault()
   inputEN1.value = inputEN.value
   inputCN1.value = inputCN.value
   inputC1.value = inputC.value

   if(inputEL.value >=65 && inputEL.value < 80){
    inputEL1.value = 'B';
}
else if(inputEL.value >= 50 && inputEL.value < 65){
    inputEL1.value = 'C';
}
else if(inputEL.value >= 45 && inputEL.value < 50){
    inputEL1.value = 'D';
}
else if(inputEL.value >= 80){
    inputEL1.value = 'A';
}
else{
    inputEL1.value = 'F';
}

   if(inputM.value >=65 && inputM.value < 80){
    inputM1.value = 'B';
}
else if(inputM.value >= 50 && inputM.value < 65){
    inputM1.value = 'C';
}
else if(inputM.value >= 45 && inputM.value < 50){
    inputM1.value = 'D';
}
else if(inputM.value >= 80){
    inputM1.value = 'A';
}
else{
    inputM1.value = 'F';
}

if(inputCE.value >=65 && inputCE.value < 80){
    inputCE1.value = 'B';
}
else if(inputCE.value >= 50 && inputCE.value < 65){
    inputCE1.value = 'C';
}
else if(inputCE.value >= 45 && inputCE.value < 50){
    inputCE1.value = 'D';
}
else if(inputCE.value >= 80){
    inputCE1.value = 'A';
}
else{
    inputCE1.value = 'F';
}

sb1.textContent = subject.value
if(inputS1.value >=65 && inputS1.value < 80){
    inputR1.value = 'B';
}
else if(inputS1.value >= 50 && inputS1.value < 65){
    inputR1.value = 'C';
}
else if(inputS1.value >= 45 && inputS1.value < 50){
    inputR1inputR1.value = 'D';
}
else if(inputS1.value >= 80){
    inputR1.value = 'A';
}
else{
    inputR1.value = 'F';
}

sb2.textContent = subject1.value
if(inputS2.value >=65 && inputS2.value < 80){
    inputR2.value = 'B';
}
else if(inputS2.value >= 50 && inputS2.value < 65){
    inputR2.value = 'C';
}
else if(inputS2.value >= 45 && inputS2.value < 50){
    inputR2.value = 'D';
}
else if(inputS2.value >= 80){
    inputR2.value = 'A';
}
else{
    inputR2.value = 'F';
}

sb3.textContent = subject2.value
if(inputS3.value >=65 && inputS3.value < 80){
    inputR3.value = 'B';
}
else if(inputS3.value >= 50 && inputS3.value < 65){
    inputR3.value = 'C';
}
else if(inputS3.value >= 45 && inputS3.value < 50){
    inputR3.value = 'D';
}
else if(inputS3.value >= 80){
    inputR3.value = 'A';
}
else{
    inputR3.value = 'F';
}

sb4.textContent = subject3.value
if(inputS4.value >=65 && inputS4.value < 80){
    inputR4.value = 'B';
}
else if(inputS4.value >= 50 && inputS4.value < 65){
    inputR4.value = 'C';
}
else if(inputS4.value >= 45 && inputS4.value < 50){
    inputR4.value = 'D';
}
else if(inputS4.value >= 80){
    inputR4.value = 'A';
}
else{
    inputR4.value = 'F';
}

sb5.textContent = subject4.value
if(inputS5.value >=65 && inputS5.value < 80){
    inputR5.value = 'B';
}
else if(inputS5.value >= 50 && inputS5.value < 65){
    inputR5.value = 'C';
}
else if(inputS5.value >= 45 && inputS5.value < 50){
    inputR5.value = 'D';
}
else if(inputS5.value >= 80){
    inputR5.value = 'A';
}
else{
    inputR5.value = 'F';
}

sb6.textContent = subject5.value
if(inputS6.value >=65 && inputS6.value < 80){
    inputR6.value = 'B';
}
else if(inputS6.value >= 50 && inputS6.value < 65){
    inputR6.value = 'C';
}
else if(inputS6.value >= 45 && inputS6.value < 50){
    inputR6.value = 'D';
}
else if(inputS6.value >= 80){
    inputR6.value = 'A';
}
else{
    inputR6.value = 'F';
}
})