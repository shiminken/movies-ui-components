import React, { CSSProperties } from "react";
export interface MovieCardProps {
    videoId: string;
    title: string;
    sharedName: string;
    voteUpCount?: string;
    voteDownCount?: string;
    description?: string;
    style?: CSSProperties;
}
declare const _default: React.NamedExoticComponent<MovieCardProps>;
export default _default;
