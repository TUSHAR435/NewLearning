const mark = {
    fullname: "Mark Miller",
    mass:86,
    height: 1.80,
    calcBMI: function(){
        this.bmi =this.mass/this.height**2;
        return this.bmi
    }
};

const john ={
    fullname:"John Smith",
    mass:68,
    height:1.75,
    calcBMI: function(){
        this.bmi =this.mass/this.height**2;
        return this.bmi
}
};

mark.calcBMI();
console.log(mark.bmi)