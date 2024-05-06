import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="w-full max-w-[1200px] flex items-center h-[calc(100%-60px)]">
            <div className="w-full flex justify-between pt-16">
                <HeroLeft />
                <HeroRight />
            </div>
        </section>
    )
};

const HeroLeft = () => {
    return (
        <div className="flex flex-col justify-between">
            <HeroInfo />
            <HeroDL />
        </div>
    )
}

const HeroInfo = () => {
    return (
        <div className="flex flex-col space-y-6 select-none">
            <h1 className="font-bold text-[65px] leading-[81px]">
                Welcome to <br />Cryptocurrency <br /> <span className="text-[#6841DA]">Social Media</span>
            </h1>
            <p className="font-light text-xs">
                Measure social media performance, create great reports, and get and <br /> recommend recommendations to increase reach, engagement and sales.
            </p>
            <div className="flex gap-6">
                <Button variant={"secondary"} size={"lg"}>
                    Get started now
                </Button>
                <Button variant={"primary"} size={"lg"}>
                    Contact Us
                </Button>
            </div>
        </div>
    )
}

const HeroDL = () => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
                <Image
                    src={"/star.svg"}
                    alt="Star"
                    width={20}
                    height={20}
                />
                <p className="text-xs text-[#979797] font-bold">
                    PAY ONE-TIME SMALL FEE, USE LIFETIME
                </p>
            </div>
            <div className="flex gap-6">
                <Link href="/" className="cursor-pointer">
                    <Image
                        src={"/appstore-badge.svg"}
                        alt="AppStore Bage"
                        width={120}
                        height={50}
                    />
                </Link>
                <Link href="/" className="cursor-pointer">
                    <Image
                        src={"/googleplay-badge.svg"}
                        alt="AppStore Bage"
                        width={120}
                        height={50}
                    />
                </Link>
            </div>
        </div>
    )
}

const HeroRight = () => {
    return (
        <Image
            alt="Mockup"
            src={"/hero-image.png"}
            width={450}
            height={450}
            priority
        />
    )
}



export default Hero;