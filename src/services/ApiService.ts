import { LocalStorageKeys } from "@src/enums";
import axios from "axios";

export class ApiService {

  static httpClient(headers: RecordType = {}) {
    return axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem(LocalStorageKeys.JWT)
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

  static dailyMatches() {
    return ApiService.httpClient().get<DailyMatchResponseDTO>('/matches')
  }

  static swipe(direction: SwipeDirection, matchId: number) {
    return ApiService.httpClient().post<MessageResponseDTO>(`/matches/${matchId}/swipe`, {
      status: direction === 'right' ? 'like' : 'dislike'
    })
  }
}
