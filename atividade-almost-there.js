let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];
  
  

  // 1 Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.

  let itenRemovido=inventarioAlpha.pop();

  console.table(inventarioAlpha)

  console.log(`----------------------------------------------------------------`);
  
  //2 Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.

  let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];

 itenRemovido=inventarioBeta.pop();
console.table(inventarioBeta)

console.log(`----------------------------`);

//3 Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.
let inventarioAlphanovo=["lego","terra",1400];

let inventario2Alphanovo=["la ferrari","terra",36300];

let inventario3Alphanovo=["nerf","terra",250];

inventarioAlpha.push(inventario2Alphanovo,inventarioAlphanovo,inventario3Alphanovo)
console.table(inventarioAlpha)

//4 Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.
let inventarioBetanovo=["caderno dimensional","kepler",99900];

let inventario2Betanovo=["mascara ","kepler",8600];

inventarioBeta.push(inventarioBetanovo,inventario2Betanovo);
console.table(inventarioBeta);

// 5 Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.
let itenNew=["tenis neymar","nike",78993]

let itenNew2=["campus 2","adidas",540]

inventarioAlpha.unshift(itenNew,itenNew2)
console.table(inventarioAlpha)

// 6 Um item da Beta deve ser promovido para o início da lista para estudo prioritário.
let itenDestacado=inventarioBeta[10]

inventarioBeta.unshift(itenDestacado)

inventarioBeta.splice(11,1)

console.table(inventarioBeta)

// 7 Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.
let itenRemovidoo=inventarioAlpha[0]

inventarioAlpha.shift(itenRemovidoo)

console.table(inventarioAlpha)

//tirei o campus 2 que estava em 1


// 8 O primeiro item da Beta pertence a um museu e deve ser removido.
inventarioBeta.shift

console.table(inventarioBeta)

// tira o primeiro iten

// 9 Verifique se a “Relíquia de Zordon” está presente no inventário Beta.

//10 Verifique se o item “Nanofibra Luminosa” ainda está disponível na Alpha. (nível hard)

//11 Gere uma string com todos os planetas do inventário Alpha, separados por um delimitador.

//12 Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas
let novoArray = []
novoArray = inventarioBeta.slice(0,10)


console.log(novoArray.join(`,  `))

//13 Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.


let arrayNovo=[];

arrayNovo = inventarioBeta.slice(0,5)

console.table(arrayNovo);

//14 Separe os 10 últimos itens do inventário Alpha para estudo tempora

let ultimosItens=[];

ultimosItens=inventarioAlpha.slice(15,25)

console.table(ultimosItens);

//15 O quinto item da Alpha foi substituído por uma versão mais moderna. Atualize.
let itenNovo=["capa", "dc" , 2300]

inventarioAlpha.splice(5,1)
inventarioAlpha.splice(5,0,(itenNovo))
console.table(inventarioAlpha)
//16 Dois itens no meio do inventário Beta foram contaminados e precisam ser removidos.
let meio = inventarioBeta.length/2
console.log(meio);

let itensContaminados=inventarioBeta.splice(11,2);
console.log(`os itens contaminados que foram removidos foram: ${itensContaminados}`);

//17 Unifique os inventários Alpha e Beta em uma única estrutura.
let inventariosUnidos=[];

inventariosUnidos =inventarioAlpha.concat(inventarioBeta);

console.table(inventariosUnidos);

//18 Junte os cinco primeiros itens de cada nave em uma nova vitrine de destaques.
let cincoAlpha=inventarioAlpha.slice(0,5);

let cincoBeta=inventarioBeta.slice(0,5);

let vitrineEmDestaque=cincoAlpha.concat(cincoBeta);

console.table(vitrineEmDestaque);
//26 Inverta a ordem dos 15 primeiros itens da Alpha como simulação de viagem no tempo.
let quinzePrimeiros=inventarioAlpha.slice(0,5);
let quinzePrimeirosReverse=quinzePrimeiros.reverse();

let ulimos = inventarioAlpha.splice(16, inventarioAlpha.length);

let novoFinal=quinzePrimeiros.concat(ulimos);

console.table(novoFinal)