const divIn = document.querySelector(".txt_item");

function reqListener() {
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest(); //New request object
var text;
oReq.onload = function() {
    //This is where you handle what to do with the response.
    //The actual data is found on this.responseText
    text = (JSON.parse( this.responseText)); //Will alert: 42
};
oReq.open("get", "/php/parser.php", true);
//                               ^ Don't block the rest of the execution.
//                                 Don't wait until the request finishes to 
//                                 continue.
oReq.send();

function goText(){
    divIn.innerHTML = text;
}


