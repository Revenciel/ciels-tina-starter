import React from "react";
import { type Template } from "tinacms";
import { PageBlocksCustomContent } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";


//bugs

// default column ratio doesn't work
// when creating a new band, no content shows until colratio is set
// still think about how to separate ratios for 2 and 3 column layouts

//TODO
// add alignment option for columns

export const CustomContent = ({ data }: { data: PageBlocksCustomContent }) => {
    function colWidth(ratio: any) {

        if (!ratio) {
            return ['full', 'full', 'full', 'full'];
        }

        let array = ratio.split(" ");

        return array;
    }

    return (
        <section className={"customContent"}>
            <div className="wrapper">
                <hgroup>
                    <h2>{data?.heading}</h2>
                    <TinaMarkdown content={data?.subheading} />
                </hgroup>
                <div className="columns">
                    {data?.columns && data.columns.map((column, i) => (
                        <div key={i} className={
                            `${colWidth(data?.columnRatio)[i]} column`}
                        >
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
    ui: {
        //   previewSrc: "/blocks/calendar.png",
        defaultItem: {
            columns: [
                {
                    content: {
                        type: 'root',
                        children: [
                            {
                                type: 'p',
                                children: [
                                    {
                                        type: 'text',
                                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
            columnRatio: 'full full full full',
        },
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
            name: 'columns',
            type: 'object',
            label: "Columns",
            list: true,
            description: "You can add text, media, and images to each column.",
            ui: {
                max: 4,
                itemProps: (item) => {
                    // console.log("ITEM?.CONTENT:");
                    // console.log(item?.content.children[0].children[0].text.substring(0, 20) + "..."); 
                    if (item?.content?.children[0]?.children[0]?.text) {
                        if (item?.content.children[0].children[0].text.length > 20) {
                            return { label: item?.content.children[0].children[0].text.substring(0, 20) + "...", };
                        }
                        else return { label: item?.content.children[0].children[0].text };
                    }
                    return { label: 'Column content' };

                },
                defaultItem: {
                    content: {
                        type: 'root',
                        children: [
                            {
                                type: 'p',
                                children: [
                                    {
                                        type: 'text',
                                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                    },
                                ],
                            },
                        ],
                    },
                },
            },
            fields: [
                {
                    name: 'content',
                    type: 'rich-text',
                    label: 'Content',
                    overrides:{
                        toolbar:[
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
                        'embed',

                        ],
                        showFloatingToolbar: false,
                    }
                },
            ],
        },
        {
            name: 'columnRatio',
            type: 'string',
            label: 'Column Ratio',
            ui: {
                component: 'select',
            },
            options: [
                {
                    label: 'Equal Width Columns (Any number)',
                    value: 'full full full full',
                },
                {
                    label: '1:2 (Two columns)',
                    value: 'half full full full',
                },
                {
                    label: '2:1 (Two columns)',
                    value: 'full half full half',
                },
                {
                    label: '2:1:1 (Three columns)',
                    value: 'full half half half',
                },
                {
                    label: '1:1:2 (Three columns)',
                    value: 'half half full full',
                },
            ],
        },
    ],
}
