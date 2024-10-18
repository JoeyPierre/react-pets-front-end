import { useState, useEffect } from "react";
import { getPets } from "./services/petService.js";
import PetList from "./components/PetList.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    try {
      const petsData = await getPets();
      setPets(petsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<PetList pets={pets} />} />
      </Routes>
    </>
  );
}

export default App;