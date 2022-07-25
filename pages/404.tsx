import React, {useEffect} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const NotFoundPage = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/beers')
        }, 4000)
    })
    return (
        <div>
            <h1>Такой страницы не существует</h1>
            <p>Перейти на <Link href='/beers'>главную</Link></p>
        </div>
    );
};
export default NotFoundPage
