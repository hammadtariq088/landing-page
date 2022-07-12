function submitForm() {
    var fname = document.forms.RegForm.fname.value;
    var lname = document.forms.RegForm.lname.value;
    var clinicname = document.forms.RegForm.clinicname.value;
    var email =document.forms.RegForm.email.value;
    var number = document.forms.RegForm.number.value;
    var address = document.forms.RegForm.address.value;
    var special = document.forms.RegForm.specialize.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regPhone=/^\d{11}$/;                                        // Javascript reGex for Phone Number validation.
    var regName = /\d+$/g;                                    // Javascript reGex for Name validation

    if (fname == "" || regName.test(fname)) {
        window.alert("Please enter your First Name properly.");
        fname.focus();
        return false;
    }

    if (lname == "" || regName.test(lname)) {
        window.alert("Please enter your Last Name properly.");
        lname.focus();
        return false;
    }

    if (clinicname == "" || regName.test(clinicname)) {
        window.alert("Please enter your Clinic Name properly.");
        clinicname.focus();
        return false;
    }

    if (address == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }
     
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (number == "" || !regPhone.test(number)) {
        alert("Please enter valid phone number.");
        number.focus();
        return false;
    }

    if (special.selectedIndex == -1) {
        alert("Please choose your specialization.");
        special.focus();
        return false;
    }
    return true;
}
