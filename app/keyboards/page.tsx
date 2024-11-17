import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'

export default function KeyboardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-inter text-gray-800 dark:text-gray-200">Mechanical Keyboards</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <Card className="bg-gray-50 dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="font-inter">Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="brand">Brand</Label>
                  <Select>
                    <SelectTrigger id="brand" className="bg-white dark:bg-gray-800">
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ducky">Ducky</SelectItem>
                      <SelectItem value="varmilo">Varmilo</SelectItem>
                      <SelectItem value="leopold">Leopold</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="layout">Layout</Label>
                  <Select>
                    <SelectTrigger id="layout" className="bg-white dark:bg-gray-800">
                      <SelectValue placeholder="Select layout" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full-size</SelectItem>
                      <SelectItem value="tkl">TKL</SelectItem>
                      <SelectItem value="60">60%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="switch">Switch Type</Label>
                  <Select>
                    <SelectTrigger id="switch" className="bg-white dark:bg-gray-800">
                      <SelectValue placeholder="Select switch type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cherry-mx-red">Cherry MX Red</SelectItem>
                      <SelectItem value="cherry-mx-blue">Cherry MX Blue</SelectItem>
                      <SelectItem value="cherry-mx-brown">Cherry MX Brown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
        <main className="w-full md:w-3/4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-gray-50 dark:bg-gray-900">
                <CardHeader>
                  <CardTitle className="font-inter">Keyboard Model {item}</CardTitle>
                  <CardDescription>Brand Name</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    alt={`Keyboard ${item}`}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">Switch Type: Cherry MX Red</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Layout: Full-size</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-lg font-bold text-gray-800 dark:text-gray-200">$149.99</span>
                  <Button asChild className="bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300">
                    <Link href={`/keyboards/${item}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}