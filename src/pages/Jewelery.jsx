import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";

function Jewelery() {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return item.category === "jewelery";
  });
  return (
    <section className="container">
      <h1 className="pb-20 text-3xl font-extrabold ">Jewelery</h1>
      <div className="mx-auto flex justify-between items-start gap-20">
        <div className="w-[300px] h-[500px] flex flex-col gap-9">
          <div>
            <h3 className="text-lg font-semibold border-b-2 border-slate-400 pb-4 mb-4">
              Category
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="font-normal text-base text-[#686868] hover:text-[#ED165F]">
                All
              </li>
              <li className="font-normal text-base text-[#686868] hover:text-[#ED165F]">
                Dresses
              </li>
              <li className="font-normal text-base text-[#686868] hover:text-[#ED165F]">
                Denim
              </li>
              <li className="font-normal text-base text-[#686868] hover:text-[#ED165F]">
                Jackets and coats
              </li>
              <li className="font-normal text-base text-[#686868] hover:text-[#ED165F]">
                Loungerie & underwear
              </li>
              <li className="font-normal text-base text-[#686868] hover:text-[#ED165F]">
                Sweaters & knits
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b-2 border-slate-400 pb-4 mb-4">
              SIZE
            </h3>
            <ul className="grid grid-cols-4 gap-4">
              <li className="border border-slate-900 rounded-sm px-[6px] py-3 text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b-2 border-slate-400 pb-4 mb-4">
              SIZE
            </h3>
            <ul className="grid grid-cols-3 gap-4">
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
              <li className="border border-slate-900 rounded-sm px-[7px] py-[13px] text-sm font-semibold text-center">
                XXS
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-sm mx-auto md:max-w-none md:mx-0">
          {filteredProducts.map((products) => {
            return <Product products={products} key={products.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Jewelery;
