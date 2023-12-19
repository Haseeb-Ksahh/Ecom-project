import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Products from '../components/Products.jsx'
import axios from 'axios'

const HomeScreen = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios("/api/products");
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, [])

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Products product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen