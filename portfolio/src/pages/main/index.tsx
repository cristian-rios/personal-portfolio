import React from "react";

export const Page = ({ children }: { children: any }) => {
    return <div style={{
        height: '100%',
        width: '100%',
        padding: 10,
        textAlign: 'center'
    }}>{children}</div>;
};

export const Body = () => {
    return <h1>Body</h1>;
};
 
export const Navbar = () => {
    return <div></div>;
};

export const Footer = () => {
    return <h1>Footer</h1>;
};

export default Body;
