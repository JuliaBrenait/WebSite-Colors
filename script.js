
/*OnFocus Event*/

function onFocus(corDeFundo){
    document.getElementById("input").style.backgroundColor= corDeFundo
}

/*OnBlur Event*/
function onBlur(cor1, cor2, cor3){

  let caracter = document.getElementById('input').value

    if(caracter.length =0){
        document.getElementById('input').style.background= cor1
    } else if(caracter.length <=4 && caracter.length){
        document.getElementById('input').style.background= cor2
    } else{
        document.getElementById('input').style.background= cor3
    }
}

/*

o Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo
deve ter seu background alterado para vermelho.

o Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background
deve ser alterado para verde.
*/