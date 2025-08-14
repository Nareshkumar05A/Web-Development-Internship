const userContainer = document.getElementById("user-container");
const errorMessage = document.getElementById("error-message");
const reloadBtn = document.getElementById("reload-btn");

async function fetchUsers() {
  userContainer.innerHTML = "";
  errorMessage.textContent = "";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch data. Status: " + response.status);
    }

    const users = await response.json();

    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      userContainer.appendChild(card);
    });

  } catch (error) {
    errorMessage.textContent = "❌ Error: " + error.message;
  }
}

reloadBtn.addEventListener("click", fetchUsers);
fetchUsers();
