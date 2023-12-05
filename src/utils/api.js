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
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson;

    return user;
  }
  // masuk kebody kamu bisa ubah menjadi stringify
  async function login({ email, password}) {
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


  return {
    putAccesToken, getAccessToken, register, login, getOwnProfile, getAllUsers, allThreads
  };
})();

export default api;



