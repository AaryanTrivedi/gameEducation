import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="bg-purple-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <div className="text-center">
            <LockIcon className="mx-auto h-8 w-auto" />
            <div className="text-lg font-bold">Sign in to your account</div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="john@example.com" required type="email" />
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter your password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </div>
        <div className="text-sm text-center space-x-1">
          <span>Don't have an account?</span>
          <Link className="font-medium underline" href="./signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
