var first_char = 'X';
var second_char = 'O';
var result = 0;


//change the charecters
function char_change_X(field_id){
  var text = field_id.innerHTML;
  if(text==first_char || text=='L' || text==second_char){
    field_id.textContent = first_char;
    field_id.style.color = 'red';
  }
}

//change the charecters
function char_change_O(field_id){
  var text = field_id.innerHTML;
  if(text==second_char || text=='L' || text==first_char){
    field_id.textContent = second_char;
    field_id.style.color = 'blue';
  }
}


var upper_left_text = document.querySelector("#upper-left-text");
var upper_middle_text = document.querySelector("#upper-middle-text");
var upper_right_text = document.querySelector("#upper-right-text");
var middle_left_text = document.querySelector("#middle-left-text");
var middle_middle_text = document.querySelector("#middle-middle-text");
var middle_right_text = document.querySelector("#middle-right-text");
var lower_left_text = document.querySelector("#lower-left-text");
var lower_middle_text = document.querySelector("#lower-middle-text");
var lower_right_text = document.querySelector("#lower-right-text");


//for X character
upper_left_text.addEventListener("click", function(){char_change_X(upper_left_text);})
upper_middle_text.addEventListener("click", function(){char_change_X(upper_middle_text);})
upper_right_text.addEventListener("click", function(){char_change_X(upper_right_text);})
middle_left_text.addEventListener("click", function(){char_change_X(middle_left_text);})
middle_middle_text.addEventListener("click", function(){char_change_X(middle_middle_text);})
middle_right_text.addEventListener("click", function(){char_change_X(middle_right_text);})
lower_left_text.addEventListener("click", function(){char_change_X(lower_left_text);})
lower_middle_text.addEventListener("click", function(){char_change_X(lower_middle_text);})
lower_right_text.addEventListener("click", function(){char_change_X(lower_right_text);})

//for O character
upper_left_text.addEventListener("dblclick", function(){char_change_O(upper_left_text);})
upper_middle_text.addEventListener("dblclick", function(){char_change_O(upper_middle_text);})
upper_right_text.addEventListener("dblclick", function(){char_change_O(upper_right_text);})
middle_left_text.addEventListener("dblclick", function(){char_change_O(middle_left_text);})
middle_middle_text.addEventListener("dblclick", function(){char_change_O(middle_middle_text);})
middle_right_text.addEventListener("dblclick", function(){char_change_O(middle_right_text);})
lower_left_text.addEventListener("dblclick", function(){char_change_O(lower_left_text);})
lower_middle_text.addEventListener("dblclick", function(){char_change_O(lower_middle_text);})
lower_right_text.addEventListener("dblclick", function(){char_change_O(lower_right_text);})
