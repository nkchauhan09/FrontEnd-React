function name(fullname)
{
    return fullname.firstname + fullname.lastname;
}

console.log(
    name({firstname : "Neeraj", lastname : "Chauhan"})
    );