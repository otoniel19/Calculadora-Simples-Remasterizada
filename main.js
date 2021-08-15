var res = document.querySelector("div.res")
var escolha = document.getElementsByClassName("op")

function gerar(total,tabuada) {
  res.innerHTML = ''
  
  if(total.value.length === 0 || tabuada.value.length === 0) {
    res.innerHTML = `Sem resultados...`
  } else {
    
  res.innerHTML = ''
  
  var value = Number(tabuada.value)
  
  if(escolha[0].selected) {
    for(let a = 1;a <= total.value;a++) {
      res.innerHTML += `${tabuada.value} + ${a} = ${value + a}<br>`
    }
  } else if(escolha[1].selected) {
    for(let s = 1;s <= total.value;s++) {
      res.innerHTML += `${tabuada.value} - ${s} = ${s - value}<br>`
    }
  } else if(escolha[2].selected) {
    for (let m = 1;m <= total.value;m++) {
      res.innerHTML += `${tabuada.value} x ${m} = ${value * m}<br>`
    }
  } else if(escolha[3].selected) {
    for (let d = 1;d <= total.value;m++) {
      res.innerHTML += `${tabuada.value} ÷ ${d} = ${value / d}<br>`
    }
  }
}
}

