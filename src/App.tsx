import { useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Page from "./components/Page/Page";
import Form from "./components/Form/Form";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Page>
        <Header>
          <Header.Title>Brand</Header.Title>
          <Header.Link to="/a">First link</Header.Link>
          <Header.Link to="/b">Second link</Header.Link>
        </Header>
        <Card>
          <Card.Header>Card Heading</Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            placeat deserunt cupiditate quos eos possimus amet magnam saepe
            accusamus quas eius, tempore repellat atque dicta quidem alias in
            adipisci! Enim!
          </Card.Body>
        </Card>
        <Modal open={isModalOpen}>
          <Modal.Header>Modal Heading</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            placeat deserunt cupiditate quos eos possimus amet magnam saepe
            accusamus quas eius, tempore repellat atque dicta quidem alias in
            adipisci! Enim!
          </Modal.Body>
        </Modal>
        <Button variant="primary" onClick={() => setIsModalOpen(!isModalOpen)}>
          Click to open Modal
        </Button>
        <Button variant="secondary">Click</Button>
        <Form>
          <Form.Label>Name</Form.Label>
          <Form.Input />
          <Form.Label>Email</Form.Label>
          <Form.Input />
        </Form>
        <Footer />
      </Page>
    </>
  );
}

export default App;
