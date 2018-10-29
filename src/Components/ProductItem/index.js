import React from 'react';

const ProductItem = (props) => {
    return(
        <div> 
            <h3>This is the product Item</h3>
            <h4>Title: {props.title}</h4>
            <p>Description: {props.description}</p>
            <p>Votes: {props.votes}</p><button onClick={ () => props.handleProductUpVote(props.id) }>+</button>
        </div>
    );
}

export default ProductItem;