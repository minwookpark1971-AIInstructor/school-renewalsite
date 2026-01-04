import { BookOpen, Monitor, Shield, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function EducationPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Header */}
            <div className="bg-indigo-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-800 text-indigo-200 text-sm font-medium mb-4">
                        자율형 공립고 2.0
                    </span>
                    <h1 className="text-4xl font-bold mb-4">교육과정</h1>
                    <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
                        학생 선택 중심의 다양하고 창의적인 교육과정을 운영합니다.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 space-y-24">

                {/* 1. Autonomous Public HS 2.0 */}
                <section className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5 relative h-[300px] md:h-full min-h-[300px] bg-slate-200 rounded-2xl overflow-hidden">
                        {/* Placeholder Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-8">
                            <GraduationCap className="w-32 h-32 text-white/20" />
                            <h3 className="absolute bottom-8 left-8 text-white text-2xl font-bold">Innovation<br />Education</h3>
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            자율형 공립고 2.0
                            <span className="ml-4 text-sm font-normal text-white bg-blue-600 px-3 py-1 rounded-full">New</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            공주고등학교는 교육부 지정 '자율형 공립고 2.0'으로서,
                            지역 사회와 연계한 특색 있는 교육과정을 자율적으로 운영하고 있습니다.
                            지자체 및 대학과의 협약을 통해 수준 높은 교육 프로그램을 제공합니다.
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {[
                                "교육과정 자율성 확대",
                                "지자체 대응 투자 지원",
                                "우수 교원 초빙제 운영",
                                "대학 연계 심화 탐구 활동"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-gray-700 bg-white p-3 rounded-lg border shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Divider */}
                <div className="h-px bg-gray-200" />

                {/* 2. Special Programs Grid */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">특색 프로그램</h2>
                        <p className="text-gray-500">학생들의 진로와 적성을 고려한 맞춤형 트랙을 운영합니다.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* ACE Class */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:border-indigo-500 transition-colors">
                            <div className="bg-indigo-600 p-8 text-white">
                                <BookOpen className="w-10 h-10 mb-4 opacity-90" />
                                <h3 className="text-2xl font-bold mb-2">ACE 반</h3>
                                <p className="text-indigo-100 text-sm">Academic Challenge & Excellence</p>
                            </div>
                            <div className="p-8">
                                <h4 className="font-bold text-gray-900 mb-4">최상위권 심화 학습</h4>
                                <ul className="space-y-3 mb-8 text-gray-600 text-sm">
                                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-2" />자기주도학습 전용 공간(정독실) 제공</li>
                                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-2" />수준별 심화 방과후 학교 운영</li>
                                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-2" />명문대 탐방 및 선배와의 멘토링</li>
                                </ul>
                            </div>
                        </div>

                        {/* AI/SW Class */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:border-blue-500 transition-colors">
                            <div className="bg-blue-600 p-8 text-white">
                                <Monitor className="w-10 h-10 mb-4 opacity-90" />
                                <h3 className="text-2xl font-bold mb-2">AI · SW 교육</h3>
                                <p className="text-blue-100 text-sm">Artificial Intelligence & Software</p>
                            </div>
                            <div className="p-8">
                                <h4 className="font-bold text-gray-900 mb-4">디지털 인재 양성</h4>
                                <ul className="space-y-3 mb-8 text-gray-600 text-sm">
                                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2" />AI 융합 교육과정 운영 (파이썬, 빅데이터)</li>
                                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2" />SW 선도학교 및 해커톤 대회 참가 지원</li>
                                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2" />최신형 컴퓨터실 및 태블릿 지원</li>
                                </ul>
                            </div>
                        </div>

                        {/* Civil Service Class */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:border-slate-500 transition-colors">
                            <div className="bg-slate-700 p-8 text-white">
                                <Shield className="w-10 h-10 mb-4 opacity-90" />
                                <h3 className="text-2xl font-bold mb-2">공무원반</h3>
                                <p className="text-slate-200 text-sm">Public Service Preparation</p>
                            </div>
                            <div className="p-8">
                                <h4 className="font-bold text-gray-900 mb-4">공직 진출 대비</h4>
                                <ul className="space-y-3 mb-8 text-gray-600 text-sm">
                                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-2" />9급 공무원 시험 과목 방과후 강좌 개설</li>
                                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-2" />공무원 합격 선배 초청 특강</li>
                                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-2" />한국사능력시험 등 자격증 취득 지원</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
