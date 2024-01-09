class userService {
    constructor() {
        // Check if user data already exists in localStorage and initialize the user array accordingly
        this.users = JSON.parse(localStorage.getItem('users')) || [];
    }

    // Method to add a new user to the array and store it in localStorage
    save(user) {
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(user));
    }

    // Method to get all users from localStorage
    findAll() {
        return this.users;
    }


    // method to serch a user in local storage and log in 
    findByMobileNumberAndPassword(mobile_number,password){

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userObj = users.find(
            (data) =>
              data.password.toLowerCase() == password.toLowerCase() &&
              data.mobile_number == mobile_number
          );
        if (userObj == null) {
          throw new Error("Incorrect login credentials");
        }
        return userObj;
    }
    update(){
        
        const users = JSON.parse(localStorage.getItem("users"));
        const unique_id = JSON.parse(localStorage.getItem("unique"));
        function login_data(e) {
          return e.mobile_number == unique_id;
        }
        const user_data = users.find(login_data);
        const index = users.indexOf(user_data);
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
      
    }

     deleteUserByMobileNumber(mobile_number) {
        let users = JSON.parse(localStorage.getItem("users"));
      
        // Check if users exist in local storage
        if (!users || !Array.isArray(users)) {
          console.log("No user data found.");
          return;
        }
      
        // Find the user to delete by mobile number
        const userToDelete = users.find((user) => user.mobile_number === mobile_number);
      
        if (!userToDelete) {
          console.log("User not found.");
          return;
        }
      
        // Get the index of the user in the array
        const index = users.indexOf(userToDelete);
      
        // Remove the user from the array
        if (index !== -1) {
          users.splice(index, 1);
      
          // Update the users data in local storage
          localStorage.setItem("users", JSON.stringify(users));
          console.log("User deleted successfully.");
        } else {
          console.log("Error deleting user.");
        }
      }
      

      
    logoutAndRedirect() {
        const confirmLogout = confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            localStorage.removeItem("unique");
            window.location.href = "../Farmer/FARMER PAGE 1.html";
        }
    }

       
    }

    

   


