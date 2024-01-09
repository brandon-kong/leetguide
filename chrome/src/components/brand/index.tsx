import cn from "@/util/cn"

const variants = {
    "sm": "w-8 h-8",
    "md": "w-10 h-10",
    "lg": "",
}

type VariantKey = keyof typeof variants

export type BrandProps = {
    className?: string
    variant?: VariantKey
}

const BrandWithText = ({ className, variant = "md" }: BrandProps) => {
    return (
        <div className={cn("flex items-center select-none", className)}>
            <img src="/brand/leetguide.svg" alt="Logo" width={30} height={30}
            className={cn(variants[variant])}
            />
        </div>
    )
}

export default BrandWithText

export { BrandWithText }