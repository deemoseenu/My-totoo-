class UserValidator {

    static validateRegister(user){
      if(user.name == null || user.name == ""){
        throw new Error("Invalid Name");
      }
      if(user.mobile_number == null || user.mobile_number == ""){
        throw new Error("Invalid Mobile Number");
      }
      if(user.district == null || user.district == ""){
        throw new Error("Invalid District");
      }
      if(user.town == null || user.town == ""){
        throw new Error("Invalid Town");
      }
      if(user.password == null || user.password == ""){
        throw new Error("Invalid Password");
      }
    }

    static validateLogin(user){

        if(user.mobile_number == null || user.mobile_number == ""){
            throw new Error("Invalid Mobile Number");
          }
         if(user.password == null || user.password == ""){
            throw new Error("Invalid Password");
          }
    }

    static validateUpdate(user){
      if(user.name == null || user.name == ""){
        throw new Error("Invalid Name");
      }
      if(user.district == null || user.district == ""){
        throw new Error("Invalid District");
      }
      if(user.town == null || user.town == ""){
        throw new Error("Invalid Town");
      }
    }
  
  }
