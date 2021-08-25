import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import { Loading } from '../Loading/Loading'
import { ItemList } from './ItemList'
import './ItemListContainer.css'

export const ItemListContainer = () => {

    const { catId } = useParams()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect( ()=> {
        setLoading(true)

        pedirDatos()
            .then(res => {

                if (catId) {
                    const arrayFiltrado = res.filter( prod => prod.category === catId)
                    setData( arrayFiltrado )
                } else {
                    setData(res)
                }
            })
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false)
            })

    }, [catId])

    return (
        <>
            {loading
            ? <div><Loading /></div>
            : <ItemList productos={data}/> 
            }
        </>
    )
}
