import React from "react";
import type { Template } from "tinacms";
import { PageBlocksCustomContent } from "../../../tina/__generated__/types";

export const CustomContent = ({ data }: { data: PageBlocksCustomContent }) => {
    return (
        <section className={"customContent" + " "}>
            <div className="wrapper">
                <hgroup>
                    placeholdere
                    {/* <h2>{data?.heading}</h2>
                    <p>{data?.subheading}</p> */}
                </hgroup>
                <div className="columns">
                    <div className="colOne"></div>
                    <div className="colTwo"></div>
                    <div className="colThree"></div>
                    <div className="colFour"></div>
                </div>
            </div>
        </section>
    );
};

export const customContentBlockSchema: Template = {
    name: "CustomContent",
    label: "Custom Content",
    // ui: {
    //   previewSrc: "/blocks/calendar.png",
    // },

    fields: [
        {
            type: 'string',
            label: "Heading",
            name: "heading",
            description: "Optional - will display a heading above the calendar.",
            // toolbarOverride: ["bold", "italic", "link",],
        },
        {
            type: 'string',
            label: "Subheading",
            name: "subheading",
            description: "Optional - will display a subheading below the heading.",
            // toolbarOverride: ["bold", "italic", "link"],
        },
        {
            name: 'columns',
            type: 'object',
            label: "Columns",
            list: true,
            ui: {
                max:4,
            },
            fields: [
                {
                    name: 'content',
                    type: 'rich-text',
                    label: 'Content',
                },
            ],
        }
    ],
};
