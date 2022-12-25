// 53. Asinhroni JS Dzemil
// 54. cas sam zaboravio laptop,radili smo promise

// 55. 1.

// for (let i = 0;i<10;i++) {
//     setTimeout(()=>console.log(i),0)
// }

// // promenjive preko var su global scope promenjive
// for (var i = 0;i<10;i++) {
//     setTimeout(()=>console.log(i),0)
// }


// primer sa intervjua

// fetch- asinhrona js funkcija za uzimanje podataka

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response)=> response.json())
//   .then((title)=>{
//     title.forEach((title)=> console.log(title.title))
//   })
//   .then((err)=> console.log(err))

// Pravljenje asinhrone funkcje:

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return users
}

getUsers().then((users)=> console.log(users))