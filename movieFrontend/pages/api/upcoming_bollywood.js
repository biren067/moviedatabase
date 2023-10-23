
import movieData from '@/data/tableData/movieData'
function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function handler(req, res) {
  const filteredData = movieData.filter((item) => 
  { 
    return (
    item.poster_link !== null 
    && item.poster_link !== "None" 
    && item.release_date !== null 
    && item.release_date !== "None" 
    && item.trailer !== null 
    && item.trailer !== "None" 
    && item.starring !== null
    && item.starring !== "None" 
    && item.starring.length > 0 
    && item.release_date >= getCurrentDate() 
  )

  }
  );
  function getRandom() {
    return Math.random() - 0.5;
  }

  filteredData.sort(getRandom);
  res.status(200).json(filteredData);
   
}