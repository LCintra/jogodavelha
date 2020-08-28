var blocos = []
var blocostxt = []
var contador = 1
for(var i =1;i!=10;i++){
    var b1 = document.getElementById(`bloco${i}`)
    blocos.push(b1)
    var t1 = document.getElementById(`txt${i}`)
    blocostxt.push(t1)
}
function acontecer(x){
    if(contador%2==0){
        x.innerHTML = `O`
    } else {
        x.innerHTML = `X`
    }
    contador++
}