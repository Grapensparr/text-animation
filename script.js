const hello = document.querySelectorAll('.hello path')

console.log(hello)

for (let i = 0; i<hello.length; i++){
    console.log(`Letter ${i} is ${hello[i].getTotalLength()}`);
}