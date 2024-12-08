"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MinusIcon, PlusIcon } from "lucide-react";

interface Keyboard {
  id: number;
  name: string;
  images: string[];
  type: string;
  features: string[];
  price: number;
  colors: { name: string; value: string }[];
  stock: number;
}

export default function KeyboardDetail({ keyboard }: { keyboard: Keyboard }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl font-bold text-center mb-8">{keyboard.name}</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            {keyboard.images.map((image, index) => (
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
                  alt={`${keyboard.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          <Card className="rounded-[24px] overflow-hidden flex-grow">
            <div className="relative aspect-square">
              <Image
                src={keyboard.images[selectedImage]}
                alt={keyboard.name}
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">{keyboard.type}</h2>
            <ul className="my-8">
              {keyboard.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-base text-secondary"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-3xl font-righteous">
              {keyboard.price.toLocaleString()}₮
            </p>
          </div>

          <div>
            <p className="text-sm text-secondary mb-2">Өнгөний сонголт:</p>
            <div className="flex gap-2">
              {keyboard.colors.map((color, index) => (
                <button
                  key={index}
                  className="w-8 h-8 rounded-full border-2 border-gray-200"
                  style={{
                    backgroundColor: color.value,
                    boxShadow:
                      color.value === "#F9FAFB"
                        ? "inset 0 0 0 1px #E5E7EB"
                        : "none",
                  }}
                  aria-label={color.name}
                />
              ))}
            </div>
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
                  setQuantity(Math.min(keyboard.stock, quantity + 1))
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
