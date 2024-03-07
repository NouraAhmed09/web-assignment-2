function makeRequest() {
  
    var model = document.getElementById('model').value;
    reset();
    var error_label = document.getElementById('error');
    var xhr = new XMLHttpRequest();
                                     



xhr.open('GET', 'https://api.api-ninjas.com/v1/cars?model=' + model, true);
xhr.setRequestHeader('X-Api-Key', 'MNNDsZnytcRtVXavHATSSe8jyCHNaV4x67hNNx2B');
xhr.setRequestHeader('Content-Type', 'application/json');
var data;

xhr.onload = function() {
    if (xhr.status === 200) {
      // store result into data as json array
        data = JSON.parse(xhr.responseText);
       if(data.length<=0){
        error_label.textContent="No Data for this Model";
       }
       else{
        error_label.textContent="";
       
       }


for (let i =0;i<data.length;i++){  
document.getElementById('response').innerHTML += "<table>"+
"<tr><td>City MPG</td><td>"+data[i].city_mpg+"</td></tr>"+
"<tr><td>Class</td><td>"+data[i].class+"</td></tr>"+
"<tr><td>Combination MPG</td><td>"+data[i].combination_mpg+"</td></tr>"+
"<tr><td>Cylinders</td><td>"+data[i].cylinders+"</td></tr>"+
"<tr><td>Displacement</td><td>"+data[i].displacement+"</td></tr>"+
"<tr><td>Drive</td><td>"+data[i].drive+"</td></tr>"+
"<tr><td>Fuel Type</td><td>"+data[i].fuel_type+"</td></tr>"+
"<tr><td>Highway MPG</td><td>"+data[i].highway_mpg+"</td></tr>"+
"<tr><td>Make</td><td>"+data[i].make+"</td></tr>"+
"<tr><td>Model</td><td>"+data[i].model+"</td></tr>"+
"<tr><td>Transmission</td><td>"+data[i].transmission+"</td></tr>"+
"<tr><td>Year</td><td>"+data[i].year+"</td></tr>"+
"<table><br/><br/><br/><br/>";
}
    } else {
      error_label.textContent="No Data for this Model";
    }
};

xhr.onerror = function() {
    console.error('Request failed');
};

xhr.send();
  }
  function reset(){
    document.getElementById('response').innerHTML = "";
    document.getElementById('model').value = "";
    document.getElementById('error').textContent="";

    
  }