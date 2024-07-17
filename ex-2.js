let books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let index = -1;
  for (let i = 0; i < books.length; i++) {
    if (searchTitle === books[i].title) {
      index = i;
    }
  }
  return index;
}

console.log(findBookIndex(books, "Gone with the Wind"));
// Big O เป็น On เพราะเปนลิเนียร์เซิจ ความซับซ้อนจะขึ้นอยู่กับข้อมูล
