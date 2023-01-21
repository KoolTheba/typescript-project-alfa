import {subDays, format} from 'date-fns';

// date-fns library used for this example (https://date-fns.org/docs/Getting-Started)
// date-fns supports TS
const date = new Date(1998, 1, 28);
const timePassed = subDays(date, 30);
const formatDate = format(timePassed, 'dd/MM/yyyy');

console.log('DATE', formatDate);


