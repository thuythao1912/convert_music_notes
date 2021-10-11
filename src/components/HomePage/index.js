import { useState } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";

const HomePage = () => {
  const [status, setStatus] = useState("high");
  const [numStatus, setNumStatus] = useState(0);
  const [currentNote, setCurrentNote] = useState([1, 0]); //1: C -> 7:B - 0:đồ 1: đô 2:đố
  const [convertedNote, setConvertedNote] = useState([1, 0]); //1: C -> 7:B - 0:đồ 1: đô 2:đố

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
  const handleCurrentNote = (noteName, status) => {
    setCurrentNote([noteName, status]);
    handleConvertNote(noteName, status);
  };
  const handleConvertNote = (note, state) => {
    let convertNote = 1;
    let resultNote = note;
    let resultStatus = state;

    let upperStatus = false;
    let lowerStatus = false;

    if (status == "high") {
      // console.log("currentNote", note);
      // console.log("status", state);
      // console.log("numStatus", numStatus);
      resultNote = note * 1 + numStatus * 1 - 1;
      if (resultNote >= 8) {
        resultNote = resultNote - 7;
        state++;
        state > 2 ? (resultStatus = state - 1) : (resultStatus = state++);
      }
    }
    // console.log("resultNote", resultNote);
    // console.log("resultStatus", resultStatus);
    setConvertedNote([resultNote, resultStatus]);
  };
  const translateNote = (note) => {
    let name = "";
    switch (note[0]) {
      case 1:
        switch (note[1]) {
          case 0:
            name = "Đồ";
            break;
          case 1:
            name = "Đô";
            break;
          case 2:
            name = "Đố";
            break;
        }
        break;
      case 2:
        switch (note[1]) {
          case 0:
            name = "Rề";
            break;
          case 1:
            name = "Rê";
            break;
          case 2:
            name = "Rế";
            break;
        }
        break;
      case 3:
        switch (note[1]) {
          case 0:
            name = "Mì";
            break;
          case 1:
            name = "Mi";
            break;
          case 2:
            name = "Mí";
            break;
        }
        break;
      case 4:
        switch (note[1]) {
          case 0:
            name = "Fà";
            break;
          case 1:
            name = "Fa";
            break;
          case 2:
            name = "Fá";
            break;
        }
        break;
      case 5:
        switch (note[1]) {
          case 0:
            name = "Sòl";
            break;
          case 1:
            name = "Sol";
            break;
          case 2:
            name = "Sól";
            break;
        }
        break;
      case 6:
        switch (note[1]) {
          case 0:
            name = "Là";
            break;
          case 1:
            name = "La";
            break;
          case 2:
            name = "Lá";
            break;
        }
        break;
      case 7:
        switch (note[1]) {
          case 0:
            name = "Sì";
            break;
          case 1:
            name = "Si";
            break;
          case 2:
            name = "Sí";
            break;
        }
        break;
    }
    return name;
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
          <Button
            as={Col}
            variant="outline-primary"
            onClick={() => handleCurrentNote(1, 0)}
          >
            Đồ
          </Button>
          <Button
            as={Col}
            variant="primary"
            className="mx-2"
            onClick={() => handleCurrentNote(1, 1)}
          >
            Đô (C)
          </Button>
          <Button
            as={Col}
            variant="outline-primary"
            className=""
            onClick={() => handleCurrentNote(1, 2)}
          >
            Đố
          </Button>
        </Row>
      </div>
      <div className="my-3">
        <Row className="mx-0">
          <Button
            as={Col}
            variant="outline-secondary"
            onClick={() => handleCurrentNote(2, 0)}
          >
            Rề
          </Button>
          <Button
            as={Col}
            variant="secondary"
            className="mx-2"
            onClick={() => handleCurrentNote(2, 1)}
          >
            Rê (D)
          </Button>
          <Button
            as={Col}
            variant="outline-secondary"
            className=""
            onClick={() => handleCurrentNote(2, 2)}
          >
            Rế
          </Button>
        </Row>
      </div>
      <div className="my-3">
        <Row className="mx-0">
          <Button
            as={Col}
            variant="outline-success"
            onClick={() => handleCurrentNote(3, 0)}
          >
            Mì
          </Button>
          <Button
            as={Col}
            variant="success"
            className="mx-2"
            onClick={() => handleCurrentNote(3, 1)}
          >
            Mi (E)
          </Button>
          <Button
            as={Col}
            variant="outline-success"
            className=""
            onClick={() => handleCurrentNote(3, 2)}
          >
            Mí
          </Button>
        </Row>
      </div>
      <div className="my-3">
        <Row className="mx-0">
          <Button
            as={Col}
            variant="outline-warning"
            onClick={() => handleCurrentNote(4, 0)}
          >
            Fà
          </Button>
          <Button
            as={Col}
            variant="warning"
            className="mx-2"
            onClick={() => handleCurrentNote(4, 1)}
          >
            Fa (F)
          </Button>
          <Button
            as={Col}
            variant="outline-warning"
            className=""
            onClick={() => handleCurrentNote(4, 2)}
          >
            Fá
          </Button>
        </Row>
      </div>
      <div className="my-3">
        <Row className="mx-0">
          <Button
            as={Col}
            variant="outline-danger"
            onClick={() => handleCurrentNote(5, 0)}
          >
            Sòl
          </Button>
          <Button
            as={Col}
            variant="danger"
            className="mx-2"
            onClick={() => handleCurrentNote(5, 1)}
          >
            Sol (G)
          </Button>
          <Button
            as={Col}
            variant="outline-danger"
            className=""
            onClick={() => handleCurrentNote(5, 2)}
          >
            Sól
          </Button>
        </Row>
      </div>
      <div className="my-3">
        <Row className="mx-0">
          <Button
            as={Col}
            variant="outline-info"
            onClick={() => handleCurrentNote(6, 0)}
          >
            Là
          </Button>
          <Button
            as={Col}
            variant="info"
            className="mx-2"
            onClick={() => handleCurrentNote(6, 1)}
          >
            La (A)
          </Button>
          <Button
            as={Col}
            variant="outline-info"
            className=""
            onClick={() => handleCurrentNote(6, 2)}
          >
            Lá
          </Button>
        </Row>
      </div>
      <div className="my-3">
        <Row className="mx-0">
          <Button
            as={Col}
            variant="outline-dark"
            onClick={() => handleCurrentNote(7, 0)}
          >
            Sì
          </Button>
          <Button
            as={Col}
            variant="dark"
            className="mx-2"
            onClick={() => handleCurrentNote(7, 1)}
          >
            Si (B)
          </Button>
          <Button
            as={Col}
            variant="outline-dark"
            className=""
            onClick={() => handleCurrentNote(7, 2)}
          >
            Sí
          </Button>
        </Row>
      </div>
      <Row className="">
        <Col className="text-center">
          <Card border="primary" style={{ width: "80%" }}>
            <Card.Body>
              <Card.Title>{translateNote(currentNote)}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <img
            src="https://lh3.googleusercontent.com/proxy/iSBgDX7AYg4_mG9uC-oAJDyvuU28K6DQ3t748SZ_VyA1ng3JBdhgDPiMAoFIMA5EWIpJjOClHzXKmBP1WyyMBLfA68rIgVI"
            width="50%"
            className="rounded-circle"
          />
        </Col>
        <Col className="text-center">
          <Card border="success" style={{ width: "80%" }}>
            <Card.Body>
              <Card.Title>{translateNote(convertedNote)}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
