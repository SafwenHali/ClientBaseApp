import React from "react";
const Button = (props) => {
    const baseStyle = "font-semibold hover:shadow-xl duration-300";
    const rounded ={
        full:"rounded-full",
        xl:"rounded-xl",
        basic:"rounded",
    }
    const colors = {
        white: "text-indigo-700 border border-indigo-700 hover:bg-indigo-700 hover:text-white",
        purple: "text-white bg-indigo-700 border border-white hover:bg-white hover:text-indigo-700 hover:border-indigo-700",
        gray :"text-white bg-gray-800 border border-white hover:bg-white hover:text-indigo-700 hover:border-indigo-700"
    }
    const sizes = {
        sm: "py-1 px-3 text-sm",
        md: "py-2 px-4 text-sm",
        lg :"py-2 px-6 text-md",
        mobile:"w-full py-2 text-lg"
    }
    const combinedStyles = `${baseStyle} ${rounded[props.rounded]} ${colors[props.color]} ${sizes[props.size]}`;
    return(
        <button onClick={props.onClick} className={combinedStyles}>
            {props.children}
        </button>
    )
}
export default Button