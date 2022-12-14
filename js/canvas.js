function desenharCanvas(){
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";
    
    //manipulação

    tabuleiro.fillRect(0,0, 1200,800);
    tabuleiro.beginPath();
    tabuleiro.moveTo(900, 500);
    tabuleiro.lineTo(650, 500);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function desenharForca(){

    if(erros === 6){
        tabuleiro.beginPath();
        tabuleiro.moveTo(650, 200);
        tabuleiro.lineTo(650, 500);
        tabuleiro.moveTo(750, 200);
        tabuleiro.lineTo(650, 200);
        tabuleiro.moveTo(750, 200);
        tabuleiro.lineTo(750, 210);
        tabuleiro.stroke();
        tabuleiro.closePath();
    }else if(erros === 5){
        tabuleiro.beginPath();
        tabuleiro.arc(750, 240, 30, 0, 2*Math.PI);
        tabuleiro.stroke();
        tabuleiro.closePath();
    }else if(erros === 4){
        tabuleiro.beginPath();
        tabuleiro.moveTo(750, 270);
        tabuleiro.lineTo(750, 400);
        tabuleiro.stroke();
        tabuleiro.closePath();
    }else if(erros === 3){
        tabuleiro.beginPath();
        tabuleiro.moveTo(750, 270);
        tabuleiro.lineTo(700, 320);
        tabuleiro.stroke();
        tabuleiro.closePath();
    }else if(erros === 2){
        tabuleiro.beginPath();
        tabuleiro.moveTo(750, 270);
        tabuleiro.lineTo(800, 320);
        tabuleiro.stroke();
        tabuleiro.closePath();
    }else if(erros === 1){
        tabuleiro.beginPath();
        tabuleiro.moveTo(750, 400);
        tabuleiro.lineTo(700, 470);
        tabuleiro.stroke();
        tabuleiro.closePath();
    }else if(erros === 0){
        tabuleiro.beginPath();
        tabuleiro.moveTo(750, 400);
        tabuleiro.lineTo(800, 470);
        tabuleiro.stroke();
        tabuleiro.closePath();
    }



}



function desenharLinhas(erros){
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    let largura = 600/palavraSecreta.length;

    for(let i = 0; i < palavraSecreta.length; i++){
        tabuleiro.moveTo(500+(largura*i),640);
        tabuleiro.lineTo(550+(largura*i),640);
    }
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function escreverLetraCorreta(index){
    tabuleiro.font = "bold 52px Inter"
    tabuleiro.lineCap = "round"
    tabuleiro.fillStyle = "#0A3871"
    tabuleiro.lineWidth = 6
    letraCorreta ++
    let largura = 600/palavraSecreta.length;

    tabuleiro.fillText(palavraSecreta[index],505+(largura*index) , 630)

}

function escreverLetraIncorreta(letra, distancia){

    if(repetida == false){
        tabuleiro.font = "bold 40px Inter"
        tabuleiro.lineCap = "round"
        tabuleiro.fillStyle = "#0A3871"
        tabuleiro.lineWidth = 6
        tabuleiro.fillText(letra, 520 + (45*(10-distancia)), 720,40)
    }


}
