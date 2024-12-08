"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MinusIcon, PlusIcon } from "lucide-react";

interface Keycap {
  id: number;
  name: string;
  images: string[];
  material: string;
  profile: string;
  price: number;
  description?: string | null;
  compatibility: string[];
  stock: number;
}

export default function KeycapDetail({ keycap }: { keycap: Keycap }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl font-bold text-center mb-8">{keycap.name}</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            {keycap.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`bg-white text-xs relative w-24 aspect-square flex-shrink-0 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={image}
                  alt={`${keycap.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          <Card className="rounded-[24px] overflow-hidden flex-grow">
            <div className="relative aspect-square">
              <Image
                src={keycap.images[selectedImage]}
                alt={keycap.name}
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {keycap.profile} Profile Keycaps
            </h2>
            {keycap.description && (
              <p className="text-secondary">{keycap.description}</p>
            )}
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Specifications:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-base text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Material: {keycap.material}
              </li>
              <li className="flex items-center gap-2 text-base text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Profile: {keycap.profile}
              </li>
              <li className="flex items-center gap-2 text-base text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Compatibility: {keycap.compatibility.join(", ")}
              </li>
            </ul>
          </div>

          <div>
            <p className="text-3xl font-righteous">
              {keycap.price.toLocaleString()}₮
            </p>
          </div>

          <div>
            <p className="border-2 py-3 px-4 rounded-lg text-sm text-secondary mb-2">
              Хүргэлтийн нөхцөл: Бэлэн байгаа 48-72 цагт хүргэгдэнэ.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center border-2 rounded-lg">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="h-10 w-10"
              >
                <MinusIcon strokeWidth={3} className="h-4 w-4" />
              </Button>
              <div className="w-10 font-bold text-lg text-center">
                {quantity}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  setQuantity(Math.min(keycap.stock, quantity + 1))
                }
                className="h-10 w-10"
              >
                <PlusIcon strokeWidth={3} className="h-4 w-4" />
              </Button>
            </div>
            <Button className="h-11 flex-1 bg-white font-bold text-base text-primary border-2 drop-shadow-none shadow-none hover:bg-background">
              Сагсанд нэмэх
            </Button>
            <Button className="h-11 flex-1 bg-primary font-bold text-base text-white border-2 drop-shadow-none shadow-none">
              Худалдан авах
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
