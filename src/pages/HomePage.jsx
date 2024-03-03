import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";

function HomePage() {
  const { products } = useContext(ProductContext);
  //   console.log(products);

  return (
    <section className="container">
      <div className="font-normal text-2xl px-44 text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
          cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut
          lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis
          diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae
          adipiscing id facilisis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mx-auto md:max-w-none md:mx-0">
        {products.map((products) => {
          return <Product products={products} key={products.id} />;
        })}
      </div>
    </section>
  );
}

export default HomePage;
