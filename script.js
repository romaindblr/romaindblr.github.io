window.onscroll = function (){

    if (document.documentElement.scrollTop > 15){
        document.getElementById("navbar").style.background = "#C21523";
        document.getElementById("navbar").style.padding = "0px 0px";
    }
    else{
        document.getElementById("navbar").style.background = "";
        document.getElementById("navbar").style.padding = "10px 0px";
    }
}

function sendEmail(){
    Email.send({
        Host: "smtp.gmail.com",
        Username : "emailjs107@gmail.com",
        Password : "#Emailjs12#",
        To : "romaindv71@gmail.com",
        From :"emailjs107@gmail.com",
        Subject : "test",
        Body : "Name: " + document.getElementById("name").ariaValueText
            + "<br> Email: " + document.getElementById("email").ariaValueText
            + "<br> Message: " + document.getElementById("message").ariaValueText,
    }).then(
        message => alert("email sent successfully")
    )
}
