import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";

import Headers from "../../components/Headers";
import { tokens } from "../../theme";

import React from "react";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter new title for your event!");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            const newEvent = {
                id: `${selected.startStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            };

            calendarApi.addEvent(newEvent);

            console.log('New Event', newEvent);
            setCurrentEvents([...currentEvents, newEvent]);
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'??`
            )
        ) {
            selected.event.remove();
        }
    };
    return (
        <Box>
            <Headers title="CALENDAR" subtitle="Manage your schedule here!" />
            <Box display="flex" justifyContent="space-between">
                {/* Sidebar */}
                <Box
                    flex="1 1 20%" // grow shrink percentage
                    backgroundColor={colors.primary[400]}
                    p="15px"
                    borderRadius="4px"
                    ml="10px"
                >
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box flex="1 1 100%" ml="10px" mr="10px">
                    <FullCalendar
                        height="71vh"
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
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: "1",
                                title: 'All events',
                                date: '2024-07-30'
                            },
                            {
                                id: "2",
                                title: 'Next event',
                                date: '2024-08-05'
                            }
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;
