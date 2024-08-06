const checkPromiseValidity = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  };

  const request = (url, options) => {
    return fetch(url, options).then(checkPromiseValidity);
  }

  export { checkPromiseValidity, request };