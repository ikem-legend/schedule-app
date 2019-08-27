import React, { Component } from "react";
// import CellText from "./cellText";

class Header extends Component {
    cellClick = () => {
        alert("Cell clicked, Day is "+this.props.cellText)
    }
    render() {
        const { backgroundColor = "#595f68", cellText, textColor="#000" } = this.props
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

export default Header;