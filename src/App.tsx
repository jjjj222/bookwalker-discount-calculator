import React from 'react';
import { useState } from 'react';

//------------------------------------------------------------------------------
//   MUI
//------------------------------------------------------------------------------
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

//------------------------------------------------------------------------------
//   function
//------------------------------------------------------------------------------
function round2(num: number): number {
    return Math.round(num * 100) / 100;
}

//------------------------------------------------------------------------------
//   Main
//------------------------------------------------------------------------------
export default function App() {

    const [discount, setDiscount] = useState(0.9);
    const [pointBooster, setPointBooster] = useState(1);
    const [total, setTotal] = useState(1000);
    const [coupon, setCoupon] = useState(0);
    const [bonusPoint, setBonusPoint] = useState(0);

    const [pointDiscount, setPointDiscount] = useState(0.79);

    const bookValue = total / discount + coupon;
    const point = total * 0.01 * pointBooster + bonusPoint;
    const pointBookValue = point / pointDiscount;

    const totalBookValue = bookValue + pointBookValue;
    const totalDiscount = total / totalBookValue;

    return (
        <div>
            <AppBar sx={{backgroundColor: 'black'}}>
                <Toolbar>
                    <Typography variant="h6" component="div">
                        BW Discount Calculator
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar>
            </Toolbar>
            <div>
                <Container>
                    <Paper sx={{padding: '20px'}}>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            全館折扣:
                            <TextField variant="outlined" type='number' size="small"
                                defaultValue={discount}
                                onChange={(event) => {
                                    setDiscount(Number(event.target.value));
                                }}
                            />
                            (如果是9折就打0.9, 79折就打0.79, 沒有就是1):
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            點數倍率:
                            <TextField variant="outlined" type='number' size="small"
                                defaultValue={pointBooster}
                                onChange={(event) => {
                                    setPointBooster(Number(event.target.value));
                                }}
                            />
                            倍 (沒有倍率活動時候打1)
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            結帳金額:
                            <TextField variant="outlined" type='number' size="small"
                                defaultValue={total}
                                onChange={(event) => {
                                    setTotal(Number(event.target.value));
                                }}
                            />
                            元
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            折價券折抵:
                            <TextField variant="outlined" type='number' size="small"
                                defaultValue={coupon}
                                onChange={(event) => {
                                    setCoupon(Number(event.target.value));
                                }}
                            />
                            元
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            *額外的點數
                            <TextField variant="outlined" type='number' size="small"
                                defaultValue={bonusPoint}
                                onChange={(event) => {
                                    setBonusPoint(Number(event.target.value));
                                }}
                            />
                            (比如果有1200加送100點, 這裡就打100)
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            點數會拿去買書的折扣:
                            <TextField variant="outlined" type='number' size="small"
                                defaultValue={pointDiscount}
                                onChange={(event) => {
                                    setPointDiscount(Number(event.target.value));
                                }}
                            />
                            (比如說你點數會等之後有更低折扣再用, 可以填更低折扣, 要不然就填現在全館折扣)
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            等於用現金買到原價
                            {round2(bookValue)}
                            元的書
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            另外獲得點數
                            {round2(point)}
                            點, 可以買到原價
                            {round2(pointBookValue)}
                            元的書
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            花了{total}可以得到原價
                            {round2(bookValue)}
                            +
                            {round2(pointBookValue)}
                            =
                            {round2(totalBookValue)}
                            元的書,
                            總折扣是
                            {round2(totalDiscount)}
                        </Box>
                    </Paper>
                </Container>
            </div>
        </div>
    );
}
