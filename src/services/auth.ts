import { getAPIClient } from '../services/axios'

type SignInRequestData = {
  email: string;
  password: string;
}

export async function signInRequest(data: SignInRequestData) {
  const api = getAPIClient();
  const response = await api.post('/login', data);

  return {
    token: response.data.access_token,
    user: {
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      avatar_url: 'https://github.com/diego3g.png'
    }
  }
}

export async function recoverUserInformation() {
  return {
    user: {
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      avatar_url: 'https://github.com/diego3g.png'
    }
  }
}