'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'

export default function KeyboardDetailPage({ params }: { params: { id: string } }) {
  const [selectedSwitch, setSelectedSwitch] = useState('red')
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Card className="bg-gray-50 dark:bg-gray-900">
            <CardContent className="p-0">
              <Image
                width="300"
                height="300"
                src="/placeholder.svg"
                alt={`Keyboard ${params.id}`}
                className="w-full h-auto rounded-t-lg"
              />
            </CardContent>
          </Card>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 font-inter text-gray-800 dark:text-gray-200">Keyboard Model {params.id}</h1>
          <p className="text-xl mb-4 text-gray-600 dark:text-gray-300">$149.99</p>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            This premium mechanical keyboard offers a superior typing experience with its high-quality switches and durable construction.
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <Label htmlFor="switch-type">Switch Type</Label>
              <Select value={selectedSwitch} onValueChange={setSelectedSwitch}>
                <SelectTrigger id="switch-type" className="bg-white dark:bg-gray-800">
                  <SelectValue placeholder="Select switch type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="red">Cherry MX Red</SelectItem>
                  <SelectItem value="blue">Cherry MX Blue</SelectItem>
                  <SelectItem value="brown">Cherry MX Brown</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                <SelectTrigger id="quantity" className="bg-white dark:bg-gray-800">
                  <SelectValue placeholder="Select quantity" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="w-full bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>
      <Tabs defaultValue="description" className="mt-12">
        <TabsList className="bg-gray-100 dark:bg-gray-800">
          <TabsTrigger value="description" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900">Description</TabsTrigger>
          <TabsTrigger value="specifications" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900">Specifications</TabsTrigger>
          <TabsTrigger value="reviews" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-4 text-gray-600 dark:text-gray-400">
          <Card className="bg-gray-50 dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="font-inter">Product Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This mechanical keyboard is designed for enthusiasts who demand the best typing experience. 
              Featuring high-quality switches, a durable aluminum frame, and customizable RGB lighting, 
              this keyboard is perfect for both work and play.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="specifications" className="mt-4">
          <Card className="bg-gray-50 dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="font-inter">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li>Switch Type: Cherry MX (Red, Blue, or Brown)</li>
                <li>Layout: Full-size (104 keys)</li>
                <li>Connectivity: USB-C</li>
                <li>Backlight: RGB, 16.8 million colors</li>
                <li>Frame Material: Aluminum</li>
                <li>Keycaps: PBT Double-shot</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews" className="mt-4">
          <Card className="bg-gray-50 dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="font-inter">Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">No reviews yet. Be the first to review this product!</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}