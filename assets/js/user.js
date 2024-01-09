

function registration(e) {
    e.preventDefault(); // Prevent form submission

    // Get form inputs
    const name = document.getElementById("name").value;
    const mobileNumber = document.getElementById("mobile_number").value;
    const district = document.getElementById("district").value;
    const town = document.getElementById("town").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

   
 // Check if password and confirm_password match
 if (password !== confirmPassword) {
    document.getElementById("confirm_password").focus();
    alert("Passwords do not match.");
    return; // Stop the registration process if passwords don't match
}




const user_list = JSON.parse(localStorage.getItem("user_list")) || [];
const exist =
    user_list.length &&
    user_list.some(
        (data) =>
             data.name.toLowerCase() === name.toLowerCase() ||
            data.mobile_number === mobileNumber
    );

    let user={
        name,
        mobileNumber,
        district,
        town,
        password,
        confirmPassword,
    };
if (!exist) {

    document.querySelector("form").reset();
    user_list.push(user);
    localStorage.setItem("user_list", JSON.stringify(user_list));
    console.log(localStorage.getItem("user_list"));
    document.querySelector("form").reset();
    document.getElementById("name").focus();
    document.getElementById("mobile_number").focus();
    alert("Account created successfully");
    location.href = "./FarmerLogInPage.html";
    
 
} else {

    alert(
        "Sorry, the user already exists! Try with a different phone number "
    );
}
};