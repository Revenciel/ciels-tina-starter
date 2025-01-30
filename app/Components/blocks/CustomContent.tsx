import React from "react";
import { type Template, wrapFieldsWithMeta } from "tinacms";
import { PageBlocksCustomContent } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Components } from '../mdxComponents';
import { CtaSchema } from "../mdxComponents";
import { videoSchema } from "../mdxComponents";
import { webPageSchema } from "../mdxComponents";
import { bandBg, hideHGroup, createID } from "./HelperFunctions";

// // needed for Idea One in columnRatio component (currently unused)
// async function getPageData(relPath: string) {
//     const pageData = await client.queries.page({ relativePath: relPath })

//     return pageData;
// }

export const CustomContent = ({ data }: { data: PageBlocksCustomContent }) => {

    // needed for columnRatio field
    function colWidth(ratio: any) {

        if (!ratio) {
            return ['full', 'full', 'full', 'full'];
        }

        let array = ratio.split(" ");

        return array;
    }

    // //needed for columnRatio component idea 2 (currently unused)
    // let colNum;
    // if (data.columns) {
    //     colNum = data.columns.length;
    // }
    // else colNum = 0;

    // // needed for columnRatio field
    // function colWidth(ratio: any) {

    //     if (!ratio) {
    //         return ['full', 'full', 'full', 'full'];
    //     }

    //     let array = ratio.split(" ");

    //     return array;
    // }

    return (
        <section
            className={"customContent " + data?.background?.theme}
            style={bandBg(data?.background?.backgroundImage as string, data.background?.imageOpacity as number)}
            id={createID(data?.heading)}
        >
            <div className="wrapper">
                <hgroup style={hideHGroup(data?.heading, data?.subheading?.children.length)}>
                    <h2>{data?.heading}</h2>
                    <TinaMarkdown content={data?.subheading} />
                </hgroup>
                <div className="columns">
                    {data?.columns && data.columns.map((column, i) => (
                        <div key={i} className={
                            `${colWidth(data?.columnRatio)[i]} column of${data?.columns?.length}`}
                        >
                            <TinaMarkdown content={column?.content} components={Components} />
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
        itemProps: (item) => {
            if (item?.heading) {
                return { label: item.heading}
            }
            else return { label: 'Custom content' };

        },
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
            background: {
                theme: 'lightTheme',
                imageOpacity: 0.7,
            },
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
                    overrides: {
                        toolbar: [
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
                    },
                    templates: [
                        CtaSchema,
                        videoSchema,
                        webPageSchema,
                    ],
                },
            ],
        },
        {
            name: 'columnRatio',
            type: 'string',
            label: 'Column Ratio',
            ui: {
                component: 'select',
                // IDEA TWO
                // component: async (props) => {
                //     if (colNum == 2 || colNum == 3){
                //         return SelectField(props);
                //     }
                //     else return null;
                // },


                //IDEA ONE
                // component: async (props) => {
                //     // console.log('PROPS');
                //     // console.log(props);

                //     // console.log('RELPATH');
                //     // console.log(props.tinaForm.relativePath); // shows correctly in console

                //     let relPath = props.tinaForm.relativePath.split("/").pop();

                //     let data = await getPageData(relPath);

                //     console.log('PAGEDATA');
                //     console.log(data); // also shows correctly in console

                //     return SelectField(props);
                // },
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
                        component: wrapFieldsWithMeta(({ input }) => {
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
                                    Value: {input.value * 100}%
                                </div>
                            )
                        })
                    }
                },
            ],
        },
    ],
}
