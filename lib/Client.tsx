import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// export const client = new ApolloClient({
//   uri: process.env.NEXT_PUBLIC_GRAPQL_URI,
//   cache: new InMemoryCache(),
// });

const defaultOptions: any = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

// const cache = new InMemoryCache({
//   resultCaching: false,
// });
const cache = new InMemoryCache();

/**
 * The credentials: 'include' allows cookies to be automatically sent
 * along with the request 'include' because backend is on another domain.
 *
 * @see https://www.apollographql.com/docs/react/networking/authentication/#cookie
 */
const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPQL_URI,
  // credentials: "include",
  // fetchOptions: {
  //   mode: "no-cors",
  // },
});

export const client: any = new ApolloClient({
  //   fetchOptions: {
  //     mode: "no-cors",
  //   },
  connectToDevTools: true,
  link,
  cache,
  defaultOptions,
});
