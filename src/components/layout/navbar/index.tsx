import { BrandWithText, Button } from "@/components"
import Link from "next/link"

export default function Navbar ()
{
    return (
        <header className="flex items-center justify-between w-full h-16 px-4 bg-white border-b border-gray-200">
            <nav className="flex items-center justify-between mx-auto max-w-content-width w-full py-2">
                <div className="flex items-center flex-1">
                    <Link href={"/"} className="flex items-center flex-shrink-0">
                        <BrandWithText />
                        <span className="ml-2 font-light text-2xl text-gray-800 font-sans">leetguide</span>
                    </Link>
                </div>
                <Button>Sign In</Button>
            </nav>
        </header>
    )
}