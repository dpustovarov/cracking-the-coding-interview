function checkPermutation(str1, str2){
  if(str1.length !== str2.length) return false;

  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

function checkPermutation2(str1, str2){
  if(str1.length !== str2.length) return false;

  const m = new Map();
  str1.split('').forEach((v) => m.set(v, ~~m.get(v) + 1));
  str2.split('').forEach((v) => m.set(v, ~~m.get(v) - 1));

  return [...m.values()].every((v) => v === 0);
}

function checkPermutation3(str1, str2){
  if(str1.length !== str2.length) return false;

  const m = new Array(128).fill(0);
  str1.split('').forEach((v) => m[v.charCodeAt()]++);
  for(v of str2.split('')){
    m[v.charCodeAt()]--;
    if(m[v.charCodeAt()] < 0) return false;
  }

  return true;
}

[['asdfghjkl', 'asdfghjlk'], ['zsdfghjkl', 'asdfghjlk'], ['asdfghajkl', 'asdfghjkl'], ['', '']]
  .forEach(([v1, v2]) => console.log(checkPermutation3(v1, v2)));
