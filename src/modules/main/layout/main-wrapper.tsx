"use client"

import { usePathname } from "next/navigation";

const MainLayout = ({children}:{children: React.ReactNode}) => {
    const pathname = usePathname()
    

    return ( 
        <div>
            {children}
        </div>
     );
}
 
export default MainLayout;