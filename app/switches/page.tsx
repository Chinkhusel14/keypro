import Link from 'next/link'
import Image from 'next/image'
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

export default function SwitchesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Keyboard Switches</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="brand">Brand</Label>
                  <Select>
                    <SelectTrigger id="brand">
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cherry">Cherry</SelectItem>
                      <SelectItem value="gateron">Gateron</SelectItem>
                      <SelectItem value="kailh">Kailh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="linear">Linear</SelectItem>
                      <SelectItem value="tactile">Tactile</SelectItem>
                      <SelectItem value="clicky">Clicky</SelectItem>
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
              <Card key={item}>
                <CardHeader>
                  <CardTitle>Switch Model {item}</CardTitle>
                  <CardDescription>Brand Name</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    alt={`Switch ${item}`}
                    className="w-full h-48 object-cover mb-4"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <p className="text-sm text-gray-500">Type: Linear</p>
                  <p className="text-sm text-gray-500">Actuation Force: 45g</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-lg font-bold">$0.65 / switch</span>
                  <Button asChild>
                    <Link href={`/switches/${item}`}>View Details</Link>
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