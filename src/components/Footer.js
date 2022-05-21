import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <div className=' items-center text-center bg-black text-white  py-8'>
            <p> &copy:2021 patnapizza.com</p>
            <div className='space-x-6'>
            <InstagramIcon className='text-3xl'/>
            <FacebookIcon className='text-3xl'/>
            <TwitterIcon className='text-3xl'/>
            </div>
            
        </div>
    )
}

export default Footer