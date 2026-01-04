import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">공주고등학교</h3>
                        <p className="mb-2">충청남도 공주시 왕릉로 8</p>
                        <p className="mb-2">교무실: 041-850-1300</p>
                        <p>행정실: 041-850-1400</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">바로가기</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-white transition">학교소개</Link></li>
                            <li><Link href="/admission" className="hover:text-white transition">입학안내</Link></li>
                            <li><Link href="/news" className="hover:text-white transition">공지사항</Link></li>
                            <li><Link href="https://neis.go.kr" target="_blank" className="hover:text-white transition">나이스(NEIS)</Link></li>
                        </ul>
                    </div>

                    {/* Legal / Copy */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">정보</h3>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="hover:text-white transition">개인정보처리방침</Link></li>
                            <li><Link href="/sitemap" className="hover:text-white transition">사이트맵</Link></li>
                        </ul>
                        <p className="mt-8 text-sm text-gray-500">
                            © {new Date().getFullYear()} Kongju High School. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
