function populateList(pr)
{
    
    var ul = document.getElementById("dynamic-list");
    
    for(let i = 0; i < pr.length; i++)
    {
        console.log(pr)
        //li.setAttribute('id', pr.value);
        //li.appendChild(document.createTextNode(pr.value));
        //ul.appendChild(li);
        ul.innerHTML += '<button class="collapsible">' + pr[i].name + "</button>";
        ul.innerHTML += '<div class="content">' +'<p>' + pr[i].description+ '</p>' + '</div>';
    }
    
    //<a href=' + pr[i].html_url + '/>'

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
function setCollapsibles()
{
    
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

    setCollapsibles();
    var coll = document.getElementById("dynamic-list").getElementsByClassName("collapsible");
    var j;
    console.log("here")
    console.log("length is" + coll.length)
    for (let j = 0; j < coll.length; j++) 
    {
        console.log("here too")
        coll[j].addEventListener("click", function() 
        {
            console.log(coll[j])
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight)
            {
                content.style.maxHeight = null;
            } else 
            {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    }
}


