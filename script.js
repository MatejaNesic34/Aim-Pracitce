






class Tacka{

    randomX(){
        return Math.floor(Math.Random() * 500); // SIRINA
    }
    randomY(){
        return Math.floor(Math.Random() * 500); // VISINA
    }


    constructor(){
        this.x = randomX();
        this.y = randomY();
    }
}


function kreni(){

    let tacka = new Tacka();
    console.log(tacka.x, tacka.y);

}