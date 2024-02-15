import React, { HtmlHTMLAttributes, useState, useEffect } from 'react';
import './VisionTag.css'

export interface TextInputProps {
    placeholder?: string;
    text: string;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode
    cssOverride?: string | undefined;
}



export default function TextInput(props: React.PropsWithChildren<TextInputProps>){
    return (
        <input type="text" placeholder={props.placeholder} />
    );
}