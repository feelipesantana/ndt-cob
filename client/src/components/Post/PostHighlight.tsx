'use client'

import { PostTypes } from '@/types/get-page-data-types'
import { env } from '@/utils/env'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface PostHighlightProps {
    post?: PostTypes
}
export function PostHighlight({ post }: PostHighlightProps) {
    const imagePostUrl = post?.image.data.attributes.url
    const w = post?.image.data.attributes.width
    const quality = 75

    const imageLoader = () => {
        return `${process.env.NEXT_PUBLIC_API_URL}${imagePostUrl}?w=${800}&q=${quality || 75}`
    }

    return (

        <div className="relative overflow-hidden w-full h-full flex items-end rounded-lg" >
            <div className='absolute z-20'>
                <p className='text-4xl font-medium text-white p-10 bg-gradient-to-t from-black/70 to-black/0'>{post?.title}</p>

            </div>
            <motion.div
                whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.3 },
                }}
                className="h-full w-full z-0"
            >
                <Image
                    src="image.png"
                    loader={imageLoader}
                    width={800}
                    height={800}
                    alt="Image"

                />
            </motion.div>
        </div>



    )
}