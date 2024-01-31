'use client'
import { getHeaderData } from "@/api/get-header-data"
import { getClient } from "@/services/apollo-server";
import directus from "@/services/directus-helper";
import { gql } from "@apollo/client";
import { createDirectus, rest } from '@directus/sdk';
import { readItems } from '@directus/sdk';
import Link from "next/link";
import { HeaderLink } from "./HeaderLink";
import Image from "next/image";

// async function getGlobals() {
//     const response = directus.request(readItems('header', {
//         fields: ['id_links', 'color_header', { relation: ['*'] }],
//     }
//     ));
//     return response
// }

// const GET_HEADER = gql`
// {
//     query{
//         header{
//             id_links
//         }
//     }
// }
// `

export async function Header() {

    // const getPageData = await getClient().query({ query })

    // const headerData = await getGlobals()

    // console.log(headerData)

    return (
        <div className=" flex items-center justify-between  max-w-[1280px] w-full mx-auto">
            <Image src="/assets/logo.svg" height={200} width={200} alt="Logo" />

            <ul className="flex  gap-8">
                <HeaderLink title="Time Brasil" url="" />
                <HeaderLink title="Esportes" url="" />
                <HeaderLink title="Eventos" url="" />
                <HeaderLink title="Cultura Educação" url="" />
                <HeaderLink title="Governança" url="" />
            </ul>

        </div>
    )
}