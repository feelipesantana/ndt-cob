
import { getHeaderData } from "@/api/get-header-data"

import { HeaderLink } from "./HeaderLink";
import Image from "next/image";


export async function Header() {

    const getHeader = await getHeaderData()

    const color_header = getHeader?.data.attributes.color_header

    return (
        <div style={{ backgroundColor: color_header ? color_header : '#FFFFFF' }} className=" flex items-center justify-between  ">
            <div className="max-w-[1280px] w-full mx-auto h-full flex items-center justify-between">
                <Image src="/assets/logo.svg" height={200} width={200} alt="Logo" />

                <ul className="flex  gap-4">
                    {getHeader?.data.attributes.link.map(res => {
                        return <HeaderLink title={res.label} url={res.URL} key={res.id} />
                    })}

                </ul>
            </div>
        </div>
    )
}