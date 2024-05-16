import { ApiService } from "@src/services/ApiService";
import { useMutation } from "@tanstack/react-query"

export const useLoginQuery = (username: string, password: string) => {

  const process = async () => {
    const res = await ApiService.login(username, password);

    return res.data.data
  }

  return useMutation({
    mutationKey:["login"],
    mutationFn: process,
  });
}
