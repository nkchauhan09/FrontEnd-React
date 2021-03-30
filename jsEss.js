function makeCoffee(sugar, milk)
{
    var inst = "Boil Water, ";
    inst += "pour into cup, ";
    inst += "add coffee, ";
    inst += "add " + sugar + " spoon of sugar, ";
    inst += "add " + milk + "% milk.";
    return inst;
}

console.log(makeCoffee(2, 20));