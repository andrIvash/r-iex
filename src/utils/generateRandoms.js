/**
 * @param {number} quantity
 * @returns {number[]}
 */
const generateRandoms = (quantity) => {
  const arr = [];
  for(let i = 0; i < quantity; i++) {
    const n = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(n) === -1) arr.push(n);
  }
  return arr;
};

export default generateRandoms
