"use client";
import { useTina } from "tinacms/dist/react";
import { Blocks } from "../Components/blocks/index";
import type { PageQuery } from "../../tina/__generated__/types";

interface ClientPageProps {
  data: {
    page: PageQuery["page"];
  };
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({ ...props });
  
  // const content = data.page.body;
  return <Blocks {...data?.page} />;
}
