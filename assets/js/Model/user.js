class user{

    constructor(name,mobile_number,district,town,password){
        this.name = name;
        this.mobile_number = mobile_number;
        this.district = district;
        this.town =town;
        this.password = password;
    }


    //getter setter method for constructor user

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    getMobileNumber(){
        return this.mobile_number;
    }
    setMobileNumber(mobile_number){
        this.mobile_number = mobile_number;
    }

    getDistrict(){
        return this.district;
    }
    setDistrict(district){
        this.district = district;
    }

    getTown(){
        return this.town;
    }
    setTown(town){
        this.town = town;
    }

    getPassword(){
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
}

module.exports = user;
