function populateList(pr)
{
    var ul = document.getElementById("dynamic-list");
    
    var li = document.createElement("li");
    
    
    for(i = 0; i < pr.length; i++)
    {
        li.setAttribute('id', pr.value);
        li.appendChild(document.createTextNode(pr[i].value));
        ul.appendChild(li);
    }
    

}

/*
function getRepos(url, callback)
{
    httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function() {
        if(httpReq.readyState == 4 && httpReq.status == 200) 
            callback(httpReq.responseText); 
    }
    
    httpReq.open("GET", url, true);
    httpReq.send(null);
}
*/
function httpGet(url)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            populateList(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
}

window.onload = function () {
    httpGet("https://api.github.com/users/Nightsmore/repos")
    
    
}
