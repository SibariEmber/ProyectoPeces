db.peces.insertOne(
    {
        nombre: "Pez Betta",
        especie:"Betta splendens",
        alimentación:"Omnívora",
        reproducción:"Ovíparo",
        esperanzaVida:[2,3],
        tamaño:[6,7],
        comportamiento:["Agresivo","Territorial"],
        cardumen: false,
        procedencia:["Tailandia","Camboya"],
        agua:"Dulce",
        temperatura:[25,26,27,28],
        pH:7,
        volumenAcuario:10,    
    }
)

db.peces.insertMany(
    [
        {  
            nombre:"Pez Guppy", especie: "Poecilia Reticulata", tamaño:[3,4,5,6,7,8,9],reproducción:"Ovovíparo", volumenAcuario:3,  temperatura:27 , alimentación:"Omnívora" ,
            agua:["Dulce","Cálida","Alcalina"] ,pH:7.3, comportamiento:"Pacífico" ,procedencia:["Venezuela", "Brasil" , "Trinidad" , "Bárbados"],cardumen: false ,esperanzaVida:2
        },

        {
            nombre:"Pez Tetra Neón", especie: "Paracheirodon innesi", tamaño:[2,3,4], reproducción: "Ovíparos", volumenAcuario:60 ,temperatura:[20,21,22,23,24,25], alimentación:"Omnívora",
            agua:["Dulce","Cálida","Ácida","Blanda"] , pH:[5,6,7], comportamiento:["Tímido","Pacífico"], procedencia:["Amazonas","Perú","Colombia"], cardumen: true, esperanzaVida:[5,6,7,8]
        },

        {
            nombre:"Pez Platy", especie: "Xiphophorus maculatus", tamaño:[5,6,7],reproducción: "Ovovivíparos", volumenAcuario:60 ,temperatura:[25,26], alimentación:"Omnívora",
            agua:["Dulce","Cálida"] , pH:[7,8.2], comportamiento:["Pacífico","Tímido","Grupo de 4"], procedencia:["Guatemala","Honduras","México"], cardumen:false, esperanzaVida:[2,3]
        },

        {
            nombre:"Pez Molly", especie: "Poecilia velífera", tamaño:[8,9,10,11,12], reproducción: "Ovovívípara", volumenAcuario: 120 , temperatura:[26,28], alimentación:"Omnívora",
            agua:["Dulce","Cálida","Dura","Alcalina"] , pH:[7,8], comportamiento:["Pacífico","Activo"], procedencia:["México"], cardumen:false, esperanzaVida:[2,3]
        },

        {
            nombre:"Pez Borrachito", especie: "Hemigrammus rhodostomus", tamaño:[4,5], reproducción: "Ovípara", volumenAcuario:70,temperatura:[24,25,26,27], alimentación:"Omnívora", 
            agua:["Dulce","Cálida","Ácida","Blanda"] , pH:[5,6,7], comportamiento:["Activo","Pacífico"],procedencia:["Amazonas","Río Orinoco",], cardumen:true, esperanzaVida:4
        },

        {
            nombre:"Pez Cebrita", especie: "Danio rerio", tamaño:[5,6], reproducción: "Ovípara", volumenAcuario:80, temperatura:[20,21,22,23,24,25,26], alimentación:"Omnívora",
            agua:["Dulce","Cálida","Blanda","Oxigenada"] , pH:[6.5,7,7.5], comportamiento:["Activo" , "Veloz" , "Resistente"], procedencia:["India oriental","Bangladesh"], cardumen: true, esperanzaVida:[3,4]
        },

        {
            nombre:"Pez Ángel", especie: "Pterophyllum scalare", tamaño:[12,13,14,15,16,17,18], reproducción: ["Ovípara"], volumenAcuario:60, temperatura:[24,30], alimentación:"Omnívora", 
            agua:["Dulce","Cálida","Templada"] , pH:[6,7,8], comportamiento:["Pacífico","Social"], procedencia:["Perú","Colombia","Brasil"], cardumen:false,esperanzaVida:[5,6,7,8]
        },

        {
            nombre:"Pez Plecostomus", especie: "Hypostomus plecostomus", tamaño:[30,40,50,60], reproducción: "Ovíparo", volumenAcuario:[300-500], temperatura:[22-30],alimentación:"Omnívora",
            agua:["Dulce","Cálida","Fría"] , pH:[6-8], comportamiento:["Pacífico"], procedencia:["Río Orinoco","Costa Rica","Uruguay","Panamá","Colombia","Venezuela"],cardumen:false, esperanzaVida:[15]
        },

        {
            nombre:"Pez Disco", especie:"Symphysodon", tamaño:[15,20,25,30], reproducción: "Ovípara", volumenAcuario: 100,  temperatura:[28,29], alimentación:"Omnívora", 
            agua:["Dulce","Cálida","Ácida"] , pH:[5.5,6.5], comportamiento:["Tranquilo","Sensible"], procedencia:["Amazonas"], cardumen:false,esperanzaVida:[12,13,14]
        }

        {
            nombre:"Pez Goldfish", especie:"Carassius auratus", tamaño:[], reproducción:"Ovípara", volumenAcuario:40 , temperatura:[16,17,18,19,20], alimentación:"Omnívora", 
            agua:["Dulce","Fría"] , pH:[7-7.5], comportamiento:["Tranquilo","Pacífico"], procedencia:"China", cardumen:false, esperanzaVida:[10,25]
        }

        {
            nombre:"Pez payaso",especie:"Amphiprion ocellaris",tamaño:"8,9,10,11",reproducción:"Ovípara",volumenAcuario:80,temperatura:[24,25,26,27],alimentación:"Omnívora",
            agua:["Salada","Cálida"], pH:[8,8.4], comportamiento:["Pacífico","Tranquilo"], procedencia:["Australia","Malasia","Tailandia"], cardumen:false, esperanzaVida: 10
        },

        {
            nombre:"",especie:"",tamaño:"",reproducción:"",volumenAcuario:,temperatura:,alimentación:"",
            agua:, pH:, comportamiento:, procedencia:, cardumen:, esperanzaVida:
        },

        {
            nombre:"",especie:"",tamaño:"",reproducción:"",volumenAcuario:,temperatura:,alimentación:"",
            agua:, pH:, comportamiento:, procedencia:, cardumen:, esperanzaVida:
        },

        {
            nombre:"",especie:"",tamaño:"",reproducción:"",volumenAcuario:,temperatura:,alimentación:"",
            agua:, pH:, comportamiento:, procedencia:, cardumen:, esperanzaVida:
        },

        {
            nombre:"",especie:"",tamaño:"",reproducción:"",volumenAcuario:,temperatura:,alimentación:"",
            agua:, pH:, comportamiento:, procedencia:, cardumen:, esperanzaVida:
        },

        {
            nombre:"",especie:"",tamaño:"",reproducción:"",volumenAcuario:,temperatura:,alimentación:"",
            agua:, pH:, comportamiento:, procedencia:, cardumen:, esperanzaVida:
        },

        {
            nombre:"",especie:"",tamaño:"",reproducción:"",volumenAcuario:,temperatura:,alimentación:"",
            agua:, pH:, comportamiento:, procedencia:, cardumen:, esperanzaVida:
        },

        {
            nombre:"",especie:"",tamaño:"",reproducción:"",volumenAcuario:,temperatura:,alimentación:"",
            agua:, pH:, comportamiento:, procedencia:, cardumen:, esperanzaVida:
        },

        {
            nombre:"",especie:"",tamaño:"",reproducción:"",volumenAcuario:,temperatura:,alimentación:"",
            agua:, pH:, comportamiento:, procedencia:, cardumen:, esperanzaVida:
        },

        {
            nombre:"",especie:"",tamaño:"",reproducción:"",volumenAcuario:,temperatura:,alimentación:"",
            agua:, pH:, comportamiento:, procedencia:, cardumen:, esperanzaVida:
        },
    ]    

)