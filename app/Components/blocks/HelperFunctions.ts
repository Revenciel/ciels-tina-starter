import type CSS from 'csstype';

export function iframeRatio(props: number) {
    let style: CSS.Properties;
    style = { paddingTop: `${props}%` };
    return style;
}

// Create band id
export function createID(props: any) {
    if (props) {
        return props;
    }
    else return;
}

// return styles for band background color/image
export function bandBg(img: string | null | undefined, op: number | undefined | null) {
    let style: CSS.Properties;
    const opacity = Number(op);

    if (!img) {
        return;
    }
    else if (!op) {
        style = { backgroundImage: `url(${img})`, backgroundSize: 'cover' };
        return style;
    }
    else {
        // set dark color to match $n900
        const RGBs = [30, 14, 41];

        // using linear-background image so that we can overlay the background image with a semi-transparent solid color, impossible with backgroundImage
        style = {
            background: `linear-gradient(rgba(${RGBs[0]},${RGBs[1]},${RGBs[2]},${opacity}),rgba(${RGBs[0]},${RGBs[1]},${RGBs[2]},${opacity})),url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };
        return style;
    }
}

// fix for weird behavior of hidden headings
// makes it so the hgroup is display:none without either a heading or subheading
export function hideHGroup(heading: any, subheading: any) {
    if (!heading && !subheading) {
        let style = { display: 'none' };
        return style;
    }
    return;
}