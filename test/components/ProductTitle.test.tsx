import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components';
import ProductCard from '../../src/components';
import { product1 } from '../data/products';


describe('ProductTitle', () => {
  test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle
        title="Custom Product"
        className="custom-class"
      />
    )

    expect(wrapper.toJSON()).toMatchSnapshot();
    // console.log(wrapper.toJSON());
  });

  test('debe de mostrar el componente con el nombre del producto', () => { 
    const wrapper = renderer.create(
      <ProductCard
        product={product1}
      >
        {
          () => (
            <ProductTitle />
          ) 
        }
      </ProductCard>
    )

    // console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  })
})