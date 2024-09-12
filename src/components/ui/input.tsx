import React from "react"

export interface Inputprops extends React.InputHTMLAttributes<HTMLInputElement>{}

const Input = React.forwardRef<HTMLInputElement, Inputprops>(
    ({className, type, ...props}, ref) =>{
        return (
            <input
            type={type}
            className={"flex px-3 py-2 focus-visible:ring-2 h-8 w-full rounded-sm bg-white focus-visible:ring-[#212730] focus-visible:outline-none border border-[#212730] " + className}
            ref={ref}
            {...props}
            />
        )
    }
)

Input.displayName = "Input"

export {Input}