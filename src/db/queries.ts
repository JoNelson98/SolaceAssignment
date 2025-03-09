import { or, sql } from "drizzle-orm"
import { count } from "drizzle-orm"
import db from "./index"
import { advocates } from "./schema"

export async function getAdvocates(search: string, page: number, limit: number) {
    const offset = (page - 1) * limit

    let searchConditions
    if (search) {
        searchConditions = or(
            sql`first_name ILIKE ${"%" + search + "%"}`,
            sql`last_name ILIKE ${"%" + search + "%"}`,
            sql`city ILIKE ${"%" + search + "%"}`,
            sql`degree ILIKE ${"%" + search + "%"}`,
            sql`payload @> ${JSON.stringify([search])}`,
            sql`years_of_experience::text ILIKE ${"%" + search + "%"}`,
            sql`phone_number::text ILIKE ${"%" + search + "%"}`,
        )
    }

    let baseQuery = db.select().from(advocates) as any
    if (searchConditions) {
        baseQuery = baseQuery.where(searchConditions)
    }

    const data = await baseQuery.limit(limit).offset(offset).orderBy(advocates.id)

    let totalQuery = db.select({ total: count() }).from(advocates) as any
    if (searchConditions) {
        totalQuery = totalQuery.where(searchConditions)
    }
    const totalResult = (await totalQuery) as { total: number }[]
    const total = totalResult[0].total

    return { data, total }
}
