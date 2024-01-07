import cn from "@/util/cn";

const shared = "font-mono inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

const variants = {
    "primary": "bg-primary hover:bg-primary/90 text-white shadow-sm",
    "primary-light": "bg-primary-100 hover:bg-primary-200 text-primary-900 shadow-sm",
    "secondary": "bg-secondary-500 hover:bg-secondary-600 text-black shadow-sm",
    "ghost": "bg-transparent hover:bg-gray-100 text-gray-700",
    "outline": "bg-transparent border border-primary-500 hover:bg-primary-50 text-primary-500",
    "link": "bg-transparent text-primary-700 underline inline-flex h-fit px-0",
    "danger": "bg-red-500 hover:bg-red-600 text-white shadow-sm",
};

const sizes = {
    sm: "h-9 px-5 text-xs",
    md: "h-10 px-6",
    lg: "h-12 px-8",
    icon: "h-9 w-9",
}

type VariantKey = keyof typeof variants
type SizeKey = keyof typeof sizes

export type ButtonProps = {
    className?: string
    variant?: VariantKey
    size?: SizeKey
    children?: React.ReactNode
    onClick?: () => void
    href?: string
    
};

const Button = ({ className, variant = "primary", size = "md", children, onClick, href }: ButtonProps) => {
    
    if (href) {
        return (
            <a href={href} className={cn(shared, sizes[size], variants[variant], className)} onClick={onClick}>
                {children}
            </a>
        )
    }
    return (
        <button className={cn(shared, sizes[size], variants[variant], className)} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button