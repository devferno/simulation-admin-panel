const obj = {
  clients_count: 51,
  clients_un_verified: 17,
  clients_verified: 34,
  jsuis_1_count: ["Artisan", 9],
  jsuis_2_count: ["Autres professions", 8],
  jsuis_3_count: ["Commerçant", 6],
  jsuis_4_count: ["Fonctionnaire", 5],
  jsuis_5_count: ["Profession libérale", 9],
  jsuis_6_count: ["Retraité", 7],
  jsuis_7_count: ["Salarié du secteur privé", 7],
};
function makeState(obj) {
  const arr = [];
  for (var [cle, valeur] of Object.entries(obj)) {
    if (
      cle === "clients_count" ||
      cle === "clients_un_verified" ||
      cle === "clients_verified"
    ) {
    } else {
      const newobj = { name: valeur[0], nombre: valeur[1] };
      arr.push(newobj);
    }
  }
  return arr;
}

console.log(makeState(obj));
