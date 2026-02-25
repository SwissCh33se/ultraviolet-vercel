const input = document.getElementById('urlInput');
const btn = document.getElementById('searchButton');
const suggestionsBox = document.getElementById('suggestions');
const iframe = document.getElementById('iframeWindow');

// 1. URL PROCESSING (XOR Encoding)
function launch(url) {
    if (!url.startsWith('http')) url = 'https://www.google.com/search?q=' + url;
    
    // Register Service Worker if not active
    window.navigator.serviceWorker.register('/uv/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        // Use the XOR encoder from uv.config.js
        location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
}

// 2. GOOGLE SUGGESTIONS LOGIC
input.addEventListener('input', async () => {
    const query = input.value.trim();
    if (query.length < 2) {
        suggestionsBox.style.display = 'none';
        return;
    }

    // Google Suggest API (Public)
    try {
        const res = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}`);
        const data = await res.json();
        const suggestions = data[1];

        suggestionsBox.innerHTML = '';
        suggestions.slice(0, 5).forEach(s => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = s;
            div.onclick = () => {
                input.value = s;
                launch(s);
            };
            suggestionsBox.appendChild(div);
        });
        suggestionsBox.style.display = 'block';
    } catch (e) { console.error("Suggestion error:", e); }
});

// 3. EVENT LISTENERS
btn.onclick = () => launch(input.value);
input.onkeydown = (e) => { if (e.key === 'Enter') launch(input.value); };

// 4. PANIC KEY (Tilde key ~)
window.onkeydown = (e) => {
    if (e.key === '`') window.location.replace('https://classroom.google.com');
};
