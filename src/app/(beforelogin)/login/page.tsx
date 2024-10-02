'use client';
// 클라이언트 컴포넌트에서 리다이렉트 해야 화면이 바뀜
import { useRouter } from 'next/navigation';
import Main from '@/app/(beforelogin)/_component/Main';

export default function Login() {
    const router = useRouter();
    router.replace('/i/flow/login');
    return <Main />;
}
