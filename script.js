let polje = document.getElementById("polje");


class Tacka{

    randomX(){
        return Math.floor(Math.random() * 500); // SIRINA
    }
    randomY(){
        return Math.floor(Math.random() * 500); // VISINA
    }


    constructor(){
        this.x = this.randomX();
        this.y = this.randomY();
    }

    kreiraj(){
        polje.innerHTML = '<div class = "meta" style="top: ' + this.x + 'px; left: ' + this.y; +'px"></div>'
    }
}





function kreni(){

    let tacka = new Tacka();
    tacka.kreiraj();
    console.log(tacka.x, tacka.y);

}