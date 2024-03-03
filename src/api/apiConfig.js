const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8011e9db0b8f0f5e2fc10a85b0366dea',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;