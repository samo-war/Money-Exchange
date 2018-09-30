// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let change = currency;

  if (change > 10000) {
    return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' };
  }

  const moneyMap = [
    { value: 50, name: 'H' }, { value: 25, name: 'Q' },
    { value: 10, name: 'D' }, { value: 5, name: 'N' },
    { value: 1, name: 'P' }
  ];

  return moneyMap.reduce((acc, cur) => {
    const fullNumber = Math.floor(change / cur.value);

    if (fullNumber > 0) {
      acc[cur.name] = fullNumber;
      change -= fullNumber * cur.value;
    }

    return acc;
  }, {});
}