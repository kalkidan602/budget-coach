document.addEventListener("DOMContentLoaded", () => {
  const deleteButton = document.getElementById("deleteMovie");

  if (deleteButton) {
    deleteButton.addEventListener("click", async () => {
      const movieId = deleteButton.dataset.id;

      const response = await fetch(`/movies/${movieId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        window.location.href = "/movies";
      }
    });
  }
});