import { useState } from "react";

interface ProductListProps {

}

const initialproducts = [
  { title: 'Cyberpunk 2077', price: 100, id: 'cbr' },
  { title: 'Dead Island 2', price: 90, id: 'dil' },
  { title: 'Dying Light 2', price: 80, id: 'dlt' },
]

interface Product {
  title: string;
  price: number;
  id: string
}

const ProductList: React.FC<ProductListProps> = () => {
  const [products, setProducts] = useState<Product[]>(initialproducts);

  return (
    <div>
      <h2>Games list</h2>
      {products.map((game) => (
        <div key={game.id}>
          <span>{`${game.title} : ${game.price}`}</span>
        </div>
      ))}
      <button
        onClick={() =>
          setProducts((prevProducts) => [
            {
              title: 'Half Life 2',
              price: 85,
              id: 'hl2',
            },
            ...prevProducts,
          ])
        }
      >
        Buy
      </button>
    </div>
  );
};


export default ProductList