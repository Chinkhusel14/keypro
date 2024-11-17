import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Search } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-inter text-gray-800 dark:text-gray-200">
              Discover Your Perfect Keyboard
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Explore our curated collection of premium mechanical keyboards and accessories.
            </p>
            <div className="w-full max-w-sm space-y-2">
              <div className="flex space-x-2">
                <Input type="search" placeholder="Search keyboards..." className="bg-white dark:bg-gray-800" />
                <Button type="submit" className="bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-inter text-gray-800 dark:text-gray-200 mb-8">Featured Categories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-50 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="font-inter">Mechanical Keyboards</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Mechanical Keyboard"
                  className="w-full h-60 object-cover rounded-md"
                  height="240"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/240",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300">
                  <Link href="/keyboards">Explore Keyboards</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="font-inter">Keycaps</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Keycaps"
                  className="w-full h-60 object-cover rounded-md"
                  height="240"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/240",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300">
                  <Link href="/keycaps">Explore Keycaps</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="font-inter">Switches</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Switches"
                  className="w-full h-60 object-cover rounded-md"
                  height="240"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/240",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300">
                  <Link href="/switches">Explore Switches</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}