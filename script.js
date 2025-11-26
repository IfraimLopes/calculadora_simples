/*Declaração das variaveis*/
let viso_num = window.document.getElementById('opera-nume')
let resultado = window.document.getElementById('res')
let apagar = document.getElementById('delete')

resultado.innerText = '';
viso_num.innerText = '';

function insert(num){
    let resultadofinal = viso_num.innerHTML += num;
}

apagar.addEventListener('click', () => {
    viso_num.innerText = '';
    resultado.innerText = "";
})

function calcular(){
    let resultadofinal = viso_num.innerText;
   
    if(resultadofinal){
     resultado.innerText = eval(resultadofinal)
    }

}