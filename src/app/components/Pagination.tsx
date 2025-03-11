"use client"

import { useRouter } from "next/navigation"
import { RightArrow, LeftArrow } from "./Icons"

export default function Pagination({
    page,
    totalPages,
    search,
}: {
    page: number
    totalPages: number
    search: string
}) {
    const router = useRouter()

    const goToPage = (newPage: number) => {
        router.push(`/?search=${encodeURIComponent(search)}&page=${newPage}`)
    }
    return (
        <div className="flex m-4 justify-center">
            {page > 1 && (
                <button className="mr-2" onClick={() => goToPage(page - 1)}>
                    <LeftArrow />
                </button>
            )}
            {page < totalPages && (
                <button onClick={() => goToPage(page + 1)}>
                    <RightArrow />
                </button>
            )}
        </div>
    )
}
