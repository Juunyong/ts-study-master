import type { Metadata } from 'next';
import './globals.css';
import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import Header from '@/components/layout/header/Header';
import { Providers } from '@/components/providers/chakra';
import Link from 'next/link';
export const metadata: Metadata = {
    title: 'next.js template',
    description: '페이지 설명',
    openGraph: {
        title: '페이지 제목',
        description: '페이지 설명',
        type: 'website',
        url: 'http://www.mysite.com/article/article1.html',
        images: [
            {
                url: 'http://www.mysite.com/article/article1_featured_image.jpg',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: '페이지 제목',
        description: '페이지 설명',
        images: ['http://www.mysite.com/article/article1.html'],
        creator: '사이트 명',
    },
};

const menuItems = [
    {label : '오늘'}
    {label : '메뉴'}
    {label : 'today'}
    {label : 'today'}
]
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>
                <Providers>
                    <div id="wrap">
                        <Header />
                        <main>{children}</main>
                        <footer>푸터</footer>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
