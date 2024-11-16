import { cacheExchange, createClient, fetchExchange} from '@urql/core';
import { registerUrql } from '@urql/next/rsc';

const makeClient = () => {
  return createClient({
    url: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
      const token = process.env.CONTENTFUL_ACCESS_KEY;
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' },
      };
    }
  });
};

export const { getClient } = registerUrql(makeClient);