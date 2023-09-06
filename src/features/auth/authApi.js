// A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
//   return new Promise(async (resolve) =>
    
//     const response = await fetch('https://localhost:8000')
//     const data = await response.json()
//     resolve({data})
//   );
// }

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('https://localhost:8000');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      reject(error); // Reject the promise in case of an error
    }
  });
}


