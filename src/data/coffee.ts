
export type CoffeeCategory = "roasted" | "green";

export type CoffeeProduct = {
  id: string;
  name: string;
  category: CoffeeCategory;
  shortDescription: string;
  description: string;
  image: string;
  availability: "coming-soon" | "available";
  specifications: {
    origin?: string;
    region?: string;
    variety?: string;
    process?: string;
    roastProfile?: string;
    tastingNotes?: string[];
    availableSizes?: string[];
    cropYear?: string;
    moisture?: string;
    screenSize?: string;
  };
};

export const coffeeProducts: CoffeeProduct[] = [];
