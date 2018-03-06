// Test Case 1 (Eval)
eval("'shah' + 'rukh'");
var a = "code break";
eval("2 * 9");
var c = eval("function isvalidMatch (){if(a == 'code break'){ console.log('match');return true;} else { console.log('not match');return false;}}");

// Test Case 2 (Eval)
var x = 10;
var y = 20;
var a = eval("x * y") + "<br>";
var b = eval("2 + 2") + "<br>";
var c = eval("x + 17") + "<br>";

var res = a + b + c;

// Test Case 3 (Dynamic Property Add)

var data = {
    'PropertyA': "PropertyA",
    'PropertyB': "PropertyB",
    'PropertyC': "PropertyC"
};

function propertyAdd(){
data["PropertyD"] = "PropertyD";
data["PropertyE"] = "PropertyE";
}

propertyAdd();

// Test Case 4 (Dynamic Property Add)

var person = { "firstName":"shah", "lastName":"Bdr", "Age":25}
person.fullName = person.firstName + " " + person.LastName;
person.gender = "M";

// Test Case 5 (Dynamic Property Delete)

var data = {
    'PropertyA': "PropertyA",
    'PropertyB': "PropertyB",
    'PropertyC': "PropertyC"
};

function propertyDelete(){
 delete data.PropertyA;
 delete data.PropertyC;
}

propertyDelete();

// Test Case 6 (Dynamic Property Delete)

var person = { "firstName":"shah", "lastName":"Bdr", "Age":25}
delete person["age"];

// Test Case 7 (Prototype Update)

function Human(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Human.prototype.language = "English";


// Test Case 8 (Prototype Update)

var Person = function(name) {
  this.name = name;
  this.canTalk = true;
  this.greet = function() 
  {
  if (this.canTalk) 
  {
    console.log('Hi, I am ' + this.name);
  }
  }
};

var Employee = function(name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

//Test Case 9 (Method Overriding)
function student(){
  this.fullName;
  this.getDegreeDuration = function(){
    console.log("Your degree duration is not available.")
  }
}
function schoolStudent(){
}
function masterStudent(){
}
function bachelorStudent(){
}

schoolStudent.prototype = new student(); masterStudent.prototype = new student(); 
bachelorStudent.prototype = new student(); 

var mStudent = new masterStudent();var bStudent = new bachelorStudent();
var sStudent = new schoolStudent();

mStudent.fullName = 'Shahrukh Badar';bStudent.fullName = 'Irtaza Rasheed';
sStudent.fullName = 'Dave Khan';

masterStudent.prototype.getDegreeDuration = function(){
  console.log("Normally your degree duration is 2 years.")
}
bachelorStudent.prototype.getDegreeDuration = function(){
  console.log("Normally your degree duration is 4 years.")
}

//Test Case 10 (Method Overriding)
function vehicle(){
  this.ownerName;
  this.getOwnerName = function(){
    return "The owner of this car is " + this.ownerName;
  }
}

function aeroPlane(){
} 

aeroPlane.prototype = new vehicle();
aeroPlane.prototype.getOwnerName = function() {
  return "The plane belongs to ABC organization";
}

var vc = new vehicle();
var pl = new aeroPlane();

vc.getOwnerName();
pl.getOwnerName();