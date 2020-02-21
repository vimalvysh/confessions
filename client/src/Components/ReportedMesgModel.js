import React, { Component } from "react";
import { connect } from "react-redux";

import { addReportComment } from "../redux/actions/confMesgAction";

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

class ReportedMesgModal extends Component {
  state = {
    modal: false,
    reportSuccess: false,
    comment: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleReportSuccess = () => {
    this.setState({
      reportSuccess: !this.state.reportSuccess
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let id = this.props.id;
    let { comments } = this.props;
    let comment = { comments: comments, comment: this.state.comment };
    console.log(comment);
    // updated the reaported message
    this.props.addReportComment(id, comment);

    this.toggle();
    this.toggleReportSuccess();
  };
  render() {
    return (
      <div>
        {/* <Button variant="outline-info" onClick={this.toggle}>
          Add Confession
        </Button> */}
        <span onClick={this.toggle}>
          <font size="2">Report</font>
        </span>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>WHY .. ?</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="message">Please Tell Us .. !</Label>
                <Input
                  type="textarea"
                  name="comment"
                  id="comment"
                  placeholder="Please give us comment"
                  onChange={this.onChange}
                  required
                ></Input>
                <Button color="primary" className="mt-2">
                  Report
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
        <Modal
          isOpen={this.state.reportSuccess}
          toggle={this.toggleReportSuccess}
        >
          <ModalHeader toggle={this.toggleReportSuccess}>
            Confession has been Reported ..
          </ModalHeader>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  confMesg: state.messages
});

export default connect(mapStateToProps, { addReportComment })(
  ReportedMesgModal
);
