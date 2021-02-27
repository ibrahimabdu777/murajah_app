import React from "react";
import quranData from "./qurandata.json"
     
      
      {/* <p>{verses.index}</p>
      <p>{verses.name}</p>
      <p>{verses.verse.verse_1}</p>
      for (i=0; i<verses.verse.length; i++)
      {
        <p>verses.verse[i]</p>;
      }
      {/* <p>{Object.values(verses.verse)}</p> */}
      {/* <p>{verses.verse.verse_2}</p>
      <p>{verses.verse.verse_3}</p>
      <p>{verses.verse.verse_4}</p>
      <p>{verses.verse.verse_5}</p>
      <p>{verses.verse.verse_6}</p>
      <p>{verses.verse.verse_7}</p> */}
const quranDataObject = Object.values(quranData.verse)
const displayedAyat = quranDataObject.map((x) => {
  return <p>{x}</p>
})
function App() {
  
  return (
    <div>{displayedAyat}</div>
  );
}

export default App;
