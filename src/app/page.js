// ----- اي حاجه هنا بتتعرض في layout  ----
"use client";
 
import { useContext } from "react";
import { Suspense, useEffect } from "react";
import Footar from "../components/Footar/Footar";
import Laoding from "../components/Laoding";
import Product from "../components/product/Product";
import ThemeContexttt from "../context/page";
import Slider_Heder from "../components/Slider_Heder/Slider_Heder";
export default function Home() {
  const { loading, setloading } = useContext(ThemeContexttt);
  // useEffect(() => {
  //   setloading(true);
  // }, []);

  // setTimeout(() => {
  //   setloading(false);
  // }, 1000);

  return (
    <>
      {/* {loading ? (
        <Laoding />
      ) : ( */}
        <>

          <center>

            {/* <Suspense fallback={<Laoding />}> */}
              <Slider_Heder />
              <Product />
            {/* </Suspense> */}
          </center>
          <Footar/>
        </>
      {/* )} */}
    </>
  );
}
