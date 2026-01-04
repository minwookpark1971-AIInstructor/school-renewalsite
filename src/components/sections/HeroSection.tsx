"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop", // Abstract 'Education' image
        title: "자율형 공립고 2.0 선정",
        subtitle: "창의적이고 주도적인 인재를 양성하는 공주고등학교",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop", // Baseball related or sports field
        title: "야구 명문 공주고",
        subtitle: "땀방울로 써내려가는 승리의 역사",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop", // Code/Tech image
        title: "미래를 선도하는 AI·SW 교육",
        subtitle: "디지털 대전환 시대를 이끄는 리더 육성",
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

    return (
        <section className="relative h-[600px] w-full overflow-hidden bg-gray-900">
            {SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                        index === current ? "opacity-100" : "opacity-0"
                    )}
                >
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg transform transition-transform duration-700 translate-y-0 opacity-100">
                            {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl font-light drop-shadow-md">
                            {slide.subtitle}
                        </p>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/30 text-white transition backdrop-blur-sm"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/30 text-white transition backdrop-blur-sm"
                aria-label="Next slide"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all",
                            index === current ? "bg-white w-8" : "bg-white/50"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
