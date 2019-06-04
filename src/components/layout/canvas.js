import React, { Component } from "react";
import Cell from "./cell";

const tableHeader = [
    {
        id: "001",
        name: "Monday"
    },
    {
        id: "002",
        name: "Tuesday"
    },
    {
        id: "003",
        name: "Wednesday"
    },
    {
        id: "004",
        name: "Thursday"
    },
    {
        id: "005",
        name: "Friday"
    },
    {
        id: "006",
        name: "Saturday"
    }
];

//dummy schedule for test
let schedules = [
    {
        dayId: "001",
        schedule: "Bayo",
        backgroundColor: "#b3d12e",
        timeSlot: "08:00AM"
    },
    {
        dayId: "005",
        schedule: "Jazz",
        backgroundColor: "#b3d12e",
        timeSlot: "11:00AM"
    },
    {
        dayId: "006",
        schedule: "Tolu",
        backgroundColor: "#4587d8",
        timeSlot: "09:00AM"
    },
    {
        dayId: "003",
        schedule: "Divine",
        backgroundColor: "#4587d8",
        timeSlot: "01:00PM"
    }
];

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHeader: tableHeader,
            schedules: schedules,
            timeInterval: 60,
            timeSlots: []
        };
    }

    generateTimeSlots = () => {
        const { timeInterval } = this.state;
        let times = []; // time array
        let tt = 360; // start time => change to 0 if you want to start from 00:00
        let ap = ["AM", "PM"]; // AM-PM
        for (let i = 0; tt < 24 * 60; i++) {
            let hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
            let mm = tt % 60; // getting minutes of the hour in 0-55 format
            times[i] =
                ("0" + (hh % 12)).slice(-2) +
                ":" +
                ("0" + mm).slice(-2) +
                ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
            tt = tt + timeInterval;
        }
        this.setState({
            timeSlots: times
        });
    };

    componentDidMount() {
        this.generateTimeSlots(); // Generate time slots rendered by the left
    }

    getScheduleForTime = timeSlot => {
        const { schedules, tableHeader } = this.state;
        let filteredSchedules = schedules.filter(
            schedule => schedule.timeSlot === timeSlot
        );
        let filteredTimeSchedules = [];
        tableHeader.forEach(header => {
            filteredTimeSchedules.push(
                filteredSchedules.filter(schedule => schedule.dayId === header.id)[0]
            );
        });
        return filteredTimeSchedules.map((schedule, index) => (
            <Cell
                cellText={schedule ? schedule.schedule : ""}
                key={`${index}_schedule`}
                textColor="#000"
                backgroundColor={schedule ? schedule.backgroundColor : "#fff"}
            />
        ));
    };

    render() {
        const { tableHeader, timeSlots } = this.state;
        return (
            <div style={{ overflow: "scroll" }}>
                <div className="row" style={{ flexDirection: "row", display: "flex" }}>
                    <Cell
                        cellText={"Time Slots"}
                        backgroundColor="#586034"
                        textColor="#fff"
                    />
                    {tableHeader.map((header, index) => (
                        <Cell cellText={header.name} key={header.id} textColor="#fff" />
                    ))}
            </div>
            {/* Render Time Slots here */}
            {timeSlots.map(timeSlot => (
                <div
                    className="row"
                    style={{ flexDirection: "row", display: "flex" }}
                    key={timeSlot}
                >
                    <Cell cellText={timeSlot} backgroundColor="#fff" textColor="#000" />
                	{/* Get the schedule per day for each time slot */}
                    {this.getScheduleForTime(timeSlot)}
                </div>
            ))}
            </div>
        );
    }
}

export default Canvas;
