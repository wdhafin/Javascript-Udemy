const defaultResult = 0;
let currentResult = defaultResult;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;
let errorMassage = 'An error \n' + 'occureed!';

outputResult(currentResult, errorMassage);
