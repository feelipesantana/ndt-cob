import Image from "next/image";
import { motion } from 'framer-motion'
import { PostHighlight } from "../Post/PostHighlight";
import qs from 'qs'
import { getPagesData } from "@/api/get-pages-data";
import { AttributesHighlightType } from "@/types/get-page-data-types";

interface NewsHighlightProps {
    data?: AttributesHighlightType
}
export async function NewsHighlight({ data }: NewsHighlightProps) {

    const highlight = data?.highlight_zone.find(res => res.__component === "blocks.highligh-post")
    const highlightSide = data?.highlight_zone.find(res => res.__component === "blocks.highlight-side-post")



    // const highlight = data?.highlight_zone.find(res => res.__component === "blocks.highligh-post")

    console.log(highlightSide)

    return (
        <div className="grid grid-cols-2 gap-4 w-full ">
            <section className=" relative h-[652px] flex flex-col">

                <PostHighlight post={highlight?.post[0]} />
            </section>
            <section className="relative h-[652px] flex flex-col gap-4" >
                {highlightSide?.post?.map(res => {
                    return (
                        <PostHighlight post={res} key={res.id} />
                    )
                })}

            </section>
        </div>
    )
}