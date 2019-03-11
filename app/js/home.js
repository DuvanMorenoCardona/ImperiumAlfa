function viewday(evt, viewname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("uv-calendar");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("uv-btn-views");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(viewname
).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();