
import React,{useEffect,useRef,useState} from 'react';
import {fetchId} from '@/context/IdContext'
import styles from '@/styles/DetailSlug.module.css'
import Image from 'next/image'


function MovieDetails() {
  const [filteredData,setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(true); 
  let { id } = fetchId();
  const storedIdRef = useRef(id); 
  const string_with_comman=(st)=>{
    let separatedList = "";
    if (st!=undefined && st!="None"){
    for (let i = 0; i < st.length; i++) {
    separatedList += st[i];
    if (i < st.length -1) {
        separatedList += ', ';
    }
    }
    return separatedList
  }
  }
   useEffect(() => {
     storedIdRef.current = localStorage.getItem('myContextId');
     const fetchData = async () => {
        try {
            const url = `/api/get_movie_detail?id=${storedIdRef.current}`
            const response = await fetch(url); 
            const data = await response.json();
            setFilteredData(data);
            setIsLoading(false);
 
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
        };

        fetchData();
  }, [storedIdRef]);

  return (
    <div className='my-3'>

    
        <div className={`${styles.DetailSlug}`}>
          <div className={`${styles.title}`}>{filteredData.title}</div>
          <div className={`${styles.media_content} md:m-auto`}>
            {/* poster */}
            <div className={`${styles.media_poster}`}>
              {/* <Image src={filteredData.poster_link} width={380} height={700} unoptimized priority alt="no Image"/> */}
              <img src={filteredData.poster_link} width={380} height={700}  alt="no Image"/>
            </div>
            <div className={`${styles.media_description} mx-1 md:w-1/3`}>
              {/* director */}
              <div className={`${styles.director} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Director:</span>
                <span className={`${styles.text}`}>{filteredData.directed_by}</span>
              </div>
              {/* screen play */}
              <div className={`${styles.screenplay} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Screen Played:</span>
                <span className={`${styles.text}`}>{string_with_comman(filteredData.screenplay_by)}</span>
              </div>
              {/* Story by */}
              <div className={`${styles.story} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Story:</span>
                <span className={`${styles.text}`}>{filteredData.title}</span>
              </div>
              {/* producer by */}
              <div className={`${styles.producer} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Producer:</span>
                <span className={`${styles.text}`}>{string_with_comman(filteredData.produced_by)}</span>
              </div>
                {/* starring by */}
              <div className={`${styles.starring} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Star:</span>
                <span className={`${styles.text}`}>{string_with_comman(filteredData.starring)}</span>
                {/* <span>{starring}</span> */}
              </div>
                {/* cenematography by */}
              <div className={`${styles.cinematography} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Cenematography:</span>
                <span className={`${styles.text}`}>{filteredData.cinematography}</span>
              </div>
              {/* edited by */}
              <div className={`${styles.edited_by} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Editor:</span>
                <span className={`${styles.text}`}>{filteredData.edited_by}</span>
              </div>
              {/* Music by */}
              <div className={`${styles.music_by} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Music Composer:</span>
                <span className={`${styles.text}`}>{string_with_comman(filteredData.music_by)}</span>
              </div>
              {/* Production Company by */}
              <div className={`${styles.productioncompany} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Production Company:</span>
                <span className={`${styles.text}`}>{filteredData.productioncompany}</span>
              </div>
              {/* Distributor Company by */}
              <div className={`${styles.distributed_by} flex justify-between items-center`}>
                <span  className={`${styles.label}`}>Distributor:</span>
                <span className={`${styles.text}`}>{string_with_comman(filteredData.distributed_by)}</span>
              </div>
              {/* Release date */}
              <div className={`${styles.release_date} flex justify-between items-center`}>
                <span  className={`${styles.label}`}>Release Date:</span>
                <span className={`${styles.text}`}>{filteredData.release_date}</span>
              </div>
              {/* Running time */}
              <div className={`${styles.running_time} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Duration:</span>
                <span className={`${styles.text}`}>{filteredData.running_time}</span>
              </div>
              {/* country */}
              <div className={`${styles.country} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Country:</span>
                <span className={`${styles.text}`}>{filteredData.country}</span>
              </div>
              {/* language */}
              <div className={`${styles.language} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Language:</span>
                <span className={`${styles.text}`}>{filteredData.language}</span>
              </div>
              {/* budget */}
              <div className={`${styles.budget} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Bidget:</span>
                <span className={`${styles.text}`}>{filteredData.budget}</span>
              </div>
              {/* box office collection */}
              <div className={`${styles.box_office} flex justify-between items-center`}>
                <span className={`${styles.label}`}>Box Office:</span>
                <span className={`${styles.text}`}>{filteredData.box_office}</span>
              </div>
            </div>
          </div>
          {/* Trailer */}
          <div className={`${styles.trailer}`}>
           <span className={`${styles.label} mt-100`}>Video To Watch:</span>

                  <span>
                    {filteredData.trailer &&
                      filteredData.trailer.map((item, index) => (
                        <div key={index} className="">
                          {index<3 && 
                          <iframe
                            src={`https://www.youtube.com/embed/${item}`} 
                              className={'py-2  md:ml-2 md:h-96 md:w-3/5 inline'}/>
                          }
                        </div>
                      ))
                    }
                  </span>



          </div>
        </div>
    </div>
  );
}

export default MovieDetails;
