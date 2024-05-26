import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="bg-purple-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
      <iframe width="1000" height="600" src="/game/index.html"></iframe>
    </div>
  )
}