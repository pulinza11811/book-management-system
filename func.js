let books = [];

function addBook() 
{
    let title = prompt("กรอกชื่อหนังสือ:");
    let author = prompt("กรอกผู้เขียน:");
    let year = prompt("กรอกปีที่พิมพ์:");
    let price = prompt("กรอกราคา:");

    let total = 
    {
        name: title,
        author: author,
        year: year,
        price: price
    };
    console.log(total);
    books.push(total);
    console.log(books);
}

function viewBooks() 
{
    let view = ''
    books.forEach(function(book) 
    {
        view += "<p>ชื่อหนังสือ: " + book.name + "<br>";
        view += "ผู้เขียน: " + book.author + "<br>";
        view += "ปีที่พิมพ์: " + book.year + "<br>";
        view += "ราคา: " + book.price + "</p>";
    });
    document.getElementById("view").innerHTML = view;
}

function editBook() 
{
    let i = prompt("ใส่ลำดับที่ต้องการแก้ไข เริ่มนับจาก 0 คือ Array ช่องที่ 1");
    
    if (i >= 0 && i < books.length) 
    {
        books[i].name = prompt("กรอกชื่อหนังสือใหม่:");
        books[i].author = prompt("กรอกชื่อผู้เขียนใหม่:");
        books[i].year = prompt("กรอกปีที่พิมพ์ใหม่:");
        books[i].price = prompt("กรอกราคาใหม่:");
    }
}

function deleteBook() 
{
    let i = prompt("ใส่ลำดับที่ต้องการลบ เริ่มนับจาก 0 คือ Array ช่องที่ 1");

    if (i >= 0 && i < books.length) 
    {
        books.splice(i, 1);
    }
}
