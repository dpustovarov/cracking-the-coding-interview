function isUnique(str){
  if(str.length > 256) return false;  // ASCII charset

  const m = {};
  return str.split('').every((v) => m[v] === undefined && (m[v] = true));
}

function isUnique2(str){
  const m = new Map();
  return str.split('').every((v) => m.get(v) === undefined && m.set(v, true));
}

function isUnique3(str){
  const s = new Set();
  return str.split('').every((v) => !s.has(v) && s.add(v));
}

function isUnique4(str){
  let b = 0n;
  return str.split('').every((v) => (c = 1n << BigInt(v.codePointAt()), !(b & c) && (b |= c)));
}

function isUnique5(str){
  return str.split('').every((v, i, a) => !a.includes(v, i + 1));
}

function isUnique6(str){
  return str.split('').sort().every((v, i, a) => v !== a[i + 1]);
}

['asdfghjkl', 'asdfghajkl', ''].forEach((v) => console.log(isUnique4(v)));
