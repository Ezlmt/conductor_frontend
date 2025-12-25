import client from './client';
import type { AxiosResponse } from 'axios';


export interface LoginResponse {
  token: string;
  id: number;
  email: string;
  role: number;
}

export function login(email: string, password: string): Promise<AxiosResponse<LoginResponse>> {
  return client.post('/users/login', { email, password });
}

export interface MeResponse {
  name: string;
  email: string;
  id: number;
  role: number;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: number;
}

export function register(data: RegisterRequest) {
  return client.post('/users/register', data);
}
export function me() {
  return client.get<MeResponse>('/me');
}