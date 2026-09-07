export type Person = {
  id: string;
  name: string;
  parent?: string;
  note?: string;
  children: string[];
  bio?: string;
};


export const PEOPLE: Person[] = [
  {
    id: "mqhoko",
    name: "Mqhoko",
    children: ["Phangindlu", "Hlokohloko", "Minyi"],
    bio: "uMqhoko yindoda yakwaMthwana eyayisuka eMqhokweni kwisthili saseMzimkhulu. Wathi xa wayebuzwa ukuba uvela mlambo mni, wathi uvela eMqhokweni kwaMthwana — kwaza kwathiwa nguMqhoko. Walishiya elakwaMthwana kuba wayexabene namawabo, wadibana noMadikizela kuMlambo iNhlalweni, baza bahamba besilwa nezizwe bade bazinza apha kwaNgutyana eBizana.",
  },

  // ============ PHANGINDLU branch ============
  {
    id: "phangindlu",
    name: "Phangindlu",
    parent: "mqhoko",
    note: "unyana wokuqala ka Mqhoko",
    children: ["Khedama"],
    bio: "Uphando olusekhona lubonisa ukuba uPhangindlu wazala uKhedama kuphela. UKhedama wayebafazi babini.",
  },
  {
    id: "khedama",
    name: "Khedama",
    parent: "phangindlu",
    children: ["Makholwana", "Dudu", "Manzayakrakra", "Mphungu", "Mandilikazi"],
    bio: "uKhedama wayebafazi babini. Kumfazi wokuqala wazala uMakholwana. Kumfazi wesibini wazala uDudu, uManzayakrakra, uMphungu, noMandilikazi (Thikoloshe). Kuvakala ukuba uManzayakrakra wayengenabo abantwana.",
  },

  // ---- Makholwana (1st son of Khedama) ----
  {
    id: "makholwana",
    name: "Makholwana",
    parent: "khedama",
    note: "unyana wokuqala ka Khedama (kumfazi wokuqala)",
    children: ["Duna", "Kilane", "Gagu"],
  },
  {
    id: "duna",
    name: "Duna",
    parent: "makholwana",
    note: "unyana wokuqala ka Makholwana",
    children: ["Mtshizwa", "Mkrexwa", "Hileka", "Banjiwe", "Ngangeka"],
  },
  {
    id: "mtshizwa",
    name: "Mtshizwa",
    parent: "duna",
    note: "unyana wokuqala ka Duna",
    children: ["Myaya", "Thono", "Thandiwe"],
  },

  // ---- Dudu (2nd son of Khedama) ----
  {
    id: "dudu",
    name: "Dudu",
    parent: "khedama",
    note: "unyana wesibini ka Khedama",
    children: ["Mkhawuleli", "Matshatsha", "Luhlazana"],
  },
  {
    id: "mkhawuleli",
    name: "Mkhawuleli",
    parent: "dudu",
    note: "unyana wokuqala ka Dudu",
    children: ["Tshayizandla", "Khehle", "Krwele", "Khuluma", "Mantlokwana", "Nozimbo"],
  },
  {
    id: "tshayizandla",
    name: "Tshayizandla",
    parent: "mkhawuleli",
    note: "unyana wokuqala ka Mkhawuleli",
    children: ["Nomtuko", "Sitiya"],
  },
  {
    id: "khehle",
    name: "Khehle",
    parent: "mkhawuleli",
    note: "unyana wesibini ka Mkhawuleli",
    children: ["Magabishane", "Nomagunyana", "Mfuku"],
  },
  {
    id: "luhlazana",
    name: "Luhlazana",
    parent: "dudu",
    note: "unyana wesithathu ka Dudu",
    children: ["Badanile", "Mzikayise", "Mpendulo", "Girl???", "Girl???"],
  },

  // ---- Manzayakrakra (no children) ----
  {
    id: "manzayakrakra",
    name: "Manzayakrakra",
    parent: "khedama",
    note: "unyana wesithathu ka Khedama",
    children: [],
    bio: "Kulwazi olusekhona, uManzayakrakra wayengenabo abantwana.",
  },

  // ---- Mphungu ----
  {
    id: "mphungu",
    name: "Mphungu",
    parent: "khedama",
    note: "unyana wesine ka Khedama",
    children: ["Hagile", "Gono", "Mgudaza", "Ncanyiwe"],
  },
  {
    id: "hagile",
    name: "Hagile",
    parent: "mphungu",
    note: "unyana wokuqala ka Mphungu",
    children: ["Thethiwe", "Ntleki", "Bizani", "Nozithimbo", "Ngede"],
  },
  {
    id: "gono",
    name: "Gono",
    parent: "mphungu",
    note: "unyana wesibini ka Mphungu",
    children: [
      "Zantanta",
      "Mzulwelwa",
      "Bomvini",
      "Maqabane",
      "Khombasquare",
      "Msikizelwa",
      "Mbhekiswano",
      "Mnyenyelwa",
      "Gcetyana",
    ],
  },

  // ---- Mandilikazi ----
  {
    id: "mandilikazi",
    name: "Mandilikazi",
    parent: "khedama",
    note: "unyana wesihlanu ka Khedama (Thikoloshe)",
    children: ["Mthi", "Mjikelwa", "Mziselwa", "Bobolo", "Madubeza"],
  },
  {
    id: "mthi",
    name: "Mthi",
    parent: "mandilikazi",
    note: "unyana wokuqala ka Mandilikazi",
    children: ["Ngqukuva", "Tototo", "Zabalazile", "Bhengenda", "Ndlavini"],
  },

  // ============ HLOKOHLOKO branch ============
  {
    id: "hlokohloko",
    name: "Hlokohloko",
    parent: "mqhoko",
    note: "unyana wesibini ka Mqhoko",
    children: ["Mkrweqe", "Somhlaba", "Mangcizela", "Bukhali"],
    bio: "uHlokohloko wayenabafazi abathathu: uMambewana wazala uMkrweqe noSomhlaba; umfazi wesibini wazala uMangcizela; umfazi wesithathu wazala uBukhali. Uphando lubonakalisa ukuba uMangcizela noBukhali babengenabantwana.",
  },
  { id: "mkrweqe", name: "Mkrweqe", parent: "hlokohloko", note: "unyana wokuqala ka Hlokohloko", children: ["Ngqithi"] },
  {
    id: "somhlaba",
    name: "Somhlaba",
    parent: "hlokohloko",
    note: "unyana wesibini ka Hlokohloko",
    children: ["Malholho", "Kaziwa", "Notshekethe", "Lhilhi", "Ntsele", "Malhiya", "Bantu", "Nomngqusha", "Ncinci"],
  },
  { id: "mangcizela", name: "Mangcizela", parent: "hlokohloko", children: [] },
  { id: "bukhali", name: "Bukhali", parent: "hlokohloko", children: [] },

  {
    id: "ngqithi",
    name: "Ngqithi",
    parent: "mkrweqe",
    note: "unyana wokuqala ka Mkrweqe",
    children: ["Gogo", "Mahlathi", "Nobukhululwana"],
  },
  {
    id: "gogo",
    name: "Gogo",
    parent: "ngqithi",
    note: "unyana wokuqala ka Ngqithi",
    children: ["Sajini", "Macebo", "Ntombana", "Mandoboza"],
  },
  {
    id: "sajini",
    name: "Sajini",
    parent: "gogo",
    note: "unyana wokuqala ka Gogo",
    children: ["Bonakele", "Qaliwe"],
  },
  {
    id: "mahlathi",
    name: "Mahlathi",
    parent: "ngqithi",
    note: "unyana wesibini ka Ngqithi",
    children: ["Bhekinto", "Mlheyi"],
  },
  {
    id: "mlheyi",
    name: "Mlheyi",
    parent: "mahlathi",
    note: "unyana wesibini ka Mahlathi",
    children: ["Mpompo"],
  },

  {
    id: "malholho",
    name: "Malholho",
    parent: "somhlaba",
    note: "unyana wokuqala ka Somhlaba",
    children: ["Mthenjwa", "Hlebeka"],
  },
  {
    id: "mthenjwa",
    name: "Mthenjwa",
    parent: "malholho",
    note: "unyana wokuqala ka Malholho",
    children: ["Bhunga'alipheli", "Makini", "Majangaza", "Magwazi"],
  },
  {
    id: "kaziwa",
    name: "Kaziwa",
    parent: "somhlaba",
    children: ["Lovu", "Singcangu", "Phushe", "Gubu", "Rhoqo", "Nompazamo", "Nomathazawula", "Nonyamezelo"],
  },
  { id: "notshekethe", name: "Notshekethe", parent: "somhlaba", children: [] },
  {
    id: "lhilhi",
    name: "Lhilhi",
    parent: "somhlaba",
    note: "unyana wesine ka Somhlaba",
    children: ["Mmangalelwa", "Mngangwa", "Mabhunu"],
  },
  {
    id: "mngangwa",
    name: "Mngangwa",
    parent: "lhilhi",
    note: "unyana wokuqala ka Lhilhi",
    children: ["Mncedwa", "Nozajoni", "Mputswani"],
  },
  {
    id: "ntsele",
    name: "Ntsele",
    parent: "somhlaba",
    note: "unyana wesihlanu ka Somhlaba",
    children: ["Bhewu", "Doda", "Nomasamani", "Nomangali", "Mdaphi"],
  },
  { id: "malhiya", name: "Malhiya", parent: "somhlaba", children: [] },
  { id: "bantu", name: "Bantu", parent: "somhlaba", children: [] },

  {
    id: "bhewu",
    name: "Bhewu",
    parent: "ntsele",
    note: "unyana wokuqala ka Ntsele",
    children: ["Myaleni", "Mkhethwa", "Dalindyebo", "Gciningwe", "Mbizana", "Khathazwa", "Nombizo"],
  },
  {
    id: "doda",
    name: "Doda",
    parent: "ntsele",
    note: "unyana wesibini ka Ntsele",
    children: ["Mgwecelwa", "Maphepha", "Magqiza", "Mcoselelwa", "Nomandiza"],
  },

  // ============ MINYI branch ============
  {
    id: "minyi",
    name: "Minyi",
    parent: "mqhoko",
    note: "unyana wesithathu ka Mqhoko",
    children: ["Mantanga", "Mashaba", "Goduso"],
    bio: "uMinyi wayebafazi babini. Kumfazi wokuqala uzele uMantanga; kowesibini wazala uMashaba noGoduso. Kubikwa ukuba uMashaba wahamba wayokwakha ngasebukhweni bakhe kwaXolo eZingolweni.",
  },
  {
    id: "mantanga",
    name: "Mantanga",
    parent: "minyi",
    note: "unyana ka Minyi (umfazi wokuqala)",
    children: ["Mbiko", "Sigxa", "Nana", "Songweni", "Ntwalana", "Kaniswayo", "Manini"],
    bio: "uMantanga wayebafazi babini. Kumfazi wokuqala uzele uMbiko noNtwalana (intombi, kwashinga). Kumfazi wesibini uzele uSigxa, uNana, uSongweni (no children), uKanisweni (intombi, Sea View) noManini (kwaMadikizela, Tshwayibe).",
  },
  {
    id: "mashaba",
    name: "Mashaba",
    parent: "minyi",
    children: ["Siyoyo", "Phathelwa", "Ntombi", "Cehe"],
  },
  {
    id: "siyoyo",
    name: "Siyoyo",
    parent: "mashaba",
    note: "unyana wokuqala ka Mashaba",
    children: ["Makhokhela", "Gideon", "Philiya", "Bhengu", "Balelwa", "Bangisa", "Baliswa", "Nkazama"],
  },
  {
    id: "makhokhela",
    name: "Makhokhela",
    parent: "siyoyo",
    note: "unyana wokuqala ka Siyoyo",
    children: ["Simon", "Mantuva", "Linah", "River", "Ntombi??", "Ntombi??", "Ntombi??", "Mbhokelwa", "Jeremiya"],
  },
  {
    id: "simon",
    name: "Simon",
    parent: "makhokhela",
    note: "unyana wokuqala ka Makhokhela",
    children: ["Tana", "Qondeni", "Sizakele", "Dingiwe"],
  },
  {
    id: "mbhokelwa",
    name: "Mbhokelwa",
    parent: "makhokhela",
    note: "unyana wesine ka Makhokhela",
    children: ["Gadla", "Bhekuyise", "Zithobile", "Tumeni", "Ngcee", "Ntombi??"],
  },
  {
    id: "jeremiya",
    name: "Jeremiya",
    parent: "makhokhela",
    note: "Iphelo lika Makhokhela",
    children: ["Bongiwe", "Dumazile"],
  },
  {
    id: "gideon",
    name: "Gideon",
    parent: "siyoyo",
    children: ["Mfano", "Mazele", "Mhatha", "Emah"],
  },
  {
    id: "mfano",
    name: "Mfano",
    parent: "gideon",
    note: "unyana wokuqala ka Gideon",
    children: ["Ntombizile", "Thobisile", "Duduzile"],
  },
  {
    id: "mazele",
    name: "Mazele",
    parent: "gideon",
    children: ["Ntombi??", "Ntombi??", "Ntombi??"],
  },
  {
    id: "philiya",
    name: "Philiya",
    parent: "siyoyo",
    children: ["Mkhethwa", "Zikhalele", "Laziya", "Shonaphi", "Zimbi", "Mzungezi", "Tokwana"],
  },
  {
    id: "goduso",
    name: "Goduso",
    parent: "minyi",
    children: [],
  },
  {
    id: "mbiko",
    name: "Mbiko",
    parent: "mantanga",
    note: "unyana wokuqala ka Mantanga",
    children: ["Sanga", "Zibuthe", "Lulaka", "Somthi", "Nozikhungo"],
  },
  {
    id: "somthi",
    name: "Somthi",
    parent: "mbiko",
    children: ["Zulani", "Sithaphithi"],
  },
  {
    id: "sigxa",
    name: "Sigxa",
    parent: "mantanga",
    children: ["Mbola", "Genge"],
  },
  {
    id: "mbola",
    name: "Mbola",
    parent: "sigxa",
    children: ["Mzothwa", "Dodloza", "Nombamba"],
    bio: "Inzalo ka Mbola — uNombamba wazala uSamposon, uJakada, uLena noMambuthweni.",
  },
  {
    id: "nana",
    name: "Nana",
    parent: "mantanga",
    children: ["Jamani", "Sigenu", "Lumko", "Sumani"],
  },
  {
    id: "jamani",
    name: "Jamani",
    parent: "nana",
    children: ["Sphiwe", "Gift", "Nomthandazo"],
  },
  {
    id: "sigenu",
    name: "Sigenu",
    parent: "nana",
    children: ["Mzulelwa", "Msevula"],
  },
  {
    id: "lumko",
    name: "Lumko",
    parent: "nana",
    children: ["Mkhele", "Mathotho", "Ndlanzi", "Intombi??", "Intombi??"],
  },
  {
    id: "lulaka",
    name: "Lulaka",
    parent: "mbiko",
    children: ["Majavu", "Vuyisile", "Vuyani", "Themba", "Makhehlani", "Vuyelwa", "Vuyiswa", "Nomvuyo"],
  },

  // ---- Saga ----
  {
    id: "saga",
    name: "Saga",
    parent: "minyi",
    note: "umzukulwana ka Minyi (kuphando)",
    children: ["Gikiza", "Zithengele", "Mlungu", "Boniwe"],
  },
  {
    id: "gikiza",
    name: "Gikiza",
    parent: "saga",
    children: ["Mpisi"],
  },
  {
    id: "zithengele",
    name: "Zithengele",
    parent: "saga",
    children: ["Qaliwe"],
  },
  {
    id: "mlungu",
    name: "Mlungu",
    parent: "saga",
    children: ["Gunyazile"],
  },
];

const byId = new Map(PEOPLE.map((p) => [p.id, p]));
const byName = new Map(PEOPLE.map((p) => [p.name.toLowerCase(), p]));

export const getPerson = (id: string) => byId.get(id.toLowerCase());
export const findByName = (name: string) => byName.get(name.toLowerCase());
export const getChildren = (id: string) =>
  PEOPLE.filter((p) => p.parent === id);

export const getAncestry = (id: string): Person[] => {
  const chain: Person[] = [];
  let cur = byId.get(id);
  while (cur) {
    chain.unshift(cur);
    cur = cur.parent ? byId.get(cur.parent) : undefined;
  }
  return chain;
};

export const ROOT = PEOPLE[0];
