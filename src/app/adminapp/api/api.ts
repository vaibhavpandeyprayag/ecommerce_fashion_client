/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import { useCallback, useEffect, useState } from "react";

// const API_URL = `http://localhost:5000/api`;
const API_URL = `https://ecommerce-fashion-api.onrender.com/api`;
const apiConfig: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

interface Call {
  loading: boolean;
  response: any;
  error: any;
}

export const useAPIAutoCall = (
  url: string,
  method: "GET" | "POST",
  payload: any = null
) => {
  const [call, setCall] = useState<Call>({
    loading: false,
    response: null,
    error: null,
  });

  useEffect(() => {
    let isMounted: boolean = true;

    axios({
      method: method,
      url: `${API_URL}/${url}`,
      data: payload,
      ...apiConfig,
    })
      .then((res: AxiosResponse) => {
        if (isMounted)
          setCall({ loading: false, response: res.data, error: null });
      })
      .catch((err: AxiosError) => {
        if (isMounted) setCall({ loading: false, response: null, error: err });
      });

    return () => {
      isMounted = false;
    };
  }, [url, method, payload]);

  return call;
};

export const useAPICall = () => {
  const [call, setCall] = useState<Call>({
    loading: false,
    response: null,
    error: null,
  });

  const trigger = useCallback(
    async (
      url: string,
      method: "GET" | "POST" = "GET",
      payload: any = null
    ) => {
      setCall({ loading: true, response: null, error: null });
      try {
        axios({
          method: method,
          url: `${API_URL}/${url}`,
          data: payload,
          ...apiConfig,
        })
          .then((res: AxiosResponse) => {
            setCall({ loading: false, response: res.data, error: null });
          })
          .catch((err: AxiosError) => {
            setCall({ loading: false, response: null, error: err });
          });
      } catch (err: any) {
        setCall({
          loading: false,
          response: null,
          error: err.message || "Unknown error",
        });
      }
    },
    []
  );

  return { ...call, trigger };
};
