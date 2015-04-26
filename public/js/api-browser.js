var input = document.getElementsByTagName('input')[0];

var makeReq = function(e) {  
  
  if (e) {
    e.preventDefault();  
  }

  var host = "http://45.55.231.22:8080";  

  url = host + input.value;

  var output = document.getElementsByClassName('output')[0];
  console.log(output);
  function reqListener () {
    var json_string = JSON.stringify(JSON.parse(this.responseText), null, 4);
    window.res = this.responseText;
    output.innerHTML = json_string;
  }

  var request = new XMLHttpRequest();
  request.onload = reqListener;

  console.log(url);

  request.open("get", url, true);
  request.setRequestHeader('Content-Type', 'application/vnd.api+json');
  request.setRequestHeader('Accept', 'application/vnd.api+json');
  window.req= request;
  request.send();
};

//Immediately request /ashleygwilliams
(makeReq)();

// On click, make a new request
var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', makeReq, false);
