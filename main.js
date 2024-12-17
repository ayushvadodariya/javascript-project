document.addEventListener("DOMContentLoaded", function () {
    function show() {
        let name = document.getElementById("myName").value;
        let email = document.getElementById("myEmail").value;
        let dob = document.getElementById("myDOB").value;
        let division = document.getElementById("myDivision").value; 
        let enrollNumber = document.getElementById("myEnroll").value;
        let city = document.getElementById("myCity").value;

        console.log({ name, email, dob, division, enrollNumber, city });

        document.getElementById("thankYouMessage").style.display = "block";
    }

    document.getElementById("mybutton").addEventListener("click", show);
});