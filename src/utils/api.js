const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1'

  async function fetchWithUrl(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }
  const putAccesToken = (token) => {
    localStorage.setItem('accessToken', token);
  };

  const getAccessToken = () => localStorage.getItem('accessToken');

  async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const responseJson = await response.json();
    const { status, message } = responseJson; // mengambil status dan message dari responseJson

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson; // mengambil data : {user} dari responseJson

    return user;
  }
  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, password,
      }),
    });

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { token } } = responseJson;

    return token;
  }

  async function getOwnProfile() {
    const response = await fetchWithUrl(`${BASE_URL}/users/me`);

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson;

    return user;
  }

  async function getAllUsers() {
    const response = await fetchWithUrl(`${BASE_URL}/users`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { users } } = responseJson;

    return users
  }

  async function allThreads() {
    const response = await fetch(`${BASE_URL}/threads`);

    const responseJson = await response.json();

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { threads } } = responseJson;

    return threads
  }

  async function threadDetail(threadId) {
    const response = await fetch(`${BASE_URL}/threads/${threadId}`)

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { detailThread } } = responseJson

    return detailThread
  }
  // /threads/<threadId>/comments
  async function createComment(threadId) {
    const response = await fetch(`${BASE_URL}/threads/${threadId}/comments`, {
      method: 'POST',
      
    })
  }

  return {
    putAccesToken, getAccessToken, register, login, getOwnProfile, getAllUsers, allThreads, threadDetail
  };
})();

export default api;



