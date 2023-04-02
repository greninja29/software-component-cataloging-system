import React, { useState, prevState, useEffect } from "react";
import { db } from "../config/fire-config";
import { addDoc, doc, collection } from "firebase/firestore";
import Navbar from "./Navbar";

export default function Addcomponent() {
  const [data, setData] = useState({
    name: "",
    type: "",
    category: "",
    description: "",
    frequency: "",
    
  });

  const comp_ref = collection(db, "components");

  function handleName(event) {
    setData((prevState) => ({ ...prevState, name: event.target.value }));
  }
  function handleType(e) {
    setData((prevState) => ({ ...prevState, type: e.target.value }));
  }
  function handleCategory(e) {
    setData((prevState) => ({ ...prevState, category: e.target.value }));
  }
  function handleDescription(e) {
    setData((prevState) => ({ ...prevState, description: e.target.value }));
  }
  const handleSubmit = async () => {
    await addDoc(comp_ref, data);
    setData({name:"",description:"",type:"",category:"",frequency:""})
  };

  return (
    <>
    <div>
      <Navbar/>
      <div className=" p-4 gap-2 grid grid-cols-1">
      <label className="font-bold">Component Name</label>
      <input
        onChange={handleName}
        value={data.name}
        className="border-gray-500 border-2 rounded"
        type="text"
      />
      {/* <br /> */}
      <span className="font-bold">Type</span>
      <input
        onChange={handleType}
        value={data.type}
        className="border-gray-500 border-2 rounded"
        type="text"
      />
      {/* <br /> */}
      <span className="font-bold">Category</span>
      <input
        onChange={handleCategory}
        value={data.category}
        className="border-gray-500 border-2 rounded"
        type="text"
      />
      <br />
      <span className="font-bold">Upload component file</span>
      <input type="file" />
      <span className="font-bold">Description</span>
      <textarea
        onChange={handleDescription}
        value={data.description}
        className="border-gray-500 border-2 rounded"
        cols="5"
        rows="5"
      ></textarea>
      <br />
      <button onClick={handleSubmit} className="bg-blue-700 p-3 rounded text-w">
        Submit
      </button>
    </div>
    </div>
  </> 
  );
}
