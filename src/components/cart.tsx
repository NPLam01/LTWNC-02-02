
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
    removeFromCart,
    updateQuantity,
} from "../features/cart/cartSlice";

function Cart() {
    const dispatch = useAppDispatch();

    const items = useAppSelector(
        (state) => state.cart.items
    );

    const handleIncrease = (id: number, quantity: number) => {
        dispatch(
            updateQuantity({
                id,
                quantity: quantity + 1,
            })
        );
    };

    const handleDecrease = (id: number, quantity: number) => {
        if (quantity > 1) {
            dispatch(
                updateQuantity({
                    id,
                    quantity: quantity - 1,
                })
            );
        }
    };

    return (
        <div>
            <h2>Giỏ hàng</h2>

            {items.length === 0 ? (
                <p>Giỏ hàng đang trống</p>
            ) : (
                items.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        <h3>{item.title}</h3>

                        <p>
                            Giá:{" "}
                            {item.price.toLocaleString()} VNĐ
                        </p>

                        <div>
                            <button
                                onClick={() =>
                                    handleDecrease(
                                        item.id,
                                        item.quantity
                                    )
                                }
                                disabled={item.quantity === 1}
                            >
                                -
                            </button>

                            <span
                                style={{
                                    margin: "0 10px",
                                }}
                            >
                                {item.quantity}
                            </span>

                            <button
                                onClick={() =>
                                    handleIncrease(
                                        item.id,
                                        item.quantity
                                    )
                                }
                            >
                                +
                            </button>
                        </div>

                        <button
                            onClick={() =>
                                dispatch(
                                    removeFromCart(item.id)
                                )
                            }
                            style={{
                                marginTop: "10px",
                            }}
                        >
                            Xóa
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;

