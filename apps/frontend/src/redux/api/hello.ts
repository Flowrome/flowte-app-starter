import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { objectToQuery } from "@utilities/functions/queryparams";
import { HelloAPIResponse } from "#backend/starter/starter/starter.interfaces";

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
