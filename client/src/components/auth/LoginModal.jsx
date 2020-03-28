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
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

const LoginModal = () => {
  const [modal, setModal] = useState(false);
  const [localMsg, setLocalMsg] = useState("");
  const [form, setValues] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector(state => state.auth);
  const { id, msg } = useSelector(state => state.error);
  // useSelector는 결과값만 가져온다. object는 가져오지 못하기에 가져올것만 딱 찝어서 가져와야 한다

  useEffect(() => {
    try {
      if (id && id === "LOGIN_FAIL") {
        setLocalMsg(msg.msg);
      } else {
        setLocalMsg(null);
      }

      // If authenticated, close modal
      if (modal) {
        if (isAuthenticated) {
          handleToggle();
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [msg.msg]);
  // componentDidMount와 같이 할려면 []안에 검사하고 싶은 값을 넣으면 된다.

  const handleToggle = () => {
    // Clear errors
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
    const { email, password } = form;
    const user = { email, password };
    dispatch(login(user));
  };

  return (
    <div>
      <NavLink onClick={handleToggle} href="#">
        Login
      </NavLink>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Login</ModalHeader>
        <ModalBody>
          {localMsg ? <Alert color="danger">{localMsg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
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
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
