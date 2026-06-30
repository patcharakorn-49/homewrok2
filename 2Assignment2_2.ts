 
type Book = [title: string, isBorrowed: boolean];

let books: Book[] = [
    ["The Great Gatsby", true],
    ["To Kill a Mockingbird", false],
    ["1984", true],
    ["Pride and Prejudice", false],
    ["The Catcher in the Rye", false]
];

let borrowedCount = 0;
let availableCount = 0;

for (let book of books) {

    let title = book[0];
    let isBorrowed = book[1];

    if (isBorrowed === true) {
        console.log(`${title} - Status: Borrowed`);
        borrowedCount++;
    } 
    else {
        console.log(`${title} - Status: Available`);
        availableCount++;
    }
}

console.log(`Total Available Books: ${availableCount}`);
console.log(`Total Borrowed Books: ${borrowedCount}`);