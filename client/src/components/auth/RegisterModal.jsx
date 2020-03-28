import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from "reactstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  const [form, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [localMsg, setLocalMsg] = useState("");

  const { isAuthenticated } = useSelector(state => state.auth);
  const { id, msg } = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (id && id === "REGISTER_FAIL") {
        setLocalMsg(msg.msg);
      } else {
        setLocalMsg(null);
      }

      if (modal) {
        if (isAuthenticated) {
          handleToggle();
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [msg.msg]);

  const handleToggle = () => {
    dispatch(clearErrors());
    setModal(!modal);
  };

  const onChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = form;
    const newUser = { name, email, password };
    dispatch(register(newUser));
  };

  return (
    <div>
      <NavLink onClick={handleToggle} href="#">
        Register
      </NavLink>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Register</ModalHeader>
        <ModalBody>
          {localMsg ? <Alert color="danger">{localMsg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={onChange}
              />

              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={onChange}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={onChange}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RegisterModal;
