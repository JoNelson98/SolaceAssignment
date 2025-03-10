"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchInput({ initialSearch }: { initialSearch: string }) {
    const [search, setSearch] = useState(initialSearch)
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = e.target.value
        setSearch(newSearch)
        router.push(`/?search=${encodeURIComponent(newSearch)}&page=1`)
    }

    return (
        <div className="mb-4 w-full">
            <input
                className="w-full peer outline-none ring-0 px-4 py-1 h-12 border-0 rounded-lg ring-gray-200 duration-500 focus:ring-2 focus:border-gray-100 relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 text-xs shadow-xl shadow-gray-400/10 focus:shadow-none focus:rounded-md focus:ring-green-950 placeholder:text-gray-400"
                value={search}
                onChange={handleChange}
                placeholder="Search advocates..."
            />
            <span className="duration-500 opacity-0 mb-2 peer-focus:opacity-100 text-gray-500 text-xs -translate-y-12 peer-focus:translate-y-0">
                Search
            </span>
        </div>
    )
}
