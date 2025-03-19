"use client"

import { Loader2 } from "lucide-react"

export function LoadingIndicator() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex flex-col items-center">
        <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
        {/* <p className="mt-4 text-blue-600 font-medium">Loading...</p> */}
      </div>
    </div>
  )
}

