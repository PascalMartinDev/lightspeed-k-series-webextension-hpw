// Dom Content Loaded Script to initialise 
document.addEventListener("DOMContentLoaded", () => {
  const accountElement = document.getElementById("account");
  if (accountElement) {
    accountElement.innerHTML = "TEST: Function Page Connected";
  } else {
    console.error("Element with ID 'account' not found");
  }
});
