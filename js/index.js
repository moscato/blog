
const container = document.querySelector('.blogs');

const renderPosts = async () => {
    let uri = 'https://blog-production-08bd.up.railway.app/posts?_sort=likes&_order=desc';
    const options = {
        mode: 'no-cors'
    };

    const res = await fetch(uri, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    
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

