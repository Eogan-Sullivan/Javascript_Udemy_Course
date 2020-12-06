const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const markBmi = massMark / heightMark ** 2;
const johnBmi = massJohn / heightMark ** 2;

if (markBmi > johnBmi) {
    console.log(`Mark's BMI: ${markBmi} is higher than John's: ${johnBmi}`);
} else {
    console.log(`John's BMI: ${johnBmi} is higher than Mark': ${markBmi}`);
}

