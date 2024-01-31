import { api } from "@/services/api"
import { DataObjectType } from "@/types/get-page-data-types";


export interface RootObject {
    data: DataObjectType[];

}
interface getPageDataProps{
    query?:string
}

export async function getPagesData({query}:getPageDataProps ){
    try{
        const response = await api.get<RootObject>(`/pages?${query}`)

        return response.data
    }catch(err){
        console.error(err)
        return null
    }
    
}