import React, { useContext } from 'react';
import './MyApplications.css';
import { Link } from 'react-router-dom'
import {
    shortlistedContext,
    interviewingContext,
    rejectedContext,
    offeredContext
} from '../Dashboard/Dashboard';

function MyApplications() {
    const shortlisted = useContext(shortlistedContext);
    const interviewing = useContext(interviewingContext);
    const rejected = useContext(rejectedContext);
    const offered = useContext(offeredContext);

    return (
        <div className="myapp-main">
            <h3>My Applications</h3>
            <div className="myapp">
                <Link to="/Shortlisted"><div className="myapp-shortlisted">
                    <div className="arrow"><p>Shortlisted</p>
                        <p>{shortlisted}</p>
                    </div></div> </Link>

                <Link to="/Interviewing"><div className="myapp-interviewing">
                    <div className="arrow">   <p>Interviewing</p>
                        <p>{interviewing}</p>
                    </div></div> </Link>

                <Link to="/Rejected"><div className="myapp-rejected">
                    <div className="arrow"><p>Rejected</p>
                        <p>{rejected}</p>
                    </div></div></Link>

                <Link to="/Offer"> <div className="myapp-offerRecieved">
                    <div className="arrow"><p>Offer Received</p>
                        <p>{offered}</p>
                    </div></div></Link>
            </div>
        </div>
    );
}

export default MyApplications;
