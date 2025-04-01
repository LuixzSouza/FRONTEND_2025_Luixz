{/* Utilizando Números */}
[1,2,3].length;                             // 3 - tamanho (número de elementos)
[1,2,3].push(4);                            // 4 - adiciona elemento no final (novo tamanho)
[1,2,3].unshift(0);                         // 4 - adiciona elemento no início (novo tamanho)
[1,2,3].pop();                              // 3 - remove o último elemento e o retorna
[1,2,3].shift();                            // 1 - remove o primeiro elemento e o retorna
[1,2,3].at(2);                              // 3 - acessa o elemento no índice 2
[1,2,3].indexOf(3);                         // 2 - retorna o índice do elemento 3
[1,2,3].includes(3);                        // true - verifica se o elemento 3 está presente
[1,2,3].map((num) => num * 2);              // [2, 4, 6] - transforma os elementos (multiplica por 2)
[1,2,3].filter((num) => num > 1);           // [2, 3] - filtra elementos maiores que 1
[1,2,3].every((num) => num > 0);            // true - verifica se todos os elementos são maiores que 0
[1,2,3].some((num) => num > 2);             // true - verifica se algum elemento é maior que 2
[1,2,3].fill(0);                            // [0, 0, 0] - preenche o array com 0
[1,2,3].reduce((acc, num) => acc + num, 0); // 6 - reduz (soma) os elementos a um único valor
[1,2,3].concat([4, 5]);                     // [1, 2, 3, 4, 5] - concatena arrays
[1,2,3].reverse();                          // [3, 2, 1] - inverte a ordem dos elementos
[1,2,3].sort();                             // [1, 2, 3] - ordena os elementos
[1,2,3].join("-");                          // "1-2-3" - junta os elementos em uma string separada por "-"
[1,2,3].flat();                             // [1, 2, 3] - achata arrays aninhados (nesse caso, já está "plano")
[1,2,3].find((num) => num === 1);           // 1 - encontra o primeiro elemento igual a 1
[1,2,3].findIndex((num) => num === 2);      // 1 - retorna o índice do primeiro elemento igual a 2
[1,2,3].toString();                         // "1,2,3" - converte o array para string
[1,2,3].toLocaleString();                   // "1,2,3" - converte para string considerando a localidade
[1,2,3].slice(1, 2);                        // [2] - extrai uma parte do array (do índice 1 até antes do 2)
[1,2,3].splice(1, 1, "a");                  // [2] - remove 1 elemento a partir do índice 1 e insere "a"
Array.isArray([1, 2, 3]);                   // true - verifica se é um array
Array.from("123");                          // ["1", "2", "3"] - cria um array a partir de um iterável (string)

{/* Utilizando Strings */}
"JavaScript".length;                        // 10 - tamanho (número de caracteres)
"JavaScript"[2];                            // "v" - caractere no índice 2
"JavaScript".charAt(2);                     // "v" - caractere no índice 2
"JavaScript".charCodeAt(2);                 // 118 - código do caractere "v"
"JavaScript".indexOf("S");                  // 4 - posição de "S"
"JavaScript".toLowerCase();                 // "javascript" - converte para minúsculas
"JavaScript".toUpperCase();                 // "JAVASCRIPT" - converte para maiúsculas
"JavaScript".slice(2, 5);                   // "vaS" - extrai parte da string (índices 2 a 4)
"JavaScript".substring(2, 5);               // "vaS" - extrai parte da string (índices 2 a 4)
"JavaScript".substr(2, 2);                  // "va" - extrai 2 caracteres a partir do índice 2
"JavaScript".concat("Dev");                 // "JavaScriptDev" - concatena strings
"JavaScript".split(" ");                    // ["JavaScript"] - divide a string em array (separador: " ")
"JavaScript Dev".includes("Dev");           // true - verifica se contém "Dev"
"JavaScript Dev".trim();                    // "JavaScript Dev" - remove espaços do início e final
"JavaScript Dev".trimStart();               // "JavaScript Dev" - remove espaços do início
"JavaScript Dev".trimEnd();                 // "JavaScript Dev" - remove espaços do final
"Java Dev".replace("Dev", "JS");            // "Java JS" - substitui a primeira ocorrência de "Dev" por "JS"
"Java Dev".replaceAll("Dev", "JS");         // "Java JS" - substitui todas as ocorrências de "Dev" por "JS"
"Dev".padStart(10, "*");                    // "*******Dev" - preenche o início com "*" até atingir comprimento 10
"Dev".padEnd(10, "*");                      // "Dev*******" - preenche o final com "*" até atingir comprimento 10
"JavaScript Dev".startsWith("Java");        // true - verifica se inicia com "Java"
"JavaScript Dev".endsWith("Java");          // false - verifica se termina com "Java"
"JavaScript Dev".repeat(3);                 // "JavaScript DevJavaScript DevJavaScript Dev" - repete a string 3 vezes
"JavaScript Dev".indexOf("JavaScript");     // 0 - posição de "JavaScript" (início)
"JavaScript Dev".lastIndexOf("Dev");        // 11 - última posição de "Dev"
"JavaScript Dev".search("Dev");             // 11 - posição de "Dev" (busca com regex)
"JavaScript Dev".includes("Dev");           // true - verifica se contém "Dev"
"1".parseInt()                              // 1 - traforma String em numero

