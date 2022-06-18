/// <reference types="react" />
export declare const TextWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<import("@mui/material").Theme> & {
    align?: "left" | "right" | "inherit" | "center" | "justify";
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").TypographyClasses>;
    gutterBottom?: boolean;
    noWrap?: boolean;
    paragraph?: boolean;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme>;
    variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline";
    variantMapping?: Partial<Record<"button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline", string>>;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof import("react").HTMLAttributes<HTMLSpanElement>> & {
    ref?: import("react").Ref<HTMLSpanElement>;
}, "children" | keyof import("@mui/material/OverridableComponent").CommonProps | ("p" | "alignContent" | "alignItems" | "alignSelf" | "bottom" | "boxShadow" | "boxSizing" | "color" | "columnGap" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "height" | "justifyContent" | "justifyItems" | "justifySelf" | "left" | "letterSpacing" | "lineHeight" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "order" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "position" | "right" | "rowGap" | "textAlign" | "textOverflow" | "textTransform" | "top" | "visibility" | "whiteSpace" | "width" | "zIndex" | "border" | "borderBottom" | "borderColor" | "borderLeft" | "borderRadius" | "borderRight" | "borderTop" | "flex" | "gap" | "gridArea" | "gridColumn" | "gridRow" | "margin" | "overflow" | "padding" | "displayPrint" | "bgcolor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "marginX" | "marginY" | "paddingX" | "paddingY" | "typography") | "align" | "gutterBottom" | "noWrap" | "paragraph" | "sx" | "variant" | "variantMapping"> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
