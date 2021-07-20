const returnFirstTwoDrivers= function(newArray) {
    return newArray.slice(0,2);
}

const returnLastTwoDrivers = function(newArray) {
    return newArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (int) {
    return function (value) {
    return int * value;
    };
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, theseDrivers) {
    return theseDrivers (drivers)
}
