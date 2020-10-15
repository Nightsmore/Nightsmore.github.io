function populateList(pr)
{
    console.log(pr[8]);
    var ul = document.getElementById("dynamic-list");
    
    var li = document.createElement("li");
    document.createElement("li")
    
   
    for(let i = 0; i < pr.length; i++)
    {
        console.log(pr)
        //li.setAttribute('id', pr.value);
        //li.appendChild(document.createTextNode(pr.value));
        //ul.appendChild(li);
        ul.innerHTML += "<li><a href=" + pr[i].html_url + "/>" + pr[i].name + " | " +  pr[i].description + "</li>";
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
    //readyState value has made me upsetti speghetti.
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
    
    $(function() 
    {
        $(window).scroll(function()
        {
            var mass = Math.max(0.3, 1- 0.003*$(this).scrollTop());

            $('.title').css('transform', 'scale('+ mass + ')');
        })
    })
   
}
