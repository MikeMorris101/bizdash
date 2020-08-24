function generateDate(count, start, growth) {
  //create empty array
  const data = [];
  //loop over count
  for (let i = 0; i < count; i++) {
    //push a random number onto array
    data.push(Math.floor(start + Math.random() * i * growth));
  }
  //return array
  return data;
}

export const chartData = [
  {
    name: 'Phones',
    data: generateDate(12, 30, 5),
    color: '#03045E',
  },
  {
    name: 'Services',
    data: generateDate(12, 10, 0.2),
    color: '#0077B6',
  },
  {
    name: 'Laptops',
    data: generateDate(12, 6, 0.3),
    color: '#00B4D8',
  },
  {
    name: 'Tablets',
    data: generateDate(12, 5, 0.5),
    color: '#CAF0F8',
  },
];
