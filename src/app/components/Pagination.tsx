"use client"

import { RightArrow, LeftArrow } from "./Icons"

export default function Pagination({
    page,
    totalPages,
    setPage,
}: {
    page: number
    totalPages: number
    setPage: (page: number) => void
}) {
    const goToPage = (newPage: number) => {
        setPage(newPage)
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
