import React from "react";
import background from "images/computer.jpg";

export const Page = ({ children }: { children: any }) => {
    return (
        <div style={{
            height: "100%",
            margin: 0,
            textAlign: "center",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url(${background})`,
        }}>
            {children}            
        </div>
    );
};

export const Title = () => {
    return(
        <div style={{
            fontFamily: 'Roboto'
        }}>
            Diseño de páginas web
            <div>

            </div>
        </div>
    )
};

export const Navbar = () => {
    return <div></div>;
};

export const Footer = () => {
    return <div>Footer</div>;
};

export default Title;
