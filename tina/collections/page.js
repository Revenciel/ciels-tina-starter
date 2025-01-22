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
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
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
    filename: {
      slugify: values => {
        if (values?.parentPage) {
          //18 is character index to remove src/content/pages/
          return values.parentPage.substring(17).replace('.mdx', '') + '/' + `${values?.title?.toLowerCase().replace(/[^a-zA-Z\d_\-\s]/g, '').replace(/\s/g, '-',)}`
        };

        return `${values?.title?.toLowerCase().replace(/[^a-zA-Z\d_\-\s]/g, '').replace(/\s/g, '-',)}`
      },
    },
  },
};