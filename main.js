window.onload = function() {
  load_sel_month();
  load_sel_day();
  load_sel_year();
  load_default_sub();

  document.getElementById("selected_sub").multiple = true;
};
var load_sel_day = function() {
  var current_sel = document.getElementById("day");

  for (let index = 1; index <= 30; index++) {
    var new_opt = document.createElement("option");
    new_opt.value = index;
    new_opt.innerHTML = index;
    current_sel.appendChild(new_opt);
  }
};

var load_sel_month = function() {
  var current_sel = document.getElementById("month");

  for (let index = 1; index <= 12; index++) {
    var new_opt = document.createElement("option");
    new_opt.value = index;
    new_opt.innerHTML = index;
    current_sel.appendChild(new_opt);
  }
};

var load_sel_year = function() {
  var current_sel = document.getElementById("year");

  for (let index = 1980; index < 2019; index++) {
    var new_opt = document.createElement("option");
    new_opt.value = index;
    new_opt.innerHTML = index;
    current_sel.appendChild(new_opt);
  }
};

var load_default_sub = function() {
  var current_sel = document.getElementById("default_sub");
  current_sel.multiple = true;

  var subjects_list = [
    "Chuyên đề Java",
    "Cơ sở dữ liệu Web",
    "Trí tuệ nhân tạo",
    "Công nghệ phần mềm",
    "Lập trình Windows",
    "Cấu trúc dữ liệu",
    "Lập trình hướng đối tượng",
  ];

  for (let index = 0; index < subjects_list.length; index++) {
    var new_opt = document.createElement("option");
    new_opt.value = subjects_list[index];
    new_opt.innerHTML = subjects_list[index];
    current_sel.appendChild(new_opt);
  }
};

var choose_sub = function() {
  // select a subject, take its value
  var default_sub = document.getElementById("default_sub");
  var value = default_sub.value;

  // select element selected_sub, add new subject
  var selected_sub = document.getElementById("selected_sub");
  var new_opt = document.createElement("option");
  new_opt.value = value;
  new_opt.innerHTML = value;
  selected_sub.appendChild(new_opt);

  // remove the subject from original place
  default_sub.remove(default_sub.selectedIndex);
};

var choose_allsub = function() {
  var src = document.getElementById("default_sub");
  var des = document.getElementById("selected_sub");
  des.innerHTML += src.innerHTML;
  src.innerHTML = "";
};

var clear_sub = function() {
  // select a subject, take its value
  var clear_sub = document.getElementById("selected_sub");
  var value = clear_sub.value;

  // select element selected_sub, add new subject
  var default_sub = document.getElementById("default_sub");
  var new_opt = document.createElement("option");
  new_opt.value = value;
  new_opt.innerHTML = value;
  default_sub.appendChild(new_opt);

  // remove the subject from original place
  clear_sub.remove(clear_sub.selectedIndex);
};

var clear_allsub = function() {
  var des = document.getElementById("default_sub");
  var src = document.getElementById("selected_sub");
  des.innerHTML += src.innerHTML;
  src.innerHTML = "";
};

var validateForm = function() {
  var valid = true;

  var id = parseInt(document.forms["myForm"]["student_id"].value);
  valid = parseInt(id) == id;

  if (
    !(
      document.getElementById("male").checked ||
      document.getElementById("female").checked
    )
  )
    valid = false;

  if (
    document.getElementById("day").value == "" ||
    document.getElementById("month").value == "" ||
    document.getElementById("year").value == ""
  )
    valid = false;

  if (document.getElementById("selected_sub").innerHTML == "") valid = false;

  if (valid == false) alert("Missing field(s) or enter invalid value");
  return valid;
};

var list_obj = [];
var form_submit = function() {
  var object = {};

  if (validateForm()) {
    console.log(validateForm);
    var x_id = document.forms["myForm"]["student_id"].value;
    var x_name = document.forms["myForm"]["fullname"].value;
    var x_gender = document.getElementById("male").checked ? "Nam" : "Nữ";
    var x_dob =
      document.getElementById("day").value +
      "/" +
      document.getElementById("month").value +
      "/" +
      document.getElementById("year").value;
    var x_subjects_list = [];

    var subject = document.getElementById("selected_sub").options;
    for (let index = 0; index < subject.length; index++) {
      x_subjects_list.push(subject[index].value);
    }

    object = {
      id: x_id,
      name: x_name,
      gender: x_gender,
      dob: x_dob,
      subjects_list: x_subjects_list,
    };
    list_obj.push(object);
    insertBottomTable(object);
  }
};

// var insertBottomTable = function(object) {
//   var table = document.getElementById("btm_table");

//   var row = table.insertRow(-1);

//   row.insertCell(0).innerHTML = object.id;
//   row.insertCell(1).innerHTML = object.name;
//   row.insertCell(2).innerHTML = object.gender;
//   row.insertCell(3).innerHTML = object.dob;
// };

var insertBottomTable = function(object) {
  var table = document.getElementById("btm_tbody");
  var data =
    "<td>" +
    object.id +
    "</td>" +
    "<td>" +
    object.name +
    "</td> " +
    " <td> " +
    object.gender +
    "</td> " +
    " <td> " +
    object.dob +
    "</td> ";
  var content = '<tr onclick="show_detail(this)">' + data + "</tr>";
  table.innerHTML += content;
};

// document.getElementsByTagName("tr").onclick = function() {
//   show_detail(this);
// };

var show_detail = function(e) {
  var obj = list_obj[e.rowIndex - 1];
  var content =
    "Mã số: " +
    obj.id +
    "\nHọ tên: " +
    obj.name +
    "\nGiới tính: " +
    obj.gender +
    "\nNgày sinh: " +
    obj.dob +
    "\nMôn học:";

  for (let index = 0; index < obj.subjects_list.length; index++) {
    content += "\n" + obj.subjects_list[index];
  }

  alert(content);
};
