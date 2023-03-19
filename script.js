const head = document.getElementById("head")
const paragraph = document.getElementById("paragraph")
const s = document.querySelector(".s")
const wa = document.getElementById("wa")
const quote = [{
    q:"You have power over your mind – not outside events. Realize this, and you will find strength.",
    a:"Marcus Aurelius"
    },
    {
        q:"Wealth consists not in having great possessions, but in having few wants.",
        a:"Epictetus"
    },
    {
        q:"It’s not because things are difficult that we dare not venture. It’s because we dare not venture that they are difficult",
        a:"Seneca"
    },
    {
        q:"The greatest glory in living lies not in never falling, but in rising every time we fall. ",
        a:"Nelson Mandela"
    },
    {
        q:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
        a:"James Cameron"
    },
    {
        q:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        a:"Oprah Winfrey"
    },
    {
        q:"If life were predictable it would cease to be life, and be without flavor.",
        a:"Eleanor Roosevelt"
    }

]
const has = document.getElementById("has")
function color(value) {
    let d = Math.floor(Math.random()* value)
    let e = Math.floor(Math.random()* value)
    let r = Math.floor(Math.random()* value)
    return `rgb(${d}, ${e}, ${r})`
}
function dog(index){
    wa.style.backgroundColor = color(225)
    has.style.backgroundColor = color(225)
    head.style.color = color(225)
    paragraph.style.color = color(225)
    head.innerText = quote[index].q
    paragraph.innerText = quote[index].a    
}
s.addEventListener("click",function(){
    let index = Math.floor(Math.random() * quote.length)
    dog(index)
})




