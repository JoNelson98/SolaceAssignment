import { getAdvocates } from "../../../db/queries"

export async function GET(request: Request) {
    const url = new URL(request.url)
    const search = url.searchParams.get("search") || ""
    const page = parseInt(url.searchParams.get("page") || "1", 10)
    const limit = parseInt(url.searchParams.get("limit") || "20", 10)

    const { data, total } = await getAdvocates(search, page, limit)
    return Response.json({ data, total })
}
