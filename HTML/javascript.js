var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var mobileError = document.getElementById('mobile-error');
var dateError = document.getElementById('date-error');
var timeError = document.getElementById('time-error');
var seatesError = document.getElementById('seates-error');
var msgError = document.getElementById('message-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length ==0) {
    nameError.innerHTML = 'Name is Required';
    return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
    nameError.innerHTML = 'write full Name';
    return false;
}
nameError.innerHTML = '<a href="https://www.flaticon.com/free-icons/accept" title="accept icons">Accept icons created by Freepik - Flaticon</a>';
return true;
}
function validateNo(){
var phone = document.getElementById('contact-phone').value;
if(phone.length == 0){
    phoneError.innerHTML ='enter phone number';
    return false;
}
if(phone.length != 10){
    phoneError.innerHTML =' phone number should be 10 digit';
    return false;
}
if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML ='enter digits only';
    return false;
}
phoneError.innerHTML = '<a href="https://www.flaticon.com/free-icons/accept" title="accept icons">Accept icons created by Freepik - Flaticon</a>';
return true;
}
function validateEmail(){
    var email= document.getElementById('contact-No').value;
    if(email.length == 0){
        emailError.innerHTML ='enter your Email';
        return false;
    }
    if(!phone.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za]*[\.][a-z] {2,4} $/)){
        emailError.innerHTML ='invalid email';
        return false;
    }
    emailError.innerHTML = '<a href="https://www.flaticon.com/free-icons/accept" title="accept icons">Accept icons created by Freepik - Flaticon</a>';
    return true;
}
function validateTime(){
    var time= document.getElementById('entertime').value;
    if(time.length == 0){
        timeError.innerHTML ='enter your message';
        return false;
        

       
    }
    emailError.innerHTML = '<a href="https://www.flaticon.com/free-icons/accept" title="accept icons">Accept icons created by Freepik - Flaticon</a>';
        return true;
}
function validateDate(){
    var date= document.getElementById('enterdate').value;
    if(date.length == 0){
        dateError.innerHTML ='enter Date';
        return false;
      
    }
    emailError.innerHTML = '<a href="https://www.flaticon.com/free-icons/accept" title="accept icons">Accept icons created by Freepik - Flaticon</a>';
    return true; 
}
function validatemessage(){
    var message= document.getElementById('entermessage').value;
    if(message.length == 0){
        messageError.innerHTML ='enter your message';
        return false;
       
    }
    messageError.innerHTML = '<a href="https://www.flaticon.com/free-icons/accept" title="accept icons">Accept icons created by Freepik - Flaticon</a>';
    return true; 
}