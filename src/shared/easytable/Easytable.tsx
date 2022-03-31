import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectResponse, getParticularCrypto } from '../../features/cryptocurrency/cryptoSlice';

export function Easytable(prop: { data: any, config: any, onRowClick: any }) {
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const count = useAppSelector(selectResponse);
    const dispatch = useAppDispatch();

const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    return (
        <Box
            sx={{
                display: 'flex', justifyContent: 'center'
            }}
        >
            <Paper variant="outlined">
                <TableContainer >

                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {prop.config.header.map((key: any) => (
                                    <TableCell align="center">{key}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {prop.data.map((row: any) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    onClick={(event) => { console.log(row); prop.onRowClick(row) }}
                                >

                                    {prop.config.tablekeys.map((tkey: any) => (

                                        <>
                                            {tkey === "image" && <TableCell scope="row" ><img height="20" src={row[tkey]}></img></TableCell>}
                                            {tkey !== "image" && <TableCell scope="row" align="center" >{row[tkey]}</TableCell>}

                                        </>
                                    ))}
                                    {/* //   <TableCell align="right">{row.symbol}</TableCell>
                        //     <TableCell align="right">{row.current_price}</TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={prop.data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box >
    );
}