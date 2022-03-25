const obj = {
  interval_20_30: 101,
  interval_30_40: 53,
  interval_40_50: 74,
  interval_50_60: 57,
  interval_60_x: 43,
};
function makeState(obj) {
  const arr = [];
  for (const [key, value] of Object.entries(obj)) {
    const newobj = {};
    newobj.name = key.substring(9, key.length);
    newobj.value = value;
    arr.push(newobj);
  }
  return arr;
}

console.log(makeState(obj));
