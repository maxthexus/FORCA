let palavras = ["ALURA","ORACLE","HTML","JAVASCRIPT","LOGICA"]
let tabuleiro = document.getElementById("forca").getContext('2d')
let palavraSecreta = "";
let letras = []
let letrasIncorretas = []
let letraCorreta = 0
let erros = 7
let distancia = 7
let repetida = true
let tamanhoPalavraSecreta = palavraSecreta.length
function sorteiaPalavraSecreta(){
    let palavra = palavras[Math.floor(Math.random()*palavras.length)]
     palavraSecreta = palavra
     console.log(palavraSecreta)
}

function verificarLetra(key){
    let estado = false
    
    if(key >=65 && letras.indexOf(key) || key<=90 && letras.indexOf(key) ){
        letras.push(key)
        console.log(key)
        console.log(letras)
        return estado
    }else{
        letras.push(key)
        console.log(key)
        console.log(letras, 'letras true')
        estado = true
        return estado
    }
}

function adicionarLetraIncorreta(letra){
    
    let letraIncorreta =  letrasIncorretas.includes(letra)

  
        if(letraIncorreta == false){
            repetida = false
            letrasIncorretas.push(letra)
            erros -=1
            distancia -=1
        }else{
            repetida = true
            window.alert('Você já digitou essa letra')
            distancia -=1 
        }
        console.log(erros)


}


function vitoria(){
    if(letraCorreta == palavraSecreta.length){
        window.alert('Parabéns você venceu!')
        window.location.reload()
    }
}

function derrota(){
    if(erros == 0){
        window.alert('Game Over')
        window.location.reload()
    }
}





function iniciaJogo(){
    document.querySelector(".botoes").style.display = 'none'
    sorteiaPalavraSecreta()
    desenharCanvas()
    desenharLinhas()
    desenharForca()
    verificarLetra()
   
    document.onkeydown = (e) =>{

        let letra = e.key.toUpperCase()

        if(verificarLetra(letra) && palavraSecreta.includes(letra)){
            for(let i = 0; i<palavraSecreta.length; i++){
                if(palavraSecreta[i] === letra){
                    escreverLetraCorreta(i)
                    letraCorreta ++
                    vitoria()
                    
                }
            }
        }else{
            adicionarLetraIncorreta(letra)
            escreverLetraIncorreta(letra, erros)
            desenharForca(erros)
            derrota()
        }
    }
}