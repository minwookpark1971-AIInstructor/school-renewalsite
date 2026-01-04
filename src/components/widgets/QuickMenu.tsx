"use client";

import Link from "next/link";
import { Utensils, MapPin, ShieldAlert, MonitorCheck } from "lucide-react";

const LINKS = [
    {
        id: 1,
        label: "급식소식",
        href: "/student-life",
        icon: Utensils,
        color: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
    },
    {
        id: 2,
        label: "오시는길",
        href: "/about",
        icon: MapPin,
        color: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white"
    },
    {
        id: 3,
        label: "학교폭력신고",
        href: "#",
        icon: ShieldAlert,
        color: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white"
    },
    {
        id: 4,
        label: "나이스(NEIS)",
        href: "https://neis.go.kr",
        target: "_blank",
        icon: MonitorCheck,
        color: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
    },
];

export default function QuickMenu() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
            {LINKS.map((item) => (
                <Link
                    key={item.id}
                    href={item.href}
                    target={item.target}
                    className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300"
                >
                    <div className={`p-4 rounded-full mb-3 transition-colors duration-300 ${item.color}`}>
                        <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{item.label}</span>
                </Link>
            ))}
        </div>
    );
}
