/**
 * @type {import('tinacms').Collection}
 */

import { InternalLink, ExternalLink } from "../../app/fieldComponents/linkSelector";

export default {
    name: "siteConfig",
        label: "Site Settings",
        path: "content/site-settings",
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          filename: {
            readonly: true,
          },
          global: true,
        },
        fields: [
          {
            type: "string",
            name: "siteTitle",
            label: "Website Title",
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
          },
          {
            type: "image",
            name: "favicon",
            label: "Favicon",
            description: "The favicon is the small icon that appears on the browser tab. It is usually the logo, or a simplified version of the logo.",
          },
          { // if I update this, I will need to update any components that use it, and possibly fieldComponents.tsx too
            type: "object",
            label: "Menu Links",
            name: "navLinks",
            description: "If you delete a page that is linked in this menu, you must also delete or update the menu link here!",
            list: true,
            ui: {
              itemProps: (item) => {
                if (item.linkType === "internal") {
                  if (item?.relativePath != null) {
                    var pageName = item?.relativePath
                      .substring(0, item?.relativePath.lastIndexOf("."))
                      .split("/");
                    pageName = pageName[pageName.length - 1];
                    return { label: pageName };
                  }
                  return { label: "Menu Link" }
                }
                if (item?.anchor == null) {
                  return { label: "Menu Link" }
                }
                return { label: item?.anchor };
              },
              defaultItem: {
                linkType: "internal",
              },
            },

            fields: [
              {
                type: "string",
                name: "linkType",
                label: "Destination",
                description: "Is this link internal (goes to a page on your website) or external (goes to a different website)?",
                options: [
                  {
                    label: "Internal",
                    value: "internal"
                  },
                  {
                    label: "External",
                    value: "external",
                  },
                ],
                ui: {
                  component: "button-toggle",
                },
              },
              {
                type: "reference",
                name: "relativePath",
                label: "Page to link to",
                collections: ['page'],
                ui: {
                  component: InternalLink,
                },
              },
              {
                type: "string",
                name: "url",
                label: "Link URL",
                ui: {
                  component: ExternalLink,
                },
              },
              {
                type: "string",
                name: "anchor",
                required: true,
                label: "Display Text",
              },
            ],
          },
          { // if I update this, I will need to update any components that use it, and possibly fieldComponents.tsx too
            type: 'object',
            name: 'cta',
            label: 'Call to Action',
            description: 'Optional',
            ui: {
              itemProps: (item) => {
                if (item.linkType === "internal") {
                  if (item?.relativePath != null) {
                    var pageName = item?.relativePath
                      .substring(0, item?.relativePath.lastIndexOf("."))
                      .split("/");
                    pageName = pageName[pageName.length - 1];
                    return { label: pageName };
                  }
                  return { label: "Menu Link" }
                }
                if (item?.anchor == null) {
                  return { label: "Menu Link" }
                }
                return { label: item?.anchor };
              },
              defaultItem: {
                linkType: "internal",
              },
            },

            fields: [
              {
                type: "boolean",
                name: "showCTA",
                label: "Display call to action",
                description: "Add a button link to your website's header.",
                default: false,
              },
              {
                type: "string",
                name: "linkType",
                label: "Destination",
                description: "Is this link internal (goes to a page on your website) or external (goes to a different website)?",
                options: [
                  {
                    label: "Internal",
                    value: "internal"
                  },
                  {
                    label: "External",
                    value: "external",
                  },
                ],
                ui: {
                  component: "button-toggle",
                },
              },
              {
                type: "reference",
                name: "relativePath",
                label: "Page to link to",
                collections: ['page'],
                ui: {
                  component: InternalLink,
                },
              },
              {
                type: "string",
                name: "url",
                label: "Link URL",
                ui: {
                  component: ExternalLink,
                },
              },
              {
                type: "string",
                name: "anchor",
                required: true,
                label: "Display Text",
              },
            ],
          },
          {
            type: "object",
            label: "Footer",
            name: "footer",
            fields: [
              {
                type: "object",
                label: "Social Links",
                name: "socials",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.platform };
                  },
                },
                fields: [
                  {
                    type: "string",
                    label: "Platform name",
                    name: "platform",
                    description: "E.g., Instagram, YouTube..."
                  },
                  {
                    type: "string",
                    label: "Link",
                    name: "link",
                    description: "The URL to your page."
                  },
                  {
                    type: "image",
                    label: "Icon",
                    name: "icon",
                  },
                ],
              },
              {
                type: "image",
                label: "Logo",
                name: "logo",
              },
              {
                type: "string",
                label: "Copyright holder",
                name: "copyright",
                description: "Likely your name or company name."
              },
            ],
          },
        ],
  };
  