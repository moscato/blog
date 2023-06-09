
const container = document.querySelector('.blogs');

const renderPosts = async () => {
    let uri = 'https://blog-production-08bd.up.railway.app/posts?_sort=likes&_order=desc';

    const res = await fetch(uri);
    
    const posts = await res.json();
    
    let template = '';
    posts.forEach(post => {
        template += `
          <div class="post">
            <h2>${post.title}</h2>
            <p><small>${post.likes} Likes</small></p>
            <p>${post.body.slice(0, 200)}...</p>
            <a href="/details.html?id=${post.id}">read more...</a>
          </div>
        `
    });

    container.innerHTML = template

}

window.addEventListener('DOMContentLoaded', () => renderPosts());

