import { env } from "@/utils/env";
import axios from "axios";


export const api = axios.create({
    baseURL: `${env.NEXT_PUBLIC_API_URL}/api`,
    headers:{
        Authorization: `Bearer ${env.NEXT_PUBLIC_TOKEN}`
    }
})

export const apiYoutube = axios.create({
    baseURL: env.NEXT_PUBLIC_YOUTUBE_API_URL,
})

