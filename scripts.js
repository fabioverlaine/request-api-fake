async function executar() {
    const postList = document.querySelector('#postsList');

    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");//chamada a API
    const dados = await resposta.json(); //converte o json para um objeto em JS na memoria
    console.log(dados);

    dados.forEach(function (post) {
        const postElement = document.createElement('article');

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;

        const postAuthor = document.createElement('span');
        postAuthor.textContent = `Autor: ${post.userId}`

        const postContent = document.createElement('p');
        postContent.textContent = post.body;

        postElement.append(postTitle, postAuthor, postContent, document.createElement('hr') );
        postList.appendChild(postElement);
    });
}
executar();