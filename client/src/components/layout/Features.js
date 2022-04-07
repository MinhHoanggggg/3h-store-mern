import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import suit1 from '../../assets/img/Suit1.webp';
import suit2 from '../../assets/img/Suit2.webp';
import suit3 from '../../assets/img/Suit3.webp';
import suit4 from '../../assets/img/Suit4.webp';


const Features = () => {
    return (
        <>
            <div  className="col-sm">
            <Card>
            <Card.Img variant="top" src={suit1} />
            </Card>
            </div>

            <div  className="col-sm">
            <Card>
            <Card.Img variant="top" src={suit2} />
            </Card>
            </div>

            <div  className="col-sm">
            <Card>
            <Card.Img variant="top" src={suit3} />
            </Card>
            </div>
            
            <div  className="col-sm">
            <Card>
            <Card.Img variant="top" src={suit4} />
            </Card>
            </div>
        </>
    )
        
}

export default Features;