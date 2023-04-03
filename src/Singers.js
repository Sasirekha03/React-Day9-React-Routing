import React from 'react';

const Singers = () => {
  const singersList = [
    { name: 'Adele', year: 1988 },
    { name: 'Beyonce', year: 1981 },
    { name: 'Ed Sheeran', year: 1991 },
    { name: 'Justin Bieber', year: 1994 },
    { name: 'Lady Gaga', year: 1986 },
    { name: 'Taylor Swift', year: 1989 },
  ];

  return (
    <div>
      <h1>List of Singers</h1>
      <ul>
        {singersList.map((singer) => (
          <li key={singer.name}>
            {singer.name} ({singer.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Singers;