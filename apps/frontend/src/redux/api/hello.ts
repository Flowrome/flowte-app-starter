import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { HelloAPIResponse } from "#backend/starter/starter/starter.interfaces";
import { objectToQuery } from "@utilities/functions/queryparams";

export const helloApi = (
  builder: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      // eslint-disable-next-line @typescript-eslint/ban-types
      {},
      FetchBaseQueryMeta
    >,
    never,
    "api"
  >
) => ({
  getHelloByName: builder.query<HelloAPIResponse, string>({
    query: (name: string) => ({
      url: `starter/hello${objectToQuery({ name })}`,
      method: "GET",
    }),
  }),
});
