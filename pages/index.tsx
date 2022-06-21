import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import tw from "twin.macro";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section tw='text-xl'>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section tw='text-xl pt-0.5'>
        <h2 tw='text-2xl my-4'>Blog</h2>
        <ul tw='p-0 m-0 list-none'>
        
        </ul>
      </section>
    </Layout>
  );
}
