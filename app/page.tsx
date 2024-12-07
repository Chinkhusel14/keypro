import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-5xl font-bold text-foreground mb-8">
        Санал болгох Keyboards
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Card className="md:w-2/3 rounded-3xl">
          <CardContent className="p-4 flex flex-col justify-between">
            <div className="relative flex flex-col">
              <Image
                src="/assets/landing_page_keyboard.webp"
                alt="Featured Keyboard"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute top-8 left-8 flex-col space-y-2">
                <div className="select-none text-white rounded-3xl px-6 py-1 font-righteous font-thin text-base bg-secondary">
                  <p className="text-sm font-semibold">300,000₮</p>
                </div>
                <div className="select-none text-secondary rounded-3xl border-2 border-secondary px-6 py-1 font-righteous font-thin text-base bg-white">
                  <p className="text-sm font-semibold">• AJAZZ</p>
                </div>
              </div>
              <div className="absolute bottom-8 right-8">
                <div className="relative flex justify-center items-center w-[52px] h-[52px] rounded-full bg-secondary">
                  <ArrowUpRight
                    color="white"
                    strokeWidth={3}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:w-1/3 space-y-8">
          <Card className="rounded-3xl">
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
          <Card className="rounded-3xl">
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
