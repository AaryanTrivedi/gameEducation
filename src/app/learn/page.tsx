import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Learn() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex items-center justify content mt-9 ml-9">
        <Card key="1" className="bg-purple-600 text-white">
          <CardHeader className="flex items-center">
            <BookOpenIcon className="h-4 w-4 mr-2" />
            <CardTitle className="font-semibold">Class 1</CardTitle>
            <CardDescription className="text-black">Choose your subjects</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <a href="./learn/english"><Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">
              English
            </Button></a>
            <a href="./learn/maths"><Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              Maths
            </Button></a>
            <Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              Hindi
            </Button>
            <Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              EVS
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify content mt-9 ml-9">
        <Card key="1" className="bg-purple-600 text-white">
          <CardHeader className="flex items-center">
            <BookOpenIcon className="h-4 w-4 mr-2" />
            <CardTitle className="font-semibold">Class 2</CardTitle>
            <CardDescription className="text-black">Choose your subjects</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <a href="#"><Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              English
            </Button></a>
            <a href="#"><Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              Maths
            </Button></a>
            <Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              Hindi
            </Button>
            <Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              EVS
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify content mt-9 ml-9">
        <Card key="1" className="bg-purple-600 text-white">
          <CardHeader className="flex items-center">
            <BookOpenIcon className="h-4 w-4 mr-2" />
            <CardTitle className="font-semibold">Class 3</CardTitle>
            <CardDescription className="text-black">Choose your subjects</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <a href="#"><Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              English
            </Button></a>
            <a href="#"><Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              Maths
            </Button></a>
            <Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              Hindi
            </Button>
            <Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              EVS
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify content mt-9 ml-9">
        <Card key="1" className="bg-purple-600 text-white">
          <CardHeader className="flex items-center">
            <BookOpenIcon className="h-4 w-4 mr-2" />
            <CardTitle className="font-semibold">Class 4</CardTitle>
            <CardDescription className="text-black">Choose your subjects</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <a href="#"><Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              English
            </Button></a>
            <a href="#"><Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              Maths
            </Button></a>
            <Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              Hindi
            </Button>
            <Button className="justify-content-between w-full bg-purple-700 hover:bg-purple-800" size="sm">

              EVS
            </Button>
          </CardContent>
        </Card>
      </div>


    </div>
  )
}


function BookOpenIcon(props: any) {
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


function CheckIcon(props: any) {
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
