// Login account 
document.getElementById("loginbutton").addEventListener("click", function(e){
    // gamailinput wrok 
    const gmailinput = document.getElementById("gmail-input");
    const gmailinputvalue = gmailinput.value;
    // passeordinput wrok 
    const passeordinput = document.getElementById("passeord-input");
    const passeordinputvalue = passeordinput.value;
    if(gmailinputvalue == "Mosiurislam411@gmail.com" && passeordinputvalue =="Mosiur411"){
        window.location.href ="banking.html"
    }
    else{
        alert("Sorry passeord erro")
    }
    gmailinput.value ='';
    passeordinput.value ='';
});