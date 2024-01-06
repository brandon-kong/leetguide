import { H3, P } from "@/components";
import Image from "next/image";

export type LandingCardProps = {
    title: string;
    subtitle: string;

    image: string;
};

const LandingCard = ({ title, subtitle, image }: LandingCardProps) => {
    return (
        <div className={"bg-white border-2 transition-all border-secondary-500 shadow-sm rounded-xl overflow-hidden aspect-square flex flex-col items-center justify-center hover:border-primary hover:shadow-md"}>
            <div className="relative">
                <Image src={image} alt={title} width={100} height={100} />
            </div>
            <div className="p-6 space-y-2">
                <H3 className="text-center">{title}</H3>
                <P className="text-center text-secondary-900">{subtitle}</P>
            </div>
        </div>
    );
};

export default LandingCard;