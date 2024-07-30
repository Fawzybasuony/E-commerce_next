// ----- اي حاجه هنا بتتعرض في layout  ----

import Footart from "components/Footar/Footart";
import Laoding from "components/Laoding";
import Product from "components/product/Product";
import Slidar from "components/slidar/Slidar";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <center>
        <Suspense fallback={<Laoding />}>
          <Slidar />
          <Product
            // @ts-ignore
            name={undefined}
          />
        </Suspense>
      </center>
      <Footart/>
    </>
  );
}
