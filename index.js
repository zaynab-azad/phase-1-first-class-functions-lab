// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  return [...drivers.slice(0, 2)];
};
const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
  return [...drivers.slice(drivers.length - 2, drivers.length)];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function () {
    return num * num;
  };
}

function fareDoubler(num) {
  return num * 2;
}
function fareTripler(num) {
  return num * 3;
}
function selectDifferentDrivers(drivers, funcs) {
  if (funcs == returnFirstTwoDrivers) {
    return drivers.slice(0, 2);
  } else if (funcs == returnLastTwoDrivers) {
    return drivers.slice(drivers.length - 2, drivers.length);
  }
}
