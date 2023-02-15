import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";

import React from 'react';
import {tokens} from "../../theme";
import Header from "../../components/Header";

const Calender = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvent, setCurrentEvent] = useState([]);

    const handleDateClicked = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calenderApi = selected.view.calendar;
        calenderApi.unselect();

        if (title) {
            calenderApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    }

    const handleEventClicked = (selected) => {
        if (window.confirm( `Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    }

    return (
        <Box m="20px">
            <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
            <Box display="flex" justifyContent="space-between">
                {/* CALENDAR SIDEBAR */}
                <Box
                    flex="1 1 20px"
                    backgroundColor={colors.primary[400]}
                    p="15px"
                    borderRadius="4px"
                >
                    <Typography variant="h5">Events</Typography>
                </Box>
                <Box
                    flex = "1 1 100%"
                    ml = "15px"
                >
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}

                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClicked}
                        eventClick={handleEventClicked}
                        eventsSet={(events) => setCurrentEvent(events)}
                        initialEvents={[
                            {
                                id: "12315",
                                title: "All-day event",
                                date: "2022-09-14",
                            },
                            {
                                id: "5123",
                                title: "Timed event",
                                date: "2022-09-28",
                            },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calender;