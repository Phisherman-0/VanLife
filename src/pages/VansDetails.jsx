import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VansDetails = () => {
    const [data, setData] = useState();
    const param = useParams()
    
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(`/api/vans/${param.id}`)
            const result = await response.json()
            setData(result.vans)
        }
        fetchData()
    },[])


    return(
        <>
            <div className="van-detail-container">
                {data ? (
                    <div className="van-detail">
                        <img src={data.imageUrl} />
                        <i className={`van-type ${data.type} selected`}>
                            {data.type}
                        </i>
                        <h2>{data.name}</h2>
                        <p className="van-price"><span>${data.price}</span>/day</p>
                        <p>{data.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                ) : <h2>Loading...</h2>}
            </div>
        </>
    )
}

export default VansDetails;