<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Virginia Digital Archive | Peer Review</title>
    <script src="/uv/uv.bundle.js"></script>
    <script src="/uv/uv.config.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background: #0f172a; font-family: 'Inter', sans-serif; color: white; overflow: hidden; }
        .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.1); }
        #suggestions { position: absolute; width: 100%; top: 110%; background: #1e293b; border-radius: 12px; z-index: 1000; display: none; border: 1px solid #334155; }
        .s-item { padding: 12px 20px; cursor: pointer; border-bottom: 1px solid #334155; }
        .s-item:hover { background: #334155; }
        iframe { position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none; display: none; z-index: 9999; background: black; }
    </style>
</head>
<body>

    <div id="ui" class="flex flex-col items-center justify-center min-h-screen p-4">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold tracking-widest text-white">VDA PORTAL</h1>
            <p class="text-slate-500 text-xs">Research Database Access v5.0</p>
        </div>

        <div class="glass w-full max-w-2xl p-6 rounded-3xl relative">
            <div class="flex gap-2">
                <div class="relative flex-grow">
                    <input type="text" id="urlInput" placeholder="Search the archive or enter URL..." 
                           class="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg">
                    <div id="suggestions"></div>
                </div>
                <button id="searchButton" class="bg-blue-600 px-8 rounded-xl font-bold hover:bg-blue-500 transition-all">Go</button>
            </div>
        </div>
    </div>

    <iframe id="iframeWindow"></iframe>

    <script src="example.js"></script>
</body>
</html>
