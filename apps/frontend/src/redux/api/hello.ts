import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { objectToQuery } from "@utilities/functions/queryparams";
import { HelloAPIResponse } from "#backend/starter/starter/starter.interfaces";

export const helloApi = createApi({
  reducerPath: "helloApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.FE_API_BASE_URL}/starter/hello`,
  }),
  endpoints: (builder) => ({
    getHelloByName: builder.query<HelloAPIResponse, string>({
      query: (name: string) => `${objectToQuery({ name })}`,
    }),
  }),
});
export const { useGetHelloByNameQuery } = helloApi;
