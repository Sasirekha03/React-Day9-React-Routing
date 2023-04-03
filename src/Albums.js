import React from 'react';

const Albums = () => {
  const albumsList = [
    { name: '21', singer: 'Adele' },
    { name: 'Lemonade', singer: 'Beyonce' },
    { name: '÷', singer: 'Ed Sheeran' },
    { name: 'Purpose', singer: 'Justin Bieber' },
    { name: 'Born This Way', singer: 'Lady Gaga' },
    { name: '1989', singer: 'Taylor Swift' },
  ];

  return (
    <div>
      <h1>List of Albums</h1>
      <ul>
        {albumsList.map((album) => (
          <li key={album.name}>
            {album.name} by {album.singer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;