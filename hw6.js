var selectedRow= null

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow== null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
   resetForm();
}

function readFormData(){
    var formData = {};
    formData["fullName"]= document.getElementById("fullName").value;
    formData["favoriteColor"]= document.getElementById("favoriteColor").value;
    formData["hobby"]= document.getElementById("hobby").value;
    formData["occupation"]= document.getElementById("occupation").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("nameList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.favoriteColor;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.hobby;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.occupation;
    cell4=newRow.insertCell(4);
    cell4.innerHTML = `<a onclick="onEdit(this)">Edit</a>
                       <a onclick="onDelete(this)">Delete</a>` ;

}

function resetForm(){
    document.getElementById("fullName").value ="";
    document.getElementById("favoriteColor").value = "";
    document.getElementById("hobby").value = "";
    document.getElementById("occupation").value = "";
    selectedRow= null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value =selectedRow.cells[0].innerHTML;
    document.getElementById("favoriteColor").value =selectedRow.cells[1].innerHTML;
    document.getElementById("hobby").value =selectedRow.cells[2].innerHTML;
    document.getElementById("occupation").value =selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.favoriteColor;
    selectedRow.cells[2].innerHTML = formData.hobby;
    selectedRow.cells[3].innerHTML = formData.occupation;
}

function onDelete(td){
    if(confirm('Are you sure to delete this record ?')){
    row = td.parentElement.parentElement;
    document.getElementById("nameList").deleteRow(row.rowIndex);
    resetForm();
    }
}