import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "AJAZZ AK650",
    image: "/assets/keyboard-1.webp",
    switchType: "Ajazz Dream",
    layout: "65%",
    price: "300,000₮",
  },
  {
    id: 2,
    name: "Ducky One 3",
    image: "/keyboard-2.jpg",
    switchType: "Cherry MX Brown",
    layout: "TKL",
    price: "350,000₮",
  },
  {
    id: 3,
    name: "Varmilo VA87M",
    image: "/keyboard-3.jpg",
    switchType: "EC Switch V2",
    layout: "TKL",
    price: "320,000₮",
  },
  {
    id: 4,
    name: "AJAZZ AK620",
    image: "/keyboard-4.jpg",
    switchType: "Ajazz CS Crystal",
    layout: "75%",
    price: "280,000₮",
  },
  {
    id: 5,
    name: "Ducky Mecha Mini",
    image: "/keyboard-5.jpg",
    switchType: "Cherry MX Red",
    layout: "60%",
    price: "330,000₮",
  },
  {
    id: 6,
    name: "Varmilo VEA65",
    image: "/keyboard-6.jpg",
    switchType: "EC Switch V2 Sakura",
    layout: "65%",
    price: "340,000₮",
  },
];

export default function KeyboardsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/keyboards/${product.id}`}
          className="transition-transform hover:scale-[1.02] relative"
          style={{
            cursor: `url('/assets/cursor-icon.svg') 16 16, pointer`,
          }}
        >
          <Card key={product.id} className="overflow-hidden rounded-[24px]">
            <CardContent className="p-4">
              <div className="relative aspect-[4/3]">
                <h3 className="font-bold text-lg text-primary ">
                  {product.name}
                </h3>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-[20px] mt-6"
                />
              </div>
              <div className="mt-6">
                <p className="text-sm text-secondary">
                  Switch Type: {product.switchType}
                </p>
                <p className="text-sm text-secondary">
                  Layout: {product.layout}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center px-4">
              <p className="font-righteous text-secondary text-xl">
                {product.price}
              </p>
              <Button
                variant="outline"
                className="font-bold text-secondary text-xl hover:text-primary"
              >
                Сагслах
              </Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
