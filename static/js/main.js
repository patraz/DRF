
const form = document.querySelector('#postForm').addEventListener('submit', e => {
    e.preventDefault();
    const title = getElementById('title')
    const content= getElementById('content')
    const author= getElementById('author')
    console.log(e);
})
const submitButton = document.querySelector('#submmitButton')
submitButton.addEventListener('click', e => {
    console.log(e)
})


function getPostList(){
    fetch('/api/posts/')
    .then(res => res.json())
    .then(data => {
        renderPosts(data)
    })
    .catch(err => {
        console.error(err)
    })
}

function renderPosts(data) {
    return data.map(post => {
        renderPost(post);
    })
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el)
}

function renderPost(post) {
    const root = document.getElementById('root')
    const div = createNode('div');
    div.className = 'post-item';
    const title = createNode('h2');
    const content = createNode('p');
    const publishDate = createNode('span')
    const lastUpdated = createNode('span')
    const author = createNode('small');

    author.innerText = post.author;
    content.innerText = post.content;
    title.innerText = `${post.title} Written by: ${post.author}`;
    publishDate.innerText = `Published: ${new Date(post.publish_date).toUTCString()}`;
    lastUpdated.innerText = `Last Updated: ${new Date(post.updated).toUTCString()}`;

    append(div, title);
    append(div, content);
    append(div, publishDate);
    append(div, lastUpdated);
    append(root, div);
}


getPostList()
