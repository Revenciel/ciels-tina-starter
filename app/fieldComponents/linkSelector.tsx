import siteData from "../../content/site-settings/index.json"
import { TextField, ReferenceField } from "tinacms";
import React from "react";

// FIELD COMPONENTS (for use in the schema of objects that have link fields)
export const internalLink = (props) => {
    const typeOfLink = React.useMemo(() => {
      let fieldName = props.field.name;
      fieldName = fieldName.substring(0, fieldName.lastIndexOf(".")) || fieldName;
      return fieldName.split(".").reduce((o, i) => o[i], props.tinaForm.values)
        .linkType;
    }, [props.tinaForm.values]);
  
    if (typeOfLink !== "internal") {
      return null;
    }
    return ReferenceField(props);
  };
  
  export const externalLink = (props) => {
  
    const typeOfLink = React.useMemo(() => {
      let fieldName = props.field.name;
      fieldName = fieldName.substring(0, fieldName.lastIndexOf(".")) || fieldName;
      return fieldName.split(".").reduce((o, i) => o[i], props.tinaForm.values)
        .linkType;
    }, [props.tinaForm.values]);
  
    if (typeOfLink !== "external") {
      return null;
    }
    return TextField(props);
  };

// UTILITY FUNCTIONS (for use in .tsx component files)
export function showCTA(){
    const cta = siteData?.cta as { showCTA: boolean; linkType: string; relativePath?: string; url?: string; anchor: string };
    if (!cta.showCTA) {
      return "hidden";
    }
    if (cta.linkType === "internal" && cta.relativePath) {
        return "";
    } else if (cta.linkType === "external" && cta.url) {
        return "";
    }
    return "hidden";
}

export function linkTarget(link: any) {
    if (link.linkType === "external") {
        return '_blank';
    }
    return '_self';
}

export function linkDestination(link: any) {
    if (link.linkType === "internal") {
        let relativePath = link?.relativePath?.substring(13).replace('.mdx', '');
        //This magic number comes from the character count of the domain name
        //JK I think it comes from the character count of the file path to the page
        // I should find a way to do this dynamically

        //Use absolute links if using Cloudflare to host, to address trailing slashes issue

        //dev version
        return ("http://localhost:3000/" + relativePath);

        //Prod version - replace URL with your website's URL
        //return ("https://example.com/" + relativePath);
    }
    return link.url;
}