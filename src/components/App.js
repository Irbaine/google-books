import React from 'react';
//import { data } from './data';

// const state = {
//   data : data,
//   searchfield: '',
// }

// old src `https://robohash.org/${id}?200x200`//`https://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72y9i7dVgSRTjwICYMBmvE1zwJwYVPkarGCWJpaJgWVOspVpocueXAmwd9Z4LuV4A1wTNvLqX9dcqhWVt7gisZzzUYWO-dmsF9E_JiUqUMAMygaf7EiPF60_xU6rl0A_TjbQeci&source=gbs_api`
export function countWords(str) {
  const arr = str.split(' ');

  return arr.filter(word => word !== '').length;
}

export const MyComponent = (str) => {
  const myString = str;
  const words = myString.split(" ");
  const lines = [];
  let line = "";
  for (let i = 0; i < words.length; i++) {
    if ((i + 1) % 5 === 0) {
      line += words[i] + " ";
      lines.push(line.trim());
      line = "";
    } else {
      line += words[i] + " ";
    }
  }
  if (line.trim() !== "") {
    lines.push(line.trim());
  }
  return (
    <div>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}


const App = ({email, id, name, pages, author, language, link}) =>{
  return (
  <a href={link} target="_blank" rel="noopener noreferrer" class="link black">
    <div className="bg-light-gray tc dib br3 ma3 pa2 grow bw2 shodow-5" >
      <img alt='robots' src={`https://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72y9i7dVgSRTjwICYMBmvE1zwJwYVPkarGCWJpaJgWVOspVpocueXAmwd9Z4LuV4A1wTNvLqX9dcqhWVt7gisZzzUYWO-dmsF9E_JiUqUMAMygaf7EiPF60_xU6rl0A_TjbQeci&source=gbs_api`}></img>
      <div>
        <h2 className='dim'>{ countWords(name) > 6 ? MyComponent(name): name}</h2>
        <h3 className="ma2 pl0 pr0">{pages} Page</h3>
        <h3 className="ma2 pl0 pr0">{language}</h3>
      </div>
    </div>
    </a>
  );
}

export default App;


// video 13 must be repeated
