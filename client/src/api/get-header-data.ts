import { api } from "@/services/api"
import { GetHeaderProps } from "@/types/get-header-data-types";


export interface GetHeaderResponse {
    data: GetHeaderProps;

}

export async function getHeaderData(){
    try{
        const response = await api.get<GetHeaderResponse>(`/header?populate=*`)
        return response.data
    }catch(err){
        console.error(err)
        return null
    }
    
}