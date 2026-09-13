
import usePagination from "./hooks/usePagination";

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: "Laptop", price: 15000000 },
    { id: 2, name: "Keyboard", price: 800000 },
    { id: 3, name: "Mouse", price: 400000 },
    { id: 4, name: "Monitor", price: 5000000 },
    { id: 5, name: "Headphone", price: 1200000 },
    { id: 6, name: "Webcam", price: 900000 },
    { id: 7, name: "USB", price: 200000 },
    { id: 8, name: "Microphone", price: 1500000 },
];

function ProductList() {
    const {
        currentPage,
        totalPages,
        currentItems,
        next,
        prev,
        goToPage,
    } = usePagination<Product>(products, 3);

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>

            {currentItems.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price.toLocaleString()} VNĐ</p>
                </div>
            ))}

            <div>
                <button
                    onClick={prev}
                    disabled={currentPage === 1}
                >
                    Trước
                </button>

                {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                ).map((page) => (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        disabled={currentPage === page}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={next}
                    disabled={currentPage === totalPages}
                >
                    Sau
                </button>
            </div>

            <p>
                Trang {currentPage} / {totalPages}
            </p>
        </div>
    );
}

export default ProductList;
