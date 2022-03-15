console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("form"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let question = login_text.split('\n')[3]; // Use split and array operations on the login_text string to extract the question

let answer = ""; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked
let first_index = question.indexOf('first');
let second_index = question.indexOf('second');
let add_index = question.indexOf('add');
let subtract_index = question.indexOf('subtract');
let numbers = question.match(/(\d)+/g);

if ( first_index > 0)
{
    answer = parseInt(numbers[0]);
}
else if ( second_index > 0)
{
    answer = parseInt(numbers[1]);
}
else if ( add_index > 0)
{
    answer = parseInt(numbers[0]) + parseInt(numbers[1]);
}
else if ( subtract_index > 0)
{
    answer = parseInt(numbers[0]) - parseInt(numbers[1]);
}

const captcha_input_element = document.getElementById("valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
