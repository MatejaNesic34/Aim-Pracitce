let meta = document.getElementById("meta");
let rezultat = document.getElementById("score");
let nastavi = false;
let rez = -1;
let hajskor = 0;

class Tacka{

    randomX(){
        return Math.floor(Math.random() * 1100); // SIRINA
    }
    randomY(){
        return Math.floor(Math.random() * 500); // VISINA
    }


    constructor(){
        this.x = this.randomX();
        this.y = this.randomY();
    }

    kreiraj(){
        meta.style.top = this.y + 'px';
        meta.style.left = this.x + 'px';
    }
}

function zaustavi(){
    nastavi = false
    rezultat.classList.remove('nevidljivo');
    if(rez > hajskor){
        hajskor = rez;
    }
    rezultat.innerHTML = "Your score: " + rez + "<br> Highscore: " + hajskor;
    
    rez = -1;
    meta.classList.add('nevidljivo');
}

meta.addEventListener("click", mete);

function kreni(){
    meta.classList.remove('nevidljivo');
    rezultat.classList.add('nevidljivo');
    nastavi = true;
    setTimeout(zaustavi, 30000);
    meta.classList.remove('nevidljivo');
    mete();

}


function mete(){
    if(Boolean(nastavi)){
        rez++;
        let tacka = new Tacka();
        tacka.kreiraj();
        console.log(tacka.x, tacka.y, rez);
    }
}