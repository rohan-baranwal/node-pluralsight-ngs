const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  1000
);

clearTimeout(timerId);
