var queryUrl = 'https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather';

// Perform a GET request after entering zipcode
function GetData(){
    d3.json(queryUrl, function(data) {
      GetInformation(data)
    });
}

// Retrieve weather information
function GetInformation(data){
    //City and State
    var city = data.today.city;
    var state = data.today.state;
    //Current Temperature
    var curr_temp = data.today.temperature;
    //High and Low Temp
    var high_temp = data.today.highTemperature;
    var low_temp = data.today.lowTemperature;
    //Icon of Current Weather
    var icon_link = data.today.iconLink;
    //Short Description of Current Weather
    var curr_weath_descr =  data.today.description;
}

//Put info on html
function DisplayData(info){

}

function disableSubmit() {
    document.getElementById("submit").disabled = true;
}

function activateButton(element) {
    if(element.checked) {
        document.getElementById("submit").disabled = false;
    }
    else  {
        document.getElementById("submit").disabled = true;
    }
}
