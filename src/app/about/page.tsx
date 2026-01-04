import Image from "next/image";
import { MapPin, Award, BookOpen, User } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Header */}
            <div className="bg-blue-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">학교소개</h1>
                    <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                        100년의 전통과 미래가 공존하는 배움의 터전, <br />
                        공주고등학교에 오신 것을 환영합니다.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 space-y-20">
                {/* 1. Principal's Greeting */}
                <section id="greeting" className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        {/* Mock Image for Principal */}
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                            <User className="w-24 h-24 opacity-20" />
                            <span className="ml-2 text-sr-only">교장 선생님 사진</span>
                        </div>
                        <Image
                            src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
                            alt="학교 전경"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
                            <User className="w-4 h-4 mr-2" /> 학교장 인사말
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            "꿈을 키우고 미래를 여는<br />행복한 배움터"
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                사랑하고 존경하는 공주고 가족 여러분, 안녕하십니까?
                            </p>
                            <p>
                                본교는 1922년 개교 이래 3만여 동문이 사회 각계각층에서 중추적인 역할을 담당하고 있는 명문 고등학교입니다.
                            </p>
                            <p>
                                이제 우리 공주고등학교는 '자율형 공립고 2.0' 선정과 함께 새로운 도약을 준비하고 있습니다.
                                학생 개개인의 소질과 적성을 계발하고, 바른 인성을 갖춘 창의 융합형 인재를 육성하기 위해
                                모든 교직원이 한마음으로 노력하겠습니다.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Educational Goals (Symbols) */}
                <section id="goals" className="bg-white rounded-2xl p-12 shadow-sm border">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">교육 목표 및 상징</h2>
                        <p className="text-gray-500">공주고등학교가 추구하는 인재상과 가치입니다.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">교훈</h3>
                            <p className="text-gray-600">성실(誠實), 근면(勤勉), 협동(協同)</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">교목/교화</h3>
                            <p className="text-gray-600">교목: 소나무 (기상, 절개)<br />교화: 장미 (열정, 사랑)</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                                <User className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">교육 비전</h3>
                            <p className="text-gray-600">바른 인성과 창의성을 겸비한<br />미래 인재 육성</p>
                        </div>
                    </div>
                </section>

                {/* 3. Location */}
                <section id="location">
                    <div className="flex items-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mr-4">오시는 길</h2>
                        <div className="h-px bg-gray-200 flex-1" />
                    </div>

                    <div className="bg-white p-4 rounded-2xl shadow-sm border overflow-hidden">
                        {/* Map Placeholder - In reality, integrate Kakao/Naver Map or Embed */}
                        <div className="w-full h-[400px] bg-slate-100 flex items-center justify-center rounded-xl mb-6 relative">
                            <div className="text-center">
                                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-500">지도 API 영역</p>
                                <p className="text-xs text-gray-400">(충청남도 공주시 왕릉로 8)</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 px-4 pb-4">
                            <div>
                                <h3 className="font-bold text-lg mb-2 flex items-center"><MapPin className="w-5 h-5 mr-2 text-blue-600" /> 주소</h3>
                                <p className="text-gray-600">충청남도 공주시 왕릉로 8 (우편번호: 32528)</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">교통편</h3>
                                <p className="text-gray-600">
                                    <span className="font-semibold">버스:</span> 100, 101, 108번 버스 탑승 후 '공주고등학교' 정류장 하차
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
