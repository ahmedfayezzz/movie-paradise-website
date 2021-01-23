import styles from "../styles/SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import {v4 as uuid} from 'uuid'

const SearchBar = ({show,setShow}) => {
  const [searchValue,setSearchValue]=useState('')
  const [selectValue,setSelectValue]=useState('All')
  const selectRef=useRef(null)
  useEffect(()=>{
    selectRef.current.style.width=`${selectValue.length*13}px`
  },[selectValue])
  const handleChange=(e)=>{
    setSearchValue(e.target.value)
  }
  const handleClick=()=>{
    setShow(false)
    setSearchValue('')
  }
  return (
    <div className={show ? `${styles.searchBarContainer} ${styles.showContainer}` :`${styles.searchBarContainer} `}>
      <select 
        ref={selectRef}
        className={styles.selectInput}
        value={selectValue} 
        onChange={(e)=>setSelectValue(e.target.value)}
      >
        {options.map(option=>(
          <option key={uuid()} value={option.toLocaleLowerCase()}>{option}</option>
        ))}
      </select>
      <div className={styles.textInputContainer}>
        <input
          type="text"
          className={styles.textInput}
          placeholder="Find Movies, TV shows, Celebrities and more"
          onChange={(e)=>handleChange(e)} 
          value={searchValue}
        />
        <button
          className={styles.closeButton}
          onClick={handleClick}
        >
          <MdClose style={{ fontSize: "inherit", display: "block" }} />
        </button>
      
      </div>
      <button
        className={styles.searchButton}
        onClick={handleClick}
      >
        <FaSearch style={{ fontSize: "inherit", display: "block" }} />
      </button>
    </div>
  );
};
const options=[
  'All', 'Movies', 'TV shows', 'Celebs'
]
export default SearchBar;