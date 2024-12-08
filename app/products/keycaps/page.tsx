import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "GMK Olivia",
    image: "/keycap-1.jpg",
    material: "ABS",
    profile: "Cherry",
    price: "50,000₮",
  },
  {
    id: 2,
    name: "EnjoyPBT Black on White",
    image: "/keycap-2.jpg",
    material: "PBT",
    profile: "Cherry",
    price: "45,000₮",
  },
  {
    id: 3,
    name: "SA Vilebloom",
    image: "/keycap-3.jpg",
    material: "ABS",
    profile: "SA",
    price: "55,000₮",
  },
  {
    id: 4,
    name: "MT3 /dev/tty",
    image: "/keycap-4.jpg",
    material: "PBT",
    profile: "MT3",
    price: "48,000₮",
  },
  {
    id: 5,
    name: "KAT Milkshake",
    image: "/keycap-5.jpg",
    material: "PBT",
    profile: "KAT",
    price: "52,000₮",
  },
  {
    id: 6,
    name: "DSA Magic Girl",
    image: "/keycap-6.jpg",
    material: "PBT",
    profile: "DSA",
    price: "47,000₮",
  },
];

export default function KeycapsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/keycaps/${product.id}`}
          className="transition-transform hover:scale-[1.02] relative"
          style={{
            cursor: `url('/assets/cursor-icon.svg') 16 16, pointer`,
          }}
        >
          <Card key={product.id} className="overflow-hidden rounded-[24px]">
            <CardContent className="p-4">
              <div className="relative aspect-[4/3]">
                <h3 className="font-bold text-lg text-primary">
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
                  Material: {product.material}
                </p>
                <p className="text-sm text-secondary">
                  Profile: {product.profile}
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
