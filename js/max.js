var valeurs = [11, 3, 7, 2, 9, 10];

for(var i=0;i<valeurs.length;i++){
    var max = valeurs[0];
    if(valeurs[i]>max){
        max = valeurs[i];
    }
}
console.log("Le maximun des éléments vaut "+max);