{/* Utilizando Data */}
const date = new Date();                    // Cria um objeto Date com a data/hora atuais
new Date(1682452894553);                    // Cria uma data a partir do timestamp (milissegundos desde 01/01/1970)
new Date("2023-04-25");                     // Cria uma data com base em uma string (interpreta como meia-noite)
new Date("2023-04-25T01:10:00");            // Cria uma data com uma string ISO (com horário)
new Date(2023, 3, 25, 1, 10, 0, 0);         // Cria uma data informando ano, mês (0-based), dia, hora, minuto, segundo, milissegundo

// ===================================
// Conversões
// ===================================
date.toString();                            // "Wed Feb 12 2025 12:34:56 GMT-0300" (string completa)
date.toDateString();                        // "Wed Feb 12 2025" (somente data)
date.toTimeString();                        // "12:34:56 GMT-0300" (somente horário)
date.toISOString();                         // "2025-02-12T15:34:56.789Z" (formato UTC)
date.toLocaleString();                      // "12/02/2025, 12:34:56" (formato local)
date.toLocaleDateString();                  // "12/02/2025" (somente a data local)
date.toLocaleTimeString();                  // "12:34:56" (somente o horário local)
date.getTime();                             // 1745271296789 (timestamp em milissegundos)

// ===================================
// Acessando Methods
// ===================================
date.getFullYear();                         // 2025 (ano com 4 dígitos)
date.getMonth();                            // 1 (fevereiro, pois janeiro = 0)
date.getDate();                             // 12 (dia do mês)
date.getDay();                              // 3 (quarta-feira, pois domingo = 0)
date.getHours();                            // 12 (horas, de 0 a 23)
date.getMinutes();                          // 34 (minutos, de 0 a 59)
date.getSeconds();                          // 56 (segundos, de 0 a 59)
date.getMilliseconds();                     // 789 (milissegundos, de 0 a 999)
date.getTime();                             // 1745271296789 (timestamp)
date.getTimezoneOffset();                   // 180 (diferença de minutos para UTC)

// ===================================
// Atribuindo Methods
// ===================================
date.setFullYear(2023);                     // Define o ano como 2023
date.setMonth(11);                          // Define o mês como dezembro (11, pois janeiro = 0)
date.setDate(1);                            // Define o dia do mês como 1
date.setHours(10);                          // Define as horas como 10
date.setMinutes(20);                        // Define os minutos como 20
date.setSeconds(20);                        // Define os segundos como 20
date.setMilliseconds(20);                   // Define os milissegundos como 20
date.setTime(1680153156131);                // Define a data com base em um timestamp específico

{/* DOM Methods */}

// ===================================
// 1. Acessando Elementos
// ===================================
document.getElementById("id");                // Acessa um elemento pelo ID
document.getElementsByClassName("class");       // Retorna uma coleção de elementos com a classe especificada
document.getElementsByTagName("tag");           // Retorna uma coleção de elementos com a tag especificada
document.querySelector("selector");             // Retorna o primeiro elemento que corresponde ao seletor CSS
document.querySelectorAll("selector");          // Retorna todos os elementos que correspondem ao seletor CSS (NodeList)


