import cn from "@/util/cn"
import Image from "next/image"

const variants = {
    "sm": "",
    "md": "",
    "lg": "",
}

type VariantKey = keyof typeof variants

export type BrandProps = {
    className?: string
    variant?: VariantKey
}

const BrandWithText = ({ className, variant = "md" }: BrandProps) => {
    return (
        <div className={cn("flex items-center", className, variants[variant as VariantKey])}>
            <Image src="/brand/leetguide-2.svg" alt="Logo" width={30} height={30} />
        </div>
    )
}

export default BrandWithText

export { BrandWithText }