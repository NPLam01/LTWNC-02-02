import { useEffect } from "react";
import usePagination from "../hooks/usePagination";

import {
    useAppDispatch,
    useAppSelector,
} from "../app/hooks";

import {
    fetchProducts,
} from "../features/products/productsSlice";

import {
    addToCart,
} from "../features/cart/cartSlice";

function ProductList() {
    const dispatch = useAppDispatch();

    
    const {
        products,
        loading,
        error,
    } = useAppSelector((state) => state.products);

    
    const {
        currentPage,
        totalPages,
        currentItems,
        next,
        prev,
        goToPage,
    } = usePagination(products, 3);

    
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    
    if (loading) {
        return <p>Đang tải sản phẩm...</p>;
    }

    
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>

            {}
            {currentItems.map((product) => (
                <div
                    key={product.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        marginBottom: "10px",
                    }}
                >
                    <h3>{product.title}</h3>

                    <p>
                        Giá:{" "}
                        {product.price.toLocaleString()} VNĐ
                    </p>

                    <img
                        src={product.image}
                        alt={product.title}
                        width="100"
                    />

                    <br />

                    <button
                        onClick={() =>
                            dispatch(addToCart(product))
                        }
                    >
                        Thêm vào giỏ
                    </button>
                </div>
            ))}

            {}
            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={prev}
                    disabled={currentPage === 1}
                >
                    Trước
                </button>

                {Array.from(
                    { length: totalPages },
                    (_, index) => (
                        <button
                            key={index}
                            onClick={() =>
                                goToPage(index + 1)
                            }
                            style={{
                                margin: "0 5px",
                                fontWeight:
                                    currentPage === index + 1
                                        ? "bold"
                                        : "normal",
                            }}
                        >
                            {index + 1}
                        </button>
                    )
                )}

                <button
                    onClick={next}
                    disabled={currentPage === totalPages}
                >
                    Sau
                </button>
            </div>
        </div>
    );
}

export default ProductList;