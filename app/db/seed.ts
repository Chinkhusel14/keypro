import { db } from '@/app/db/db';
import { keyboards , keycaps} from '@/app/schema';

async function seed() {
  try {
    await db.insert(keycaps).values([
      {
        name: "GMK Olivia",
        images: ["/keycap-1.jpg"],
        material: "ABS",
        profile: "Cherry",
        price: 50000,
        description: "A keycap set inspired by the warm hues of olive branches.",
        compatibility: ["MX", "Cherry", "Gateron"],
        stock: 100
      },
      {
        name: "EnjoyPBT Black on White",
        images: ["/keycap-2.jpg"],
        material: "PBT",
        profile: "Cherry",
        price: 45000,
        description: "Classic black on white PBT keycaps with excellent durability.",
        compatibility: ["MX", "Cherry", "Gateron", "Kailh"],
        stock: 150
      },
      {
        name: "SA Vilebloom",
        images: ["/keycap-3.jpg"],
        material: "ABS",
        profile: "SA",
        price: 55000,
        description: "Vibrant and colorful SA profile keycaps inspired by nature.",
        compatibility: ["MX", "Cherry"],
        stock: 80
      },
      {
        name: "MT3 /dev/tty",
        images: ["/keycap-4.jpg"],
        material: "PBT",
        profile: "MT3",
        price: 48000,
        description: "Retro-inspired keycaps with a unique sculpted profile.",
        compatibility: ["MX", "Cherry", "Gateron"],
        stock: 120
      },
      {
        name: "KAT Milkshake",
        images: ["/keycap-5.jpg"],
        material: "PBT",
        profile: "KAT",
        price: 52000,
        description: "Playful and minimalist keycap set with various kitting options.",
        compatibility: ["MX", "Cherry", "Kailh"],
        stock: 90
      },
      {
        name: "DSA Magic Girl",
        images: ["/keycap-6.jpg"],
        material: "PBT",
        profile: "DSA",
        price: 47000,
        description: "Cute and magical themed keycap set with uniform profile.",
        compatibility: ["MX", "Cherry", "Gateron", "Kailh"],
        stock: 110
      },
    ]);

    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seed();

