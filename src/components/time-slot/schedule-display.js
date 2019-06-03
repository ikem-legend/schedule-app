import React, { Component } from 'react';
import ScheduleForm from './schedule-form';

class ScheduleDisplay extends Component {
	form = () => {
		console.log("ha")
	}
	render() {
		return ( 
			// check if such detail saved in state else be empty
			<div>
				<div>
					<a data-toggle="modal" href="#" data-target="#schedule-modal" onClick={ScheduleForm}>Schedule</a>
				</div>
			</div>
		)
	}
}

export default ScheduleDisplay;