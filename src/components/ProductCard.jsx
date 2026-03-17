import { Button } from "@mui/material";

function ProductCard({ product }) {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <Button>Add to Cart</Button>
        </div>
    )
}

export default ProductCard;