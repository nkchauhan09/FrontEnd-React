console.log('This is async_await')

async function func(){
    console.log('inside function')
    const response = await fetch('https://api.github.com/users')
    console.log('before response')
    const users = await response.json()
    console.log('users resolved')
    return users
}

console.log('before calling')
let a = func()
console.log('after calling')
console.log(a)
a.then(data => console.log(data))
console.log('last line')