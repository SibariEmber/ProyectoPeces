db.peces.insertOne(
    {
        nombre: "Pez Betta",
        especie:"Betta splendens",
        razas: ["Cola de velo","Plakat","Dumbo","Media Luna","Súper Delta","Corona","Cola de rosa"],
        reproducción:"Ovíparo",
        tamañoAdulto:[6,7],
        tamañoMinimoAcuario:10,
        colores:["Verde","Marrón","Gris","Azul","Rojo","Blanco"],
        temperaturaOptima:[25,26,27,28],
        alimentación:"Omnívora",
        tipoAgua:"Dulce" ,
        pH:7,
        comportamiento:["Agresivo","Territorial"],
        procedencia:["Tailandia","Camboya"],
        esperanzaVida:[2-3]
    }
)

db.peces.insertMany(
    [
        {
            nombre:"Pez Guppy",
            especie: "Poecilia Reticulata",
            tamañoAdulto:[3,4,5,6,7,8,9],
            razas: ["Cola de pala","Cola de espada","Cola de doble espada","Cola de Lira","Cola redonda","Cola de aguja","Cola de punta","Cola triangular","Cola de abanico","Cola de bandera","Cola de velo"],
            reproducción:"Ovovíparo",
            tamañoMinimoAcuario:3 ,
            colores:[],
            temperaturaOptima:27,
            alimentación:"Omnívora",
            tipoAgua:["Dura","Alcalina"],
            pH:7.3,
            comportamiento:"Pacífico",
            procedencia:["Venezuela", "Brasil" , "Trinidad" , "Bárbados"],
            esperanzaVida:2
        },

        {
            nombre:"Pez Tetra Neón",
            especie: "Paracheirodon innesi",
            tamañoAdulto:[2,3,4],
            razas: ["Black Diamond","Dorado","Albino","Cabeza de diamante","Blanco Brillante","Velo"],
            reproducción: "Ovíparos",
            tamañoMinimoAcuario:60 ,
            colores:"Azul metálico , Rojo y Plateado",
            temperaturaOptima:[20,21,22,23,24,25],
            alimentación:"Omnívora",
            tipoAgua:["Ácida","Blanda"] ,
            pH:[5,6,7],
            comportamiento:"",
            procedencia:["Amazonas","Perú","Colombia","Cardumen"],
            cardumen: 10,
            esperanzaVida:[5-8]
        }

        {
            nombre:"Pez Platy",
            especie: "Xiphophorus maculatus",
            tamañoAdulto:[5,6,7],
            razas: ["Única"],
            reproducción: "Ovovivíparos",
            tamañoMinimoAcuario:60 ,
            colores:["Negro","Oro","Verde","Rojo","Marrón","Azul"],
            temperaturaOptima:[25,26],
            alimentación:"Omnívoro",
            tipoAgua:["Dulce","Caliente"] ,
            pH:[7,8.2],
            comportamiento:["Pacífico","Tímido","Grupo de 4"],
            procedencia:["Guatemala","Honduras","México"],
            esperanzaVida:[2-3]
        }

        {
            nombre:"Pez Molly",
            especie: "Poecilia velífera",
            tamañoAdulto:[15-18],
            razas: ["Única"],
            reproducción: "Ovovípara",
            tamañoMinimoAcuario: 120 ,
            colores:["Verde azulado","Albino","Dorado","Leopardo","Negro","Blanco"],
            temperaturaOptima:[26-28],
            alimentación:"Omnívora",
            tipoAgua:["Dura","Alcalina"] ,
            pH:[7-8],
            comportamiento:["Pacífico","Activo"],
            procedencia:["México"],
            esperanzaVida:[2-3]
        }

        {
            nombre:"Pez Borrachito",
            especie: "Hemigrammus rhodostomus",
            tamañoAdulto:[4-5],
            razas: [""],
            reproducción: "Ovípara",
            tamañoMinimoAcuario:70  ,
            colores:"Cuerpo plateado , cabeza roja y aletas con manchas negra y blancas",
            temperaturaOptima:[24-27],
            alimentación:"",
            tipoAgua:["Ácida","Blanda"] ,
            pH:[5.5-7],
            comportamiento:["Activo","Pacífico"],
            procedencia:["Amazonas","Río Orinoco","Cardumen"],
            cardumen:8,
            esperanzaVida:4
        }

        {
            nombre:"Pez cebrita",
            especie: "Danio rerio",
            tamañoAdulto:[5-6],
            razas: "",
            reproducción: "Ovípara",
            tamañoMinimoAcuario:  ,
            colores:"Blanco amarillento",
            temperaturaOptima:[20-26],
            alimentación:"Omnívora",
            tipoAgua:["Blanda","Oxigenada"] ,
            pH:[6.5-7.5],
            comportamiento:["Activo" , "Veloz" , "Resistente", "Cardumen"],
            procedencia:["India oriental","Bangladesh"],
            cardumen: 6,
            esperanzaVida:[3-4]
        }

        {
            nombre:"Pez ángel",
            especie: "Pterophyllum scalare",
            tamañoAdulto:[12-18],
            razas: ["Scalare","Altum","Leopoldi"],
            reproducción: ["Ovípàra"],
            tamañoMinimoAcuario:60  ,
            colores:["Naranja","Albino"],
            temperaturaOptima:[24-30],
            alimentación:"Omnívora",
            tipoAgua:["Dulce","Templada"] ,
            pH:[6-8],
            comportamiento:["Pacífico","Social"],
            procedencia:["Perú","Colombia","Brasil"],
            esperanzaVida:[5-8]
        }

        {
            nombre:"Pez plecostomus",
            especie: "Hypostomus plecostomus",
            tamañoAdulto:[30-60],
            reproducción: "DIFICIL DE SEXAR",
            tamañoMinimoAcuario:[300-500]  ,
            colores:["Marrón","Negro"],
            temperaturaOptima:[22-30],
            alimentación:"Omnívoro",
            tipoAgua:[""] ,
            pH:[6-8],
            comportamiento:["Pacífico"],
            procedencia:["Río Orinoco","Costa Rica","Uruguay","Panamá","Colombia","Venezuela"],
            esperanzaVida:[15]
        }

        {
            nombre:"",
            especie: "",
            tamañoAdulto:[],
            razas: [""],
            reproducción: "",
            tamañoMinimoAcuario:  ,
            colores:[""],
            temperaturaOptima:[],
            alimentación:"",
            tipoAgua:[""] ,
            pH:[],
            comportamiento:[""],
            procedencia:[""],
            esperanzaVida:[]
        }

    ]    

)