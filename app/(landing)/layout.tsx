import { BackgroundImage } from "./_components/background-image";
import { Navbar } from "./_components/navbar";

interface LandingLayoutProps {
    children: React.ReactNode;
}

const LandingLayout = ({
    children,
}: LandingLayoutProps) => {
    return (
        <>
            <BackgroundImage />
            <Navbar />
            {children}
        </>
    )
};

export default LandingLayout;