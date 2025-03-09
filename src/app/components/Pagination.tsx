"use client"

import { useRouter } from "next/navigation"

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
        <div style={{ marginTop: "16px" }}>
            {page > 1 && (
                <button style={{ marginRight: "8px" }} onClick={() => goToPage(page - 1)}>
                    Previous
                </button>
            )}
            {page < totalPages && <button onClick={() => goToPage(page + 1)}>Next</button>}
        </div>
    )
}
