import ClientPage from "./client-page";
import client from "../../tina/__generated__/client";
import Layout from "../Layout/Layout";

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

export default async function Page({
  params,
}: {
  params: { filename: string[] };
}) {
  const data = await client.queries.page({
    relativePath: `${params.filename}.mdx`,
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data} />
    </Layout>
  );
}

// page title export
// export async function getPageTitle({
//   params,
// }: {
//   params: { title: string[] };
// }){
//   const data = await client.queries.page({
//     relativePath: `${params.filename}.mdx`,
//   });
//   return data.data.page.title;
// }
