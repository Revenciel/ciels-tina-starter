import React from "react";
import { TinaProvider, type Template } from "tinacms";
import { PageBlocksCustomContent } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const CustomContent = ({ data }: { data: PageBlocksCustomContent }) => {
    return (
        <section className={"customContent" + " "}>
            <div className="wrapper">
                <hgroup>
                    <h2>{data?.heading}</h2>
                    <TinaMarkdown content={data?.subheading} />
                </hgroup>
                <div className="columns">
                    {data?.columns && data.columns.map((column, i) => (
                        <div key={i} className={`col${i + 1}`}>
                            <TinaMarkdown content={column?.content} />
                        </div>
                    ))}
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
        },
        {
            type: 'rich-text',
            label: "Subheading",
            name: "subheading",
            description: "Optional - will display a subheading below the heading.",
            toolbarOverride: ["bold", "italic", "link"],
        },
        {
            name: 'columns',
            type: 'object',
            label: "Columns",
            list: true,
            ui: {
                max: 4,
                itemProps: (item) => {
                    return { label: "Column" };
                }
            },
            fields: [
                {
                    name: 'content',
                    type: 'rich-text',
                    label: 'Content',
                    toolbarOverride: [
                        'heading',
                        'link',
                        'image',
                        'quote',
                        'ul',
                        'ol',
                        'bold',
                        'italic',
                        'code',
                        'codeBlock',
                        // 'mermaid',
                        'table',
                        // 'raw',
                        'embed',]
                },
            ],
        }
    ],
};
