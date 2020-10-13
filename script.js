function populateList(v1)
{
    var ul = document.getElementById("dynamic-list");
    var pr = v1
    var li = document.createElement("li");
    
    

    foreach(e in v1)
    {
        li.setAttribute('id', pr.value);
        li.appendChild(document.createTextNode(e.value));
        ul.appendChild(li);
    }

}

function getRepos(url)
{
    httpReq = new XMLHttpRequest();
    httpReq.open("GET", url, false);
    res = httpReq.send() 
    return res;
}

window.onload = function () {
    var v = getRepos("https://api.github.com/users/Nightsmore/repos")
    populateList(v);
}
