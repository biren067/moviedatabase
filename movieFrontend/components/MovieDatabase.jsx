import React,{useEffect, useMemo,useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useTable,useSortBy,useGlobalFilter,usePagination} from 'react-table'
import styles from '../styles/MovieDatabase.module.css'
import stylesMainPage from '@/styles/MainPage.module.css'
import {AiFillDownCircle,AiFillUpCircle} from 'react-icons/ai'
import SearchBox from './SearchBox'
import { useRouter } from 'next/router';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { fetchId } from '@/context/IdContext';

function MovieDatabase() 
{
    const [filteredData,setFilteredData] = useState([])
    const [isLoading, setIsLoading] = useState(true); 
    const [showPopup, setShowPopup] = useState(false);
    const { setId } = fetchId();
    const router = useRouter();
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/api/movie_database'); 
            const data = await response.json();
            setFilteredData(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
        };

        fetchData(); 
    }, []);

    const redirectPage = (id)=>{
        setId(id)
        localStorage.setItem('myContextId', id);
        console.log("set localStorage id"+id)
        
        router.push({
            pathname: '/movie_details/info', 
        });
    }
    const columns = [
        // { Header:'id',
        //   accessor:'id'},
        { Header:'Name',
          accessor:'title'},
        { Header:'Poster',
          accessor:'poster_link',
          Cell: ({ cell: { value } }) => (
            <div className={`${styles['table-row']}`}>
                <div className={`${styles.image_container} peer-autofill:`}>
                <Image
                    src={value}
                    alt="image not found" width={50} height={50}
                    className={`${styles.image} `} unoptimized
                />
                </div>
            </div>
          ),
        },
        { 
            Header:'Stars',
            accessor:'starring'
        },
        { 
            Header:'Director',
            accessor:'directed_by'
        },
    { Header:'Screen Play',
      accessor:'screenplay_by'},
    { Header:'Dialogue',
      accessor:'dialogues_by'},
    { Header:'Story',
      accessor:'story_by'},
    { Header:'Producers',
      accessor:'produced_by'},
    // { Header:'Actor/Actress',
    //   accessor:'Starring'},
    { Header:'Cinematography',
      accessor:'cinematography'},
    { Header:'Edited',
      accessor:'edited_by'},
    { Header:'Musics',
      accessor:'music_by'},
    { Header:'Production Company',
      accessor:'productioncompany'},
    { Header:'Distributors',
      accessor:'distributed_by'},
    { Header:'Release date',
      accessor:'release_date'},
      { Header:'Running time',
      accessor:'running_time'},
      { Header:'Country',
      accessor:'country'},
      { Header:'Language',
      accessor:'language'},
      { Header:'Budget',
      accessor:'budget'},
      { Header:'Box office',
      accessor:'box_office'},
      ] 
    const Columns = useMemo(()=>columns,[])
    const tableInstance = useTable({columns:Columns,data: filteredData},useGlobalFilter,useSortBy,usePagination)
    const {getTableProps,getTableBodyProps,headerGroups,rows,page,prepareRow,
        state:globalFilterState,
        setGlobalFilter,
        nextPage,previousPage,
        canNextPage,canPreviousPage,
        pageOptions,state:paginationState
        } = tableInstance
    const {globalFilter} = globalFilterState;
    const {pageIndex} = paginationState
    
    return (
        <div>
            {isLoading ? (
        <div className={``}> 
        <Box sx={{ width: '100%' }}>
          <LinearProgress className={`${stylesMainPage.mainPage__progress_bar}`} sx={{ backgroundColor: 'yellow' }} size={30}/>
    </Box>
        
    </div>
      ) : (
        <>
        <div className={`${styles.moviedatabase}`}>

            <div className={`${styles.moviedatabase__search} w-auto mx-5`}>
                <SearchBox filter={globalFilter} setFilter={setGlobalFilter}  />
            </div>
            <div className={`${styles.moviedatabase__container}`}>
            <table {...getTableProps()} className={`${styles.moviedatabase__table}`} style={{ border: '1px solid black' }}>
                <thead className={` ${styles.moviedatabase__header}`}>
                    {headerGroups.map((headerGroup,index)=>(
                        <tr key={index} {...headerGroup.getHeaderGroupProps()} >
                            {headerGroup.headers.map((column,index)=>(
                                <th key={index} {...column.getHeaderProps(column.getSortByToggleProps())} >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted?(column.isSortedDesc?<AiFillDownCircle/>:<AiFillUpCircle/>):''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className={` ${styles.moviedatabase__body}`}>
                    {page.map((row,index)=>{
                        prepareRow(row)
                        return(

                            <tr key={index} {...row.getRowProps()} className={`${styles.moviedatabase_row}`}  onClick={()=>redirectPage(row.original.id)}>
                            
                                {
                                    row.cells.map((cell,index)=>{
                                      const cellValue = cell.value || '';
                                        return <td  className={`${styles.moviedatabase__columnCell}`}key={index} {...cell.getCellProps()}>
                              {cell.column.id === 'starring' || cell.column.id === 'produced_by'? (cellValue===undefined || cellValue === null || cellValue==='' || cellValue==="None" ? cell.render('Cell'):cellValue.join(", ")):cell.render('Cell')}
                                       {/* {cell.render('Cell')} */}
                                       </td>
                                    })
                                }
                                
                            </tr>
                                       
                        )
                    })}
                </tbody>
            </table>
            </div>
        <div>
        
        <button className={`${stylesMainPage.mainPage__button}`} onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
        <span>Page</span>{' '}
        <strong>
        {pageIndex+1} of {pageOptions.length}
        </strong>{' '}
<button className={`${stylesMainPage.mainPage__button}`} onClick={() => nextPage()} disabled={!canNextPage}>Next</button>

             </div>
             
      

        </div>

    </>)}
    </div>
  )
}

export default MovieDatabase

