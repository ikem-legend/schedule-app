import React, { Component } from "react";
import Cell from "./cell";
import Header from "./header";
import Timeslot from "./time-slot";

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
    schedule: "Anderson Sho",
    backgroundColor: "#b3d12e",
    timeSlot: "08:00AM"
  },
  {
    dayId: "005",
    schedule: "John Doe",
    backgroundColor: "#b3d12e",
    timeSlot: "11:00AM"
  },
  {
    dayId: "006",
    schedule: "Wang Dong",
    backgroundColor: "#4587d8",
    timeSlot: "09:00AM"
  },
  {
    dayId: "003",
    schedule: "Justin Kempiak",
    backgroundColor: "#45c9d8",
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
      timeSlots: [],
      selectedSlots: {}
    };
  }

  generateTimeSlots = () => {
    const { timeInterval } = this.state;
    var times = []; // time array
    var tt = 360; // start time => change to 0 if you want to start from 00:00
    var ap = ["AM", "PM"]; // AM-PM
    for (var i = 0; tt < 24 * 60; i++) {
      var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      var mm = tt % 60; // getting minutes of the hour in 0-55 format
      times[i] = {
        id: Math.trunc(Math.random() * 81928312),
        time:
          ("0" + (hh % 12)).slice(-2) +
          ":" +
          ("0" + mm).slice(-2) +
          ap[Math.floor(hh / 12)] // pushing data in array in [00:00 - 12:00 AM/PM format]
      };
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
    const { schedules, tableHeader, selectedSlots } = this.state;
    // find time slot first
    let filteredSchedules = schedules.filter(
      schedule => schedule.timeSlot === timeSlot.time
    );
    // console.log(filteredSchedules)
    // get the specific day with the time
    let filteredTimeSchedules = [];
    tableHeader.forEach((header, index) => {
      let filteredSchedule = filteredSchedules.filter(
        schedule => schedule.dayId === header.id
      )[0];
      if (filteredSchedule) {
        filteredTimeSchedules.push({
          id: `${timeSlot.id}_${header.id}`,
          ...filteredSchedule
        });
      } else {
        filteredTimeSchedules.push({
          id: `${timeSlot.id}_${header.id}`
        });
      }
    // console.log(filteredSchedule)
    });
    // console.log(filteredTimeSchedules)
    return filteredTimeSchedules.map((schedule, index) => (
      <Cell
        cellText={schedule.schedule ? schedule.schedule : ""}
        key={`${index}_schedule`}
        textColor="#000"
        backgroundColor={schedule.schedule ? schedule.backgroundColor : "#fff"}
        onCellSelect={() => this.selectSlot(schedule)}
        selected={selectedSlots[schedule.id] !== undefined}
      />
    ));
  };

  selectSlot = schedule => {
    // console.log("Hi")
    const { selectedSlots } = this.state;
    let newSelectedSlots = Object.assign(selectedSlots);
    console.log(newSelectedSlots)
    if (newSelectedSlots[schedule.id]) {
      console.log("Yoo")
      delete newSelectedSlots[schedule.id];
    } else {
      console.log("Noo")
      newSelectedSlots[schedule.id] = schedule;
      // console.log(newSelectedSlots)
      // console.log(schedule)
    }
    this.setState({
      ...this.state,
      selectedSlots: newSelectedSlots
    });
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
            <Header cellText={header.name} key={header.id} textColor="#fff" />
          ))}
        </div>
        {/* Render Time Slots here */}
        {timeSlots.map(timeSlot => (
          <div
            className="row"
            style={{ flexDirection: "row", display: "flex" }}
            key={timeSlot.id}
          >
            <Timeslot
              cellText={timeSlot.time}
              backgroundColor="#fff"
              textColor="#000"
            />
            {/* Get the schedule per day for each time slot */}
            {this.getScheduleForTime(timeSlot)}
          </div>
        ))}
      </div>
    );
  }
}

export default Canvas;
