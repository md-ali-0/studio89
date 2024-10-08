"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import Container from "./ui/container";

function CalendarDatePicker() {
    const [date, setDate] = useState(new Date());

    return (
        <Container>
            <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-5">
                <div className="space-y-8">
                    <h2 className="uppercase text-3xl md:text-5xl font-bold">
                        {" "}
                        Schedule every meeting faster
                    </h2>
                    <Button> Schedule Now</Button>
                </div>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow"
                />
            </div>
        </Container>
    );
}

export default CalendarDatePicker