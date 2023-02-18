import React, {useState} from 'react'
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
import IconButton from '@mui/material/IconButton';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./card.css"

const Card = ({data}) => {

    return (
        <div className='out' >

            {/* First div the upperpart of the card */}
            <div className='first'>
                {/* House Image */}
                <img src={data.imgUrl} className="imag" alt="img.png"/>
                {/* If in the dummydata, the popular is set true then it will display the popular tag else it not not show the tag */}
                {data.popular==true && <span className="popular_span">
                    <IconButton>
                        <AutoAwesomeIcon className='icon-top'/>
                    </IconButton>POPULAR
                </span>}
            </div>

            {/* second div for the lowerpart of the card */}
            <div className='sec'>
                <div className='sec-in'>
                    <div className='rate'>
                        <span className="rate_span"><strong>${data.price}</strong>/month</span>
                        <span className="rate_heart_icon">
                            {/* Heart icon on the right side of each card */}
                            <IconButton>
                                <FavoriteBorderIcon className='icon heart'/>
                            </IconButton>
                        </span>
                    </div>
                    <div className='firhead'>
                        <span className='firhead_span1'>{data.name}</span>
                        <span className='firhead_span2'>{data.location}</span>
                    </div>
                    {/* A thin line to seperate the name and location with the propert specifications */}
                    <hr className='line2'/>
                    <div className='accessory'>
                        {/* No. of bedrooms */}
                        <IconButton>
                            <BedIcon className='icon'/>
                        </IconButton>
                        <div className='icontext'>{data.noOfBeds}Beds</div>
                        {/* No. of bathrooms */}
                        <IconButton>
                            <BathtubIcon className='icon'/>
                        </IconButton>
                        <div className='icontext'>{data.noOfBathroom}Bathrooms</div>
                        {/* Area of the property */}
                        <IconButton>
                            <CropLandscapeIcon className='icon'/>
                        </IconButton>
                        <div className='icontext'>{data.area.length}x{data.area.breadth}m<sup>2</sup></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card