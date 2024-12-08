import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-5xl font-bold text-foreground mb-8">
        Санал болгох Keyboards
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Bigger Card */}
        <Link href="/products/keyboards/1" className="md:w-2/3">
          <Card className="rounded-3xl h-full">
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
        </Link>

        {/* Right Two Cards */}
        <div className="flex flex-col md:w-1/3 gap-8">
          {/* Top Small Card */}
          <Link href="/products/keyswitches/1">
            <Card className="rounded-3xl">
              <CardContent className="p-4">
                <div className="relative flex flex-col">
                  <Image
                    src="/assets/landing_page_keyswitch.webp"
                    alt="Keyboard Switches"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                  <div className="absolute top-8 right-8">
                    <div className="relative flex justify-center items-center w-[52px] h-[52px] rounded-full bg-secondary">
                      <ArrowRight
                        color="white"
                        strokeWidth={3}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Bottom Card that grows */}
          <Card className="rounded-3xl flex-grow">
            <CardContent className="p-4 h-full">
              <div className="relative flex flex-col h-full">
                <div className="flex justify-center items-center h-full">
                  <Image
                    src="/assets/landing_page_keycap.webp"
                    alt="Keycaps"
                    width={400}
                    height={300}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="w-1/3 absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="select-none text-white rounded-3xl px-6 py-1 text-3xl bg-secondary">
                    <p className="font-bold text-center">Үзэх</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
