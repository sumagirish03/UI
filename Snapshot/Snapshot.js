import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Snapshot.css';
import { Link } from "react-router-dom";

import {
    setAllJobsContext,
    setEligibleJobsContext,
    setAppliedJobsContext,
    allJobsContext,
    eligibleJobsContext,
    appliedJobsContext
} from '../Dashboard/Dashboard';

const Snapshot = () => {
    const allJobs = useContext(allJobsContext);
    const eligibleJobs = useContext(eligibleJobsContext);
    const appliedJobs = useContext(appliedJobsContext);

    const setAllJobs = useContext(setAllJobsContext);
    const setAppliedJobs = useContext(setAppliedJobsContext);
    const setEligibleJobs = useContext(setEligibleJobsContext);

    useEffect(() => {
        const fetch = async () => {
            const allJobsDetails = await axios.get('/jobs');
            setAllJobs(allJobsDetails.data.length);

            const appliedJobsDetails = await axios.get('/appliedjobs');
            setAppliedJobs(appliedJobsDetails.data.length);

            const eligibleJobsDetails = await axios.get('/eligiblejobs');
            setEligibleJobs(eligibleJobsDetails.data.length);
        };

        fetch();
    }, []);

    return (
        <div className="snapshot-main">
            <h3>Snapshot</h3>
            <div className="snapshot">
            <Link to="/jobsindomain"><div className="snapshot-alljobs">
                 <div className="arrow"><p>All Jobs</p>
                    <p>{allJobs}</p>
                </div></div></Link>

                <Link to="/eligiblejobs"><div className="snapshot-eligiblejobs">
                 <div className="arrow"> <p>Eligible Jobs</p>
                    <p>{eligibleJobs}</p>
                </div></div></Link>

                <Link to="/appliedjobs"><div className="snapshot-appliedjobs">
                <div className="arrow"> <p>Applied jobs</p>
                    <p>{appliedJobs}</p>
                </div></div></Link>
            </div>
        </div>
    );
};

export default Snapshot;
