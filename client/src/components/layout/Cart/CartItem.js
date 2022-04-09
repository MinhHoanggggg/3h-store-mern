import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../../../contexts/CartContext";
import useContext from 'react'
import QtyAdjust from "./QtyAdjust"
import RemoveItem from "./RemoveItem"

function sumPrice(price, qty) {
    return price * qty;
}

const CartItem = ({ cart: { _id, idUser, qty, productName, img, price } }) => (


                        <tr className="">
                                <td data-label="Sản phẩm">
                                    <img 
                                        width={120} height={170} src={img} >
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
                                    
                                    <td data-label="Tổng giá">
                                        <span className="h4">
                                            {sumPrice(price, qty)} ₫
								        </span>
                                    </td>

                                    <td data-label="Số lượng">
                                        <QtyAdjust qty={qty} idItem={_id} />
                                    </td>

                                    <td className="text cart__remove">
                                        <RemoveItem idItem={_id}/>
                                    </td>
                            </tr>
                                    
)

export default CartItem