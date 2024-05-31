import { z } from "zod";

export const AVAILABLE_SIZES = ["S", "M", "L"] as const; //makes types readonly

export const AVAILABLE_COLORS = [
  "white",
  "beige",
  "green",
  "purple",
  "blue",
] as const;

export const AVAILABLE_SORT = ["none", "price-asc", "price-desc"] as const;

export const ProductFilterValidator = z.object({
  size: z.array(z.enum(AVAILABLE_SIZES)),
  color: z.array(z.enum(AVAILABLE_COLORS)),
  sort: z.enum(AVAILABLE_SORT), // it takes a string and not an array of string like above
  price: z.tuple([z.number(), z.number()]),
});

export type ProductState = Omit< z.infer<typeof ProductFilterValidator>,"price"> & {
  price: {
    isCustom: boolean;
    range: [number, number]; //tuple
  };
};
