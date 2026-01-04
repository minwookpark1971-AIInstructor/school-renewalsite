import Image from "next/image";
import { Utensils, Home, Users, Trophy, Calendar, CheckCircle } from "lucide-react";

export default function StudentLifePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Header */}
            <div className="bg-orange-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">학교생활</h1>
                    <p className="text-orange-200 text-lg">
                        즐겁고 활기찬 공주고등학교의 생활을 소개합니다.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 space-y-24">

                {/* 1. Baseball Team Highlight */}
                <section className="relative rounded-3xl overflow-hidden shadow-2xl bg-black text-white">
                    <div className="absolute inset-0 opacity-40">
                        <Image
                            src="https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?q=80&w=2029&auto=format&fit=crop"
                            alt="Baseball Stadium"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative z-10 p-12 md:p-20">
                        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
                            <div>
                                <div className="inline-flex items-center px-4 py-2 bg-orange-600 rounded-full text-sm font-bold mb-6">
                                    <Trophy className="w-4 h-4 mr-2" /> 야구 명문
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">공주고등학교 야구부</h2>
                                <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                                    박찬호, 손시헌 등 수많은 스타 플레이어를 배출한 대한민국 고교야구의 산실.<br />
                                    땀과 열정으로 그라운드를 누비며 끊임없이 도전합니다.
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 min-w-[280px]">
                                <h3 className="font-bold text-lg mb-4 text-orange-400 border-b border-white/10 pb-2">기록과 역사</h3>
                                <ul className="space-y-3 font-mono text-sm">
                                    <li className="flex justify-between"><span>대통령배 우승</span><span>2회</span></li>
                                    <li className="flex justify-between"><span>청룡기 우승</span><span>1회</span></li>
                                    <li className="flex justify-between"><span>프로지명 선수</span><span>100+명</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Facilities (Dorm & Lunch) */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Dormitory */}
                    <section className="bg-white rounded-2xl shadow-sm border p-8">
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                                <Home className="w-8 h-8" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">기숙사 (웅비관)</h2>
                                <p className="text-gray-500 text-sm">편안하고 쾌적한 생활 공간</p>
                            </div>
                        </div>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                원거리 통학생과 성적 우수자를 위한 최신식 기숙사를 운영하고 있습니다.
                                자기주도학습실, 체력단련실, 휴게실 등 다양한 편의시설을 갖추고 있습니다.
                            </p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> 4인 1실 운영</li>
                                <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> 전담 사감이 24시간 생활 지도</li>
                                <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> 정독실 지정 좌석제 운영</li>
                            </ul>
                        </div>
                    </section>

                    {/* Lunch Service */}
                    <section className="bg-white rounded-2xl shadow-sm border p-8">
                        <div className="flex items-center mb-6">
                            <div className="bg-orange-100 p-3 rounded-lg mr-4 text-orange-600">
                                <Utensils className="w-8 h-8" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">급식 안내</h2>
                                <p className="text-gray-500 text-sm">균형 잡힌 영양, 맛있는 식사</p>
                            </div>
                        </div>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                학생들의 건강과 성장을 최우선으로 생각하여 친환경 식자재를 사용한
                                균형 잡힌 식단을 제공합니다.
                            </p>

                            <div className="bg-orange-50 p-4 rounded-xl mt-4 border border-orange-100">
                                <h4 className="font-bold text-orange-800 mb-2 flex items-center">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    오늘의 메뉴 (예시)
                                </h4>
                                <p className="text-sm text-gray-700">
                                    현미밥, 쇠고기미역국, 돈육메추리알장조림, 배추김치, 우유/후식
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 3. Student Council */}
                <section className="bg-white rounded-2xl shadow-sm border p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">학생자치회</h2>
                        <p className="text-gray-500">학생들이 주인이 되어 만들어가는 학교 문화</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition">
                                <Users className="w-10 h-10" />
                            </div>
                            <h3 className="font-bold text-lg">학생회</h3>
                            <p className="text-gray-500 text-sm mt-2">체육대회, 축제 등<br />교내 행사 기획 및 운영</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 group-hover:text-purple-600 transition">
                                <Users className="w-10 h-10" />
                            </div>
                            <h3 className="font-bold text-lg">대의원회</h3>
                            <p className="text-gray-500 text-sm mt-2">학급 반장/부반장 회의<br />학생 의견 수렴 및 건의</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-100 group-hover:text-pink-600 transition">
                                <Users className="w-10 h-10" />
                            </div>
                            <h3 className="font-bold text-lg">동아리 연합회</h3>
                            <p className="text-gray-500 text-sm mt-2">학술, 예술, 스포츠 등<br />다양한 동아리 활동 지원</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
