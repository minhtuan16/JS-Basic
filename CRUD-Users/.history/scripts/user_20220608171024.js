
var data = [
    {email: "e1", name: "xyz1", age: 18, address: "hn"},
    {email: "e2", name: "xyz2", age: 20, address: "hn"},
    {email: "e3", name: "xyz3", age: 21, address: "hn"}
] 

function drawTable(person) {
    var tr = document.createElement("tr");
    var tdEmail = document.createElement("td");
    var tdName = document.createElement("td");
    var tdAge = document.createElement("td");
    var tdAddress = document.createElement("td");
    var tdOption = document.createElement("td");

    var editBtn = document.createElement("button");
    var deleteBtn = document.createElement("button");

    editBtn.innerText = 'Edit';
    deleteBtn.innerText = 'Delete';

    tdOption.appendChild(editBtn);
    tdOption.appendChild(deleteBtn);

    //bat su kien edit
    editBtn.onclick = function() {
        editPerson(person.email);
    }
    
    //bat su kien edit
    deleteBtn.onclick = function() {
        deletePerson(person.email);
    }

    tdEmail.innerHTML = person.email;
    tdName.innerHTML = person.name;
    tdAge.innerHTML = person.age;
    tdAddress.innerHTML = person.address;

    tr.appendChild(tdEmail);
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdAddress);
    tr.appendChild(tdOption)

    var tableBody = document.getElementById("tableBody");
    tableBody.appendChild(tr);
}

function resetDrawTable(persons) {
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    for (var i = 0; i < persons.length; i++) {
        drawTable(persons[i]);
    }
}

resetDrawTable(data)
function create() {
    var emailIp = document.getElementById("email");
    var nameIp = document.getElementById("name");
    var ageIp = document.getElementById("age");
    var addressIp = document.getElementById("address");

    
    // if(email != null && name != null && age != null && address != null) {
        var email = emailIp.value;
        var name = nameIp.value;
        var age = ageIp.value;
        var address = addressIp.value;

        var p = {email: email, name: name, age: age, address: address};
        
        data.push(p);
        resetDrawTable(data);
        
    // } else {
    //     alert('Yeu cau nhap day du');
    // }
}

function editPerson(email) {
    var index = data.findIndex(x => x.email == email);
    let person = data[index];

    var emailIp = document.getElementById("email");
    var nameIp = document.getElementById("name");
    var ageIp = document.getElementById("age");
    var addressIp = document.getElementById("address");
    
    emailIp.value = person.email;
    nameIp.value = person.name;
    ageIp.value = person.age;
    addressIp.value = person.address;

    document.getElementById("btnUpdate").style.display = 'block';
    document.getElementById("btnSave").style.display = 'none';
}

function update() {
    var emailIp = document.getElementById("email");
    var nameIp = document.getElementById("name");
    var ageIp = document.getElementById("age");
    var addressIp = document.getElementById("address");

    var email = emailIp.value;
    var name = nameIp.value;
    var age = ageIp.value;
    var address = addressIp.value;

    var index = data.findIndex(x => x.email == email);

    data[index] = {email: email, name: name, age: age, address: address};

    resetDrawTable(data);

    document.getElementById("btnUpdate").style.display = 'none';
    document.getElementById("btnSave").style.display = 'block';
}

function deletePerson(email) {
    var newData = data.filter(x => x.email != email);
    
    data = newData;

    resetDrawTable(data);
    
}

// function createTable(userArray) {
//     var tr = document.createElement("tr");
//     var tdEmail = document.createElement("td");
//     var tdName = document.createElement("td");
//     var tdAge = document.createElement("td");
//     var tdAddress = document.createElement("td");
//     var tdOption = document.createElement("td");

//     tdEmail.innerHTML = person.email;
//     tdName.innerHTML = person.name;
//     tdAge.innerHTML = person.age;
//     tdAddress.innerHTML = person.address;

//     tr.appendChild(tdEmail);
//     tr.appendChild(tdName);
//     tr.appendChild(tdAge);
//     tr.appendChild(tdAddress);
// }