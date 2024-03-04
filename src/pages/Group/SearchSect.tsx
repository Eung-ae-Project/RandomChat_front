import React from "react";
import {Search} from "@pages/Group/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
const SearchSect=()=> {

    return (
        <Search>
            <form>
                <input type="text" placeholder="#해시태그로 검색하기"/>
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </form>
        </Search>
    )
}
export default SearchSect;