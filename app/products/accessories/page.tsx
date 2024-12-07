import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Keycap Puller",
    image: "/accessory-1.jpg",
    type: "Tool",
    material: "Stainless Steel",
    price: "5,000₮",
  },
  {
    id: 2,
    name: "Switch Lubing Station",
    image: "/accessory-2.jpg",
    type: "Tool",
    material: "Plastic",
    price: "12,000₮",
  },
  {
    id: 3,
    name: "Cable (USB-C)",
    image: "/accessory-3.jpg",
    type: "Cable",
    material: "Braided",
    price: "10,000₮",
  },
  {
    id: 4,
    name: "Desk Mat",
    image: "/accessory-4.jpg",
    type: "Mat",
    material: "Fabric",
    price: "15,000₮",
  },
  {
    id: 5,
    name: "Switch Tester",
    image: "/accessory-5.jpg",
    type: "Tester",
    material: "Acrylic",
    price: "8,000₮",
  },
  {
    id: 6,
    name: "Keycap Set",
    image: "/accessory-6.jpg",
    type: "Set",
    material: "PBT",
    price: "20,000₮",
  },
];

export default function AccessoriesPage() {
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
                Material: {product.material}
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
