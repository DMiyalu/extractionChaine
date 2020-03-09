var phrase = "Bonjour tout le monde,je suis Christian Lisangola,développeur logiciels à Kinshasa Digital.Mon numéro de téléphone est le +243840964176 qui un numéro vodacom,et mon adresse email privé est le christian.lisangola@gmail.com. Par le passé j'ai eu à utiliser d'autres numéros de téléphones à l'instar d'un numéro Airtel qui fut le +243971151294 mais qui ne passe plus je suppose et aussi un numéro Tigo,le +243895602911. Ici à Kinshasa Digital,j'utilise une adresse mail d'entreprise qui est le christian@kinshasadigital.com.";

function supprimerLePoint(listeElement) {
    for (let i = 0; i < listeElement.length; i++) {
        if (listeElement[i].endsWith('.')) {
            listeElement[i] = listeElement[i].slice(0, -1);
        }
    }
};

var phrase = phrase.split(/[ ,]/);
supprimerLePoint(phrase);
var nombreMots = phrase.length;


var listeAdresseMail = phrase.filter(mot => mot.includes('@'));
const nombreAdresseMail = listeAdresseMail.length;


const listeNumeroTelephone = phrase.filter(numero => numero.includes('+243'));
const nombreNumeroTelephone = listeNumeroTelephone.length;

const listeNumeroVodacom = listeNumeroTelephone.filter(numero => numero.includes('+24381'));
const nombreNumeroVodacom = listeNumeroVodacom.length;

const listeNumeroTigo = listeNumeroTelephone.filter(numero => numero.includes('+24381'));
const nombreNumeroTigo = listeNumeroTigo.length;

const listeNumeroOrange = listeNumeroTelephone.filter(numero => numero.includes('+24381'));
const nombreNumeroOrange = listeNumeroOrange.length;

const listeAdressesMailPro = listeAdresseMail.filter(adresse => !(adresse.includes('@gmail')));
const listeAdressesMailPrivees = listeAdresseMail.filter(adresse => adresse.includes('@gmail'));


var listeMotsRestreints = ['le', 'la', 'les', 'des', 'du', 'un', 'une', '+243', '@', 'je', 'tu', 'il', 'elle', 'nous', 'vous', 'elles', 'ils', 'à', 'qui'];

for (motRestreint of listeMotsRestreints) {
    phrase = phrase.filter(mot => !(mot.includes(motRestreint)));
}

var nombreMotsValides = phrase.length;
console.log(`${nombreMots} mots au total, et ${nombreMotsValides} mots valides.`)