self.__uv$config = {
    prefix: '/uv/service/',
    
    // The backend server that actually fetches the sites
    bare: 'https://bare.benroxy.me/', 
    
    // Encoding settings (XOR is standard for Ultraviolet)
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    
    // Paths to your core Ultraviolet files
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
