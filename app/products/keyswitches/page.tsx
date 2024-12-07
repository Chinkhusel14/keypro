import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Ajazz Diced Fruit",
    image: "/switch-1.jpg",
    type: "Linear",
    actuation: "45g",
    price: "30,000₮",
  },
  {
    id: 2,
    name: "Cherry MX Brown",
    image: "/switch-2.jpg",
    type: "Tactile",
    actuation: "55g",
    price: "35,000₮",
  },
  {
    id: 3,
    name: "Gateron Yellow",
    image: "/switch-3.jpg",
    type: "Linear",
    actuation: "50g",
    price: "28,000₮",
  },
  {
    id: 4,
    name: "Kailh Box White",
    image: "/switch-4.jpg",
    type: "Clicky",
    actuation: "50g",
    price: "32,000₮",
  },
  {
    id: 5,
    name: "ZealPC Zealio V2",
    image: "/switch-5.jpg",
    type: "Tactile",
    actuation: "65g",
    price: "40,000₮",
  },
  {
    id: 6,
    name: "Holy Panda",
    image: "/switch-6.jpg",
    type: "Tactile",
    actuation: "67g",
    price: "45,000₮",
  },
];

export default function KeyswitchesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden rounded-[24px]">
          <CardContent className="p-4">
            <div className="relative aspect-[4/3]">
              <h3 className="font-bold text-lg text-primary">{product.name}</h3>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-[20px] mt-6"
              />
            </div>
            <div className="mt-6">
              <p className="text-sm text-secondary">Type: {product.type}</p>
              <p className="text-sm text-secondary">
                Actuation Force: {product.actuation}
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
      ))}
    </div>
  );
}
