import { NextFunction, Request, Response } from "express";
import ProductModel from "../models/products.model";
import { findAll, findOne } from "../services/products.services";

//! OBTENER TODOS LOS PRODUCTOS
export const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await findAll();

  res.status(200).json(products);
};

//! OBTENER UN PRODUCTO
export const getOneProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const product = await findOne(id);

  res.status(200).json(product);
};

//! CREAR UN PRODUCTO
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Desde el controllador");
};

//! ACTUALIZAR UN PRODUCTO
export const updatePatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Desde el controllador");
};

//! ELIMINAR UN PRODUCTO
export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Desde el controllador");
};
