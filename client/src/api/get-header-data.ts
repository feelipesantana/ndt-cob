import { api } from "@/services/api";

export async function getHeaderData(){
    const response = await api.get("/relations/header")

    return response.data
}