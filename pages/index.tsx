import Image from "next/image";
import { HERO_IMAGE, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";


export default function HomePage() {
  const filters = [
    "Top Villa",
    "Self Checkin",
    "Beachfront",
    "Luxury",
    "Pet Friendly",
    "Mountain View",
    "Free WiFi",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={HERO_IMAGE}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
          <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 py-8 flex flex-wrap gap-4 justify-center">
        {filters.map((filter, index) => (
          <Pill key={index} label={filter} />
        ))}
      </section>

      {/* Listings Section */}
      <section className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-16">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </section>
    </div>
  );
}
