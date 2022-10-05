import React, { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState<string>('');
  const [cryptText, setCryptText] = useState<string>('');
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  const crypt = useCallback(() => {
    const fragText = text.split('');
    let indexs: number[] = [];
    
    fragText.map(text => {
      indexs.push(alphabet.indexOf(text));
    });

    for (let i = 0; i < indexs.length; i++) {
      console.log(alphabet[indexs[i]], fragText.indexOf(fragText[i]) + 1);
    }

    //console.log(alphabet[indexs[1] + fragText.indexOf(fragText[1]) + 1]);
  }, [text]);

  return (
    <div className="App">
      <h2>Crypt a text</h2>
      <textarea 
        name="crypt" 
        onChange={e => setText(e.target.value)}
        cols={30} 
        rows={10}></textarea>
      <button onClick={crypt}>Crypt</button>
    </div>
  )
}

export default App
