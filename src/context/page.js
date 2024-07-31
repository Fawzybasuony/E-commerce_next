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

  const deleteProduct = (id) => {
    setloading(true);

    fetch(`httstp://localhost:4000/produc/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (!res.ok) {
        toast.error("Sorry, there was a problem");
        setTimeout(() => {
          setloading(false);
        }, 1000);
        return;
      }
      toast.success("Your account has been created successfully");
      setTimeout(() => {
        setloading(false);
        router.push("/Shop");
        setlaod(false);
      }, 1500);
      // return prodat ;
    });
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
