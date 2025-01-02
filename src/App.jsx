import { useState } from 'react';
import phrases from './phrases.json';
import { bg1, bg2, bg3, bg4, bgCoock } from './assets/images';
import './App.css';

const images = [bg1, bg2, bg3, bg4];

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function App() {
  const [phrase, setPhrase] = useState(phrases[getRandomIndex(phrases)].phrase);
  const [bgRandom, setBgRandom] = useState(images[getRandomIndex(images)]);

  const handleClick = () => {
    let newPhrase;
    do {
      newPhrase = phrases[getRandomIndex(phrases)].phrase;
    } while (newPhrase === phrase);

    let newBg;
    do {
      newBg = images[getRandomIndex(images)];
    } while (newBg === bgRandom);

    setPhrase(newPhrase);
    setBgRandom(newBg);
  };

  const bgStyle = `url('${bgRandom}')`;

  return (
    <div className="wrapper" style={{ backgroundImage: bgStyle }}>
      <div className='coock'></div>
      <div className="container">
        <h1 className="title">Galletas de la Fortuna</h1>
        <blockquote className="card">
          <div className="card__body">
            <p className="card__text">{phrase}</p>
          </div>
        </blockquote>
        <button className="btn" onClick={handleClick}>
          ver otro
        </button>
      </div>
    </div>
  );
}

export default App;