import React, { useState, useEffect } from 'react';
import { Easytable } from '../../shared/easytable/Easytable';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    decrement,
    increment,
    incrementByAmount,
    getGeckoAPI,
    incrementIfOdd,
    selectResponse,
} from './cryptoSlice';

type GetCryptoMarket = {
  vs_currency : string;
};

export function Cryptocurrency() {
    const crypto = useAppSelector(selectResponse);
    const dispatch = useAppDispatch();
    const tableconfig = { header: ['Name', 'Symbol','Current Price','imgage'], tablekeys: ['name', 'symbol', 'current_price','image' ] };
    useEffect(() => {
        dispatch(getGeckoAPI('jpy'));
    }, []);
    return (
        <>
            <h1>Hello Crypto</h1>
            {crypto.data && <Easytable data={crypto.data} config={tableconfig}></Easytable>}
        </>
    );
}
