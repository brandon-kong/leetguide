import { BrandWithText } from "@/components"

export default function MainNavbar ()
{
    return (
        <header className="bg-primary-100 flex items-center justify-between w-full h-navbar-height px-content-padding-x">
            <nav className="flex items-center justify-between mx-auto max-w-content-width w-full py-2">
                <div className="flex items-center flex-1">
                    <a href={"/"} className="flex items-center flex-shrink-0">
                        <BrandWithText className={'h-8 w-8'} />
                    </a>
                </div>

                <img src={'/icons/menu.svg'} alt={'Menu'} className={'h-7 w-7 select-none cursor-pointer'} />
                
            </nav>
        </header>
    )
}