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
            <DialogTrigger
                className='bg-green-special mt-8 rounded-full h-14 w-56 text-slate-900 
                flex justify-center items-center gap-2 text-base font-semibold transition duration-300 hover:brightness-75'
            >
                <PlayCircle className="h-6 w-6" /> ASSISTA AGORA
            </DialogTrigger>
            <DialogContent
                className=" flex justify-center items-center border-none  bg-black  w-full max-w-[100%] max-h-[100%]  my-0 py-0  rounded-none text-white">
                <VideoPlayer />
            </DialogContent>
        </Dialog >
    )
}