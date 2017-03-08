var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];
convertEmployees(employees);

function convertEmployees(array) {
  for (var i = 0; i < array.length; i++) {
    var newEmployeeArray = newEmployee(array[i]);
    console.log(newEmployeeArray);
  }
}

function newEmployee(employeeArray){
  var resultArray = [];
  //constructor for new employee array
 resultArray[0] = (employeeArray[0]);

 //resultArray[2] = annualComp;
  // this.totalbonus = totalBonus;

  //Figures out employee bonus percentage
  function percent(){
    var employeeBonus = employeeArray[3];
    switch (employeeBonus){
    case 1:
      employeeBonus = 0;
    break;
    case 2:
      employeeBonus = 0;
    break;
    case 3:
      employeeBonus = 0.04;
    break;
    case 4:
      employeeBonus = 0.06;
    break;
    case 5:
      employeeBonus = 0.10;
    break;
    }
    //console.log(employeeBonus);
    return employeeBonus;
  }
//adds bonus based on length of employee number
  function added(){
    var timeBonus = 0;
    if(employeeArray[1].length==4){
      timeBonus = 0.05;
    } else {
      timeBonus = 0;
    }
    return timeBonus;
  }


//limits bonus based on employee salary
  function limit(){
    if(employeeArray[2]>65000){
      return -0.01;
    } else {
      return 0;
    }
  }

//limits employee bonus to .13
    function bonusThreshold(){
    var bonusPercent = percent()+added()+limit();
      if(bonusPercent > 0.13)
    {
      bonusPercent = 0.13;
    } else if (bonusPercent<0){
      bonusPercent = 0;
    }
    return bonusPercent;
  }
var bonusPercent = bonusThreshold();
resultArray[1] = (bonusPercent);
//figures out the total bonus
    function totalBonus(){
      var totalBonus = parseInt(bonusPercent*employeeArray[2]);
      return totalBonus;
    }
    var bonus = totalBonus();
  resultArray[3] = (bonus);

//figures out annual compensation
  function totalComp(){
    var total = bonus + parseInt(employeeArray[2]);
    return total;
  }
  var totalSTI = totalComp();
resultArray[2] = totalSTI;
  return resultArray;
}
