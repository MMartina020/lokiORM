console.log("LokiJS");

const loki = require("lokijs");

const db = new loki('adatok.data');

/**
hal{
    -id
    -halfaj
    -tomeg (gramm)
}
 */

db.loadDatabase({}, () => {
    let halaim = db.getCollection("halak");
    if (halaim === null) {
        halaim = db.getCollection("halak");
    }


    const elsoHal = {
        id: 2, //uuid kellene
        halfaj: "csuka", //halfaj
        tomeg: 1900
    }

    halaim.insert(elsoHal);

    /**
    collection memória
    db -> fizikai cucc(file itt)
    */

    const pontyok = halaim.find({halfaj:"ponty"});
    console.table(pontyok);

    const ponty = halaim.find({halfaj:"ponty"});
    console.log(ponty);

    halaim.remove(ponty); //egyet töröl csak 

    db.saveDatabase((err) => {

        if (!err) {
            return console.log(`${halaim.lenght} elemeim mentés sikeres`);
        }

        //hiba ág
    }); //Hát nem így 
});