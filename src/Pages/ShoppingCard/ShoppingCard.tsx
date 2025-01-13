import "./ShoppingCard.scss";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export const Warenkorb = ({ cartItems }: { cartItems: CartItem[] }) => {
  // Funkcja obliczająca całkowitą cenę
  const calculateTotalPrice = (): number => {
    console.log("Cart Items:", cartItems); // Logowanie danych koszyka
    return cartItems.reduce((total, item) => {
      console.log("Item price:", item.price, "Item quantity:", item.quantity); 
      // Logowanie ceny i ilości przedmiotu
      return total + item.price * item.quantity;
    }, 0);
  };

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
      {/* Wyświetlenie całkowitej ceny */}
      {cartItems.length > 0 && <p>Total: {calculateTotalPrice()}</p>}
    </div>
  );
};
