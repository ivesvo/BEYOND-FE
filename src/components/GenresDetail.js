import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const GenresDetail = (props) => {
    let [artistList, setArtistList] = useState([])
    let history = useHistory()

    useEffect(() => {
            axios.get(`${process.env.APP_URL}/artists/genres/${props.genre.code}`).then((res) => {
                console.log("artistList", res.data)
                setArtistList(res.data.data)
            })
    },[props.genre])
    return (

        <div>
            {
                props.genre ?
                    <div>
                        <h1 className="times breadcrumbs">{props.genre.description}</h1>
                    </div>

                    : <div></div>
            }
                     <div className="tinytext" style={{color:"white", paddingTop:"30px",}}>RELATED ARTISTS</div>
                     <h1>{artistList && artistList.map(item=><div onClick={()=>history.push({pathname:`/artists/${item.title}`})}>{item.title}</div>)}</h1> 


        </div>
    )
}

export default GenresDetail
