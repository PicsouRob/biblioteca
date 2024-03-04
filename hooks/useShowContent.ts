import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useShowContent = (): boolean => {
    const [show, setShow] = useState<boolean>(true);
    const pathname = usePathname();

    useEffect(() => {
        const pagesExcluded: string[] = [
            '/signin', '/register',
        ];

        if(pagesExcluded.includes(pathname)) {
            setShow(false);
        }
    }, [pathname]);

    return show;
}