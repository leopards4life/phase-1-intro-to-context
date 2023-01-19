function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    let timeInEvents = [];
    let timeOutEvents = [];
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
};

function createEmployeeRecords(records) {
    return records.map(record => createEmployeeRecord(record))
};

function createTimeInEvent(record, dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    record.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    });

    return record;
};

function createTimeOutEvent(record, dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    record.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    });
    
    return record;
};

function hoursWorkedOnDate(record, dateStamp) {
    let timeInHour = record.timeInEvents.find(e => e.date === dateStamp)
    let timeOutHour = record.timeOutEvents.find(e => e.date === dateStamp)
    return (timeOutHour.hour - timeInHour.hour) / 100;
};

function wagesEarnedOnDate(record, dateStamp) {
    let rawWage = hoursWorkedOnDate(record, dateStamp)
    * record.payPerHour
    return parseFloat(rawWage.toString())
};

function allWagesFor(employee) {
    let eligibleDates = employee.timeInEvents.map(e => e.date);
    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
}, 0)
    return payable;
};

function calculatePayroll(records) {
    return records.reduce(function(memo, rec) {
        return memo + allWagesFor(rec)
    }, 0);
};