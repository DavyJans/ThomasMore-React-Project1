import {useState} from 'react';

const Search = ({handleSearch, handleCancel}) => {

    const [search, setSearch] = useState("");

    return (
                      
            <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={search} onChange={(e) => {setSearch(e.target.value);}}/>
                <button className='btn btn-primary' onClick={e => handleSearch(search)}>Search</button>
                <button className='btn btn-secondary' onClick={e => handleCancel()}>Clear</button>
            </div> 
    );

}

export default Search;