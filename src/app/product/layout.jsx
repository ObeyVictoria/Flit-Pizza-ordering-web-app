import React from 'react'

const Product = ({children}) => {
    return (
        <div>
            <h1>This is Product</h1>
            {children}
        </div>
    )
}

export default Product