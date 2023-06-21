const wordSearch = (letters, word) => {
  // Join letters from horizontal array into string to compare with "word" argument:
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // Imported transpose function from previous week's work:
  // (https://gist.github.com/rebeccaariss/dd21a650d2a1af5cd58b69dd531cd898)
  const transpose = function(letters) {
    const rows = letters.length;
    const columns = letters[0].length;

    const transposed = [];

    for (let i = 0; i < columns; i++) {
      const tRow = [];
      for (let j = 0; j < rows; j++) {
        tRow.push(letters[j][i]);
      }
      transposed.push(tRow);
    }
    letters = transposed;

    return letters;
  };

  const transposedLetters = transpose(letters);

  // Take the new arrays containing letter values from vertical columns
  // Join those letters into a string to compare with the "word" argument:
  for (const row of transposedLetters) {
    const stringRow = row.join('');
    if (stringRow.includes(word)) {
      return true;
    }
  }

  // If word has not been found in rows or columns, we can return false:
  return false;
};

module.exports = wordSearch;

// Week 5 pair programming activity completed by @andrijana85 and @rebeccaariss