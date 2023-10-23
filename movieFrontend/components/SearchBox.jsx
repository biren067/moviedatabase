import React from 'react'

function SearchBox({filter,setFilter}) {
  const inputStyle = {
  fontFamily: 'Fantasy,Cursive',
  letterSpacing:'2px',
};
  return (
    <> 
    <span className='mx-4 text-lg'>Search:</span>
    <input type='text' 
            value = {filter||''} 
            style={inputStyle} 
            className='bg-white rounded px-3 h-8 my-1 w-3/5 md:w-1/5 text-gray-900'
            onChange={(e)=>setFilter(e.target.value)}/> </>
  )
}

export default SearchBox