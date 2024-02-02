import {create} from 'zustand'

interface DataVideoProps{
    id: string
    title: string
    largeImage: string;
}

interface Root{
    dataVideo?: DataVideoProps
    setDataVideo: (value: DataVideoProps) => void
}

const useVideoHook = create<Root>((set) =>({
    dataVideo:{
        id:"",
        title: "",
        largeImage: ""
    },
    setDataVideo: (value) => set({dataVideo: value})
}))

export {useVideoHook}