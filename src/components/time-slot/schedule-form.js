import React, { Component } from 'react';

class ScheduleForm extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<form>
							<div className="col-md-6 form-group">
								<label for="Start" className="form-control">Start Time</label>
								<input type="text" className="form-control" />
							</div>
							<div className="col-md-6 form-group">
								<label for="End">End Time</label>
								<input type="text" className="form-control" />
							</div>
							<div className="col-md-12 form-group">
								<label for="Owner" className="control-label">Owner</label>
								<input type="text" className="form-control" />
							</div>
							<div className="col-md-12 form-group">
								<label for="Notes" className="control-label">Notes</label>
								<input type="text" className="form-control" />
							</div>
							<div className="col-md-12 form-group">
								<label for="Location" className="control-label">Location</label>
								<input type="text" className="form-control" />
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default ScheduleForm;