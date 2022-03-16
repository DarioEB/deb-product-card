import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components';
import ProductCard from '../../src/components'; 
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductImage
        img="https://hola.jpg"
      />
    )

    expect(wrapper.toJSON()).toMatchSnapshot();
    // console.log(wrapper.toJSON());
  });

  test('debe de mostrar el componente con el nombre del producto', () => { 
    const wrapper = renderer.create(
      <ProductCard
        product={product2}
      >
        {
          () => (
            <ProductImage />
          ) 
        }
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot();
  })
})