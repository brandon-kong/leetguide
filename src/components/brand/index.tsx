import cn from "@/util/cn"
import Image from "next/image"

const sizes = {
    "sm": "w-8 h-8",
    "md": "w-9 h-9",
    "lg": "w-10 h-10",
}

type SizeKey = keyof typeof sizes

export type BrandProps = {
    className?: string
    size?: SizeKey
}

const BrandWithText = ({ className, size = "md" }: BrandProps) => {
    return (
        <div className={cn("flex items-center", className)}>
            <Image src="/brand/leetguide.svg" alt="Logo" width={30} height={30}
            className={cn(sizes[size])}
            />
        </div>
    )
}

export default BrandWithText

export { BrandWithText }