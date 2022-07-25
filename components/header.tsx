import React from 'react';
import Link from "next/link";

export const Header = () => {
    return (
        <div>
            HEADER
            <a href={'#'}>Домой</a>
            <Link href='/beers'><a>Go To Beers</a></Link>
        </div>
    );
};