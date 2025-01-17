import React from "react";
import type { Template } from "tinacms";
import { PageBlocksGCal } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { bandBg, hideHGroup, createID } from "./HelperFunctions";
import { wrapFieldsWithMeta } from "tinacms";

export const GCal = ({ data }: { data: PageBlocksGCal }) => {
  return (
    <section
      className={"gCal " + data?.background?.theme}
      style={bandBg(data.background?.backgroundImage, data.background?.imageOpacity)}
      id={createID(data?.heading)}
    >
      <div className="wrapper">
        <hgroup style={hideHGroup(data?.heading, data?.subheading?.children.length)}>
          <h2>{data?.heading}</h2>
          <TinaMarkdown content={data?.subheading} />
        </hgroup>
        <div className="iFrameContainer">
          <iframe
            src={
              "https://calendar.google.com/calendar/embed?src=" +
              data.gCalID
            }
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export const gCalBlockSchema: Template = {
  name: "GCal",
  label: "Google Calendar",
  ui: {
    // previewSrc: "/blocks/calendar.png",
    defaultItem: {
      background: {
        theme: 'lightTheme',
        imageOpacity: 0.7,
    },
    gCalID: 'dirv9v10c32debb8njakrl0mdpp7d8fm',  
    }
  },

  fields: [
    {
      type: 'string',
      label: "Heading",
      name: "heading",
      description: "Optional - will display a heading above the calendar.",
    },
    {
      type: 'rich-text',
      label: "Subheading",
      name: "subheading",
      description: "Optional - will display a subheading below the heading.",
      overrides: {
        toolbar:
          [
            "bold", "italic", "link"
          ],
        showFloatingToolbar: false,
      },
    },
    {
      type: "string",
      label: "Google Calendar ID",
      name: "gCalID",
      description:
        "Make sure you Google Calendar is public. You can find your Google Calendar ID by going to Google Calendar > (your calendar) > ⋮ > Settings and Sharing > Integrate Calendar",
      required: true,
    },
    {
      name: 'background',
      label: 'Background',
      type: 'object',
      description: 'Choose a background color or image.',
      fields: [
        {
          name: 'theme',
          type: 'string',
          label: 'Color',
          description: 'If using a background image, choose "dark."',
          options: [
            {
              label: 'White',
              value: 'lightTheme',
            },
            {
              label: 'Neutral',
              value: 'neutralTheme',
            },
            {
              label: 'Dark',
              value: 'darkTheme',
            },
          ],
        },
        {
          name: 'backgroundImage',
          type: 'image',
          label: 'Background Image',
        },
        {
          name: 'imageOpacity',
          type: 'number',
          label: 'Image Transparency',
          description: 'Higher transparency will make your text easier to read.',
          ui: {
            parse: (val) => Number(val),

            // wrapping our component in wrapFieldsWithMeta renders our label & description.
            component: wrapFieldsWithMeta(({ field, input, meta }) => {
              return (
                <div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    // This will pass along props.input.onChange to set our form values as this input changes.
                    {...input}
                  />
                  <br />
                  {input.value * 100}%
                </div>
              )
            })
          }
        },
      ],
    },
  ],
};
