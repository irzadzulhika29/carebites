const CartMealsItem = ({ item, onRemove, onClick }) => {
  const formatPrice = (price) => `Rp${Number(price).toLocaleString('id-ID')}`;

  return (
    <div 
      onClick={onClick}
      className="bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={item.image_url}
            alt={item.productName}
            className="w-24 h-24 object-cover rounded-md"
          />
          <div>
            <h3 className="font-bold text-lg mb-1">{item.productName}</h3>
            <p className="text-sm text-gray-600 mb-1">
              {item.quantity} x {formatPrice(item.price)}
            </p>
            <p className="text-sm font-semibold text-green-600">
              Total: {formatPrice(item.price * item.quantity)}
            </p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(item.id);
          }}
          className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full text-sm transition-colors duration-200"
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default CartMealsItem;