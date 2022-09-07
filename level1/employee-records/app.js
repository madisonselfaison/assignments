// I still have to call the "printEmployeeForm" method for each employee. Not sure how to do that.
const employees = ["Joe", "Emily", "Robert", "Christina"]


function Employees(name, job, salary, status){
    this.name = name
    this.job = job
    this.salary = salary
    this.status = status 
}

var joe = new Employees("Joe", "Piano teacher", "$25/hr", "Part time")
var emily = new Employees("Emily", "Accountant","$68k/year", "Full time")
var robert = new Employees("Robert", "Attorney", "$168k/year", "Full time")
var christina = new Employees("Christina", "Construction", "$1,000/hour", "Part time")
console.log(joe.name)
console.log(emily.job)
console.log(robert.salary)
console.log(christina.status)