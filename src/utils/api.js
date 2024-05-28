const baseUrl = "http://localhost:3001";

const resolveRequest = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

function getItems() {
  return fetch(`${baseUrl}/items`).then(resolveRequest);
}

function postItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, weather, imageUrl }),
  }).then(resolveRequest);
}

function deleteItem({ _id }) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
  }).then(resolveRequest);
}

export { getItems, postItem, deleteItem };
