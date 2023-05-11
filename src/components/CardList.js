import React from 'react';
import App from './App';

const CardList = ({data}) => { 
    
    return (
        <div>
            { 
        data.map((user, i) => {
        return (
        <App
        key={i}
        id= {data[i].id}
        name= {data[i].volumeInfo.title}
        username= {data[i].volumeInfo.publishedDate}
        email= {data[i].volumeInfo.publishedDate}
        pages= {data[i].volumeInfo.pageCount}
        language= {data[i].volumeInfo.language}
        link= {data[i].volumeInfo.canonicalVolumeLink}

        />

        )}
            )}

        </div>
    ) 
        }

export default CardList;