import { H3, P } from "@/components";
import cn from "@/util/cn";
import Image from "next/image";

export type LandingCardProps = {
    title: string;
    subtitle: string;

    image: string;
    className?: string;
};

const LandingCard = ({ title, subtitle, image, className }: LandingCardProps) => {
    return (
        <div className={cn("py-20 px-5 group  border-2 transition-all border-secondary-500 shadow-sm rounded-xl overflow-hidden aspect-square flex flex-col items-center justify-center hover:border-primary hover:shadow-md bg-primary-50 hover:bg-white", className)}>
            <div className="relative min-h-[100px]">
                <Image src={'/icons/triangle.svg'} alt={'triangle'} width={100} height={100} 
                className={'transition-all duration-500 rotate-[24deg] group-hover:rotate-12'}
                />

                <Image src={'/icons/triangle-2.svg'} alt={title} width={100} height={100}
                className={'-rotate-12 group-hover:rotate-45 transition-transform duration-1000 absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 '}
                />

                <Image src={'/icons/book-open.svg'} alt={title} width={70} height={70}
                className={'mt-2 duration-700 transition-transform -rotate-12 group-hover:rotate-0 absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 '}
                />
            </div>
            <div className="p-6 space-y-2">
                <H3 className="text-center">{title}</H3>
                <P className="text-center text-secondary-900">{subtitle}</P>
            </div>
        </div>
    );
};

export default LandingCard;