
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { fetchId } from '@/context/IdContext';
import styles from '@/styles/MovieCard.module.css'

function MovieCard({item}) {
    const { setId,id } = fetchId();
    const setIdForMovie=({globalid})=>{
        setId(globalid)
        localStorage.setItem('myContextId', globalid);
        console.log("MovieCart, Global id::"+globalid)
    }
  return (
    <> <div  className={`lg:1/2 md:w-1/4 w-full ${styles.moviecard}`}>
                        <div className={` ${styles.moviecard__title} `}>{item.title}</div>
                        <div className={` ${styles.moviecard_posterBox} `}>
                            <Image alt="ecommerce" className={`${styles.moviecard__poster}`} width={100} height={800} src={item.poster_link} unoptimized priority/>
                        </div>
                        <div className='flex-col justify-items-center'>
                            <h3 className={`${styles.moviecard__releasedate_label} mb-1`}>Release date 
                                <span className={`${styles.moviecard__releasedate_text} `}>{item.release_date}</span>
                            </h3>
                            <h2  className={`${styles.moviecard__starring}`}>{item.starring.map((item)=> (item+", "))}</h2>

                            <p className={`${styles.moviecard__trailer} `} 
                            onClick={()=>setIdForMovie({globalid:item.id})} 
                            >

                                <Link
                                className={`${styles.moviecard__trailer__text}`}
                                href={`/movie_details/${item.title}/${item.id}`}
                                >
                                Watch video & More...
                                </Link>
                            </p>
                        </div>
                        
                        
                    </div>
                    </>
  )
}

export default MovieCard