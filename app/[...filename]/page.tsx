import React from "react";
import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";
import Layout from "../Components/Layout/Layout";
import siteData from "../../content/site-settings/index.json";
import type { Metadata} from "next";

export async function generateMetadata({
  params, 
}: {
  params: { filename: string[] };
}): Promise<Metadata> {
  const data = await client.queries.page({
    relativePath: `${params.filename}.mdx`,
  });

  let title = "";
  if (data.data.page.title) {
    title = data.data.page.title + " | ";
  }

  return {
    title: title + siteData.siteTitle,
  };
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