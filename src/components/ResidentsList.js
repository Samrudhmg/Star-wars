import React from 'react';

const ResidentsList = ({ residents }) => {
  return (
    <div className='resident'>
      <h3>Residents:</h3>
      {residents.length > 0 ? (
        <ul>
          {residents.map((resident) => (
            <li key={resident.name}>
              {resident.name} - Height: {resident.height}, Mass: {resident.mass}, Gender: {resident.gender}
            </li>
          ))}
        </ul>
      ) : (
        <p>No residents</p>
      )}
    </div>
  );
};

export default ResidentsList;
