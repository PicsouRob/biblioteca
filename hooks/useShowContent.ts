import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useShowContent = (): boolean => {
    const [show, setShow] = useState<boolean>(true);
    const pathname = usePathname();
    // console.log({ pathname });

    useEffect(() => {
        const pagesExcluded: string[] = [
            '/signin', '/register', '/forgot-password', '/reset-password'
        ];

        if(pagesExcluded.includes(pathname)) {
            setShow(false);
        }
    }, [pathname]);

    return show;
}