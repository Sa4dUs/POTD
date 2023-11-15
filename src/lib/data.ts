let data: { [pokemon: string]: string } = {
    bulbasaur:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    ivysaur:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    venusaur:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    charmander:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    charmeleon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    charizard:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    squirtle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    wartortle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    blastoise:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    caterpie:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    metapod:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    butterfree:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    weedle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    kakuna: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    beedrill:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    pidgey: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    pidgeotto:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    pidgeot:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    rattata:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    raticate:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    spearow:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    fearow: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    ekans: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    arbok: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    pikachu:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    raichu: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    sandshrew:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    sandslash:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    "nidoran-f":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    nidorina:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    nidoqueen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    "nidoran-m":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    nidorino:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    nidoking:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    clefairy:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    clefable:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    vulpix: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    ninetales:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    jigglypuff:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    wigglytuff:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    zubat: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    golbat: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    oddish: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    gloom: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    vileplume:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    paras: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    parasect:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    venonat:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    venomoth:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    diglett:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    dugtrio:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    meowth: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    persian:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    psyduck:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    golduck:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    mankey: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    primeape:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    growlithe:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    arcanine:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    poliwag:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    poliwhirl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    poliwrath:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    abra: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    kadabra:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    alakazam:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    machop: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    machoke:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    machamp:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    bellsprout:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    weepinbell:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    victreebel:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    tentacool:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    tentacruel:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    geodude:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    graveler:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    golem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    ponyta: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    rapidash:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    slowpoke:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    slowbro:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    magnemite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    magneton:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    farfetchd:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    doduo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    dodrio: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    seel: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    dewgong:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    grimer: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    muk: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    shellder:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    cloyster:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    gastly: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    haunter:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    gengar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    onix: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    drowzee:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    hypno: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    krabby: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    kingler:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    voltorb:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    electrode:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    exeggcute:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    exeggutor:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    cubone: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    marowak:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    hitmonlee:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    hitmonchan:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    lickitung:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    koffing:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    weezing:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    rhyhorn:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    rhydon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    chansey:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    tangela:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    kangaskhan:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    horsea: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    seadra: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    goldeen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    seaking:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    staryu: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    starmie:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    "mr-mime":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    scyther:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    jynx: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    electabuzz:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    magmar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    pinsir: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    tauros: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    magikarp:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    gyarados:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    lapras: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    ditto: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    eevee: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    vaporeon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    jolteon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    flareon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    porygon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    omanyte:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    omastar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    kabuto: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    kabutops:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    aerodactyl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    snorlax:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    articuno:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    zapdos: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    moltres:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    dratini:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    dragonair:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    dragonite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    mewtwo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    mew: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    chikorita:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
    bayleef:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
    meganium:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    cyndaquil:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
    quilava:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
    typhlosion:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    totodile:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
    croconaw:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
    feraligatr:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
    sentret:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
    furret: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
    hoothoot:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    noctowl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
    ledyba: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
    ledian: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
    spinarak:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
    ariados:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
    crobat: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    chinchou:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    lanturn:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
    pichu: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    cleffa: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
    igglybuff:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
    togepi: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    togetic:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    natu: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
    xatu: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
    mareep: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
    flaaffy:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
    ampharos:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
    bellossom:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
    marill: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
    azumarill:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    sudowoodo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
    politoed:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
    hoppip: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
    skiploom:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
    jumpluff:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
    aipom: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
    sunkern:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
    sunflora:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
    yanma: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
    wooper: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    quagsire:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
    espeon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    umbreon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    murkrow:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
    slowking:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
    misdreavus:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
    "unown-a":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
    wobbuffet:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    girafarig:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    pineco: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
    forretress:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
    dunsparce:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
    gligar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
    steelix:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    snubbull:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    granbull:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
    qwilfish:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    scizor: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    shuckle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
    heracross:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    sneasel:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
    teddiursa:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    ursaring:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
    slugma: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
    magcargo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
    swinub: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
    piloswine:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
    corsola:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
    remoraid:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
    octillery:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    delibird:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    mantine:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
    skarmory:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
    houndour:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    houndoom:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    kingdra:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    phanpy: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    donphan:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    porygon2:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
    stantler:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
    smeargle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
    tyrogue:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
    hitmontop:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
    smoochum:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
    elekid: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
    magby: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
    miltank:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    blissey:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    raikou: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    entei: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    suicune:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    larvitar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    pupitar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
    tyranitar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    lugia: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    "ho-oh":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    celebi: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    treecko:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    grovyle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
    sceptile:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    torchic:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
    combusken:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
    blaziken:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
    mudkip: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    marshtomp:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
    swampert:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    poochyena:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
    mightyena:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
    zigzagoon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
    linoone:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
    wurmple:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
    silcoon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
    beautifly:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
    cascoon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
    dustox: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
    lotad: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
    lombre: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
    ludicolo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
    seedot: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
    nuzleaf:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
    shiftry:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
    taillow:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
    swellow:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
    wingull:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
    pelipper:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
    ralts: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
    kirlia: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
    gardevoir:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    surskit:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
    masquerain:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
    shroomish:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
    breloom:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    slakoth:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    vigoroth:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
    slaking:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
    nincada:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
    ninjask:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
    shedinja:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
    whismur:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
    loudred:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
    exploud:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
    makuhita:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
    hariyama:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
    azurill:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
    nosepass:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
    skitty: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
    delcatty:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
    sableye:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
    mawile: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
    aron: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
    lairon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
    aggron: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
    meditite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
    medicham:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
    electrike:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
    manectric:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
    plusle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
    minun: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
    volbeat:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
    illumise:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
    roselia:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
    gulpin: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
    swalot: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
    carvanha:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
    sharpedo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
    wailmer:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
    wailord:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
    numel: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
    camerupt:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    torkoal:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
    spoink: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
    grumpig:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
    spinda: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
    trapinch:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
    vibrava:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
    flygon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    cacnea: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
    cacturne:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
    swablu: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
    altaria:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
    zangoose:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
    seviper:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
    lunatone:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
    solrock:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
    barboach:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
    whiscash:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
    corphish:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
    crawdaunt:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
    baltoy: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
    claydol:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
    lileep: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
    cradily:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
    anorith:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    armaldo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
    feebas: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
    milotic:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    castform:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
    kecleon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
    shuppet:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
    banette:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
    duskull:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
    dusclops:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
    tropius:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
    chimecho:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
    absol: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
    wynaut: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
    snorunt:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
    glalie: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
    spheal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
    sealeo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
    walrein:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
    clamperl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
    huntail:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
    gorebyss:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
    relicanth:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
    luvdisc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
    bagon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
    shelgon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
    salamence:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    beldum: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
    metang: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
    metagross:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    regirock:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
    regice: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
    registeel:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
    latias: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    latios: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    kyogre: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
    groudon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
    rayquaza:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    jirachi:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
    "deoxys-normal":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
    turtwig:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
    grotle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
    torterra:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
    chimchar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
    monferno:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
    infernape:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    piplup: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
    prinplup:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
    empoleon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
    starly: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
    staravia:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
    staraptor:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
    bidoof: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
    bibarel:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
    kricketot:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
    kricketune:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
    shinx: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
    luxio: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    luxray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
    budew: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
    roserade:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    cranidos:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
    rampardos:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
    shieldon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
    bastiodon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
    "burmy-plant":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    "wormadam-plant":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
    "mothim-plant":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
    combee: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
    vespiquen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
    pachirisu:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
    buizel: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
    floatzel:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
    cherubi:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
    "cherrim-overcast":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
    "shellos-west":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
    "gastrodon-west":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
    ambipom:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
    drifloon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
    drifblim:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
    buneary:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
    lopunny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
    mismagius:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
    honchkrow:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
    glameow:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
    purugly:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
    chingling:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
    stunky: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
    skuntank:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
    bronzor:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
    bronzong:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
    bonsly: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
    "mime-jr":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
    happiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
    chatot: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
    spiritomb:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
    gible: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
    gabite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
    garchomp:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    munchlax:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
    riolu: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
    lucario:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    hippopotas:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
    hippowdon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
    skorupi:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
    drapion:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
    croagunk:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
    toxicroak:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
    carnivine:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
    finneon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
    lumineon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
    mantyke:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
    snover: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
    abomasnow:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
    weavile:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
    magnezone:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
    lickilicky:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
    rhyperior:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    tangrowth:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
    electivire:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
    magmortar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    togekiss:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    yanmega:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
    leafeon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
    glaceon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
    gliscor:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
    mamoswine:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    "porygon-z":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
    gallade:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
    probopass:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
    dusknoir:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
    froslass:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
    rotom: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
    uxie: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
    mesprit:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
    azelf: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
    dialga: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    palkia: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    heatran:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
    regigigas:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
    "giratina-altered":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    cresselia:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
    phione: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
    manaphy:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
    darkrai:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    "shaymin-land":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
    "arceus-normal":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
    victini:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
    snivy: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
    servine:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
    serperior:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
    tepig: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
    pignite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
    emboar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
    oshawott:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
    dewott: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
    samurott:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
    patrat: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
    watchog:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
    lillipup:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
    herdier:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
    stoutland:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
    purrloin:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
    liepard:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
    pansage:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
    simisage:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
    pansear:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
    simisear:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
    panpour:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
    simipour:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
    munna: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
    musharna:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
    pidove: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
    tranquill:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
    unfezant:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
    blitzle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
    zebstrika:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
    roggenrola:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
    boldore:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
    gigalith:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
    woobat: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
    swoobat:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
    drilbur:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
    excadrill:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
    audino: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
    timburr:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
    gurdurr:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
    conkeldurr:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
    tympole:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
    palpitoad:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
    seismitoad:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
    throh: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
    sawk: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
    sewaddle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
    swadloon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
    leavanny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
    venipede:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
    whirlipede:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
    scolipede:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
    cottonee:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
    whimsicott:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
    petilil:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
    lilligant:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
    "basculin-red-striped":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
    sandile:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
    krokorok:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
    krookodile:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
    darumaka:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
    "darmanitan-standard":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
    maractus:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
    dwebble:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
    crustle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
    scraggy:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
    scrafty:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
    sigilyph:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
    yamask: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
    cofagrigus:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
    tirtouga:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
    carracosta:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
    archen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
    archeops:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
    trubbish:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
    garbodor:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
    zorua: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
    zoroark:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
    minccino:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
    cinccino:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
    gothita:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
    gothorita:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
    gothitelle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
    solosis:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
    duosion:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
    reuniclus:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
    ducklett:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
    swanna: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
    vanillite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
    vanillish:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
    vanilluxe:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
    "deerling-spring":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
    "sawsbuck-spring":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
    emolga: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
    karrablast:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
    escavalier:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
    foongus:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
    amoonguss:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    frillish:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
    jellicent:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
    alomomola:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
    joltik: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
    galvantula:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
    ferroseed:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
    ferrothorn:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
    klink: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
    klang: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
    klinklang:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
    tynamo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
    eelektrik:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
    eelektross:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
    elgyem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
    beheeyem:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
    litwick:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
    lampent:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
    chandelure:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
    axew: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
    fraxure:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
    haxorus:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
    cubchoo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
    beartic:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
    cryogonal:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
    shelmet:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
    accelgor:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
    stunfisk:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
    mienfoo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
    mienshao:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
    druddigon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
    golett: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
    golurk: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
    pawniard:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
    bisharp:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
    bouffalant:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
    rufflet:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
    braviary:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
    vullaby:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
    mandibuzz:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
    heatmor:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
    durant: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
    deino: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
    zweilous:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
    hydreigon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
    larvesta:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
    volcarona:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
    cobalion:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
    terrakion:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
    virizion:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
    "tornadus-incarnate":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
    "thundurus-incarnate":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
    reshiram:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
    zekrom: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
    "landorus-incarnate":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
    kyurem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
    "keldeo-ordinary":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
    "meloetta-aria":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
    genesect:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
    chespin:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
    quilladin:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
    chesnaught:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
    fennekin:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
    braixen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
    delphox:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
    froakie:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
    frogadier:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
    greninja:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    bunnelby:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
    diggersby:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
    fletchling:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
    fletchinder:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
    talonflame:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
    "scatterbug-icy-snow":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
    "spewpa-icy-snow":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
    "vivillon-meadow":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
    litleo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
    pyroar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
    "flabebe-red":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
    "floette-red":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
    "florges-red":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
    skiddo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
    gogoat: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
    pancham:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
    pangoro:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
    "furfrou-natural":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
    espurr: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
    "meowstic-male":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
    honedge:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
    doublade:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
    "aegislash-shield":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
    spritzee:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
    aromatisse:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
    swirlix:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
    slurpuff:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
    inkay: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
    malamar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
    binacle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
    barbaracle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
    skrelp: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
    dragalge:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
    clauncher:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
    clawitzer:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
    helioptile:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
    heliolisk:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
    tyrunt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
    tyrantrum:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
    amaura: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
    aurorus:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
    sylveon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
    hawlucha:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
    dedenne:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
    carbink:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
    goomy: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
    sliggoo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
    goodra: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
    klefki: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
    phantump:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
    trevenant:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
    "pumpkaboo-average":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
    "gourgeist-average":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
    bergmite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
    avalugg:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
    noibat: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
    noivern:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
    "xerneas-active":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
    yveltal:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
    "zygarde-50":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
    diancie:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
    hoopa: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
    volcanion:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
    rowlet: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
    dartrix:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
    decidueye:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
    litten: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
    torracat:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
    incineroar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    popplio:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
    brionne:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
    primarina:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
    pikipek:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
    trumbeak:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
    toucannon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
    yungoos:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
    gumshoos:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
    grubbin:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
    charjabug:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
    vikavolt:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
    crabrawler:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
    crabominable:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
    "oricorio-baile":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
    cutiefly:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
    ribombee:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
    rockruff:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
    "lycanroc-midday":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
    "wishiwashi-solo":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
    mareanie:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
    toxapex:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
    mudbray:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
    mudsdale:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
    dewpider:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
    araquanid:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
    fomantis:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
    lurantis:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
    morelull:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
    shiinotic:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
    salandit:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
    salazzle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
    stufful:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
    bewear: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
    bounsweet:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
    steenee:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
    tsareena:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
    comfey: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
    oranguru:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
    passimian:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
    wimpod: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
    golisopod:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
    sandygast:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
    palossand:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
    pyukumuku:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
    "type-null":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
    "silvally-normal":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
    "minior-red-meteor":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
    komala: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
    turtonator:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
    togedemaru:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
    "mimikyu-disguised":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
    bruxish:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
    drampa: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
    dhelmise:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
    "jangmo-o":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
    "hakamo-o":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
    "kommo-o":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
    "tapu-koko":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
    "tapu-lele":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
    "tapu-bulu":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
    "tapu-fini":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
    cosmog: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
    cosmoem:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
    solgaleo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
    lunala: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
    nihilego:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
    buzzwole:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
    pheromosa:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
    xurkitree:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
    celesteela:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
    kartana:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
    guzzlord:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
    necrozma:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
    magearna:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
    marshadow:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
    poipole:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png",
    naganadel:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",
    stakataka:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png",
    blacephalon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png",
    zeraora:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png",
    meltan: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png",
    melmetal:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png",
    grookey:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
    thwackey:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png",
    rillaboom:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
    scorbunny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
    raboot: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png",
    cinderace:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png",
    sobble: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
    drizzile:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png",
    inteleon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png",
    skwovet:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png",
    greedent:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png",
    rookidee:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png",
    corvisquire:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png",
    corviknight:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
    blipbug:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png",
    dottler:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png",
    orbeetle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png",
    nickit: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png",
    thievul:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png",
    gossifleur:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png",
    eldegoss:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png",
    wooloo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png",
    dubwool:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png",
    chewtle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png",
    drednaw:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png",
    yamper: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png",
    boltund:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png",
    rolycoly:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png",
    carkol: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png",
    coalossal:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png",
    applin: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png",
    flapple:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png",
    appletun:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png",
    silicobra:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png",
    sandaconda:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png",
    cramorant:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png",
    arrokuda:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png",
    barraskewda:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png",
    toxel: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png",
    "toxtricity-amped":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png",
    sizzlipede:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png",
    centiskorch:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
    clobbopus:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png",
    grapploct:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png",
    "sinistea-phony":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png",
    "polteageist-phony":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",
    hatenna:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png",
    hattrem:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png",
    hatterene:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",
    impidimp:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png",
    morgrem:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png",
    grimmsnarl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",
    obstagoon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",
    perrserker:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png",
    cursola:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",
    sirfetchd:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png",
    "mr-rime":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png",
    runerigus:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",
    milcery:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png",
    "alcremie-vanilla-cream":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",
    falinks:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png",
    pincurchin:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png",
    snom: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
    frosmoth:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png",
    stonjourner:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png",
    "eiscue-ice":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png",
    "indeedee-male":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",
    "morpeko-full-belly":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png",
    cufant: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png",
    copperajah:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png",
    dracozolt:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png",
    arctozolt:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png",
    dracovish:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png",
    arctovish:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png",
    duraludon:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
    dreepy: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png",
    drakloak:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png",
    dragapult:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
    zacian: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",
    zamazenta:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png",
    eternatus:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",
    kubfu: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png",
    "urshifu-single-strike":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
    zarude: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png",
    regieleki:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png",
    regidrago:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png",
    glastrier:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png",
    spectrier:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png",
    calyrex:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png",
    wyrdeer:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png",
    kleavor:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png",
    ursaluna:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png",
    "basculegion-male":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png",
    sneasler:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png",
    overqwil:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png",
    "enamorus-incarnate":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png",
    sprigatito:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",
    floragato:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png",
    meowscarada:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png",
    fuecoco:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png",
    crocalor:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png",
    skeledirge:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png",
    quaxly: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png",
    quaxwell:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png",
    quaquaval:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png",
    lechonk:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png",
    oinkologne:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png",
    tarountula:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png",
    spidops:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png",
    nymble: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png",
    lokix: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png",
    pawmi: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png",
    pawmo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png",
    pawmot: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png",
    tandemaus:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png",
    "maushold-family-of-four":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png",
    fidough:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png",
    dachsbun:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png",
    smoliv: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png",
    dolliv: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png",
    arboliva:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png",
    "squawkabilly-green-plumage":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png",
    nacli: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png",
    naclstack:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png",
    garganacl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png",
    charcadet:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png",
    armarouge:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png",
    ceruledge:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png",
    tadbulb:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png",
    bellibolt:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png",
    wattrel:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png",
    kilowattrel:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png",
    maschiff:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png",
    mabosstiff:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png",
    shroodle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png",
    grafaiai:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png",
    bramblin:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png",
    brambleghast:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png",
    toedscool:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png",
    toedscruel:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png",
    klawf: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png",
    capsakid:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png",
    scovillain:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png",
    rellor: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png",
    rabsca: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png",
    flittle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png",
    espathra:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png",
    tinkatink:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png",
    tinkatuff:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png",
    tinkaton:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png",
    wiglett:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png",
    wugtrio:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png",
    bombirdier:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png",
    finizen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png",
    "palafin-zero":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png",
    varoom: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png",
    revavroom:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png",
    cyclizar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png",
    orthworm:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png",
    glimmet:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png",
    glimmora:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png",
    greavard:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png",
    houndstone:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png",
    flamigo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png",
    cetoddle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png",
    cetitan:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png",
    veluza: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png",
    dondozo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png",
    "tatsugiri-curly":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png",
    annihilape:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png",
    clodsire:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png",
    farigiraf:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png",
    "dudunsparce-two-segment":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png",
    kingambit:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png",
    "great-tusk":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",
    "scream-tail":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png",
    "brute-bonnet":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png",
    "flutter-mane":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
    "slither-wing":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png",
    "sandy-shocks":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png",
    "iron-treads":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png",
    "iron-bundle":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png",
    "iron-hands":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
    "iron-jugulis":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png",
    "iron-moth":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png",
    "iron-thorns":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png",
    frigibax:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png",
    arctibax:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png",
    baxcalibur:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png",
    "gimmighoul-chest":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png",
    gholdengo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png",
    "wo-chien":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png",
    "chien-pao":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png",
    "ting-lu":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png",
    "chi-yu":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png",
    "roaring-moon":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png",
    "iron-valiant":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png",
    "koraidon-apex-build":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
    "miraidon-ultimate-mode":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png",
    "walking-wake":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png",
    "iron-leaves":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png",
};

export default data