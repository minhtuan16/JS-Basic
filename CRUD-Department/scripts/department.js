
var data = [
    {id: 1, name: "department1"},
    {id: 2, name: "department2"},
    {id: 3, name: "department3"}
] 

function drawTable(person) {
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var tdid = document.createElement("td");
    var tdName = document.createElement("td");
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

    tr.appendChild(tdid);
    tr.appendChild(tdName);
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

    if (id.length > 0 && name.length > 0 ) {
        var p = {id: id, name: name};

        data.push(p);

        resetDrawTable(data);

        alert('Create Success');

        document.getElementById("id").value = "";
        document.getElementById("name").value = "";

    } else {
        alert('Dien day du thong tin');
    }    
}

function editPerson(id) {
    var index = data.findIndex(x => x.id == id);
    let person = data[index];

    var idIp = document.getElementById("id");
    var nameIp = document.getElementById("name");
    
    idIp.value = person.id;
    nameIp.value = person.name;

    document.getElementById("btnUpdate").style.display = 'block';
    document.getElementById("btnSave").style.display = 'none';
}

function update() {
    var idIp = document.getElementById("id");
    var nameIp = document.getElementById("name");

    var id = idIp.value;
    var name = nameIp.value;

    var index = data.findIndex(x => x.id == id);

    if (id.length > 0 && name.length > 0 ) {
        data[index] = {id: id, name: name};

        resetDrawTable(data);
        alert('Update Success');

        idIp.value = "";
        nameIp.value = "";
    } else {
        alert('Dien day du thong tin');
    }    

    document.getElementById("btnUpdate").style.display = 'none';
    document.getElementById("btnSave").style.display = 'block';
}

function deletePerson(id) {
    var newData = data.filter(x => x.id != id);
    
    data = newData;

    resetDrawTable(data);
}

function search() {
    var input = document.getElementById("inputt").value;
   
        if (input.length == null) {

            console.log(data)
            resetDrawTable(data)
        } else if (input.length > 0) {
            var index = data.filter( x => x.name == input );

            data = index;
            // data[index] = {id: id, name: name};
            resetDrawTable(data)
            
        }
}
