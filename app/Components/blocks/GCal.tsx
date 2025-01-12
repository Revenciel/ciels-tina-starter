import React from "react";
import type { Template } from "tinacms";
import { PageBlocksGCal } from "../../../tina/__generated__/types";

export const GCal = ({ data }: { data: PageBlocksGCal }) => {
  return (
    <section className={"gCal" + " "}>
      <div className="wrapper">
        <hgroup>
          <h2>{data?.heading}</h2>
          <p>{data?.subheading}</p>
        </hgroup>
        <div className="gcal-container">
          {/* <iframe
            src={
              "https://calendar.google.com/calendar/embed?src=" +
              data.gCalID
            }
          ></iframe> */}
        </div>
      </div>
    </section>
  );
};

export const gCalBlockSchema: Template = {
  name: "GCal",
  label: "Google Calendar",
  // ui: {
  //   previewSrc: "/blocks/calendar.png",
  // },

  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading",
      description: "Optional - will display a heading above the calendar.",
      // toolbarOverride: ["bold", "italic", "link",],
    },
    {
      type: "string",
      label: "Subheading",
      name: "subheading",
      description: "Optional - will display a subheading below the heading.",
      // toolbarOverride: ["bold", "italic", "link"],
    },
    // {
    //   name: "theme",
    //   type: "string",
    //   label: "Section Theme",
    //   ui: {
    //     component: "radio-group",
    //     direction: "horizontal",
    //     placeholder: "Light",
    //   },
    //   options: [
    //     {
    //       value: "lightTheme",
    //       label: "Light",
    //     },
    //     {
    //       value: "neutralTheme",
    //       label: "Neutral",
    //     },
    //     {
    //       value: "darkTheme",
    //       label: "Dark",
    //     },
    //   ],
    // },
    // {
    //   type: "string",
    //   label: "Google Calendar ID",
    //   name: "gCalID",
    //   description:
    //     "Make sure you Google Calendar is public. You can find your Google Calendar ID by going to Google Calendar > (your calendar) > ⋮ > Settings and Sharing > Integrate Calendar",
    //   required: true,
    // },
  ],
};
