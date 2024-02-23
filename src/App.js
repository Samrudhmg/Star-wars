import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetCard from './components/PlanetCard';
import Pagination from './components/Pagination';
import Loader from './components/Loader';
import './App.css';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlanets();
  }, [currentPage]);

  const fetchPlanets = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://swapi.dev/api/planets/?page=${currentPage}`);
      setPlanets(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 10)); // Assuming 10 planets per page
    } catch (error) {
      console.error('Error fetching planets:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="app">
      <h1>Star Wars Planets Directory</h1>
      <h3>Explore the planets of the Star Wars universe</h3>
      <div className="planets-container">
        {loading ? (
          <Loader />
        ) : (
          planets.map((planet) => <PlanetCard key={planet.name} planet={planet} />)
        )}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
