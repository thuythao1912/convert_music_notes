import { useState } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";

const HomePage = () => {
  const [status, setStatus] = useState("high");
  const [numStatus, setNumStatus] = useState(0);
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleNumStatus = (e) => {
    if (e.target.value > 8 || e.target.value < 0) {
      alert("Vui lòng nhập số từ 0 đến 8");
      setNumStatus(0);
    } else {
      setNumStatus(e.target.value);
    }
  };
  return (
    <div className="container">
      <div className="input-group mb-3">
        <select className="form-select form-select-sm" onChange={handleStatus}>
          <option value="high">Nâng tông</option>
          <option value="low">Hạ tông</option>
        </select>
        <input
          type="number"
          className="form-control"
          placeholder="Nhập số tông. VD: Đô -> Mi = 3"
          onChange={handleNumStatus}
          value={numStatus}
        />
      </div>
      <span className="text-muted small">*Nhập số tông. VD: Đô - Mi = 3</span>
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
      <Row className="">
        <Col className="text-center">
          <Card border="primary" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Fa</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <img
            src="https://lh3.googleusercontent.com/proxy/iSBgDX7AYg4_mG9uC-oAJDyvuU28K6DQ3t748SZ_VyA1ng3JBdhgDPiMAoFIMA5EWIpJjOClHzXKmBP1WyyMBLfA68rIgVI"
            width="70%"
            className="rounded-circle"
          />
        </Col>
        <Col className="text-center">
          <Card border="success" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Sol</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
