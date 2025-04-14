/*
// Laço de repetição Inteligente FOREACH

//# Especializado em passar por ARRAYS const user = [{1}, {2}, {3}, {4}, {5}, {6}, etc...]  

forEach(item, index, array)

item - Dados/ Informações contidos na posição atual
index - Número da Posição. Sempre começando em 0.
array - Retorna o Array completo
*/
const teste = [
    {name: 't1', age: 21},
    {name: 't2', age: 31,},
    {name: 't3', age: 11},
    {name: 't4', age: 18},
]

const msg = document.getElementById('msg');
let menor = false;
// Para tirar precisa ter parametros 1 Position -> Item, 2 Position -> index, 3 Positon -> array
teste.forEach((item, index, array) => {
    if (item.age <= 18) {
        menor = true
    }

    console.log(item.name)
    console.log(index)
    
    //msg.innerText = item.name; // Adiciono somente 1 o ultimo
    msg.innerText = teste.map(item => item.name); // Adiciona todos
    console.log(menor)
});
