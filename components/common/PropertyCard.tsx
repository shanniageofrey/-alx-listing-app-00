import { PropertyProps } from "@/interfaces";

interface CardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<CardProps> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{property.name}</h2>
        <p className="text-sm text-gray-500">${property.price.toLocaleString()}</p>
        <p className="text-sm text-yellow-600">★ {property.rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
