import httpClient from "@/client/httpClient";

export const loginRequest = async (email: string, password: string) => {
  return httpClient.post("/auth/login", {
    email,
    password,
  });
};
