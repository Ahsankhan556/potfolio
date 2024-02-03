function toggleSidebar() {
    var bar = document.getElementById("openSidebar");
    var sideBar = document.getElementById("side-bar");

    if(sideBar.style.display === "block"){
        sideBar.style.display = "none";
    } else{
        sideBar.style.display = "block";
    }
   
}
   



document.getElementById('openSidebar').addEventListener('click', toggleSidebar);


