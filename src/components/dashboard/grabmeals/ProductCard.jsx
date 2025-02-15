import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
            <div className="hover:scale-105 transition duration-300 hover:cursor-pointer w-52 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="w-full">
                    <div className="p-3">
                        <div className='flex gap-2 mb-2 items-center'>
                            <img 
                                src={product.photoProfile} 
                                alt={product.photoProfile} 
                                className="w-6 h-6 object-cover block rounded-full" 
                            />
                            <h1 className="text-xs font-medium truncate">{product.owner}</h1>
                        </div>

                        <img
                            className="rounded w-full h-32 mb-2 object-cover"
                            src={product.image_url}
                            alt={product.name}
                        />
                        <div className="space-y-1">
                            <h1 className="font-semibold text-base truncate" title={product.productName}>
                                {product.productName}
                            </h1>
                            <div className="flex items-center justify-between">
                                <h1 className="text-xs text-gray-600">{product.location}</h1>
                                <h1 className="text-xs text-gray-600">Stock: {product.stok}</h1>
                            </div>
                            <h1 className="text-sm font-bold text-[#45c517]">
                                Rp{Number(product.price).toLocaleString('id-ID')}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
