import React from "react";
import "./test.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      confessionMessage: ""
    };
    this.handleFormMesgChange = this.handleFormMesgChange.bind(this);
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
    return (
      <div className="row mt-4 ml-2">
        <div className="col-md-6 ">
          {!this.state.show && (
            <Button variant="outline-info" onClick={() => this.setShow(true)}>
              Add Confession
            </Button>
          )}
          <>
            <Alert show={this.state.show} variant="warning">
              <Alert.Heading>It's Confession Time.. !</Alert.Heading>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Cras mattis consectetur purus
                sit amet fermentum.
              </p>

              <form>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">
                    Confession Message .. !
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="confessionMessage"
                    value={this.state.confessionMessage}
                    rows="3"
                    onChange={this.handleFormMesgChange}
                  ></textarea>
                  <buttom
                    type="submit"
                    className="btn btn-outline-success  mt-2"
                  >
                    ADD
                  </buttom>
                  &nbsp;
                  <buttom
                    type="submit"
                    className="btn btn-outline-success  mt-2"
                    onClick={() => this.setShow(false)}
                  >
                    Close
                  </buttom>
                </div>
              </form>
              <hr />
            </Alert>
          </>
        </div>
      </div>
    );
  }
}

// ### Functional Component

// export default function Test() {
//   // Declare a new state variable, which we'll call "count"
//   const [show, setShow] = useState(false);
//   const [confessionMessage, setMessage] = useState();

//   function handleFormMesgChange(e) {
//     setMessage(e.target.value);
//   }

//   return (
//     <div className="row mt-4 ml-2">
//       <div className="col-md-6 ">
//         {!show && (
//           <Button variant="outline-info" onClick={() => setShow(true)}>
//             Add Confession
//           </Button>
//         )}
//         <>
//           <Alert show={show} variant="warning">
//             <Alert.Heading>It's Confession Time.. !</Alert.Heading>
//             <p>
//               Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
//               eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
//               amet fermentum.
//             </p>

//             <form>
//               <div className="form-group">
//                 <label for="exampleFormControlTextarea1">
//                   Confession Message .. !
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="exampleFormControlTextarea1"
//                   name="confessionMessage"
//                   value={confessionMessage}
//                   rows="3"
//                   onChange={handleFormMesgChange}
//                 ></textarea>
//                 <buttom type="submit" className="btn btn-outline-success  mt-2">
//                   ADD
//                 </buttom>
//                 &nbsp;
//                 <buttom
//                   type="submit"
//                   className="btn btn-outline-success  mt-2"
//                   onClick={() => setShow(false)}
//                 >
//                   Close
//                 </buttom>
//               </div>
//             </form>
//             <hr />
//           </Alert>
//         </>
//       </div>
//     </div>
//   );
// }
