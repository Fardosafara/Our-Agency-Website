import { type NextRequest, NextResponse } from "next/server"
import { revalidatePath, revalidateTag } from "next/cache"

// Secret token for secure revalidation
const REVALIDATION_TOKEN = process.env.REVALIDATION_TOKEN

export async function POST(request: NextRequest) {
  try {
    // Verify the request has the correct token
    const token = request.headers.get("x-revalidation-token")

    if (token !== REVALIDATION_TOKEN) {
      return NextResponse.json({ success: false, message: "Invalid token" }, { status: 401 })
    }

    const { path, tag } = await request.json()

    if (path) {
      // Revalidate the specific path
      revalidatePath(path)
      return NextResponse.json({
        success: true,
        revalidated: true,
        message: `Path ${path} revalidated.`,
      })
    }

    if (tag) {
      // Revalidate based on cache tag
      revalidateTag(tag)
      return NextResponse.json({
        success: true,
        revalidated: true,
        message: `Tag ${tag} revalidated.`,
      })
    }

    return NextResponse.json({ success: false, message: "No path or tag provided" }, { status: 400 })
  } catch (error) {
    console.error("Error revalidating:", error)
    return NextResponse.json({ success: false, message: "Error revalidating" }, { status: 500 })
  }
}

