import { BrandWithText, Button } from "@/components"
import Link from "next/link"

export default function MainNavbar ()
{
    return (
        <header className="my-7 flex items-center justify-between w-full h-navbar-height px-content-padding-x lg:p-0">
            <nav className="flex items-center justify-between mx-auto max-w-content-width w-full py-2">
                <div className="flex items-center flex-1">
                    <Link href={"/"} className="flex items-center flex-shrink-0">
                        <BrandWithText size={'sm'} />
                        <span className="ml-3 font-normal text-3xl font-mono">leetguide</span>
                    </Link>
                </div>

                <ul className="hidden md:flex items-center flex-1 justify-end ">
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
                href={'/sign-in'}
                className={'ml-2'}
                >Sign In</Button>
                
            </nav>
        </header>
    )
}