const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');
console.log(id)
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.status == 200) {
      var myArr = JSON.parse(this.responseText);
    //   console.log(myArr);
      myEditFunc(myArr);
       
    }
  };
xhttp.open("GET", "http://localhost:3000/employees/"+id, true );
xhttp.setRequestHeader('Content-Type', 'application/json');
xhttp.send(id);
function myEditFunc(myArr){
console.log(myArr);
document.getElementById("name").value = myArr.name;
document.getElementById("email").value = myArr.emailAddress;
document.getElementById("mno").value = myArr.mobile;
document.getElementById("address").value = myArr.address;
}
function onEditFormSubmit() {
    let formData={};
    let xhttp = new XMLHttpRequest();
    formData["name"]=document.getElementById("name").value;
    formData["emailAddress"]=document.getElementById("email").value;
    formData["mobile"]=document.getElementById("mno").value;
    formData["address"]=document.getElementById("address").value;
    console.log(formData,"test");
    let allData = JSON.stringify(formData);  
    xhttp.open("PUT", "http://localhost:3000/employees/"+id, true );
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(allData);
    
}