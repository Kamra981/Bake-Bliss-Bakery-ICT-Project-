
document.getElementById("responseForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("formMessage").innerHTML = "Thank you! Your message has been sent.";
    document.getElementById("formMessage").style.color = "green";

    document.getElementById("responseForm").reset();
});
    
