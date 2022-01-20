// This function is a built-in in JS and executes asyncronously.
setTimeout(() => {
  console.log("Timer is done!");
}, 2000);

// Even if it is super fast, we can se it runs after the syncronous code.
console.log("Hello!");
console.log("Hi!");

// There is a problem with dependent async operations when using setTimeout.
// If we have a callback function which is called after a certain time,
// simulating a request-response process, then we can use this fetchData
// inside another setTimeout context:
const fetchData = (callback) => {
  setTimeout(() => {
    callback("Done!");
  }, 1500);
};

setTimeout(() => {
  console.log("Data timer is done!");
  fetchData((text) => {
    console.log(text);
  });
}, 2000);

// If we continue to nest async calls, we go deeper and deeper in a chain
// of timeouts. We can use promises to make things clearer.
const fetchDataWithPromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done with promise!");
    }, 1500);
  });
  return promise;
};

// Promises have the 'then' callable, which allows us to specify the resolve and
// reject methods. We can make a fluent interface to chain .then calls:
setTimeout(() => {
  console.log("Data timer with promises is done!");
  fetchDataWithPromise()
    .then((text) => {
      console.log(text);
      return fetchDataWithPromise();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);
