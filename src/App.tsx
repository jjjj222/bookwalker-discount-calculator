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
                        BookWalker Discount Calculator
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar>
            </Toolbar>
            <div>
                <Container>
                    <Paper sx={{padding: '20px'}}>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            ????????????:
                            <TextField variant="outlined" type='number' size="small"
                                defaultValue={discount}
                                onChange={(event) => {
                                    setDiscount(Number(event.target.value));
                                }}
                            />
                            (?????????9?????????0.9, 79?????????0.79, ????????????1)
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            ????????????:
                            <TextField variant="outlined" type='number' size="small"
                                defaultValue={pointBooster}
                                onChange={(event) => {
                                    setPointBooster(Number(event.target.value));
                                }}
                            />
                            (????????????????????????"1")
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            ????????????:
                            <TextField variant="outlined" type='number' size="small"
                                defaultValue={total}
                                onChange={(event) => {
                                    setTotal(Number(event.target.value));
                                }}
                            />
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            ???????????????:
                            <TextField variant="outlined" type='number' size="small"
                                defaultValue={coupon}
                                onChange={(event) => {
                                    setCoupon(Number(event.target.value));
                                }}
                            />
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            *???????????????
                            <TextField variant="outlined" type='number' size="small"
                                defaultValue={bonusPoint}
                                onChange={(event) => {
                                    setBonusPoint(Number(event.target.value));
                                }}
                            />
                            (e.g.?????????1200??????100???, ????????????100)
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            ????????????????????????:
                            <TextField variant="outlined" type='number' size="small"
                                defaultValue={pointDiscount}
                                onChange={(event) => {
                                    setPointDiscount(Number(event.target.value));
                                }}
                            />
                            (????????????????????????????????????????????????????????????, ??????????????????, ?????????????????????????????????)
                        </Box>
                        <hr/>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            ??????????????????$
                            {round2(bookValue)}
                            ?????????
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            ????????????
                            {round2(point)}
                            ???, ??????????????????$
                            {round2(pointBookValue)}
                            ?????????
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            ??????????????????${total}, ????????????$
                            {round2(bookValue)}
                            +$
                            {round2(pointBookValue)}
                            =$
                            {round2(totalBookValue)}
                            ?????????
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            ?????????
                            {Math.round(totalDiscount * 1000) / 10}%
                        </Box>
                    </Paper>
                </Container>
            </div>
        </div>
    );
}
