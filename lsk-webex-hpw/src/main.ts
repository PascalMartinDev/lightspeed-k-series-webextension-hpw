import dotenv from 'dotenv';

dotenv.config();

const TEST_ENV: string = process.env.AWS_REGION || 'default-region';
// Dom Content Loaded Script to initialise
document.addEventListener('DOMContentLoaded', () => {
  const accountElement = document.getElementById('account');
  if (accountElement) {
    accountElement.innerHTML = TEST_ENV;
  } else {
    console.error("Element with ID 'account' not found");
  }
});
