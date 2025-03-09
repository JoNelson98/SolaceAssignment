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

    const resetSearch = () => {
        setSearch("")
        router.push("/")
    }

    return (
        <div style={{ marginBottom: "16px" }}>
            <p>Search</p>
            <input
                style={{ border: "1px solid black", padding: "4px" }}
                value={search}
                onChange={handleChange}
                placeholder="Search advocates..."
            />
            <button style={{ marginLeft: "8px" }} onClick={resetSearch}>
                Reset Search
            </button>
        </div>
    )
}
