import React, { Component } from "react";

class CellText extends Component {
	state = {
		owner: "Sample",
		color: "#000000",
		notes: "Sample notes",
		location: null
	}
	/*render() {
		return (
			<div>
				<p>Owner: {this.state.owner}</p>
				<p>Color: {this.state.color}</p>
				<p>Owner: {this.state.notes}</p>
				<p>Location: {this.state.location}</p> 
			</div>
		
	})*/
}

export default CellText;