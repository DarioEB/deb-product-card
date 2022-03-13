# DEB-PRODUCT-Card

Este es un paquete de priebas de despliegue en NPM

### Dario Barboza - Curso REACT-PRO

## Ejemplo
``` 
import { 
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons
} from 'deb-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10
  }}>
  {({
    reset, 
    count, 
    isMaxCountReached, 
    maxCount, 
    increaseBy
  }) => (
  <>
    <ProductImage />
    <ProductTitle />
    <ProductButtons />  
  </>
  )}
</ProductCard>
```
