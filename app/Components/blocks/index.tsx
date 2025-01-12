import React from "react";
import { tinaField } from "tinacms/dist/react";
import { Page, PageBlocks } from "../../../tina/__generated__/types";
import { GCal } from "./GCal";
import { CustomContent } from "./CustomContent";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      <p>this text shows up</p>
      {/* the next part doesn't show up, I think because props.blocks is null for some reason */}
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksGCal":
      return (
        <>
          <GCal data ={block} />
        </>
      );
      case "PageBlocksCustomContent":
      return (
        <>
          <CustomContent data ={block} />
        </>
      );
    // case "PageBlocksTestimonial":
    //   return <Testimonial data={block} />;
    default:
      return null;
  }
};

// export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
//   return (
//     <>
//       {props.blocks
//         ? props.blocks.map(function (block, i) {
//             switch (block?.__typename) {
//               case 'PageBlocksGCal':
//                 return (
//                   <React.Fragment key={i + block.__typename}>
//                     <GCal data={block} />
//                   </React.Fragment>
//                 )
//               default:
//                 return null
//             }
//           })
//         : null}
//     </>
//   )
// }
