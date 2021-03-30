var car = {
    make : "volvo",
    speed : 160,
    engine : {
        size : 2.0,
        make : "bmw", 
        fuel : "petrol",
        pistons : [{maker : "bmw"}, {maker : "bmw"}]
    },
    drive : function(){return "drive";}
};

var array = [
    "string", 
    100,
    ["embed", 200],
    {car : "ford"},
    function(){return "Drive car";}
];

console.log(car.make);