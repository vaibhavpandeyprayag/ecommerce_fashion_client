import cryptojs from "crypto-js";
import type { ToastOptions } from "react-hot-toast";

export interface AuthState {
  user: any;
  token: string | null;
}

export const ToastConfig: ToastOptions = {
  duration: 3000,
  position: "top-right",
  style: { fontSize: "1.5rem" },
};

export const encrypt = (data: string) => {
  return cryptojs.AES.encrypt(data, import.meta.env.VITE_SECRET_KEY).toString();
};

export const decrypt = (data: any) => {
  return cryptojs.AES.decrypt(data, import.meta.env.VITE_SECRET_KEY).toString(
    cryptojs.enc.Utf8
  );
};

export const routes = {
  signup: "/admin/signup",
  login: "/admin/login",
  dashboard: "/admin/user/dashboard",
  products: "/admin/user/products",
};
