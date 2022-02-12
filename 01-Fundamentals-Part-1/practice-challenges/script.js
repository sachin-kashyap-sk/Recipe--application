/*
const massMark = 78;
const heightMark = 1.69;
const massJohns = 92;
const heightJohns = 1.95;

const BMIOfMark = massMark / heightMark ** 2;
console.log(BMIOfMark);

const BMIOfJohns = massJohns / (heightJohns * heightJohns);
console.log(BMIOfJohns);

const MassMarks = 95;
const HeightMarks = 1.88;
const MassJohn = 85;
const HeightJohn = 1.76;

const BMIofMarks = MassMarks / HeightMarks ** 2;
console.log(BMIofMarks);

const BMIofJohn = MassJohn / HeightJohn ** 2;
console.log(BMIofJohn);

if (BMIofMarks > BMIofJohn) {
  console.log(`Marks ${BMIofMarks} BMI Higher Than John ${BMIofJohn} BMI`);
} else {
  console.log(`John ${BMIofJohn} BMI Higher Than Mark ${BMIofMarks} BMI`);
}

const BMIOfJohn = MassJohn / (HeightJohn * HeightJohn);
console.log(BMIOfJohn);

const MarkHigherBMI = BMIofMarks > BMIofJohn;
console.log(MarkHigherBMI);

const dolphinScore = (70, 108, 89);
const koalasScore = (60, 91, 110);
const averageDolphinScore = (70 + 108 + 89) / 3;
console.log(averageDolphinScore);
const averageKoalasScore = (60 + 91 + 110) / 3;
console.log(averageKoalasScore);

if (averageDolphinScore > averageKoalasScore && averageDolphinScore >= 100) {
  console.log("Dolphin win the match");
} else if (
  averageKoalasScore > averageDolphinScore &&
  averageKoalasScore >= 100
) {
  console.log("Koalas win the match");
} else if (averageDolphinScore && averageKoalasScore === 100) {
  console.log("NO One Win The Match");
} else if (averageDolphinScore && averageKoalasScore <= 90) {
  console.log("Match Draw!");
}

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
console.log(tip);
console.log(total);
console.log(
  `The bill was ${bill} and the tip was ${tip} and total value is  ${total}`
);

const calcAverage = (a, b, c) => (a + b + c) / 3;
const DolphinScore = calcAverage(85, 54, 41);
const KoalasScore = calcAverage(23, 34, 27);
const checkWinner = function (AverageDolphin, AverageKoalas) {
  if (AverageDolphin >= 2 * AverageKoalas) {
    console.log("Dolphin Win The Match");
  } else if (AverageKoalas >= 2 * AverageDolphin) {
    console.log("Koalas Win The Match");
  } else {
    console.log("NO One Win The Match");
  }
};
checkWinner(DolphinScore, KoalasScore);

/*
const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};
const Bill = [125, 555, 44];
const tip = [calcTip(Bill[0]), calcTip(Bill[1]), calcTip(Bill[2])];
console.log(tip);
const total = [Bill[0] + tip[0], Bill[1] + tip[1], Bill[2] + tip[2]];
console.log(total);
*/
/*
const Mark = {
  FullName: "MarkMiller",
  Mass: 78,
  Height: 1.69,

  calcBMI: function () {
    this.bmi = this.Mass / this.Height ** 2;
    return this.bmi;
  },
};

const John = {
  fullName: "JohnSmith",
  Height: 1.95,
  Mass: 92,

  calcBMI: function () {
    this.bmi = this.Mass / this.Height ** 2;
    return this.bmi;
  },
};
John.calcBMI();
console.log(John.bmi);
Mark.calcBMI();
console.log(Mark.bmi);
console.log(`${Mark.FullName} have The Higher BMI than ${John.fullName}`);
*/
/*
const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  
}
  const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const total = [];

  for (let i = 0; i < bill.length; i++) {
    const tip = calcTip(bill[i]);
    tips.push(tip);
    total.push(tip + bill[i]);
  
};
console.log(bill, tips, total);
*/























