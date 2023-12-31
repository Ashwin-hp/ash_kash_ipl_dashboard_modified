import React, { useEffect, useState } from 'react';
import MatchDetailCard from '../components/MatchDetailCard';
import { useParams } from 'react-router-dom';
import { YearSelector } from '../components/YearSelector';
import "./MatchPage.scss";

const MatchPage = () => {

  const [matches, setmatches] = useState([]);
  const {teamName, year} = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
        const res = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
        const data = await res.json();
        setmatches(data);
    };
    fetchMatches();
  }, [teamName,year]);

  return (
    <div className="MatchPage">
            <div className="year-selector">
                <h3> Select Year </h3>
                <YearSelector teamName={teamName} />
            </div>
            <div>
                <h1 className="page-heading">{teamName} matches in {year}</h1>
                {
                    matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)
                }
            </div>

        </div>
  );
};

export default MatchPage;