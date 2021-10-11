import { Button, Col, Row, Card } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="container">
      <div className="input-group mb-3">
        <select className="form-select form-select-sm">
          <option>Nâng tông</option>
          <option>Hạ tông</option>
        </select>
        <input
          type="number"
          className="form-control"
          aria-label="Text input with dropdown button"
        />
      </div>

      <div className="my-3">
        <Row className="mx-0">
          <Button as={Col} variant="outline-primary">
            Đồ
          </Button>
          <Button as={Col} variant="primary" className="mx-2">
            Đô (C)
          </Button>
          <Button as={Col} variant="outline-primary" className="">
            Đố
          </Button>
        </Row>
      </div>
      <div className="my-3">
        <Row className="mx-0">
          <Button as={Col} variant="outline-secondary">
            Rề
          </Button>
          <Button as={Col} variant="secondary" className="mx-2">
            Rê (D)
          </Button>
          <Button as={Col} variant="outline-secondary" className="">
            Rế
          </Button>
        </Row>
      </div>
      <div className="my-3">
        <Row className="mx-0">
          <Button as={Col} variant="outline-success">
            Mì
          </Button>
          <Button as={Col} variant="success" className="mx-2">
            Mi (E)
          </Button>
          <Button as={Col} variant="outline-success" className="">
            Mí
          </Button>
        </Row>
      </div>
      <div className="my-3">
        <Row className="mx-0">
          <Button as={Col} variant="outline-warning">
            Fà
          </Button>
          <Button as={Col} variant="warning" className="mx-2">
            Fa (F)
          </Button>
          <Button as={Col} variant="outline-warning" className="">
            Fá
          </Button>
        </Row>
      </div>
      <div className="my-3">
        <Row className="mx-0">
          <Button as={Col} variant="outline-danger">
            Sòl
          </Button>
          <Button as={Col} variant="danger" className="mx-2">
            Sol (G)
          </Button>
          <Button as={Col} variant="outline-danger" className="">
            Sól
          </Button>
        </Row>
      </div>
      <div className="my-3">
        <Row className="mx-0">
          <Button as={Col} variant="outline-info">
            Là
          </Button>
          <Button as={Col} variant="info" className="mx-2">
            La (A)
          </Button>
          <Button as={Col} variant="outline-info" className="">
            Lá
          </Button>
        </Row>
      </div>
      <div className="my-3">
        <Row className="mx-0">
          <Button as={Col} variant="outline-dark">
            Sì
          </Button>
          <Button as={Col} variant="dark" className="mx-2">
            Si (B)
          </Button>
          <Button as={Col} variant="outline-dark" className="">
            Sí
          </Button>
        </Row>
      </div>
      <div className="">
        <Card border="primary" style={{ width: "100%" }}>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
