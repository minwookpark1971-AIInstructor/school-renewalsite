"use client";

import { useState } from "react";
import { Download, ChevronDown, CheckCircle, GraduationCap, Coins } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "admission" | "scholarship" | "career";

export default function AdmissionPage() {
    const [activeTab, setActiveTab] = useState<Tab>("admission");

    const TABS = [
        { id: "admission", label: "입학안내" },
        { id: "scholarship", label: "장학생 선발" },
        { id: "career", label: "진로·진학" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-emerald-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">입학/진로</h1>
                    <p className="text-emerald-100 text-lg">
                        여러분의 꿈을 펼칠 수 있는 기회, 공주고등학교에서 시작하세요.
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white border-b sticky top-16 z-30">
                <div className="container mx-auto px-4">
                    <div className="flex space-x-8 overflow-x-auto">
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as Tab)}
                                className={cn(
                                    "py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                                    activeTab === tab.id
                                        ? "border-emerald-600 text-emerald-600"
                                        : "border-transparent text-gray-500 hover:text-gray-700"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 min-h-[500px]">

                {/* Tab Content: Admission */}
                {activeTab === "admission" && (
                    <div className="space-y-12 animate-in fade-in duration-500">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
                                <CheckCircle className="w-6 h-6 mr-3 text-emerald-600" />
                                2026학년도 신입생 모집 요강
                            </h2>

                            <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-gray-800">모집 정원</h3>
                                        <p className="text-gray-600">남학생 8학급 (총 200명)</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-gray-800">지원 자격</h3>
                                        <p className="text-gray-600">충청남도 소재 중학교 졸업예정자 및 졸업자</p>
                                    </div>
                                </div>

                                <h3 className="font-bold text-lg mb-4 text-gray-800">전형 일정</h3>
                                <div className="space-y-4">
                                    {[
                                        { date: "2025. 12. 10(수) ~ 12. 12(금)", event: "원서 접수" },
                                        { date: "2025. 12. 18(목)", event: "예비 소집 및 면접" },
                                        { date: "2025. 12. 26(금)", event: "합격자 발표" },
                                        { date: "2026. 01. 15(목) ~ 01. 17(토)", event: "합격자 등록" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center p-4 bg-gray-50 rounded-lg">
                                            <span className="font-mono font-bold text-emerald-700 w-60">{item.date}</span>
                                            <span className="text-gray-700">{item.event}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button className="flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-medium w-full sm:w-auto">
                                    <Download className="w-4 h-4 mr-2" /> 모집요강 다운로드 (PDF)
                                </button>
                                <button className="flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium w-full sm:w-auto">
                                    <Download className="w-4 h-4 mr-2" /> 입학원서 서식 (HWP)
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab Content: Scholarship */}
                {activeTab === "scholarship" && (
                    <div className="space-y-12 animate-in fade-in duration-500">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <Coins className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-gray-900">장학 제도 안내</h2>
                                <p className="text-gray-600 mt-2">공주고등학교 동문회와 재단의 든든한 지원으로 풍부한 장학 혜택을 제공합니다.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-l-4 border-l-yellow-400">
                                    <h3 className="font-bold text-lg mb-2">신입생 성적 우수 장학금</h3>
                                    <p className="text-gray-600 text-sm mb-4">중학교 내신 성적 상위 입학생 대상</p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>- 전체 수석: 300만원</li>
                                        <li>- 전체 차석: 200만원</li>
                                        <li>- 상위 5%: 100만원</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-l-4 border-l-blue-400">
                                    <h3 className="font-bold text-lg mb-2">동창회 장학금</h3>
                                    <p className="text-gray-600 text-sm mb-4">가정 형편이 어렵지만 모범적인 학생 지원</p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>- 학기당 50만원 지원</li>
                                        <li>- 급식비 및 기숙사비 지원</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-l-4 border-l-red-400">
                                    <h3 className="font-bold text-lg mb-2">야구부 특기 장학금</h3>
                                    <p className="text-gray-600 text-sm mb-4">야구부 우수 선수 대상 훈련비 지원</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-l-4 border-l-green-400">
                                    <h3 className="font-bold text-lg mb-2">외부 단체 장학금</h3>
                                    <p className="text-gray-600 text-sm mb-4">지역 사회 및 기업체 후원 장학금</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab Content: Career */}
                {activeTab === "career" && (
                    <div className="space-y-12 animate-in fade-in duration-500">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center mb-8">
                                <GraduationCap className="w-8 h-8 text-emerald-600 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900">진로·진학 현황</h2>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border p-8">
                                <h3 className="font-bold text-xl mb-6">최근 3년 주요 대학 합격 현황</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3">구분</th>
                                                <th className="px-6 py-3">2023학년도</th>
                                                <th className="px-6 py-3">2024학년도</th>
                                                <th className="px-6 py-3">2025학년도</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 font-bold text-gray-900">서울대학교</td>
                                                <td className="px-6 py-4">3명</td>
                                                <td className="px-6 py-4">4명</td>
                                                <td className="px-6 py-4">5명</td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 font-bold text-gray-900">연세/고려대</td>
                                                <td className="px-6 py-4">12명</td>
                                                <td className="px-6 py-4">15명</td>
                                                <td className="px-6 py-4">14명</td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 font-bold text-gray-900">의치한약수</td>
                                                <td className="px-6 py-4">8명</td>
                                                <td className="px-6 py-4">10명</td>
                                                <td className="px-6 py-4">9명</td>
                                            </tr>
                                            <tr className="bg-white">
                                                <td className="px-6 py-4 font-bold text-gray-900">주요 국립대</td>
                                                <td className="px-6 py-4">45명</td>
                                                <td className="px-6 py-4">50명</td>
                                                <td className="px-6 py-4">52명</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4 text-xs text-gray-400 text-right">* 중복 합격 포함, 재수생 포함 수치입니다.</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
