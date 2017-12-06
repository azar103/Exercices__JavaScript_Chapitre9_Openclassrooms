var mots=[];

var mot ="";

while(mot!=="stop"){
    mot =prompt("Entrez un mot ou tapze stop pour arreter :");
    if(mot !== "stop")
    {
        mots.push(mot);
    }
    
}

mots.forEach(function(mot){
   console.log(mot); 
});