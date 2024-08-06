// ----- اي حاجه هنا بتتعرض في layout  ----
"use client";
import Footart from "components/Footar/Footart";
import Laoding from "components/Laoding";
import Product from "components/product/Product";
import Slidar from "components/slidar/Slidar";
import { Suspense, useEffect } from "react";
import ThemeContexttt from "context/page";
import { useContext } from "react";

export default function Home() {
  const { loading, setloading } = useContext(ThemeContexttt);
  useEffect(() => {
    setloading(true);
  }, []);

  setTimeout(() => {
    setloading(false);
  }, 1000);

  return (
    <>
      {loading ? (
        <Laoding />
      ) : (
        <>
          <center>
            <Suspense fallback={<Laoding />}>
              <Slidar />
              <Product />
            </Suspense>
          </center>
          <Footart />
        </>
      )}
    </>
  );
}
