import { BsFillTrashFill } from "react-icons/bs";
import CartContext from "../../../contexts/CartContext"
import {useContext} from "react"
import Button from 'react-bootstrap/Button'

const RemoveItem = ({idItem}) => {

    return (
        <>
             <Button className="h4"><BsFillTrashFill size={20}/></Button>
        </>
    )
}

export default RemoveItem