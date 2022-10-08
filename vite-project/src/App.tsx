import React, { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState<string>('');
  const [cryptText, setCryptText] = useState<string>('');
  const [decryptText, setDecryptText] = useState<string>('');
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  const crypt = useCallback(() => {
    let letterIndexs: number[] = [];

    text.split('').map(text => letterIndexs.push(alphabet.indexOf(text)));

    let cryptedText: string[] = [];

    for (let i = 0; i < letterIndexs.length; i++) {
      const saltLetterByPositionLength = i + 1;
      let letterIndex = letterIndexs[i] + saltLetterByPositionLength;

      if (letterIndex >= alphabet.length) {
        letterIndex = 0 + (letterIndex - alphabet.length);
      }

      cryptedText.push(alphabet[letterIndex]);
    }

    setCryptText(cryptedText.join('').trim());
    setText('');
  }, [text]);

  const decrypt = useCallback(() => {
    let letterIndexs: number[] = [];

    cryptText.trim().split('').map(text => letterIndexs.push(alphabet.indexOf(text)));

    let decryptedText: string[] = [];

    for (let i = 0; i < letterIndexs.length; i++) {
      let letterIndex = letterIndexs[i] - (i + 1);

      if (letterIndex < 0) {
        letterIndex = (alphabet.length - 1) - parseInt(letterIndexs[i].toString());

        console.log(letterIndex);
      }

      decryptedText.push(alphabet[letterIndex]);
    }

    console.log(decryptedText.join(''));
  }, [text]);

  return (
    <div className="App">
      <h2>Crypt a text</h2>
      <textarea 
        name="crypt" 
        onChange={e => setText(e.target.value)}
        value={text}
        cols={30} 
        rows={10}></textarea>
      <button onClick={crypt}>Crypt</button>

      { cryptText && (
        <>
          <p>Crypted Text: { cryptText }</p>
          <button onClick={decrypt}>Decrypt</button>
        </>
      ) }
    </div>
  )
}

export default App
