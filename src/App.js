import ImagrGrid from "./components/ImagrGrid";
import Model from "./components/Model";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

import { useState } from 'react';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  const closeModel = (e) => {
    if (e.target.classList.contains('backdrop')){
      setSelectedImg(null);
    }    
  }

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImagrGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Model onClick={closeModel} selectedImg={selectedImg} />
      )
      }
    </div>
  );
}

export default App;
