let lista = document.querySelectorAll(".tecla");

let contador = 0;

fuction tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio)Play
}

while (contador < lista.length){
    const efeito = lista[contador].classlist[1];
    const idAudio = "som"+efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador++;
}