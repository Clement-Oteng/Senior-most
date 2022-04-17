let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function validate(event){
    event.preventDefault();

    const firstName = event.target.fname.value;
    const lastName = event.target.lname.value;
    const address = event.target.address.value;
    const no = event.target.no.value;
    const yes = event.target.yes.value;
    const medicalHistory = event.target.medication.value;

    console.log(address);

    if (firstName === "" || lastName === "" || address ===""){
        alert("Input can not be empty. Please enter any input");
    }   else  if (yes === "yes" && medicalHistory === ""){
        alert("Please indicate the medication you are takingss");
    }    else  if (no === "no" && medicalHistory === ""){
        alert("You can't type in the textbox. Since you selected \"No\".");
    }    else  if (firstName.lenght >= 50 || lastName.lenght >= 50){
        alert("Your name is too long. It should't be more than 50 characters");
    }   else if(address.lenght >= 300){
        alert("Your address is too long. It should not exceed 300 characters")
    }else{
        alert(`
        First Name: ${firstName}
        Last Name: ${lastName}
        Address: ${address}
        Medication: ${medicalHistory}
        `)
    }   
});