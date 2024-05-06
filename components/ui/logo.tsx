import Image from "next/image";

export const Logo = () => {
    return (
        <Image
            src={"/logo.png"}
            alt="Mediacy"
            width={36}
            height={36}
            className="cursor-pointer w-auto h-auto"
            priority
        />
    )
};