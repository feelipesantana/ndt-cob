'use client'
import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface QueryProviderProps {
    children: ReactNode
}
export function QueryProvider({ children }: QueryProviderProps) {

    const client = new QueryClient()
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )


}