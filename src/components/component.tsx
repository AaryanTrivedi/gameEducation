import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "./toggle"

export function Component() {
  return (
    <div key="1" className="flex flex-col min-h-[100dvh] bg-purple-500 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <DropdownMenu>
              <a href="./login"><Button className="text-sm font-medium hover:underline underline-offset-4">Login</Button></a>
              <a href="./signup"><Button className="text-sm font-medium hover:underline underline-offset-4">Sign Up</Button></a>
          </DropdownMenu>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-24 xl:py-32">
          <div className="container flex flex-col items-center justify-center space-y-4 text-center px-4 md:px-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Learn with fun</h1>
              <p className="text-black">Learn fun for CBSE students. Interactive video games that teach.</p>
            </div>
            <div className="mx-auto max-w-sm space-y-2">
                <a href="./learn"><Button className="text-sm font-medium hover:underline underline-offset-4">Learn</Button></a>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12 lg:py-16 xl:py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container flex flex-col items-center justify-center space-y-4 text-center px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-500">
                Explore Our Platform
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Discover a world of interactive learning experiences tailored for students of all ages.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <BookIcon className="h-12 w-12 text-purple-500 dark:text-purple-300" />
                <h3 className="text-lg font-semibold mt-2">Engaging Content</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Dive into a library of interactive content designed to make learning exciting.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <GamepadIcon className="h-12 w-12 text-purple-500 dark:text-purple-300" />
                <h3 className="text-lg font-semibold mt-2">Interactive Games</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Play and learn with our collection of educational games that challenge and inspire.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <GroupIcon className="h-12 w-12 text-purple-500 dark:text-purple-300" />
                <h3 className="text-lg font-semibold mt-2">Community Support</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Join a vibrant community of learners and educators to share knowledge and experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12 lg:py-16 xl:py-20 bg-gray-200 dark:bg-gray-900">
          <div className="container flex flex-col items-center justify-center space-y-4 text-center px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-500">
                Additional Details
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Explore more about our platform and how it can revolutionize learning for students.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <LightbulbIcon className="h-12 w-12 text-purple-500 dark:text-purple-300" />
                <h3 className="text-lg font-semibold mt-2">Innovative Solutions</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Discover innovative solutions that enhance the learning experience for students and educators.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <AwardIcon className="h-12 w-12 text-purple-500 dark:text-purple-300" />
                <h3 className="text-lg font-semibold mt-2">Recognition</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  See how our platform has been recognized for its impact on education and student engagement.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <TextIcon className="h-12 w-12 text-purple-500 dark:text-purple-300" />
                <h3 className="text-lg font-semibold mt-2">Interactive Discussions</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Engage in interactive discussions with other users to share insights and best practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


function MountainIcon(props:any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function BookIcon(props:any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function GamepadIcon(props:any) {
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
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function GroupIcon(props:any) {
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function LightbulbIcon(props:any) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}


function AwardIcon(props:any) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}


function TextIcon(props:any) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}
