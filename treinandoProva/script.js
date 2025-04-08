let btnScript = document.getElementById('addNewUser')

btnScript.addEventListener('click', () => {

    let name = document.getElementById('nameScript').value;
    let cpf = document.getElementById('cpfScript').value;
    let gmail = document.getElementById('gmailScript').value;
    let pais = document.getElementById('paisScript').value;
    let telefone = document.getElementById('telefoneScript').value;

    if (!name || !cpf || !gmail || !pais || !telefone ) {
        alert('Prenchas todos os campos!');
        return;
    }

    if (!gmail.includes('@') || !gmail.includes('.')) {
        alert('Digite um e-mail válido!');
        return;
    }
    

    // Tabela tr e td
    let novoTr = document.createElement('tr');
    novoTr.classList.add('newUser');
    let tableUserNew = document.querySelector('table');
    
    [name, cpf, gmail, pais, telefone].forEach((valor) => {
        const novoTd = document.createElement('td');
        novoTd.textContent = valor;
        novoTr.appendChild(novoTd);
    })

    tableUserNew.appendChild(novoTr)

    // Limpar
    document.getElementById('nameScript').value = '';
    document.getElementById('cpfScript').value = '';
    document.getElementById('gmailScript').value = '';
    document.getElementById('paisScript').value = '';
    document.getElementById('telefoneScript').value = '';

    // Cirar botão para remover
    let tdBtn = document.createElement('td');
    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.addEventListener('click', () => {
        novoTr.remove();
    })
    tdBtn.appendChild(removeBtn);
    novoTr.appendChild(tdBtn)
})