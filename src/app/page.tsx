import HeroSection from "@/components/sections/HeroSection";
import NoticeBoard from "@/components/widgets/NoticeBoard";
import ScheduleWidget from "@/components/widgets/ScheduleWidget";
import QuickMenu from "@/components/widgets/QuickMenu";
import { ArrowRight, BookOpen, Trophy } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Dashboard Widgets */}
      <section className="container mx-auto px-4 -mt-16 relative z-30 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Notice Board (Left - Wider) */}
          <div className="md:col-span-5 lg:col-span-5 h-[340px]">
            <NoticeBoard />
          </div>

          {/* Schedule Widget (Center) */}
          <div className="md:col-span-4 lg:col-span-3 h-[340px]">
            <ScheduleWidget />
          </div>

          {/* Quick Menu (Right - 2x2 Grid) */}
          <div className="md:col-span-3 lg:col-span-4 h-[340px]">
            <QuickMenu />
          </div>
        </div>
      </section>

      {/* Identity Highlights */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: ACE Class */}
          <Link href="/education" className="group relative overflow-hidden rounded-2xl h-64 bg-indigo-900 text-white shadow-lg hover:shadow-xl transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-900 opacity-90 group-hover:scale-105 transition-transform duration-500" />
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">ACE 반 (Academic Challenge & Excellence)</h3>
                <p className="text-indigo-100 mb-4 opacity-90">심화 학습과 맞춤형 진로 지도를 통한 최상위권 인재 육성 프로그램</p>
                <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition" />
          </Link>

          {/* Card 2: AI/SW Education */}
          <Link href="/education" className="group relative overflow-hidden rounded-2xl h-64 bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-gray-900 opacity-90 group-hover:scale-105 transition-transform duration-500" />
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">공무원반 / 자율형 공립고 2.0</h3>
                <p className="text-slate-300 mb-4 opacity-90">공직 진출을 꿈꾸는 학생들을 위한 체계적인 준비 과정 및 특색 교육</p>
                <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  자세히 보기 <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition" />
          </Link>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-blue-50 py-16 border-t border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">꿈을 향한 도전, 공주고등학교가 함께합니다</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            100년의 역사를 넘어 새로운 미래를 만들어가는 공주고등학교에서 여러분의 꿈을 펼치세요.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/admission" className="px-8 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition shadow-lg hover:shadow-xl">
              입학 안내 확인하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
