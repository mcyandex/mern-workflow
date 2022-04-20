import type { NextPage } from "next";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { withApollo } from "../lib/withApollo";
import {
  getServerPageGetProducts,
  ssrGetProducts,
} from "../graphql/generated/page";
import { useMeQuery } from "../graphql/generated/graphql";

const Home: NextPage = ({ data }: any) => {
  const { user } = useUser();

  // const { data, loading, error } = useGetProductsQuery();

  const { data: me } = useMeQuery();

  return (
    <div>
      <h1>Hello {user?.name}</h1>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
      {/* <pre>
        <code>{JSON.stringify(data.products, null, 2)}</code>
      </pre> */}
      <pre>
        <code>{JSON.stringify(me, null, 2)}</code>
      </pre>
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    return {
      props: {},
    };
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
