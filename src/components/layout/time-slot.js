import React, { Component } from "react";
// import CellText from "./cellText";

class Timeslot extends Component {
    cellClick = () => {
        alert("Cell clicked, Time is "+this.props.cellText)
    }
    render() {
        const { backgroundColor, cellText, textColor } = this.props
        // console.log(this.props)
        return (
            <div
                style={{
                    minWidth: "120px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor,
                    color: textColor,
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#000",
                    flex: 1
                }}
                onClick={this.cellClick}
            >
                <p style={{ textAlign: "center", color: textColor }}>{cellText}</p>
          </div>
        )
    }
};

export default Timeslot;