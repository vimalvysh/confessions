import React from "react";
import "../App.css";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";

import { getMesgs, delMesg } from "../redux/actions/confMesgAction";

import PropTypes from "prop-types";

import TopNavBar from "./TopNavBar";

class ReportedMesg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      confessionMessage: ""
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getMesgs();
  }

  setShow(val) {
    this.setState({
      show: val
    });
  }

  render() {
    const { confMesgs } = this.props.confMesg;
    // var itemsArray = Array.from(confMesgs);
    let confssionMessag = confMesgs
      .filter(message => message.status === "reported")
      .map(({ _id, mesg, comment }) => (
        <p>
          <div class="alert alert-light" role="alert">
            <div className="row">
              <div className="col-md-10">
                <b>Confession : </b>
                {mesg}
              </div>
              <div className="col-md-1 text-right">
                {/* <span onClick={() => alert("Report")}>
                  <font size="2">Report</font>
                </span> */}
                &nbsp;
              </div>
              <div
                className="col-md-1 text-right"
                onClick={() => this.props.delMesg(_id)}
              >
                <i class="fas fa-trash"></i>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <b>Comment's : </b>
                {comment}
              </div>
            </div>
          </div>
        </p>
      ));

    return (
      <div>
        <TopNavBar from={"admin"} active={"reportedMesg"}></TopNavBar>
        <div className="container-fluid">
          <div className="row mt-2">
            {/* <div className="col-md-4 ">
          <AddMesgModal></AddMesgModal>
        </div> */}
            <div className="col-md-12 pr-4 confMesgs">
              <Alert variant="warning">
                <Alert.Heading>Reported Message's .. !</Alert.Heading>
                {confssionMessag}
              </Alert>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReportedMesg.prototypes = {
  getMesgs: PropTypes.func.isRequired,
  addMesg: PropTypes.func.isRequired,
  delMesg: PropTypes.func.isRequired,
  confMesg: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  confMesg: state.messages
});

export default connect(mapStateToProps, { getMesgs, delMesg })(ReportedMesg);
// export default Index;
