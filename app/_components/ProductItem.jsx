import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
  console.log("nağaber");
  console.log(product.images[0].url);
  console.log(product.name);

  return (
    <div className="p-2 md:p-6 flex flex-col items-center justify-center border rounded-lg gap-3 hover:scale-105 hover:shadow-md duration-300">
      <Image
        src={process.env.NEXT_PUBLIC_API_URL + product.images[0].url}
        width={500}
        height={200}
        alt={product.name}
        className="h-[200px] w-[200px] object-contain"
      />
      <div className="flex gap-3">
        <h2 className="font-bold text-lg">{product.name}</h2>
        {product.sellingPrice && <h2 className="font-bold text-lg">${product.sellingPrice}</h2>}
        <h2
          className={`font-bold ${
            product.sellingPrice && "line-through text-gray-500"
          }`}
        >
          ${product.mrp}
        </h2>
      </div>

      <Button
        className="text-primary hover:text-white hover:bg-primary"
        variant="outline"
      >
        Add to Card
      </Button>
    </div>
  );
};

export default ProductItem;
