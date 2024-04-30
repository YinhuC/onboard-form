function calculateTax(salary) {
  const brackets = [18200, 37000, 90000, 180000, Infinity];
  const rates = [0.19, 0.325, 0.37, 0.45];
  let totalTax = 0;

  for (let i = 0; i < brackets.length - 1; i++) {
    if (salary >= brackets[i]) {
      totalTax += (Math.min(salary, brackets[i + 1]) - brackets[i]) * rates[i];
    } else {
      break;
    }
  }

  return totalTax;
}

function calculateSuperannuation(salary) {
  return salary * 0.11;
}

export { calculateTax, calculateSuperannuation };
