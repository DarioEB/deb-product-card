// React
import React, { useContext } from "react";
// Contexto
import { ProductContext } from "./ProductCard";
// Estilos
import styles from "../styles/styles.module.css"; 
import { ProductTitleProps } from "../interfaces/interfaces";

export const ProductTitle = ({ title, className, style }: ProductTitleProps) => {

  const { product } = useContext(ProductContext); 

  return (
    <span
      className={`${styles.productDescription} ${className}`}
      style={style}
    >
      {title ? title : product.title}
    </span>
  )
} 