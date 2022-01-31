import React, { useState } from "react";
import './App.css';
import { Search } from './components/Search';
import { Card } from './components/Card'

function App() {

  const [text, setText] = useState("");
  const [img, setImage] = useState([]);

  const textInputFunction = (e) => {
    setText(e.target.value);
  };

  const ClickButton = () => {
    console.log(text);
    fetch(`https://api.unsplash.com/search/photos?query=${text}&client_id=m5e5oyp-uyiFPgUfkSpKnstYBzShv088fytRM-53xjc`).then(response => response.json()).then(resault => setImage(resault.results))
  };

  return (
    <div>
      <div className="bg-dark">
        <div className="container">
            <div className="row">
              <Search
                textInputFunction={textInputFunction}
                ClickButton={ClickButton}
              />
            </div>
            <div className="col-md-12 pb-1">
              <p className="fs-4 text-warning">
                {img.length} tane arama bulundu :)
              </p>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-3">
          {img.map((item, index) => (
            <Card
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
