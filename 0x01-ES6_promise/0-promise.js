const getResponseFromAPI = () => new Promise((resolve) => {
  // Simulating an asynchronous API call
  setTimeout(() => {
    const responseData = { message: 'API response data' };
    resolve(responseData);
  }, 1000);
});

export default getResponseFromAPI;
