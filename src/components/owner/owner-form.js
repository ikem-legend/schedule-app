import React, { Component } from 'react';

class Owner extends Component {
	state = {
		ownerName: null,
		ownerColor: "#000000",
	}
	handleChange = (e) => {
		// console.log("Id: ", e.target.id, "Value: ", e.target.value)
		this.setState({
			[e.target.id]: e.target.value
		})
		console.log(this.state)
	}
	handleSubmit = (e) => {
		e.preventDefault()
		alert(`Owner ${this.state.ownerName} added with color ${this.state.ownerColor}`)
		console.log(document.getElementById("ownerName, ownerColor"))
		console.log(this.state)
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-12 schedule-form">
					<header className="page-header text-center schedule-form-header">
						<h3>Add Schedule For User</h3>
					</header>
					<form name="owner-form" onSubmit={this.handleSubmit}>
						<div className="col-md-12 form-group">
							<label htmlFor="Owner" className="control-label">Owner</label>
							<input type="text" id="ownerName" className="form-control" onChange={ this.handleChange } />
						</div>
						<div className="col-md-12 form-group">
							<label htmlFor="Colour" className="control-label">Colour</label>
							<input type="color" id="ownerColor" className="form-control" onChange={ this.handleChange } />
						</div>
						<div className="col-md-12 form-group">
							<button className="btn pull-right">Create</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Owner;