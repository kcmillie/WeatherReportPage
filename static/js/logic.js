var queryUrl = 'https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather';

function GetSignups(){
    var body = d3.select("body")
        .attr("onload","disableSubmit()");

    var form = d3.select("form")
        .attr('id', 'myForm')
        .on('submit',ShowInfo);

    form.append("h1").text("See your local weather!");

    form.append("span")
        .attr("id","zipcodename")
        .text("Input Zipcode: ");

    form.append("br");

    form.append("input")
        .attr("id", "inputform")
        .attr('type','text')
        .attr('name','zipcode')
        .attr('required',"required");

    form.append("br");

    var checkbox = form.append('input')
        .attr('type','checkbox')
        .attr('name','terms')
        .attr('id','terms')
        .attr('onchange','activateButton(this)');

    form.append('label').html("Agree to <a href='#'>Legal Provisions & Terms </a>")

    var label = document.createElement('label')
    label.htmlFor = "id";
    label.appendChild(document.createTextNode('text for label after checkbox'));

    form.append("br");

    form.append("input")
        .attr('type',"submit")
        .attr('id','submit')
        .attr('value','Sign Up!');
}

function ShowInfo(){
    d3.event.preventDefault()
    var form = d3.select("form").html("");

    d3.json(`/click`).then(function(){
        d3.json(queryUrl).then((data) => {
            GetInformation(data);
        });
    });
}

// Retrieve weather information
function GetInformation(data){
    console.log('getting information for temp')
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

    var info = d3.select("#userinfo")

    var location = info.append("span")
        .attr("class","info")
        .text(city + ', ' + state);

    var temp_table = info.append("table")
        .attr("class", "temptable")
    var tbody = temp_table.append("tbody")
    var head = tbody.append("thead").text("Temperatures");
    var row = tbody.append("tr");
        row.append("td").attr("class", "temptitle").text("Current");
        row.append("td").attr("class", "value").text(curr_temp);
        row.append("td").append("img").attr("src", icon_link)
        row.append("td").text(curr_weath_descr);
    var row = tbody.append("tr");
        row.append("td").attr("class", "temptitle").text("High");
        row.append("td").attr("class", "value").text(high_temp);
    var row = tbody.append("tr");
        row.append("td").attr("class", "temptitle").text("Low");
        row.append("td").attr("class", "tempvalue").text(low_temp);
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

GetSignups();
