import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentsList from './ResidentsList';

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    fetchResidents();
  }, [planet.residents]);

  const fetchResidents = async () => {
    try {
      const residentsData = await Promise.all(planet.residents.map((residentURL) => axios.get(residentURL)));
      setResidents(residentsData.map((resident) => resident.data));
    } catch (error) {
      console.error('Error fetching residents:', error);
    }
  };

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <ResidentsList residents={residents} />
    </div>
  );
};

export default PlanetCard;
