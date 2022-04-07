import MiniBanner from '../components/layout/MiniBanner'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import {CartContext} from '../contexts/CartContext';
import sp from '../assets/img/Suit1.webp'
import { BsFillTrashFill } from "react-icons/bs";
import { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../contexts/AuthContext';

const Cart = () => {
    const {
		cartState: { cartsLoading, carts}
	} = useContext(CartContext)

    const {
		authState: { isAuthenticated }
	} = useContext(AuthContext)


    let body;


    if(cartsLoading)
        body = (
            <div className='d-flex justify-content-center mt-2 spinner-container'>
                <Spinner animation='border' variant='info' />
            </div>
        )

    else

    body = (
        <>
            <MiniBanner />
            <Container>
                <h2 className='mt-3 h2'>Giỏ hàng</h2>
                <div className="wrapper">
                <Table className="cart-table full table--responsive">
                            <thead className="cart__row cart__header-labels">
                                <tr>
                                    <th colspan="2" className="text-center">Thông tin chi tiết sản phẩm</th>
                                    <th className="text-center">Đơn giá</th>
                                    <th className="text-center">Số lượng</th>
                                    <th className="text-right">Tổng giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr className="cart__row">
                                        <td data-label="Sản phẩm">
                                            <img width={150} height={200} src={sp} >
                                            
                                            </img>
                                        </td>
                                        <td>
                                            <div className="h4">Áo vest Xanh kẻ - AV283</div>

                                            <span className="h4">48</span>
                                        </td>
                                        <td data-label="Đơn giá">
                                            <span className="h3">
									            2,950,000₫
								            </span>
                                        </td>
                                        <td data-label="Số lượng">
                                            <div className="js-qty">
                                                <button type="button" className="js-qty__adjust js-qty__adjust--minus icon-fallback-text" data-id="" data-qty="0">
                                                    <span className="icon icon-minus" aria-hidden="true"></span>
                                                    <span className="fallback-text" aria-hidden="true">−</span>
                                                    <span className="visually-hidden">Giảm số lượng sản phẩm đi 1</span>
                                                </button>
                                                
                                                    <input type="text" class="js-qty__num" value="1" min="1" data-id="" aria-label="quantity" pattern="[0-9]*" name="updates[]" id="updates_" />
                                                <button type="button" class="js-qty__adjust js-qty__adjust--plus icon-fallback-text" data-id="" data-qty="11">
                                                    <span className="icon icon-plus" aria-hidden="true"></span>
                                                    <span className="fallback-text" aria-hidden="true">+</span>
                                                    <span className="visually-hidden">Tăng số lượng sản phẩm lên 1</span>
                                                </button>
                                            </div>
                                        </td>
                                        <td data-label="Tổng giá" className="text-right">
                                            <span className="h3">
									            2,950,000₫
								            </span>
                                        </td>
                                            <td className="text cart__remove">
                                                <a href="/" className="h4"><BsFillTrashFill size={20}/></a>
                                            </td>
                                        </tr>
                                </tbody>
                        </Table>
                </div>
            </Container>
        </>
    )

    return (
		<div className='landing-inner bg-white'>
			{body}
		</div>
	)
}

export default Cart