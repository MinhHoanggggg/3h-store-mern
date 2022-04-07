import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import look1 from '../../assets/img/look1.webp';
import look2 from '../../assets/img/look2.webp';
import look3 from '../../assets/img/look3.webp';
import look4 from '../../assets/img/look4.webp';


const Lookbook = () => {
    return (
        <>
            <div className="col-sm">
            <Card>
            <Card.Img width={270} height={270} variant="top" src={look1} />
            
            </Card>
            </div>

            <div className="col-sm">
            <Card>
            <Card.Img width={270} height={270} variant="top" src={look2} />
            </Card>
            </div>

            <div  className="col-sm">
            <Card>
            <Card.Img width={270} height={270} variant="top" src={look3} />
            
            </Card>
            </div>

            <div className="col-sm">
            <Card>
            <Card.Img width={270} height={270} variant="top" src={look4} />

            </Card>
            </div>

            
        </>
    )
        
}

export default Lookbook;