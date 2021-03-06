import React, { useState } from "react";



//Get each element in array 


//Get verses from each element 
//Map verses



function App() {

  const [fetchedsurah, setFetchedSurah] = useState({})

  const fetchQuranData = () => {
    fetch("https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_2.json")
    .then(res => res.json())
    .then(quranData => setFetchedSurah(quranData))
  
    
  }

 


let displayedAyat= null

if (fetchedsurah.verse){
  const surahArray = Object.values(fetchedsurah.verse)
displayedAyat = surahArray.map(ayah => {
  return <p>{ayah}</p>
})}

  
  return (
    <div> 
    <button onClick={()=> fetchQuranData()}> Get Surah</button>
    <p>{displayedAyat}</p>
    </div>
  );
}

export default App;
