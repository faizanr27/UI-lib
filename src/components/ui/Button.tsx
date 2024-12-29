import { ReactElement } from "react"

type variants = 'primary' | 'secondary'

interface ButtonProps {
    variant: variants
    size: 'sm' | 'md' | 'lg'
    onClick: () => void
    text: string
    startIcon?: ReactElement
    endIcon?: ReactElement
    }

    const variantStyle = {
        "primary": "bg-purple-600 text-white",
        "secondary": "bg-purple-300 text-purple-600"
    }

    const defaultStyle = "p-2 rounded-md flex items-center"
    
    const sizeStyle = {
        "sm": "py-1 px-2",
        "md": "py-2 px-4",
        "lg": "py-4 px-6"
    }

export const Button = (props: ButtonProps) => {
  return (
    <button className={`${variantStyle[props.variant]} ${defaultStyle} ${sizeStyle[props.size]}`}>
    
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}
    
    </button>
  )
}
