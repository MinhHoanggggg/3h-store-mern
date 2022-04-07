import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react'
import { BsFillCartFill } from "react-icons/bs";

const NavbarMenu = () => {
	const {
		authState: {
			user: { username }
		},
		logoutUser
	} = useContext(AuthContext)

	const logout = () => logoutUser();

	// return (
	// 	<>
	// 		<Navbar bg="dark" variant="dark">
	// 			<Container>
	// 			{/* <Navbar.Brand href="/">3H STORE</Navbar.Brand> */}

	// 			<Nav className="me-auto">
	// 			<Nav.Link href="/">Quản lí tài khoản</Nav.Link>
	// 			<Nav.Link href="/">Quản lí loại sản phẩm</Nav.Link>
	// 			<Nav.Link href="/">Quản lí sản phẩm</Nav.Link>
	// 			<Nav.Link href="/">Quản lí đơn hàng</Nav.Link>
	// 			</Nav>
				
	// 			<NavDropdown title={username} id="basic-nav-dropdown">
	// 			<NavDropdown.Item href="/">Đổi mật khẩu</NavDropdown.Item>
	// 			<NavDropdown.Item href="/">Something</NavDropdown.Item>
	// 			<NavDropdown.Item href="/">Something</NavDropdown.Item>
	// 			<NavDropdown.Divider />
	// 			<NavDropdown.Item href="/logout">Đăng xuất</NavDropdown.Item>
	// 			</NavDropdown>
	// 			</Container>
	// 		</Navbar>
	// 	</>
	// )
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="/">3H STORE</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll >
						<Nav.Link href="/introduce">Giới thiệu</Nav.Link>
						<Nav.Link href="/lookbook">LookBook</Nav.Link>
						<Nav.Link href="/lookbook">Bảo hành</Nav.Link>
						<Nav.Link href="/lookbook">Tư vấn</Nav.Link>
						<NavDropdown title="Sản phẩm" id="navbarScrollingDropdown">
						<NavDropdown.Item href="/listproduct">Áo thun</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Áo polo</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Vest nam</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Áo sơ mi nam</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Quần âu nam</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Giày da nam</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Thắt lưng nam</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Áo khoác</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Áo da</NavDropdown.Item>
						<NavDropdown.Item href="/listproduct">Áo len</NavDropdown.Item>
						</NavDropdown>
						
						<Form className="d-flex">
						<FormControl
						type="search"
						placeholder="Tìm kiếm"
						className="me-2"
						aria-label="Tìm kiếm"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>	
					</Nav>

					<NavDropdown title={username} id="navbarScrollingDropdown">
						<NavDropdown.Item href="/listproduct">Quản lí tài khoản</NavDropdown.Item>
						<NavDropdown.Item href="#action4">Đổi mật khẩu</NavDropdown.Item>
						<NavDropdown.Item href="#action5">
							Something else
						</NavDropdown.Item>
						<NavDropdown.Item href="#action5">
							Something else
						</NavDropdown.Item>

						<Dropdown.Divider />

						<NavDropdown.Item onClick={logout}>
							Đăng xuất
						</NavDropdown.Item>

					</NavDropdown>	

					<Nav>
						<Nav.Link href="/cart">
						<BsFillCartFill size={25}/>
							<span >
								(1)
							</span>
						</Nav.Link>
					</Nav>
					
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default NavbarMenu