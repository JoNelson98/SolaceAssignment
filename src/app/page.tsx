"use client"

import { useState, useEffect } from "react"
import SearchInput from "@/components/SearchInput"
import Pagination from "@/components/Pagination"
import { MotionSection } from "@/components/layout/MotionSection"
import { Advocate } from "./lib/types"

export default function Home() {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [limit] = useState(5)
    const [advocates, setAdvocates] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const fetchAdvocates = async () => {
            const response = await fetch(
                `/api/advocates?search=${encodeURIComponent(search)}&page=${page}&limit=${limit}`,
            )
            const { data, total } = await response.json()
            setAdvocates(data)
            setTotal(total)
        }

        fetchAdvocates()
    }, [search, page, limit])

    const totalPages = Math.ceil(total / limit)

    return (
        <main className="m-14">
            <div className="pt-8">
                <MotionSection delay={0.45}>
                    <div className="relative mx-auto flex max-w-2xl flex-col items-center">
                        <h2 className=" animate-text-gradient text-center text-3xl font-medium sm:text-6xl bg-gradient-to-r from-neutral-900 via-slate-500 to-green-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent ">
                            Solace Advocates{" "}
                        </h2>
                        <p className="mt-6 text-center text-lg leading-6 text-gray-600 ">
                            Ready-to-go, Compassionate Care, Just a Call Away. Reach out to Solace
                            Advocates—dedicated health professionals ready to provide the support you need,
                            whenever you need it.
                        </p>
                        <div className="mt-10 flex gap-4">
                            <br className=" h-10 px-4 py-2" />
                        </div>
                    </div>
                </MotionSection>
            </div>
            <MotionSection delay={0.6}>
                <SearchInput search={search} setSearch={setSearch} />
            </MotionSection>
            <MotionSection delay={0.7}>
                <Pagination page={page} totalPages={totalPages} setPage={setPage} />
                {advocates.length > 0 ? (
                    <div className="rounded-xl shadow-lg overflow-hidden bg-white">
                        <table className="w-full table-auto">
                            <caption className="caption-top bg-slate-100 p-2">
                                Showing {advocates.length} of {total} advocates
                                {search && ` matching "${search}"`}
                            </caption>
                            <thead>
                                <tr className="m-0 border-t p-0 even:bg-muted bg-slate-100">
                                    <th className="border px-4 py-2 text-left font-bold ">First Name</th>
                                    <th className="border px-4 py-2 text-left font-bold ">Last Name</th>
                                    <th className="border px-4 py-2 text-left font-bold ">City</th>
                                    <th className="border px-4 py-2 text-left font-bold ">Degree</th>
                                    <th className="border px-4 py-2 text-left font-bold">Specialties</th>
                                    <th className="border px-4 py-2 text-left font-bold ">
                                        Years of Experience
                                    </th>
                                    <th className="border px-4 py-2 text-left font-bold ">Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {advocates.map((advocate: Advocate) => (
                                    <tr className="m-0 border-t p-0 even:bg-muted" key={advocate.id}>
                                        <td className="border px-4 py-2 text-left ">
                                            {advocate.firstName}
                                        </td>
                                        <td className="border px-4 py-2 text-left ">{advocate.lastName}</td>
                                        <td className="border px-4 py-2 text-left">{advocate.city}</td>
                                        <td className="border px-4 py-2 text-left">{advocate.degree}</td>
                                        <td className="border px-4 py-2 text-left  max-h-20 overflow-y-auto">
                                            <div className="max-h-20 overflow-hidden text-clip">
                                                {advocate.specialties.map((s: string) => (
                                                    <div key={s} className="truncate">
                                                        {s}
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="border px-4 py-2">{advocate.yearsOfExperience}</td>
                                        <td className="border px-4 py-2">{String(advocate.phoneNumber)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>No advocates found.</p>
                )}
            </MotionSection>
        </main>
    )
}
