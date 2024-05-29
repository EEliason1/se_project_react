import { checkPromiseValidity } from "./utils";

const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkPromiseValidity);
}

function postItem({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, weather, imageUrl }),
  }).then(checkPromiseValidity);
}

function deleteItem({ _id }) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
  }).then(checkPromiseValidity);
}

export { getItems, postItem, deleteItem };
