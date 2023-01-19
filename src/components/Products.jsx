import React, { useEffect, useState } from "react";
import useProducts from "../hooks/use-products";

export default function Products() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <input
        id="checkbox"
        value={checked}
        type="checkbox"
        onChange={handleChange}
      />
      <label htmlFor="checkbox"> Show Only 🔥🔥 핫 세일 </label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
