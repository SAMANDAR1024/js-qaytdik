////////////////////////////////////////  1 Misol

// const users = [
//   { name: "Ali", age: 17 },
//   { name: "Bobur", age: 22 },
//   { name: "Sardor", age: 15 },
//   { name: "Madina", age: 25 },
// ];

// const new_arr = users.filter((item) => {
//     return item.age > 18
// });
// console.log(new_arr);

////////////////////////////////////2 Misol
// const users = [
//     { name: "Ali", age: 20 },
//     { name: "Bobur", age: 22 },
//     { name: "Sardor", age: 25 }
//   ];

//   const new_arr = users.map((item)=>{
//     return item.name
//   })
//   console.log(new_arr);

////////////////////////////////////// 3 Misol
// const products = [
//     { name: "Telefon", price: 1200000 },
//     { name: "Noutbuk", price: 5000000 },
//     { name: "Dazmol", price: 400000 },
//     { name: "Sovutgich", price: 2500000 }
//   ];

//   const new_arr = products.filter((item)=>{
//     return item.price > 500000
//   })
//   console.log(new_arr);

////////////////////////////////// 4 Misol

// const students = [
//   { name: "Ali", grade: 4 },
//   { name: "Bobur", grade: 3 },
//   { name: "Madina", grade: 5 },
// ];

// const new_arr = students.map((item) => ({
//   name: item.name,
//   grade: item.grade + 1,
// }));
// console.log(new_arr);

/////////////////////////////// 5 Misol

// const names = ["ali", "bobur", "madina", "sardor"];

// const new_arr = names.map(item => item.toUpperCase())

// console.log(new_arr);

////////////////////////////// 6 Misol

// const products = [
//   { name: "Telefon", price: 1200000 },
//   { name: "Noutbuk", price: 5000000 },
//   { name: "Dazmol", price: 400000 },
// ];

// const chegirma = products.map((item) => ({
//   name: item.name,
//   price: item.price * 0.9,
// }));

// console.log(chegirma);

///////////////////////////////// 7 Misol

// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Bobur", age: 22 },
//   { name: "Anvar", age: 25 },
//   { name: "Madina", age: 18 },
// ];

// const new_arr = users.filter((item) => {
//     return item.name.includes('A')
// });
// console.log(new_arr);

////////////////////////////////// 8 Misol

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const new_arr = numbers.filter((item) => {
//   return item % 2 === 1;
// });
// console.log(new_arr);

/////////////////////////////// 9 Misol
// const workers = [
//     { name: "Ali", salary: 2000000 },
//     { name: "Madina", salary: 4000000 },
//     { name: "Sardor", salary: 2500000 }
//   ];

//   const new_arr = workers.map(item=>{
//     if (item.salary < 3000000) {
//         item.positon = 'Qulvatcha'
//     }
//     return item
//   })
//   console.log( new_arr);

////////////////////////////////// 10 Misol
///////// 15 % CHEGRMADA BOGANLANI CHIQARDM FQT USTOZ
// const products = [
//   { name: "Telefon", price: 1200000 },
//   { name: "Noutbuk", price: 5000000 },
//   { name: "Dazmol", price: 400000 },
//   { name: "Sovutgich", price: 2500000 },
// ];

// const new_arr = products
//   .filter((item) => item.price > 500000 )
//   .map((item) => ({
//     name: item.name,
//     price: item.price * 0.85,
//   }));

// console.log(new_arr);

//////////// Qoshimcha Misollar

/////////////// 1 Misol

// const books = [
//     { title: "Atomic Habits", pages: 320, genre: "Self-help" },
//     { title: "Clean Code", pages: 464, genre: "Programming" },
//     { title: "The Pragmatic Programmer", pages: 352, genre: "Programming" },
//     { title: "War and Peace", pages: 1225, genre: "Fiction" },
//     { title: "The Alchemist", pages: 197, genre: "Fiction" }
//   ];

//   // 500 sahifadan kam kitoblarni chiqarish
//   const shortBooks = books.filter(item=>{
//    return item.pages< 500
//   })

//   console.log(shortBooks);   

////////////////// 2 Misol

// const users = [
//   { name: "Ali", age: 22, city: "Tashkent" },
//   { name: "Madina", age: 17, city: "Samarkand" },
//   { name: "Javohir", age: 19, city: "Bukhara" },
//   { name: "Sardor", age: 16, city: "Fergana" },
// ];

// // 18 yoshdan kattalarni olish va faqat ismini chiqarish
// const adultNames = users
//   .filter((item) => item.age > 18)
//   .map((item) => item.name);
// console.log(adultNames);


////////////////// 3 Misol


// const products = [
//     { name: "Laptop", price: 1200 },
//     { name: "Phone", price: 800 },
//     { name: "Tablet", price: 500 }
//   ];
  
//   // 10% chegirma qo'llash
//   const discountedProducts = products.map(item=>({
//     name: item.name,
//     price: item.price * 0.9
//   }))
  
//   console.log(discountedProducts);
  

//////////////// 4 Misol


// const developers = [
//     { name: "Hasan", experience: 5, tech: "React" },
//     { name: "Zuhra", experience: 2, tech: "Vue" },
//     { name: "Aziz", experience: 4, tech: "Angular" },
//     { name: "Olim", experience: 1, tech: "Svelte" }
//   ];
  
//   // 3 yildan ortiq tajribaga ega dasturchilarni olish
//   const seniorDevs = developers.filter(item=> item.experience> 3).map(item=> ({
//     name:item.name,
//     tech: item.tech
//   }))
  
//   console.log(seniorDevs);
  

/////////////// 5 Misol


// const students = [
//     { name: "Ali", score: 95 },
//     { name: "Madina", score: 82 },
//     { name: "Javohir", score: 76 },
//     { name: "Sardor", score: 65 }
//   ];
  
//   // Har bir talabaga harfli baho qo'shish
//   const gradedStudents =  students.map(item=>{
//     if (item.score > 90 ) {
//         item.grade= "A"
//     }else if (item.score > 80 ) {
//         item.grade= "B"
//     }else if (item.score > 70 ) {
//         item.grade= "C"
//     }else if (item.score < 70 ) {
//         item.grade= "F"
//     }
//     return item
//   })
//   console.log(gradedStudents);
  