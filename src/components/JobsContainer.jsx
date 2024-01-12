import React from "react";
import { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import Job from "./Job";
import Loading from "./Loading";
import { getAllJobs } from "../features/alljobs/allJobsSlice";
import PageBtnContainer from "./PageBtnContainer";
const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchType,
    searchStatus,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchType, searchStatus, sort]);
  if (isLoading) {
    return <Loading />;
  } else if (jobs.length === 0) {
    return <h1>No job to display</h1>;
  } else {
    return (
      <Wrapper>
        <h5>
          {totalJobs} Job{jobs.length > 1 && "s"} found{" "}
        </h5>
        <div className="jobs">
          {jobs.map((job) => {
            return <Job key={job._id} {...job} />;
          })}
        </div>
        {numOfPages > 1 && <PageBtnContainer />}
      </Wrapper>
    );
  }
};

export default JobsContainer;
