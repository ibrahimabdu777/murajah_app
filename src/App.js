import React, { useState } from "react";
import {animated, useSpring} from "react-spring";


// adding surah numbers to array
const array = []
for (let i = 1;i<115; i ++ ) {
  array.push(i)
}
let surahNumber = 1



function App() {
  const [startingAyat, setStartingAyat]  = useState(0);
  const [endingAyat, setEndingAyat]  = useState(10);
  
  const transition = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    config: {duration: 500}

  }

  ) 
// useState which will allow us to update fetched surah to a particular surah 
  const [fetchedsurah, setFetchedSurah] = useState({})

// function storeSurahNumber stores the number we enter in surahNumber
 
  const storeSurahNumber=(e)=>{
    surahNumber=e.target.value
  }
// 
  const fetchQuranData = () => {

    fetch(`https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_${surahNumber}.json`)
    .then(res => res.json())
    // I think this updates fetchedSurah to what was fetched from the API
    .then(quranData => setFetchedSurah(quranData))
  
    
  }

 const getNextPage = () => {
   setEndingAyat(endingAyat + 10)
   
 }
// create a fucntion displayedAyat which will return all the printed ayats in fetchedSurah

let displayedAyat= null

if (fetchedsurah.verse){
  const surahArray = Object.values(fetchedsurah.verse)
  const firstTenArray = surahArray.slice(startingAyat,endingAyat)
displayedAyat = firstTenArray.map(ayah => {
  return <p>{ayah}</p>
})}
//input tag which stores numbers onChange- event listener
//when get surah is clicked, trigger fetchQuranData with stored number and append to string in fetch
  
  return (
    <animated.div style ={transition}> 
      <div id="bannerimage"></div>
    <h1 id="title">The Quran</h1>
    <h2 id="subheadings">Instructions</h2>
      <p id="arabic">This page allows you to view every chapter in the Quran in Arabic. All you need to do is select the chapter you would like to view. </p>
      <h2 id="subheadings">Select chapter:</h2>

    {/* <input type='Number' onChange={(e)=> storeSurahNumber(e)}/> */}
    <select onChange={(e)=> storeSurahNumber(e)} className="dropDown">
      {array.map((element)=> {
        return  <option value={element}>{element}</option>
      })}
    </select>
    
      <button className="button" onClick={()=> fetchQuranData()}> Get Chapter </button>
    
    <h2 id="subheadings">Quran:</h2>
    <p  id="arabic">{displayedAyat}</p>
    <button className="toggle" onClick={() => getNextPage()} > Load more


    </button>
    </animated.div>
  );
}

export default App;

// next task: pull ten ayat at a time when we select get chapter. COMPLETED
// next task: make a new button to toggle to next ten verses by adding ten to surahArray.slice inputs. COMPLETED
// next task: clean up code into different components
// next task: highlighting feature 



