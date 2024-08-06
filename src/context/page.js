"use client";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
// json-server --watch --port 4000 ./DB.json

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

  const admin = () => {
    // if (email == "fawzy@gmail.com" && password == "555") {
    //   setloading(true);
    //   setdata(true);
    //   setname("Admin");
    //   router.push("/");
    //   setloading(false);
    // } else {
    //   seterror("Sorry, this page is for admin");
    //   setloading(false);
    //   setdata(false);
    // }
  };

  const handleSubmit = (eo) => {
    eo.preventDefault();
    // admin();
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

  const deleteProduct = async (id) => {
    setloading(true);

    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorMessage = `Error: ${res.status} ${res.statusText}`;
        throw new Error(errorMessage);
      }

      toast.success("Product has been deleted successfully");

      // Update the state to remove the deleted product
      if (Array.isArray(prodat)) {
        setprodat(prodat.filter((product) => product.id !== id));
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
    setID([...ID, item.id]);
  };

  const handleChange = (item, d) => {
    const ind = addprodat.indexOf(item);
    const arr = addprodat;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setaddprodat([...arr]);
  };

  const RemoveProduct = (id) => {
    const remove = addprodat.filter((item) => item.id !== id);
    setID(ID.filter((ID) => ID !== id));
    setaddprodat(remove);
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
        admin,
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
      }}
    >
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
