"use client";

import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const navigation = [
    {
        item: "Home",
    },
    {
        item: "About",
    },
    {
        item: "Customers",
    },
    {
        item: "Contact",
    },
    {
        item: "Pricing",
    },
]

export const Navbar = () => {
    return (
        <div className="flex items-center justify-center w-full pt-8 select-none">
            <NavigationMenu className={`w-full max-w-[1200px] justify-between px-5 py-2 h-[60px] items-center`}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" className="flex items-center space-x-2">
                            <Logo />
                            <h2 className="text-2xl font-bold">Mediacy</h2>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList className="flex justify-between items-center font-light space-x-14 text-xs">
                    {navigation.map((link) => (
                        <NavigationMenuItem className="cursor-pointer hover:underline">
                            <NavigationMenuLink>
                                {link.item}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/">
                            <Button variant={"primary"} size={"lg"}>
                                Login
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
};