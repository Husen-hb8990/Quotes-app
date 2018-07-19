var jsonString = '';
  
function random(){
  
  var xhttp = new XMLHttpRequest();
  
  if(jsonString == ''){
  
	xhttp.open("GET","quotes.txt", true);
	xhttp.send();
  
  }else {
  
  var json = JSON.parse(jsonString); 
	
	var jsonArray = json.data; 
	
	var length =jsonArray.length;
	var n=Math.round(Math.random()*(length-1));
	var quotes = jsonArray[n].quote;
	document.getElementById("demo").innerHTML = quotes;
  
  }
  
	xhttp.onreadystatechange = function() {
  
    if (this.readyState == 4 && this.status == 200) {
      
    jsonString = this.responseText;
    
	var json = JSON.parse(jsonString); 
	
	var jsonArray = json.data; 
	
	var length =jsonArray.length;
	var n=Math.round(Math.random()*(length-1));
	var quotes = jsonArray[n].quote;
	document.getElementById("demo").innerHTML = quotes;
	
	}
  };
  
  
  
  
}
function tweet(){
var share = document.getElementById("demo").innerText;
var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(share);
    
  window.open(tweetUrl);
}


function test(){


var xhttp = new XMLHttpRequest();
  
  
	xhttp.open("GET","Hello.php", true);
	xhttp.send();
  
  xhttp.onreadystatechange = function() {
  
    if (this.readyState == 4 && this.status == 200) {
      
     var  jsonString = this.responseText;
	document.getElementById("demo").innerHTML = jsonString;
	
	}
  };

}
