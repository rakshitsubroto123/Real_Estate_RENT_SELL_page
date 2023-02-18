import React, { useState } from 'react'
import Card from '../card/Card'
import dummyData from '../../assets/dummyData.js';
import "./home.css"

const Home = () => {
    const [filterValue, setFilterValue] = useState({
        location: "",
        date: "",
        priceRange: "",
        propertyType: "",
    });
    const [searchBarValue, setSearchBarValue] = useState("");
    const handleSearchBarValue = (e) => {
        // let val = e.target.value
        setSearchBarValue(e.target.value);
        setNewDummyData(dummyData.filter((item) => (item.location.toLowerCase().includes((searchBarValue).toLowerCase())) || (item.name.toLowerCase().includes((searchBarValue).toLowerCase())) || (item.propertyType.toLowerCase().includes(searchBarValue.toLowerCase())) || (item.price <= Number(searchBarValue)))
        )
    }
    const [newDummyData, setNewDummyData] = useState(dummyData);
    const propertyTypeArray = ["Houses", "Banglows", "Flats", "Huts"];
    const priceRangeArray = [{ low: 0, high: 10000 }, { low: 0, high: 500 }, { low: 500, high: 2500 }, { low: 2500, high: 33500 }, { low: 3500, high: 5000 }];

    const keys = ["location", "propertyType"];

    const handleChange = (e) => {
        setFilterValue({
            ...filterValue,
            [e.target.name]: e.target.value
        });

    }

    //Search bar functionality
    const filter = (data) => {

        return data.filter((item) => (item.location.toLowerCase().includes((filterValue.location).toLowerCase())) && (item.propertyType.toLowerCase().includes(propertyTypeArray[Number(filterValue.propertyType)].toLowerCase())) && (item.price >= priceRangeArray[Number(filterValue.priceRange)].low) && (item.price <= priceRangeArray[Number(filterValue.priceRange)].high))

    }
    const handleFilterClick = () => {
        setNewDummyData(filter(dummyData));

    }

    return (

        <div className='main'>
            <div className='outer'>
                <div className='headsearch'>
                    {/* Serach bar */}
                    <h2>Search properties to rent</h2>
                    <input onChange={handleSearchBarValue} type="text" placeholder="Search with Search Bar" className='searchbar' value={searchBarValue} name="searchBarValue" />
                </div>
                <div className='property'>
                    <ul className='prope'>
                        <li>
                            {/* location filter */}
                            <h4 className='text'>Location</h4>
                            <input onChange={handleChange} type="text" placeholder="eg. New York, USA" className='location pro' name="location" value={filterValue.location} />
                        </li>
                        <div className='line'></div>
                        <li>
                            {/* Ready to move in date */}
                            <h4 className='text'>When</h4>
                            <input type="date" placeholder='Select date' name="date" value={filterValue.date} onChange={handleChange} />
                        </li>
                        <div className='line'></div>
                        <li>
                            {/* Price list */}
                            <h4 className='text'>Price</h4>
                            <select name="priceRange" className='drop p1' value={filterValue.priceRange} onChange={handleChange}>
                                <option className='text' value="0">Select Price Range</option>
                                <option className='text' value="1">0-$500</option>
                                <option className='text' value="2">$500-$2,500</option>
                                <option className='text' value="3">$2,500-$3,500</option>
                                <option className='text' value="4">$3,500-$5,000</option>
                            </select>
                        </li>
                        <div className='line'></div>
                        <li>
                            {/* Property type */}
                            <h4 className='text'>Property Type</h4>
                            <select className='drop p1' name="propertyType" value={filterValue.propertyType} onChange={handleChange}>
                                <option className='text' value="0">Houses</option>
                                <option className='text' value="1">Banglows</option>
                                <option className='text' value="2">Flats</option>
                                <option className='text' value="3">Huts</option>
                            </select>
                        </li>
                        <div className='line'></div>
                        <li>
                            {/* Button to display the result of the filter */}
                            <div ClassName="wrapper">
                                <button className="btn" onClick={handleFilterClick}>Search</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='cardItem'>
                    {
                        // Card-Data from the dummyData.js is mapped to its field
                        newDummyData.map((data, index) => (
                            <Card data={data} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home