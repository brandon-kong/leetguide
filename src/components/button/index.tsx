import cn from "@/util/cn";

const shared = "font-mono inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

const variants = {
    "primary": "bg-primary-500 hover:bg-primary-500/90 text-white shadow-sm",
    "secondary": "bg-secondary-500 hover:bg-secondary-600 text-black shadow-sm",
    "outline": "bg-transparent border border-primary-500 hover:bg-primary-50 text-primary-500",
};

const sizes = {
    sm: "h-9 rounded-md px-3 text-xs",
    md: "h-10 rounded-md px-4",
    lg: "h-12 rounded-md px-8",
    icon: "h-9 w-9",
}

type VariantKey = keyof typeof variants
type SizeKey = keyof typeof sizes

export type ButtonProps = {
    className?: string
    variant?: VariantKey
    size?: SizeKey
    children: React.ReactNode
    onClick?: () => void
    
};

const Button = ({ className, variant = "primary", size = "md", children, onClick }: ButtonProps) => {
    return (
        <button className={cn(shared, variants[variant], sizes[size], className)} onClick={onClick}>
            {children}
        </button>
    )
}

const ElevatedButton = ({ className, variant = "primary", size = "md", children, onClick }: ButtonProps) => {
    return (
        <button className={cn(shared, className)} onClick={onClick}>
            <a className="relative" href="#">
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-yellow-400 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-yellow-900">
                    {children}
                </span>
            </a>
        </button>
    )
}

export default Button