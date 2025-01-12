/**
 * @type {import('tinacms').Collection}
 */

import { gCalBlockSchema } from "../../app/Components/blocks/GCal";
import { customContentBlockSchema } from "../../app/Components/blocks/CustomContent";

export default {
  label: "Pages",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    // {
    //   name: "body",
    //   label: "Main Content",
    //   type: "rich-text",
    //   isBody: true,
    // },
    {
      name: "title",
      label: "Title",
      type: "string",
      // required: true,
    },
    {
      name: "blocks",
      label: "Page Sections",
      list: true,
      type: "object",
      templates: [
        gCalBlockSchema,
        customContentBlockSchema,
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return ("/" + document._sys.filename);
    },
  },
};