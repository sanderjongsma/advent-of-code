document.body.firstChild.innerText.split('\n')
    .filter(v=>v)
    .map((v) => v.replace(/\D/g, ''))
    .map((v) => v[0] + v[v.length-1])
    .reduce((c, v) => c + +v, 0)