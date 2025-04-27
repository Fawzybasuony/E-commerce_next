"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// @ts-ignore
const ThemeContexttt = createContext();

export function ThemeProvider({ children }) {
  const router = useRouter();
  const [name, setname] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const [data, setdata] = useState(false);
  const [laod, setlaod] = useState(false);

  const [prodat, setprodat] = useState([]);
  const [addprodat, setaddprodat] = useState([]);
  const [ID, setID] = useState([]);

  //  __cart page
  const [totle, setTotle] = useState(0);

  useEffect(() => {
    const newTotal = addprodat.reduce((acc, item) => {
      return acc + Number(item.price) * Number(item.amount);
    }, 0);
    setTotle(newTotal);
  }, [addprodat]);

  const handleSubmit = (eo) => {
    eo.preventDefault();

    setloading(true);
    setTimeout(() => {
      setloading(false);
      setlaod(true);
      router.push("/");
    }, 1000);
    setdata(true);
    setTimeout(() => {
      setlaod(false);
    }, 2000);

    toast.success("Your account has been created successfully");
  };

  const deleteProduct = async (_id) => {
    setloading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_KEY}/delete/${_id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        const errorMessage = `Error: ${res.status} ${res.statusText}`;
        throw new Error(errorMessage);
      }

      toast.success("Product has been deleted successfully");

      // Update the state to remove the deleted product
      if (Array.isArray(prodat)) {
        setprodat(prodat.filter((product) => product.id !== _id));
      }

      setTimeout(() => {
        setloading(false);
        router.push("/Shop");
        setlaod(false);
      }, 1500);
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product: " + error.message);

      setTimeout(() => {
        setloading(false);
      }, 1000);
    }
  };

  const Addproduct = (item) => {
    setaddprodat([...addprodat, { ...item, amount: 1 }]);
    setID([...ID, item._id]);
  };

  const handleChange = (item, d) => {
    const ind = addprodat.indexOf(item);
    const arr = addprodat;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setaddprodat([...arr]);
  };

  const RemoveProduct = (id) => {
    const remove = addprodat.filter((item) => item._id !== id);
    setaddprodat(remove);
    setID((prevIDs) => prevIDs.filter((ID) => ID !== id));
  };

  return (
    <ThemeContexttt.Provider
      value={{
        setname,
        setemail,
        setpassword,
        name,
        email,
        password,
        setloading,
        seterror,
        error,
        loading,
        data,
        setdata,
        handleSubmit,
        prodat,
        setprodat,
        deleteProduct,
        laod,
        setlaod,
        Addproduct,
        addprodat,
        setaddprodat,
        handleChange,
        RemoveProduct,
        ID,
        setID,
        totle,
      }}
    >
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
