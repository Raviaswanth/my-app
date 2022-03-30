import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export function Easytable(prop: { data: any, config: any }) {

    return (
        <TableContainer component={Paper}>
            {prop.data && JSON.stringify(prop.data).substring(0, 100)}
            {JSON.stringify(prop.config.tablekeys).substring(0, 100)}
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {prop.config.header.map((key: any) => (
                            <TableCell align="right">{key}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {prop.data.map((row: any) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            onClick={() => dispatch(incrementByAmount(row.id))}
                        >

                            {prop.config.tablekeys.map((tkey: any) => (

                                // if(tkey==="image"){
                                // <TableCell scope="row" ><img src={row[tkey]}></img></TableCell>
                                // }else{
                                <TableCell scope="row" >{row[tkey]}</TableCell>
                                // }

                            ))}
                            {/* //   <TableCell align="right">{row.symbol}</TableCell>
                        //     <TableCell align="right">{row.current_price}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}