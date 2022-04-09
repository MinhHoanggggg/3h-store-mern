import MiniBanner from '../components/layout/MiniBanner'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import {CartContext} from '../contexts/CartContext';
import { useContext, useEffect  } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../contexts/AuthContext';
import CartItem from '../components/layout/Cart/CartItem'

const Cart = () => {
    
    const {
		cartState: { cartsLoading, carts, cartTotal},
        getCarts
	} = useContext(CartContext)

	const {
		authState: {
			user: { _id }
		},
	} = useContext(AuthContext)

    //get cart 
    useEffect(() => getCarts(_id), [_id]);

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
                <h2 className='mt-4 h2 text-left'>Giỏ hàng</h2>
                <div className="wrapper">
                    <Table className="cart-table full table--responsive">
                        <thead className="cart__row cart__header-labels">
                            <tr>
                                <th colspan="2" className="text-center">Thông tin chi tiết sản phẩm</th>
                                <th className="text-center">Đơn giá</th>
                                <th className="text-center">Tổng giá</th>
                                <th className="text-center">Số lượng</th>
                                <th className="text-left">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>

                            {carts.map(cart => (
                                <CartItem cart={cart} />
                            ))}

                        </tbody>
                    </Table>

                    <div className="cart__row">
                        <div className="grid__item text-right one-third small--one-whole">
                            <p>
                                <span className="cart__subtotal-title h4">Tổng tiền </span>
                                <span className="cart__subtotal h3">{cartTotal}</span>
                            </p>
                                <button class="btn btn-outline-success m-2">Cập nhật</button>
                                <button type="submit" class="btn btn-outline-success">Thanh toán</button>
                        </div>
                    </div>
                </div>
            </Container>

        </>

        
    )

    return (
		<>
        <div className='landing-inner bg-white'>
			{body}
		</div>
        </>
	)
    
}

export default Cart