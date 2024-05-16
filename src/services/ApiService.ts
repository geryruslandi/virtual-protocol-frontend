import axios from "axios";

export class ApiService {

  static httpClient(headers: RecordType = {}) {
    return axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem('jwt')
        }`,
        ...headers,
      },
    });
  }

  static login(username: string, password: string) {
    return ApiService.httpClient().post<LoginResponseDTO>('/auth/login', {username, password});
  }

  static register(dto: RegisterDTO) {
    return ApiService.httpClient().post<RegisterResponseDTO>('/auth/register', dto);
  }
}
