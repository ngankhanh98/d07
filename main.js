window.onload = function() {
  load_sel_month();
  load_sel_day();
  load_sel_year();

  load_default_sub();
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
  var current_table = document.getElementById("default_sub");
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
    var row = current_table.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = subjects_list[index];
  }
};
