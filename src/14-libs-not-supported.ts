import { groupBy } from 'lodash';

const data = [
  {
    username: 'Teba',
    role: 'admin'
  },
  {
    username: 'John',
    role: 'seller'
  },
  {
    username: 'Jo',
    role: 'customer'
  },
]

const response = groupBy(data, (item) => item.role)
console.log('GROUPPED', response);
