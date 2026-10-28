import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'myChat | 규정에 근거한 답변',description:'나의 규정 자료실과 함께하는 근거 중심 AI 도우미'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
