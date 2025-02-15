 export default {
  async fetch(request) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      url.hostname = 'cors-anywhere.herokuapp.com'; // Pode alterar para outro proxy
      return fetch(url, request);
    }
    return new Response('CORS Proxy Running', { status: 200 });
  }
};

