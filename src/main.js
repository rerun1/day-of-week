import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

function resetForm() {
  $("input#dateInput").val("");
}

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function displayDay(userDate){
  let dayNumber = userDate.getUTCDay();
  let result = days.slice(dayNumber,(dayNumber+1)).toString();
  return result;
}

function displayDate(userDate){
  let monthNumber = userDate.getUTCMonth();
  let resultMonth = months.slice(monthNumber,(monthNumber+1)).toString();
  let resultYear = userDate.getUTCFullYear();
  let resultDate = userDate.getUTCDate();
  let result = resultMonth + " " + resultDate + ", " + resultYear + ".";
  return result;
}

$(document).ready(function(){
  $("form#dateTest").submit(function(event){
    event.preventDefault();

    let userInputDate = $("input#dateInput").val();

    let date = new Date(userInputDate);

    let resultDay = displayDay(date);

    let resultDate = displayDate(date);

    $("p#dayAnswer").text(resultDay+",");
    $("p#userDateDisplay").text(resultDate);

    resetForm();
  });
});
