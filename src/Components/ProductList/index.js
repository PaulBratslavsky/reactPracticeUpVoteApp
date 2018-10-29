import React from 'react';
import ProductItem from '../ProductItem';

const ProductList = (props) => {
    const lootThroughProducts = props.product.sort( (a, b) => ( b.votes - a.votes ) ).map( (product) => 
        {   
            return(
                <ProductItem key={product.id}
                    id={product.id} 
                    title={product.title}
                    description={product.description}
                    votes={product.votes}
                    handleProductUpVote={props.handleProductUpVote}
                /> 
            );
        } 
    );
    
    return(
        <div>
            <h2>This is the Product List</h2>
            {lootThroughProducts}
        </div>
    );
}

export default ProductList;