import React from 'react'

const Category = ({ category }) => {
    return (
        <button className='category'>
            <p>#{category}</p>
        </button>
    )
}

export default Category