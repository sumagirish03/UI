import React, { useEffect, useState, createContext } from "react";
import Snapshot from "../Snapshot/Snapshot";
import MyApplications from "../MyApplications/MyApplications";
import JobsForm from "../JobForm/JobForm";
import JobListing from "../JobListing/JobListing";
import axios from "axios";
import isLoggedIn from "../util";
import "./Dashboard.css";
import AccountError from "../AccountError/AccountError";

export const setAppliedJobsContext = createContext();
export const setEligibleJobsContext = createContext();
export const setAllJobsContext = createContext();

export const appliedJobsContext = createContext();
export const eligibleJobsContext = createContext();
export const allJobsContext = createContext();

export const shortlistedContext = createContext();
export const interviewingContext = createContext();
export const rejectedContext = createContext();
export const offeredContext = createContext();

export const setShortlistedContext = createContext();
export const setInterviewingContext = createContext();
export const setRejectedContext = createContext();
export const setOfferedContext = createContext();

function Dashboard() {
    const [response, setResponse] = useState([]);
    const [search, setSearch] = useState("");
    const [accountStatus, setAccountStatus] = useState(false);

    const [allJobs, setAllJobs] = useState(0);
    const [eligibleJobs, setEligibleJobs] = useState(0);
    const [appliedJobs, setAppliedJobs] = useState(0);

    const [shortlisted, setShortlisted] = useState(0);
    const [interviewing, setInterviewing] = useState(0);
    const [rejected, setRejected] = useState(0);
    const [offered, setOffered] = useState(0);

    const fetchJobsDetails = async () => {
        const response = await axios.get("/jobs");
        setResponse(response.data);
    };

    useEffect(() => {
        const check = async () => {
            setAccountStatus(await isLoggedIn());
        };

        check();
    }, []);

    const handleinputChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        fetchJobsDetails();
    }, []);

    if (accountStatus) {
        return (
            <appliedJobsContext.Provider value={appliedJobs}>
                <eligibleJobsContext.Provider value={eligibleJobs}>
                    <allJobsContext.Provider value={allJobs}>
                        <setAllJobsContext.Provider value={setAllJobs}>
                            <setAppliedJobsContext.Provider value={setAppliedJobs}>
                                <setEligibleJobsContext.Provider value={setEligibleJobs}>
                                    <setInterviewingContext.Provider value={setInterviewing}>
                                        <setShortlistedContext.Provider value={setShortlisted}>
                                            <setOfferedContext.Provider value={setOffered}>
                                                <setRejectedContext.Provider value={setRejected}>
                                                    <interviewingContext.Provider value={interviewing}>
                                                        <shortlistedContext.Provider value={shortlisted}>
                                                            <rejectedContext.Provider value={rejected}>
                                                                <offeredContext.Provider value={offered}>
                                                                    <div className="dashboard">
                                                                        <Snapshot />
                                                                        <MyApplications />
                                                                        <JobsForm
                                                                            handleinputChange={handleinputChange}
                                                                            heading="All Jobs"
                                                                        />
                                                                        <JobListing
                                                                            search={search}
                                                                            response={response}
                                                                        />
                                                                    </div>
                                  ;
                                </offeredContext.Provider>
                                                            </rejectedContext.Provider>
                                                        </shortlistedContext.Provider>
                                                    </interviewingContext.Provider>
                                                </setRejectedContext.Provider>
                                            </setOfferedContext.Provider>
                                        </setShortlistedContext.Provider>
                                    </setInterviewingContext.Provider>
                                </setEligibleJobsContext.Provider>
                            </setAppliedJobsContext.Provider>
                        </setAllJobsContext.Provider>
                    </allJobsContext.Provider>
                </eligibleJobsContext.Provider>
            </appliedJobsContext.Provider>
        );
    } else {
        return <AccountError />;
    }
}

export default Dashboard;
