import type { Template } from "tinacms";
import { internalLink, externalLink, linkDestination, linkTarget } from "../fieldComponents/linkSelector";

export const Components = {
  cta: props => {

    return (
      <a href={linkDestination(props)} className={"cta " + props.style.toLowerCase()} target={linkTarget(props)}>
        {props.anchor}
      </a>
    );
  },
  video: props => {

    function youtube_parser(url: string) {
      let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      if (url != null) {
        let match = url.match(regExp);
        if (match && match[2].length == 11) {
          return "https://www.youtube.com/embed/" + match[2];
        }
      }
      else {
        return;
      }
    };

    return (
      <div className="video">
        <iframe src={youtube_parser(props.url)} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
    );
  },

  webPage: props => {
    return (
      <iframe src={props.url} height={props.height + 'px'} />
    );
  },
}

export const webPageSchema: Template = {
  name: 'webPage',
  label: 'Web Page',
  fields: [
    {
      name: 'url',
      label: 'Web page URL',
      type: 'string',
    },
    {
      name: 'height',
      label: 'Height of embedded web page (in pixels)',
      type: 'number',
      description: 'Play around and pick a number that shows the amount of the embedded web page that you want to be visible without scrolling.',
    },
  ]
};

export const CtaSchema: Template = {
  name: "cta",
  label: "Call to action",
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
      style: "Primary",
      anchor: "CTA",
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
        component: internalLink,
      },
    },
    {
      type: "string",
      name: "url",
      label: "Link URL",
      ui: {
        component: externalLink,
      },
    },
    {
      type: "string",
      name: "anchor",
      required: true,
      label: "Display Text",
    },
    {
      name: 'style',
      type: 'string',
      label: 'Style',
      options: ['Primary', 'Secondary', 'Tertiary'],
    },
  ],
};

export const videoSchema: Template = {
  name: 'video',
  label: 'YouTube Video',
  fields: [
    {
      type: "string",
      label: "YouTube video link (URL)",
      name: "url",
      description: 'If your video is not on YouTube, you can upload it on YouTube using your Google account.',
    },
  ],
}