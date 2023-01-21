//To get the correct stroke-dasharray
const hello = document.querySelectorAll('.hello path')

for (let i = 0; i<hello.length; i++){
    console.log(`Letter ${i} is ${hello[i].getTotalLength()}`);
}