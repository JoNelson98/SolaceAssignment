import SearchInput from "@/components/SearchInput"
import Pagination from "@/components/Pagination"
import { getAdvocates } from "../db/queries"
import { Advocate } from "./lib/types"

export default async function Home({ searchParams }: { searchParams: { search?: string; page?: string } }) {
    const search = searchParams.search || ""
    const page = parseInt(searchParams.page || "1", 10)
    const limit = 5

    const { data: advocates, total } = await getAdvocates(search, page, limit)
    const totalPages = Math.ceil(total / limit)

    return (
        <main style={{ margin: "3rem" }}>
            <h1>Solace Advocates</h1>
            <SearchInput initialSearch={search} />
            <p>
                Showing {advocates.length} of {total} advocates
                {search && ` matching "${search}"`}
            </p>
            {advocates.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                            <th>Degree</th>
                            <th>Specialties</th>
                            <th>Years of Experience</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {advocates.map((advocate: Advocate) => (
                            <tr key={advocate.id}>
                                <td>{advocate.firstName}</td>
                                <td>{advocate.lastName}</td>
                                <td>{advocate.city}</td>
                                <td>{advocate.degree}</td>
                                <td>
                                    {advocate.specialties.map((s: string) => (
                                        <div key={s}>{s}</div>
                                    ))}
                                </td>
                                <td>{advocate.yearsOfExperience}</td>
                                <td>{String(advocate.phoneNumber)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No advocates found.</p>
            )}
            <Pagination page={page} totalPages={totalPages} search={search} />
        </main>
    )
}
