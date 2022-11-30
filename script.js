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
}


function kreni(){

    let tacka = new Tacka();
    console.log(tacka.x, tacka.y);

}