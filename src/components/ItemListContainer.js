import React, {useEffect, useState} from 'react';
import ItemCard from './ItemCard';
import './ItemListContainer.css';
import data from '../data/data.json';
import Search from './Search';

const ItemListContainer = () => {

    const [dataProduct, setDataProduct] = useState([]);

    useEffect(() => {
        //simulamos tiempo de respuesta
        setTimeout(() => {
            setDataProduct(data);
        }, 3000)

    }, [])
    
    

    return(  
        <div className="container mt-5 mb-5">

            <div className="row">
                <Search />
            </div>
            
            <div className="row">
                {
                    dataProduct.map( dataCard => (
                        <div className="col-lg-3 col-md-4 col-sm-12 mt-5" key={dataCard.id}>
                            <ItemCard props={dataCard}/>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )
};

export default ItemListContainer;
