// const array =[1,2,3,4,5]
// console.log(array)

// console.log(array[0]);
// console.log(array[4]);

// array.shift()
// console.log(array);

// const initialvalue = 0;

// const sum = array.reduce((accumulator,currentvale)=>{
//     return accumulator +currentvale;
// },initialvalue);

// console.log(sum);

// array.forEach(num=>{
//     process.stdout.write(num," ");
// });

const arr = [1, 2, 3, 4, 5];
let result = "";

arr.forEach((element) => {
  result += element + " ";
})

console.log(result);


for(let i=0;i<4;i++){
    let row = "";
    for(let j =0;j<4;j++){
        row+= j+" ";
    }
    console.log(row.trim());
}

let marks = [
    ['Megh', 20,60, 'A'],
    ['Sam', 10,52,'B'],
    ['Spidey', 28, 43, 'A']
]

console.table(marks) //* for better understanding

console.log(marks[0][0])
console.log(marks[0][1])
console.log(marks[0][2])
console.log(marks[0][3])