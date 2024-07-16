import { Link } from 'react-router-dom'
import '../server'
import { useEffect, useState } from 'react'

const Vans = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch ('/api/vans');
                const result = await response.json()
                setData(result.vans)
            }
            catch (error){
                console.log(error)
            }
        }
        fetchData()
        
    }, [])

    const vanElements = data.map(van => (
        <div to={`/vans/${van.id}`} key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3> 
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    console.log(data)

    return(
        <>
            <div className="van-list-container">
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        </>
    )
}

export default Vans;