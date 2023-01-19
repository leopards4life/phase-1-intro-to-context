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
    let arr = [];
    records.forEach(record => {
        arr.push(createEmployeeRecord(record));
    })
    return arr;
};

function createTimeInEvent(record, dateStamp) {
    let time = dateStamp.split(" ");
    let timeInEvents = {
        type: "TimeIn",
        hour: parseInt(time[1]),
        date: time[0] 
    }
    record.timeInEvents.push(timeInEvents);
    return record;
};

function createTimeOutEvent(record, dateStamp) {
    let time = dateStamp.split(" ");
    let timeOutEvents = {
        type: "TimeOut",
        hour: parseInt(time[1]),
        date: time[0] 
    }
    record.timeOutEvents.push(timeOutEvents);
    return record;
};

function hoursWorkedOnDate(record, dateStamp) {
    let timeInHour = record.timeInEvents[0].hour;
    let timeOutHour = record.timeOutEvents[0].hour;
    let hoursWorked = timeOutHour - timeInHour;
    let str = hoursWorked.toString();
    str = str.slice(0, -2);
    str = parseInt(str);
    
    return str;
};

function wagesEarnedOnDate(record, dateStamp) {
    let hoursWorked = hoursWorkedOnDate(record);
    let payOwed = hoursWorked * record.payPerHour;
    return payOwed;
};

function allWagesFor(record) {
    console.log(record);
    return totalPayOwed;
};

function calculatePayroll(records) {
    
};