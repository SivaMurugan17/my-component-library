import { useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Page from "./components/Page/Page";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header>
        <Header.Link>Home</Header.Link>
        <Header.Link>About</Header.Link>
        <Header.Link>Contact</Header.Link>
        <Header.Link>Profile</Header.Link>
      </Header>
      <Page>
        <Page.Content>
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
          <Button
            variant="primary"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            Click to open Modal
          </Button>
          <Button variant="secondary">Click</Button>
        </Page.Content>
        <Page.Sidebar>
          <Form>
            <Form.Header>Login</Form.Header>
            <Form.Label>Name</Form.Label>
            <Form.Input />
            <Form.Label>Email</Form.Label>
            <Form.Input />
            <Button variant="primary">Submit</Button>
          </Form>
        </Page.Sidebar>
      </Page>
      <Footer />
    </>
  );
}

export default App;
