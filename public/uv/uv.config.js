self.__uv$config = {
    prefix: '/uv/service/',
    
    /* Wisp is the modern replacement for Bare. 
      It handles YouTube data much better and works natively on Vercel.
    */
    transport: '/lib/wisp.js', 
    wisp: 'wss://wisp.mercurywork.shop/', 

    // Legacy Bare property (kept for backward compatibility, but Wisp will take over)
    bare: 'https://bare.benroxy.me/', 
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
