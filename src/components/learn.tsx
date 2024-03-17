
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Learn() {
  return (
    <Card key="1" className="bg-purple-600 text-white">
      <CardHeader className="flex items-center">
        <BookOpenIcon className="h-4 w-4 mr-2" />
        <CardTitle className="font-semibold">Class 1</CardTitle>
        <CardDescription className="text-black">Choose your subjects</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">
          <CheckIcon className="mr-2 h-4 w-4" />
          English
        </Button>
        <Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">
          <CheckIcon className="mr-2 h-4 w-4" />
          Maths
        </Button>
        <Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">
          <CheckIcon className="mr-2 h-4 w-4" />
          Hindi
        </Button>
        <Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">
          <CheckIcon className="mr-2 h-4 w-4" />
          EVS
        </Button>
      </CardContent>
    </Card>
  )
}


function BookOpenIcon(props:any) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function CheckIcon(props:any) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
