const converter = (curr, value) => {
  let results = value * 6.05;
  switch (curr) {
    case 'USD':
      return results;
      break;
    case 'CAD':
      return results / 1.26;
      break;
    case 'CNY':
      return results / 6.46;
      break;
    case 'GBP':
      return results / 0.73;
      break;
    default:
      break;
  }
};

export default converter;
