function handleValueChange() {
    if (!/[^a-zA-Z]/.test(document.getElementById('user-name').value) ) {
        var x = document.getElementById('use');
        x.innerHTML = 'String does not contain number';
        x.style.color="red"
    } else {
      var x = document.getElementById('use');
      x.innerHTML = 'String does  contains number';
      x.style.color="rgb(5, 99, 5)"

    }
  }
function save(){
    if(document.getElementById("first-name").value.length>=2){
                    // for border
        document.getElementById("first-name").style.border="2px solid rgb(5, 99, 5)" 

        
                    //for alert
        // document.getElementById("suc1").style.display="block"    
        // document.getElementById("dan1").style.display="none"

                    // for star
        // document.getElementById("star").style.display="block "
        // document.getElementById("d1").style.display=" flex"
        // document.getElementById("star").style.color=" green"

        // for pargraph under input
        document.getElementById("fir").innerHTML="success "
        document.getElementById("fir").style.color="rgb(5, 99, 5)"
    }
    else{
                    // for border
        document.getElementById("first-name").style.border="2px solid red"

                    //for alert
        // document.getElementById("suc1").style.display="none"
        // document.getElementById("dan1").style.display="block"

                     // for star
        // document.getElementById("star").style.display="block "
        // document.getElementById("d1").style.display=" flex"
        // document.getElementById("star").style.color="red"

                // for pargraph under input
                document.getElementById("fir").innerHTML="please inter your firstname "
                document.getElementById("fir").style.color="red"

    }
    if(document.getElementById("last-name").value.length>=1){
                    // for border
        document.getElementById("last-name").style.border="2px solid rgb(5, 99, 5)" 

        
                    //for alert
        // document.getElementById("suc2").style.display="block"    
        // document.getElementById("dan2").style.display="none"

                    // for star
        // document.getElementById("star1").style.display="block"
        // document.getElementById("d2").style.display=" flex"
        // document.getElementById("star1").style.color=" green"

                // for pargraph under input
                document.getElementById("las").innerHTML="success "
                document.getElementById("las").style.color="rgb(5, 99, 5)"
    }
    else{
                    // for border
        document.getElementById("last-name").style.border="2px solid red"

                    //for alert
        // document.getElementById("suc2").style.display="none"
        // document.getElementById("dan2").style.display="block"

                     // for star
        // document.getElementById("star1").style.display="block"
        // document.getElementById("d2").style.display=" flex"
        // document.getElementById("star1").style.color="red"     
        
                        // for pargraph under input
                        document.getElementById("las").innerHTML="please inter your lastname "
                        document.getElementById("las").style.color="red"
        
    }
    
    if(document.getElementById("user-name").value && document.getElementById("user-name").value.includes("-")){
                    // for border
        document.getElementById("user-name").style.border="2px solid rgb(5, 99, 5)" 

        
                    //for alert
        // document.getElementById("suc3").style.display="block"    
        // document.getElementById("dan3").style.display="none"

                    // for star
        // document.getElementById("star2").style.display="block"
        // document.getElementById("d3").style.display=" flex"
        // document.getElementById("star2").style.color=" green"

                // for pargraph under input
                document.getElementById("use").innerHTML="success "
                document.getElementById("use").style.color="rgb(5, 99, 5)"
}
    else{
                       // for border
        document.getElementById("user-name").style.border="2px solid red"

                    //for alert
        // document.getElementById("suc3").style.display="none"
        // document.getElementById("dan3").style.display="block"

                     // for star
        // document.getElementById("star2").style.display="block"
        // document.getElementById("d3").style.display=" flex"
        // document.getElementById("star2").style.color="red" 
        
                        // for pargraph under input
                        document.getElementById("use").innerHTML="user name must be mora than 10 contain (alfa) and (number) and (-) "
                        document.getElementById("use").style.color="red"
                        
        
    }
    if(document.getElementById("password").value.length>=10){
                    // for border
        document.getElementById("password").style.border="2px solid rgb(5, 99, 5)" 

        
                    //for alert
        // document.getElementById("suc4").style.display="block"    
        // document.getElementById("dan4").style.display="none"

                    // for star
        // document.getElementById("star3").style.display="block"
        // document.getElementById("d4").style.display=" flex"
        // document.getElementById("star3").style.color=" green"

                // for pargraph under input
                document.getElementById("pas").innerHTML="success "
                document.getElementById("pas").style.color="rgb(5, 99, 5)"
    }
    else{
                           // for border
        document.getElementById("password").style.border="2px solid red"

                    //for alert
        // document.getElementById("suc4").style.display="none"
        // document.getElementById("dan4").style.display="block"

                     // for star
        // document.getElementById("star3").style.display="block"
        // document.getElementById("d4").style.display=" flex"
        // document.getElementById("star3").style.color="red"     
        
                        // for pargraph under input
                        document.getElementById("pas").innerHTML="create your password "
                        document.getElementById("pas").style.color="red"
        
    }
    if(document.getElementById("retype-password").value==document.getElementById("password").value){
                    // for border
        document.getElementById("retype-password").style.border="2px solid rgb(5, 99, 5)" 

        
                    //for alert
        // document.getElementById("suc5").style.display="block"    
        // document.getElementById("dan5").style.display="none"

                    // for star
        // document.getElementById("star4").style.display="block"
        // document.getElementById("d5").style.display=" flex"
        // document.getElementById("star4").style.color=" green"

                // for pargraph under input
                document.getElementById("ret").innerHTML="success "
                document.getElementById("ret").style.color="rgb(5, 99, 5)"
    }
    else{
                           // for border
        document.getElementById("retype-password").style.border="2px solid red"

                    //for alert
        // document.getElementById("suc5").style.display="none"
        // document.getElementById("dan5").style.display="block"

                     // for star
        // document.getElementById("star4").style.display="block"
        // document.getElementById("d5").style.display=" flex"
        // document.getElementById("star4").style.color="red"      
        
                        // for pargraph under input
                        document.getElementById("ret").innerHTML="please confirm your password  "
                        document.getElementById("ret").style.color="red"
        
    }
    if(document.getElementById("your-mail").value.includes("@")&&document.getElementById("your-mail").value.includes(".")){
                    // for border
        document.getElementById("your-mail").style.border="2px solid rgb(5, 99, 5)" 

        
                    //for alert
        // document.getElementById("suc6").style.display="block"    
        // document.getElementById("dan6").style.display="none"

                    // for star
        // document.getElementById("star5").style.display="block"
        // document.getElementById("d6").style.display=" flex"
        // document.getElementById("star5").style.color=" green"

                // for pargraph under input
                document.getElementById("mail").innerHTML="success "
                document.getElementById("mail").style.color="rgb(5, 99, 5)"
    }
    else{
                            // for border
        document.getElementById("your-mail").style.border="2px solid red"

                    //for alert
        // document.getElementById("suc6").style.display="none"
        // document.getElementById("dan6").style.display="block"

                     // for star
        // document.getElementById("star5").style.display="block"
        // document.getElementById("d6").style.display=" flex"
        // document.getElementById("star5").style.color="red"   
        
                        // for pargraph under input
                        document.getElementById("mail").innerHTML="please inter your Email "
                        document.getElementById("mail").style.color="red"
        
    }

}


// for modal

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `sign in with  ${recipient}`
    modalBodyInput.value = recipient
  })
}
