import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";

function ClothesPage() {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      <section className="container">
        <h1 className="pb-20 text-3xl font-extrabold ">Clothes</h1>
        <div className="mx-auto flex justify-between items-start gap-20">
          <div className="flex flex-col gap-9 max-w-[300px] mx-auto md:max-w-none md:mx-0">
            <div>
              <h3 className="text-lg font-semibold border-b-2 border-slate-400 pb-4 mb-4">
                Category
              </h3>
              <ul className="flex flex-col gap-5">
                {[
                  "All",
                  "Dresses",
                  "Denim",
                  "Jackets and coats",
                  "Loungerie & underwear",
                  "Sweaters & knits",
                ].map((category, index) => (
                  <li
                    key={index}
                    className="font-normal text-base text-[#686868] hover:text-[#ED165F]"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold border-b-2 border-slate-400 pb-4 mb-4">
                SIZE
              </h3>
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-xs mx-auto md:max-w-none md:mx-0">
                {[
                  "XXS",
                  "XS",
                  "S",
                  "M",
                  "L",
                  "XL",
                  "23",
                  "24",
                  "25",
                  "26",
                  "27",
                  "28",
                  "29",
                  "30",
                  "31",
                  "32",
                ].map((size, index) => (
                  <li
                    key={index}
                    className="border border-slate-900 rounded-sm px-[7px] py-3 text-sm font-semibold text-center"
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold border-b-2 border-slate-400 pb-4 mb-4">
                COLOR
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 max-w-xs mx-auto md:max-w-none md:mx-0">
                {[
                  { color: "orange-200", name: "Beige" },
                  { color: "blue-900", name: "Blue" },
                  { color: "black", name: "Black" },
                  { color: "orange-500", name: "Orange" },
                  { color: "green-900", name: "Green" },
                  { color: "orange-950", name: "Brown" },
                  { color: "purple-900", name: "Purple" },
                  { color: "yellow-400", name: "Gold" },
                  { color: "slate-200", name: "Taupe" },
                  { color: "white", name: "White" },
                  { color: "pink-900", name: "Pink" },
                  { color: "red-600", name: "Red" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className={`w-8 h-8 bg-${item.color} ${
                        index === 9 ? "border" : ""
                      } border-slate-900 rounded`}
                    ></div>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((products) => {
              return <Product products={products} key={products.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClothesPage;
