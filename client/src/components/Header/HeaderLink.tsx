import Link from "next/link";

interface HeaderLink {
    url: string;
    title: string;
}

export function HeaderLink({ url, title }) {
    return (
        <Link href="#" ><li>{title}</li></Link>

    )
}