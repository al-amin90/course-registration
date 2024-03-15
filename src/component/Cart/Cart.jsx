import { remainCredit } from "../../App";


const Cart = ({ carts, handleRemoveCart }) => {
    const creditTotal = carts.reduce((p, c) => p + c.credit, 0);

    return (
        <div className="p-4 bg-white rounded-lg">
            <h2 className="text-base pb-4 border-b border-[#1C1B1B33] font-bold text-[#2F80ED]">Credit Hour Remaining {remainCredit - creditTotal} hr</h2>
            <h2 className="text-xl mt-4 mb-5 font-bold text-[#1C1B1B]">Course Name</h2>
            <ol className='text-sm font-normal pb-5 border-b border-[#1C1B1B33]'>
                {
                    carts.map((cart, idx) => <div>
                        <li key={idx} >{idx + 1}. {cart.title}</li>
                        <button 
                                onClick={() => handleRemoveCart(cart.id)}
                                className="btn btn-xs btn-secondary">Delete</button>
                    </div>
                    )
                }
            </ol>
            <p className='text-base py-4 border-b border-[#1C1B1B33] font-medium'>Total Credit Hour : {creditTotal}</p>
            <p className='text-base pt-4 font-semibold'>Total Price : {carts.reduce((p, c) => p + c.price , 0)} USD</p>
        </div>
    );
};

export default Cart;