
console.log("je test le JS!");

prenom="Aurelie";
age=41;
console.log (prenom);
console.log("je m'appelle" + prenom +".et j ai" + age + "ans.");
// inverser les variables
SEL=100
SUCRE=120
console.log("j ai du sel: "+SEL);


console.log("j ai du sucre:" +SUCRE)
TEMP=SEL;
console.log(TEMP);
SEL=SUCRE
console.log(SEL);
SUCRE=TEMP;
console.log(SUCRE)
console.log("j ai du sel:" +SEL);
console.log("j ai du sucre:" +SUCRE);

A=100;
B=200;
C=A+B; // C va contenir 300
prenom= "Aurelie";
nom= "Rabet";
pm=prenom+nom;// pm= AurelieRabet
console.log(pm);
//EX: DECLARER UNE VARIABLE PRIX H.T contenant 100
//Vous allez stocker dans une autre variable le prix TTC et de
//l'afficher dans la log
PRIXHT=100;
PRIXTTC=PRIXHT*1.2;
console.log(PRIXTTC);
let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");
console.log(result);
// Les conditions
age=30;

if(age>17){
    console.log("vous etes majeurs!");
  
}
if(age<18){
    console.log("vous etes mineurs")
}

NOMBRE = 12;
if(NOMBRE > 0){
    console.log("positif")
}
if(NOMBRE<0){
    console.log("negatif");
}

function positifNegatif(nombre){
    
    if(nombre > 0){
        console.log("positif")
    }
    if(nombre<0){
        console.log("negatif");
    }
}





if(NOMBRE%2 ==0){
    console.log("positif")
}
if(NOMBRE%2!=0){
    console.log("negatif");
}

prenom="Aurelie";
nom="Rabet";
let text1 = "Aurelie";
let length1 = text1.length;
let text2 = "Rabet";
let length2 = text2.length;
console.log(length1);

if(length1>length2){
    console.log(text1+ ' est le plus long et contient ' + length1);

} else if (length1<length2){
    console.log(text2+ ' est le plus long et contient ' + length2)
} 
prenom.substr(length1-1);
console.log(prenom.substr(length1-1).toUpperCase());

console.log(prenom.replace(prenom.substr(0,1),nom.substr(0,1) ));

// les boucles
// je veux afficher dans ma page
// les nombres de 1 à 1000
 
//  je veux demarrer à 0
//  veux m arreter a 1000
// je veux que a chaque tour tu incremente de 1




for(let i=0; i<1000; i=i+1){
    console.log("le nombre est: "+i);
}

for(let i = 0 ; i <10 ; i=i+1){

    console.log("*");
}

for(let i = 0 ; i <10 ; i=i+1){
    for(let j=0;j<10;j=j+1){  
    console.log("*");   
    document.write("*")}
document.write("<br>")}

for(let i=1 ; i<=10 ; i=i+1){
    console.log(2*i);
}

for(let i=1 ; i<=10 ; i=i+1){
    console.log(2*i);
}


for(let i = 1 ; i<11; i=i+1){

    for(let j = 1 ; j < 11; j=j+1){

        console.log(`TABLE DE ${i} = `, i*j);

    }

}





for(let i=0;i<11;i=i+1){
    console.log(2*i);
}

for(let i=0;i<11;i=i+1){
    for(let j=0;j<11;j=j+1)
    console.log(j*i);
     }


     for(let i=0;i<100;i=i+1){
        console.log("*")
     }