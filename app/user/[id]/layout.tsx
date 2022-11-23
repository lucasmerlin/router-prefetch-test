import {ReactNode} from "react";
import Link from "next/link";


export default function Layout({children, params: {id}}: { children: ReactNode, params: { id: string } }) {

    return <div>
        <div>
            Param: {id}
        </div>

        <div>
            <Link href={`/user/${id}/gallery`}>Gallery</Link>
        </div>
        <div>
            <Link href={`/user/${id}/home`}>Home</Link>
        </div>

        Page:

        {children}
    </div>
}
