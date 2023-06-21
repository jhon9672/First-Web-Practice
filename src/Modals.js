// Firebase Auth
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"
import {auth} from './firebase'
// Bootstrap
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Modals() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleAccept = async (e) => {
        console.log('Usuario:', usuario);
        console.log('Contraseña:', contrasena);
        try {
            const userCrendential = await createUserWithEmailAndPassword(auth, usuario,contrasena);
            console.log(userCrendential);
            alert("Cuenta Registrada");
        } catch (error) {
            console.log(error);
            alert("Error");
        }
      };

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
                <input type="email" 
                class="form-control rounded-pill bg-black text-white" 
                placeholder="Email..."
                onChange={event => setUsuario(event.target.value)}
                ></input>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-9">
                <input type="password" 
                class="form-control rounded-pill bg-black text-white" 
                placeholder="Usuario"
                onChange={event => setContrasena(event.target.value)}></input>
                </div>
            </div>

           

            {/* ------------------------------------------- */}
            <Modal.Body class='text-center'>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={handleAccept} style={{ margin: '1%'}}>
                    accept
                </Button>
            </Modal.Body>
        </Modal>
    </div>
  );
}

export default Modals;