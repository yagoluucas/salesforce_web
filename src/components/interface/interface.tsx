import { ReactNode } from "react";

interface ButtonProps {
    text: string;
    link:string;
    class?:string;
}

interface containerContentLeftProps {
    title:string;
    textParagraph:string;
    linkButton:string;
    textButton:string;
    imgContainer:string;
    altImgContainer:string;
    children?:ReactNode
    isHome?:boolean;
    classes?:string;
    imgClasses?:string;
    btnClasses:string;
}

interface conterinarContentCenterProps{
    title:string;
    children:ReactNode;
}    
export type {ButtonProps, containerContentLeftProps, conterinarContentCenterProps};
    