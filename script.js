const users = [
  { id: 1, name: "Ivan", age: 25, active: true, salary: 1000 },
  { id: 2, name: "Anna", age: 30, active: false, salary: 1500 },
  { id: 3, name: "Oleh", age: 22, active: true, salary: 800 },
  { id: 4, name: "Maria", age: 28, active: true, salary: 2000 },
  { id: 5, name: "Petro", age: 35, active: false, salary: 1200 },
];

// TASK #1
console.log("TASK #1");

const salarySumm = users.reduce((acc, user) => {
  return acc + user.salary;
}, 0);

console.log(salarySumm);

// TASK #2
console.log("TASK #2");

const activeSalarySumm = users.reduce((acc, user) => {
  if (user.active) {
    acc += user.salary;
  }
  return acc;
}, 0);

console.log(activeSalarySumm);

// TASK #3
console.log("TASK #3");

const userAmount = users.reduce((acc, user) => {
  const amount = acc + 1;
  return amount;
}, 0);

console.log(userAmount);

// TASK #4
console.log("TASK #4");

const averageAge =
  users.reduce((acc, user) => {
    const ageSumm = acc + user.age;
    return ageSumm;
  }, 0) / userAmount;

console.log(averageAge);

// TASK #5
console.log("TASK #5");

const grouppedByIds = users.reduce((acc, user) => {
  acc[user.id] = user.name;

  return acc;
}, {});

console.log(grouppedByIds);

// TASK #6
console.log("TASK #6");

const activeInactive = users.reduce(
  (acc, user) => {
    if (user.active) {
      acc.active += 1;
    } else {
      acc.inactive += 1;
    }

    return acc;
  },
  { active: 0, inactive: 0 }
);

console.log(activeInactive);

// TASK #7
console.log("TASK #7");

const highestSalary = users.reduce((acc, user) => {
  if (user.salary > acc) {
    acc = user.salary;
  }
  return acc;
}, 0);

const highestSalaryUser = users.filter(user => user.salary === highestSalary);

console.log(highestSalaryUser);

// TASK #8
console.log("TASK #8");

const ageGroups = users.reduce(
  (acc, user) => {
    if (user.age < 30) {
      acc.young += user.salary;
    } else {
      acc.adult += user.salary;
    }

    return acc;
  },
  { young: 0, adult: 0 }
);

console.log(ageGroups);

// TASK #9
console.log("TASK #9");

const nameLength = users.reduce((acc, user) => {
  if (user.active) {
    acc.push(user.name.length);
  }
  return acc;
}, []);

console.log(nameLength);

// TASK #10
console.log("TASK #10");

const formattedUsers = users.map(
  user => `${user.name.toUpperCase()} (${user.salary})`
);
console.log(formattedUsers);

// TASK #11
console.log("TASK #11");

const reduceActiveSalarySumm = users.reduce((acc, user) => {
  if (user.active) {
    acc += user.salary;
  }
  return acc;
}, 0);

console.log(reduceActiveSalarySumm);

// TASK #12
console.log("TASK #12");

const isActive = users.every(user => user.active === true);

console.log(isActive);

// TASK #13
console.log("TASK #13");

const isAdult = users.every(user => user.age >= 18);

console.log(isAdult);

// TASK #14
console.log("TASK #14");

const ageSorted = users.toSorted((a, b) => a.age - b.age);

console.log(ageSorted);

// TASK #15
console.log("TASK #15");

const activeSorted = users
  .filter(user => user.active === true)
  .toSorted((a, b) => b.salary - a.salary);

console.log(activeSorted);
