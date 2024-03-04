import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const useShowContent = (): boolean => {
    const [show, setShow] = useState<boolean>(true);
     const router: AppRouterInstance = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const pagesExcluded: string[] = [
            '/signin', '/register',
        ];

        if(pagesExcluded.includes(pathname)) {
            setShow(false);
        }
    }, [pathname, router]);

    return show;
}