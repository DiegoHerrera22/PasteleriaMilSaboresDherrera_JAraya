import { Button, Card } from "react-bootstrap";
import { formatPrice } from "../utils/formatters";


function ProductCard({ nombre, precio, descripcion, img, action=undefined, actionName="Ver" }) {

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={img} alt={`Imagen producto ${nombre}`} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{formatPrice(precio)}</Card.Subtitle>
        <Card.Text className="d-flex flex-grow-1">
          {descripcion}
        </Card.Text>
        {action && (<Button variant="primary" onClick={action}>
          {actionName}
        </Button>)}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;