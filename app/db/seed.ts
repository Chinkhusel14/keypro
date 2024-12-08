import { db } from '@/app/db/db';
import { keyboards } from '@/app/schema';

async function seed() {
  try {
    await db.insert(keyboards).values([
      {
        name: "AJAZZ AK650 PRO WHITE",
        images: [
          "/assets/keyboard-1.webp",
          "/assets/keyboard-1.webp",
          "/assets/keyboard-1.webp",
          "/assets/keyboard-1.webp",
          "/assets/landing_page_keyboard.webp",
        ],
        type: "65% Gasket Mechanical Keyboard",
        features: [
          "3 Modes Wireless Gaming Keyboard",
          '0.85" Display Screen & Knob',
          "5000 mAh Battery",
          "Hot Swappable Keyboard",
          "Flex-Cut Plate & PCB",
        ],
        price: 300000,
        colors: [
          { name: "Purple", value: "#9333EA" },
          { name: "White", value: "#F9FAFB" },
          { name: "Pink", value: "#EC4899" },
        ],
        stock: 48,
      },
      {
        name: "Ducky One 3",
        images: ["/keyboard-2.jpg"],
        type: "TKL Mechanical Keyboard",
        features: [
          "Cherry MX Brown switches",
          "PBT Double-shot seamless keycaps",
          "USB Type-C",
          "N-key rollover",
        ],
        price: 350000,
        colors: [
          { name: "Black", value: "#000000" },
          { name: "White", value: "#FFFFFF" },
        ],
        stock: 30,
      },
      {
        name: "Varmilo VA87M",
        images: ["/keyboard-3.jpg"],
        type: "TKL Mechanical Keyboard",
        features: [
          "EC Switch V2",
          "PBT Dye-sub keycaps",
          "USB Type-C",
          "Customizable LED backlighting",
        ],
        price: 320000,
        colors: [
          { name: "Charcoal", value: "#36454F" },
          { name: "Sakura", value: "#FFB7C5" },
        ],
        stock: 25,
      },
      {
        name: "AJAZZ AK620",
        images: ["/keyboard-4.jpg"],
        type: "75% Mechanical Keyboard",
        features: [
          "Ajazz CS Crystal switches",
          "Hot-swappable PCB",
          "RGB backlighting",
          "Aluminum frame",
        ],
        price: 280000,
        colors: [
          { name: "Space Gray", value: "#8E8E93" },
          { name: "Silver", value: "#C0C0C0" },
        ],
        stock: 40,
      },
      {
        name: "Ducky Mecha Mini",
        images: ["/keyboard-5.jpg"],
        type: "60% Mechanical Keyboard",
        features: [
          "Cherry MX Red switches",
          "Aluminum case",
          "PBT Double-shot keycaps",
          "RGB backlighting",
        ],
        price: 330000,
        colors: [
          { name: "Black", value: "#000000" },
          { name: "White", value: "#FFFFFF" },
        ],
        stock: 20,
      },
      {
        name: "Varmilo VEA65",
        images: ["/keyboard-6.jpg"],
        type: "65% Mechanical Keyboard",
        features: [
          "EC Switch V2 Sakura",
          "PBT Dye-sub keycaps",
          "USB Type-C",
          "Customizable LED backlighting",
        ],
        price: 340000,
        colors: [
          { name: "Sakura Pink", value: "#FFB7C5" },
          { name: "Ocean Blue", value: "#0077BE" },
        ],
        stock: 35,
      },
    ]);
    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seed();

