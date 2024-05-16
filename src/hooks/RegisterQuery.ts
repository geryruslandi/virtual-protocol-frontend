import { ApiService } from "@src/services/ApiService";
import { useMutation } from "@tanstack/react-query"

export const useRegisterQuery = (dto: RegisterDTO) => {

  const process = async () => {
    const resp = await ApiService.register(dto)

    return resp.data.data
  }

  return useMutation({
    mutationKey: ['regoster'],
    mutationFn: process,
  });
}
