var Film = {
   
    init:function(titre, anneeSortie, realisateur){
        this.titre= titre;
        this.anneeSortie = anneeSortie;
        this.realisteur = realisateur;
    },
    decrire:function(){
        return this.titre+"("+this.anneeSortie+", "+this.realisteur+")";
    }
}


var film1 = Object.create(Film);
film1.init("Le loup de Wall Street",2013,"Martin Scorsese");
var film2 = Object.create(Film);
film2.init("Vice-Versa",2015,"Pete Docter");
var film3 = Object.create(Film);
film3.init("BabySitting",2013,"Philipe Lacheau et Nicolas Benamou");
var films = [];
films.push(film1);
films.push(film2);
films.push(film3);
films.forEach(function(film){
   console.log(film.decrire()); 
});