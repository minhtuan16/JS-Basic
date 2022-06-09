
var data = [
    {id: 1, name: "xyz1", age: 18, address: "hn"},
    {id: 2, name: "xyz2", age: 20, address: "hn"},
    {id: 3, name: "xyz3", age: 21, address: "hn"}
] 

function drawTable(person) {
    var tr = document.createElement("tr");
    var tdid = document.createElement("td");
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
        editPerson(person.id);
    }
    
    //bat su kien edit
    deleteBtn.onclick = function() {
        deletePerson(person.id);
    }

    tdid.innerHTML = person.id;
    tdName.innerHTML = person.name;
    tdAge.innerHTML = person.age;
    tdAddress.innerHTML = person.address;

    tr.appendChild(tdid);
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

// resetDrawTable(data)
function create() {
    
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;

    if (id != null && name != null && age != null && address != null) {
        var p = {id: id, name: name, age: age, address: address};

        data.push(p);

        resetDrawTable(data);
    } else {
        alert('Dien day du thong tin');
    }    
}

function editPerson(id) {
    var index = data.findIndex(x => x.id == id);
    let person = data[index];

    var idIp = document.getElementById("id");
    var nameIp = document.getElementById("name");
    var ageIp = document.getElementById("age");
    var addressIp = document.getElementById("address");
    
    idIp.value = person.id;
    nameIp.value = person.name;
    ageIp.value = person.age;
    addressIp.value = person.address;

    document.getElementById("btnUpdate").style.display = 'block';
    document.getElementById("btnSave").style.display = 'none';
}

function update() {
    var idIp = document.getElementById("id");
    var nameIp = document.getElementById("name");
    var ageIp = document.getElementById("age");
    var addressIp = document.getElementById("address");

    var id = idIp.value;
    var name = nameIp.value;
    var age = ageIp.value;
    var address = addressIp.value;

    var index = data.findIndex(x => x.id == id);

    data[index] = {id: id, name: name, age: age, address: address};

    resetDrawTable(data);

    document.getElementById("btnUpdate").style.display = 'none';
    document.getElementById("btnSave").style.display = 'block';
}

function deletePerson(id) {
    var newData = data.filter(x => x.id != id);
    
    data = newData;

    resetDrawTable(data);
    
}
