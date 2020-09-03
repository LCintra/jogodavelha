var blocos = []
var blocostxt = []
var contador = 1
var partida = 0
for(var i =1;i!=10;i++){
    var b1 = document.getElementById(`bloco${i}`)
    blocos.push(b1)
    var t1 = document.getElementById(`txt${i}`)
    blocostxt.push(t1)
}
for (var i = 0;i!=9;i++){
    blocostxt[i].value = 0
}
var menufim = document.getElementById(`hide`)
function acontecer(x){
    if(x.value==1||x.value==2||partida == 1){
        return
    } else{
        if(contador%2==0){
            x.innerHTML = `O`
            x.value = 1
        } else {
            x.innerHTML = `X`
            x.value = 2
        }
        contador++
    }
    validacao()
}
function validacao(){
    if(blocostxt[0].value==1&&blocostxt[3].value==1&&blocostxt[6].value==1||blocostxt[0].value==2&&blocostxt[3].value==2&&blocostxt[6].value==2){
        alert(`Fim de Jogo!`)
        partida = 1
        menufim.style.display = `block`
    }
    else if(blocostxt[0].value==1&&blocostxt[1].value==1&&blocostxt[2].value==1||blocostxt[0].value==2&&blocostxt[1].value==2&&blocostxt[2].value==2){
        alert(`Fim de Jogo!`)
        partida = 1
        menufim.style.display = `block`
    }
    else if(blocostxt[2].value==1&&blocostxt[5].value==1&&blocostxt[8].value==1||blocostxt[2].value==2&&blocostxt[5].value==2&&blocostxt[8].value==2){
        alert(`Fim de Jogo!`)
        partida = 1
        menufim.style.display = `block`
    }
    else if(blocostxt[6].value==1&&blocostxt[7].value==1&&blocostxt[8].value==1||blocostxt[6].value==2&&blocostxt[7].value==2&&blocostxt[8].value==2){
        alert(`Fim de Jogo!`)
        partida = 1
        menufim.style.display = `block`
    }
    else if(blocostxt[1].value==1&&blocostxt[4].value==1&&blocostxt[7].value==1||blocostxt[1].value==2&&blocostxt[4].value==2&&blocostxt[7].value==2){
        alert(`Fim de Jogo!`)
        partida = 1
        menufim.style.display = `block`
    }
    else if(blocostxt[3].value==1&&blocostxt[4].value==1&&blocostxt[5].value==1||blocostxt[3].value==2&&blocostxt[4].value==2&&blocostxt[5].value==2){
        alert(`Fim de Jogo!`)
        partida = 1
        menufim.style.display = `block`
    }
    else if(blocostxt[0].value==1&&blocostxt[4].value==1&&blocostxt[8].value==1||blocostxt[0].value==2&&blocostxt[4].value==2&&blocostxt[8].value==2){
        alert(`Fim de Jogo!`)
        partida = 1
        menufim.style.display = `block`
    }
    else if(blocostxt[2].value==1&&blocostxt[4].value==1&&blocostxt[6].value==1||blocostxt[2].value==2&&blocostxt[4].value==2&&blocostxt[6].value==2){
        alert(`Fim de Jogo!`)
        partida = 1
        menufim.style.display = `block`
    }
    else if(blocostxt[0].value!=0&&blocostxt[1].value!=0&&blocostxt[2].value!=0&&blocostxt[3].value!=0&&blocostxt[4].value!=0&&blocostxt[5].value!=0&&blocostxt[6].value!=0&&blocostxt[7].value!=0&&blocostxt[8].value!=0){
        alert(`Deu Velha!`)
        partida = 1
        menufim.style.display = `block`        
    }
}
function resetar(){
    for(i = 0;i!=9;i++){
        blocostxt[i].value = 0
        blocostxt[i].innerHTML = ``
    }
    partida = 0
    menufim.style.display = `none`
}