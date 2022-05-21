import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



function Menu() {
    return (
        <div className='menu'>
            <div>
                <Box sx={{ width: '100%' }} >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {MenuList.map((menuList, key) => {
                            return (
                                <Grid item xs={6}>
                                    <MenuItem imgSrc={menuList.image} price={menuList.price} name={menuList.name} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Menu