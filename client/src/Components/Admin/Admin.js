import React from "react";
import "../../App.css";
import { connect } from "react-redux";

import { getMesgs, delMesg } from "../../redux/actions/confMesgAction";

import PropTypes from "prop-types";

import TopNavBar from "../TopNavBar";

import AddMesgModal from "../AddMesgModal";
import ReportMesgModal from "../ReportedMesgModel";

var confssionMessag;

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      confessionMessage: "",
      searchMesg: ""
    };
    this.handleFormMesgChange = this.handleFormMesgChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getMesgs();
  }

  handleFormMesgChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  setShow(val) {
    this.setState({
      show: val
    });
  }

  render() {
    const { confMesgs } = this.props.confMesg;
    const { searchMesg } = this.state;
    // console.log(confMesgs);

    // if searche, then map and check the index of the mesg, assign to searchMsg.
    let searchMsg = confMesgs.map(mesg => {
      if (
        searchMesg !== "" &&
        mesg.mesg.toLowerCase().indexOf(searchMesg) === -1
      ) {
        // if search matches then make " to that array.
        return "";
      }
      // if no search display full Array.
      return mesg;
    });

    // filter and map with searched array.
    confssionMessag = searchMsg
      .filter(
        message => message.status === "active" || message.status === "reported"
      )
      .map(({ _id, mesg, comment }) => (
        <p>
          <div class="alert alert-light" role="alert">
            <div className="row">
              <div className="col-md-10">{mesg}</div>
              <div className="col-md-1 text-right">
                {/* <span onClick={() => alert("Report")}>
                  <font size="2">Report</font>
                </span> */}
                <ReportMesgModal id={_id} comments={comment}></ReportMesgModal>
                &nbsp;
              </div>
              <div
                className="col-md-1 text-right"
                onClick={() => this.props.delMesg(_id)}
              >
                <i class="fas fa-trash"></i>
              </div>
            </div>
          </div>
        </p>
      ));

    return (
      <div>
        <TopNavBar from={"admin"}></TopNavBar>
      </div>
    );
  }
}

Admin.prototypes = {
  getMesgs: PropTypes.func.isRequired,
  addMesg: PropTypes.func.isRequired,
  delMesg: PropTypes.func.isRequired,
  confMesg: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  confMesg: state.messages
});

export default connect(mapStateToProps, { getMesgs, delMesg })(Admin);
// export default Index;
