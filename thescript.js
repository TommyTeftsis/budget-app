


function next0 (){
  var elements = document.getElementsByTagName("input");
  for (var ii=0; ii < elements.length; ii++) {
    if (elements[ii].type == "text") {
      elements[ii].value = "";
    }
  }
const section0 = document.querySelector('.monthly-income');
if (section0.style.display === "none") {
  section0.style.display = "block";
} else {
  section0.style.display = "none";
}
section0.scrollIntoView({behavior: 'smooth'})
};
function next1 () {
  const section1 = document.querySelector('.housing-expenses');
 if(section1.style.display === "none") {
  section1.style.display = "block"
 }else{
  section1.style.display = "none"
 }
  section1.scrollIntoView({behavior:'smooth'})
};
function next2 () {
  const section2 = document.querySelector('.transportation-expenses');
  if(section2.style.display === "none") {
    section2.style.display = "block"
  }else{
    section2.style.display = "none"
  }
  section2.scrollIntoView({behavior:'smooth'})
};
function next3 () {
  const section3 = document.querySelector('.personal-expenses');
  if(section3.style.display === "none") {
    section3.style.display = "block"
  } else{
    section3.style.display = "none"
  }
  
  section3.scrollIntoView({behavior:'smooth'})
};



function calculateTotal() {

  // const section4 = document.querySelector('.result');
  // section4.scrollIntoView({behavior:'smooth'})

  var monthlyincome = document.getElementById("monthlyincome").value;
  var monthlyrent =document.getElementById("monthlyrent").value;
  var utilities = document.getElementById("utilities").value;
  var internet = document.getElementById("internet").value;
  var carpayment = document.getElementById("carpayment").value;
  var carinsurance = document.getElementById("carinsurance").value;
  var gas = document.getElementById("gas").value;
  var groceries = document.getElementById("groceries").value;
  var cellphone = document.getElementById("cellphone").value;
  var clothes = document.getElementById("clothes").value;
  var entertainment = document.getElementById("entertainment").value;

  var totalExpenses = parseFloat(monthlyrent) + parseFloat(utilities) + parseFloat(internet)+ parseFloat(carpayment) + parseFloat(carinsurance)
+ parseFloat(gas)  +  parseFloat(groceries) + parseFloat(cellphone) + parseFloat(clothes) + parseFloat(entertainment);


var freeToSpend = (parseFloat(monthlyincome) - parseFloat(totalExpenses));

var toSave = (.20 * parseFloat(monthlyincome));
var totalRent = (parseFloat(monthlyrent) + parseFloat(utilities));
var usualStatement = document.getElementById("textHere").innerText = `Your Total Expenses are $${totalExpenses} You should save $${toSave} You can spend $${+freeToSpend}`;

if (totalExpenses < (.50 * parseFloat(monthlyincome)) && (parseFloat(totalRent)) < (.30 * parseFloat(monthlyincome))){
document.querySelector(".modal-title").innerText = `You're Doing Great!`
document.querySelector(".modal-title").style.color = "green";
}else if ((parseFloat(totalRent)) < (.30 * parseFloat(monthlyincome))) {
  document.getElementById("textThere").innerText = `Your NOT paying too much for rent!`
} 
else {document.querySelector(".modal-title").innerText = `You could budget a little bit more!`
document.querySelector(".modal-title").style.color = "red";
document.getElementById("textThere").innerText = `You ARE paying too much for rent, your rent should be less than `}


if ((parseFloat(totalRent)) < (.30 * parseFloat(monthlyincome))) {
  document.getElementById("textThere").innerText = `You're NOT paying too much for rent!$`
}else {document.getElementById("textThere").innerText = `You ARE paying too much for rent, your TOTAL rent should be less than $${(.30 * parseFloat(monthlyincome))}`}
};

function next0 (){
const section0 = document.querySelector('.monthly-income');
if (section0.style.display === "none") {
  section0.style.display = "block";
} else {
  section0.style.display = "none";
}
section0.scrollIntoView({behavior: 'smooth'})
};
function next1 () {
  const section1 = document.querySelector('.housing-expenses');
 if(section1.style.display === "none") {
  section1.style.display = "block"
 }else{
  section1.style.display = "none"
 }
  section1.scrollIntoView({behavior:'smooth'})
};
function next2 () {
  const section2 = document.querySelector('.transportation-expenses');
  if(section2.style.display === "none") {
    section2.style.display = "block"
  }else{
    section2.style.display = "none"
  }
  section2.scrollIntoView({behavior:'smooth'})
};
function next3 () {
  const section3 = document.querySelector('.personal-expenses');
  if(section3.style.display === "none") {
    section3.style.display = "block"
  } else{
    section3.style.display = "none"
  }
  
  section3.scrollIntoView({behavior:'smooth'})
};
