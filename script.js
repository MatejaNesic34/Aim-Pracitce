let meta = document.getElementById("meta");


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
        meta.addEventListener("click", kreni)
    }
}

function kreni(){
    setTimeout(mete, 5000);

}


function mete(){
    let tacka = new Tacka();
    tacka.kreiraj();
    console.log(tacka.x, tacka.y);
}