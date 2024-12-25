import { tinaField } from "tinacms/dist/react";
import { Page, PageBlocks } from "../../../tina/__generated__/types";
// import { Hero } from "./hero";
// import { Testimonial } from "./testimonial";
import { GCal } from "./GCal";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      <p>this text shows up</p>
      {/* the next part doesn't show up because page.blocks is null for some reason */}
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
          <GCal data={block} />
        </>
      );
    // case "PageBlocksTestimonial":
    //   return <Testimonial data={block} />;
    default:
      return null;
  }
};
