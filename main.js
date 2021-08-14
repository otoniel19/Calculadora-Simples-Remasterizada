var res = document.querySelector("div.res")
var escolha = document.getElementsByClassName("op")

function gerar(total,tabuada) {
  res.innerHTML = ''
  
  if(total.value.length === 0 || tabuada.value.length === 0) {
    res.innerHTML = `Sem resultados...`
  } else {
    
  res.innerHTML = ''
  
  if(escolha[0].selected) {
    for(let i = 1;i <= total.value;i++) {
      res.innerHTML += `${tabuada.value} + ${i} = ${tabuada.value + i}<br>`
    }
  } else if(escolha[1].selected) {
    for(let i = 1;i <= total.value;i++) {
      res.innerHTML += `${tabuada.value} - ${i} = ${i - tabuada.value}<br>`
    }
  } else if(escolha[2].selected) {
    for (let i = 1; i <= total.value; i++) {
      res.innerHTML += `${tabuada.value} x ${i} = ${tabuada.value * i}<br>`
    }
  } else if(escolha[3].selected) {
    for (let i = 1; i <= total.value; i++) {
      res.innerHTML += `${tabuada.value} ÷ ${i} = ${tabuada.value / i}<br>`
    }
  }
}
}

