import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-5xl font-bold text-foreground mb-8">
        Санал болгох Keyboards
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Card className="md:w-2/3">
          <CardContent className="p-4">
            <Image
              src="/keyboard.jpg"
              alt="Featured Keyboard"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold text-foreground">300,000₮</p>
              <p className="text-secondary">RJZZ</p>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-secondary">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
        <div className="md:w-1/3 space-y-8">
          <Card>
            <CardContent className="p-4">
              <Image
                src="/switches.jpg"
                alt="Keyboard Switches"
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image
                src="/keycaps.jpg"
                alt="Keycaps"
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View More
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
