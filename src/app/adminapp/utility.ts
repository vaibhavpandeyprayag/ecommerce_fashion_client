import cryptojs from "crypto-js";

export const encrpyt = (data: string) => {
  return cryptojs.AES.encrypt(data, import.meta.env.VITE_SECRET_KEY).toString();
};
