
// Dom Content Loaded Script to initialise
document.addEventListener('DOMContentLoaded', () => {
  const accountElement = document.getElementById('account');
  if (accountElement) {
    accountElement.innerHTML = "TEST: Html content loading!";
  } else {
    console.error("Element with ID 'account' not found");
  }
});

