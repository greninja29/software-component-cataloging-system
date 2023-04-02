import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/fire-config";
import Navbar from "./Navbar";


export default function Home() {
  const [components, setComponents] = useState([]);
  const [searchResult,setSearchResult] = useState([]);

  const [key, setKey] = useState("");
  const componentsRef = collection(db, "components");

  const getComponents = async () => {
    const data = await getDocs(componentsRef);
    console.log(typeof data);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setComponents(filteredData);
  };
  const handleDelete = async (id) => {
    const componetDoc = doc(db, "components", id);
    await deleteDoc(componetDoc);
    getComponents();
  };

  const handleSearch = () => {
   let searchResult = components.filter((item) => item.name === key);
    setSearchResult(searchResult);
    console.log(searchResult);

  };

  useEffect(() => {
    getComponents();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-black p-4 text-white">
        <label>Give name of component</label>
        <input
          onChange={(e) => setKey(e.target.value)}
          type="text"
          className="border-2 rounded mx-4 text-black"
        />
        <button
          onClick={() => handleSearch()}
          className="bg-gray-500 p-3 rounded"
        >
          Search
        </button>
      </div>
      <div className="p-4 bg-gray-500 ">
        <span className="font-bold">Search results....</span>
        <br />
        <div className="gap-4">
          {searchResult?.map((item) => (
            <div className="p-4 rounded bg-sky-900 text-white ">
              <h1 className="text-5xl font-bold">{item.name}</h1>
              <div>{item.type}</div>

              <div>{item.category}</div>
              <br />
              <div>By author</div>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-600 p-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 gap-4 grid grid-cols-2">
        {components.map((item) => (
          <div className="p-4 rounded bg-sky-900 text-white ">
            <h1 className="text-5xl font-bold">{item.name}</h1>
            <div>{item.type}</div>

            <div>{item.category}</div>
            <br />
            <div>By author</div>
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-600 p-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
