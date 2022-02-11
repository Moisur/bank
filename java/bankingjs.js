/* Deposit Common Function  */
function youmaney(Deposit){
    const Depositinput =document.getElementById(Deposit);
    const  inputvalue = parseFloat(Depositinput.value);
    Depositinput.value ='';
    return inputvalue;
}
function carentblances(){
    const Balance = document.getElementById("Balance-add");
    const Balancevalue =parseFloat(Balance.innerText);
    return Balancevalue;  
}
function youmaneyadd(Deposit,addvalue){
    const Depositnumber = document.getElementById(Deposit);
    const numbervalue = parseFloat(Depositnumber.innerText);
    Depositnumber.innerText = numbervalue + addvalue;
}
function updatedara(inputvalue,add){
    const Balance = document.getElementById("Balance-add");
    const Balancevalue =  carentblances()
    if(add == true){
        Balance.innerText =  Balancevalue + inputvalue;
    }
    else{
        Balance.innerText =  Balancevalue - inputvalue;
    } 
}
 /* Deposit area */
function depositbutton(){
    const inputvalue = youmaney("Deposit-input");
    if(inputvalue > 0){
        youmaneyadd("Deposit-number",inputvalue);
        updatedara(inputvalue,true);
    }   
}
function Withdrawbutton(){
    const Withdrawinputvalue = youmaney("Withdraw-input");
    const dekhikiacejibone = carentblances();
    if(Withdrawinputvalue > 0){
        youmaneyadd("Withdraw-number",Withdrawinputvalue);
        updatedara(Withdrawinputvalue,false)
    }
    if( Withdrawinputvalue > dekhikiacejibone){
       confirm("Vai apanr Blances to kom ki korbe vabo vai")
    }
}