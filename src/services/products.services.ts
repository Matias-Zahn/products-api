import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/products.model";

export const findAll = async (): Promise<Product[]> => {
  return await ProductModel.find();
};

export const findOne = async (id: string) => {
  const product = await ProductModel.findById(id);

  return product;
};

export const create = async (product: Product) => {
  if (!product.name && !product.price && !product.quantity)
    throw new Error(
      "Todas los atributos son requeridos a excepcion de la descripcion"
    );

  const newProduct = await ProductModel.create(product);

  return newProduct;
};
