
const form = document.querySelector('#postForm').addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content= document.getElementById('content').value;
    const author= document.getElementById('author').value;
    console.log(title);
    createPost(title, content, author);
    title.value = '';
    content.value = '';
    author.value = '';
})

const submitButton = document.querySelector('#submitButton')

submitButton.addEventListener('click', e => {
    console.log(e)
})

function createPost(title, content, author){
    const data = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',            
        },
        body: JSON.stringify({
            title, content, author
        })
    }
    fetch('/api/posts/create/', data)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}

function clearChildren(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function getPostList(){
    fetch('/api/posts/')
    .then(res => res.json())
    .then(data => {
        clearChildren(root)
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

    const link = createNode('a')
    link.href = `/posts/${post.id}/`
    const title = createNode('h2');
    append(link, title)
    const content = createNode('p');
    const publishDate = createNode('span')
    const lastUpdated = createNode('span')
    const author = createNode('small');

    author.innerText = post.author;
    content.innerText = post.content;
    title.innerText = `${post.title} Written by: ${post.author}`;
    publishDate.innerText = `Published: ${new Date(post.publish_date).toUTCString()}`;
    lastUpdated.innerText = `Last Updated: ${new Date(post.updated).toUTCString()}`;

    append(div, link);
    append(div, content);
    append(div, publishDate);
    append(div, lastUpdated);
    append(root, div);
}


getPostList()
