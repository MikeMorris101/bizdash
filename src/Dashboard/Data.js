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

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function format(num) {
  return `$${num} Billion`;
}
export const tableRows = months.map((month, i) => ({
  month,
  phones: format(chartData[0].data[i]),
  services: format(chartData[1].data[i]),
  laptops: format(chartData[2].data[i]),
  tablets: format(chartData[3].data[i]),
}));

export const tableColumns = [
  {
    width: 240,
    label: 'Month',
    dataKey: 'month',
  },
  {
    width: 240,
    label: 'Phones',
    dataKey: 'phones',
  },
  {
    width: 240,
    label: 'Services',
    dataKey: 'services',
    numeric: true,
  },
  {
    width: 240,
    label: 'Laptops',
    dataKey: 'laptops',
    numeric: true,
  },
  {
    width: 240,
    label: 'Tablets',
    dataKey: 'tablets',
    numeric: true,
  },
];
