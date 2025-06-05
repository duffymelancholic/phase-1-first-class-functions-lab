// Code your solution in this file!
const returnFirstTwoDrivers = () => {
	return ['Antonia', 'Nuru'];
};

const returnLastTwoDrivers = () =>{
    return ['Amari', 'Mo'];
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function(multiplier) {
        return fare * multiplier;
    };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);

    }

