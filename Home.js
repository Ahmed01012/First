document.addEventListener("DOMContentLoaded", function(event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
      


    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });


// show data in sow table
// table this will sow in show table > table , tablee n tableee
function table(){
    x=document.getElementById("showtable")
    show=document.getElementById("showtab")
    if(x.style.display="none"){
        x.style.display="block"
        document.getElementById("showtablee").style.display="none"
        document.getElementById("showtableee").style.display="none"

        show=innerHTML=x
    }
}
function tablee(){
    x=document.getElementById("showtablee")
    show=document.getElementById("showtab")
    if(x.style.display="none"){
        x.style.display="block"
        document.getElementById("showtable").style.display="none"
        document.getElementById("showtableee").style.display="none"
        show=innerHTML=x
    }
}
function tableee(){
    x=document.getElementById("showtableee")
    show=document.getElementById("showtab")
    if(x.style.display="none"){
        x.style.display="block"
        document.getElementById("showtable").style.display="none"
        document.getElementById("showtablee").style.display="none"
        show=innerHTML=x
    }
}




