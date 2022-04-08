import { BsFillTrashFill } from "react-icons/bs";

function sumPrice(price, qty) {
    return price * qty;
}

const CartItem = ({ cart: { _id, idUser, qty, productName, img, price } }) => (

                    <tr className="">
                        <td data-label="Sản phẩm">
                        <img width={120} height={170} src={img} >
                            </img>
                                </td>
                                    <td>
                                        <div className="h4">{productName}</div>

                                        <span className="h5">48</span>
                                    </td>
                                    <td data-label="Đơn giá">
                                        <span className="h4">
								            {price}₫
							            </span>
                                    </td>
                                    <td data-label="Số lượng">
                                        <div className="js-qty">
                                            <button type="button" className="js-qty__adjust js-qty__adjust--minus icon-fallback-text" data-id="" data-qty="0">
                                                <span className="fallback-text" aria-hidden="true">−</span>
                                            </button>
                                            
                                                <input type="text" class="js-qty__num" value={qty} min="1" data-id="" aria-label="quantity" pattern="[0-9]*" name="updates[]" id="updates_" />
                                            <button type="button" class="js-qty__adjust js-qty__adjust--plus icon-fallback-text" data-id="" data-qty="11">
                                                <span className="fallback-text" aria-hidden="true">+</span>
                                            </button>
                                        </div>
                                    </td>
                                    <td data-label="Tổng giá" className="text-right ">
                                        <span className="h4">
                                            {sumPrice(price, qty)} ₫
								        </span>
                                    </td>
                                        <td className="text cart__remove">
                                            <a href="/" className="h4"><BsFillTrashFill size={20}/></a>
                                        </td>
                                    </tr>
                                    
)

export default CartItem