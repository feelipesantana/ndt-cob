import Link from "next/link";

interface HeaderLink {
    url: string;
    title: string;
}

export function HeaderLink({ url, title }: HeaderLink) {
    return (
        <Link href="#" className="text-lg transition duration-300 px-2 py-1 rounded-lg hover:bg-gray-200/70" ><li>{title}</li></Link>

    )
}