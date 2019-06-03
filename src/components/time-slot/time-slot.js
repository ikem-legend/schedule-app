import React, { Component } from 'react';
import ScheduleDisplay from './schedule-display';

class Timeslot extends Component {
	render() {
		return (
			<div>
				<p>Time slot</p>
				<div><ScheduleDisplay /></div>
			</div>
		)
	}
}

export default Timeslot;