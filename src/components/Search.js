import React from 'react';
import './Search.css';

const Search = ({setSearchValue, searchItem}) => {

    
    const handleChange = (e) => {
        setSearchValue(e.target.value);
        searchItem(e.target.value);
    }

    return (
        <>
            <form className="row align-items-center gap-2">
                <div className="col-lg-10 col-sm-8 ">
                    <input type="text" className="form-control-plaintext" onChange={handleChange} placeholder='Ingrese código o descripción'/>
                </div>

                <div className="col-lg-1 col-sm-4 ">
                    <button type="submit" className="btn-search" onClick={(e)=> e.preventDefault()}>Buscar</button>
                </div>
            </form>
        </>
    );

};

export default Search;
