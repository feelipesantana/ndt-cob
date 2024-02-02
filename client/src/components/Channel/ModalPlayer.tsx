'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { PlayCircle } from "lucide-react"
import { VideoPlayer } from "./VideoPlayer"

export function ModalPlayer() {

    return (
        <Dialog >
            <DialogTrigger className='bg-green-special mt-8 rounded-full px-2 py-1 text-slate-900 flex items-center gap-2' >
                <PlayCircle /> Assita agora
            </DialogTrigger>
            <DialogContent
                className=" flex justify-center items-center border-none  bg-black  w-full max-w-[100%] max-h-[100%]  my-0 py-0 rounded-none text-white">
                <VideoPlayer />

            </DialogContent>
        </Dialog >
    )
}