import React, { Component } from 'react';
import Timeslot from './time-slot';

class Canvas extends Component {
						// <td><Timeslot timeslot={timeslot} /></td>
	render() {
		return (
			<div className="row">
				<div className="table-responsive">
					<table className="table table-bordered">
						<thead>
							<tr>
								<th></th>
								<th className="text-center">Monday</th>
								<th className="text-center">Tuesday</th>
								<th className="text-center">Wednesday</th>
								<th className="text-center">Thursday</th>
								<th className="text-center">Friday</th>
								<th className="text-center">Saturday</th>
								<th className="text-center">Sunday</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>8:00am</td>
								<td><Timeslot /></td>
							</tr>
							<tr>
								<td>9:00am</td>
								<td><Timeslot /></td>
							</tr>
							<tr>
								<td>10:00am</td>
								<td><Timeslot /></td>
							</tr>
							<tr>
								<td>11:00am</td>
								<td><Timeslot /></td>
							</tr>
							<tr>
								<td>12:00pm</td>
								<td><Timeslot /></td>
							</tr>
							<tr>
								<td>1:00pm</td>
								<td><Timeslot /></td>
							</tr>
							<tr>
								<td>2:00pm</td>
								<td><Timeslot /></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default Canvas;