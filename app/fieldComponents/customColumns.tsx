import React from "react";
import { ButtonToggle } from "tinacms";

export const columnWidthToggle = (props) => {
    const numberOfCols = React.useMemo(() => {
        let fieldName = props.field.length();

        return fieldName;

    }, [props.tinaForm.values]);

    console.log("NUMBER OF COLS:");
    console.log(numberOfCols);

    if (numberOfCols !== '2') {
        return null;
    }
    return (
        <>
            <label htmlFor={props.field.name} className="block font-sans text-xs font-semibold text-gray-700 whitespace-normal mb-2 undefined">Ratio of Column Widths</label>

            <ButtonToggle {...props} /><br />
        </>
        );
};