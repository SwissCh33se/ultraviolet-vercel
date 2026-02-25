const input = document.getElementById('urlInput');
const suggestionsBox = document.getElementById('suggestions');
const iframe = document.getElementById('iframeWindow');

async function launch(url) {
    if (!url.startsWith('http')) url = 'https://www.google.com/search?q=' + url;
    
    // Register and wait for Service Worker
    const reg = await navigator.serviceWorker.register('/uv/sw.js', { scope: __uv$config.prefix });
    
    if (reg.active) {
        document.getElementById('ui').style.display = 'none';
        iframe.style.display = 'block';
        iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    } else {
        location.reload(); 
    }
}

// Google Search Suggestions
input.addEventListener('input', async () => {
    const q = input.value.trim();
    if (q.length < 2) { suggestionsBox.style.display = 'none'; return; }

    const res = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(q)}`);
    const data = await res.json();
    
    suggestionsBox.innerHTML = '';
    data[1].slice(0, 5).forEach(s => {
        const div = document.createElement('div');
        div.className = 's-item';
        div.textContent = s;
        div.onclick = () => { input.value = s; launch(s); };
        suggestionsBox.appendChild(div);
    });
    suggestionsBox.style.display = 'block';
});

document.getElementById('searchButton').onclick = () => launch(input.value);
input.onkeydown = (e) => { if (e.key === 'Enter') launch(input.value); };

// Panic Key: Tab instantly goes to Google Classroom
window.onkeydown = (e) => {
    if (e.key === 'Escape') window.location.replace('https://classroom.google.com');
};
