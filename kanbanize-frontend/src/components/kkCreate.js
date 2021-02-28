import React, { Component } from "react";
import { connect } from "react-redux";
import KKForm from "./kkForm";
import KKButton from "./kkButton";
import KKAddNewButton from "./kkAddNewButton";
import { addList, addCard } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div`
  border-radius: 3px;
  width: 300px;
  height: 100%;
  margin-right: 8px;
`;

class KKCreate extends Component {
  state = {
    formOpen: false,
    text: "",
  };

  openForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = (e) => {
    this.setState({ formOpen: false, text: "" });
  };

  handleListInputChange = (e) => {
    if (e.target.value.length <= 20) this.setState({ text: e.target.value });
  };
  handleCardInputChange = (e) => {
    if (e.target.value.length <= 150) this.setState({ text: e.target.value });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({ text: "" });
      dispatch(addList(text));
    }
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({ text: "" });
      dispatch(addCard(listID, text));
    }
  };

  render() {
    const { text, formOpen } = this.state;
    const { list } = this.props;

    if (list) {
      if (formOpen)
        return (
          <ListContainer>
            <KKForm
              text={text}
              onChange={this.handleListInputChange}
              closeForm={this.closeForm}
            >
              <KKButton text="Add List" onClick={this.handleAddList}></KKButton>
            </KKForm>
          </ListContainer>
        );
      else
        return (
          <ListContainer>
            <KKAddNewButton list={list} onClick={this.openForm} />
          </ListContainer>
        );
    } else {
      if (formOpen)
        return (
          <KKForm
            text={text}
            onChange={this.handleCardInputChange}
            closeForm={this.closeForm}
          >
            <KKButton text="Add Card" onClick={this.handleAddCard}></KKButton>
          </KKForm>
        );
      else return <KKAddNewButton list={list} onClick={this.openForm} />;
    }
  }
}

export default connect()(KKCreate);
