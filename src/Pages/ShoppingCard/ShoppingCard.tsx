import "./ShoppingCard.scss"

interface CartItem {
    name: string;
    price: number;
    quantity: number;
}

export const Warenkorb = ({ cartItems }: { cartItems: CartItem[] }) => {
    return (
        <div className="Warenkorb">
            <h1>Warenkorb</h1>
            {cartItems.map((item, index) => (
                <div className="card-container" key={index}>
                    <span>{item.quantity}x </span>
                    <span>{item.name}</span>
                    <span>{item.price}€</span>
                </div>
            ))}
        </div>
    );
};
