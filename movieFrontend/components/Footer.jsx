import React from 'react'
import styles from '@/styles/Footer.module.css'

function Footer() {
    return (
        <div className={`${styles.footer} py-5 px-5 mt-5`} >
            {/* <div className='flex space-y-5'>
                <div className='flex-col'>
                    <div>
                        <div className='flex-col justify-center items-center'>
                            <Link href="/termsandcondition/about">About Us</Link>
                        </div> 
                        <div className='flex-col justify-center items-center'>
                            <Link href="/termsandcondition/termofuse">Terms of Use</Link>
                        </div> 
                        <div className='flex-col justify-center items-center'>
                            <Link href="/termsandcondition/privatepolicy">Privacy Policy</Link>
                        </div> 
                        <div className='flex-col justify-center items-center'>
                            <Link href="/termsandcondition/contactus">Contact Us</Link>
                        </div> 
                    </div>
                </div>
                <div>
                    <Link href="https://www.youtube.com/@birenbharat"><YouTubeIcon /></Link>
                </div>                        
            </div>*/}
                     <div className='flex justify-start items-center'>
                        <div>Copyright © 2023, xmoney.in Pvt Ltd. All Rights Reserved.</div>
                    </div>
                  
        </div>
    )
}

export default Footer