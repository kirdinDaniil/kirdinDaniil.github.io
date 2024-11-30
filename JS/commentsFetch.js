document.addEventListener('DOMContentLoaded', () => {
    const commentsContainer = document.getElementById('comments_container');
    const preloader = document.getElementById('preloader');

    // Fetch Comments
    fetchComments();

    function fetchComments() {
        fetch('https://jsonplaceholder.typicode.com/comments?_start=100&_limit=5')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(comments => {
                preloader.style.display = 'none';
                renderComments(comments);
            })
            .catch(error => {
                preloader.style.display = 'none';
                showError(error.message);
            });
    }

    function renderComments(comments) {
        comments.forEach(comment => {
            const commentEl = document.createElement('div');
            commentEl.classList.add('comment');

            commentEl.innerHTML = `
                        <h4>${comment.name} (${comment.email})</h4>
                        <p>${comment.body}</p>
                    `;

            commentsContainer.appendChild(commentEl);
        });
    }

    function showError(message) {
        const errorEl = document.createElement('div');
        errorEl.classList.add('error');
        errorEl.textContent = `⚠️ Something went wrong: ${message}`;
        commentsContainer.appendChild(errorEl);
    }
});