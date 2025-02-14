import { model, Schema } from "mongoose";
import { Product } from "../interfaces/product.interface";

const ProductSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = model("Product", ProductSchema);

export default ProductModel;
