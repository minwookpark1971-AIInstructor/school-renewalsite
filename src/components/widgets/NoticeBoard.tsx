"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

type NoticeTab = "general" | "academic" | "events";

const TABS: { id: NoticeTab; label: string }[] = [
    { id: "general", label: "공지사항" },
    { id: "academic", label: "가정통신문" },
    { id: "events", label: "행사소식" },
];

// Mock Data
const MOCK_DATA = {
    general: [
        { id: 1, title: "2026학년도 신입생 합격자 발표", date: "2026-01-02", isNew: true },
        { id: 2, title: "겨울방학 도서관 이용 안내", date: "2025-12-28", isNew: false },
        { id: 3, title: "학교운영위원회 학부모위원 선출 공고", date: "2025-12-20", isNew: false },
        { id: 4, title: "2025학년도 2학기 기말고사 분할점수 공개", date: "2025-12-15", isNew: false },
        { id: 5, title: "교내 시설 공사로 인한 정문 폐쇄 안내", date: "2025-12-10", isNew: false },
    ],
    academic: [
        { id: 1, title: "[가정통신문] 겨울방학 중 안전사고 예방 안내", date: "2025-12-30", isNew: true },
        { id: 2, title: "[가정통신문] 2026학년도 학교주관 교복구매 신청", date: "2025-12-25", isNew: false },
    ],
    events: [
        { id: 1, title: "제80회 졸업식 안내", date: "2026-01-08", isNew: true },
        { id: 2, title: "교내 합창대회 개최", date: "2025-12-24", isNew: false },
    ],
};

export default function NoticeBoard() {
    const [activeTab, setActiveTab] = useState<NoticeTab>("general");

    return (
        <div className="bg-white rounded-xl shadow-sm border p-6 h-full flex flex-col">
            {/* Header / Tabs */}
            <div className="flex items-center space-x-1 mb-4 border-b">
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
                            activeTab === tab.id
                                ? "border-blue-900 text-blue-900"
                                : "border-transparent text-gray-500 hover:text-gray-700"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* List */}
            <ul className="flex-1 space-y-3">
                {MOCK_DATA[activeTab].map((item) => (
                    <li key={item.id} className="group flex items-center justify-between">
                        <Link
                            href={`/news/${item.id}`}
                            className="flex-1 text-sm text-gray-700 group-hover:text-blue-900 group-hover:underline truncate pr-4 flex items-center"
                        >
                            {item.isNew && (
                                <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full mr-2 flex-shrink-0" />
                            )}
                            <span className="truncate">{item.title}</span>
                        </Link>
                        <span className="text-xs text-gray-400 font-mono flex-shrink-0">{item.date}</span>
                    </li>
                ))}
            </ul>

            {/* Footer link */}
            <div className="mt-4 text-right">
                <Link href="/news" className="text-xs text-gray-500 hover:text-blue-900 inline-flex items-center">
                    더보기 <ChevronRight className="w-3 h-3 ml-1" />
                </Link>
            </div>
        </div>
    );
}
