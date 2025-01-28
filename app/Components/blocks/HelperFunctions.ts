import type CSS from 'csstype';

export function iframeRatio(props:number){
    let style:CSS.Properties;
    return style = {paddingTop: `${props}%`}
}

//Create band id
export function createID(props:any){
    if (props){
        return props;
    }
    else return;
}

// return styles for band background color/image
    export function bandBg(img: string, op: number,){
        let style:CSS.Properties;
        const opacity = Number(op);
    
        if (!img){
            return;
        }
        else if (!op){
            style = { backgroundImage:`url(${img})`, backgroundSize: 'cover'}
            return style;
        }
        else{
            //set dark color to match $n900
            const RGBs = [30,14,41]
    
            // using linear-background image so that we can overlay the background image with a semi-transparent solid color, impossible with backgroundImage
            style = {
                background:`linear-gradient(rgba(${RGBs[0]},${RGBs[1]},${RGBs[2]},${opacity}),rgba(${RGBs[0]},${RGBs[1]},${RGBs[2]},${opacity})),url('${img}')`, backgroundSize:'cover',
                backgroundPosition:'center',
            }
            return style;
        }
    }

    // fix for weird behavior of hidden headngs
    // makes it so the hgroup is display:none without either a heading or subheading
    export function hideHGroup(heading:any, subheading:any){
        let style = {display:'none'};
        if (!heading && !subheading){
            return style;
        }
        return;
    }