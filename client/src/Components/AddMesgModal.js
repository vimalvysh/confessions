import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

// import add message action
import { addMesg } from "../redux/actions/confMesgAction";

class AddMesgModal extends Component {
  state = {
    modal: false,
    message: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newMessage = {
      //   id: uuid(),
      mesg: this.state.message
    };
    // add message via addMesg action
    this.props.addMesg(newMessage);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button variant="outline-info" onClick={this.toggle}>
          Add Confession
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="message">Confession Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Add Confession message"
                  onChange={this.onChange}
                ></Input>
                <Button color="primary" className="mt-2">
                  Add Confession
                </Button>{" "}
                <Button
                  color="secondary"
                  className="mt-2"
                  onClick={this.toggle}
                >
                  Cancel
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  confMesg: state.messages
});

export default connect(mapStateToProps, { addMesg })(AddMesgModal);
