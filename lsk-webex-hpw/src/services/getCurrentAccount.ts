// Function to get POS's Current account information:

export type TransactionLine = { [key: string]: string | number | null };

export interface Consumer {
  lastname: string;
  firstname: string;
  email: string;
  phoneNumber1: string;
}

export interface AccountResponse {
  data: {
    totalAmount: number;
    transactionLines: TransactionLine[];
    consumer: Consumer | null;
  };
}

export async function getCurrentAccount(): Promise<AccountResponse | null> {
  return new Promise((resolve, reject) => {
    const currentAccountResults = (response: AccountResponse) => {
      try {
        resolve(response);
      } catch (e) {
        console.error('Failed to parse response:', e);
        resolve(null);
      }
    };

    try {
      pos_getCurrentAccount(currentAccountResults);
    } catch (err) {
      console.error('Failed to get current account:', err);
      reject(err);
    }
  });
}
