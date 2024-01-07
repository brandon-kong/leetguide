import cn from "@/util/cn"
import Image from "next/image"

const variants = {
    "sm": "w-8 h-8",
    "md": "w-12 h-12",
    "lg": "",
}

type VariantKey = keyof typeof variants

export type BrandProps = {
    className?: string
    variant?: VariantKey
}

const BrandWithText = ({ className, variant = "md" }: BrandProps) => {
    return (
        <div className={cn("flex items-center", className)}>
            <Image src="/brand/leetguide.svg" alt="Logo" width={30} height={30}
            className={cn(variants[variant])}
            />
        </div>
    )
}

export default BrandWithText

export { BrandWithText }