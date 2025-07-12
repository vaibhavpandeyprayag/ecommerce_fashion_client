import cryptojs from "crypto-js";
import type { ToastOptions } from "react-hot-toast";

export interface AuthState {
  user: any;
  token: string | null;
}

export const ToastConfig: ToastOptions = {
  duration: 3000,
  position: "top-right",
};

export const encrpyt = (data: string) => {
  return cryptojs.AES.encrypt(data, import.meta.env.VITE_SECRET_KEY).toString();
};

export const routes = {
  signup: "/admin/signup",
  login: "/admin/login",
  dashboard: "/admin/user/dashboard",
};
