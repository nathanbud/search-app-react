import React, {useState} from 'react';


const Search = (props) =>{

    const [searchValue, setSearchValue] = useState(""); 

    const handleSearchInputChanges = (e)=>{
        setSearchValue(e.target.value);
    }

    const resetInputField = () =>{
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }
    return(
        <div>
            <form action="" className="search">
                <input type="text" value={searchValue} onChange={handleSearchInputChanges}/>
                <input type="submit" value="SEARCH" onClick={callSearchFunction}/>
            </form>
        </div>
    )
}

export default Search;