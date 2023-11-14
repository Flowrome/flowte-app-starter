import { helloApi } from "./hello";

export default {
  [helloApi.reducerPath]: {reducer: helloApi.reducer, middleware: helloApi.middleware},
};
