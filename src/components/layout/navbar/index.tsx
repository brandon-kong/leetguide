import { BrandWithText, Button } from "@/components"
import Link from "next/link"

import { H1 } from "@/components/typography"

export default function Navbar ()
{
    return (
        <header className="my-7 flex items-center justify-between w-full h-navbar-height px-4">
            <nav className="flex items-center justify-between mx-auto max-w-content-width w-full py-2">
                <div className="flex items-center flex-1">
                    <Link href={"/"} className="flex items-center flex-shrink-0">
                        <BrandWithText />
                        <span className="ml-3 font-light text-3xl font-sans">leetguide</span>
                    </Link>
                </div>

                <ul className="flex items-center flex-1 justify-end">
                    <li>
                        <Button
                        variant={'ghost'}
                        >Home</Button>
                    </li>
                    <li>
                        <Button
                        variant={'ghost'}
                        >Download</Button>
                    </li>
                    <li>
                        <Button
                        variant={'ghost'}
                        >About</Button>
                    </li>
                </ul>
                <Button
                className={'ml-2'}
                >Sign In</Button>
                
            </nav>
        </header>
    )
}