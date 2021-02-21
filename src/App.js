import axios from "axios";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const URL = "https://pokeapi.co/api/v2/pokemon/" + inputText;
  console.log(inputText);
  console.log(URL);

  function handleClick(event) {
    event.preventDefault();
    axios
      .get(URL)
      .then((response) => {
        setName(response.data.name);
        setImage(response.data.sprites.other.dream_world.front_default);
        setInputText("");
      })
      .catch(() => {
        setName("Pokemon not found");
        setImage("");
      });
  }
  return (
    <div className="App">
      <h3>
        Try to search :{" "}
        <span className="block">pikachu, charizard, blastoise</span>
      </h3>
      <form>
        <input
          type="text"
          placeholder="search"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
        <button type="submit" onClick={handleClick}>
          search
        </button>
      </form>
      <h1>{name}</h1>
      <img src={image} alt="image" />
    </div>
  );
}
