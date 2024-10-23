import React, { useState, useEffect, useRef } from 'react';
import { getAllProducts,deleteProduct } from '../../Services/ProductService'; 
import { useNavigate } from 'react-router-dom'; 

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const navigate = useNavigate(); // Initialize navigate
    const isFetchedRef = useRef(false);
    useEffect(() => {
        if (!isFetchedRef.current) {
        const fetchProducts = async () => {
            try {
                const response = await getAllProducts(); // Fetch all products from the service
                setProducts(response.data); // Assuming response.data contains an array of products
                setError(null); // Clear any previous error
            } catch (err) {
                console.error('Error fetching products:', err);
                setError('Failed to fetch products. Please try again later.');
            } finally {
                setIsLoading(false); // Stop loading regardless of success or error
            }
        };

        fetchProducts();
        isFetchedRef.current = true;
    }
    }, []);

    const handleEdit = (productSlug) => {
        navigate(`/admin/Product/edit/${productSlug}`); // Navigate to edit page with slug
    };

    const handleCreate = (e) => {
        e.preventDefault(); // Prevent form submission side effects
        navigate('/admin/Product/create');
    };
    
    const handleDelete = async (ProductId) => {
        if (window.confirm("Are you sure you want to delete this category? This will also delete all related subcategories and products.")) {
            try {
                await deleteProduct(ProductId); // Call the delete function
                setProducts(products.filter(product => product._id !== ProductId)); // Remove the deleted category from state
            } catch (error) {
                console.error('Error deleting category:', error);
            }
        }
    };
    if (isLoading) {
        return <div>Loading products...</div>; // Loading indicator
    }

    return (
        <div>
            <div className="pagetitle">
                Products
            </div>
            <div className="form-600">
                <div className="white-bg">
                    <button className="button" onClick={handleCreate}>
                        Create Product
                    </button>
                    {error && <div className="error">{error}</div>} {/* Display error message */}
                    <table className="tablestyle">
                        <thead>
                            <tr className="roundheader">
                                <th>Name</th>
                                <th>Price</th>
                                <th>SKU</th>
                                <th>Category</th>
                                <th className="buttoncolumn">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 ? (
                                products.map((product) => (
                                    <tr key={product.Slug}>
                                        <td>{product.Name}</td>
                                        <td>{product.Price}</td>
                                        <td>{product.SKU}</td>
                                        <td>{product.CategoryName}</td> {/* Assuming the product has a CategoryName field */}
                                        <td>
                                            <button
                                                className="gridbutton"
                                                onClick={() => handleEdit(product.Slug)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="gridbutton"
                                                onClick={() => handleDelete(product._id)} // Add delete button
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">No products found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductList;