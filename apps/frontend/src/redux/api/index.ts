import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { helloApi } from "./hello";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.FE_API_BASE_URL}/`,
  }),
  endpoints: (builder) => ({
    ...helloApi(builder),
  }),
});
export const { useGetHelloByNameQuery } = api;
