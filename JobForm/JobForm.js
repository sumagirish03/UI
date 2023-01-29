import React from 'react'
import "./JobForm.css"
import Button from '@mui/material/Button'

function JobForm({ handleinputChange, heading }) {
    return (
        <div className='jobform-main'>
            <h3>{heading}</h3>
            <div className="jobform">
                <input type="text" placeholder='Title, Client, Location' className='jobform-input' onChange={(e) => handleinputChange(e)} />
                <Button variant="contained">Search</Button>
            </div>
            <div className='jobform-options'>
                <select name='alljobs' className='jobsform-options-select'>
                    <option value='All Jobs'>All Jobs</option>
                </select>

                <select name='industry' className='jobsform-options-select'>
                    <option value='Industry'>Industry</option>
                    <option value='Industry'>Software</option>
                    <option value='Industry'>Management</option>
                </select>

                <select name='location' className='jobsform-options-select'>
                    <option value='Location'>Location</option>
                    <option value='Bangalore'>Bangalore</option>
                    <option value='Hyderabad'>Hyderabad</option>
                    <option value='Mumbai'>Mumbai</option>
                    <option value='Chennai'>Chennai</option>
                </select>

                <select name='jobtype' className='jobsform-options-select'>
                    <option value='All Jobs'>Job Type</option>
                    <option value='Full Time'>Full Time</option>
                    <option value='Part Time'>Part Time</option>
                    <option value='Remote'>Remote</option>
                </select>

                <select name='posteddate' className='jobsform-options-select'>
                    <option value='PostedDate'>Posted Date</option>
                </select>
            </div>
        </div>
    )
}

export default JobForm
