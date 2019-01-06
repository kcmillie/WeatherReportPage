var queryUrl = 'https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather';

function GetSignups(){
    var body = d3.select("body")
        .attr("onload","disableSubmit()");

    var form = d3.select("form")
        .attr('id', 'myForm')
        .on('submit',ShowInfo);

    form.append("h1").attr("class","display-4").
        text("Get Weather Info Everyday!");

    form.append("hr");

    form.append("span")
        .attr("id","zipcodename")
        .text("Input Zipcode: ");

    form.append("br");

    form.append("input")
        .attr("class", "col-6 form-control")
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

    form.append('label')
        .attr("id", "provandterms")
        .html("Agree to <a href='#'>Legal Provisions & Terms </a>");

    var label = document.createElement('label')
    label.htmlFor = "id";
    label.appendChild(document.createTextNode('text for label after checkbox'));

    form.append("br");

    form.append("button")
        .attr('type',"submit")
        .attr('id','submit')
        .attr("class","btn btn-primary btn-lg")
        .text('Sign Up!');

    form.append("hr");

    d3.json(queryUrl).then((data) => {
        GetInformation(data);
    });

}

function ShowInfo(){
    d3.event.preventDefault()
    var form = d3.select("form").html("");
    d3.json(`/click`).then(function(){
        form.append("h1").attr("class","display-4").
            text("Thanks for signing up!").append("hr");
    });
}

// Retrieve weather information
function GetInformation(data){
    console.log('getting information for temp')
    var info = d3.select(".userinfo")

    var location = info.append("div")
            .attr("class", "col text-center")
            .attr("id","location")
            .text(data.today.city + ', ' + data.today.state)
            .append("img")
            .attr("src", data.today.iconLink);

    info.append("div").attr("class","col text-center")
        .attr("id",'curr_temp')
        .html(parseInt(data.today.temperature) + '&#8457;');

    info.append("div").attr("class","col text-center")
        .attr("id","curr_desc")
        .text(data.today.description);

    var temp_table = info.append("table")
        .attr("class", "table table-striped")
    var tbody = temp_table.append("tbody")
    var head = tbody.append("thead").text("Temperatures");

    var row = tbody.append("tr");
        row.append("td").attr("class", "temptitle").text("High");
        row.append("td").attr("class", "value").html(parseInt(data.today.highTemperature) + '&#8457;');
    var row = tbody.append("tr");
        row.append("td").attr("class", "temptitle").text("Low");
        row.append("td").attr("class", "tempvalue").html(parseInt(data.today.lowTemperature) + '&#8457;');
}

function showmoreinfo(data){
    var humidity = data.today.humidity;
    var dew = data.today.dewPoint;
    var visibility = data.today.visibility;
    var tbody = d3.select("tbody");
    var row = tbody.append("tr")
        row.append("td").attr("class", "temptitle").text("Humidity");
        row.append("td").attr("class", "value").text(humidity);
    var row = tbody.append("tr")
        row.append("td").attr("class", "temptitle").text("Visibility");
        row.append("td").attr("class", "value").text(visibility);
    var row = tbody.append("tr")
        row.append("td").attr("class", "temptitle").text("Dew Point");
        row.append("td").attr("class", "value").text(dew);
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
