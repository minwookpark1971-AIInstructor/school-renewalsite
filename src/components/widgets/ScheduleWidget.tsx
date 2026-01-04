"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

const EVENTS = [
    { id: 1, date: "01.08", title: "제80회 졸업식", type: "event" },
    { id: 2, date: "01.09", title: "종업식", type: "event" },
    { id: 3, date: "01.10", title: "겨울방학식", type: "vacation" },
];

export default function ScheduleWidget() {
    const [today, setToday] = useState("");

    useEffect(() => {
        setToday(new Date().toLocaleDateString("ko-KR", { month: "long", day: "numeric", weekday: "long" }));
    }, []);

    return (
        <div className="bg-blue-900 text-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
            <div className="p-6 bg-blue-800">
                <h3 className="text-sm font-light text-blue-200 mb-1">오늘의 일정</h3>
                <p className="text-2xl font-bold flex items-center">
                    <Calendar className="w-6 h-6 mr-2 opacity-80" />
                    {today}
                </p>
                <div className="mt-4 p-3 bg-blue-900/50 rounded-lg text-sm border border-blue-700/50">
                    <p className="font-medium text-center text-blue-100">일정이 없습니다.</p>
                </div>
            </div>

            <div className="flex-1 p-6 bg-blue-900">
                <h3 className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-4">Upcoming Events</h3>
                <ul className="space-y-4">
                    {EVENTS.map((evt) => (
                        <li key={evt.id} className="flex items-start">
                            <div className="min-w-[50px] font-mono text-lg font-bold text-blue-100 leading-none">
                                {evt.date.split(".")[1]}
                                <span className="text-xs font-light opacity-70 block">{evt.date.split(".")[0]}월</span>
                            </div>
                            <div className="ml-3 pt-0.5">
                                <p className="text-sm font-medium text-white">{evt.title}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
