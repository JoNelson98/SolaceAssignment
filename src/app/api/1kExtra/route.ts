import { NextResponse } from "next/server"
import db from "../../../db"
import { advocates } from "../../../db/schema"
import { advocateData } from "../../../db/seed/1kExtra"

export async function POST() {
    const batchSize = 500
    const extraRecords = advocateData.slice(15)
    try {
        const insertedRecords = []
        for (let i = 0; i < extraRecords.length; i += batchSize) {
            const batch = extraRecords.slice(i, i + batchSize)
            const records = await db.insert(advocates).values(batch).returning()
            insertedRecords.push(...records)
        }
        return NextResponse.json({ advocates: insertedRecords, count: insertedRecords.length })
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 })
    }
}
