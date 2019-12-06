class CoffeMaker{
    constructor(property){
        this.property = property
    }
    on(){
        console.log('ON: property')
    }
    off(){
        console.log('OFF: property')
    }
}

class DripCoffeMaker extends CoffeMaker{
    constructor(property){
        super(property)
    }
    filter(){
        console.log('Filter: property')
    }
}

class CarobCoffeMaker extends DripCoffeMaker{
    constructor(property){
        super(property)  
    }
    carob(){
        console.log('Carob: property')
    }
}

let myCoffeMachine = new CarobCoffeMaker('Property name')
console.log(myCoffeMachine)

myCoffeMachine.on()
myCoffeMachine.off()
myCoffeMachine.filter()
myCoffeMachine.carob()