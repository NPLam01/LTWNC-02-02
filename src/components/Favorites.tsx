import { useFavoritesStore } from "../stores/favoritesStore";

function Favorites() {
    const favorites = useFavoritesStore(
        (state) => state.favorites
    );

    const removeFavorite = useFavoritesStore(
        (state) => state.removeFavorite
    );

    return (
        <div>
            <h2>Sản phẩm yêu thích</h2>

            {favorites.length === 0 ? (
                <p>Chưa có sản phẩm yêu thích</p>
            ) : (
                favorites.map((product) => (
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
                                removeFavorite(product.id)
                            }
                        >
                            💔 Bỏ yêu thích
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Favorites;