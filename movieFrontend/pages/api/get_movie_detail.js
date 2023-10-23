import movieData from '@/data/tableData/movieData'
export default function handler(req, res) {

  const filteredData = movieData.find((item) => 
  { 
    const itemId = parseInt(item.id);
    const reqId=parseInt(req.query.id);
    return (itemId===reqId)
  }
  );
  res.status(200).json(filteredData);   
}