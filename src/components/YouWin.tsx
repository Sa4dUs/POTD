/* eslint-disable @next/next/no-img-element */
import React from 'react';
import copy from 'clipboard-copy';

const YouWin = ({ pokemonName, pokemonSprite, id, tries }: any) => {
  const handleShareClick = () => {
    const textToCopy = `I guessed the #${id} PokéGuess Pokemon of the day in ${tries}!
    \nCheck it out at ${process.env.NEXT_PUBLIC_BASE_URL}!`;

    // Copy text to clipboard
    copy(textToCopy);

    // You can provide feedback to the user that the text has been copied if needed
    console.log('Text copied to clipboard:', textToCopy);
  };

  return (
    <div className="bg-green-500 text-white p-4 rounded-md shadow-md text-center">
      <h2 className="text-2xl font-bold mb-2">VICTORY!</h2>
      <p className="mb-4">You guessed: {pokemonName}</p>
      <img src={pokemonSprite} alt={pokemonName} className="w-24 h-24 mx-auto mb-4" />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleShareClick}
      >
        Share
      </button>
    </div>
  );
};

export default YouWin;
