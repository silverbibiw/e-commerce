import React, { useContext, useRef } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../layout/Hero";

function HomePage() {
  const mainSectionRef = useRef(null);

  const handleButtonClick = () => {
    mainSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const { products } = useContext(ProductContext);
  //   console.log(products);

  return (
    <section ref={mainSectionRef} className="container">
      <Hero onButtonClick={handleButtonClick} />
      <div className="font-normal text-2xl px-44 text-center py-10">
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

// import React, { useRef } from "react";

// const App = () => {
//   const mainSectionRef = useRef(null);

//   const handleButtonClick = () => {
//     mainSectionRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       <HeroUI onButtonClick={handleButtonClick} />
//       <div ref={mainSectionRef}>
//         <MainSection />
//       </div>
//       <OtherSections />
//     </div>
//   );
// };

// const HeroUI = ({ onButtonClick }) => {
//   return (
//     <div>
//       <h1>
//         Welcome to the Hero UI! Lorem ipsum dolor sit amet consectetur
//         adipisicing elit. Nisi eum pariatur delectus placeat minus voluptas
//         iusto, earum libero dolor suscipit ad repudiandae magnam nam reiciendis
//         aspernatur repellendus eius corrupti. Impedit repudiandae non debitis
//         dicta amet cumque, praesentium at quae voluptates! Esse modi nisi est
//         fa
//       </h1>
//       <button onClick={onButtonClick}>Scroll to Main Section</button>
//     </div>
//   );
// };

// const MainSection = () => {
//   return (
//     <div>
//       <h2>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit
//         sed quibusdam vitae eaque itaque dolore illum similique accusamus ut.
//         Aliquam fuga nisi dignissimos, quibusdam explicabo sequi delectus
//         reprehenderit voluptatum exercitationem impedit id, perferendis dolor,
//         natus voluptate ducimus ratione repellat numquam asperiores? Beatae
//         nihil aperiam, cupiditate reiciendis inventore assumenda ipsa vel hic
//         debitis! Rem tempore, suscipit magnam unde nulla ea repellendus est,
//         explicabo tempora illum voluptate laborum deleniti dicta pariatur, quod
//         impedit sed similique officiis? Facere, porro! Assumenda alias ratione
//         minima nulla in accusamus eveniet nemo nesciunt, eius architecto natus
//         vel error optio aperiam odit numquam laborum dolorem! Beatae ab,
//         cupiditate in, neque odio dolor voluptatem facere animi at quis ea
//         tem
//       </h2>
//       {/* Content for the main section */}
//     </div>
//   );
// };

// const OtherSections = () => {
//   return (
//     <div>
//       <h2>Other Sections</h2>
//       {/* Content for other sections */}
//     </div>
//   );
// };

// export default App;
