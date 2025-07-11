// MOCK DATA FOR TESTING PURPOSES

const testCustomerData = {
  error: null,
  data: {
    externalReferences: ['Group:Wine Club'],
    clientCount: 0,
    totalAmount: 11400,
    transactionLines: [
      {
        quantity: 200,
        parentLine: null,
        amount: 0,
        modificationDate: '2025-07-08T05:21:20.006Z',
        unitAmount: 2300,
        accountingGroupName: 'MadFish',
        accountingGroupId: '1255358811079014',
        discounts: [],
        isDraft: false,
        identifier: '--4444-TEST',
        itemSku: '21-MDF-CSME-DOM12',
        text: '2021 MadFish Cabernet Sauvignon Merlot',
        itemIdentifier: '1255358811079015',
        creationDate: '2025-07-08T05:21:20.006Z',
        fiscalIdentifier: 'FID:S:--45t-TEST',
      },
      {
        quantity: 100,
        parentLine: null,
        amount: 3600,
        modificationDate: '2025-07-08T05:21:20.006Z',
        unitAmount: 4000,
        accountingGroupName: 'Howard Park',
        accountingGroupId: '1255358811078808',
        discounts: ['Discount4'],
        isDraft: false,
        identifier: '--4445-TEST',
        itemSku: '22-SCO-SHXX-DOM6',
        text: '2022 Howard Park Scotsdale Shiraz',
        itemIdentifier: '1255358811079862',
        creationDate: '2025-07-08T05:21:20.006Z',
        fiscalIdentifier: 'FID:S:--46b-TEST',
      },
    ],
    consumer: {
      lastname: 'Smith',
      city: '',
      firstname: 'John',
      addressLine1: '',
      email: 'johnsmith@mytestemail.com',
      identifier: '2345-acvg....',
      phoneNumber1: '+61400400400',
      consumer: '5554746',
      zipCode: '',
      addressLine2: '',
    },
    currentInsertionPhase: 0,
    profileId: null,
    discounts: [],
    isDraft: true,
    profileName: '',
    openDate: '2025-07-08T05:21:02.347Z',
    identifier: '8R44G7m-TEST',
    paidAmount: 0,
    paymentLines: [],
    name: '',
    fiscalIdentifier: 'FID:A:8R44G-Test',
  },
};

export function pos_getCurrentAccount(callback: (response: any) => void): void {
  // Simulate an asynchronous operation to fetch the current account
  setTimeout(() => {
    callback(testCustomerData);
  }, 1000);
}

export const initialiseExtension = (): void => {};

export const openNewCustomerForm = (): void => {};

export const closeWebExtension = (): void => {};
