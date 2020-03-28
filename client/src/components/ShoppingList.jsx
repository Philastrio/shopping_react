import React, { useEffect } from "react";
import { Container, Button, ListGroup, ListGroupItem } from "reactstrap";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { getItems, deleteItems } from "../redux/actions/itemsActions";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.item);
  const { isAuthenticated } = useSelector(state => state.auth);
  const onDeleteClick = id => {
    dispatch(deleteItems(id));
  };

  useEffect(() => {
    dispatch(getItems());
  }, [items.id]);

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                {isAuthenticated ? (
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                ) : null}

                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
