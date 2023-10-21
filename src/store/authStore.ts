import Cookies from 'universal-cookie';
import { create } from 'zustand';

const cookies = new Cookies();
const getToken = cookies.get('accessToken');
const accessToken = getToken ? getToken : '';

type AuthType = {
  accessToken: string;
  setAccessToken: (payload: string) => void;
  removeAccessToken: () => void;
};

export const useAuthStore = create<AuthType>((set) => ({
  accessToken: accessToken,
  setAccessToken: (payload) => set({ accessToken: payload }),
  removeAccessToken: () => set({ accessToken: '' }),
}));
