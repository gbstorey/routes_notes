import {useParams} from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    const {productId} = params
    console.log(productId)
    return <section>
        <h1>Product Detail</h1>
        <p>{productId}</p>
    </section>
}

export default ProductDetail;