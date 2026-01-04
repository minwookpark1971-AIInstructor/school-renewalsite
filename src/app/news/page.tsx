"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, FileText, Megaphone, Info, ChevronRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "all" | "notice" | "letter" | "info";

const CATEGORIES: { id: Category; label: string; icon: any }[] = [
    { id: "all", label: "전체", icon: FileText },
    { id: "notice", label: "공지사항", icon: Megaphone },
    { id: "letter", label: "가정통신문", icon: FileText },
    { id: "info", label: "정보공개", icon: Info },
];

const MOCK_ORIGNAL_DATA = [
    { id: 1, category: "notice", title: "2026학년도 신입생 합격자 발표 및 예비소집 안내", date: "2026-01-02", author: "교무부", views: 1245 },
    { id: 2, category: "letter", title: "[가정통신문] 겨울방학 중 안전사고 예방 및 생활지도 안내", date: "2025-12-30", author: "학생안전부", views: 856 },
    { id: 3, category: "notice", title: "2025학년도 2학기 기말고사 분할점수 공개", date: "2025-12-15", author: "평가계", views: 560 },
    { id: 4, category: "info", title: "2025학년도 학교회계 예결산 내역 공개", date: "2025-12-10", author: "행정실", views: 230 },
    { id: 5, category: "letter", title: "[가정통신문] 2026학년도 학교주관 교복구매 신청 안내", date: "2025-12-05", author: "생활지도부", views: 1102 },
    { id: 6, category: "notice", title: "학교 도서관 겨울방학 이용 시간 변경 안내", date: "2025-12-01", author: "도서실", views: 340 },
    { id: 7, category: "info", title: "2025학년도 학교운영위원회 회의록 (제4회)", date: "2025-11-28", author: "행정실", views: 180 },
    { id: 8, category: "notice", title: "제80회 공주고등학교 졸업식 식순 안내", date: "2025-11-20", author: "교무부", views: 2500 },
];

export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("all");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = MOCK_ORIGNAL_DATA.filter(item => {
        const matchesCategory = activeCategory === "all" || item.category === activeCategory;
        const matchesSearch = item.title.includes(searchTerm) || item.author.includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">정보마당</h1>
                    <p className="text-slate-300 text-lg">
                        공주고등학교의 새로운 소식을 전해드립니다.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <div className="lg:w-64 flex-shrink-0 space-y-2">
                        <div className="bg-white rounded-xl shadow-sm border p-4">
                            <h3 className="font-bold text-gray-900 mb-4 px-2">카테고리</h3>
                            <nav className="space-y-1">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={cn(
                                            "w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                                            activeCategory === cat.id
                                                ? "bg-slate-100 text-slate-900"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                        )}
                                    >
                                        <cat.icon className="w-4 h-4 mr-3" />
                                        {cat.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Search Bar */}
                        <div className="bg-white rounded-xl shadow-sm border p-4 mb-6 flex items-center gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="검색어를 입력하세요 (제목, 작성자)"
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <button className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition font-medium">
                                검색
                            </button>
                        </div>

                        {/* List */}
                        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                                    <tr>
                                        <th className="px-6 py-3 w-20 text-center">No</th>
                                        <th className="px-6 py-3 w-24 text-center">분류</th>
                                        <th className="px-6 py-3">제목</th>
                                        <th className="px-6 py-3 w-24 text-center">작성자</th>
                                        <th className="px-6 py-3 w-32 text-center">작성일</th>
                                        <th className="px-6 py-3 w-20 text-center hidden sm:table-cell">조회</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item) => (
                                            <tr key={item.id} className="bg-white border-b hover:bg-gray-50 transition-colors cursor-pointer group">
                                                <td className="px-6 py-4 text-center text-gray-500">{item.id}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className={cn(
                                                        "px-2 py-1 rounded text-xs font-semibold",
                                                        item.category === 'notice' && "bg-blue-100 text-blue-600",
                                                        item.category === 'letter' && "bg-green-100 text-green-600",
                                                        item.category === 'info' && "bg-gray-100 text-gray-600",
                                                    )}>
                                                        {CATEGORIES.find(c => c.id === item.category)?.label}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                                    <Link href="#" className="flex items-center">
                                                        {item.title}
                                                        {/* Decorative file icon if it was real */}
                                                        {Math.random() > 0.7 && <Download className="w-3 h-3 ml-2 text-gray-400" />}
                                                    </Link>
                                                </td>
                                                <td className="px-6 py-4 text-center text-gray-500">{item.author}</td>
                                                <td className="px-6 py-4 text-center text-gray-500">{item.date}</td>
                                                <td className="px-6 py-4 text-center text-gray-500 hidden sm:table-cell">{item.views}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                                검색 결과가 없습니다.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {/* Pagination (Mock) */}
                            <div className="flex items-center justify-center p-4 border-t">
                                <div className="flex space-x-1">
                                    <button className="w-8 h-8 flex items-center justify-center rounded border bg-white disabled:opacity-50 hover:bg-gray-50" disabled><ChevronRight className="w-4 h-4 rotate-180" /></button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded border bg-slate-900 text-white font-medium">1</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-gray-50">2</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-gray-50">3</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-gray-50"><ChevronRight className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
