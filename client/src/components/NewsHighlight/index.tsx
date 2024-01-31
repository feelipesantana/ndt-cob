'use client'
import Image from "next/image";

import { motion } from 'framer-motion'
export function NewsHighlight() {


    return (
        <div className="grid grid-cols-2 gap-4 w-full ">
            <section className="relative overflow-hidden h-[652px]">
                <motion.div
                    whileHover={{
                        scale: 1.15,
                        transition: { duration: 0.3 },
                    }}
                    className="h-full w-full "
                >
                    <Image
                        src="/assets/img3.png"
                        fill
                        alt="Image"
                    />
                </motion.div>
            </section>
            <section className="relative flex flex-col gap-4 h-[652px]" >
                <div className=" overflow-hidden">

                    <motion.div
                        whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.3 },
                        }}
                        className=" w-full h-full "
                    >
                        <Image
                            src="/assets/img1.png"
                            width={800}
                            height={800}
                            className="h-full w-full "
                            alt="Image"

                        />
                    </motion.div>
                </div>
                <div className=" overflow-hidden">
                    <motion.div
                        whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.3 },
                        }}
                        className="h-full w-full "
                    >
                        <Image
                            src="/assets/img2.png"
                            width={500}
                            height={500}
                            className="h-full w-full"
                            alt="Image"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    )
}