"use client";

import { useRouter, usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const getCategoryTitle = (path: string) => {
    const category = path.split("/").pop();
    switch (category) {
      case "keyboards":
        return "KEYBOARDS";
      case "keyswitches":
        return "KEYSWITCHES";
      case "keycaps":
        return "KEYCAPS";
      case "accessories":
        return "ACCESSORIES";
      default:
        return "PRODUCTS";
    }
  };

  return (
    <div className="container mx-auto pb-8 pt-16 px-4">
      <h1 className="text-7xl font-bold text-center mb-8">
        {getCategoryTitle(pathname)}
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        <Card className="p-6 rounded-[24px] lg:w-64">
          <aside className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">Ангилал</h2>
              <h3 className="text-xl font-bold mb-4 text-secondary">Төрөл</h3>
              <Select
                onValueChange={(value) => router.push(`/products/${value}`)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={getCategoryTitle(pathname)} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="keyboards">KEYBOARDS</SelectItem>
                  <SelectItem value="keyswitches">KEYSWITCHES</SelectItem>
                  <SelectItem value="keycaps">KEYCAPS</SelectItem>
                  <SelectItem value="accessories">ACCESSORIES</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-secondary">Brand</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ajazz">Ajazz</SelectItem>
                  <SelectItem value="ducky">Ducky</SelectItem>
                  <SelectItem value="varmilo">Varmilo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-secondary">Layout</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select layout" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="65">65%</SelectItem>
                  <SelectItem value="75">75%</SelectItem>
                  <SelectItem value="tkl">TKL</SelectItem>
                  <SelectItem value="full">Full Size</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </aside>
        </Card>
        <main className="flex-1 max-w-5xl">{children}</main>
      </div>
    </div>
  );
}
