window.onload = function() {
    const filmes = localStorage.getItem('filmes')

    if (filmes == null) {
        localStorage.setItem('filmes', JSON.stringify([
            {titulo: "Titulo", genero: "Genero", ano: "Ano"}
        ]))
    }

    mostrarFilmes()
}

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()

    const tituloErro = document.getElementById('tituloErro')
    const generoErro = document.getElementById('generoErro')
    const anoErro = document.getElementById('anoErro')

    tituloErro.textContent = ""
    generoErro.textContent = ""
    anoErro.textContent = ""

    const tituloInput = document.getElementById('titulo')
    const generoInput = document.getElementById('genero')
    const anoInput = document.getElementById('ano')

    if (tituloInput.value ==  "") {
        tituloErro.innerText = "Preencha o Titulo"
        return false
    }

    if (generoInput.value ==  "") {
        generoErro.innerText = "Preencha o genero"
        return false
    }

    if (anoInput.value ==  "" || anoInput.value < 1800) {
        anoErro.innerText = "Preencha o ano"
        return false
    }

    const filme = {
        titulo: tituloInput.value,
        genero: generoInput.value,
        ano: anoInput.value
    }

    const filmes = localStorage.getItem('filmes')
    const filmeArray = JSON.parse(filmes)

    filmeArray.push(filme)
    localStorage.setItem('filmes', JSON.stringify(filmeArray))

    mostrarFilmes()
    tituloInput.value = ""
    generoInput.value = ""
    anoInput.value = ""

})

function mostrarFilmes() {
    const filmes = localStorage.getItem('filmes')
    const filmesArray = JSON.parse(filmes)

    const tbody = document.getElementById('filmes')
    tbody.textContent = ''

    filmesArray.forEach(function(filme){
        const tr = document.createElement('tr')

        const td1 = document.createElement('td')
        td1.textContent = filme.titulo
        
        const td2 = document.createElement('td')
        td2.textContent = filme.genero
        
        const td3 = document.createElement('td')
        td3.textContent = filme.ano

        const td4 = document.createElement('td')
        const btnRemoveMovie = document.createElement('button')
        btnRemoveMovie.textContent = 'Deletar Filme'
        btnRemoveMovie.addEventListener('click', function(){
            removeFilme(filme.titulo)
        })
        td4.append(btnRemoveMovie)

        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)

        tbody.append(tr)
    })
}

function removeFilme(titulo) {
    const filmes = localStorage.getItem('filmes')
    const filmesArray = JSON.parse(filmes)
    
    const novoFilmes = filmesArray.filter(function(filmes){
        return filmes.titulo != titulo;
    })

    localStorage.setItem('filmes', JSON.stringify(novoFilmes))

    mostrarFilmes()
}