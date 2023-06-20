import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';



function Modals() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div class='bg-red'>
        <Button variant="primary" onClick={handleShow}>
        SignOn
      </Button>

      <Modal  show={show} onHide={handleClose} >

            <Modal.Dialog closeButton >
                <Modal.Title>Login</Modal.Title>
            </Modal.Dialog>

            <div class="row justify-content-center">
                <div class="col-9">
                <input type="text" class="form-control rounded-pill bg-black text-white" placeholder="USUARIO"></input>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-9">
                <input type="text" class="form-control rounded-pill bg-black text-white" placeholder="USUARIO"></input>
                </div>
            </div>

           

            {/* ------------------------------------------- */}
            <Modal.Body class='text-center'>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={handleClose} style={{ margin: '1%'}}>
                    accept
                </Button>
            </Modal.Body>
        </Modal>
    </div>
  );
}

export default Modals;