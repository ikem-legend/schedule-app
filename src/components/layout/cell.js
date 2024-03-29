import React, { Component } from "react";
// import CellText from "./cellText";

// export default ({ backgroundColor = "#595f68", cellText, textColor="#000" }) => (
class Cell extends Component {
    cellClick = () => {
        const { cellText } = this.props
        console.log("Cell clicked: ", cellText)
    }
    render() {
        const { backgroundColor = "#595f68", cellText, textColor, onCellSelect } = this.props
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
                onClick={onCellSelect}
            >
                <p style={{ textAlign: "center", color: textColor }}>{cellText}</p>
          </div>
        )
    }
};
// )

export default Cell;