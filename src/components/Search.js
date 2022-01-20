import React from 'react';

const Search = () => {
  return (
    <>
        <form class="row g-3">
            <div class="col-auto">
                <input type="text" class="form-control-plaintext" id="" />
            </div>

            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Buscar</button>
            </div>
        </form>
    </>
  );

};

export default Search;
