var Chien = {
    init: function(nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },

    aboyer: function() {
        var aboiement ="Whoua ! Whoua !";
        if(this.taille < 25){
                aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
        },
    
    decrire: function() {
        return this.nom+" est un "+this.race+" mesurant "+this.taille+" cm "+". Il aboie "+
        this.aboyer();
    }    
    };
    
console.log("Le chenil héberge 3 chien(s) :");
var chiens = [];
var chien1 = Object.create(Chien);
 chien1.init("Crockdur","matin de Naples",75);
var chien2 = Object.create(Chien);
    chien2.init("Pupuce","bichon",22);
var chien3 = Object.create(Chien);
    chien3.init("Médor","lebrador",58);
chiens.push(chien1);
chiens.push(chien2);
chiens.push(chien3);
chiens.forEach(function(chenil){
   console.log(chenil.decrire()); 
});