// ===================================
// 2. Criando e Inserindo Elementos
// ===================================
document.createElement("name");                 // Cria um novo elemento HTML com a tag informada
document.createTextNode("text");                // Cria um nó de texto com o conteúdo informado
elem.appendChild(child);                        // Adiciona o nó "child" como filho de "elem"
elem.removeChild(child);                        // Remove o nó "child" de "elem"
elem.replaceChild(newChild, oldChild);          // Substitui "oldChild" por "newChild" dentro de "elem"


// ===================================
// 3. Modificando Elementos
// ===================================
elem.innerHTML = "<h2>outerHTML</h2>";           // Define o conteúdo HTML interno do elemento
elem.innerText = "inner text";                  // Define o texto visível do elemento (considera formatação)
elem.textContent = "text content";              // Define o conteúdo de texto (sem considerar formatação CSS)
elem.style.color = "blue";                      // Modifica o estilo do elemento (ex.: cor do texto)
elem.outerHTML = "<p>Learn with <strong>Athereos</strong></p>";  // Substitui o elemento inteiro por novo HTML


// ===================================
// 4. Acessando Parente, Filhos e Irmãos
// ===================================
elem.parentElement;                             // Retorna o elemento pai de "elem"
elem.children;                                  // Retorna uma coleção dos filhos (element nodes) de "elem"
elem.firstElementChild;                         // Retorna o primeiro filho (element node) de "elem"
elem.lastElementChild;                          // Retorna o último filho (element node) de "elem"
elem.nextElementSibling;                        // Retorna o próximo irmão (element node) de "elem"
elem.previousElementSibling;                    // Retorna o irmão anterior (element node) de "elem"


// ===================================
// 5. Modificando Atributos
// ===================================
elem.getAttribute("attr");                      // Retorna o valor do atributo "attr"
elem.setAttribute("attr", "value");             // Define o valor do atributo "attr"
elem.removeAttribute("attr");                   // Remove o atributo "attr"


// ===================================
// 6. Manipulando Classes do Elemento
// ===================================
elem.classList.add("my-class");                 // Adiciona a classe "my-class" ao elemento
elem.classList.remove("my-class");              // Remove a classe "my-class" do elemento
elem.classList.toggle("my-class");              // Alterna a existência da classe "my-class" (adiciona ou remove)
elem.classList.contains("my-class");            // Verifica se o elemento possui a classe "my-class"


// ===================================
// 7. Eventos no DOM
// ===================================

// Adicionando um listener para o evento de clique
document.addEventListener('click', (event) => {
    console.log('Click Event', event);
});

// Removendo um listener para o evento de clique
// IMPORTANTE: Para remover corretamente, a mesma referência da função deve ser utilizada.
document.removeEventListener('click', (event) => {
    console.log('Unregistered Event', event);
});


// ===================================
// 8. Tipos de Eventos
// ===================================

// Eventos de Teclado
// keydown    // Disparado quando uma tecla é pressionada
// keyup      // Disparado quando uma tecla é liberada

// Eventos de Formulário
// blur       // Disparado quando um elemento perde o foco
// change     // Disparado quando o valor de um elemento muda
// focus      // Disparado quando um elemento recebe foco
// select     // Disparado quando o texto é selecionado
// submit     // Disparado ao submeter um formulário
// reset      // Disparado ao resetar um formulário

// Eventos de Mouse
// click      // Disparado ao clicar com o mouse
// dblclick   // Disparado ao dar um duplo clique (observe: a forma correta é "dblclick")
// mousedown  // Disparado quando o botão do mouse é pressionado
// mouseup    // Disparado quando o botão do mouse é liberado
// mouseover  // Disparado quando o mouse passa sobre o elemento
// mousemove  // Disparado quando o mouse se move sobre o elemento

// Eventos da Janela (Window)
// abort      // Disparado quando o carregamento de um recurso é abortado
// error      // Disparado quando ocorre um erro
// load       // Disparado quando a página ou recurso termina de carregar
// unload     // Disparado quando a página está para ser descarregada
// scroll     // Disparado quando ocorre rolagem na página
// resize     // Disparado quando a janela é redimensionada