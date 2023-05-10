import React from 'react';

const SearchBox = ({searchChange}) =>{
    return (
    <div >
        <input 
        type='search' 
        placeholder='Search Books'
        onChange={searchChange}
        className='br3 pa2 mb4 black-40'
        />
    </div>
    );
}

export default SearchBox;