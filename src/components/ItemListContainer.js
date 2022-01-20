import React, {useEffect, useState} from 'react';
import ItemCard from './ItemCard';
import './ItemListContainer.css';
import data from '../data/data.json';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const ItemListContainer = () => {
    const [dataBase, setDataBase] = useState([])
    const [dataProduct, setDataProduct] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        //simulamos tiempo de respuesta
        setTimeout(() => {
            getData();
        }, 3000)

    }, [])

    const getData = () => {
        setDataProduct(data);
        setDataBase(data);
    }
    
    const searchItem = (keyword) =>{

        let result = dataBase.filter( (item) => {

            if(item.id.toString().includes(keyword) || item.description.toString().toLowerCase().includes(keyword.toLowerCase())){
                return item;
            }
        });

        setDataProduct(result);
    }
    

    return(  
        <div className="container mt-5 mb-5">

            <Search setSearchValue={setSearchValue} searchItem={searchItem}/>
            
            <div className="row">
                {
                    dataProduct.length > 0 ?
                        dataProduct.map( dataCard => (
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-5" key={dataCard.id}>
                                <ItemCard props={dataCard}/>
                            </div>
                            )
                        )
                        :
                        <div className="loading">
                            <div className="loading__container">
                                <FontAwesomeIcon icon={faClock} />
                                <p>Cargando productos...</p>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
};

export default ItemListContainer;
