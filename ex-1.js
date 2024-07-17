// เรามี Array students ซึ่งบรรจุรายชื่อนักเรียน ที่มีการเรียงลำดับตามตัวอักษร และมี Variable searchStudent
// บรรจุชื่อนักเรียนที่ต้องการค้นหา
// ให้เขียน Algorithm ที่ค้นหาว่า students มี searchStudent อยู่หรือไม่
// หากมีให้เอา Index ของ searchStudent มาแสดงบนหน้าจอ
// เช่น ถ้า students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]
// และ searchStudent = "John" ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น 7
// ถ้า students = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"]
// และ searchStudent = "Andrew" ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น -1

let students1 = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];

function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = students.length - 1;
  let index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (students[mid] === searchStudent) {
      return mid;
    } else if (students[mid] < searchStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return index;
}

// ตอบคำถามตรงนี้จ้า

let searchStudent1 = "John";
console.log(findStudentIndex(students1, searchStudent1)); // Output: 7

let students2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
let searchStudent2 = "Andrew";
console.log(findStudentIndex(students2, searchStudent2)); // Output: -1

// Big O เป็น O(logn) เพราะเปนไบนารี่เซิจ เหตุผลเพราะว่าจะหารสองทำให้ข้อมูลมีขนาดลดไปเรื่อยๆ (?)
