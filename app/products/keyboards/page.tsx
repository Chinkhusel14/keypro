import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getKeyboards } from "@/app/actions/getKeyboards";

export default async function KeyboardsPage() {
  const keyboards = await getKeyboards();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {keyboards.map((keyboard) => (
        <Link
          key={keyboard.id}
          href={`/products/keyboards/${keyboard.id}`}
          className="transition-transform hover:scale-[1.02] relative"
          style={{
            cursor: `url('/assets/cursor-icon.svg') 16 16, pointer`,
          }}
        >
          <Card key={keyboard.id} className="overflow-hidden rounded-[24px]">
            <CardContent className="p-4">
              <div className="relative aspect-[4/3]">
                <h3 className="font-bold text-lg text-primary ">
                  {keyboard.name}
                </h3>
                <Image
                  src={keyboard.images[0]}
                  alt={keyboard.name}
                  fill
                  className="object-cover rounded-[20px] mt-6"
                />
              </div>
              <div className="mt-6">
                <p className="text-sm text-secondary">{keyboard.type}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center px-4">
              <p className="font-righteous text-secondary text-xl">
                {keyboard.price.toLocaleString()}₮
              </p>
              {keyboard.stock > 0 ? (
                <Button
                  variant="outline"
                  className="font-bold text-secondary text-xl hover:text-primary"
                >
                  Сагслах
                </Button>
              ) : (
                <p className="text-sm text-red-500 font-semibold">Дууссан</p>
              )}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
