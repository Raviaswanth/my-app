import React, { useState, useEffect } from 'react';
import { Easytable } from '../../shared/easytable/Easytable';
import { ParticularCryptoCard } from '../../shared/easytable/ParticularCrypto';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    setParticularCryptoBoolean,
    
    getGeckoAPI,
    
    selectResponse,
    getParticularCrypto,
    selectisParticularCoinLoaded
} from './cryptoSlice';

type GetCryptoMarket = {
    vs_currency: string;
};

export function Cryptocurrency() {
    const crypto = useAppSelector(selectResponse);
    const isParticularCoinLoaded = useAppSelector(selectisParticularCoinLoaded);

    const dispatch = useAppDispatch();

    const tableconfig = { header: ['', 'Name', 'Symbol', 'Current Price', 'Today Low', 'Today High', 'Mkt Cap'], tablekeys: ['image', 'name', 'symbol', 'current_price', 'low_24h', 'high_24h', 'market_cap_rank'] };
    useEffect(() => {
        dispatch(getGeckoAPI('usd'));
    }, []);
    return (
        <>

            {!isParticularCoinLoaded && crypto.data && <Easytable data={crypto.data} config={tableconfig} onRowClick={(rowId: any) => { dispatch(setParticularCryptoBoolean()); dispatch(getParticularCrypto(rowId.id)) }}></Easytable>}
            {isParticularCoinLoaded && crypto.data && <ParticularCryptoCard ></ParticularCryptoCard>}
        </>
    );
}
